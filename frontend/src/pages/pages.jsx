import React, { useState } from "react";
import { Link } from "react-router-dom";
import { eventConfig } from "../config/event";
import { schedule, stats } from "../mocks/mock";
import {
  Navbar,
  Footer,
  SectionHeader,
  Countdown,
  FAQAccordion,
  FormEmbed,
  StatCard,
  Timeline,
  Reveal,
} from "../components/common";
import AboutUs from "../components/aboutus";
import { Button } from "../components/ui/button";
import { CalendarDays, MapPin, Sparkles, ArrowRight, Timer } from "lucide-react";
import { Badge } from "../components/ui/badge";
import WelcomeIETiensEffect from "../components/ui/welcome-effect";

// ProblemStatements.jsx
import {
  Cpu,
  Building2,
  Sprout,
  Truck,
  Leaf,
  BatteryCharging,
  AlertTriangle,
  Rocket,
  Dumbbell,
  HeartPulse,
  Car,
  Bot,
  Plane,
  ShieldCheck,
  GraduationCap,
  Gamepad2,
  Lightbulb,
  FileText,
  CheckCircle,
  Hammer,
  Users,
} from "lucide-react";

const register = {
  embedUrl: "https://forms.fillout.com/t/6UKn6QpNgeus",
  shareUrl: "https://forms.fillout.com/t/6UKn6QpNgeus",
};

