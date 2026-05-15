export type College = {
  id: number;
  name: string;
  city: string;
  state: string;
  location: string;
  domain: string;
  abbreviations?: string[];
  acceptanceRate?: number; // percentage, e.g. 4 means 4%
};

export const COLLEGES: College[] = [
  {
    "id": 1,
    "name": "University of California, Berkeley",
    "city": "Berkeley",
    "state": "CA",
    "location": "Berkeley, CA",
    "domain": "berkeley.edu",
    "abbreviations": ["UCB", "Cal", "Berkeley"]
  },
  {
    "id": 2,
    "name": "University of California, Los Angeles",
    "city": "Los Angeles",
    "state": "CA",
    "location": "Los Angeles, CA",
    "domain": "ucla.edu",
    "abbreviations": ["UCLA"]
  },
  {
    "id": 4,
    "name": "University of Southern California",
    "city": "Los Angeles",
    "state": "CA",
    "location": "Los Angeles, CA",
    "domain": "usc.edu",
    "abbreviations": ["USC", "Trojans"]
  },
  {
    "id": 6,
    "name": "Stanford University",
    "city": "Stanford",
    "state": "CA",
    "location": "Stanford, CA",
    "domain": "stanford.edu",
    "abbreviations": ["Stanford", "SU"]
  },
  {
    "id": 7,
    "name": "Massachusetts Institute of Technology",
    "city": "Cambridge",
    "state": "MA",
    "location": "Cambridge, MA",
    "domain": "mit.edu",
    "abbreviations": ["MIT"]
  },
  {
    "id": 8,
    "name": "Harvard University",
    "city": "Cambridge",
    "state": "MA",
    "location": "Cambridge, MA",
    "domain": "harvard.edu"
  },
  {
    "id": 9,
    "name": "Yale University",
    "city": "New Haven",
    "state": "CT",
    "location": "New Haven, CT",
    "domain": "yale.edu"
  },
  {
    "id": 10,
    "name": "Princeton University",
    "city": "Princeton",
    "state": "NJ",
    "location": "Princeton, NJ",
    "domain": "princeton.edu"
  },
  {
    "id": 11,
    "name": "Columbia University",
    "city": "New York",
    "state": "NY",
    "location": "New York, NY",
    "domain": "columbia.edu",
    "abbreviations": ["Columbia", "CU"]
  },
  {
    "id": 12,
    "name": "University of Pennsylvania",
    "city": "Philadelphia",
    "state": "PA",
    "location": "Philadelphia, PA",
    "domain": "upenn.edu",
    "abbreviations": ["Penn", "UPenn"]
  },
  {
    "id": 14,
    "name": "New York University",
    "city": "New York",
    "state": "NY",
    "location": "New York, NY",
    "domain": "nyu.edu",
    "abbreviations": ["NYU"]
  },
  {
    "id": 15,
    "name": "Duke University",
    "city": "Durham",
    "state": "NC",
    "location": "Durham, NC",
    "domain": "duke.edu",
    "abbreviations": ["Duke"]
  },
  {
    "id": 16,
    "name": "Northwestern University",
    "city": "Evanston",
    "state": "IL",
    "location": "Evanston, IL",
    "domain": "northwestern.edu",
    "abbreviations": ["Northwestern", "NU"]
  },
  {
    "id": 17,
    "name": "Vanderbilt University",
    "city": "Nashville",
    "state": "TN",
    "location": "Nashville, TN",
    "domain": "vanderbilt.edu",
    "abbreviations": ["Vandy", "VU"]
  },
  {
    "id": 18,
    "name": "Georgetown University",
    "city": "Washington",
    "state": "DC",
    "location": "Washington, DC",
    "domain": "georgetown.edu"
  },
  {
    "id": 19,
    "name": "University of Notre Dame",
    "city": "Notre Dame",
    "state": "IN",
    "location": "Notre Dame, IN",
    "domain": "nd.edu",
    "abbreviations": ["ND", "Notre Dame", "UND"]
  },
  {
    "id": 20,
    "name": "University of Michigan",
    "city": "Ann Arbor",
    "state": "MI",
    "location": "Ann Arbor, MI",
    "domain": "umich.edu",
    "abbreviations": ["UMich", "Michigan", "UM", "U of M"]
  },
  {
    "id": 21,
    "name": "University of Virginia",
    "city": "Charlottesville",
    "state": "VA",
    "location": "Charlottesville, VA",
    "domain": "virginia.edu",
    "abbreviations": ["UVA", "UVa"]
  },
  {
    "id": 22,
    "name": "University of North Carolina at Chapel Hill",
    "city": "Chapel Hill",
    "state": "NC",
    "location": "Chapel Hill, NC",
    "domain": "unc.edu",
    "abbreviations": ["UNC", "UNC-CH", "Chapel Hill"]
  },
  {
    "id": 23,
    "name": "Boston College",
    "city": "Chestnut Hill",
    "state": "MA",
    "location": "Chestnut Hill, MA",
    "domain": "bc.edu",
    "abbreviations": ["BC"]
  },
  {
    "id": 24,
    "name": "Tufts University",
    "city": "Medford",
    "state": "MA",
    "location": "Medford, MA",
    "domain": "tufts.edu"
  },
  {
    "id": 25,
    "name": "Emory University",
    "city": "Atlanta",
    "state": "GA",
    "location": "Atlanta, GA",
    "domain": "emory.edu"
  },
  {
    "id": 26,
    "name": "Carnegie Mellon University",
    "city": "Pittsburgh",
    "state": "PA",
    "location": "Pittsburgh, PA",
    "domain": "cmu.edu",
    "abbreviations": ["CMU"]
  },
  {
    "id": 27,
    "name": "Georgia Institute of Technology",
    "city": "Atlanta",
    "state": "GA",
    "location": "Atlanta, GA",
    "domain": "gatech.edu",
    "abbreviations": ["Georgia Tech", "GT", "GaTech"]
  },
  {
    "id": 28,
    "name": "Williams College",
    "city": "Williamstown",
    "state": "MA",
    "location": "Williamstown, MA",
    "domain": "williams.edu"
  },
  {
    "id": 29,
    "name": "Amherst College",
    "city": "Amherst",
    "state": "MA",
    "location": "Amherst, MA",
    "domain": "amherst.edu"
  },
  {
    "id": 30,
    "name": "Swarthmore College",
    "city": "Swarthmore",
    "state": "PA",
    "location": "Swarthmore, PA",
    "domain": "swarthmore.edu"
  },
  {
    "id": 31,
    "name": "Bowdoin College",
    "city": "Brunswick",
    "state": "ME",
    "location": "Brunswick, ME",
    "domain": "bowdoin.edu"
  },
  {
    "id": 32,
    "name": "Wellesley College",
    "city": "Wellesley",
    "state": "MA",
    "location": "Wellesley, MA",
    "domain": "wellesley.edu"
  },
  {
    "id": 33,
    "name": "Middlebury College",
    "city": "Middlebury",
    "state": "VT",
    "location": "Middlebury, VT",
    "domain": "middlebury.edu"
  },
  {
    "id": 34,
    "name": "Carleton College",
    "city": "Northfield",
    "state": "MN",
    "location": "Northfield, MN",
    "domain": "carleton.edu"
  },
  {
    "id": 35,
    "name": "Grinnell College",
    "city": "Grinnell",
    "state": "IA",
    "location": "Grinnell, IA",
    "domain": "grinnell.edu"
  },
  {
    "id": 36,
    "name": "Davidson College",
    "city": "Davidson",
    "state": "NC",
    "location": "Davidson, NC",
    "domain": "davidson.edu"
  },
  {
    "id": 37,
    "name": "Colgate University",
    "city": "Hamilton",
    "state": "NY",
    "location": "Hamilton, NY",
    "domain": "colgate.edu"
  },
  {
    "id": 38,
    "name": "Hamilton College",
    "city": "Clinton",
    "state": "NY",
    "location": "Clinton, NY",
    "domain": "hamilton.edu"
  },
  {
    "id": 39,
    "name": "Lafayette College",
    "city": "Easton",
    "state": "PA",
    "location": "Easton, PA",
    "domain": "lafayette.edu"
  },
  {
    "id": 40,
    "name": "Bucknell University",
    "city": "Lewisburg",
    "state": "PA",
    "location": "Lewisburg, PA",
    "domain": "bucknell.edu"
  },
  {
    "id": 41,
    "name": "Abraham Baldwin Agricultural College",
    "city": "Atlanta",
    "state": "GA",
    "location": "Atlanta, GA",
    "domain": "abac.edu"
  },
  {
    "id": 42,
    "name": "Academic medical center at State University of New York at Stony Brook",
    "city": "Albany",
    "state": "NY",
    "location": "Albany, NY",
    "domain": "stonybrookmedicine.edu"
  },
  {
    "id": 43,
    "name": "Academy of Art University",
    "city": "Sacramento",
    "state": "CA",
    "location": "Sacramento, CA",
    "domain": "academyart.edu"
  },
  {
    "id": 44,
    "name": "Alabama A&M University",
    "city": "Montgomery",
    "state": "AL",
    "location": "Montgomery, AL",
    "domain": "aamu.edu",
    "abbreviations": ["Alabama A&M", "Alabama A and M", "AAMU"]
  },
  {
    "id": 45,
    "name": "Alabama Southern Community College",
    "city": "Montgomery",
    "state": "AL",
    "location": "Montgomery, AL",
    "domain": "ascc.edu"
  },
  {
    "id": 46,
    "name": "Alabama State University",
    "city": "Montgomery",
    "state": "AL",
    "location": "Montgomery, AL",
    "domain": "alasu.edu"
  },
  {
    "id": 47,
    "name": "Alaska Pacific University",
    "city": "Juneau",
    "state": "AK",
    "location": "Juneau, AK",
    "domain": "alaskapacific.edu"
  },
  {
    "id": 48,
    "name": "Albertson College of Idaho",
    "city": "Boise",
    "state": "ID",
    "location": "Boise, ID",
    "domain": "acofi.edu"
  },
  {
    "id": 49,
    "name": "Allegany College of Maryland",
    "city": "Annapolis",
    "state": "MD",
    "location": "Annapolis, MD",
    "domain": "allegany.edu"
  },
  {
    "id": 50,
    "name": "Allen College",
    "city": "Des Moines",
    "state": "IA",
    "location": "Des Moines, IA",
    "domain": "allencollege.edu"
  },
  {
    "id": 51,
    "name": "Alvernia University",
    "city": "Harrisburg",
    "state": "PA",
    "location": "Harrisburg, PA",
    "domain": "alvernia.edu"
  },
  {
    "id": 52,
    "name": "American Academy of Dramatic Arts-New York",
    "city": "Albany",
    "state": "NY",
    "location": "Albany, NY",
    "domain": "aada.edu"
  },
  {
    "id": 53,
    "name": "Anderson University",
    "city": "Columbia",
    "state": "SC",
    "location": "Columbia, SC",
    "domain": "andersonuniversity.edu"
  },
  {
    "id": 54,
    "name": "Arizona State University",
    "city": "Phoenix",
    "state": "AZ",
    "location": "Phoenix, AZ",
    "domain": "asu.edu",
    "abbreviations": ["ASU", "Sun Devils"]
  },
  {
    "id": 55,
    "name": "Arizona Western College",
    "city": "Phoenix",
    "state": "AZ",
    "location": "Phoenix, AZ",
    "domain": "azwestern.edu"
  },
  {
    "id": 56,
    "name": "Arkansas at Pine Bluff, University of",
    "city": "Little Rock",
    "state": "AR",
    "location": "Little Rock, AR",
    "domain": "uapb.edu"
  },
  {
    "id": 57,
    "name": "Arkansas Baptist College",
    "city": "Little Rock",
    "state": "AR",
    "location": "Little Rock, AR",
    "domain": "arkansasbaptist.edu"
  },
  {
    "id": 58,
    "name": "Arkansas Northeastern College",
    "city": "Little Rock",
    "state": "AR",
    "location": "Little Rock, AR",
    "domain": "anc.edu"
  },
  {
    "id": 59,
    "name": "Arkansas State University",
    "city": "Little Rock",
    "state": "AR",
    "location": "Little Rock, AR",
    "domain": "astate.edu"
  },
  {
    "id": 60,
    "name": "Arkansas State University-Beebe",
    "city": "Little Rock",
    "state": "AR",
    "location": "Little Rock, AR",
    "domain": "asub.edu"
  },
  {
    "id": 61,
    "name": "Arkansas State University-Mountain Home",
    "city": "Little Rock",
    "state": "AR",
    "location": "Little Rock, AR",
    "domain": "asumh.edu"
  },
  {
    "id": 62,
    "name": "Arkansas State University-Newport",
    "city": "Little Rock",
    "state": "AR",
    "location": "Little Rock, AR",
    "domain": "asun.edu"
  },
  {
    "id": 63,
    "name": "Arkansas Tech University",
    "city": "Little Rock",
    "state": "AR",
    "location": "Little Rock, AR",
    "domain": "atu.edu"
  },
  {
    "id": 64,
    "name": "Augustana College (IL)",
    "city": "Springfield",
    "state": "IL",
    "location": "Springfield, IL",
    "domain": "augustana.edu"
  },
  {
    "id": 65,
    "name": "Augustana College (SD)",
    "city": "Pierre",
    "state": "SD",
    "location": "Pierre, SD",
    "domain": "augie.edu"
  },
  {
    "id": 66,
    "name": "Bay Path University",
    "city": "Boston",
    "state": "MA",
    "location": "Boston, MA",
    "domain": "baypath.edu"
  },
  {
    "id": 67,
    "name": "Bellevue College",
    "city": "Olympia",
    "state": "WA",
    "location": "Olympia, WA",
    "domain": "bellevuecollege.edu"
  },
  {
    "id": 68,
    "name": "Bentley University",
    "city": "Boston",
    "state": "MA",
    "location": "Boston, MA",
    "domain": "bentley.edu"
  },
  {
    "id": 69,
    "name": "Bethel College (KS)",
    "city": "Topeka",
    "state": "KS",
    "location": "Topeka, KS",
    "domain": "bethelks.edu"
  },
  {
    "id": 70,
    "name": "Bloomsburg University of Pennsylvania",
    "city": "Harrisburg",
    "state": "PA",
    "location": "Harrisburg, PA",
    "domain": "bloomu.edu"
  },
  {
    "id": 71,
    "name": "Brigham Young University - Idaho",
    "city": "Boise",
    "state": "ID",
    "location": "Boise, ID",
    "domain": "byui.edu"
  },
  {
    "id": 72,
    "name": "Brigham Young University Hawaii",
    "city": "Honolulu",
    "state": "HI",
    "location": "Honolulu, HI",
    "domain": "byuh.edu"
  },
  {
    "id": 73,
    "name": "Bryant University",
    "city": "Providence",
    "state": "RI",
    "location": "Providence, RI",
    "domain": "bryant.edu"
  },
  {
    "id": 74,
    "name": "California Baptist University",
    "city": "Sacramento",
    "state": "CA",
    "location": "Sacramento, CA",
    "domain": "calbaptist.edu"
  },
  {
    "id": 75,
    "name": "California Coast University",
    "city": "Sacramento",
    "state": "CA",
    "location": "Sacramento, CA",
    "domain": "calcoast.edu"
  },
  {
    "id": 76,
    "name": "California College of the Arts",
    "city": "Sacramento",
    "state": "CA",
    "location": "Sacramento, CA",
    "domain": "cca.edu"
  },
  {
    "id": 77,
    "name": "California Institute of Technology",
    "city": "Sacramento",
    "state": "CA",
    "location": "Sacramento, CA",
    "domain": "caltech.edu"
  },
  {
    "id": 78,
    "name": "California Institute of the Arts",
    "city": "Sacramento",
    "state": "CA",
    "location": "Sacramento, CA",
    "domain": "calarts.edu"
  },
  {
    "id": 79,
    "name": "California Lutheran University",
    "city": "Sacramento",
    "state": "CA",
    "location": "Sacramento, CA",
    "domain": "callutheran.edu"
  },
  {
    "id": 80,
    "name": "California Maritime Academy",
    "city": "Sacramento",
    "state": "CA",
    "location": "Sacramento, CA",
    "domain": "csum.edu"
  },
  {
    "id": 81,
    "name": "California National University",
    "city": "Sacramento",
    "state": "CA",
    "location": "Sacramento, CA",
    "domain": "cnuas.edu"
  },
  {
    "id": 82,
    "name": "California Polytechnic State University, Pomona",
    "city": "Pomona",
    "state": "CA",
    "location": "Pomona, CA",
    "domain": "cpp.edu",
    "abbreviations": ["Cal Poly Pomona", "CPP"]
  },
  {
    "id": 83,
    "name": "California Polytechnic State University, San Luis Obispo",
    "city": "San Luis Obispo",
    "state": "CA",
    "location": "San Luis Obispo, CA",
    "domain": "calpoly.edu",
    "abbreviations": ["Cal Poly", "Cal Poly SLO", "SLO"]
  },
  {
    "id": 84,
    "name": "California Southern University",
    "city": "Sacramento",
    "state": "CA",
    "location": "Sacramento, CA",
    "domain": "calsouthern.edu"
  },
  {
    "id": 85,
    "name": "California State University",
    "city": "Sacramento",
    "state": "CA",
    "location": "Sacramento, CA",
    "domain": "csueastbay.edu"
  },
  {
    "id": 86,
    "name": "California State University Channel Islands",
    "city": "Sacramento",
    "state": "CA",
    "location": "Sacramento, CA",
    "domain": "csuci.edu"
  },
  {
    "id": 87,
    "name": "California State University System",
    "city": "Sacramento",
    "state": "CA",
    "location": "Sacramento, CA",
    "domain": "calstate.edu"
  },
  {
    "id": 88,
    "name": "California State University, Bakersfield",
    "city": "Sacramento",
    "state": "CA",
    "location": "Sacramento, CA",
    "domain": "csub.edu"
  },
  {
    "id": 89,
    "name": "California State University, Chico",
    "city": "Sacramento",
    "state": "CA",
    "location": "Sacramento, CA",
    "domain": "csuchico.edu"
  },
  {
    "id": 90,
    "name": "California State University, Dominguez Hills",
    "city": "Sacramento",
    "state": "CA",
    "location": "Sacramento, CA",
    "domain": "csudh.edu"
  },
  {
    "id": 91,
    "name": "California State University, Fresno",
    "city": "Sacramento",
    "state": "CA",
    "location": "Sacramento, CA",
    "domain": "csufresno.edu"
  },
  {
    "id": 92,
    "name": "California State University, Fullerton",
    "city": "Sacramento",
    "state": "CA",
    "location": "Sacramento, CA",
    "domain": "fullerton.edu"
  },
  {
    "id": 93,
    "name": "California State University, Hayward",
    "city": "Sacramento",
    "state": "CA",
    "location": "Sacramento, CA",
    "domain": "csuhayward.edu"
  },
  {
    "id": 94,
    "name": "California State University, Long Beach",
    "city": "Sacramento",
    "state": "CA",
    "location": "Sacramento, CA",
    "domain": "csulb.edu"
  },
  {
    "id": 95,
    "name": "California State University, Los Angeles",
    "city": "Sacramento",
    "state": "CA",
    "location": "Sacramento, CA",
    "domain": "calstatela.edu"
  },
  {
    "id": 96,
    "name": "California State University, Monterey Bay",
    "city": "Sacramento",
    "state": "CA",
    "location": "Sacramento, CA",
    "domain": "csumb.edu"
  },
  {
    "id": 97,
    "name": "California State University, Northridge",
    "city": "Sacramento",
    "state": "CA",
    "location": "Sacramento, CA",
    "domain": "csun.edu"
  },
  {
    "id": 98,
    "name": "California State University, Sacramento",
    "city": "Sacramento",
    "state": "CA",
    "location": "Sacramento, CA",
    "domain": "csus.edu"
  },
  {
    "id": 99,
    "name": "California State University, San Bernardino",
    "city": "Sacramento",
    "state": "CA",
    "location": "Sacramento, CA",
    "domain": "csusb.edu"
  },
  {
    "id": 100,
    "name": "California State University, San Marcos",
    "city": "Sacramento",
    "state": "CA",
    "location": "Sacramento, CA",
    "domain": "csusm.edu"
  },
  {
    "id": 101,
    "name": "California State University, Stanislaus",
    "city": "Sacramento",
    "state": "CA",
    "location": "Sacramento, CA",
    "domain": "csustan.edu"
  },
  {
    "id": 102,
    "name": "California University of Pennsylvania",
    "city": "Harrisburg",
    "state": "PA",
    "location": "Harrisburg, PA",
    "domain": "cup.edu"
  },
  {
    "id": 103,
    "name": "California University of Science and Medicine",
    "city": "Sacramento",
    "state": "CA",
    "location": "Sacramento, CA",
    "domain": "cusm.edu"
  },
  {
    "id": 104,
    "name": "Capital University",
    "city": "Columbus",
    "state": "OH",
    "location": "Columbus, OH",
    "domain": "capital.edu"
  },
  {
    "id": 105,
    "name": "Career College of Northern Nevada",
    "city": "Carson City",
    "state": "NV",
    "location": "Carson City, NV",
    "domain": "ccnn.edu"
  },
  {
    "id": 106,
    "name": "Carrington College California-Sacramento",
    "city": "Sacramento",
    "state": "CA",
    "location": "Sacramento, CA",
    "domain": "carrington.edu"
  },
  {
    "id": 107,
    "name": "Centenary College of Louisiana",
    "city": "Baton Rouge",
    "state": "LA",
    "location": "Baton Rouge, LA",
    "domain": "centenary.edu"
  },
  {
    "id": 108,
    "name": "Central Alabama Community College",
    "city": "Montgomery",
    "state": "AL",
    "location": "Montgomery, AL",
    "domain": "cacc.edu"
  },
  {
    "id": 109,
    "name": "Central Arizona College",
    "city": "Phoenix",
    "state": "AZ",
    "location": "Phoenix, AZ",
    "domain": "centralaz.edu"
  },
  {
    "id": 110,
    "name": "Central Connecticut State University",
    "city": "Hartford",
    "state": "CT",
    "location": "Hartford, CT",
    "domain": "ccsu.edu"
  },
  {
    "id": 111,
    "name": "Central Georgia Technical College",
    "city": "Atlanta",
    "state": "GA",
    "location": "Atlanta, GA",
    "domain": "centralgatech.edu"
  },
  {
    "id": 112,
    "name": "Central Maine Community College",
    "city": "Augusta",
    "state": "ME",
    "location": "Augusta, ME",
    "domain": "cmcc.edu"
  },
  {
    "id": 113,
    "name": "Central Maine Medical Center College of Nursing and Health Professions",
    "city": "Augusta",
    "state": "ME",
    "location": "Augusta, ME",
    "domain": "cmmccollege.edu"
  },
  {
    "id": 114,
    "name": "Central Michigan University",
    "city": "Lansing",
    "state": "MI",
    "location": "Lansing, MI",
    "domain": "cmich.edu"
  },
  {
    "id": 115,
    "name": "Central New Mexico Community College",
    "city": "Santa Fe",
    "state": "NM",
    "location": "Santa Fe, NM",
    "domain": "cnm.edu"
  },
  {
    "id": 116,
    "name": "Central Ohio Technical College",
    "city": "Columbus",
    "state": "OH",
    "location": "Columbus, OH",
    "domain": "cotc.edu"
  },
  {
    "id": 117,
    "name": "Central Oregon Community College",
    "city": "Salem",
    "state": "OR",
    "location": "Salem, OR",
    "domain": "cocc.edu"
  },
  {
    "id": 118,
    "name": "Central Texas College",
    "city": "Austin",
    "state": "TX",
    "location": "Austin, TX",
    "domain": "ctcd.edu"
  },
  {
    "id": 119,
    "name": "Central Virginia Community College",
    "city": "Richmond",
    "state": "VA",
    "location": "Richmond, VA",
    "domain": "cvcc.vccs.edu"
  },
  {
    "id": 120,
    "name": "Central Washington University",
    "city": "Olympia",
    "state": "WA",
    "location": "Olympia, WA",
    "domain": "cwu.edu"
  },
  {
    "id": 121,
    "name": "Central Wyoming College",
    "city": "Cheyenne",
    "state": "WY",
    "location": "Cheyenne, WY",
    "domain": "cwc.edu"
  },
  {
    "id": 122,
    "name": "City University of New York",
    "city": "Albany",
    "state": "NY",
    "location": "Albany, NY",
    "domain": "cuny.edu"
  },
  {
    "id": 123,
    "name": "Clarion University of Pennsylvania",
    "city": "Harrisburg",
    "state": "PA",
    "location": "Harrisburg, PA",
    "domain": "clarion.edu"
  },
  {
    "id": 124,
    "name": "Clark Atlanta University",
    "city": "Atlanta",
    "state": "GA",
    "location": "Atlanta, GA",
    "domain": "cau.edu"
  },
  {
    "id": 125,
    "name": "Coastal Alabama Community College",
    "city": "Montgomery",
    "state": "AL",
    "location": "Montgomery, AL",
    "domain": "coastalalabama.edu"
  },
  {
    "id": 126,
    "name": "College of Eastern Utah",
    "city": "Salt Lake City",
    "state": "UT",
    "location": "Salt Lake City, UT",
    "domain": "ceu.edu"
  },
  {
    "id": 127,
    "name": "College of Southern Idaho",
    "city": "Boise",
    "state": "ID",
    "location": "Boise, ID",
    "domain": "csi.edu"
  },
  {
    "id": 128,
    "name": "College of Southern Maryland",
    "city": "Annapolis",
    "state": "MD",
    "location": "Annapolis, MD",
    "domain": "csmd.edu"
  },
  {
    "id": 129,
    "name": "College of Southern Nevada",
    "city": "Carson City",
    "state": "NV",
    "location": "Carson City, NV",
    "domain": "csn.edu"
  },
  {
    "id": 130,
    "name": "College of Western Idaho",
    "city": "Boise",
    "state": "ID",
    "location": "Boise, ID",
    "domain": "cwidaho.cc"
  },
  {
    "id": 131,
    "name": "Colorado Christian University",
    "city": "Denver",
    "state": "CO",
    "location": "Denver, CO",
    "domain": "ccu.edu"
  },
  {
    "id": 132,
    "name": "Colorado College",
    "city": "Denver",
    "state": "CO",
    "location": "Denver, CO",
    "domain": "coloradocollege.edu"
  },
  {
    "id": 133,
    "name": "Colorado Community College System",
    "city": "Denver",
    "state": "CO",
    "location": "Denver, CO",
    "domain": "cccs.edu"
  },
  {
    "id": 134,
    "name": "Colorado Mesa University",
    "city": "Denver",
    "state": "CO",
    "location": "Denver, CO",
    "domain": "coloradomesa.edu"
  },
  {
    "id": 135,
    "name": "Colorado Northwestern Community College",
    "city": "Denver",
    "state": "CO",
    "location": "Denver, CO",
    "domain": "cncc.edu"
  },
  {
    "id": 136,
    "name": "Colorado School of Mines",
    "city": "Denver",
    "state": "CO",
    "location": "Denver, CO",
    "domain": "mines.edu"
  },
  {
    "id": 137,
    "name": "Colorado State University",
    "city": "Denver",
    "state": "CO",
    "location": "Denver, CO",
    "domain": "colostate.edu",
    "abbreviations": ["CSU", "Rams"]
  },
  {
    "id": 138,
    "name": "Colorado State University - Global Campus",
    "city": "Denver",
    "state": "CO",
    "location": "Denver, CO",
    "domain": "csuglobal.edu"
  },
  {
    "id": 139,
    "name": "Colorado State University-Pueblo",
    "city": "Denver",
    "state": "CO",
    "location": "Denver, CO",
    "domain": "csupueblo.edu"
  },
  {
    "id": 140,
    "name": "Colorado Technical University",
    "city": "Denver",
    "state": "CO",
    "location": "Denver, CO",
    "domain": "coloradotech.edu"
  },
  {
    "id": 141,
    "name": "Columbia College (CA)",
    "city": "Sacramento",
    "state": "CA",
    "location": "Sacramento, CA",
    "domain": "gocolumbia.edu"
  },
  {
    "id": 142,
    "name": "Columbia College (MO)",
    "city": "Jefferson City",
    "state": "MO",
    "location": "Jefferson City, MO",
    "domain": "ccis.edu"
  },
  {
    "id": 143,
    "name": "Columbia College (SC)",
    "city": "Columbia",
    "state": "SC",
    "location": "Columbia, SC",
    "domain": "columbiasc.edu"
  },
  {
    "id": 144,
    "name": "Community College of Rhode Island",
    "city": "Providence",
    "state": "RI",
    "location": "Providence, RI",
    "domain": "ccri.edu"
  },
  {
    "id": 145,
    "name": "Community College of Vermont",
    "city": "Montpelier",
    "state": "VT",
    "location": "Montpelier, VT",
    "domain": "ccv.edu"
  },
  {
    "id": 146,
    "name": "Community College System of New Hampshire",
    "city": "Concord",
    "state": "NH",
    "location": "Concord, NH",
    "domain": "ccsnh.edu"
  },
  {
    "id": 147,
    "name": "Concordia University Wisconsin",
    "city": "Madison",
    "state": "WI",
    "location": "Madison, WI",
    "domain": "cuw.edu"
  },
  {
    "id": 148,
    "name": "Connecticut College",
    "city": "Hartford",
    "state": "CT",
    "location": "Hartford, CT",
    "domain": "conncoll.edu"
  },
  {
    "id": 149,
    "name": "Connecticut State University System",
    "city": "Hartford",
    "state": "CT",
    "location": "Hartford, CT",
    "domain": "ct.edu"
  },
  {
    "id": 150,
    "name": "Cossatot Community College of the University of Arkansas",
    "city": "Little Rock",
    "state": "AR",
    "location": "Little Rock, AR",
    "domain": "cccua.edu"
  },
  {
    "id": 151,
    "name": "CUNY Baruch College",
    "city": "Albany",
    "state": "NY",
    "location": "Albany, NY",
    "domain": "baruch.cuny.edu"
  },
  {
    "id": 152,
    "name": "CUNY Brooklyn College",
    "city": "Albany",
    "state": "NY",
    "location": "Albany, NY",
    "domain": "brooklyn.cuny.edu"
  },
  {
    "id": 153,
    "name": "CUNY City College of NY",
    "city": "Albany",
    "state": "NY",
    "location": "Albany, NY",
    "domain": "ccny.cuny.edu"
  },
  {
    "id": 154,
    "name": "CUNY City Tech",
    "city": "Albany",
    "state": "NY",
    "location": "Albany, NY",
    "domain": "citytech.cuny.edu"
  },
  {
    "id": 155,
    "name": "CUNY College of Staten Island",
    "city": "Albany",
    "state": "NY",
    "location": "Albany, NY",
    "domain": "csi.cuny.edu"
  },
  {
    "id": 156,
    "name": "CUNY Macauly Honors College",
    "city": "Albany",
    "state": "NY",
    "location": "Albany, NY",
    "domain": "macauly.cuny.edu"
  },
  {
    "id": 157,
    "name": "CUNY Medgar Evers College",
    "city": "Albany",
    "state": "NY",
    "location": "Albany, NY",
    "domain": "mec.cuny.edu"
  },
  {
    "id": 158,
    "name": "CUNY Queens College",
    "city": "Albany",
    "state": "NY",
    "location": "Albany, NY",
    "domain": "qc.cuny.edu"
  },
  {
    "id": 159,
    "name": "Dallas College",
    "city": "Austin",
    "state": "TX",
    "location": "Austin, TX",
    "domain": "dallascollege.edu"
  },
  {
    "id": 160,
    "name": "Defiance College",
    "city": "Columbus",
    "state": "OH",
    "location": "Columbus, OH",
    "domain": "defiance.edu"
  },
  {
    "id": 161,
    "name": "Delaware College of Art and Design",
    "city": "Dover",
    "state": "DE",
    "location": "Dover, DE",
    "domain": "dcad.edu"
  },
  {
    "id": 162,
    "name": "Delaware County Community College",
    "city": "Dover",
    "state": "DE",
    "location": "Dover, DE",
    "domain": "dccc.edu"
  },
  {
    "id": 163,
    "name": "Delaware State University",
    "city": "Dover",
    "state": "DE",
    "location": "Dover, DE",
    "domain": "desu.edu"
  },
  {
    "id": 164,
    "name": "Delaware Technical Community College",
    "city": "Dover",
    "state": "DE",
    "location": "Dover, DE",
    "domain": "dtcc.edu"
  },
  {
    "id": 165,
    "name": "Delaware Valley University",
    "city": "Dover",
    "state": "DE",
    "location": "Dover, DE",
    "domain": "delval.edu"
  },
  {
    "id": 166,
    "name": "Denver College of Nursing",
    "city": "Denver",
    "state": "CO",
    "location": "Denver, CO",
    "domain": "denvercollegeofnursing.edu"
  },
  {
    "id": 167,
    "name": "Dominican University",
    "city": "Springfield",
    "state": "IL",
    "location": "Springfield, IL",
    "domain": "dom.edu"
  },
  {
    "id": 168,
    "name": "East Arkansas Community College",
    "city": "Little Rock",
    "state": "AR",
    "location": "Little Rock, AR",
    "domain": "eacc.edu"
  },
  {
    "id": 169,
    "name": "East Mississippi Community College",
    "city": "Jackson",
    "state": "MS",
    "location": "Jackson, MS",
    "domain": "eastms.edu"
  },
  {
    "id": 170,
    "name": "East Stroudsburg State University of Pennsylvania",
    "city": "Harrisburg",
    "state": "PA",
    "location": "Harrisburg, PA",
    "domain": "esu.edu"
  },
  {
    "id": 171,
    "name": "East Tennessee State University",
    "city": "Nashville",
    "state": "TN",
    "location": "Nashville, TN",
    "domain": "etsu.edu"
  },
  {
    "id": 172,
    "name": "East Texas Baptist University",
    "city": "Austin",
    "state": "TX",
    "location": "Austin, TX",
    "domain": "etbu.edu"
  },
  {
    "id": 173,
    "name": "Eastern Arizona College",
    "city": "Phoenix",
    "state": "AZ",
    "location": "Phoenix, AZ",
    "domain": "eac.edu"
  },
  {
    "id": 174,
    "name": "Eastern Connecticut State University",
    "city": "Hartford",
    "state": "CT",
    "location": "Hartford, CT",
    "domain": "easternct.edu"
  },
  {
    "id": 175,
    "name": "Eastern Florida State College",
    "city": "Tallahassee",
    "state": "FL",
    "location": "Tallahassee, FL",
    "domain": "easternflorida.edu"
  },
  {
    "id": 176,
    "name": "Eastern Idaho Technical College",
    "city": "Boise",
    "state": "ID",
    "location": "Boise, ID",
    "domain": "eitc.edu"
  },
  {
    "id": 177,
    "name": "Eastern Illinois University",
    "city": "Springfield",
    "state": "IL",
    "location": "Springfield, IL",
    "domain": "eiu.edu"
  },
  {
    "id": 178,
    "name": "Eastern Iowa Community College District",
    "city": "Des Moines",
    "state": "IA",
    "location": "Des Moines, IA",
    "domain": "eicc.edu"
  },
  {
    "id": 179,
    "name": "Eastern Kentucky University",
    "city": "Frankfort",
    "state": "KY",
    "location": "Frankfort, KY",
    "domain": "eku.edu"
  },
  {
    "id": 180,
    "name": "Eastern Maine Community College",
    "city": "Augusta",
    "state": "ME",
    "location": "Augusta, ME",
    "domain": "emcc.edu"
  },
  {
    "id": 181,
    "name": "Eastern Michigan University",
    "city": "Lansing",
    "state": "MI",
    "location": "Lansing, MI",
    "domain": "emich.edu"
  },
  {
    "id": 182,
    "name": "Eastern New Mexico University",
    "city": "Santa Fe",
    "state": "NM",
    "location": "Santa Fe, NM",
    "domain": "enmu.edu"
  },
  {
    "id": 183,
    "name": "Eastern New Mexico University-Roswell Campus",
    "city": "Santa Fe",
    "state": "NM",
    "location": "Santa Fe, NM",
    "domain": "roswell.enmu.edu"
  },
  {
    "id": 184,
    "name": "Eastern Oklahoma State College",
    "city": "Oklahoma City",
    "state": "OK",
    "location": "Oklahoma City, OK",
    "domain": "eosc.edu"
  },
  {
    "id": 185,
    "name": "Eastern Oregon State College",
    "city": "Salem",
    "state": "OR",
    "location": "Salem, OR",
    "domain": "eou.edu"
  },
  {
    "id": 186,
    "name": "Eastern Virginia Medical School",
    "city": "Richmond",
    "state": "VA",
    "location": "Richmond, VA",
    "domain": "evms.edu"
  },
  {
    "id": 187,
    "name": "Eastern Washington University",
    "city": "Olympia",
    "state": "WA",
    "location": "Olympia, WA",
    "domain": "ewu.edu"
  },
  {
    "id": 188,
    "name": "Eastern West Virginia Community and Technical College",
    "city": "Charleston",
    "state": "WV",
    "location": "Charleston, WV",
    "domain": "eastern.wvnet.edu"
  },
  {
    "id": 189,
    "name": "Eastern Wyoming College",
    "city": "Cheyenne",
    "state": "WY",
    "location": "Cheyenne, WY",
    "domain": "ewc.wy.edu"
  },
  {
    "id": 190,
    "name": "Edinboro University of Pennsylvania",
    "city": "Harrisburg",
    "state": "PA",
    "location": "Harrisburg, PA",
    "domain": "edinboro.edu"
  },
  {
    "id": 191,
    "name": "Emory & Henry College",
    "city": "Richmond",
    "state": "VA",
    "location": "Richmond, VA",
    "domain": "ehc.edu"
  },
  {
    "id": 192,
    "name": "Florida Agricultural and Mechanical University",
    "city": "Tallahassee",
    "state": "FL",
    "location": "Tallahassee, FL",
    "domain": "famu.edu"
  },
  {
    "id": 193,
    "name": "Florida Atlantic University",
    "city": "Tallahassee",
    "state": "FL",
    "location": "Tallahassee, FL",
    "domain": "fau.edu"
  },
  {
    "id": 194,
    "name": "Florida Gulf Coast University",
    "city": "Tallahassee",
    "state": "FL",
    "location": "Tallahassee, FL",
    "domain": "fgcu.edu"
  },
  {
    "id": 195,
    "name": "Florida Institute of Technology",
    "city": "Tallahassee",
    "state": "FL",
    "location": "Tallahassee, FL",
    "domain": "fit.edu"
  },
  {
    "id": 196,
    "name": "Florida International University",
    "city": "Tallahassee",
    "state": "FL",
    "location": "Tallahassee, FL",
    "domain": "fiu.edu"
  },
  {
    "id": 197,
    "name": "Florida Keys Community College",
    "city": "Tallahassee",
    "state": "FL",
    "location": "Tallahassee, FL",
    "domain": "fkcc.edu"
  },
  {
    "id": 198,
    "name": "Florida Memorial University",
    "city": "Tallahassee",
    "state": "FL",
    "location": "Tallahassee, FL",
    "domain": "fmuniv.edu"
  },
  {
    "id": 199,
    "name": "Florida Polytechnic University",
    "city": "Tallahassee",
    "state": "FL",
    "location": "Tallahassee, FL",
    "domain": "floridapoly.edu"
  },
  {
    "id": 200,
    "name": "Florida Southern College",
    "city": "Tallahassee",
    "state": "FL",
    "location": "Tallahassee, FL",
    "domain": "flsouthern.edu"
  },
  {
    "id": 201,
    "name": "Florida SouthWestern State College",
    "city": "Tallahassee",
    "state": "FL",
    "location": "Tallahassee, FL",
    "domain": "fsw.edu"
  },
  {
    "id": 202,
    "name": "Florida State College at Jacksonville",
    "city": "Tallahassee",
    "state": "FL",
    "location": "Tallahassee, FL",
    "domain": "fscj.edu"
  },
  {
    "id": 203,
    "name": "Florida State University",
    "city": "Tallahassee",
    "state": "FL",
    "location": "Tallahassee, FL",
    "domain": "fsu.edu",
    "abbreviations": ["FSU", "Seminoles"]
  },
  {
    "id": 204,
    "name": "George Washington University",
    "city": "Washington",
    "state": "DC",
    "location": "Washington, DC",
    "domain": "gwu.edu",
    "abbreviations": ["GWU", "GW"]
  },
  {
    "id": 205,
    "name": "Georgia College",
    "city": "Atlanta",
    "state": "GA",
    "location": "Atlanta, GA",
    "domain": "gcsu.edu"
  },
  {
    "id": 206,
    "name": "Georgia Gwinnett College",
    "city": "Atlanta",
    "state": "GA",
    "location": "Atlanta, GA",
    "domain": "ggc.edu"
  },
  {
    "id": 207,
    "name": "Georgia Highlands College",
    "city": "Atlanta",
    "state": "GA",
    "location": "Atlanta, GA",
    "domain": "highlands.edu"
  },
  {
    "id": 208,
    "name": "Georgia Military College",
    "city": "Atlanta",
    "state": "GA",
    "location": "Atlanta, GA",
    "domain": "gmc.cc.ga.us"
  },
  {
    "id": 209,
    "name": "Georgia Northwestern Technical College",
    "city": "Atlanta",
    "state": "GA",
    "location": "Atlanta, GA",
    "domain": "gntc.edu"
  },
  {
    "id": 210,
    "name": "Georgia Perimeter College",
    "city": "Atlanta",
    "state": "GA",
    "location": "Atlanta, GA",
    "domain": "gpc.edu"
  },
  {
    "id": 211,
    "name": "Georgia Piedmont Technical College",
    "city": "Atlanta",
    "state": "GA",
    "location": "Atlanta, GA",
    "domain": "gptc.edu"
  },
  {
    "id": 212,
    "name": "Georgia Southern University",
    "city": "Atlanta",
    "state": "GA",
    "location": "Atlanta, GA",
    "domain": "georgiasouthern.edu"
  },
  {
    "id": 213,
    "name": "Georgia Southwestern State University",
    "city": "Atlanta",
    "state": "GA",
    "location": "Atlanta, GA",
    "domain": "gsw.edu"
  },
  {
    "id": 214,
    "name": "Georgia State University",
    "city": "Atlanta",
    "state": "GA",
    "location": "Atlanta, GA",
    "domain": "gsu.edu"
  },
  {
    "id": 215,
    "name": "Georgian Court University",
    "city": "Atlanta",
    "state": "GA",
    "location": "Atlanta, GA",
    "domain": "georgian.edu"
  },
  {
    "id": 216,
    "name": "Globe University & Minnesota School of Business",
    "city": "Saint Paul",
    "state": "MN",
    "location": "Saint Paul, MN",
    "domain": "msbcollege.edu"
  },
  {
    "id": 217,
    "name": "Great Falls College Montana State University",
    "city": "Helena",
    "state": "MT",
    "location": "Helena, MT",
    "domain": "gfcmsu.edu"
  },
  {
    "id": 218,
    "name": "Gulf Coast State College",
    "city": "Tallahassee",
    "state": "FL",
    "location": "Tallahassee, FL",
    "domain": "gulfcoast.edu"
  },
  {
    "id": 219,
    "name": "Gwynedd Mercy University",
    "city": "Harrisburg",
    "state": "PA",
    "location": "Harrisburg, PA",
    "domain": "gmercyu.edu"
  },
  {
    "id": 220,
    "name": "Haverford College in Pennsylvania",
    "city": "Harrisburg",
    "state": "PA",
    "location": "Harrisburg, PA",
    "domain": "haverford.edu"
  },
  {
    "id": 221,
    "name": "Hawaii Community College",
    "city": "Honolulu",
    "state": "HI",
    "location": "Honolulu, HI",
    "domain": "hawaii.hawaii.edu"
  },
  {
    "id": 222,
    "name": "Hawaii Pacific University",
    "city": "Honolulu",
    "state": "HI",
    "location": "Honolulu, HI",
    "domain": "hpu.edu"
  },
  {
    "id": 223,
    "name": "Helena College University of Montana",
    "city": "Helena",
    "state": "MT",
    "location": "Helena, MT",
    "domain": "umhelena.edu"
  },
  {
    "id": 224,
    "name": "Houston Baptist University",
    "city": "Austin",
    "state": "TX",
    "location": "Austin, TX",
    "domain": "hbu.edu"
  },
  {
    "id": 225,
    "name": "Idaho State University",
    "city": "Boise",
    "state": "ID",
    "location": "Boise, ID",
    "domain": "isu.edu"
  },
  {
    "id": 226,
    "name": "Illinois Benedictine College",
    "city": "Springfield",
    "state": "IL",
    "location": "Springfield, IL",
    "domain": "ibc.edu"
  },
  {
    "id": 227,
    "name": "Illinois Central College",
    "city": "Springfield",
    "state": "IL",
    "location": "Springfield, IL",
    "domain": "icc.edu"
  },
  {
    "id": 228,
    "name": "Illinois Eastern Community Colleges",
    "city": "Springfield",
    "state": "IL",
    "location": "Springfield, IL",
    "domain": "iecc.edu"
  },
  {
    "id": 229,
    "name": "Illinois Institute of Technology",
    "city": "Springfield",
    "state": "IL",
    "location": "Springfield, IL",
    "domain": "iit.edu"
  },
  {
    "id": 230,
    "name": "Illinois State University",
    "city": "Springfield",
    "state": "IL",
    "location": "Springfield, IL",
    "domain": "illinoisstate.edu"
  },
  {
    "id": 231,
    "name": "Illinois Valley Community College",
    "city": "Springfield",
    "state": "IL",
    "location": "Springfield, IL",
    "domain": "ivcc.edu"
  },
  {
    "id": 232,
    "name": "Illinois Wesleyan University",
    "city": "Springfield",
    "state": "IL",
    "location": "Springfield, IL",
    "domain": "iwu.edu"
  },
  {
    "id": 233,
    "name": "Indiana Institute of Technology",
    "city": "Indianapolis",
    "state": "IN",
    "location": "Indianapolis, IN",
    "domain": "indianatech.edu"
  },
  {
    "id": 234,
    "name": "Indiana State University",
    "city": "Indianapolis",
    "state": "IN",
    "location": "Indianapolis, IN",
    "domain": "indstate.edu"
  },
  {
    "id": 235,
    "name": "Indiana University",
    "city": "Indianapolis",
    "state": "IN",
    "location": "Indianapolis, IN",
    "domain": "iu.edu"
  },
  {
    "id": 236,
    "name": "Indiana University - Bloomington",
    "city": "Indianapolis",
    "state": "IN",
    "location": "Indianapolis, IN",
    "domain": "indiana.edu",
    "abbreviations": ["IU", "IUB", "Hoosiers"]
  },
  {
    "id": 237,
    "name": "Indiana University at South Bend",
    "city": "Indianapolis",
    "state": "IN",
    "location": "Indianapolis, IN",
    "domain": "iusb.edu"
  },
  {
    "id": 238,
    "name": "Indiana University of Pennsylvania",
    "city": "Harrisburg",
    "state": "PA",
    "location": "Harrisburg, PA",
    "domain": "iup.edu"
  },
  {
    "id": 239,
    "name": "Indiana University Southeast",
    "city": "Indianapolis",
    "state": "IN",
    "location": "Indianapolis, IN",
    "domain": "ius.edu"
  },
  {
    "id": 240,
    "name": "Indiana University/Purdue University at Columbus",
    "city": "Indianapolis",
    "state": "IN",
    "location": "Indianapolis, IN",
    "domain": "iupuc.edu"
  },
  {
    "id": 241,
    "name": "Indiana University/Purdue University at Fort Wayne",
    "city": "Indianapolis",
    "state": "IN",
    "location": "Indianapolis, IN",
    "domain": "ipfw.edu"
  },
  {
    "id": 242,
    "name": "Indiana University/Purdue University at Indianapolis",
    "city": "Indianapolis",
    "state": "IN",
    "location": "Indianapolis, IN",
    "domain": "iupui.edu"
  },
  {
    "id": 243,
    "name": "Indiana Wesleyan University, Marion",
    "city": "Indianapolis",
    "state": "IN",
    "location": "Indianapolis, IN",
    "domain": "indwes.edu"
  },
  {
    "id": 244,
    "name": "Iowa Central Community College",
    "city": "Des Moines",
    "state": "IA",
    "location": "Des Moines, IA",
    "domain": "iowacentral.edu"
  },
  {
    "id": 245,
    "name": "Iowa Lakes Community College",
    "city": "Des Moines",
    "state": "IA",
    "location": "Des Moines, IA",
    "domain": "iowalakes.edu"
  },
  {
    "id": 246,
    "name": "Iowa State University",
    "city": "Des Moines",
    "state": "IA",
    "location": "Des Moines, IA",
    "domain": "iastate.edu",
    "abbreviations": ["ISU", "Cyclones"]
  },
  {
    "id": 247,
    "name": "Iowa Western Community College",
    "city": "Des Moines",
    "state": "IA",
    "location": "Des Moines, IA",
    "domain": "iwcc.edu"
  },
  {
    "id": 248,
    "name": "Island Drafting & Technical Institute",
    "city": "Albany",
    "state": "NY",
    "location": "Albany, NY",
    "domain": "idti.edu"
  },
  {
    "id": 249,
    "name": "Kansas City Kansas Community College",
    "city": "Topeka",
    "state": "KS",
    "location": "Topeka, KS",
    "domain": "kckcc.edu"
  },
  {
    "id": 250,
    "name": "Kansas City University",
    "city": "Topeka",
    "state": "KS",
    "location": "Topeka, KS",
    "domain": "kansascity.edu"
  },
  {
    "id": 251,
    "name": "Kansas State University",
    "city": "Topeka",
    "state": "KS",
    "location": "Topeka, KS",
    "domain": "ksu.edu"
  },
  {
    "id": 252,
    "name": "Kansas Wesleyan University",
    "city": "Topeka",
    "state": "KS",
    "location": "Topeka, KS",
    "domain": "kwu.edu"
  },
  {
    "id": 253,
    "name": "Kentucky Community & Technical College System",
    "city": "Frankfort",
    "state": "KY",
    "location": "Frankfort, KY",
    "domain": "kctcs.edu"
  },
  {
    "id": 254,
    "name": "Kentucky State University",
    "city": "Frankfort",
    "state": "KY",
    "location": "Frankfort, KY",
    "domain": "kysu.edu"
  },
  {
    "id": 255,
    "name": "Kutztown University of Pennsylvania",
    "city": "Harrisburg",
    "state": "PA",
    "location": "Harrisburg, PA",
    "domain": "kutztown.edu"
  },
  {
    "id": 256,
    "name": "Lake Michigan College",
    "city": "Lansing",
    "state": "MI",
    "location": "Lansing, MI",
    "domain": "lakemichigancollege.edu"
  },
  {
    "id": 257,
    "name": "Lenoir-Rhyne University",
    "city": "Raleigh",
    "state": "NC",
    "location": "Raleigh, NC",
    "domain": "lr.edu"
  },
  {
    "id": 258,
    "name": "Louisiana College",
    "city": "Baton Rouge",
    "state": "LA",
    "location": "Baton Rouge, LA",
    "domain": "lacollege.edu"
  },
  {
    "id": 259,
    "name": "Louisiana Delta Community College",
    "city": "Baton Rouge",
    "state": "LA",
    "location": "Baton Rouge, LA",
    "domain": "ladelta.edu"
  },
  {
    "id": 260,
    "name": "Louisiana State University",
    "city": "Baton Rouge",
    "state": "LA",
    "location": "Baton Rouge, LA",
    "domain": "lsu.edu",
    "abbreviations": ["LSU", "Tigers"]
  },
  {
    "id": 261,
    "name": "Louisiana State University - Shreveport",
    "city": "Baton Rouge",
    "state": "LA",
    "location": "Baton Rouge, LA",
    "domain": "lsus.edu"
  },
  {
    "id": 262,
    "name": "Louisiana State University at Alexandria",
    "city": "Baton Rouge",
    "state": "LA",
    "location": "Baton Rouge, LA",
    "domain": "lsua.edu"
  },
  {
    "id": 263,
    "name": "Louisiana State University-Eunice",
    "city": "Baton Rouge",
    "state": "LA",
    "location": "Baton Rouge, LA",
    "domain": "lsue.edu"
  },
  {
    "id": 264,
    "name": "Louisiana Tech University",
    "city": "Baton Rouge",
    "state": "LA",
    "location": "Baton Rouge, LA",
    "domain": "latech.edu"
  },
  {
    "id": 265,
    "name": "Mansfield University of Pennsylvania",
    "city": "Harrisburg",
    "state": "PA",
    "location": "Harrisburg, PA",
    "domain": "mansfield.edu"
  },
  {
    "id": 266,
    "name": "Maricopa Community Colleges",
    "city": "Phoenix",
    "state": "AZ",
    "location": "Phoenix, AZ",
    "domain": "maricopa.edu"
  },
  {
    "id": 267,
    "name": "Mary Washington College",
    "city": "Olympia",
    "state": "WA",
    "location": "Olympia, WA",
    "domain": "mwc.edu"
  },
  {
    "id": 268,
    "name": "Maryland Institute College of Arts",
    "city": "Annapolis",
    "state": "MD",
    "location": "Annapolis, MD",
    "domain": "mica.edu"
  },
  {
    "id": 269,
    "name": "Massachusetts Bay Community College",
    "city": "Boston",
    "state": "MA",
    "location": "Boston, MA",
    "domain": "massbay.edu"
  },
  {
    "id": 270,
    "name": "Medical College of Georgia",
    "city": "Atlanta",
    "state": "GA",
    "location": "Atlanta, GA",
    "domain": "mcg.edu"
  },
  {
    "id": 271,
    "name": "Medical College of Wisconsin",
    "city": "Madison",
    "state": "WI",
    "location": "Madison, WI",
    "domain": "mcw.edu"
  },
  {
    "id": 272,
    "name": "Medical University of South Carolina",
    "city": "Columbia",
    "state": "SC",
    "location": "Columbia, SC",
    "domain": "musc.edu"
  },
  {
    "id": 273,
    "name": "Mercyhurst University",
    "city": "Harrisburg",
    "state": "PA",
    "location": "Harrisburg, PA",
    "domain": "mercyhurst.edu"
  },
  {
    "id": 274,
    "name": "Metropolitan Community College (MO)",
    "city": "Jefferson City",
    "state": "MO",
    "location": "Jefferson City, MO",
    "domain": "mcckc.edu"
  },
  {
    "id": 275,
    "name": "Metropolitan Community College (NE)",
    "city": "Lincoln",
    "state": "NE",
    "location": "Lincoln, NE",
    "domain": "mccneb.edu"
  },
  {
    "id": 276,
    "name": "Miami University of Ohio",
    "city": "Columbus",
    "state": "OH",
    "location": "Columbus, OH",
    "domain": "miamioh.edu"
  },
  {
    "id": 277,
    "name": "Michigan State University",
    "city": "Lansing",
    "state": "MI",
    "location": "Lansing, MI",
    "domain": "msu.edu",
    "abbreviations": ["MSU", "Spartans"]
  },
  {
    "id": 278,
    "name": "Michigan Technological University",
    "city": "Lansing",
    "state": "MI",
    "location": "Lansing, MI",
    "domain": "mtu.edu"
  },
  {
    "id": 279,
    "name": "Mid Michigan Community College",
    "city": "Lansing",
    "state": "MI",
    "location": "Lansing, MI",
    "domain": "midmich.edu"
  },
  {
    "id": 280,
    "name": "Middle Georgia State College",
    "city": "Atlanta",
    "state": "GA",
    "location": "Atlanta, GA",
    "domain": "mga.edu"
  },
  {
    "id": 281,
    "name": "Middle Tennessee State University",
    "city": "Nashville",
    "state": "TN",
    "location": "Nashville, TN",
    "domain": "mtsu.edu"
  },
  {
    "id": 282,
    "name": "Millersville University of Pennsylvania",
    "city": "Harrisburg",
    "state": "PA",
    "location": "Harrisburg, PA",
    "domain": "millersville.edu"
  },
  {
    "id": 283,
    "name": "Minerva University",
    "city": "Sacramento",
    "state": "CA",
    "location": "Sacramento, CA",
    "domain": "minerva.edu"
  },
  {
    "id": 284,
    "name": "Minnesota State College-Southeast Technical",
    "city": "Saint Paul",
    "state": "MN",
    "location": "Saint Paul, MN",
    "domain": "southeastmn.edu"
  },
  {
    "id": 285,
    "name": "Minnesota State Community and Technical College",
    "city": "Saint Paul",
    "state": "MN",
    "location": "Saint Paul, MN",
    "domain": "minnesota.edu"
  },
  {
    "id": 286,
    "name": "Minnesota State University Moorhead",
    "city": "Saint Paul",
    "state": "MN",
    "location": "Saint Paul, MN",
    "domain": "mnstate.edu"
  },
  {
    "id": 287,
    "name": "Minnesota State University, Mankato",
    "city": "Saint Paul",
    "state": "MN",
    "location": "Saint Paul, MN",
    "domain": "mnsu.edu"
  },
  {
    "id": 288,
    "name": "Minnesota West Community and Technical College",
    "city": "Saint Paul",
    "state": "MN",
    "location": "Saint Paul, MN",
    "domain": "mnwest.edu"
  },
  {
    "id": 289,
    "name": "Mississippi College",
    "city": "Jackson",
    "state": "MS",
    "location": "Jackson, MS",
    "domain": "mc.edu"
  },
  {
    "id": 290,
    "name": "Mississippi Delta Community College",
    "city": "Jackson",
    "state": "MS",
    "location": "Jackson, MS",
    "domain": "msdelta.edu"
  },
  {
    "id": 291,
    "name": "Mississippi Gulf Coast Community College",
    "city": "Jackson",
    "state": "MS",
    "location": "Jackson, MS",
    "domain": "mgccc.edu"
  },
  {
    "id": 292,
    "name": "Mississippi State University",
    "city": "Jackson",
    "state": "MS",
    "location": "Jackson, MS",
    "domain": "msstate.edu"
  },
  {
    "id": 293,
    "name": "Mississippi University for Women",
    "city": "Jackson",
    "state": "MS",
    "location": "Jackson, MS",
    "domain": "muw.edu"
  },
  {
    "id": 294,
    "name": "Mississippi Valley State University",
    "city": "Jackson",
    "state": "MS",
    "location": "Jackson, MS",
    "domain": "mvsu.edu"
  },
  {
    "id": 295,
    "name": "Missouri Southern State College",
    "city": "Jefferson City",
    "state": "MO",
    "location": "Jefferson City, MO",
    "domain": "mssc.edu"
  },
  {
    "id": 296,
    "name": "Missouri State University",
    "city": "Jefferson City",
    "state": "MO",
    "location": "Jefferson City, MO",
    "domain": "missouristate.edu"
  },
  {
    "id": 297,
    "name": "Missouri State University-West Plains",
    "city": "Jefferson City",
    "state": "MO",
    "location": "Jefferson City, MO",
    "domain": "wp.missouristate.edu"
  },
  {
    "id": 298,
    "name": "Missouri University of Science and Technology",
    "city": "Jefferson City",
    "state": "MO",
    "location": "Jefferson City, MO",
    "domain": "mst.edu"
  },
  {
    "id": 299,
    "name": "Missouri Western State College",
    "city": "Jefferson City",
    "state": "MO",
    "location": "Jefferson City, MO",
    "domain": "mwsc.edu"
  },
  {
    "id": 300,
    "name": "Montana State University - Billings",
    "city": "Helena",
    "state": "MT",
    "location": "Helena, MT",
    "domain": "msubillings.edu"
  },
  {
    "id": 301,
    "name": "Montana State University - Bozeman",
    "city": "Helena",
    "state": "MT",
    "location": "Helena, MT",
    "domain": "montana.edu"
  },
  {
    "id": 302,
    "name": "Montana State University - Northern",
    "city": "Helena",
    "state": "MT",
    "location": "Helena, MT",
    "domain": "msun.edu"
  },
  {
    "id": 303,
    "name": "Montana Tech",
    "city": "Helena",
    "state": "MT",
    "location": "Helena, MT",
    "domain": "mtech.edu"
  },
  {
    "id": 304,
    "name": "Morehouse College",
    "city": "Atlanta",
    "state": "GA",
    "location": "Atlanta, GA",
    "domain": "morehouse.edu",
    "abbreviations": ["Morehouse", "MC"]
  },
  {
    "id": 305,
    "name": "Nebraska College of Technical Agriculture",
    "city": "Lincoln",
    "state": "NE",
    "location": "Lincoln, NE",
    "domain": "ncta.unl.edu"
  },
  {
    "id": 306,
    "name": "Nebraska Indian Community College",
    "city": "Lincoln",
    "state": "NE",
    "location": "Lincoln, NE",
    "domain": "thenicc.edu"
  },
  {
    "id": 307,
    "name": "Nebraska Wesleyan University",
    "city": "Lincoln",
    "state": "NE",
    "location": "Lincoln, NE",
    "domain": "nebrwesleyan.edu"
  },
  {
    "id": 308,
    "name": "Nevada System of Higher Education",
    "city": "Carson City",
    "state": "NV",
    "location": "Carson City, NV",
    "domain": "nevada.edu"
  },
  {
    "id": 309,
    "name": "New College of California",
    "city": "Sacramento",
    "state": "CA",
    "location": "Sacramento, CA",
    "domain": "newcollege.edu"
  },
  {
    "id": 310,
    "name": "New College of Florida",
    "city": "Tallahassee",
    "state": "FL",
    "location": "Tallahassee, FL",
    "domain": "ncf.edu"
  },
  {
    "id": 311,
    "name": "New Hampshire College",
    "city": "Concord",
    "state": "NH",
    "location": "Concord, NH",
    "domain": "nhc.edu"
  },
  {
    "id": 312,
    "name": "New Jersey City University",
    "city": "Trenton",
    "state": "NJ",
    "location": "Trenton, NJ",
    "domain": "njcu.edu"
  },
  {
    "id": 313,
    "name": "New Jersey Institute of Technology",
    "city": "Trenton",
    "state": "NJ",
    "location": "Trenton, NJ",
    "domain": "njit.edu"
  },
  {
    "id": 314,
    "name": "New Mexico Highlands University",
    "city": "Santa Fe",
    "state": "NM",
    "location": "Santa Fe, NM",
    "domain": "nmhu.edu"
  },
  {
    "id": 315,
    "name": "New Mexico Institute of Mining & Technology",
    "city": "Santa Fe",
    "state": "NM",
    "location": "Santa Fe, NM",
    "domain": "nmt.edu"
  },
  {
    "id": 316,
    "name": "New Mexico Junior College",
    "city": "Santa Fe",
    "state": "NM",
    "location": "Santa Fe, NM",
    "domain": "nmjc.edu"
  },
  {
    "id": 317,
    "name": "New Mexico Military Institute",
    "city": "Santa Fe",
    "state": "NM",
    "location": "Santa Fe, NM",
    "domain": "nmmi.edu"
  },
  {
    "id": 318,
    "name": "New Mexico State University",
    "city": "Santa Fe",
    "state": "NM",
    "location": "Santa Fe, NM",
    "domain": "nmsu.edu"
  },
  {
    "id": 319,
    "name": "New Mexico State University-Alamogordo",
    "city": "Santa Fe",
    "state": "NM",
    "location": "Santa Fe, NM",
    "domain": "nmsua.edu"
  },
  {
    "id": 320,
    "name": "New Mexico State University-Carlsbad",
    "city": "Santa Fe",
    "state": "NM",
    "location": "Santa Fe, NM",
    "domain": "cavern.nmsu.edu"
  },
  {
    "id": 321,
    "name": "New Mexico State University-Dona Ana",
    "city": "Santa Fe",
    "state": "NM",
    "location": "Santa Fe, NM",
    "domain": "dabcc.nmsu.edu"
  },
  {
    "id": 322,
    "name": "New York Institute of Technology",
    "city": "Albany",
    "state": "NY",
    "location": "Albany, NY",
    "domain": "nyit.edu"
  },
  {
    "id": 323,
    "name": "New York Medical College",
    "city": "Albany",
    "state": "NY",
    "location": "Albany, NY",
    "domain": "nymc.edu"
  },
  {
    "id": 324,
    "name": "North Arkansas College",
    "city": "Little Rock",
    "state": "AR",
    "location": "Little Rock, AR",
    "domain": "northark.edu"
  },
  {
    "id": 325,
    "name": "North Carolina A&T State University",
    "city": "Raleigh",
    "state": "NC",
    "location": "Raleigh, NC",
    "domain": "ncat.edu"
  },
  {
    "id": 326,
    "name": "North Carolina Central University",
    "city": "Raleigh",
    "state": "NC",
    "location": "Raleigh, NC",
    "domain": "nccu.edu"
  },
  {
    "id": 327,
    "name": "North Carolina State University",
    "city": "Raleigh",
    "state": "NC",
    "location": "Raleigh, NC",
    "domain": "ncsu.edu"
  },
  {
    "id": 328,
    "name": "North Carolina Wesleyan College",
    "city": "Raleigh",
    "state": "NC",
    "location": "Raleigh, NC",
    "domain": "ncwc.edu"
  },
  {
    "id": 329,
    "name": "North Central Kansas Technical College",
    "city": "Topeka",
    "state": "KS",
    "location": "Topeka, KS",
    "domain": "ncktc.edu"
  },
  {
    "id": 330,
    "name": "North Central Michigan College",
    "city": "Lansing",
    "state": "MI",
    "location": "Lansing, MI",
    "domain": "ncmich.edu"
  },
  {
    "id": 331,
    "name": "North Central Missouri College",
    "city": "Jefferson City",
    "state": "MO",
    "location": "Jefferson City, MO",
    "domain": "ncmissouri.edu"
  },
  {
    "id": 332,
    "name": "North Central Texas College",
    "city": "Austin",
    "state": "TX",
    "location": "Austin, TX",
    "domain": "nctc.edu"
  },
  {
    "id": 333,
    "name": "North Dakota State College of Science",
    "city": "Bismarck",
    "state": "ND",
    "location": "Bismarck, ND",
    "domain": "ndscs.edu"
  },
  {
    "id": 334,
    "name": "North Dakota State University",
    "city": "Bismarck",
    "state": "ND",
    "location": "Bismarck, ND",
    "domain": "ndsu.edu"
  },
  {
    "id": 335,
    "name": "North Dakota University System",
    "city": "Bismarck",
    "state": "ND",
    "location": "Bismarck, ND",
    "domain": "ndus.edu"
  },
  {
    "id": 336,
    "name": "North Florida Community College",
    "city": "Tallahassee",
    "state": "FL",
    "location": "Tallahassee, FL",
    "domain": "nfcc.edu"
  },
  {
    "id": 337,
    "name": "North Georgia Technical College",
    "city": "Atlanta",
    "state": "GA",
    "location": "Atlanta, GA",
    "domain": "northgatech.edu"
  },
  {
    "id": 338,
    "name": "North Idaho College",
    "city": "Boise",
    "state": "ID",
    "location": "Boise, ID",
    "domain": "nic.edu"
  },
  {
    "id": 339,
    "name": "North Iowa Area Community College",
    "city": "Des Moines",
    "state": "IA",
    "location": "Des Moines, IA",
    "domain": "niacc.edu"
  },
  {
    "id": 340,
    "name": "Northeast Alabama Community College",
    "city": "Montgomery",
    "state": "AL",
    "location": "Montgomery, AL",
    "domain": "nacc.edu"
  },
  {
    "id": 341,
    "name": "Northeast Iowa Community College",
    "city": "Des Moines",
    "state": "IA",
    "location": "Des Moines, IA",
    "domain": "nicc.edu"
  },
  {
    "id": 342,
    "name": "Northeast Mississippi Community College",
    "city": "Jackson",
    "state": "MS",
    "location": "Jackson, MS",
    "domain": "nemcc.edu"
  },
  {
    "id": 343,
    "name": "Northeast Texas Community College",
    "city": "Austin",
    "state": "TX",
    "location": "Austin, TX",
    "domain": "ntcc.edu"
  },
  {
    "id": 344,
    "name": "Northeast Wisconsin Technical College",
    "city": "Madison",
    "state": "WI",
    "location": "Madison, WI",
    "domain": "nwtc.edu"
  },
  {
    "id": 345,
    "name": "Northeastern Louisiana University",
    "city": "Baton Rouge",
    "state": "LA",
    "location": "Baton Rouge, LA",
    "domain": "nlu.edu"
  },
  {
    "id": 346,
    "name": "Northeastern Oklahoma A&M College",
    "city": "Oklahoma City",
    "state": "OK",
    "location": "Oklahoma City, OK",
    "domain": "neo.edu",
    "abbreviations": ["NEO A&M", "NEO A and M", "NEO"]
  },
  {
    "id": 347,
    "name": "Northern Arizona University",
    "city": "Phoenix",
    "state": "AZ",
    "location": "Phoenix, AZ",
    "domain": "nau.edu"
  },
  {
    "id": 348,
    "name": "Northern Illinois University",
    "city": "Springfield",
    "state": "IL",
    "location": "Springfield, IL",
    "domain": "niu.edu"
  },
  {
    "id": 349,
    "name": "Northern Kentucky University",
    "city": "Frankfort",
    "state": "KY",
    "location": "Frankfort, KY",
    "domain": "nku.edu"
  },
  {
    "id": 350,
    "name": "Northern Maine Community College",
    "city": "Augusta",
    "state": "ME",
    "location": "Augusta, ME",
    "domain": "nmcc.edu"
  },
  {
    "id": 351,
    "name": "Northern Michigan University",
    "city": "Lansing",
    "state": "MI",
    "location": "Lansing, MI",
    "domain": "nmu.edu"
  },
  {
    "id": 352,
    "name": "Northern Oklahoma College",
    "city": "Oklahoma City",
    "state": "OK",
    "location": "Oklahoma City, OK",
    "domain": "noc.edu"
  },
  {
    "id": 353,
    "name": "Northern Virginia Community College",
    "city": "Richmond",
    "state": "VA",
    "location": "Richmond, VA",
    "domain": "nvcc.edu"
  },
  {
    "id": 354,
    "name": "NorthWest Arkansas Community College",
    "city": "Little Rock",
    "state": "AR",
    "location": "Little Rock, AR",
    "domain": "nwacc.edu"
  },
  {
    "id": 355,
    "name": "Northwest Florida State College",
    "city": "Tallahassee",
    "state": "FL",
    "location": "Tallahassee, FL",
    "domain": "nwfsc.edu"
  },
  {
    "id": 356,
    "name": "Northwest Iowa Community College",
    "city": "Des Moines",
    "state": "IA",
    "location": "Des Moines, IA",
    "domain": "nwicc.edu"
  },
  {
    "id": 357,
    "name": "Northwest Kansas Technical College",
    "city": "Topeka",
    "state": "KS",
    "location": "Topeka, KS",
    "domain": "nwktc.edu"
  },
  {
    "id": 358,
    "name": "Northwest Mississippi Community College",
    "city": "Jackson",
    "state": "MS",
    "location": "Jackson, MS",
    "domain": "northwestms.edu"
  },
  {
    "id": 359,
    "name": "Northwest Missouri State University",
    "city": "Jefferson City",
    "state": "MO",
    "location": "Jefferson City, MO",
    "domain": "nwmissouri.edu"
  },
  {
    "id": 360,
    "name": "Northwestern College of Iowa",
    "city": "Des Moines",
    "state": "IA",
    "location": "Des Moines, IA",
    "domain": "nwciowa.edu"
  },
  {
    "id": 361,
    "name": "Northwestern Connecticut Community College",
    "city": "Hartford",
    "state": "CT",
    "location": "Hartford, CT",
    "domain": "nwcc.commnet.edu"
  },
  {
    "id": 362,
    "name": "Northwestern Michigan College",
    "city": "Lansing",
    "state": "MI",
    "location": "Lansing, MI",
    "domain": "nmc.edu"
  },
  {
    "id": 363,
    "name": "Northwood University",
    "city": "Lansing",
    "state": "MI",
    "location": "Lansing, MI",
    "domain": "northwood.edu"
  },
  {
    "id": 364,
    "name": "Ohio Dominican College",
    "city": "Columbus",
    "state": "OH",
    "location": "Columbus, OH",
    "domain": "odc.edu"
  },
  {
    "id": 365,
    "name": "Ohio Northern University",
    "city": "Columbus",
    "state": "OH",
    "location": "Columbus, OH",
    "domain": "onu.edu"
  },
  {
    "id": 366,
    "name": "Ohio State University - Columbus",
    "city": "Columbus",
    "state": "OH",
    "location": "Columbus, OH",
    "domain": "osu.edu"
  },
  {
    "id": 367,
    "name": "Ohio State University Agricultural Technical Institute",
    "city": "Columbus",
    "state": "OH",
    "location": "Columbus, OH",
    "domain": "ati.osu.edu"
  },
  {
    "id": 368,
    "name": "Ohio University",
    "city": "Columbus",
    "state": "OH",
    "location": "Columbus, OH",
    "domain": "ohio.edu"
  },
  {
    "id": 369,
    "name": "Ohio Wesleyan University",
    "city": "Columbus",
    "state": "OH",
    "location": "Columbus, OH",
    "domain": "owu.edu"
  },
  {
    "id": 370,
    "name": "Oklahoma Baptist University",
    "city": "Oklahoma City",
    "state": "OK",
    "location": "Oklahoma City, OK",
    "domain": "okbu.edu"
  },
  {
    "id": 371,
    "name": "Oklahoma Christian University",
    "city": "Oklahoma City",
    "state": "OK",
    "location": "Oklahoma City, OK",
    "domain": "oc.edu"
  },
  {
    "id": 372,
    "name": "Oklahoma City Community College",
    "city": "Oklahoma City",
    "state": "OK",
    "location": "Oklahoma City, OK",
    "domain": "occc.edu"
  },
  {
    "id": 373,
    "name": "Oklahoma City University",
    "city": "Oklahoma City",
    "state": "OK",
    "location": "Oklahoma City, OK",
    "domain": "okcu.edu"
  },
  {
    "id": 374,
    "name": "Oklahoma State University",
    "city": "Oklahoma City",
    "state": "OK",
    "location": "Oklahoma City, OK",
    "domain": "okstate.edu",
    "abbreviations": ["OkState", "OSU Cowboys", "Cowboys"]
  },
  {
    "id": 375,
    "name": "Oregon Graduate Institute of Science and Technology",
    "city": "Salem",
    "state": "OR",
    "location": "Salem, OR",
    "domain": "ogi.edu"
  },
  {
    "id": 376,
    "name": "Oregon Health Sciences University",
    "city": "Salem",
    "state": "OR",
    "location": "Salem, OR",
    "domain": "ohsu.edu"
  },
  {
    "id": 377,
    "name": "Oregon Institute of Technology",
    "city": "Salem",
    "state": "OR",
    "location": "Salem, OR",
    "domain": "oit.edu"
  },
  {
    "id": 378,
    "name": "Oregon State University",
    "city": "Salem",
    "state": "OR",
    "location": "Salem, OR",
    "domain": "oregonstate.edu",
    "abbreviations": ["OSU", "Beavers"]
  },
  {
    "id": 379,
    "name": "Pennsylvania College of Technology",
    "city": "Harrisburg",
    "state": "PA",
    "location": "Harrisburg, PA",
    "domain": "pct.edu"
  },
  {
    "id": 380,
    "name": "Pennsylvania Highlands Community College",
    "city": "Harrisburg",
    "state": "PA",
    "location": "Harrisburg, PA",
    "domain": "pennhighlands.edu"
  },
  {
    "id": 381,
    "name": "Pennsylvania Institute of Technology",
    "city": "Harrisburg",
    "state": "PA",
    "location": "Harrisburg, PA",
    "domain": "pit.edu"
  },
  {
    "id": 382,
    "name": "Pennsylvania State University",
    "city": "Harrisburg",
    "state": "PA",
    "location": "Harrisburg, PA",
    "domain": "psu.edu"
  },
  {
    "id": 383,
    "name": "Pennsylvania State University - Harrisburg",
    "city": "Harrisburg",
    "state": "PA",
    "location": "Harrisburg, PA",
    "domain": "harrisburg.psu.edu"
  },
  {
    "id": 384,
    "name": "Pennsylvania State University - Schuylkill Campus",
    "city": "Harrisburg",
    "state": "PA",
    "location": "Harrisburg, PA",
    "domain": "sl.psu.edu"
  },
  {
    "id": 385,
    "name": "Phillips Community College of the University of Arkansas",
    "city": "Little Rock",
    "state": "AR",
    "location": "Little Rock, AR",
    "domain": "pccua.edu"
  },
  {
    "id": 386,
    "name": "Piedmont Virginia Community College",
    "city": "Richmond",
    "state": "VA",
    "location": "Richmond, VA",
    "domain": "pvcc.edu"
  },
  {
    "id": 387,
    "name": "Pittsburg State University",
    "city": "Harrisburg",
    "state": "PA",
    "location": "Harrisburg, PA",
    "domain": "pittstate.edu"
  },
  {
    "id": 388,
    "name": "Pittsburgh Technical Institute",
    "city": "Harrisburg",
    "state": "PA",
    "location": "Harrisburg, PA",
    "domain": "pti.edu"
  },
  {
    "id": 389,
    "name": "Plymouth State University",
    "city": "Concord",
    "state": "NH",
    "location": "Concord, NH",
    "domain": "plymouth.edu"
  },
  {
    "id": 390,
    "name": "Point Park University",
    "city": "Harrisburg",
    "state": "PA",
    "location": "Harrisburg, PA",
    "domain": "pointpark.edu"
  },
  {
    "id": 391,
    "name": "Polytechnic University of New York",
    "city": "Albany",
    "state": "NY",
    "location": "Albany, NY",
    "domain": "poly.edu"
  },
  {
    "id": 392,
    "name": "Pomona College",
    "city": "Sacramento",
    "state": "CA",
    "location": "Sacramento, CA",
    "domain": "pomona.edu"
  },
  {
    "id": 393,
    "name": "Purdue University Fort Wayne",
    "city": "Indianapolis",
    "state": "IN",
    "location": "Indianapolis, IN",
    "domain": "pfw.edu"
  },
  {
    "id": 394,
    "name": "Rhode Island College",
    "city": "Providence",
    "state": "RI",
    "location": "Providence, RI",
    "domain": "ric.edu"
  },
  {
    "id": 395,
    "name": "Richard Stockton College of New Jersey",
    "city": "Trenton",
    "state": "NJ",
    "location": "Trenton, NJ",
    "domain": "stockton.edu"
  },
  {
    "id": 396,
    "name": "Robert Morris University Illinois",
    "city": "Springfield",
    "state": "IL",
    "location": "Springfield, IL",
    "domain": "robertmorris.edu"
  },
  {
    "id": 397,
    "name": "Saint John's University (NY)",
    "city": "Albany",
    "state": "NY",
    "location": "Albany, NY",
    "domain": "stjohns.edu"
  },
  {
    "id": 398,
    "name": "Saint Joseph's College (IN)",
    "city": "Indianapolis",
    "state": "IN",
    "location": "Indianapolis, IN",
    "domain": "saintjoe.edu"
  },
  {
    "id": 399,
    "name": "Saint Mary's College (IN)",
    "city": "Indianapolis",
    "state": "IN",
    "location": "Indianapolis, IN",
    "domain": "saintmarys.edu"
  },
  {
    "id": 400,
    "name": "Saint Mary's College of California",
    "city": "Sacramento",
    "state": "CA",
    "location": "Sacramento, CA",
    "domain": "stmarys-ca.edu"
  },
  {
    "id": 401,
    "name": "Saint Mary's University of Minnesota",
    "city": "Saint Paul",
    "state": "MN",
    "location": "Saint Paul, MN",
    "domain": "smumn.edu"
  },
  {
    "id": 402,
    "name": "San Bernardino Valley College",
    "city": "Sacramento",
    "state": "CA",
    "location": "Sacramento, CA",
    "domain": "valleycollege.edu"
  },
  {
    "id": 403,
    "name": "San Diego City College",
    "city": "Sacramento",
    "state": "CA",
    "location": "Sacramento, CA",
    "domain": "sdcity.edu"
  },
  {
    "id": 404,
    "name": "San Diego Mesa College",
    "city": "Sacramento",
    "state": "CA",
    "location": "Sacramento, CA",
    "domain": "sdmesa.edu"
  },
  {
    "id": 405,
    "name": "San Diego Miramar College",
    "city": "Sacramento",
    "state": "CA",
    "location": "Sacramento, CA",
    "domain": "sdmiramar.edu"
  },
  {
    "id": 406,
    "name": "Schreiner University",
    "city": "Austin",
    "state": "TX",
    "location": "Austin, TX",
    "domain": "schreiner.edu"
  },
  {
    "id": 407,
    "name": "Shippensburg University of Pennsylvania",
    "city": "Harrisburg",
    "state": "PA",
    "location": "Harrisburg, PA",
    "domain": "ship.edu"
  },
  {
    "id": 408,
    "name": "Simmons College of Kentucky",
    "city": "Frankfort",
    "state": "KY",
    "location": "Frankfort, KY",
    "domain": "simmonscollegeky.edu"
  },
  {
    "id": 409,
    "name": "Slippery Rock University of Pennsylvania",
    "city": "Harrisburg",
    "state": "PA",
    "location": "Harrisburg, PA",
    "domain": "sru.edu"
  },
  {
    "id": 410,
    "name": "South Arkansas Community College",
    "city": "Little Rock",
    "state": "AR",
    "location": "Little Rock, AR",
    "domain": "southark.edu"
  },
  {
    "id": 411,
    "name": "South Carolina State University",
    "city": "Columbia",
    "state": "SC",
    "location": "Columbia, SC",
    "domain": "scsu.edu"
  },
  {
    "id": 412,
    "name": "South Dakota School of Mines and Technology",
    "city": "Pierre",
    "state": "SD",
    "location": "Pierre, SD",
    "domain": "sdsmt.edu"
  },
  {
    "id": 413,
    "name": "South Dakota State University",
    "city": "Pierre",
    "state": "SD",
    "location": "Pierre, SD",
    "domain": "sdstate.edu"
  },
  {
    "id": 414,
    "name": "South Florida State College",
    "city": "Tallahassee",
    "state": "FL",
    "location": "Tallahassee, FL",
    "domain": "southflorida.edu"
  },
  {
    "id": 415,
    "name": "South Georgia Technical College",
    "city": "Atlanta",
    "state": "GA",
    "location": "Atlanta, GA",
    "domain": "southgatech.edu"
  },
  {
    "id": 416,
    "name": "South Louisiana Community College",
    "city": "Baton Rouge",
    "state": "LA",
    "location": "Baton Rouge, LA",
    "domain": "solacc.edu"
  },
  {
    "id": 417,
    "name": "South Texas College of Law",
    "city": "Austin",
    "state": "TX",
    "location": "Austin, TX",
    "domain": "stcl.edu"
  },
  {
    "id": 418,
    "name": "Southcentral Kentucky Community and Technical College",
    "city": "Frankfort",
    "state": "KY",
    "location": "Frankfort, KY",
    "domain": "bowlinggreen.kctcs.edu"
  },
  {
    "id": 419,
    "name": "Southeast Arkansas College",
    "city": "Little Rock",
    "state": "AR",
    "location": "Little Rock, AR",
    "domain": "seark.edu"
  },
  {
    "id": 420,
    "name": "Southeast Kentucky Community and Technical College",
    "city": "Frankfort",
    "state": "KY",
    "location": "Frankfort, KY",
    "domain": "southeast.kctcs.edu"
  },
  {
    "id": 421,
    "name": "Southeast Missouri Hospital College of Nursing and Health Sciences",
    "city": "Jefferson City",
    "state": "MO",
    "location": "Jefferson City, MO",
    "domain": "southeastmissourihospitalcollege.edu"
  },
  {
    "id": 422,
    "name": "Southeast Missouri State University",
    "city": "Jefferson City",
    "state": "MO",
    "location": "Jefferson City, MO",
    "domain": "semo.edu"
  },
  {
    "id": 423,
    "name": "Southeastern Illinois College",
    "city": "Springfield",
    "state": "IL",
    "location": "Springfield, IL",
    "domain": "sic.edu"
  },
  {
    "id": 424,
    "name": "Southeastern Louisiana University",
    "city": "Baton Rouge",
    "state": "LA",
    "location": "Baton Rouge, LA",
    "domain": "selu.edu"
  },
  {
    "id": 425,
    "name": "Southern Arkansas University Tech",
    "city": "Little Rock",
    "state": "AR",
    "location": "Little Rock, AR",
    "domain": "sautech.edu"
  },
  {
    "id": 426,
    "name": "Southern Connecticut State University",
    "city": "Hartford",
    "state": "CT",
    "location": "Hartford, CT",
    "domain": "southernct.edu"
  },
  {
    "id": 427,
    "name": "Southern Illinois University-Carbondale",
    "city": "Springfield",
    "state": "IL",
    "location": "Springfield, IL",
    "domain": "siu.edu"
  },
  {
    "id": 428,
    "name": "Southern Illinois University-Edwardsville",
    "city": "Springfield",
    "state": "IL",
    "location": "Springfield, IL",
    "domain": "siue.edu"
  },
  {
    "id": 429,
    "name": "Southern Maine Community College",
    "city": "Augusta",
    "state": "ME",
    "location": "Augusta, ME",
    "domain": "smccme.edu"
  },
  {
    "id": 430,
    "name": "Southern New Hampshire University",
    "city": "Concord",
    "state": "NH",
    "location": "Concord, NH",
    "domain": "snhu.edu"
  },
  {
    "id": 431,
    "name": "Southern Oregon State College",
    "city": "Salem",
    "state": "OR",
    "location": "Salem, OR",
    "domain": "sou.edu"
  },
  {
    "id": 432,
    "name": "Southern Utah University",
    "city": "Salt Lake City",
    "state": "UT",
    "location": "Salt Lake City, UT",
    "domain": "suu.edu"
  },
  {
    "id": 433,
    "name": "Southern Virginia University",
    "city": "Richmond",
    "state": "VA",
    "location": "Richmond, VA",
    "domain": "svu.edu"
  },
  {
    "id": 434,
    "name": "Southern West Virginia Community and Technical College",
    "city": "Charleston",
    "state": "WV",
    "location": "Charleston, WV",
    "domain": "southernwv.edu"
  },
  {
    "id": 435,
    "name": "Southside Virginia Community College",
    "city": "Richmond",
    "state": "VA",
    "location": "Richmond, VA",
    "domain": "southside.edu"
  },
  {
    "id": 436,
    "name": "Southwest Georgia Technical College",
    "city": "Atlanta",
    "state": "GA",
    "location": "Atlanta, GA",
    "domain": "southwestgatech.edu"
  },
  {
    "id": 437,
    "name": "Southwest Minnesota State University",
    "city": "Saint Paul",
    "state": "MN",
    "location": "Saint Paul, MN",
    "domain": "smsu.edu"
  },
  {
    "id": 438,
    "name": "Southwest Mississippi Community College",
    "city": "Jackson",
    "state": "MS",
    "location": "Jackson, MS",
    "domain": "smcc.edu"
  },
  {
    "id": 439,
    "name": "Southwest Tennessee Community College",
    "city": "Nashville",
    "state": "TN",
    "location": "Nashville, TN",
    "domain": "southwest.tn.edu"
  },
  {
    "id": 440,
    "name": "Southwest Texas Junior College",
    "city": "Austin",
    "state": "TX",
    "location": "Austin, TX",
    "domain": "swtjc.net"
  },
  {
    "id": 441,
    "name": "Southwest Texas State University",
    "city": "Austin",
    "state": "TX",
    "location": "Austin, TX",
    "domain": "swt.edu"
  },
  {
    "id": 442,
    "name": "Southwest Virginia Community College",
    "city": "Charleston",
    "state": "WV",
    "location": "Charleston, WV",
    "domain": "sw.edu"
  },
  {
    "id": 443,
    "name": "Southwest Wisconsin Technical College",
    "city": "Madison",
    "state": "WI",
    "location": "Madison, WI",
    "domain": "swtc.edu"
  },
  {
    "id": 444,
    "name": "Southwestern College (CA)",
    "city": "Sacramento",
    "state": "CA",
    "location": "Sacramento, CA",
    "domain": "swccd.edu"
  },
  {
    "id": 445,
    "name": "Southwestern College (KS)",
    "city": "Topeka",
    "state": "KS",
    "location": "Topeka, KS",
    "domain": "sckans.edu"
  },
  {
    "id": 446,
    "name": "Southwestern Illinois College",
    "city": "Springfield",
    "state": "IL",
    "location": "Springfield, IL",
    "domain": "swic.edu"
  },
  {
    "id": 447,
    "name": "Southwestern Michigan College",
    "city": "Lansing",
    "state": "MI",
    "location": "Lansing, MI",
    "domain": "swmich.edu"
  },
  {
    "id": 448,
    "name": "Southwestern Oregon Community College",
    "city": "Salem",
    "state": "OR",
    "location": "Salem, OR",
    "domain": "socc.edu"
  },
  {
    "id": 449,
    "name": "St. Francis College",
    "city": "Albany",
    "state": "NY",
    "location": "Albany, NY",
    "domain": "sfc.edu"
  },
  {
    "id": 450,
    "name": "St. Joseph College (CT)",
    "city": "Hartford",
    "state": "CT",
    "location": "Hartford, CT",
    "domain": "sjc.edu"
  },
  {
    "id": 451,
    "name": "St. Joseph's College (ME)",
    "city": "Augusta",
    "state": "ME",
    "location": "Augusta, ME",
    "domain": "sjcme.edu"
  },
  {
    "id": 452,
    "name": "St. Mary's College of Maryland",
    "city": "Annapolis",
    "state": "MD",
    "location": "Annapolis, MD",
    "domain": "smcm.edu"
  },
  {
    "id": 453,
    "name": "St. Mary's University",
    "city": "Austin",
    "state": "TX",
    "location": "Austin, TX",
    "domain": "stmarytx.edu"
  },
  {
    "id": 454,
    "name": "St. Thomas University (FL)",
    "city": "Tallahassee",
    "state": "FL",
    "location": "Tallahassee, FL",
    "domain": "stu.edu"
  },
  {
    "id": 455,
    "name": "State University of New York at Albany",
    "city": "Albany",
    "state": "NY",
    "location": "Albany, NY",
    "domain": "albany.edu"
  },
  {
    "id": 456,
    "name": "State University of New York at Binghamton",
    "city": "Binghamton",
    "state": "NY",
    "location": "Binghamton, NY",
    "domain": "binghamton.edu",
    "abbreviations": ["Binghamton", "BU", "SUNY Binghamton", "Bing"]
  },
  {
    "id": 457,
    "name": "State University of New York at Buffalo",
    "city": "Buffalo",
    "state": "NY",
    "location": "Buffalo, NY",
    "domain": "buffalo.edu",
    "abbreviations": ["UB", "SUNY Buffalo", "University at Buffalo"]
  },
  {
    "id": 458,
    "name": "State University of New York at Farmingdale",
    "city": "Albany",
    "state": "NY",
    "location": "Albany, NY",
    "domain": "farmingdale.edu"
  },
  {
    "id": 459,
    "name": "State University of New York at Fredonia",
    "city": "Albany",
    "state": "NY",
    "location": "Albany, NY",
    "domain": "fredonia.edu"
  },
  {
    "id": 460,
    "name": "State University of New York at Oneonta",
    "city": "Albany",
    "state": "NY",
    "location": "Albany, NY",
    "domain": "suny.oneonta.edu"
  },
  {
    "id": 461,
    "name": "State University of New York at Oswego",
    "city": "Albany",
    "state": "NY",
    "location": "Albany, NY",
    "domain": "oswego.edu"
  },
  {
    "id": 462,
    "name": "State University of New York at Plattsburgh",
    "city": "Albany",
    "state": "NY",
    "location": "Albany, NY",
    "domain": "plattsburgh.edu"
  },
  {
    "id": 463,
    "name": "State University of New York at Stony Brook",
    "city": "Stony Brook",
    "state": "NY",
    "location": "Stony Brook, NY",
    "domain": "stonybrook.edu",
    "abbreviations": ["Stony Brook", "SBU", "SUNY Stony Brook"]
  },
  {
    "id": 464,
    "name": "State University of New York College at Brockport",
    "city": "Albany",
    "state": "NY",
    "location": "Albany, NY",
    "domain": "brockport.edu"
  },
  {
    "id": 465,
    "name": "State University of New York College at Buffalo",
    "city": "Albany",
    "state": "NY",
    "location": "Albany, NY",
    "domain": "buffalostate.edu"
  },
  {
    "id": 466,
    "name": "State University of New York College at Cortland",
    "city": "Albany",
    "state": "NY",
    "location": "Albany, NY",
    "domain": "cortland.edu"
  },
  {
    "id": 467,
    "name": "State University of New York College at Geneseo",
    "city": "Albany",
    "state": "NY",
    "location": "Albany, NY",
    "domain": "geneseo.edu"
  },
  {
    "id": 468,
    "name": "State University of New York College at New Paltz",
    "city": "Albany",
    "state": "NY",
    "location": "Albany, NY",
    "domain": "newpaltz.edu"
  },
  {
    "id": 469,
    "name": "State University of New York College at Oneonta",
    "city": "Albany",
    "state": "NY",
    "location": "Albany, NY",
    "domain": "oneonta.edu"
  },
  {
    "id": 470,
    "name": "State University of New York College at Potsdam",
    "city": "Albany",
    "state": "NY",
    "location": "Albany, NY",
    "domain": "potsdam.edu"
  },
  {
    "id": 471,
    "name": "State University of New York College of Agriculture and Technology at Cobleskill",
    "city": "Albany",
    "state": "NY",
    "location": "Albany, NY",
    "domain": "cobleskill.edu"
  },
  {
    "id": 472,
    "name": "State University of New York College of Environmental Science and Forestry",
    "city": "Albany",
    "state": "NY",
    "location": "Albany, NY",
    "domain": "esf.edu"
  },
  {
    "id": 473,
    "name": "State University of New York College of Technology at Alfred",
    "city": "Albany",
    "state": "NY",
    "location": "Albany, NY",
    "domain": "alfredtech.edu"
  },
  {
    "id": 474,
    "name": "State University of New York Polytechnic Institute",
    "city": "Albany",
    "state": "NY",
    "location": "Albany, NY",
    "domain": "sunyit.edu"
  },
  {
    "id": 475,
    "name": "State University of New York System",
    "city": "Albany",
    "state": "NY",
    "location": "Albany, NY",
    "domain": "sunycentral.edu"
  },
  {
    "id": 476,
    "name": "Stonehill College",
    "city": "Boston",
    "state": "MA",
    "location": "Boston, MA",
    "domain": "stonehill.edu"
  },
  {
    "id": 477,
    "name": "Summit University of Louisiana",
    "city": "Baton Rouge",
    "state": "LA",
    "location": "Baton Rouge, LA",
    "domain": "summitunivofla.edu"
  },
  {
    "id": 478,
    "name": "SUNY Broome Community College",
    "city": "Albany",
    "state": "NY",
    "location": "Albany, NY",
    "domain": "sunybroome.edu"
  },
  {
    "id": 479,
    "name": "Tennessee State University",
    "city": "Nashville",
    "state": "TN",
    "location": "Nashville, TN",
    "domain": "tnstate.edu"
  },
  {
    "id": 480,
    "name": "Tennessee Technological University",
    "city": "Nashville",
    "state": "TN",
    "location": "Nashville, TN",
    "domain": "tntech.edu"
  },
  {
    "id": 482,
    "name": "Texas A&M University",
    "city": "College Station",
    "state": "TX",
    "location": "College Station, TX",
    "domain": "tamu.edu",
    "abbreviations": ["TAMU", "A&M", "A and M", "Texas A&M", "Aggies"]
  },
  {
    "id": 487,
    "name": "Texas Christian University",
    "city": "Fort Worth",
    "state": "TX",
    "location": "Fort Worth, TX",
    "domain": "tcu.edu",
    "abbreviations": ["TCU", "Horned Frogs"]
  },
  {
    "id": 488,
    "name": "Texas College",
    "city": "Austin",
    "state": "TX",
    "location": "Austin, TX",
    "domain": "texascollege.edu"
  },
  {
    "id": 489,
    "name": "Texas Southern University",
    "city": "Austin",
    "state": "TX",
    "location": "Austin, TX",
    "domain": "tsu.edu"
  },
  {
    "id": 490,
    "name": "Texas State Technical College-Harlingen",
    "city": "Austin",
    "state": "TX",
    "location": "Austin, TX",
    "domain": "harlingen.tstc.edu"
  },
  {
    "id": 491,
    "name": "Texas State Technical College-Marshall",
    "city": "Austin",
    "state": "TX",
    "location": "Austin, TX",
    "domain": "marshall.tstc.edu"
  },
  {
    "id": 492,
    "name": "Texas State Technical College-Waco",
    "city": "Austin",
    "state": "TX",
    "location": "Austin, TX",
    "domain": "waco.tstc.edu"
  },
  {
    "id": 493,
    "name": "Texas State Technical College-West Texas",
    "city": "Austin",
    "state": "TX",
    "location": "Austin, TX",
    "domain": "westtexas.tstc.edu"
  },
  {
    "id": 494,
    "name": "Texas State University",
    "city": "Austin",
    "state": "TX",
    "location": "Austin, TX",
    "domain": "txstate.edu"
  },
  {
    "id": 495,
    "name": "Texas Tech University",
    "city": "Austin",
    "state": "TX",
    "location": "Austin, TX",
    "domain": "ttu.edu"
  },
  {
    "id": 496,
    "name": "Texas Tech University-Health Sciences Center",
    "city": "Austin",
    "state": "TX",
    "location": "Austin, TX",
    "domain": "ttuhsc.edu"
  },
  {
    "id": 497,
    "name": "Texas Wesleyan University",
    "city": "Austin",
    "state": "TX",
    "location": "Austin, TX",
    "domain": "txwes.edu"
  },
  {
    "id": 498,
    "name": "Texas Woman's University",
    "city": "Austin",
    "state": "TX",
    "location": "Austin, TX",
    "domain": "twu.edu"
  },
  {
    "id": 499,
    "name": "The College of New Jersey",
    "city": "Trenton",
    "state": "NJ",
    "location": "Trenton, NJ",
    "domain": "tcnj.edu"
  },
  {
    "id": 500,
    "name": "The University of Alabama",
    "city": "Montgomery",
    "state": "AL",
    "location": "Montgomery, AL",
    "domain": "ua.edu"
  },
  // ── Missing flagship universities added with abbreviations ──────────────────
  {
    "id": 501,
    "name": "Brown University",
    "city": "Providence",
    "state": "RI",
    "location": "Providence, RI",
    "domain": "brown.edu",
    "abbreviations": ["Brown", "BU"]
  },
  {
    "id": 502,
    "name": "Cornell University",
    "city": "Ithaca",
    "state": "NY",
    "location": "Ithaca, NY",
    "domain": "cornell.edu",
    "abbreviations": ["Cornell", "CU"]
  },
  {
    "id": 503,
    "name": "Dartmouth College",
    "city": "Hanover",
    "state": "NH",
    "location": "Hanover, NH",
    "domain": "dartmouth.edu",
    "abbreviations": ["Dartmouth"]
  },
  {
    "id": 504,
    "name": "Rice University",
    "city": "Houston",
    "state": "TX",
    "location": "Houston, TX",
    "domain": "rice.edu",
    "abbreviations": ["Rice"]
  },
  {
    "id": 505,
    "name": "Johns Hopkins University",
    "city": "Baltimore",
    "state": "MD",
    "location": "Baltimore, MD",
    "domain": "jhu.edu",
    "abbreviations": ["JHU", "Hopkins", "Johns Hopkins"]
  },
  {
    "id": 506,
    "name": "Wake Forest University",
    "city": "Winston-Salem",
    "state": "NC",
    "location": "Winston-Salem, NC",
    "domain": "wfu.edu",
    "abbreviations": ["WFU", "Wake Forest", "Wake", "Deacs"]
  },
  {
    "id": 507,
    "name": "University of Texas at Austin",
    "city": "Austin",
    "state": "TX",
    "location": "Austin, TX",
    "domain": "utexas.edu",
    "abbreviations": ["UT", "UT Austin", "UTA", "Texas", "Longhorns"]
  },
  {
    "id": 508,
    "name": "University of Florida",
    "city": "Gainesville",
    "state": "FL",
    "location": "Gainesville, FL",
    "domain": "ufl.edu",
    "abbreviations": ["UF", "Florida", "Gators"]
  },
  {
    "id": 509,
    "name": "University of Georgia",
    "city": "Athens",
    "state": "GA",
    "location": "Athens, GA",
    "domain": "uga.edu",
    "abbreviations": ["UGA", "Georgia", "Dawgs", "Bulldogs"]
  },
  {
    "id": 510,
    "name": "University of Illinois Urbana-Champaign",
    "city": "Champaign",
    "state": "IL",
    "location": "Champaign, IL",
    "domain": "illinois.edu",
    "abbreviations": ["UIUC", "Illinois", "U of I"]
  },
  {
    "id": 511,
    "name": "University of Wisconsin-Madison",
    "city": "Madison",
    "state": "WI",
    "location": "Madison, WI",
    "domain": "wisc.edu",
    "abbreviations": ["UW-Madison", "Wisconsin", "UW", "Badgers"]
  },
  {
    "id": 512,
    "name": "University of Washington",
    "city": "Seattle",
    "state": "WA",
    "location": "Seattle, WA",
    "domain": "washington.edu",
    "abbreviations": ["UW", "UWash", "Huskies"]
  },
  {
    "id": 513,
    "name": "Penn State University",
    "city": "University Park",
    "state": "PA",
    "location": "University Park, PA",
    "domain": "psu.edu",
    "abbreviations": ["PSU", "Penn State", "Nittany Lions"]
  },
  {
    "id": 514,
    "name": "Purdue University",
    "city": "West Lafayette",
    "state": "IN",
    "location": "West Lafayette, IN",
    "domain": "purdue.edu",
    "abbreviations": ["Purdue", "Boilermakers"]
  },
  {
    "id": 515,
    "name": "University of Tennessee",
    "city": "Knoxville",
    "state": "TN",
    "location": "Knoxville, TN",
    "domain": "utk.edu",
    "abbreviations": ["UTK", "UT", "Tennessee", "Vols"]
  },
  {
    "id": 516,
    "name": "University of California, San Diego",
    "city": "La Jolla",
    "state": "CA",
    "location": "La Jolla, CA",
    "domain": "ucsd.edu",
    "abbreviations": ["UCSD", "UC San Diego"]
  },
  {
    "id": 517,
    "name": "University of California, Davis",
    "city": "Davis",
    "state": "CA",
    "location": "Davis, CA",
    "domain": "ucdavis.edu",
    "abbreviations": ["UC Davis", "UCD"]
  },
  {
    "id": 518,
    "name": "University of California, Santa Barbara",
    "city": "Santa Barbara",
    "state": "CA",
    "location": "Santa Barbara, CA",
    "domain": "ucsb.edu",
    "abbreviations": ["UCSB", "UC Santa Barbara"]
  },
  {
    "id": 519,
    "name": "University of California, Irvine",
    "city": "Irvine",
    "state": "CA",
    "location": "Irvine, CA",
    "domain": "uci.edu",
    "abbreviations": ["UCI", "UC Irvine"]
  },
  {
    "id": 520,
    "name": "Boston University",
    "city": "Boston",
    "state": "MA",
    "location": "Boston, MA",
    "domain": "bu.edu",
    "abbreviations": ["BU", "Boston U"]
  },
  {
    "id": 521,
    "name": "Northeastern University",
    "city": "Boston",
    "state": "MA",
    "location": "Boston, MA",
    "domain": "northeastern.edu",
    "abbreviations": ["NEU", "Northeastern", "NU"]
  },
  {
    "id": 522,
    "name": "University of Maryland",
    "city": "College Park",
    "state": "MD",
    "location": "College Park, MD",
    "domain": "umd.edu",
    "abbreviations": ["UMD", "Maryland", "Terps"]
  },
  {
    "id": 523,
    "name": "University of Texas at Dallas",
    "city": "Richardson",
    "state": "TX",
    "location": "Richardson, TX",
    "domain": "utdallas.edu",
    "abbreviations": ["UTD", "UT Dallas", "UT-D"]
  },
  {
    "id": 524,
    "name": "Ohio State University",
    "city": "Columbus",
    "state": "OH",
    "location": "Columbus, OH",
    "domain": "osu.edu",
    "abbreviations": ["OSU", "Ohio State", "Buckeyes"]
  },
  {
    "id": 525,
    "name": "University of Pittsburgh",
    "city": "Pittsburgh",
    "state": "PA",
    "location": "Pittsburgh, PA",
    "domain": "pitt.edu",
    "abbreviations": ["Pitt", "UPitt"]
  },
  {
    "id": 526,
    "name": "Virginia Tech",
    "city": "Blacksburg",
    "state": "VA",
    "location": "Blacksburg, VA",
    "domain": "vt.edu",
    "abbreviations": ["VT", "Virginia Tech", "Hokies"]
  },
  {
    "id": 527,
    "name": "North Carolina State University",
    "city": "Raleigh",
    "state": "NC",
    "location": "Raleigh, NC",
    "domain": "ncsu.edu",
    "abbreviations": ["NC State", "NCSU"]
  },
  {
    "id": 528,
    "name": "Tulane University",
    "city": "New Orleans",
    "state": "LA",
    "location": "New Orleans, LA",
    "domain": "tulane.edu",
    "abbreviations": ["Tulane"]
  },
  {
    "id": 529,
    "name": "University of Rochester",
    "city": "Rochester",
    "state": "NY",
    "location": "Rochester, NY",
    "domain": "rochester.edu",
    "abbreviations": ["Rochester", "UR"]
  },
  {
    "id": 530,
    "name": "Case Western Reserve University",
    "city": "Cleveland",
    "state": "OH",
    "location": "Cleveland, OH",
    "domain": "case.edu",
    "abbreviations": ["Case Western", "CWRU", "Case"]
  },
  // ── Public Flagships ────────────────────────────────────────────────────────
  {
    "id": 531,
    "name": "Rutgers University",
    "city": "New Brunswick",
    "state": "NJ",
    "location": "New Brunswick, NJ",
    "domain": "rutgers.edu",
    "abbreviations": ["Rutgers", "RU", "Scarlet Knights"]
  },
  {
    "id": 532,
    "name": "University of Connecticut",
    "city": "Storrs",
    "state": "CT",
    "location": "Storrs, CT",
    "domain": "uconn.edu",
    "abbreviations": ["UConn", "Huskies"]
  },
  {
    "id": 533,
    "name": "University of Iowa",
    "city": "Iowa City",
    "state": "IA",
    "location": "Iowa City, IA",
    "domain": "uiowa.edu",
    "abbreviations": ["Iowa", "UI", "Hawkeyes"]
  },
  {
    "id": 534,
    "name": "Clemson University",
    "city": "Clemson",
    "state": "SC",
    "location": "Clemson, SC",
    "domain": "clemson.edu",
    "abbreviations": ["Clemson", "CU", "Tigers"]
  },
  {
    "id": 535,
    "name": "Auburn University",
    "city": "Auburn",
    "state": "AL",
    "location": "Auburn, AL",
    "domain": "auburn.edu",
    "abbreviations": ["Auburn", "AU", "War Eagles", "Tigers"]
  },
  {
    "id": 536,
    "name": "University of Utah",
    "city": "Salt Lake City",
    "state": "UT",
    "location": "Salt Lake City, UT",
    "domain": "utah.edu",
    "abbreviations": ["Utah", "UU", "Utes"]
  },
  {
    "id": 537,
    "name": "University of Oregon",
    "city": "Eugene",
    "state": "OR",
    "location": "Eugene, OR",
    "domain": "uoregon.edu",
    "abbreviations": ["Oregon", "UO", "Ducks"]
  },
  {
    "id": 538,
    "name": "University of Minnesota",
    "city": "Minneapolis",
    "state": "MN",
    "location": "Minneapolis, MN",
    "domain": "umn.edu",
    "abbreviations": ["UMN", "Minnesota", "Gophers", "U of M"]
  },
  {
    "id": 539,
    "name": "University of Missouri",
    "city": "Columbia",
    "state": "MO",
    "location": "Columbia, MO",
    "domain": "missouri.edu",
    "abbreviations": ["Mizzou", "MU", "Missouri"]
  },
  {
    "id": 540,
    "name": "University of Nebraska-Lincoln",
    "city": "Lincoln",
    "state": "NE",
    "location": "Lincoln, NE",
    "domain": "unl.edu",
    "abbreviations": ["Nebraska", "UNL", "Huskers"]
  },
  {
    "id": 541,
    "name": "University of Kentucky",
    "city": "Lexington",
    "state": "KY",
    "location": "Lexington, KY",
    "domain": "uky.edu",
    "abbreviations": ["Kentucky", "UK", "Wildcats"]
  },
  {
    "id": 542,
    "name": "University of Kansas",
    "city": "Lawrence",
    "state": "KS",
    "location": "Lawrence, KS",
    "domain": "ku.edu",
    "abbreviations": ["Kansas", "KU", "Jayhawks"]
  },
  {
    "id": 543,
    "name": "West Virginia University",
    "city": "Morgantown",
    "state": "WV",
    "location": "Morgantown, WV",
    "domain": "wvu.edu",
    "abbreviations": ["WVU", "Mountaineers", "West Virginia"]
  },
  {
    "id": 544,
    "name": "Brigham Young University",
    "city": "Provo",
    "state": "UT",
    "location": "Provo, UT",
    "domain": "byu.edu",
    "abbreviations": ["BYU", "Cougars"]
  },
  {
    "id": 545,
    "name": "University of Arizona",
    "city": "Tucson",
    "state": "AZ",
    "location": "Tucson, AZ",
    "domain": "arizona.edu",
    "abbreviations": ["UArizona", "UA", "Wildcats", "UofA"]
  },
  {
    "id": 546,
    "name": "University of Colorado Boulder",
    "city": "Boulder",
    "state": "CO",
    "location": "Boulder, CO",
    "domain": "colorado.edu",
    "abbreviations": ["CU Boulder", "Colorado", "Buffs", "CU"]
  },
  {
    "id": 547,
    "name": "University of Oklahoma",
    "city": "Norman",
    "state": "OK",
    "location": "Norman, OK",
    "domain": "ou.edu",
    "abbreviations": ["OU", "Oklahoma", "Sooners"]
  },
  {
    "id": 548,
    "name": "University of South Carolina",
    "city": "Columbia",
    "state": "SC",
    "location": "Columbia, SC",
    "domain": "sc.edu",
    "abbreviations": ["UofSC", "USC", "Gamecocks"]
  },
  {
    "id": 549,
    "name": "University of Delaware",
    "city": "Newark",
    "state": "DE",
    "location": "Newark, DE",
    "domain": "udel.edu",
    "abbreviations": ["UD", "Delaware", "Blue Hens"]
  },
  {
    "id": 550,
    "name": "University of New Hampshire",
    "city": "Durham",
    "state": "NH",
    "location": "Durham, NH",
    "domain": "unh.edu",
    "abbreviations": ["UNH", "Wildcats"]
  },
  {
    "id": 551,
    "name": "University of Vermont",
    "city": "Burlington",
    "state": "VT",
    "location": "Burlington, VT",
    "domain": "uvm.edu",
    "abbreviations": ["UVM", "Vermont", "Catamounts"]
  },
  {
    "id": 552,
    "name": "University of Mississippi",
    "city": "Oxford",
    "state": "MS",
    "location": "Oxford, MS",
    "domain": "olemiss.edu",
    "abbreviations": ["Ole Miss", "Miss", "Rebels"]
  },
  {
    "id": 553,
    "name": "Mississippi State University",
    "city": "Starkville",
    "state": "MS",
    "location": "Starkville, MS",
    "domain": "msstate.edu",
    "abbreviations": ["MSU", "Mississippi State", "Bulldogs"]
  },
  {
    "id": 554,
    "name": "University of Central Florida",
    "city": "Orlando",
    "state": "FL",
    "location": "Orlando, FL",
    "domain": "ucf.edu",
    "abbreviations": ["UCF", "Knights"]
  },
  {
    "id": 555,
    "name": "University of South Florida",
    "city": "Tampa",
    "state": "FL",
    "location": "Tampa, FL",
    "domain": "usf.edu",
    "abbreviations": ["USF", "Bulls"]
  },
  {
    "id": 556,
    "name": "George Mason University",
    "city": "Fairfax",
    "state": "VA",
    "location": "Fairfax, VA",
    "domain": "gmu.edu",
    "abbreviations": ["GMU", "Mason", "Patriots"]
  },
  // ── Private Universities ────────────────────────────────────────────────────
  {
    "id": 557,
    "name": "Baylor University",
    "city": "Waco",
    "state": "TX",
    "location": "Waco, TX",
    "domain": "baylor.edu",
    "abbreviations": ["Baylor", "BU", "Bears"]
  },
  {
    "id": 558,
    "name": "Southern Methodist University",
    "city": "Dallas",
    "state": "TX",
    "location": "Dallas, TX",
    "domain": "smu.edu",
    "abbreviations": ["SMU", "Mustangs"]
  },
  {
    "id": 559,
    "name": "Villanova University",
    "city": "Villanova",
    "state": "PA",
    "location": "Villanova, PA",
    "domain": "villanova.edu",
    "abbreviations": ["Villanova", "Nova", "VU"]
  },
  {
    "id": 560,
    "name": "Marquette University",
    "city": "Milwaukee",
    "state": "WI",
    "location": "Milwaukee, WI",
    "domain": "marquette.edu",
    "abbreviations": ["Marquette", "MU"]
  },
  {
    "id": 561,
    "name": "Fordham University",
    "city": "New York",
    "state": "NY",
    "location": "New York, NY",
    "domain": "fordham.edu",
    "abbreviations": ["Fordham", "FU"]
  },
  {
    "id": 562,
    "name": "Gonzaga University",
    "city": "Spokane",
    "state": "WA",
    "location": "Spokane, WA",
    "domain": "gonzaga.edu",
    "abbreviations": ["Gonzaga", "Zags", "GU"]
  },
  {
    "id": 563,
    "name": "Pepperdine University",
    "city": "Malibu",
    "state": "CA",
    "location": "Malibu, CA",
    "domain": "pepperdine.edu",
    "abbreviations": ["Pepperdine", "Waves"]
  },
  {
    "id": 564,
    "name": "Drexel University",
    "city": "Philadelphia",
    "state": "PA",
    "location": "Philadelphia, PA",
    "domain": "drexel.edu",
    "abbreviations": ["Drexel", "DU"]
  },
  {
    "id": 565,
    "name": "Temple University",
    "city": "Philadelphia",
    "state": "PA",
    "location": "Philadelphia, PA",
    "domain": "temple.edu",
    "abbreviations": ["Temple", "TU", "Owls"]
  },
  {
    "id": 566,
    "name": "American University",
    "city": "Washington",
    "state": "DC",
    "location": "Washington, DC",
    "domain": "american.edu",
    "abbreviations": ["AU", "American"]
  },
  {
    "id": 567,
    "name": "Howard University",
    "city": "Washington",
    "state": "DC",
    "location": "Washington, DC",
    "domain": "howard.edu",
    "abbreviations": ["Howard", "HU", "Bison"]
  },
  {
    "id": 568,
    "name": "Spelman College",
    "city": "Atlanta",
    "state": "GA",
    "location": "Atlanta, GA",
    "domain": "spelman.edu",
    "abbreviations": ["Spelman"]
  },
  {
    "id": 569,
    "name": "Rensselaer Polytechnic Institute",
    "city": "Troy",
    "state": "NY",
    "location": "Troy, NY",
    "domain": "rpi.edu",
    "abbreviations": ["RPI", "Rensselaer"]
  },
  {
    "id": 570,
    "name": "Worcester Polytechnic Institute",
    "city": "Worcester",
    "state": "MA",
    "location": "Worcester, MA",
    "domain": "wpi.edu",
    "abbreviations": ["WPI", "Worcester Tech"]
  },
  {
    "id": 571,
    "name": "Lehigh University",
    "city": "Bethlehem",
    "state": "PA",
    "location": "Bethlehem, PA",
    "domain": "lehigh.edu",
    "abbreviations": ["Lehigh", "LU"]
  },
  {
    "id": 572,
    "name": "Syracuse University",
    "city": "Syracuse",
    "state": "NY",
    "location": "Syracuse, NY",
    "domain": "syr.edu",
    "abbreviations": ["Syracuse", "SU", "Cuse", "Orange"]
  },
  {
    "id": 573,
    "name": "DePaul University",
    "city": "Chicago",
    "state": "IL",
    "location": "Chicago, IL",
    "domain": "depaul.edu",
    "abbreviations": ["DePaul", "Blue Demons"]
  },
  {
    "id": 574,
    "name": "St. John's University",
    "city": "Queens",
    "state": "NY",
    "location": "Queens, NY",
    "domain": "stjohns.edu",
    "abbreviations": ["St. John's", "SJU"]
  },
  {
    "id": 575,
    "name": "University of Richmond",
    "city": "Richmond",
    "state": "VA",
    "location": "Richmond, VA",
    "domain": "richmond.edu",
    "abbreviations": ["Richmond", "UR", "Spiders"]
  },
  {
    "id": 576,
    "name": "Santa Clara University",
    "city": "Santa Clara",
    "state": "CA",
    "location": "Santa Clara, CA",
    "domain": "scu.edu",
    "abbreviations": ["SCU", "Santa Clara", "Broncos"]
  },
  {
    "id": 577,
    "name": "Loyola Marymount University",
    "city": "Los Angeles",
    "state": "CA",
    "location": "Los Angeles, CA",
    "domain": "lmu.edu",
    "abbreviations": ["LMU", "Loyola"]
  },
  {
    "id": 578,
    "name": "University of San Diego",
    "city": "San Diego",
    "state": "CA",
    "location": "San Diego, CA",
    "domain": "sandiego.edu",
    "abbreviations": ["USD", "Toreros"]
  },
  {
    "id": 579,
    "name": "Seton Hall University",
    "city": "South Orange",
    "state": "NJ",
    "location": "South Orange, NJ",
    "domain": "shu.edu",
    "abbreviations": ["Seton Hall", "SHU"]
  },
  {
    "id": 580,
    "name": "Stevens Institute of Technology",
    "city": "Hoboken",
    "state": "NJ",
    "location": "Hoboken, NJ",
    "domain": "stevens.edu",
    "abbreviations": ["Stevens", "SIT"]
  },
  // ── Liberal Arts Colleges ───────────────────────────────────────────────────
  {
    "id": 581,
    "name": "Harvey Mudd College",
    "city": "Claremont",
    "state": "CA",
    "location": "Claremont, CA",
    "domain": "hmc.edu",
    "abbreviations": ["Harvey Mudd", "HMC"]
  },
  {
    "id": 582,
    "name": "Claremont McKenna College",
    "city": "Claremont",
    "state": "CA",
    "location": "Claremont, CA",
    "domain": "cmc.edu",
    "abbreviations": ["CMC", "Claremont McKenna"]
  },
  {
    "id": 583,
    "name": "Scripps College",
    "city": "Claremont",
    "state": "CA",
    "location": "Claremont, CA",
    "domain": "scrippscollege.edu",
    "abbreviations": ["Scripps", "SC"]
  },
  {
    "id": 584,
    "name": "Pitzer College",
    "city": "Claremont",
    "state": "CA",
    "location": "Claremont, CA",
    "domain": "pitzer.edu",
    "abbreviations": ["Pitzer", "PC"]
  },
  {
    "id": 585,
    "name": "Vassar College",
    "city": "Poughkeepsie",
    "state": "NY",
    "location": "Poughkeepsie, NY",
    "domain": "vassar.edu",
    "abbreviations": ["Vassar", "VC"]
  },
  {
    "id": 586,
    "name": "Barnard College",
    "city": "New York",
    "state": "NY",
    "location": "New York, NY",
    "domain": "barnard.edu",
    "abbreviations": ["Barnard", "BC"]
  },
  {
    "id": 587,
    "name": "Smith College",
    "city": "Northampton",
    "state": "MA",
    "location": "Northampton, MA",
    "domain": "smith.edu",
    "abbreviations": ["Smith", "SC"]
  },
  {
    "id": 588,
    "name": "Mount Holyoke College",
    "city": "South Hadley",
    "state": "MA",
    "location": "South Hadley, MA",
    "domain": "mtholyoke.edu",
    "abbreviations": ["Mount Holyoke", "MHC"]
  },
  {
    "id": 589,
    "name": "Wesleyan University",
    "city": "Middletown",
    "state": "CT",
    "location": "Middletown, CT",
    "domain": "wesleyan.edu",
    "abbreviations": ["Wesleyan", "Wes", "WU"]
  },
  {
    "id": 590,
    "name": "Oberlin College",
    "city": "Oberlin",
    "state": "OH",
    "location": "Oberlin, OH",
    "domain": "oberlin.edu",
    "abbreviations": ["Oberlin", "OC"]
  },
  {
    "id": 591,
    "name": "Macalester College",
    "city": "Saint Paul",
    "state": "MN",
    "location": "Saint Paul, MN",
    "domain": "macalester.edu",
    "abbreviations": ["Macalester", "Mac"]
  },
  {
    "id": 592,
    "name": "Bryn Mawr College",
    "city": "Bryn Mawr",
    "state": "PA",
    "location": "Bryn Mawr, PA",
    "domain": "brynmawr.edu",
    "abbreviations": ["Bryn Mawr", "BMC"]
  },
  {
    "id": 593,
    "name": "Haverford College",
    "city": "Haverford",
    "state": "PA",
    "location": "Haverford, PA",
    "domain": "haverford.edu",
    "abbreviations": ["Haverford", "HC"]
  },
  {
    "id": 594,
    "name": "Colby College",
    "city": "Waterville",
    "state": "ME",
    "location": "Waterville, ME",
    "domain": "colby.edu",
    "abbreviations": ["Colby", "CC"]
  },
  {
    "id": 595,
    "name": "Bates College",
    "city": "Lewiston",
    "state": "ME",
    "location": "Lewiston, ME",
    "domain": "bates.edu",
    "abbreviations": ["Bates", "BC"]
  },
  {
    "id": 596,
    "name": "Colorado College",
    "city": "Colorado Springs",
    "state": "CO",
    "location": "Colorado Springs, CO",
    "domain": "coloradocollege.edu",
    "abbreviations": ["Colorado College", "CC", "Tigers"]
  },
  {
    "id": 597,
    "name": "Trinity College",
    "city": "Hartford",
    "state": "CT",
    "location": "Hartford, CT",
    "domain": "trincoll.edu",
    "abbreviations": ["Trinity", "TC", "Bantams"]
  },
  {
    "id": 598,
    "name": "Kenyon College",
    "city": "Gambier",
    "state": "OH",
    "location": "Gambier, OH",
    "domain": "kenyon.edu",
    "abbreviations": ["Kenyon", "KC"]
  },
  {
    "id": 599,
    "name": "Occidental College",
    "city": "Los Angeles",
    "state": "CA",
    "location": "Los Angeles, CA",
    "domain": "oxy.edu",
    "abbreviations": ["Occidental", "Oxy"]
  },
  {
    "id": 600,
    "name": "Furman University",
    "city": "Greenville",
    "state": "SC",
    "location": "Greenville, SC",
    "domain": "furman.edu",
    "abbreviations": ["Furman", "FU"]
  },
  {
    "id": 601,
    "name": "Rhodes College",
    "city": "Memphis",
    "state": "TN",
    "location": "Memphis, TN",
    "domain": "rhodes.edu",
    "abbreviations": ["Rhodes"]
  },
  {
    "id": 602,
    "name": "Denison University",
    "city": "Granville",
    "state": "OH",
    "location": "Granville, OH",
    "domain": "denison.edu",
    "abbreviations": ["Denison", "DU"]
  },
  // ── HBCUs ──────────────────────────────────────────────────────────────────
  {
    "id": 603,
    "name": "Hampton University",
    "city": "Hampton",
    "state": "VA",
    "location": "Hampton, VA",
    "domain": "hamptonu.edu",
    "abbreviations": ["Hampton", "HU", "Pirates"]
  },
  {
    "id": 604,
    "name": "Tuskegee University",
    "city": "Tuskegee",
    "state": "AL",
    "location": "Tuskegee, AL",
    "domain": "tuskegee.edu",
    "abbreviations": ["Tuskegee", "TU", "Golden Tigers"]
  },
  {
    "id": 605,
    "name": "Fisk University",
    "city": "Nashville",
    "state": "TN",
    "location": "Nashville, TN",
    "domain": "fisk.edu",
    "abbreviations": ["Fisk"]
  },
  {
    "id": 606,
    "name": "Xavier University of Louisiana",
    "city": "New Orleans",
    "state": "LA",
    "location": "New Orleans, LA",
    "domain": "xula.edu",
    "abbreviations": ["XULA", "Xavier"]
  },
  // ── Remaining UC campuses ───────────────────────────────────────────────────
  {
    "id": 607,
    "name": "University of California, Santa Cruz",
    "city": "Santa Cruz",
    "state": "CA",
    "location": "Santa Cruz, CA",
    "domain": "ucsc.edu",
    "abbreviations": ["UCSC", "UC Santa Cruz"]
  },
  {
    "id": 608,
    "name": "University of California, Riverside",
    "city": "Riverside",
    "state": "CA",
    "location": "Riverside, CA",
    "domain": "ucr.edu",
    "abbreviations": ["UCR", "UC Riverside"]
  },
  {
    "id": 609,
    "name": "University of California, Merced",
    "city": "Merced",
    "state": "CA",
    "location": "Merced, CA",
    "domain": "ucmerced.edu",
    "abbreviations": ["UCM", "UC Merced"]
  },
  // ── Missing public flagships ────────────────────────────────────────────────
  {
    "id": 610,
    "name": "University of Miami",
    "city": "Coral Gables",
    "state": "FL",
    "location": "Coral Gables, FL",
    "domain": "miami.edu",
    "abbreviations": ["UM", "Miami", "Canes", "Hurricanes"]
  },
  {
    "id": 611,
    "name": "University of Arkansas",
    "city": "Fayetteville",
    "state": "AR",
    "location": "Fayetteville, AR",
    "domain": "uark.edu",
    "abbreviations": ["UArk", "Arkansas", "Razorbacks", "Hogs"]
  },
  {
    "id": 612,
    "name": "University of Hawaii at Manoa",
    "city": "Honolulu",
    "state": "HI",
    "location": "Honolulu, HI",
    "domain": "hawaii.edu",
    "abbreviations": ["UH", "UH Manoa", "Hawaii", "Rainbow Warriors"]
  },
  {
    "id": 613,
    "name": "University of New Mexico",
    "city": "Albuquerque",
    "state": "NM",
    "location": "Albuquerque, NM",
    "domain": "unm.edu",
    "abbreviations": ["UNM", "Lobos"]
  },
  {
    "id": 614,
    "name": "University of Louisville",
    "city": "Louisville",
    "state": "KY",
    "location": "Louisville, KY",
    "domain": "louisville.edu",
    "abbreviations": ["UofL", "Louisville", "Cardinals"]
  },
  {
    "id": 615,
    "name": "University of Cincinnati",
    "city": "Cincinnati",
    "state": "OH",
    "location": "Cincinnati, OH",
    "domain": "uc.edu",
    "abbreviations": ["UC", "Cincinnati", "Bearcats"]
  },
  {
    "id": 616,
    "name": "University of Denver",
    "city": "Denver",
    "state": "CO",
    "location": "Denver, CO",
    "domain": "du.edu",
    "abbreviations": ["DU", "Denver", "Pioneers"]
  },
  {
    "id": 617,
    "name": "University of Houston",
    "city": "Houston",
    "state": "TX",
    "location": "Houston, TX",
    "domain": "uh.edu",
    "abbreviations": ["UH", "Houston", "Cougars"]
  },
  {
    "id": 618,
    "name": "University of North Texas",
    "city": "Denton",
    "state": "TX",
    "location": "Denton, TX",
    "domain": "unt.edu",
    "abbreviations": ["UNT", "North Texas", "Mean Green"]
  },
  {
    "id": 619,
    "name": "University of Alabama",
    "city": "Tuscaloosa",
    "state": "AL",
    "location": "Tuscaloosa, AL",
    "domain": "ua.edu",
    "abbreviations": ["UA", "Alabama", "Bama", "Crimson Tide"]
  },
  {
    "id": 620,
    "name": "University of Maine",
    "city": "Orono",
    "state": "ME",
    "location": "Orono, ME",
    "domain": "umaine.edu",
    "abbreviations": ["UMaine", "Maine", "Black Bears"]
  },
  {
    "id": 621,
    "name": "University of Rhode Island",
    "city": "Kingston",
    "state": "RI",
    "location": "Kingston, RI",
    "domain": "uri.edu",
    "abbreviations": ["URI", "Rhode Island", "Rams"]
  },
  {
    "id": 622,
    "name": "University of Idaho",
    "city": "Moscow",
    "state": "ID",
    "location": "Moscow, ID",
    "domain": "uidaho.edu",
    "abbreviations": ["UI", "Idaho", "Vandals"]
  },
  {
    "id": 623,
    "name": "University of Wyoming",
    "city": "Laramie",
    "state": "WY",
    "location": "Laramie, WY",
    "domain": "uwyo.edu",
    "abbreviations": ["UW", "Wyoming", "Cowboys"]
  },
  {
    "id": 624,
    "name": "University of Nevada, Las Vegas",
    "city": "Las Vegas",
    "state": "NV",
    "location": "Las Vegas, NV",
    "domain": "unlv.edu",
    "abbreviations": ["UNLV", "Rebels"]
  },
  {
    "id": 625,
    "name": "University of Nevada, Reno",
    "city": "Reno",
    "state": "NV",
    "location": "Reno, NV",
    "domain": "unr.edu",
    "abbreviations": ["UNR", "Nevada", "Wolf Pack"]
  },
  {
    "id": 626,
    "name": "Utah State University",
    "city": "Logan",
    "state": "UT",
    "location": "Logan, UT",
    "domain": "usu.edu",
    "abbreviations": ["USU", "Utah State", "Aggies"]
  },
  {
    "id": 627,
    "name": "University of Montana",
    "city": "Missoula",
    "state": "MT",
    "location": "Missoula, MT",
    "domain": "umt.edu",
    "abbreviations": ["UM", "Montana", "Grizzlies"]
  },
  {
    "id": 628,
    "name": "University of North Dakota",
    "city": "Grand Forks",
    "state": "ND",
    "location": "Grand Forks, ND",
    "domain": "und.edu",
    "abbreviations": ["UND", "Fighting Hawks"]
  },
  {
    "id": 629,
    "name": "University of South Dakota",
    "city": "Vermillion",
    "state": "SD",
    "location": "Vermillion, SD",
    "domain": "usd.edu",
    "abbreviations": ["USD", "Coyotes"]
  },
  // ── More private universities ───────────────────────────────────────────────
  {
    "id": 630,
    "name": "University of Tulsa",
    "city": "Tulsa",
    "state": "OK",
    "location": "Tulsa, OK",
    "domain": "utulsa.edu",
    "abbreviations": ["TU", "Tulsa", "Golden Hurricane"]
  },
  {
    "id": 631,
    "name": "University of Dayton",
    "city": "Dayton",
    "state": "OH",
    "location": "Dayton, OH",
    "domain": "udayton.edu",
    "abbreviations": ["UD", "Dayton", "Flyers"]
  },
  {
    "id": 632,
    "name": "Miami University",
    "city": "Oxford",
    "state": "OH",
    "location": "Oxford, OH",
    "domain": "miamioh.edu",
    "abbreviations": ["Miami Ohio", "MU", "RedHawks"]
  },
  {
    "id": 633,
    "name": "Xavier University",
    "city": "Cincinnati",
    "state": "OH",
    "location": "Cincinnati, OH",
    "domain": "xavier.edu",
    "abbreviations": ["Xavier", "XU", "Musketeers"]
  },
  {
    "id": 634,
    "name": "Creighton University",
    "city": "Omaha",
    "state": "NE",
    "location": "Omaha, NE",
    "domain": "creighton.edu",
    "abbreviations": ["Creighton", "CU", "Bluejays"]
  },
  {
    "id": 635,
    "name": "University of Portland",
    "city": "Portland",
    "state": "OR",
    "location": "Portland, OR",
    "domain": "up.edu",
    "abbreviations": ["UP", "Portland", "Pilots"]
  },
  {
    "id": 636,
    "name": "Seattle University",
    "city": "Seattle",
    "state": "WA",
    "location": "Seattle, WA",
    "domain": "seattleu.edu",
    "abbreviations": ["SU", "Seattle U", "Redhawks"]
  },
  {
    "id": 637,
    "name": "Hofstra University",
    "city": "Hempstead",
    "state": "NY",
    "location": "Hempstead, NY",
    "domain": "hofstra.edu",
    "abbreviations": ["Hofstra", "HU", "Pride"]
  },
  {
    "id": 638,
    "name": "Yeshiva University",
    "city": "New York",
    "state": "NY",
    "location": "New York, NY",
    "domain": "yu.edu",
    "abbreviations": ["YU", "Yeshiva"]
  },
  {
    "id": 639,
    "name": "Babson College",
    "city": "Wellesley",
    "state": "MA",
    "location": "Wellesley, MA",
    "domain": "babson.edu",
    "abbreviations": ["Babson"]
  },
  {
    "id": 640,
    "name": "Bentley University",
    "city": "Waltham",
    "state": "MA",
    "location": "Waltham, MA",
    "domain": "bentley.edu",
    "abbreviations": ["Bentley", "BU", "Falcons"]
  }
];

