// Central event configuration (single source of truth)
// NOTE: You can safely edit this file to update all site content in one place.

export const eventConfig = {
  name: "HackanRoll",
  org: "Institute of Engineering and Technology, MLSU",
  city: "Udaipur, Rajasthan",
  startDateTimeIST: "2025-10-18T09:00:00+05:30",
  endDateTimeIST: "2025-10-19T17:00:00+05:30",
  registrationDeadlineIST: "2025-10-12T23:59:00+05:30",
  venueDetails: "IET, MLSU Main Block – Auditorium (TBC)",
  prizePool: "₹1,00,000+ (TBC)",
  teamSize: "2–4",
  tracks: ["AI/ML", "Sustainability", "Civic Tech", "Open Innovation"],
  register: {
    // TODO: Replace with your actual Google Form links
    embedUrl: "https://docs.google.com/forms/d/e/EXAMPLE/viewform?embedded=true",
    shareUrl: "https://forms.gle/EXAMPLE",
  },
  submit: {
    // TODO: Replace with your actual Google Form links for project submission
    embedUrl: "https://docs.google.com/forms/d/e/EXAMPLE_SUBMIT/viewform?embedded=true",
    shareUrl: "https://forms.gle/EXAMPLE_SUBMIT",
  },
  socials: {
    instagram: "#", // update later
    linkedin: "#", // update later
    email: "hackanroll@iet-mlsu.edu",
  },
  seo: {
    title: "HackanRoll — IET, MLSU Hackathon",
    description:
      "Build. Ship. Celebrate. Join HackanRoll at IET, MLSU — fast-paced hacking, real impact, and big vibes.",
    ogImage: "/og.png",
  },
  theme: {
    // Accent chosen by you: Electric Cyan
    accent: "#22d3ee",
    darkBg: "#0f172a",
    // Hero background image (matrix style coding themed)
    heroImage:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1800&q=60",
  },
  faqs: [
    { q: "Who can participate?", a: "Students from any branch/year. Beginners welcome!" },
    { q: "Team size?", a: "2–4 members per team." },
    { q: "Is there a fee?", a: "No/Minimal (TBC)." },
    { q: "Do I need prior experience?", a: "No — mentors and workshops will help." },
    { q: "What about IP?", a: "Teams retain IP; by submitting you grant demo rights." },
    { q: "Food/Stay?", a: "No overnight stay at venue; work offsite and present results next day." },
  ],
};