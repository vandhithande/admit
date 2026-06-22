import Groq from "groq-sdk";
import { getAcceptanceRateByName } from "@/lib/colleges";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

const rateLimits = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(userId: string): boolean {
  const now = Date.now();
  const entry = rateLimits.get(userId);
  if (!entry || now > entry.resetAt) {
    rateLimits.set(userId, { count: 1, resetAt: now + 60_000 });
    return true;
  }
  if (entry.count >= 10) return false;
  entry.count++;
  return true;
}

type MessageParam = { role: "user" | "assistant"; content: string };

type Profile = {
  grade: number | null;
  intended_major: string;
  interests: string;
  gpa: string;
  sat_score: string;
  act_score: string;
  state: string;
  extra_context: string;
};

type Activity = {
  name: string;
  role: string;
  description: string;
  category: string;
  hours_per_week: number | null;
  weeks_per_year: number | null;
};

const KNOWLEDGE_BASE = `
--- KNOWLEDGE BASE: Specific Programs, Competitions, and Resources ---

SELECTIVE SUMMER PROGRAMS (apply early — most deadlines are Dec–Feb):
- RSI (Research Science Institute) @ MIT: math/science research, 6 weeks, fully free, deadline ~Jan 15. Most selective program in the US.
- SSP (Summer Science Program): astrophysics or biochemistry research, 5.5 weeks, ~$7k (generous aid), deadline ~Feb 1.
- PRIMES @ MIT: part-time year-round math research with MIT mentors, deadline ~Dec 1. Also PRIMES-USA for non-MA students.
- PROMYS @ Boston University: number theory deep dive, 6 weeks, merit aid available, deadline ~Mar 1.
- HCSSiM (Hampshire College Summer Studies in Math): 6 weeks, deadline ~Mar 1.
- Clark Scholars Program @ Texas Tech: STEM research, 7 weeks, paid $750 stipend, deadline ~Feb 15. Less known = less competitive.
- MITES / MOSTEC @ MIT: STEM, focuses on underrepresented students, fully free, deadline ~Feb.
- TASP (Telluride Association Summer Program): humanities/social science seminar, extremely selective, fully free, deadline ~Jan. Life-changing for humanities students.
- Yale Young Global Scholars: interdisciplinary, 2 weeks, ~$6k, rolling deadlines.
- NYU Summer STEM: research-based, NYC, less selective than RSI/SSP.
- Research internships at local universities: email professors directly with a cold email + resume. Far more accessible than people think.
- NIH Summer Internship Program: biomedical research, rising juniors+, free, deadline ~Mar 1. High prestige.
- Regeneron ISEF pipeline: local science fair → state → ISEF. Start freshman or sophomore year.

MATH COMPETITIONS (in order of difficulty):
- AMC 8 (middle school), AMC 10/12 (high school, Nov) → AIME → USAMO/USAJMO. This is THE math pipeline for top colleges.
- MATHCOUNTS: middle school only, but alumni have a huge leg up on AMC.
- ARML (American Regions Mathematics League): team competition, May.
- HMMT (Harvard-MIT Math Tournament): Feb and Nov, highly regarded.
- PUMAC (Princeton): fall.

SCIENCE COMPETITIONS:
- Science Olympiad: invitational → regional → state → nationals. 23 events across all sciences.
- USABO (US Biology Olympiad): open exam in Feb, semifinals in Apr, training camp in Jun.
- USAChO (Chemistry Olympiad): local section exam in spring.
- USAPHO (Physics Olympiad): F=ma exam in Jan, semifinals in Mar.
- Regeneron STS (Science Talent Search): top high school science research competition, deadline ~Nov.

COMPUTING:
- USACO (USA Computing Olympiad): Bronze → Silver → Gold → Platinum. Year-round online contests. A Gold/Platinum finish is extremely impressive.
- CyberPatriot: cybersecurity competition, fall.
- ACSL (American Computer Science League): monthly contests.
- Congressional App Challenge: build an app, free to enter, congressional district-based.

BUSINESS / LEADERSHIP:
- DECA: fall chapter competitions → state → nationals (Atlanta). 60+ competitive events.
- FBLA: similar structure to DECA, more traditional business topics.
- Model UN: local conferences → regional → NYMUN, HMUN, HNMUN. Start at local conferences.
- Speech & Debate (NSDA): accumulate points, qualify for nationals. Policy, LD, PF, Congress.
- Governors School programs: state-specific, highly selective, usually free, extremely well-regarded by admissions.

ARTS:
- YoungArts Foundation: apply by Oct 15. Leads to US Presidential Scholar in the Arts nominations. Visual art, writing, music, dance, theater.
- Interlochen Arts Camp: selective summer music/arts program, Michigan.
- Scholastic Art & Writing Awards: regional deadlines Dec–Jan. Gold Key → national.
- Berklee College of Music Summer Programs: for serious music students.

WRITING / JOURNALISM:
- Sewanee Young Writers' Conference: creative writing, competitive, summer.
- Kenyon Review Writers Workshop: poetry/fiction, summer.
- Teen Ink, Polyphony Lit, The Louisville Review (Teen): publish your work. Bylines matter.
- Start or run your school newspaper or literary magazine. Be editor-in-chief by junior year.

COURSE STRATEGY (by intended field):
- CS/Engineering: Skip AP CS Principles (too easy). Do AP CS A + pursue USACO + build real projects with GitHub. Colleges see GitHub.
- Pre-med/Biology: AP Bio + AP Chem + AP Physics 1 or C are the core trio. Research experience (wet lab) > shadowing. Start sophomore year.
- Mathematics: AP Calc BC is the floor, not the ceiling. Do AMC pipeline. Self-study linear algebra, number theory. Colleges love students who go beyond school curriculum.
- Humanities/Social Science: AP Lang + AP Lit + AP US History + AP Gov. Seek publication and recognition outside of class. TASP is the dream program.
- Business/Econ: DECA + AP Economics (Micro + Macro) + AP Stats. Start a small business or nonprofit — even tiny scale is fine.
- Environmental Science: Research > coursework. Find a local lab, professor, or environmental org. ISEF pipeline is ideal.

--- END KNOWLEDGE BASE ---`;

