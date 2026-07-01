// lib/features.ts
//
// Single source of truth for every platform feature shown in the
// ShowcaseSlider and expanded on its own /features/[slug] page.
// Keeping this in one place means the slider and the detail page
// can never drift out of sync.

export interface FeatureStep {
  title: string;
  description: string;
}

export interface FeatureProblem {
  title: string;
  description: string;
}

export interface Feature {
  slug: string;
  eyebrow: string;
  title: string;
  tagline: string; // short one-liner, used in the slider
  image: string; // hero / slider image
  accent: string;
  whatItIs: string;
  whyItMatters: string;
  problems: FeatureProblem[];
  howItWorks: FeatureStep[];
}

export const features: Feature[] = [
  {
    slug: "multilingual-voice-capture",
    eyebrow: "Voice & language",
    title: "Multilingual voice capture",
    tagline:
      "Patients speak in their own regional language and auto language transcription lets the doctor follow along in real time, in-person or over video consults.",
    image: "/features_images/Multilingual Voice.png",
    accent: "#3B82F6",
    whatItIs:
      "A live speech layer that listens to the conversation between doctor and patient exactly as it happens, in Hindi, Marathi, Tamil, or whichever language the patient is most comfortable in, and turns it into a transcript the doctor can follow immediately and a structured record staff can search later.",
    whyItMatters:
      "Most Indian clinics see patients who are more comfortable describing symptoms in their mother tongue than in English or clinical Hindi. When that gap exists, either the patient under-explains what's wrong, or a staff member has to interpret in real time and something gets lost or delayed. Swasthya Sathi removes that translation step from every visit.",
    problems: [
      {
        title: "Symptoms get lost in translation",
        description:
          "Patients under-report what's actually wrong because they're translating in their head before they speak.",
      },
      {
        title: "Family or staff interpreting sensitive conversations",
        description:
          "Private medical details end up passing through a third person just to bridge a language gap.",
      },
      {
        title: "Notes rewritten after the fact",
        description:
          "Doctors manually reconstruct notes once a consult conducted partly in a regional language is over.",
      },
      {
        title: "No searchable record of what was said",
        description:
          "Without a transcript, there's nothing to refer back to beyond the doctor's memory and shorthand.",
      },
    ],
    howItWorks: [
      {
        title: "Listens in",
        description:
          "A mic picks up the conversation live, whether it's happening in person or over a video consult.",
      },
      {
        title: "Detects the language",
        description:
          "Hindi, Marathi, Tamil and other supported regional languages are identified sentence by sentence.",
      },
      {
        title: "Transcribes as you talk",
        description:
          "A partial transcript appears within a second or two, so the doctor is reading along, not waiting.",
      },
      {
        title: "Structures the record",
        description:
          "Text is tagged by speaker, timestamped, and saved directly to the patient's file.",
      },
    ],
  },
  {
    slug: "ai-diagnosis-smart-prescription",
    eyebrow: "Clinical decision support",
    title: "AI diagnosis & smart prescription",
    tagline:
      "Symptoms and history are turned into a structured clinical picture, with prescription suggestions the doctor reviews and signs off in seconds.",
    image: "/features_images/AI Diagnosis & Smart Prescription.png",
    accent: "#8B5CF6",
    whatItIs:
      "This feature structures the loose, conversational description of symptoms and history that comes out of a consult into a clean clinical picture, then proposes a prescription draft the doctor reviews and signs off, instead of building one from a blank page.",
    whyItMatters:
      "A doctor typically has eight to twelve minutes per patient, and most of that gets eaten by writing rather than examining. Smart prescription doesn't diagnose on its own; it removes the blank-page problem so clinical judgement goes into checking and adjusting rather than drafting from zero.",
    problems: [
      {
        title: "Consultation time lost to writing",
        description:
          "Doctors spend a large share of each visit documenting instead of examining the patient in front of them.",
      },
      {
        title: "Prescriptions written under pressure",
        description:
          "Decisions get made from memory in a rush, with no easy way to cross-check against the full history.",
      },
      {
        title: "Symptom detail that never gets recorded",
        description:
          "What the patient actually described often stays out of the structured, searchable record entirely.",
      },
      {
        title: "Inconsistent documentation across doctors",
        description:
          "Every doctor on a team ends up charting slightly differently, making records harder to compare later.",
      },
    ],
    howItWorks: [
      {
        title: "Captures the consult",
        description:
          "Symptoms, history and examination findings are pulled directly from the conversation.",
      },
      {
        title: "Builds a clinical picture",
        description:
          "Everything is structured into complaint, history, findings and assessment.",
      },
      {
        title: "Drafts the prescription",
        description:
          "A suggested prescription is generated against that clinical picture, ready for review.",
      },
      {
        title: "Doctor reviews and signs",
        description:
          "Nothing reaches the patient until the doctor approves it or makes an edit.",
      },
    ],
  },
  {
    slug: "ai-alerts",
    eyebrow: "Safety net",
    title: "AI alerts",
    tagline:
      "Drug interactions, abnormal vitals and follow-up risks are flagged automatically so nothing slips through during a busy clinic day.",
    image: "/features_images/AI Alerts.png",
    accent: "#EF4444",
    whatItIs:
      "A background watcher that checks every consultation against drug interactions, abnormal vitals and overdue follow-ups, and raises a flag the moment something needs a second look.",
    whyItMatters:
      "On a busy clinic day, the things most likely to get missed aren't the obvious cases, they're the quiet ones: a drug interaction buried in a long medication history, a vital sign that's slightly off, a follow-up that should have happened two weeks ago. AI Alerts exists to catch exactly those.",
    problems: [
      {
        title: "Drug interactions missed across visits",
        description:
          "A patient on multiple prescriptions from different visits can end up with an interaction no one line item revealed.",
      },
      {
        title: "Abnormal vitals logged, not acted on",
        description:
          "A reading gets recorded but doesn't get flagged for the follow-up it actually needs.",
      },
      {
        title: "Follow-ups that quietly lapse",
        description:
          "Patients who should be checked in on after a first visit fall out of view without anyone noticing.",
      },
      {
        title: "No single place to see what needs attention",
        description:
          "Without a consolidated view, urgent items compete for attention with routine ones.",
      },
    ],
    howItWorks: [
      {
        title: "Runs alongside every consult",
        description:
          "Checks happen in the background, without adding an extra step for the doctor.",
      },
      {
        title: "Flags in real time",
        description:
          "Interactions and abnormal readings surface immediately, not in a report the next day.",
      },
      {
        title: "Prioritises by risk",
        description:
          "Alerts are ranked so the most urgent one is never buried under routine notices.",
      },
      {
        title: "Tracks follow-up risk",
        description:
          "Patients who should be checked in on are surfaced before they fall out of the system.",
      },
    ],
  },
  {
    slug: "lab-to-clinic-integration",
    eyebrow: "Lab workflow",
    title: "Lab to clinic integration & analysis",
    tagline:
      "Lab results flow straight into the patient record, with AI analysis surfacing what matters before the doctor even opens the report.",
    image: "/features_images/Lab to clinic Integration.png",
    accent: "#06B6D4",
    whatItIs:
      "This feature connects lab results directly into the patient record as soon as they're ready, and runs an AI pass over the report to highlight what's outside normal range before the doctor even opens it.",
    whyItMatters:
      "Lab reports usually arrive as a PDF or a phone call, disconnected from the record the doctor is actually looking at. That gap means results sit unread, or a doctor has to manually scan a dense report during a consult to find the one number that matters.",
    problems: [
      {
        title: "Results arrive disconnected from the record",
        description:
          "Lab data shows up separately from the file the doctor is working out of during the visit.",
      },
      {
        title: "Manual scanning under time pressure",
        description:
          "Doctors read full reports line by line during a consult, looking for the value that matters.",
      },
      {
        title: "Abnormal results caught late",
        description:
          "A flagged value can go unnoticed until the patient's next scheduled visit.",
      },
      {
        title: "No continuity between lab and consult",
        description:
          "What a lab found doesn't automatically inform what happens in the next appointment.",
      },
    ],
    howItWorks: [
      {
        title: "Results land in the record",
        description:
          "Lab data flows straight into the patient's file, with no manual entry required.",
      },
      {
        title: "AI reads the report first",
        description:
          "Values outside the normal range are surfaced before the doctor opens the report.",
      },
      {
        title: "Context carries forward",
        description:
          "Past results sit alongside new ones, showing a trend instead of a single isolated reading.",
      },
      {
        title: "Doctor gets a head start",
        description:
          "A summarised view is ready before the follow-up consult even begins.",
      },
    ],
  },
  {
    slug: "ai-call-assistant-scheduler",
    eyebrow: "Front desk",
    title: "AI call assistant & scheduler",
    tagline:
      "An AI voice assistant answers calls, books and reschedules appointments, and sends reminders without adding to your front-desk headcount.",
    image: "/features_images/AI call assistant & schedular.png",
    accent: "#10B981",
    whatItIs:
      "A voice assistant that answers incoming calls, books and reschedules appointments, and sends reminders, handling the calls that would otherwise interrupt the front desk or go to voicemail during a busy clinic day.",
    whyItMatters:
      "Front-desk staff are often juggling a phone call and a patient standing in front of them at the same time. Every missed call is a patient who might book somewhere else instead of calling back later.",
    problems: [
      {
        title: "Calls go unanswered",
        description:
          "Incoming calls compete with the patient already standing at the desk, and the phone often loses.",
      },
      {
        title: "Bookings that don't make it into the schedule",
        description:
          "Appointments taken by phone can get noted down and never actually reach the calendar correctly.",
      },
      {
        title: "Preventable no-shows",
        description:
          "A simple reminder call is often the difference between a kept appointment and an empty slot.",
      },
      {
        title: "Headcount tied to call volume",
        description:
          "Staffing has to grow just to keep pace with the phone, rather than with patient care.",
      },
    ],
    howItWorks: [
      {
        title: "Picks up the call",
        description:
          "Answers in the patient's language without adding to the front desk's workload.",
      },
      {
        title: "Understands the request",
        description:
          "Books, reschedules or cancels appointments against the real-time clinic schedule.",
      },
      {
        title: "Confirms and reminds",
        description:
          "Sends a confirmation right away, then a reminder as the appointment approaches.",
      },
      {
        title: "Hands off when needed",
        description:
          "Routes to a person for anything outside a routine scheduling request.",
      },
    ],
  },
  {
    slug: "inventory-management",
    eyebrow: "Stock & supply",
    title: "Inventory management",
    tagline:
      "Stock levels, expiries and reorder points are tracked automatically, with low-stock alerts before they become a problem.",
    image: "/features_images/Inventory Management.png",
    accent: "#F59E0B",
    whatItIs:
      "This feature tracks stock levels, expiry dates and reorder points for medications and consumables automatically, and raises a low-stock alert before a shortage becomes a problem mid-consult.",
    whyItMatters:
      "Running out of a common medication or consumable during a consult is a small failure with an outsized cost: it stalls the visit and can send the patient elsewhere. Manual stock counts usually catch this too late, after the shelf is already empty.",
    problems: [
      {
        title: "Stock-outs discovered mid-consult",
        description:
          "A shortage is usually noticed only when a doctor reaches for something that isn't there.",
      },
      {
        title: "Expired stock going unnoticed",
        description:
          "Items pass their expiry quietly, until a routine audit finds them too late to use.",
      },
      {
        title: "Reactive reordering",
        description:
          "Restocking happens on memory of what usually runs low, not on actual usage data.",
      },
      {
        title: "No visibility across the clinic",
        description:
          "There's no single view of which items are approaching expiry or running thin.",
      },
    ],
    howItWorks: [
      {
        title: "Tracks every unit",
        description:
          "Stock levels update automatically as items are used during consults and procedures.",
      },
      {
        title: "Watches expiry dates",
        description:
          "Items nearing expiry are flagged well before they become a write-off.",
      },
      {
        title: "Learns reorder points",
        description:
          "Thresholds are set from actual usage patterns rather than guesswork.",
      },
      {
        title: "Alerts before it's a problem",
        description:
          "Low-stock notices arrive with enough lead time to reorder calmly, not urgently.",
      },
    ],
  },
  {
    slug: "revenue-intelligence",
    eyebrow: "Financial visibility",
    title: "Revenue intelligence",
    tagline:
      "AI surfaces revenue trends, leakage and growth opportunities across your clinic so decisions are backed by data, not guesswork.",
    image: "/features_images/Revenue Intelligence.png",
    accent: "#00D4AA",
    whatItIs:
      "This feature surfaces revenue trends, billing leakage and growth opportunities across the clinic in one dashboard, so financial decisions are backed by what's actually happening rather than a monthly gut-check.",
    whyItMatters:
      "Most clinics only look closely at their numbers once a month, if that. By the time a revenue leak or a drop in a specific procedure's volume shows up in a spreadsheet, weeks of it have already happened.",
    problems: [
      {
        title: "Billing leakage goes unnoticed",
        description:
          "Gaps between what was delivered in a consult and what actually gets billed slip through quietly.",
      },
      {
        title: "No clear view of what's driving growth",
        description:
          "It's hard to tell which procedures, doctors or time periods are actually moving revenue.",
      },
      {
        title: "Decisions made on a monthly lag",
        description:
          "Financial calls get made on last month's numbers instead of what's happening right now.",
      },
      {
        title: "Revenue data scattered across systems",
        description:
          "Billing, scheduling and clinical data live apart, making a single clear picture hard to build.",
      },
    ],
    howItWorks: [
      {
        title: "Pulls from every visit",
        description:
          "Billing, scheduling and clinical data feed into the same dashboard automatically.",
      },
      {
        title: "Flags leakage",
        description:
          "Gaps between services delivered and services billed are surfaced automatically.",
      },
      {
        title: "Shows what's driving growth",
        description:
          "Trends by procedure, doctor and time period are visible at a glance.",
      },
      {
        title: "Updates continuously",
        description:
          "There's no waiting for a month-end report to see where things stand.",
      },
    ],
  },
];

export function getFeatureBySlug(slug: string): Feature | undefined {
  return features.find((f) => f.slug === slug);
}