export type TimelineEntry = {
  year: string;
  nation: string;
  nationBody: string;
  weSalute: string | null;
};

export type Community = {
  name: string;
  desc: string;
  since: string;
};

export type OpenMerchItem = {
  name: string;
  type: string;
  desc: string;
  price: string;
  tag: string;
};

export type SingleMerchItem = {
  name: string;
  type: string;
  desc: string;
  price: string;
};

export const timeline: TimelineEntry[] = [
  {
    year: "1775",
    nation: "The Shot Heard 'Round The World",
    nationBody:
      "Capt. John Parker assembles a militia on Lexington Green and fires the opening volley of the American Revolution. A country built on service begins.",
    weSalute: null,
  },
  {
    year: "1863",
    nation: "Gettysburg",
    nationBody:
      "Lincoln delivers 272 words that redefine what the nation is for: the unfinished work of the people who served and sacrificed to advance it.",
    weSalute:
      "Generations later, Scott and Lin Higgins would gift the Borough of Gettysburg its first statue of President Lincoln delivering the address — closing a personal loop with the country's founding.",
  },
  {
    year: "1967–68",
    nation: "Vietnam",
    nationBody:
      "A generation comes home to a country that wants to forget the war. The veterans of that era are met with no parades, no welcome, no thanks.",
    weSalute:
      "Scott Higgins serves as a 2nd Lieutenant, U.S. Army, II Field Force. He returns to American soil without ceremony. Direct descendant of Capt. John Parker — the through-line from Lexington to Saigon runs through one family.",
  },
  {
    year: "1981–85",
    nation: '"It\'s Time."',
    nationBody:
      "New York City prepares its overdue welcome home. A 100-member commission is built to honor a generation the country had let down.",
    weSalute:
      "Mayor Ed Koch asks Scott Higgins to spearhead the NYC Vietnam Veterans Memorial Commission. He co-chairs for five years. The commission builds NYC's first Vietnam Veterans Memorial, organizes the largest parade in city history, establishes a jobs program, and publishes Dear America: Letters Home from Vietnam — later an Emmy-winning HBO film seen by 75 million people.",
  },
  {
    year: "1999",
    nation: "A New Mission Begins",
    nationBody:
      "On the eve of a new century, the question is reframed: how do we say thank you every day — not just on a holiday?",
    weSalute:
      "Scott and Lin Higgins found Veterans Advantage as a Public Benefit Corporation. The mission: a real thank you, every day, through partnerships with America's leading brands. The first program of its kind.",
  },
  {
    year: "2001",
    nation: "A Country After 9/11",
    nationBody:
      "A new generation enlists. A new era of service begins. So does a new era of risk — including identity theft for those whose service makes them targets.",
    weSalute:
      "Launch of the WeSalute+ ID Card — the first universal military identification card built to protect veterans' privacy. Over 2.5 million issued to date.",
  },
  {
    year: "2012",
    nation: "Veterans Week NYC",
    nationBody:
      "New York City establishes a dedicated week to honor those who served. The proclamation makes it official.",
    weSalute:
      "WeSalute founds Veterans Week NYC by mayoral proclamation. The WeSalute+ ID Card becomes its Official Card.",
  },
  {
    year: "2020s",
    nation: "Service, Redefined",
    nationBody:
      "Pandemic. Wildfires. Hurricanes. School shootings. The country sees, in real time, that service is not one uniform — it's seven.",
    weSalute:
      "WeSalute expands beyond military and veterans to honor all seven service communities: military and veterans, nurses, medical professionals, first responders, teachers, civil servants, and students.",
  },
  {
    year: "2026",
    nation: "America Turns 250",
    nationBody:
      "The Semiquincentennial. A bipartisan effort — Bush and Obama as honorary co-chairs — to engage all 350 million Americans in the meaning of 250 years.",
    weSalute:
      "WeSalute marks the moment the only way we know how: by honoring everyone whose service made it possible. Six weeks. One collection. 250 numbered shirts. One real thank you.",
  },
];

export const communities: Community[] = [
  {
    name: "Military & Veterans",
    desc: "All six branches, plus the ones who served before, during, and after.",
    since: "Since 1775",
  },
  {
    name: "Nurses",
    desc: "ICU, ER, NICU, OR, PEDS — and every shift that ends at 0700.",
    since: "Every shift",
  },
  {
    name: "First Responders",
    desc: "Police, fire, EMS, dispatch. The first call, every time.",
    since: "Every call",
  },
  {
    name: "Medical Professionals",
    desc: "Doctors, PAs, NPs, techs. The decade-long credential.",
    since: "Every patient",
  },
  {
    name: "Teachers",
    desc: "K–12 and higher ed. The lesson plan that doesn't end at 3 PM.",
    since: "Every classroom",
  },
  {
    name: "Civil Servants",
    desc: "Federal, state, local, USPS, public works. The quiet work.",
    since: "Every day",
  },
  {
    name: "Students",
    desc: "JROTC, ROTC, military families. The next generation, already serving.",
    since: "The next 250",
  },
];

export const merchOpen: OpenMerchItem[] = [
  {
    name: "1776 / 2026 Heritage Tee",
    type: "Hero piece",
    desc: "Heavyweight garment-dyed tee. Embossed crest with letterpress texture. 1776 left of the WeSalute mark. 2026 right. Built to last.",
    price: "$48",
    tag: "Open Collection",
  },
  {
    name: "Service Through The Centuries Tee",
    type: "Cross-community hero",
    desc: "Seven service marks arranged in a single medallion. The visual proof that service has been America's through-line for 250 years.",
    price: "$48",
    tag: "Open Collection",
  },
  {
    name: "Block Party Pack",
    type: "July 4 bundle",
    desc: "Heritage tee, embroidered 250 cap, koozie, four-sticker pack, kraft gift box. Hosting the block party — bring everything but the grill.",
    price: "$115",
    tag: "Bundle",
  },
];

export const merch250: SingleMerchItem = {
  name: "The 250 Numbered Edition",
  type: "Limited to 250",
  desc: "Premium 14oz garment-dyed pullover hoodie. Embroidered front crest. Individually numbered hangtag, 1 of 250 through 250 of 250. When they're gone, they're gone — and they will be gone.",
  price: "$145",
};

export const merchMember: SingleMerchItem = {
  name: "WeSalute+ 250 Member Edition",
  type: "Members only",
  desc: "Hard-enamel pin and embroidered patch set. Antique gold, heritage navy, cream. Numbered tin packaging. Reserved for verified WeSalute+ members. Not sold to non-members.",
  price: "$45",
};
