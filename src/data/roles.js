/** ROLES exactly as defined in Services.dc.html. */
export const ROLES = [
  {
    "title": "Security guards",
    "tag": "ROLE 01 · MANNED GUARDING",
    "intro": "The core post. A Hawk Eye guard is selected on a fixed criterion, verified, trained three weeks, and then briefed on your site specifically before he takes over a gate.",
    "duties": "Gate and lobby duty, visitor verification, vehicle and material gate passes, floor and perimeter rounds, register discipline, first response on fire or medical.",
    "training": "Three-week in-house curriculum by ex-servicemen; site-specific orientation; police verification and medical on record before deployment.",
    "sites": "Corporate campuses, hospitals, institutions, schools, showrooms, residential societies.",
    "shifts": "Three shifts of eight hours, or two of twelve. One weekly-off reliever provided for every four posts."
  },
  {
    "title": "Lady guards",
    "tag": "ROLE 02 · MANNED GUARDING",
    "intro": "Required wherever women are screened — wards, schools, retail floors and event entrances. Same curriculum, with additional emphasis on frisking protocol and conduct.",
    "duties": "Frisking points, ward and OPD duty, school gate at dispersal, retail floor watch, ladies washroom and changing-area checks.",
    "training": "Three-week curriculum plus frisking and de-escalation modules; conduct training for screening women, elders and children.",
    "sites": "Hospitals, schools, retail and malls, events, airports and metro-adjacent sites.",
    "shifts": "Day shifts by default; night duty only with client-provided rest facility and transport."
  },
  {
    "title": "Supervisors",
    "tag": "ROLE 03 · COMMAND",
    "intro": "The person who answers for the post. Above three posts, somebody has to own the handover — that is the supervisor, and he is on your escalation tree by name.",
    "duties": "Shift handover, register and key checks, incident reports, turnout inspection, liaison with your facility manager, discipline on the post.",
    "training": "Guard curriculum plus supervisory module — report writing, man management, escalation procedure and audit preparation.",
    "sites": "Any site with three or more posts, and every multi-shift deployment.",
    "shifts": "One supervisor per shift on large sites; one day supervisor with night rounds on smaller ones."
  },
  {
    "title": "Gunmen",
    "tag": "ROLE 04 · ARMED",
    "intro": "Licensed armed cover where cash, bullion or high-value stock is exposed. Ex-serviceman preference, weapon licence and antecedents verified before posting.",
    "duties": "Armed cover at counters and strong rooms, cash escort to and from bank, ATM replenishment cover, closing-time float movement.",
    "training": "Weapon handling and retention, escalation and use-of-force limits, licence compliance under the Arms Act, plus the standard curriculum.",
    "sites": "Jewellery counters, bank branches and ATMs, cash-in-transit routes, bullion and high-value retail.",
    "shifts": "Posted against banking hours or the client\\u2019s cash cycle, with a named reliever for leave cover."
  },
  {
    "title": "PSO & close protection",
    "tag": "ROLE 05 · PERSONAL",
    "intro": "Discreet personal cover for promoters, expatriate staff and family details — trained to be unobtrusive in public and rehearsed for the moment it stops being routine.",
    "duties": "Route recce and alternates, vehicle embus and debus drills, venue advance, crowd standoff, bag and package screening for the principal.",
    "training": "Close-protection drills, defensive driving awareness, first aid, and conduct training for family and corporate settings.",
    "sites": "Residences, corporate travel, public appearances, airports, weddings and family functions.",
    "shifts": "Twelve-hour details, or round-the-clock with a two-man rotation and a supervisor on call."
  },
  {
    "title": "Bouncers & event crew",
    "tag": "ROLE 06 · EVENTS",
    "intro": "Door and floor crew for venues and functions — screening at the entrance, order inside, and a calm exit when the event ends.",
    "duties": "Guest-list and invite checks, door screening, capacity control, VIP lane management, de-escalation and ejection, artist and green-room cover.",
    "training": "Crowd behaviour, de-escalation without force, legal limits on restraint, emergency evacuation of a packed venue.",
    "sites": "Banquets, clubs and lounges, concerts and exhibitions, weddings, college festivals, product launches.",
    "shifts": "Event-duration deployment with a pre-event briefing and a post-event debrief report."
  },
  {
    "title": "Mobile patrol",
    "tag": "ROLE 07 · PATROL",
    "intro": "For portfolios rather than single sites — scheduled and surprise rounds across locations, each with a route card and timed check-in.",
    "duties": "Fixed-route rounds, point check-in, lock and seal verification, alarm response, night reporting of anything out of place.",
    "training": "Route-card discipline, night observation, radio and reporting procedure, alarm and key protocol.",
    "sites": "Multi-site retail, warehouses and godowns, under-construction sites, unmanned offices at night.",
    "shifts": "Two to four rounds per night per site, plus unscheduled surprise checks by the audit team."
  },
  {
    "title": "Surveillance support",
    "tag": "ROLE 08 · CONTROL ROOM",
    "intro": "Cameras only work if somebody is watching and the footage can be found. Manned monitoring with camera health checks and a retrieval log.",
    "duties": "Control-room monitoring, camera health and blind-spot checks, footage retrieval on request, event logging against timestamps.",
    "training": "Attention and shift-rotation discipline, DVR and NVR operation, evidence handling, incident logging.",
    "sites": "Corporate campuses, hospitals, banks, showrooms and gated societies with existing CCTV.",
    "shifts": "Two-hour monitoring rotations within an eight-hour shift to keep attention reliable."
  },
  {
    "title": "Fire & safety watch",
    "tag": "ROLE 09 · EMERGENCY",
    "intro": "A dedicated safety post for sites with real fire load — hose points checked, extinguishers in date, evacuation routes kept clear and drills actually run.",
    "duties": "Daily fire-point checks, extinguisher and hose inspection, escape-route clearance, drill marshalling, hot-work permit watch.",
    "training": "Classes of fire and suppression, hose and extinguisher handling, evacuation marshalling, bomb-scare search procedure.",
    "sites": "Hospitals, kitchens and restaurants, warehouses, workshops, high-occupancy institutions.",
    "shifts": "One safety post per shift, with drill days scheduled monthly against your calendar."
  },
  {
    "title": "Parking & traffic marshals",
    "tag": "ROLE 10 · TRAFFIC",
    "intro": "The visible face of a busy site. Marshals keep the lane moving, the ambulance path open and the customer\\u2019s first two minutes calm.",
    "duties": "Vehicle marshalling and slotting, lane discipline, ambulance and fire-tender path clearance, valet coordination, peak-hour queue control.",
    "training": "Traffic marshalling signals, peak-hour management, courtesy and language training, emergency lane protocol.",
    "sites": "Hospitals, showrooms, restaurants, institutions, malls and event venues.",
    "shifts": "Posted against footfall peaks — typically split shifts covering opening and evening rush."
  },
  {
    "title": "Housekeeping & helpers",
    "tag": "ROLE 11 · SUPPORT",
    "intro": "Supplied on the same statutory footing as guards, so one contract and one compliance pack covers the whole site.",
    "duties": "Cleaning cycles by area and frequency, washroom checks, waste segregation and handling, pantry service, material movement, despatch support.",
    "training": "Chemical handling and dilution, surface-specific cleaning, hygiene protocol for hospitals and kitchens, conduct on client floors.",
    "sites": "Offices, hospitals, institutions, restaurants and showrooms already under our guarding contract.",
    "shifts": "Shift patterns matched to your working hours, with a supervisor shared across the site."
  }
]