function ProblemStatements() {
  const problemStatements = [
    {
      category: "Smart Automation",
      description:
        "Develop solutions to automate processes in industries, homes, or daily life using IoT, AI, or other technologies.",
      icon: Cpu,
      color: "from-blue-500 to-cyan-500",
    },
    {
      category: "Heritage & Culture",
      description:
        "Create digital solutions to preserve, promote, or enhance access to cultural heritage and traditions.",
      icon: Building2,
      color: "from-amber-500 to-orange-500",
    },
    {
      category: "Agriculture, Foodtech & Rural Development",
      description:
        "Build technologies that improve farming practices, food distribution, or quality of life in rural areas.",
      icon: Sprout,
      color: "from-emerald-500 to-green-500",
    },
    {
      category: "Transportation & Logistic",
      description:
        "Innovate in areas of smart transportation, traffic management, or efficient logistics systems.",
      icon: Truck,
      color: "from-sky-500 to-blue-600",
    },
    {
      category: "Clean & Green Technology",
      description:
        "Develop eco-friendly solutions for waste management, pollution control, or sustainable living.",
      icon: Leaf,
      color: "from-lime-500 to-emerald-500",
    },
    {
      category: "Renewable/Sustainable Energy",
      description:
        "Create solutions for harnessing, managing, or optimizing renewable energy sources.",
      icon: BatteryCharging,
      color: "from-yellow-500 to-amber-500",
    },
    {
      category: "Disaster Management",
      description:
        "Build tools for prediction, response, or recovery from natural or man-made disasters.",
      icon: AlertTriangle,
      color: "from-red-500 to-orange-500",
    },
    {
      category: "Space Technology",
      description:
        "Develop applications related to space exploration, satellite technology, or astronomical research.",
      icon: Rocket,
      color: "from-purple-500 to-pink-500",
    },
    {
      category: "Fitness & Sports",
      description:
        "Create technologies to enhance athletic performance, training methods, or fan engagement.",
      icon: Dumbbell,
      color: "from-rose-500 to-red-500",
    },
    {
      category: "Medtech/Biotech/Healthtech",
      description:
        "Innovate in healthcare with solutions for diagnosis, treatment, or patient care.",
      icon: HeartPulse,
      color: "from-pink-500 to-rose-500",
    },
    {
      category: "Smart Vehicles",
      description:
        "Develop technologies for autonomous vehicles, vehicle safety, or transportation efficiency.",
      icon: Car,
      color: "from-indigo-500 to-purple-500",
    },
    {
      category: "Robotics And Drones",
      description:
        "Create applications for robotics, drones, or automated systems in various domains.",
      icon: Bot,
      color: "from-cyan-500 to-blue-500",
    },
    {
      category: "Tourism",
      description:
        "Build solutions to enhance travel experiences, tourism management, or cultural exploration.",
      icon: Plane,
      color: "from-violet-500 to-purple-500",
    },
    {
      category: "Blockchain & Cybersecurity",
      description:
        "Develop secure systems, blockchain applications, or cybersecurity solutions.",
      icon: ShieldCheck,
      color: "from-blue-600 to-indigo-600",
    },
    {
      category: "Smart Education",
      description:
        "Create technologies to enhance learning experiences, educational access, or teaching methods.",
      icon: GraduationCap,
      color: "from-teal-500 to-cyan-500",
    },
    {
      category: "Toys And Games",
      description:
        "Innovate in entertainment with educational toys, games, or interactive experiences.",
      icon: Gamepad2,
      color: "from-fuchsia-500 to-purple-500",
    },
    {
      category: "Miscellaneous",
      description:
        "Any innovative idea that doesn't fit into the above categories but has real-world impact.",
      icon: Sparkles,
      color: "from-cyan-400 to-purple-500",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden w-full relative">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/3 right-1/3 w-56 h-56 bg-pink-500/10 rounded-full blur-3xl animate-pulse-slow delay-2000"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500">
              Problem Statements
            </span>
          </h2>
          <p className="text-slate-300 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            Choose from these diverse tracks to showcase your innovative
            solutions. Participants can also propose their own ideas in the
            <span className="text-cyan-400 font-semibold">
              {" "}
              Miscellaneous
            </span>{" "}
            category.
          </p>
        </div>

        {/* Problem Statement Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {problemStatements.map((ps, index) => {
            const Icon = ps.icon;
            return (
              <div
                key={index}
                className="group relative rounded-2xl p-6 bg-gradient-to-b from-slate-800/50 to-slate-900/30 border border-slate-700/30 
                shadow-lg shadow-black/20 transition-all duration-500 hover:-translate-y-2 
                hover:shadow-xl hover:shadow-cyan-500/10 hover:border-cyan-400/20">
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${ps.color} flex items-center justify-center mb-6 mx-auto shadow-lg`}>
                  <Icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 text-center group-hover:text-cyan-300 transition-colors duration-300">
                  {ps.category}
                </h3>
                <p className="text-slate-400 text-sm sm:text-base text-center group-hover:text-slate-300 transition-colors duration-300">
                  {ps.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        {/* Register Button */}
        <a
          href={register.shareUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 
    shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 hover:-translate-y-1 flex items-center gap-2">
          <span>Register Now</span>
          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </a>

        {/* Submit Project Button */}
        <a
          href="https://forms.gle/YOUR_SUBMISSION_FORM" // 🔗 replace with real submission form link
          target="_blank"
          rel="noopener noreferrer"
          className="group relative px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 
    shadow-lg hover:shadow-pink-500/30 transition-all duration-300 hover:-translate-y-1 flex items-center gap-2">
          <span>Submit Project</span>
          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}

export { ProblemStatements };

// Judging Criteria Component
function JudgingCriteria() {
  const colorMap = {
    cyan: {
      gradient: "from-cyan-500 to-cyan-600",
      badge: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
      glow: "hover:shadow-cyan-500/20",
    },
    purple: {
      gradient: "from-purple-500 to-purple-600",
      badge: "bg-purple-500/10 text-purple-300 border-purple-500/20",
      glow: "hover:shadow-purple-500/20",
    },
    pink: {
      gradient: "from-pink-500 to-pink-600",
      badge: "bg-pink-500/10 text-pink-300 border-pink-500/20",
      glow: "hover:shadow-pink-500/20",
    },
  };

  const criteria = [
    {
      label: "Novelty of Idea",
      description:
        "Originality and innovative thinking. How unique and fresh is your approach?",
      weight: "25%",
      color: "cyan",
      icon: <Lightbulb className="h-7 w-7 sm:h-8 sm:w-8 text-white" />,
    },
    {
      label: "Clarity & Detailing",
      description:
        "How well-defined and detailed is your solution? Clear documentation and explanation.",
      weight: "15%",
      color: "purple",
      icon: <FileText className="h-7 w-7 sm:h-8 sm:w-8 text-white" />,
    },
    {
      label: "Feasibility",
      description:
        "How practical and achievable is your solution given current technology and resources?",
      weight: "20%",
      color: "pink",
      icon: <CheckCircle className="h-7 w-7 sm:h-8 sm:w-8 text-white" />,
    },
    {
      label: "Practicability",
      description:
        "How easily can your solution be implemented in real-world scenarios?",
      weight: "15%",
      color: "cyan",
      icon: <Hammer className="h-7 w-7 sm:h-8 sm:w-8 text-white" />,
    },
    {
      label: "Sustainability",
      description:
        "How environmentally and economically sustainable is your solution long-term?",
      weight: "15%",
      color: "purple",
      icon: <Leaf className="h-7 w-7 sm:h-8 sm:w-8 text-white" />,
    },
    {
      label: "User Experience (UX)",
      description:
        "How intuitive, accessible, and enjoyable is your solution for end-users?",
      weight: "10%",
      color: "pink",
      icon: <Users className="h-7 w-7 sm:h-8 sm:w-8 text-white" />,
    },
  ];

  return (
    <section className="py-16 md:py-24 overflow-hidden w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-56 h-56 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500">
              Judging Criteria
            </span>
          </h2>
          <p className="text-slate-300 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
            Your projects will be evaluated based on the following criteria —
            ensuring a fair and transparent evaluation process.
            <span className="block mt-4 text-cyan-300 animate-pulse text-base">
              Let your innovation shine! ✨
            </span>
          </p>
        </div>

        {/* Criteria Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {criteria.map((c) => {
            const colors = colorMap[c.color];
            return (
              <div
                key={c.label}
                className={`group relative rounded-2xl p-6 bg-gradient-to-b from-slate-800/50 to-slate-900/30 
                border border-slate-700/30 shadow-lg transition-all duration-500 hover:-translate-y-2 ${colors.glow}`}>
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${colors.gradient} 
                  flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {c.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 text-center group-hover:text-cyan-300 transition-colors duration-300">
                  {c.label}
                </h3>
                <p className="text-slate-400 text-sm sm:text-base mb-4 text-center group-hover:text-slate-300 transition-colors duration-300">
                  {c.description}
                </p>
                <div className="mt-4 text-center">
                  <span
                    className={`inline-block ${colors.badge} text-xs sm:text-sm font-medium px-3 py-1 rounded-full border`}>
                    Weight: {c.weight}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default JudgingCriteria;

function CardHighlights() {
  return (
    <div className="mt-6 grid gap-3">
      {/* <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <div className="text-slate-300 text-sm">Tracks</div>
        <div className="text-white font-medium">
          {eventConfig.tracks.join(" · ")}
        </div>
      </div>
      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <div className="text-slate-300 text-sm">Team Size</div>
        <div className="text-white font-medium">{eventConfig.teamSize}</div>
      </div> */}
      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <div className="text-slate-300 text-sm">Note</div>
        <div className="text-white font-medium">{eventConfig.prizePool}</div>
      </div>
    </div>
  );
}

// Home (Landing)
export function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section
          className="relative overflow-hidden bg-slate-950"
          style={{
            backgroundImage: `url(${eventConfig.theme.heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
          <div className="hero-bg-overlay" aria-hidden />
          <div className="hero-animated" aria-hidden>
            <span className="blob blob1" />
            <span className="blob blob2" />
            <span className="blob blob3" />
          </div>
          {/* extra aesthetic tints & vignette */}
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(650px circle at 75% 15%, rgba(34,211,238,0.08), transparent 60%), radial-gradient(700px circle at 20% 90%, rgba(34,211,238,0.06), transparent 60%)",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(100% 60% at 50% 50%, transparent 40%, rgba(2,6,23,0.65) 75%, rgba(2,6,23,0.95) 100%)",
              }}
            />
          </div>

          <div className="relative mx-auto max-w-6xl px-4 py-14 md:py-22">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <Reveal>
                <h1
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 
             font-extrabold tracking-tight 
             text-transparent bg-clip-text 
             bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 
             drop-shadow-md text-left">
                  {eventConfig.name}
                </h1>

                <p className="mt-6 mb-8 text-3xl font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-300 drop-shadow-lg">
                  Gateway to Smart India Hackathon 2025
                </p>

                {/* Welcome IET'iens instead of hello */}
                <WelcomeIETiensEffect className="mt-2" speed={1.1} />

                {/* Venue/Time bar */}
                <div className="mt-4 flex flex-wrap gap-2 text-sm">
                  <div className="glassbar flex items-center gap-2">
                    <CalendarDays size={16} className="text-cyan-300" />
                    {new Date(eventConfig.startDateTimeIST).toLocaleString(
                      "en-IN",
                      { timeZone: "Asia/Kolkata", timeZoneName: "short" }
                    )}
                  </div>
                  <div className="glassbar flex items-center gap-2">
                    <MapPin size={16} className="text-cyan-300" />
                    {eventConfig.venueDetails}
                  </div>
                  <div className="glassbar flex items-center gap-2">
                    <Timer size={16} className="text-cyan-300" />
                    {eventConfig.registrationDeadline}
                  </div>
                </div>

                <div className="mt-10 max-w-lg">
                  <Countdown
                    targetIso={eventConfig.startDateTimeIST}
                    registrationDeadlineIso={
                      eventConfig.registrationDeadlineIST
                    }
                    endIso={eventConfig.endDateTimeIST}
                  />
                </div>
              </Reveal>

              <Reveal delay={120}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
                  {stats.map((s, idx) => (
                    <StatCard
                      key={idx}
                      icon={s.icon}
                      label={s.label}
                      value={s.value}
                    />
                  ))}
                </div>
                <CardHighlights />
              </Reveal>
            </div>
          </div>
        </section>

        {/* Judging Criteria Section */}
        <JudgingCriteria />

        {/* Problem Statements Section */}
        <ProblemStatements />

        {/* Team Section */}
        <Reveal>
          <section className="mx-auto max-w-6xl px-4 py-16">
            <div className="mb-10 text-center">
              <h2 className="text-4xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 drop-shadow-lg">
                Our Team
              </h2>
              <p className="mt-3 text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed mx-auto">
                The people behind the event
              </p>
              <AboutUs />
            </div>

            <div className="mt-2 text-center">
              <Link to="/about#team">
                <Button
                  variant="outline"
                  className="rounded-full border-cyan-500 text-cyan-300 hover:bg-cyan-500/10">
                  Meet the full team
                </Button>
              </Link>
            </div>
          </section>
        </Reveal>

        {/* FAQs Section */}
        <Reveal>
          <section className="mx-auto max-w-6xl px-4 py-16">
            <SectionHeader
              title="FAQs"
              subtitle="Sabse common sawaal, ek jagah."
            />
            <FAQAccordion items={eventConfig.faqs} />
          </section>
        </Reveal>

        {/* CTA Section */}
        <Reveal>
          <section className="relative py-16">
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/10 to-transparent" />
            <div className="mx-auto max-w-4xl px-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-10 md:p-12 text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Build. Ship. Celebrate.
                </h3>
                <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-6">
                  Join the hackathon that's all about action and impact.
                </p>
                <Link to="/register">
                  <Button className="rounded-full px-8 py-3 text-lg bg-cyan-500 text-slate-900 hover:bg-cyan-400 font-semibold">
                    Register now
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}

// About Page
export function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 py-1 space-y-16">
        {/* Section: HacknRoll Overview */}
        <section className="px-6 md:px-12 lg:px-20 py-12 space-y-10">
          <SectionHeader title="What is HacknRoll?" align="left" />

          {/* About HacknRoll */}
          <div className="space-y-2">
            <p className="text-slate-300 leading-relaxed max-w-3xl text-left">
              HacknRoll Hackathon 2025 is an internal hackathon organized by
              <span className="font-semibold text-white">
                {" "}
                IET, MLSU Udaipur
              </span>
              , in collaboration with the
              <span className="font-semibold text-white">
                {" "}
                Department of Computer Science, Mohanlal Sukhadia University,
                Udaipur
              </span>
              . Exclusively for MCA, BCA, MSc(IT), and IET students, this event
              serves as a gateway to the
              <span className="font-semibold text-white">
                {" "}
                Smart India Hackathon (SIH) 2025
              </span>
              , one of the country’s largest innovation challenges.
            </p>

            <p className="text-slate-300 leading-relaxed max-w-3xl text-left">
              The hackathon follows a{" "}
              <span className="italic">hybrid format</span> — teams will develop
              prototypes online and later present their solutions offline before
              a panel of experts. More than just a coding challenge, HacknRoll
              is a platform for innovation, teamwork, and problem-solving, where
              students collaborate under mentorship to tackle real-world problem
              statements.
            </p>

            <p className="text-slate-300 leading-relaxed max-w-3xl text-left">
              Outstanding teams demonstrating creativity, execution, and impact
              will earn the opportunity to represent MLSU at SIH 2025, competing
              at the national stage.
            </p>
          </div>

          {/* Why Participate */}
          <div className="space-y-3">
            <SectionHeader title="Why Participate?" align="left" />
            <ul className="list-disc list-inside text-slate-300 space-y-2 max-w-3xl text-left">
              <li>Gain hands-on experience in building real prototypes.</li>
              <li>Work on real-world challenges with practical impact.</li>
              <li>Experience a startup-like environment in just a few days.</li>
              <li>
                Opportunity to represent MLSU at Smart India Hackathon 2025.
              </li>
              <li>
                Recognition, mentorship, and a chance to showcase your talent.
              </li>
            </ul>
          </div>

          {/* Event Highlights */}
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-white">
              🏆 Event Highlights
            </h3>
            <ul className="list-disc list-inside text-slate-300 space-y-2 max-w-3xl text-left">
              <li>
                Hybrid Format – Prototype development online + offline showcase.
              </li>
              <li>
                Inclusive Participation – Open for MCA, BCA, MSc(IT) & IET
                students.
              </li>
              <li>
                Diversity Focus – At least one female participant per team.
              </li>
              <li>Mentorship – Teams may be guided by faculty mentors.</li>
              <li>
                Interdisciplinary Innovation – Hardware and software tracks
                available.
              </li>
              <li>
                Evaluation – Based on novelty, feasibility, practicality, and
                sustainability.
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-white">
              📞 Contact Information
            </h3>

            <div className="grid md:grid-cols-2 gap-6 text-slate-300">
              <div>
                <h4 className="font-semibold text-white">
                  Faculty Coordinators
                </h4>
                <ul className="space-y-1">
                  <li>Deepti Shrimal (MCA) – 9460795407</li>
                  <li>Vimla Dangi (B.Tech CSE) – 9649353002</li>
                  <li>Mamta Rathore (BCA) – 8619393402</li>
                  <li>Chetan Mali (MSc IT) – 9351419147</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-white">
                  Student Coordinators
                </h4>
                <ul className="space-y-1">
                 <li>Piyush Agarwal (B.Tech CSE) – 7597240248</li>
                <li>Shubham Shrivastav (B.Tech CSE) – 8955992262</li>
                <li>Arvind Purohit (BCA) – 7738841613</li>
                <li>Aditya Prajapat (B.Tech CSE) – 7424993312</li>
                </ul>
              </div>
            </div>

            <p className="text-sm text-yellow-400 mt-3">
              ⚠️ Important: Please contact between{" "}
              <span className="font-semibold">2:00 PM – 5:00 PM</span>, Monday
              to Saturday only.
            </p>
          </div>

          <AboutUs />
        </section>

        {/* Section: FAQs */}
        <section className="space-y-6">
          <SectionHeader title="FAQs" align="left" />
          <FAQAccordion items={eventConfig.faqs} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

// Event Details Page
export function DetailsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 py-12 space-y-12">
        
        {/* Section: Event Overview */}
        <section>
          <SectionHeader title="HacknRoll Hackathon 2025" align="left" />
          <p className="text-slate-300 leading-relaxed max-w-3xl">
            (For MCA, BCA, MSc(IT) & IET Students)
          </p>
          <p className="text-slate-300 leading-relaxed max-w-3xl mt-2">
            HacknRoll Hackathon is being organized to select the best coding teams 
            for the <span className="font-semibold text-white">Smart India Hackathon (SIH) 2025</span>. 
            Teams will develop prototypes online and later present them offline before the jury.
          </p>
        </section>

        {/* Section: When & Where */}
        <section>
          <SectionHeader title="When & Where" align="left" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="text-slate-300 text-sm">Registration Deadline</div>
              <div className="text-white font-medium">02/09/2025</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="text-slate-300 text-sm">Hackathon Date</div>
              <div className="text-white font-medium">18/09/2025</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="text-slate-300 text-sm">Venue</div>
              <div className="text-white font-medium">
                BCA Auditorium, Block-A, MLSU Campus
              </div>
            </div>
          </div>
        </section>

        {/* Section: Participation Guidelines */}
        <section>
          <SectionHeader title="Participation Guidelines" align="left" />
          <ul className="list-disc list-inside text-slate-300 space-y-2">
            <li>Both hardware and software projects are allowed.</li>
            <li>Students from all branches and years are eligible to participate.</li>
            <li>Teams must be formed within the college only; inter-college teams are not permitted.</li>
            <li>Each team must pay a nominal registration fee of ₹250/-</li>
            <li>Every team should nominate a Team Leader as the main point of contact.</li>
            <li>Teams must be present during the offline showcase round to be considered for final evaluation.</li>
          </ul>
        </section>

        {/* Section: Team Formation Rules */}
        <section>
          <SectionHeader title="Team Formation Rules" align="left" />
          <ul className="list-disc list-inside text-slate-300 space-y-2">
            <li>Each team can consist of up to 6 members (including the Team Leader).</li>
            <li>Every team must include at least one female participant.</li>
            <li>Teams may have up to two faculty mentors (optional but recommended).</li>
            <li>Teams must be formed within the college only; inter-college teams are not allowed.</li>
            <li>For the Software Edition: all team members should be from coding/programming backgrounds.</li>
            <li>For the Hardware Edition: multi-disciplinary teams are encouraged (mechanical, electronics, design, programmers).</li>
            <li>Each participant can be part of only one team.</li>
            <li>No changes to team members after registration.</li>
            <li>Team leaders will be responsible for all official communication with organizers.</li>
          </ul>
        </section>

        {/* Section: Idea Submission */}
        <section>
          <SectionHeader title="Idea Submission Process" align="left" />
          <ul className="list-disc list-inside text-slate-300 space-y-2">
            <li>Each team can submit ideas against a maximum of two problem statements.</li>
            <li>Teams must develop a prototype of their selected idea.</li>
            <li>Prepare a 3–5 minute presentation to explain the project.</li>
            <li>A 2-minute project explanation video must also be submitted.</li>
            <li>Submit complete project repository one day before the offline showcase round.</li>
          </ul>
        </section>

        {/* Section: Rules & Regulations */}
        <section>
          <SectionHeader title="Rules & Regulations" align="left" />
          <ul className="list-disc list-inside text-slate-300 space-y-2">
            <li>This is a Hybrid Hackathon – prototypes developed remotely, final showcase offline.</li>
            <li>Participants may use any platform, tools, or technologies.</li>
            <li>Eligible students: 2nd to 6th semester only.</li>
            <li>Prizes & recognition based on creativity, execution, and impact.</li>
            <li>Students must bring their own laptops & equipment.</li>
          </ul>
        </section>

        {/* Section: Judgement Criteria */}
        <section>
          <SectionHeader title="Judgement Criteria" align="left" />
          <ul className="list-disc list-inside text-slate-300 space-y-2">
            <li><span className="font-semibold text-white">Novelty of Idea (25%)</span> – Originality and innovative thinking.</li>
            <li><span className="font-semibold text-white">Clarity & Detailing (15%)</span> – Well-defined solution with clear documentation.</li>
            <li><span className="font-semibold text-white">Feasibility (20%)</span> – Practical and achievable with available resources.</li>
            <li><span className="font-semibold text-white">Practicability (15%)</span> – Easy real-world implementation.</li>
            <li><span className="font-semibold text-white">Sustainability (15%)</span> – Long-term environmental and economic viability.</li>
          </ul>
        </section>

        {/* Section: Contacts */}
        <section>
          <SectionHeader title="Contact Information" align="left" />
          <div className="grid md:grid-cols-2 gap-6 text-slate-300">
            <div>
              <h4 className="font-semibold text-white">Faculty Coordinators</h4>
              <ul className="space-y-1">
                <li>Deepti Shrimal (MCA) – 9460795407</li>
                <li>Vimla Dangi (B.Tech CSE) – 9649353002</li>
                <li>Mamta Rathore (BCA) – 8619393402</li>
                <li>Chetan Mali (MSc IT) – 9351419147</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white">Student Coordinators</h4>
              <ul className="space-y-1">
                <li>Piyush Agarwal (B.Tech CSE) – 7597240248</li>
                <li>Shubham Shrivastav (B.Tech CSE) – 8955992262</li>
                <li>Arvind Purohit (BCA) – 7738841613</li>
                <li>Aditya Prajapat (B.Tech CSE) – 7424993312</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-yellow-400 mt-3">
            ⚠️ Contact only between <span className="font-semibold">2:00 PM – 5:00 PM</span>, Monday to Saturday.
          </p>
        </section>

        {/* Section: Registration & Note */}
        <section>
          <SectionHeader title="Important Note:" align="left" />
          <p className="text-slate-300 leading-relaxed">
            This is an Internal Hackathon conducted for the selection of teams for 
            Smart India Hackathon (SIH) 2025. All recommended teams from this round 
            will become eligible to participate in SIH 2025.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}


// Register / Submit Page
export function RegisterPage() {
  const active = eventConfig.register; // Only use registration config

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 py-12">
        <SectionHeader
          title="Register"
          subtitle="Fill out the form below to register."
        />

        <FormEmbed
          title="Registration Form"
          embedUrl={active.embedUrl}
          shareUrl={active.shareUrl}
        />
      </main>
      <Footer />
    </div>
  );
}

// 404 Page
export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="mx-auto max-w-4xl px-4 py-24 text-center">
        <h1 className="display-title text-6xl font-semibold text-white">404</h1>
        <p className="mt-2 text-slate-300">Page not found.</p>
        <Link to="/">
          <Button className="mt-6 rounded-full px-6 bg-cyan-500 text-slate-900 hover:bg-cyan-400">
            Back to Home
          </Button>
        </Link>
      </main>
      <Footer />
    </div>
  );
}
