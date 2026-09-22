/** The 21-day course exactly as defined in Training.dc.html. */
export const DAYS = [
  {
    "title": "Documents and turnout",
    "body": "Aadhaar and address verification, police check raised, medical, kit issue, and the first turnout inspection.",
    "instructor": "Hony. Captain (Retd.)"
  },
  {
    "title": "Drill and bearing",
    "body": "Falling in, marching, salute, and standing a post for four hours without slouching. Bearing is the first thing a visitor reads.",
    "instructor": "Subedar Major (Retd.)"
  },
  {
    "title": "The register is the record",
    "body": "Visitor slips, vehicle logs and gate passes written legibly, timed and signed. Wrong entry, whole page rewritten.",
    "instructor": "Subedar (Retd.)"
  },
  {
    "title": "Frisking and screening",
    "body": "Body search protocol, bag checks, HHMD use, and screening women and elders without causing offence.",
    "instructor": "Naib Subedar (Retd.)"
  },
  {
    "title": "Access control at the gate",
    "body": "Host verification, appointment lists, contractor entry, and refusing entry politely when the list says no.",
    "instructor": "Subedar (Retd.)"
  },
  {
    "title": "Talking to people",
    "body": "Tone, Hindi and English phrasing for common situations, and calming a shouting visitor without touching him.",
    "instructor": "Hony. Lieutenant (Retd.)"
  },
  {
    "title": "Week one board",
    "body": "Written register test, drill inspection and a mock gate post assessed by two instructors.",
    "instructor": "Hony. Captain (Retd.)"
  },
  {
    "title": "Fire, the part that matters",
    "body": "Classes of fire, what never to put water on, extinguisher types on an Indian commercial site, alarm panels.",
    "instructor": "Subedar Major (Retd.)"
  },
  {
    "title": "Hose and extinguisher, live",
    "body": "Unroll, couple, charge, direct. Every recruit discharges a live extinguisher on our own ground.",
    "instructor": "Subedar (Retd.)"
  },
  {
    "title": "Evacuation and assembly",
    "body": "Route marshalling, stairwell discipline, headcount at the assembly point, and who speaks to the fire brigade.",
    "instructor": "Hony. Lieutenant (Retd.)"
  },
  {
    "title": "Bomb-scare search",
    "body": "Sectorised search drill, what never to touch, cordon distances, and the call sequence.",
    "instructor": "Hony. Captain (Retd.)"
  },
  {
    "title": "First aid",
    "body": "Bleeding control, CPR basics, heat stroke, seizure, and getting an ambulance into a crowded lane.",
    "instructor": "Naib Subedar (Retd.)"
  },
  {
    "title": "Theft and the law",
    "body": "Detaining versus restraining, what a guard may legally do, and writing a statement that holds up.",
    "instructor": "Subedar (Retd.)"
  },
  {
    "title": "Week two board",
    "body": "Timed hose drill, evacuation with a live headcount, and an oral on the law of detention.",
    "instructor": "Hony. Captain (Retd.)"
  },
  {
    "title": "Night beat and route cards",
    "body": "Route card discipline, timed check-in, torch and radio use, and reading a site in the dark.",
    "instructor": "Subedar Major (Retd.)"
  },
  {
    "title": "Control room and cameras",
    "body": "Monitoring without drifting off, camera health checks, footage retrieval, and logging what the camera saw.",
    "instructor": "Subedar (Retd.)"
  },
  {
    "title": "Your standing orders",
    "body": "The actual post — hospital, school, showroom or bank. Every site gets its own briefing sheet.",
    "instructor": "Hony. Lieutenant (Retd.)"
  },
  {
    "title": "Handover, done properly",
    "body": "Standing instructions read back, keys and registers counted, open issues carried to the next shift.",
    "instructor": "Naib Subedar (Retd.)"
  },
  {
    "title": "Social responsibility",
    "body": "Conduct with domestic staff, drivers and delivery riders. No bribes, no favours, no keys lent.",
    "instructor": "Hony. Captain (Retd.)"
  },
  {
    "title": "Shadow shift, live post",
    "body": "A full shift beside a serving guard at a client site, supervised, under the real register.",
    "instructor": "Site supervisor"
  },
  {
    "title": "Final board and posting",
    "body": "Two instructors and a supervisor. Passed recruits are posted; the rest repeat week three.",
    "instructor": "Hony. Captain (Retd.)"
  }
]

export function blockLabel(i) {
  if (i < 7) return 'WEEK 1 · FOUNDATION'
  if (i < 14) return 'WEEK 2 · EMERGENCY'
  return 'WEEK 3 · ON-SITE'
}
