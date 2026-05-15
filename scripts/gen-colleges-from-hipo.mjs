/**
 * Downloads Hipo university-domains-list (US only), merges must-include schools,
 * infers state from metadata + name heuristics, writes lib/colleges.ts (500 rows).
 * Run: node scripts/gen-colleges-from-hipo.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const STATE_CAPITAL = {
  AL: "Montgomery",
  AK: "Juneau",
  AZ: "Phoenix",
  AR: "Little Rock",
  CA: "Sacramento",
  CO: "Denver",
  CT: "Hartford",
  DE: "Dover",
  FL: "Tallahassee",
  GA: "Atlanta",
  HI: "Honolulu",
  ID: "Boise",
  IL: "Springfield",
  IN: "Indianapolis",
  IA: "Des Moines",
  KS: "Topeka",
  KY: "Frankfort",
  LA: "Baton Rouge",
  ME: "Augusta",
  MD: "Annapolis",
  MA: "Boston",
  MI: "Lansing",
  MN: "Saint Paul",
  MS: "Jackson",
  MO: "Jefferson City",
  MT: "Helena",
  NE: "Lincoln",
  NV: "Carson City",
  NH: "Concord",
  NJ: "Trenton",
  NM: "Santa Fe",
  NY: "Albany",
  NC: "Raleigh",
  ND: "Bismarck",
  OH: "Columbus",
  OK: "Oklahoma City",
  OR: "Salem",
  PA: "Harrisburg",
  RI: "Providence",
  SC: "Columbia",
  SD: "Pierre",
  TN: "Nashville",
  TX: "Austin",
  UT: "Salt Lake City",
  VT: "Montpelier",
  VA: "Richmond",
  WA: "Olympia",
  WV: "Charleston",
  WI: "Madison",
  WY: "Cheyenne",
  DC: "Washington",
};

/** Full state / territory name → two-letter code */
const STATE_NAMES = {
  Alabama: "AL",
  Alaska: "AK",
  Arizona: "AZ",
  Arkansas: "AR",
  California: "CA",
  Colorado: "CO",
  Connecticut: "CT",
  Delaware: "DE",
  Florida: "FL",
  Georgia: "GA",
  Hawaii: "HI",
  Idaho: "ID",
  Illinois: "IL",
  Indiana: "IN",
  Iowa: "IA",
  Kansas: "KS",
  Kentucky: "KY",
  Louisiana: "LA",
  Maine: "ME",
  Maryland: "MD",
  Massachusetts: "MA",
  Michigan: "MI",
  Minnesota: "MN",
  Mississippi: "MS",
  Missouri: "MO",
  Montana: "MT",
  Nebraska: "NE",
  Nevada: "NV",
  "New Hampshire": "NH",
  "New Jersey": "NJ",
  "New Mexico": "NM",
  "New York": "NY",
  "North Carolina": "NC",
  "North Dakota": "ND",
  Ohio: "OH",
  Oklahoma: "OK",
  Oregon: "OR",
  Pennsylvania: "PA",
  "Rhode Island": "RI",
  "South Carolina": "SC",
  "South Dakota": "SD",
  Tennessee: "TN",
  Texas: "TX",
  Utah: "UT",
  Vermont: "VT",
  Virginia: "VA",
  Washington: "WA",
  "West Virginia": "WV",
  Wisconsin: "WI",
  Wyoming: "WY",
  "District of Columbia": "DC",
};

const STATE_NAME_ORDER = Object.entries(STATE_NAMES).sort(
  (a, b) => b[0].length - a[0].length,
);

const NAME_SPECIAL = [
  [/^George Washington University/i, "DC"],
  [/^Washington University in St\. Louis/i, "MO"],
  [/Washington and Lee University/i, "VA"],
  [/^Miami University\b/i, "OH"],
  [/^Indiana University of Pennsylvania/i, "PA"],
  [/^California University of Pennsylvania/i, "PA"],
];

