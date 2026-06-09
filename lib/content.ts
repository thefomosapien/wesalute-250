export type TimelineEntry = {
  year: string;
  nation: string;
  nationBody: string;
  weSalute: string | null;
  photo?: {
    src: string;
    alt: string;
    caption: string;
    credit?: string;
  };
};

export type Community = {
  name: string;
  desc: string;
  since: string;
};

export const timeline: TimelineEntry[] = [
  {
    year: "1775",
    nation: "The Shot Heard 'Round The World",
    nationBody:
      "Capt. John Parker assembles a militia on Lexington Green and fires the opening volley of the American Revolution. A country built on service begins.",
    weSalute: null,
    photo: {
      src: "/timeline/1775-lexington-green.jpg",
      alt: "Historical painting of the Battle of Lexington, April 19, 1775",
      caption: "The Battle of Lexington, April 19, 1775 — the opening volley of the American Revolution.",
      credit: "John Trumbull, 1775 / Public domain",
    },
  },
  {
    year: "1967–68",
    nation: "Vietnam",
    nationBody:
      "A generation comes home to a country that wants to forget the war. The veterans of that era are met with no parades, no welcome, no thanks.",
    weSalute:
      "Scott Higgins serves as a 2nd Lieutenant, U.S. Army, II Field Force. He returns to American soil without ceremony.",
    photo: {
      src: "/timeline/1967-vietnam.jpg",
      alt: "U.S. Army soldiers in the field during the Vietnam War, 1967",
      caption: "II Field Force, Vietnam, 1967–68 — the war a generation came home from without ceremony.",
      credit: "U.S. Army / Public domain",
    },
  },
  {
    year: "1981–85",
    nation: '"It\'s Time."',
    nationBody:
      "New York City prepares its overdue welcome home. A 100-member commission is built to honor a generation the country had let down.",
    weSalute:
      "Mayor Ed Koch asks Scott Higgins to co-chair the NYC Vietnam Veterans Memorial Commission. The commission builds NYC's first Vietnam Veterans Memorial, organizes the largest parade in city history, and publishes Dear America: Letters Home from Vietnam — an Emmy-winning HBO film.",
    photo: {
      src: "/timeline/1981-nyc-parade.jpg",
      alt: "The 1985 New York City Vietnam Veterans Welcome Home Parade on Broadway",
      caption: "The Welcome Home parade — the largest ticker-tape parade in New York City history.",
      credit: "NYC Municipal Archives",
    },
  },
  {
    year: "1999",
    nation: "A New Mission Begins",
    nationBody:
      "On the eve of a new century, the question is reframed: how do we say thank you every day — not just on a holiday?",
    weSalute:
      "Scott and Lin Higgins found Veterans Advantage as a Public Benefit Corporation. The mission: a real thank you, every day, through partnerships with America's leading brands. The first program of its kind.",
    photo: {
      src: "/timeline/1999-founding.jpg",
      alt: "Scott and Lin Higgins at the founding of Veterans Advantage, 1999",
      caption: "Scott and Lin Higgins found Veterans Advantage in 1999 — the first program of its kind.",
      credit: "WeSalute archives",
    },
  },
  {
    year: "2001",
    nation: "A Country After 9/11",
    nationBody:
      "A new generation enlists. A new era of service begins. So does a new era of risk — including identity theft for those whose service makes them targets.",
    weSalute:
      "Launch of the WeSalute+ ID Card — the first universal military identification card built to protect veterans' privacy. Over 2.5 million issued to date.",
    photo: {
      src: "/timeline/2001-id-card.jpg",
      alt: "The original WeSalute+ ID Card, launched 2001",
      caption: "The WeSalute+ ID Card — the first universal military identification card, launched 2001.",
      credit: "WeSalute archives",
    },
  },
  {
    year: "2012",
    nation: "Veterans Week NYC",
    nationBody:
      "New York City establishes a dedicated week to honor those who served. The proclamation makes it official.",
    weSalute:
      "WeSalute founds Veterans Week NYC by mayoral proclamation. The WeSalute+ ID Card becomes its Official Card.",
    photo: {
      src: "/timeline/2012-veterans-week.jpg",
      alt: "Veterans Week NYC 2012 official proclamation ceremony",
      caption: "Veterans Week NYC, established by mayoral proclamation in 2012.",
      credit: "WeSalute archives",
    },
  },
  {
    year: "2020s",
    nation: "Service, Redefined",
    nationBody:
      "Pandemic. Wildfires. Hurricanes. School shootings. The country sees, in real time, that service is not one uniform — it's seven.",
    weSalute:
      "WeSalute expands beyond military and veterans to honor everyone it serves: military and veterans, nurses, medical professionals, first responders, teachers, civil servants, and students.",
  },
  {
    year: "2026",
    nation: "America Turns 250",
    nationBody:
      "The Semiquincentennial. A bipartisan effort — Bush and Obama as honorary co-chairs — to engage all 350 million Americans in the meaning of 250 years.",
    weSalute:
      "WeSalute marks the moment by honoring everyone whose service made it possible.",
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
    desc: "Federal, state, local, USPS, public works. Behind the scenes of every neighborhood.",
    since: "Every day",
  },
  {
    name: "Students",
    desc: "The next generation, already serving.",
    since: "The next 250",
  },
];
