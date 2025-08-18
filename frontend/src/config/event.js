// Central event configuration (single source of truth)
// NOTE: You can safely edit this file to update all site content in one place.

export const eventConfig = {
  name: "HacknRoll",
  org: "Institute of Engineering and Technology, MLSU",
  city: "Udaipur, Rajasthan",
  startDateTimeIST: "2025-08-24T09:00:00+05:30",
  endDateTimeIST: "2025-08-24T17:00:00+05:30",
  registrationDeadlineIST: "2025-08-23T21:00:00+05:30",
  venueDetails: "IET, MLSU Main Block - Studio-1",
  prizePool: "A Participation Certificate will be awarded to all attendees.",

  teamSize: "2–4",
  tracks: ["Cyber Security, EdTech, Industrial, Smart Tools, Environment"],
  register: {
    // TODO: Replace with your actual Google Form links
    embedUrl: "https://forms.gle/BdMUEYzDJomSVM7y8",
    shareUrl: "https://forms.gle/BdMUEYzDJomSVM7y8",
  },
  socials: {
    instagram: "https://www.instagram.com/ietudaipur?igsh=cXBpZzh4dXdicmdk", // update later
    linkedin: "https://www.linkedin.com/school/ietudaipur/", // update later
    email: "hackanroll@iet-mlsu.edu",
  },
  seo: {
    title: "HacknRoll — IET, MLSU Hackathon",
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
    { q: "Is there a fee?", a: "No, there is no fee applied." },
    { q: "Do I need prior experience?", a: "No — mentors and workshops will help." },
  ],
};