/** @type {{ name: string; city: string; state: string; domain: string }[]} */
const MUST = [
  {
    name: "University of California, Berkeley",
    city: "Berkeley",
    state: "CA",
    domain: "berkeley.edu",
  },
  {
    name: "University of California, Los Angeles",
    city: "Los Angeles",
    state: "CA",
    domain: "ucla.edu",
  },
  {
    name: "UCLA Anderson School of Management",
    city: "Los Angeles",
    state: "CA",
    domain: "anderson.ucla.edu",
  },
  {
    name: "University of Southern California",
    city: "Los Angeles",
    state: "CA",
    domain: "usc.edu",
  },
  {
    name: "USC Marshall School of Business",
    city: "Los Angeles",
    state: "CA",
    domain: "marshall.usc.edu",
  },
  {
    name: "Stanford University",
    city: "Stanford",
    state: "CA",
    domain: "stanford.edu",
  },
  {
    name: "Massachusetts Institute of Technology",
    city: "Cambridge",
    state: "MA",
    domain: "mit.edu",
  },
  {
    name: "Harvard University",
    city: "Cambridge",
    state: "MA",
    domain: "harvard.edu",
  },
  {
    name: "Yale University",
    city: "New Haven",
    state: "CT",
    domain: "yale.edu",
  },
  {
    name: "Princeton University",
    city: "Princeton",
    state: "NJ",
    domain: "princeton.edu",
  },
  {
    name: "Columbia University",
    city: "New York",
    state: "NY",
    domain: "columbia.edu",
  },
  {
    name: "University of Pennsylvania",
    city: "Philadelphia",
    state: "PA",
    domain: "upenn.edu",
  },
  {
    name: "The Wharton School",
    city: "Philadelphia",
    state: "PA",
    domain: "wharton.upenn.edu",
  },
  {
    name: "New York University",
    city: "New York",
    state: "NY",
    domain: "nyu.edu",
  },
  {
    name: "Duke University",
    city: "Durham",
    state: "NC",
    domain: "duke.edu",
  },
  {
    name: "Northwestern University",
    city: "Evanston",
    state: "IL",
    domain: "northwestern.edu",
  },
  {
    name: "Vanderbilt University",
    city: "Nashville",
    state: "TN",
    domain: "vanderbilt.edu",
  },
  {
    name: "Georgetown University",
    city: "Washington",
    state: "DC",
    domain: "georgetown.edu",
  },
  {
    name: "University of Notre Dame",
    city: "Notre Dame",
    state: "IN",
    domain: "nd.edu",
  },
  {
    name: "University of Michigan",
    city: "Ann Arbor",
    state: "MI",
    domain: "umich.edu",
  },
  {
    name: "University of Virginia",
    city: "Charlottesville",
    state: "VA",
    domain: "virginia.edu",
  },
  {
    name: "University of North Carolina at Chapel Hill",
    city: "Chapel Hill",
    state: "NC",
    domain: "unc.edu",
  },
  {
    name: "Boston College",
    city: "Chestnut Hill",
    state: "MA",
    domain: "bc.edu",
  },
  {
    name: "Tufts University",
    city: "Medford",
    state: "MA",
    domain: "tufts.edu",
  },
  {
    name: "Emory University",
    city: "Atlanta",
    state: "GA",
    domain: "emory.edu",
  },
  {
    name: "Carnegie Mellon University",
    city: "Pittsburgh",
    state: "PA",
    domain: "cmu.edu",
  },
  {
    name: "Georgia Institute of Technology",
    city: "Atlanta",
    state: "GA",
    domain: "gatech.edu",
  },
  {
    name: "Williams College",
    city: "Williamstown",
    state: "MA",
    domain: "williams.edu",
  },
  {
    name: "Amherst College",
    city: "Amherst",
    state: "MA",
    domain: "amherst.edu",
  },
  {
    name: "Swarthmore College",
    city: "Swarthmore",
    state: "PA",
    domain: "swarthmore.edu",
  },
  {
    name: "Bowdoin College",
    city: "Brunswick",
    state: "ME",
    domain: "bowdoin.edu",
  },
  {
    name: "Wellesley College",
    city: "Wellesley",
    state: "MA",
    domain: "wellesley.edu",
  },
  {
    name: "Middlebury College",
    city: "Middlebury",
    state: "VT",
    domain: "middlebury.edu",
  },
  {
    name: "Carleton College",
    city: "Northfield",
    state: "MN",
    domain: "carleton.edu",
  },
  {
    name: "Grinnell College",
    city: "Grinnell",
    state: "IA",
    domain: "grinnell.edu",
  },
  {
    name: "Davidson College",
    city: "Davidson",
    state: "NC",
    domain: "davidson.edu",
  },
  {
    name: "Colgate University",
    city: "Hamilton",
    state: "NY",
    domain: "colgate.edu",
  },
  {
    name: "Hamilton College",
    city: "Clinton",
    state: "NY",
    domain: "hamilton.edu",
  },
  {
    name: "Lafayette College",
    city: "Easton",
    state: "PA",
    domain: "lafayette.edu",
  },
  {
    name: "Bucknell University",
    city: "Lewisburg",
    state: "PA",
    domain: "bucknell.edu",
  },
];