function buildSystemPrompt(
  profile: Profile | null,
  schools: { name: string; category: string }[],
  activities: Activity[]
): string {
  const hasProfile = profile && (
    profile.grade || profile.intended_major || profile.interests
  );

  const profileSection = hasProfile
    ? `=== STUDENT PROFILE ===
Grade: ${profile!.grade ? `${profile!.grade}th` : "not specified"}
Intended major / field: ${profile!.intended_major || "not specified"}
Interests: ${profile!.interests || "not specified"}
GPA: ${profile!.gpa || "not specified"}
SAT: ${profile!.sat_score || "not specified"}
ACT: ${profile!.act_score || "not specified"}
State: ${profile!.state || "not specified"}${profile!.extra_context ? `\nAdditional context the student provided: ${profile!.extra_context}` : ""}
=== END PROFILE ===`
    : `=== STUDENT PROFILE ===
NOT FILLED OUT. Ask for grade and main interests before giving program recommendations.
=== END PROFILE ===`;

  const reaches = schools
    .filter((s) => s.category === "reach")
    .map((s) => {
      const rate = getAcceptanceRateByName(s.name);
      return rate != null ? `${s.name} (${rate}% admit)` : s.name;
    });
  const targets = schools
    .filter((s) => s.category === "target")
    .map((s) => {
      const rate = getAcceptanceRateByName(s.name);
      return rate != null ? `${s.name} (${rate}% admit)` : s.name;
    });
  const safeties = schools
    .filter((s) => s.category === "safety")
    .map((s) => {
      const rate = getAcceptanceRateByName(s.name);
      return rate != null ? `${s.name} (${rate}% admit)` : s.name;
    });

  const schoolSection =
    schools.length === 0
      ? "School list: none added yet. Encourage the student to build their list."
      : [
          "School list:",
          reaches.length > 0 ? `  Reaches: ${reaches.join(", ")}` : null,
          targets.length > 0 ? `  Targets: ${targets.join(", ")}` : null,
          safeties.length > 0 ? `  Safeties: ${safeties.join(", ")}` : null,
        ]
          .filter(Boolean)
          .join("\n");

  const activitySection =
    activities.length === 0
      ? "Activities: none logged yet."
      : `Activities:\n${activities
          .map((a) => {
            const hours =
              a.hours_per_week || a.weeks_per_year
                ? ` — ${[
                    a.hours_per_week ? `${a.hours_per_week} hrs/wk` : null,
                    a.weeks_per_year ? `${a.weeks_per_year} wks/yr` : null,
                  ]
                    .filter(Boolean)
                    .join(", ")}`
                : "";
            const role = a.role ? ` (${a.role})` : "";
            return `- ${a.name}${role}${hours}${a.description ? `: ${a.description}` : ""}`;
          })
          .join("\n")}`;

  return `You are an elite private college counselor — the kind that costs $500/hr. Your entire value is giving HYPER-SPECIFIC, actionable advice that a generic counselor would never give.

STRICT RULES — never break these:
1. NEVER give generic advice. Every recommendation must be a real named program, competition, course, or resource.
2. BAD: "Consider applying to summer research programs." GOOD: "Apply to RSI (deadline Jan 15, free), Clark Scholars (deadline Feb 15, paid stipend), and cold-email 3 professors at UT Austin by March."
3. BAD: "Take challenging courses." GOOD: "Take AP Physics C: Mechanics + E&M back-to-back junior/senior year. If your school doesn't offer it, self-study with Halliday/Resnick and take the exam independently."
4. BAD: "Work on your extracurriculars." GOOD: "You're doing Science Olympiad — aim for a state placement and add USABO (open exam in Feb) since your bio interest overlaps."
5. Always use the student's actual profile, activities, school list, and test scores in your answer. Reference them by name.
6. Flag selectivity honestly: note when something is extremely competitive (RSI, TASP) vs. accessible (Clark Scholars, cold-email research).
7. Give deadlines whenever known.
8. When the student's profile has extra context they wrote themselves, treat it as high-signal — they took the time to write it, so address it directly.

${profileSection}

${schoolSection}

${activitySection}

${KNOWLEDGE_BASE}`;
}

