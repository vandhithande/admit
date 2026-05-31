import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function POST(request: Request) {
  const cookieStore = await cookies();
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => cookieStore.getAll(),
        setAll: (c) => c.forEach(({ name, value, options }) => cookieStore.set(name, value, options)),
      },
    }
  );

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { essay, essayType, schoolName, prompt } = await request.json();
  if (!essay?.trim()) return NextResponse.json({ error: "No essay provided" }, { status: 400 });

  const { data: profile } = await supabase
    .from("profiles")
    .select("name, grade, intended_major, gpa, interests, extra_context")
    .eq("user_id", user.id)
    .single();

  const wordCount = essay.trim().split(/\s+/).length;

  const systemPrompt = `You are an expert college admissions essay coach with 15+ years of experience helping students get into top universities. You give honest, specific, actionable feedback — not generic praise.

Student profile:
- Name: ${profile?.name || "Unknown"}
- Grade: ${profile?.grade || "Unknown"}
- Intended major: ${profile?.intended_major || "Unknown"}
- GPA: ${profile?.gpa || "Unknown"}
- Interests: ${profile?.interests || "Unknown"}
- Additional context: ${profile?.extra_context || "None"}

Essay type: ${essayType}${schoolName ? ` for ${schoolName}` : ""}${prompt ? `\nPrompt: "${prompt}"` : ""}
Word count: ${wordCount}

Provide feedback in this exact JSON structure:
{
  "score": <number 1-10>,
  "headline": "<one sharp sentence summarizing the essay's biggest strength or issue>",
  "overall": "<2-3 sentences of honest overall assessment>",
  "strengths": ["<specific strength with example from essay>", "<specific strength>", "<specific strength>"],
  "improvements": ["<specific, actionable improvement with example>", "<specific improvement>", "<specific improvement>"],
  "lineFeedback": [
    { "quote": "<exact short quote from essay>", "comment": "<specific comment on this line>" },
    { "quote": "<exact short quote>", "comment": "<comment>" },
    { "quote": "<exact short quote>", "comment": "<comment>" }
  ],
  "promptAddress": "<does it actually answer the prompt? be direct>",
  "admissionsNote": "<what an admissions officer would think reading this>"
}`;

  try {
    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: `Please review this essay:\n\n${essay}` },
      ],
      response_format: { type: "json_object" },
      temperature: 0.4,
    });

    const feedback = JSON.parse(completion.choices[0].message.content ?? "{}");
    return NextResponse.json({ feedback, wordCount });
  } catch {
    return NextResponse.json({ error: "Failed to generate feedback" }, { status: 500 });
  }
}
