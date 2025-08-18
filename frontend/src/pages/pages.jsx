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
import { CalendarDays, MapPin } from "lucide-react";
import { Badge } from "../components/ui/badge";
import WelcomeIETiensEffect from "../components/ui/welcome-effect";

// Judging Criteria Component
function JudgingCriteria() {
  const criteria = [
    {
      label: "Innovation & Creativity",
      description: "Originality and innovative thinking. How unique is your approach?",
      weight: "20%",
      color: "cyan",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 sm:h-8 sm:w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      label: "Technical Complexity",
      description: "The technical depth and difficulty. How challenging is the solution?",
      weight: "20%",
      color: "purple",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 sm:h-8 sm:w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      label: "Functionality & Stability",
      description: "How well the project works and maintains reliability under use.",
      weight: "20%",
      color: "pink",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 sm:h-8 sm:w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ),
    },
    {
      label: "User Interface & Experience",
      description: "How intuitive, visually appealing, and user-friendly the project is.",
      weight: "15%",
      color: "cyan",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 sm:h-8 sm:w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4 4h12v12H4V4zm1 1v10h10V5H5z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      label: "Presentation & Explanation",
      description: "Clarity and effectiveness in presenting the project to the judges.",
      weight: "15%",
      color: "purple",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 sm:h-8 sm:w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm2 1v8h12V6H4z" />
        </svg>
      ),
    },
    {
      label: "Real-world Impact",
      description: "The potential positive effect your project can bring to the community or industry.",
      weight: "10%",
      color: "pink",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 sm:h-8 sm:w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 2a6 6 0 100 12 6 6 0 000-12zM2 18a8 8 0 1116 0H2z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden w-full">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="absolute top-10 -left-10 w-24 h-24 sm:w-32 sm:h-32 bg-cyan-500/10 rounded-full blur-2xl -z-10"></div>
          <div className="absolute bottom-10 -right-10 w-24 h-24 sm:w-32 sm:h-32 bg-purple-500/10 rounded-full blur-2xl -z-10"></div>

          <div className="relative bg-white/5 border border-white/10 rounded-3xl shadow-2xl p-6 sm:p-8 md:p-12 backdrop-blur-xl">
            <div className="text-center mb-10 md:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500">
                  Judging Criteria
                </span>
              </h2>
              <p className="text-slate-300 max-w-2xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed">
                Your projects will be evaluated based on the following criteria —
                ensuring a fair and transparent evaluation process.
                <span className="block mt-3 text-cyan-300 animate-pulse text-sm sm:text-base">
                  Let your innovation shine! ✨
                </span>
              </p>
            </div>

            {/* Criteria Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
              {criteria.map((c) => (
                <div
                  key={c.label}
                  className={`bg-slate-800/50 border border-${c.color}-500/20 rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-${c.color}-500/40 hover:shadow-${c.color}-500/20`}
                >
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-${c.color}-500 to-${c.color}-700 flex items-center justify-center mb-6 mx-auto`}
                  >
                    {c.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3">{c.label}</h3>
                  <p className="text-slate-300 text-sm sm:text-base mb-4">{c.description}</p>
                  <div className="mt-4">
                    <span
                      className={`inline-block bg-${c.color}-900/40 text-${c.color}-300 text-xs sm:text-sm font-medium px-3 py-1 rounded-full`}
                    >
                      Weight: {c.weight}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Register Button */}
            <div className="text-center">
              <Link to="/register" className="inline-block">
                <button
                  className="rounded-full px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold 
                             bg-gradient-to-r from-cyan-500 to-purple-500 text-white 
                             hover:from-cyan-600 hover:to-purple-600 transition-all 
                             hover:scale-105 shadow-lg hover:shadow-cyan-500/20
                             flex items-center justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                  </svg>
                  Register Now
                </button>
              </Link>
              <p className="text-slate-400 mt-6 text-xs sm:text-sm">
                Evaluation based on these criteria by our expert judges panel
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function CardHighlights() {
  return (
    <div className="mt-6 grid gap-3">
      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <div className="text-slate-300 text-sm">Tracks</div>
        <div className="text-white font-medium">
          {eventConfig.tracks.join(" · ")}
        </div>
      </div>
      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <div className="text-slate-300 text-sm">Team Size</div>
        <div className="text-white font-medium">{eventConfig.teamSize}</div>
      </div>
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
        {/* Hero */}
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

                <p className="mt-3 text-2xl text-slate-300 max-w-2xl mb-5">
                  Build it. Break it. Make it epic.
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
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  <Badge
                    className="rounded-full bg-white/10 text-cyan-200 border-white/20 
               text-lg px-6 py-3 font-semibold tracking-wide"
                  >
                    8-hr sprint
                  </Badge>
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

        {/* FAQs Preview */}
        <Reveal>
          <section className="mx-auto max-w-6xl px-4 py-16">
            <SectionHeader
              title="FAQs"
              subtitle="Sabse common sawaal, ek jagah."
            />
            <FAQAccordion items={eventConfig.faqs} />
            <div className="mt-8 text-center">
              <Link to="/about#team">
                <Button
                  variant="outline"
                  className="rounded-full border-cyan-500 text-cyan-300 hover:bg-cyan-500/10">
                  Meet the team
                </Button>
              </Link>
            </div>
          </section>
        </Reveal>

        {/* Team highlight on Home */}
        <Reveal>
          <AboutUs />
        </Reveal>

        {/* CTA Band */}
        <Reveal>
          <section className="relative py-14">
            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/10 to-transparent" />
            <div className="mx-auto max-w-6xl px-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8 md:p-12 text-center">
                <h3 className="display-title text-2xl md:text-3xl text-white">
                  Build. Ship. Celebrate.
                </h3>
                <p className="text-slate-300 mt-2">
                  Join the hackathon that’s all about action and impact.
                </p>
                <Link to="/register">
                  <Button className="mt-5 rounded-full px-6 bg-cyan-500 text-slate-900 hover:bg-cyan-400">
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
      <main className="mx-auto max-w-6xl px-4 py-12">
        <SectionHeader
          title="What is HackanRoll?"
          subtitle="8 hours, live mentorship, real teamwork, and hands-on experience — HacknRoll by IET, MLSU."
          align="left"
        />
        <p className="text-slate-300 leading-relaxed max-w-3xl">
          HacknRoll is an 8-hour sprint-style hackathon designed to give developers hands-on experience, live mentorship, and guidance on effective teamwork. Participants will learn how to collaborate efficiently, generate innovative ideas, and build projects together, all within a single, action-packed day.
        </p>

        <AboutUs />

        <SectionHeader title="FAQs" align="left" />
        <FAQAccordion items={eventConfig.faqs} />
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
        <section>
          <SectionHeader title="When & Where" align="left" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="text-slate-300 text-sm">When</div>
              <div className="text-white font-medium">
                {new Date(eventConfig.startDateTimeIST).toLocaleString(
                  "en-IN",
                  { timeZone: "Asia/Kolkata", timeZoneName: "short" }
                )}
                <span className="text-slate-400"> → </span>
                {new Date(eventConfig.endDateTimeIST).toLocaleString("en-IN", {
                  timeZone: "Asia/Kolkata",
                  timeZoneName: "short",
                })}
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="text-slate-300 text-sm">Where</div>
              <div className="text-white font-medium">
                {eventConfig.venueDetails}
              </div>
            </div>
          </div>
        </section>

        <section>
  <SectionHeader title="Schedule" align="left" />
  <Timeline items={schedule} showDots={false} />
</section>



        <section>
          <SectionHeader title="Tracks & Prizes" align="left" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="text-slate-300 text-sm">Tracks</div>
              <div className="text-white font-medium">
                {eventConfig.tracks.join(", ")}
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="text-slate-300 text-sm">Prizes</div>
              <div className="text-white font-medium">
                1st/2nd/3rd + special mentions (TBC)
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="text-slate-300 text-sm">Result Declaration</div>
              <div className="text-white font-medium">
                To Be Announced (within 3 days)
              </div>
            </div>
          </div>
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