function primaryDomain(u) {
  const d = u.domains?.[0];
  if (!d) return null;
  return String(d).replace(/^www\./, "");
}

function inferStateCode(nameRaw, u) {
  const name = String(nameRaw ?? "");
  for (const [re, code] of NAME_SPECIAL) {
    if (re.test(name)) return code;
  }

  const sp = u["state-province"];
  if (sp && /^[A-Z]{2}$/.test(String(sp).trim())) {
    return String(sp).trim();
  }
  if (sp && STATE_NAMES[String(sp).trim()]) {
    return STATE_NAMES[String(sp).trim()];
  }

  const paren = name.match(/\(([A-Z]{2})\)\s*$/);
  if (paren) return paren[1];

  const lower = name.toLowerCase();
  for (const [full, code] of STATE_NAME_ORDER) {
    if (lower.includes(full.toLowerCase())) return code;
  }

  return null;
}

const url =
  "https://raw.githubusercontent.com/Hipo/university-domains-list/master/world_universities_and_domains.json";

const res = await fetch(url);
if (!res.ok) throw new Error(`Fetch failed ${res.status}`);
const data = await res.json();

/** @type {Map<string, { name: string; city: string; state: string; domain: string }>} */
const byName = new Map();

for (const m of MUST) {
  byName.set(m.name, { ...m });
}

for (const u of data) {
  if (u.alpha_two_code !== "US") continue;
  const name = String(u.name ?? "").trim();
  const domain = primaryDomain(u);
  if (!name || !domain) continue;

  const state = inferStateCode(name, u);
  if (!state || !STATE_CAPITAL[state]) continue;

  const city = STATE_CAPITAL[state];
  if (!byName.has(name)) {
    byName.set(name, { name, city, state, domain });
  }
}

const mustNames = new Set(MUST.map((m) => m.name));

const rows = [...byName.values()];
const prioritized = [
  ...rows.filter((r) => mustNames.has(r.name)),
  ...rows
    .filter((r) => !mustNames.has(r.name))
    .sort((a, b) => a.name.localeCompare(b.name)),
];

const COLLEGES = prioritized.slice(0, 500).map((r, i) => {
  const st = r.state.toUpperCase();
  return {
    id: i + 1,
    name: r.name,
    city: r.city,
    state: st,
    location: `${r.city}, ${st}`,
    domain: r.domain,
  };
});

if (COLLEGES.length < 500) {
  console.warn("Only generated", COLLEGES.length, "colleges (expected 500)");
}

const out = `export type College = {
  id: number;
  name: string;
  city: string;
  state: string;
  location: string;
  domain: string;
};

export const COLLEGES: College[] = ${JSON.stringify(COLLEGES, null, 2)};
`;

fs.writeFileSync(path.join(root, "lib", "colleges.ts"), out, "utf8");
console.log("Wrote lib/colleges.ts with", COLLEGES.length, "entries");