export async function POST(request: Request) {
  const cookieStore = await cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {}
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return new Response("Unauthorized", { status: 401 });
  }

  if (!checkRateLimit(user.id)) {
    return new Response("Too many requests — wait a minute and try again.", { status: 429 });
  }

  let body: { content?: unknown; history?: unknown };
  try {
    body = await request.json();
  } catch {
    return new Response("Bad Request", { status: 400 });
  }

  const content = typeof body.content === "string" ? body.content.trim().slice(0, 4000) : "";
  if (!content) return new Response("Bad Request", { status: 400 });

  const rawHistory = Array.isArray(body.history) ? body.history : [];
  const history = rawHistory
    .filter((m) => m && typeof m.role === "string" && typeof m.content === "string")
    .slice(-20)
    .map((m) => ({ role: m.role as "user" | "assistant", content: (m.content as string).slice(0, 4000) }));

  const [schoolResult, activityResult, profileResult] = await Promise.all([
    supabase.from("schools").select("name, category").eq("user_id", user.id).limit(100),
    supabase
      .from("activities")
      .select("name, role, description, category, hours_per_week, weeks_per_year")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false })
      .limit(30),
    supabase
      .from("profiles")
      .select("grade, intended_major, interests, gpa, sat_score, act_score, state, extra_context")
      .eq("user_id", user.id)
      .single(),
  ]);

  const schools = (schoolResult.data ?? []) as { name: string; category: string }[];
  const activities = (activityResult.data ?? []) as Activity[];
  const profile = profileResult.data as Profile | null;

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey || apiKey === "your-key-here") {
    return new Response(
      "GROQ_API_KEY is not configured. Add your key to .env.local.",
      { status: 500 }
    );
  }

  const groq = new Groq({ apiKey });

  const messages: Groq.Chat.ChatCompletionMessageParam[] = [
    { role: "system", content: buildSystemPrompt(profile, schools, activities) },
    ...history.map(
      (m) =>
        ({ role: m.role, content: m.content } as Groq.Chat.ChatCompletionMessageParam)
    ),
    { role: "user", content: content.trim() },
  ];

  let stream;
  try {
    stream = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages,
      stream: true,
      max_tokens: 2048,
    });
  } catch (err) {
    console.error("[counselor] Groq API error:", err);
    return new Response(
      err instanceof Error ? err.message : "Groq API error",
      { status: 500 }
    );
  }

  const readable = new ReadableStream({
    async start(controller) {
      const encoder = new TextEncoder();
      try {
        for await (const chunk of stream) {
          const text = chunk.choices[0]?.delta?.content ?? "";
          if (text) controller.enqueue(encoder.encode(text));
        }
      } catch (err) {
        console.error("[counselor] stream error:", err);
      } finally {
        controller.close();
      }
    },
  });

  return new Response(readable, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
