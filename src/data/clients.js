/**
 * The posting board exactly as defined in Clients.dc.html.
 * `logo` is the asset key ('' = wordmark only); resolved in Clients.jsx.
 */
export const CLIENTS = [
  {
    "name": "Wipro",
    "logo": "client-wipro",
    "sector": "CORPORATE & IT",
    "body": "A campus where access control is the product. Badges are the easy part; the audit hangs on material movement after hours and contractor entry.",
    "deployment": "Guards, supervisors, floor wardens",
    "hard": "Material register after 7 p.m."
  },
  {
    "name": "India International Centre",
    "logo": "",
    "sector": "INSTITUTIONS",
    "body": "A house where a member should never be asked to prove himself twice. Guest registers, seminars and banquets, VIP arrivals, quiet conduct on the floor.",
    "deployment": "Guards with event reinforcement",
    "hard": "Recognition, not checking"
  },
  {
    "name": "Holy Family Hospital",
    "logo": "",
    "sector": "HOSPITALS",
    "body": "Casualty never closes, and the crowd arrives with the patient. The post is built around attendant passes and a lane that stays clear all night.",
    "deployment": "Guards and lady guards, three shifts",
    "hard": "Ambulance lane at 2 a.m."
  },
  {
    "name": "McDonald's",
    "logo": "client-mcdonalds",
    "sector": "RETAIL & FOOD",
    "body": "High footfall, young crowd, and a cash float that walks out at closing. The post is written around the queue and the last twenty minutes of the day.",
    "deployment": "Guards on split shifts",
    "hard": "Closing-time cash escort"
  },
  {
    "name": "Bikanervala",
    "logo": "client-bikanervala",
    "sector": "RETAIL & FOOD",
    "body": "Sweets counter and dining floor through the evening rush, with the frontage kept moving so the queue never spills into the road.",
    "deployment": "Guards and parking marshals",
    "hard": "Evening footfall and frontage"
  },
  {
    "name": "M.P. Jewellers",
    "logo": "client-mp-jewellers",
    "sector": "HIGH-VALUE RETAIL",
    "body": "Licensed armed cover at the counter, and escort on every movement of stock or cash to and from the bank.",
    "deployment": "Gunmen, guards, cash escort",
    "hard": "Counter and transit exposure"
  },
  {
    "name": "Galaxy Toyota",
    "logo": "client-galaxy-toyota",
    "sector": "AUTOMOBILE",
    "body": "Showrooms lose money at the key board and the workshop gate, not on the display floor. Both get a written issue-and-return log.",
    "deployment": "Guards with a night watch on the yard",
    "hard": "Test-drive key control"
  },
  {
    "name": "Charu Motors",
    "logo": "",
    "sector": "AUTOMOBILE",
    "body": "Display-floor watch, key control at the service desk, and customer parking marshalled at a busy frontage.",
    "deployment": "Guards and parking marshals",
    "hard": "Frontage and service bay"
  },
  {
    "name": "ITL Public School",
    "logo": "client-itl",
    "sector": "SCHOOLS",
    "body": "A school is judged on fifteen minutes of dispersal. Parent verification has to be fast and firm at once, and the boundary watched all day.",
    "deployment": "Guards and lady guards on gate teams",
    "hard": "Dispersal and verification"
  },
  {
    "name": "Bombay Mercantile Bank",
    "logo": "client-bombay-mercantile",
    "sector": "BANKING",
    "body": "Branch-hours guarding, strong-room and ATM lobby cover, and armed escort on cash-handling days.",
    "deployment": "Guards and gunmen",
    "hard": "Strong room after closing"
  },
  {
    "name": "ATDC Vocational Institute",
    "logo": "client-atdc",
    "sector": "INSTITUTES",
    "body": "Campus gate with student and visitor registers, and a quiet floor presence through class hours.",
    "deployment": "Guards on the gate post",
    "hard": "Open campus, young intake"
  },
  {
    "name": "Biotechnology campus",
    "logo": "client-biotech",
    "sector": "LIFE SCIENCES",
    "body": "Clean-area access control, material movement records, and contractor entry through a single logged gate.",
    "deployment": "Guards with a supervisor per shift",
    "hard": "Clean-area discipline"
  }
]

/**
 * The Home marquee row, in the exact order of Hawk Eye Home.dc.html.
 * `kind: 'text'` entries are wordmark-only clients with no logo asset.
 */
export const CLIENT_ROW = [
  { key: 'wipro', kind: 'logo', alt: 'Wipro' },
  { key: 'mcdonalds', kind: 'logo', alt: "McDonald's" },
  { key: 'iic', kind: 'text', label: 'India International Centre' },
  { key: 'bikanervala', kind: 'logo', alt: 'Bikanervala' },
  { key: 'holy-family', kind: 'text', label: 'Holy Family Hospital' },
  { key: 'galaxy-toyota', kind: 'logo', alt: 'Galaxy Toyota' },
  { key: 'mp-jewellers', kind: 'logo', alt: 'M.P. Jewellers' },
  { key: 'itl', kind: 'logo', alt: 'ITL Public School' },
  { key: 'bombay-mercantile', kind: 'logo', alt: 'Bombay Mercantile Bank' },
  { key: 'atdc', kind: 'logo', alt: 'ATDC' },
  { key: 'charu-motors', kind: 'text', label: 'Charu Motors' },
  { key: 'biotech', kind: 'logo', alt: 'Biotechnology campus' },
]
