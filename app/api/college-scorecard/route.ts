import { NextResponse } from "next/server";
import { COLLEGES, ACCEPTANCE_RATES } from "@/lib/colleges";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = (searchParams.get("q") ?? "").trim().toLowerCase();
  if (q.length < 2) return NextResponse.json({ results: [] });

  type Scored = { college: (typeof COLLEGES)[0]; score: number };
  const scored: Scored[] = [];

  for (const college of COLLEGES) {
    const name = college.name.toLowerCase();
    const abbrevs = (college.abbreviations ?? []).map((a) => a.toLowerCase());
    let score = 0;

    if (abbrevs.some((a) => a === q)) {
      score = 100;
    } else if (name.startsWith(q)) {
      score = q.length >= name.length / 2 ? 90 : 80;
    } else if (abbrevs.some((a) => a.startsWith(q))) {
      score = 70;
    } else if (name.includes(q)) {
      score = 50;
    }

    if (score === 0) continue;
    if (college.city.toLowerCase().startsWith(q)) score += 5;
    scored.push({ college, score });
  }

  scored.sort((a, b) => b.score - a.score);

  const results = scored.slice(0, 10).map(({ college }) => ({
    id: college.id,
    name: college.name,
    city: college.city,
    state: college.state,
    location: college.location,
    domain: college.domain,
    acceptanceRate: ACCEPTANCE_RATES[college.id] ?? null,
  }));

  return NextResponse.json({ results });
}
