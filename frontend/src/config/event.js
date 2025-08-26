// Central event configuration (single source of truth)
// NOTE: You can safely edit this file to update all site content in one place.

export const eventConfig = {
  name: "HacknRoll",
  org: "Institute of Engineering and Technology, MLSU, in collaboration with the Department of Computer Science, Vigyan Bhawan (Block A), MLSU",
  city: "Udaipur, Rajasthan",
  startDateTimeIST: "2025-09-15T09:00:00+05:30",
  endDateTimeIST: "2025-09-15T17:00:00+05:30",
  registrationDeadlineIST: "2025-09-02T23:59:59+05:30",
  registrationDeadline: "Last Date of Registration is 02/09/2025",
  venueDetails: "Vigyan Bhawan Auditorium, Block-A",
  prizePool: "A Participation Certificate will be awarded to all attendees.",

  teamSize: "6 members",
  tracks: [
    "Smart Automation, Heritage & Culture, Agriculture, Foodtech & Rural Development, Transportation & Logistic, Clean & Green Technology, Renewable/ Sustainable Energy, Disaster Management, Space Technology, Fitness & Sports, Medtech/biotech/ Healthtech, Smart Vehicles, Robotics And Drones, Tourism, Blockchain & Cybersecurity, Smart Education, Toys And Games, Miscellaneous",
  ],
  register: {
    // TODO: Replace with your actual Google Form links
    embedUrl: "https://forms.fillout.com/t/6UKn6QpNgeus",
    shareUrl: "https://forms.fillout.com/t/6UKn6QpNgeus",
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
    {
      q: "Who can participate?",
      a: "Students from any branch/year. Beginners welcome!",
    },
    { q: "Team size?", a: "6 members per team." },
    { q: "Is there a fee?", a: "A fee of ₹250 is applicable for each team." },
    {
      q: "Do I need prior experience?",
      a: "No — mentors and workshops will help.",
    },
    {
      q: "What is the mode of the hackathon?",
      a: "The event will be conducted offline at the college campus.",
    },
    {
      q: "What should I bring?",
      a: "A laptop, charger, student ID, and lots of energy!",
    },
    {
      q: "Will food and accommodation be provided?",
      a: "Yes, food will be arranged for all participants. Accommodation details will be shared if required.",
    },
    {
      q: "What are the prizes?",
      a: "Exciting cash prizes, goodies, and certificates for winners and participants.",
    },
    {
      q: "How do I register?",
      a: "You can register through the official registration portal before the deadline.",
    },
    {
      q: "Will I get a certificate?",
      a: "Yes, all participants will receive a certificate of participation.",
    },
  ],
};