// Acceptance rates (%) keyed by college id. Source: recent Common Data Set / institutional reports.
export const ACCEPTANCE_RATES: Partial<Record<number, number>> = {
  // ── Curated top 40 ──────────────────────────────────────────────────────────
  1: 11,   // UC Berkeley
  2: 9,    // UCLA
  4: 11,   // USC
  6: 4,    // Stanford
  7: 4,    // MIT
  8: 4,    // Harvard
  9: 5,    // Yale
  10: 5,   // Princeton
  11: 4,   // Columbia
  12: 6,   // UPenn
  14: 12,  // NYU
  15: 6,   // Duke
  16: 7,   // Northwestern
  17: 7,   // Vanderbilt
  18: 12,  // Georgetown
  19: 13,  // Notre Dame
  20: 18,  // Michigan
  21: 19,  // UVA
  22: 18,  // UNC
  23: 16,  // Boston College
  24: 10,  // Tufts
  25: 12,  // Emory
  26: 11,  // CMU
  27: 13,  // Georgia Tech
  28: 9,   // Williams
  29: 10,  // Amherst
  30: 7,   // Swarthmore
  31: 9,   // Bowdoin
  32: 14,  // Wellesley
  33: 15,  // Middlebury
  34: 18,  // Carleton
  35: 20,  // Grinnell
  36: 16,  // Davidson
  37: 18,  // Colgate
  38: 13,  // Hamilton
  39: 30,  // Lafayette
  40: 35,  // Bucknell
  // ── Bulk entries with known rates ───────────────────────────────────────────
  // (IDs from the original hipo dataset)
  // ── IDs 501+ (added with abbreviations) ────────────────────────────────────
  501: 5,  // Brown
  502: 8,  // Cornell
  503: 6,  // Dartmouth
  504: 8,  // Rice
  505: 7,  // Johns Hopkins
  506: 19, // Wake Forest
  507: 31, // UT Austin
  508: 24, // UF
  509: 40, // UGA
  510: 45, // UIUC
  511: 49, // UW-Madison
  512: 48, // UW Seattle
  513: 56, // Penn State
  514: 53, // Purdue
  515: 71, // UT Knoxville
  516: 23, // UCSD
  517: 37, // UC Davis
  518: 26, // UCSB
  519: 21, // UCI
  520: 14, // Boston University
  521: 7,  // Northeastern
  522: 45, // UMD
  523: 79, // UT Dallas
  524: 54, // Ohio State
  525: 53, // Pitt
  526: 66, // Virginia Tech
  527: 44, // NC State
  528: 11, // Tulane
  529: 30, // Rochester
  530: 27, // Case Western
  531: 61, // Rutgers
  532: 49, // UConn
  533: 83, // U of Iowa
  534: 43, // Clemson
  535: 72, // Auburn
  536: 83, // U of Utah
  537: 83, // U of Oregon
  538: 57, // U of Minnesota
  539: 78, // Mizzou
  540: 74, // Nebraska
  541: 90, // U of Kentucky
  542: 89, // U of Kansas
  543: 79, // WVU
  544: 67, // BYU
  545: 84, // U of Arizona
  546: 80, // CU Boulder
  547: 73, // U of Oklahoma
  548: 67, // U of South Carolina
  549: 66, // U of Delaware
  550: 84, // UNH
  551: 64, // UVM
  552: 83, // Ole Miss
  553: 61, // Mississippi State
  554: 41, // UCF
  555: 42, // USF
  556: 87, // George Mason
  557: 41, // Baylor
  558: 52, // SMU
  559: 26, // Villanova
  560: 87, // Marquette
  561: 46, // Fordham
  562: 65, // Gonzaga
  563: 37, // Pepperdine
  564: 75, // Drexel
  565: 67, // Temple
  566: 35, // American
  567: 38, // Howard
  568: 34, // Spelman
  569: 43, // RPI
  570: 42, // WPI
  571: 34, // Lehigh
  572: 60, // Syracuse
  573: 68, // DePaul
  574: 65, // St. John's
  575: 28, // Richmond
  576: 47, // Santa Clara
  577: 45, // LMU
  578: 50, // USD
  579: 77, // Seton Hall
  580: 42, // Stevens
  581: 13, // Harvey Mudd
  582: 10, // CMC
  583: 25, // Scripps
  584: 15, // Pitzer
  585: 21, // Vassar
  586: 11, // Barnard
  587: 31, // Smith
  588: 52, // Mount Holyoke
  589: 17, // Wesleyan
  590: 28, // Oberlin
  591: 31, // Macalester
  592: 32, // Bryn Mawr
  593: 16, // Haverford
  594: 11, // Colby
  595: 11, // Bates
  596: 16, // Colorado College
  597: 30, // Trinity
  598: 32, // Kenyon
  599: 39, // Occidental
  600: 60, // Furman
  601: 40, // Rhodes
  602: 26, // Denison
  603: 48, // Hampton
  604: 52, // Tuskegee
  605: 64, // Fisk
  606: 58, // Xavier (LA)
  607: 47, // UCSC
  608: 57, // UC Riverside
  609: 85, // UC Merced
  610: 27, // U of Miami
  611: 78, // Arkansas
  612: 65, // UH Manoa
  613: 97, // UNM
  614: 67, // Louisville
  615: 65, // Cincinnati
  616: 80, // Denver
  617: 63, // Houston
  618: 73, // North Texas
  619: 87, // Alabama
  620: 89, // Maine
  621: 71, // Rhode Island
  622: 77, // Idaho
  623: 90, // Wyoming
  624: 78, // UNLV
  625: 82, // Nevada Reno
  626: 82, // Utah State
  627: 94, // Montana
  628: 85, // North Dakota
  629: 73, // South Dakota
  630: 63, // Tulsa
  631: 74, // Dayton
  632: 77, // Miami Ohio
  633: 73, // Xavier Ohio
  634: 68, // Creighton
  635: 80, // Portland
  636: 76, // Seattle U
  637: 70, // Hofstra
  638: 57, // Yeshiva
  639: 25, // Babson
  640: 44, // Bentley
};

// O(1) name lookup built once
const _nameIndex = new Map<string, College>(
  COLLEGES.map((c) => [c.name.toLowerCase(), c])
);

export function getCollegeByName(name: string): College | undefined {
  return _nameIndex.get(name.toLowerCase());
}

export function getAcceptanceRateByName(name: string): number | undefined {
  const college = getCollegeByName(name);
  if (!college) return undefined;
  return ACCEPTANCE_RATES[college.id];
}
