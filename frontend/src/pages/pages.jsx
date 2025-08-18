import React, { useState } from "react";
import { Link } from "react-router-dom";
import { eventConfig } from "../config/event";
import { schedule, stats } from "../mocks/mock";
import { Navbar, Footer, SectionHeader, Countdown, FAQAccordion, FormEmbed, StatCard, Timeline, PromiseList, Reveal } from "../components/common";
import AboutUs from "../components/aboutus";
import { Button } from "../components/ui/button";
import { CalendarDays, MapPin } from "lucide-react";
import { Badge } from "../components/ui/badge";
import WelcomeIETiensEffect from "../components/ui/welcome-effect";

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
          }}
        >
          <div className="hero-bg-overlay" aria-hidden />
          <div className="hero-animated" aria-hidden>
            <span className="blob blob1" />
            <span className="blob blob2" />
            <span className="blob blob3" />
          </div>
          {/* extra aesthetic tints & vignette */}
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="absolute inset-0" style={{background:"radial-gradient(650px circle at 75% 15%, rgba(34,211,238,0.08), transparent 60%), radial-gradient(700px circle at 20% 90%, rgba(34,211,238,0.06), transparent 60%)"}} />
            <div className="absolute inset-0" style={{background:"radial-gradient(100% 60% at 50% 50%, transparent 40%, rgba(2,6,23,0.65) 75%, rgba(2,6,23,0.95) 100%)"}} />
          </div>

          <div className="relative mx-auto max-w-6xl px-4 py-14 md:py-22">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <Reveal>
                <h1 className="display-title text-4xl md:text-6xl font-semibold tracking-tight text-white">{eventConfig.name}</h1>
                <p className="mt-3 text-lg text-slate-300 max-w-2xl">Code karo, vibe banao, impact dikhao. College ka sabse zyada dhamakedaar build-a-thon.</p>

                {/* Welcome IET'iens instead of hello */}
                <WelcomeIETiensEffect className="mt-2" speed={1.1} />

                {/* Venue/Time bar */}
                <div className="mt-4 flex flex-wrap gap-2 text-sm">
                  <div className="glassbar flex items-center gap-2">
                    <CalendarDays size={16} className="text-cyan-300" />
                    {new Date(eventConfig.startDateTimeIST).toLocaleString("en-IN", { timeZone: "Asia/Kolkata", timeZoneName: "short" })}
                  </div>
                  <div className="glassbar flex items-center gap-2">
                    <MapPin size={16} className="text-cyan-300" />
                    {eventConfig.venueDetails}
                  </div>
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  <Badge className="rounded-full bg-white/10 text-cyan-200 border-white/20">24-hr sprint</Badge>
                  <Badge className="rounded-full bg-white/10 text-cyan-200 border-white/20">No overnight stay</Badge>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link to="/register">
                    <Button className="rounded-full px-5 bg-cyan-500 text-slate-900 hover:bg-cyan-400">Register</Button>
                  </Link>
                  <Link to="/register">
                    <Button variant="outline" className="rounded-full px-5 border-cyan-500 text-cyan-300 hover:bg-cyan-500/10">Submit Project</Button>
                  </Link>
                </div>

                <PromiseList />

                <div className="mt-10 max-w-lg">
                  <Countdown
                    targetIso={eventConfig.startDateTimeIST}
                    registrationDeadlineIso={eventConfig.registrationDeadlineIST}
                    endIso={eventConfig.endDateTimeIST}
                  />
                </div>
              </Reveal>

              <Reveal delay={120}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
                  {stats.map((s, idx) => (
                    <StatCard key={idx} icon={s.icon} label={s.label} value={s.value} />
                  ))}
                </div>
                <CardHighlights />
              </Reveal>
            </div>
          </div>
        </section>

        {/* FAQs Preview */}
        <Reveal>
          <section className="mx-auto max-w-6xl px-4 py-16">
            <SectionHeader title="FAQs" subtitle="Sabse common sawaal, ek jagah." />
            <FAQAccordion items={eventConfig.faqs} />
            <div className="mt-8 text-center">
              <Link to="/about#team">
                <Button variant="outline" className="rounded-full border-cyan-500 text-cyan-300 hover:bg-cyan-500/10">Meet the team</Button>
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
                <h3 className="display-title text-2xl md:text-3xl text-white">Build. Ship. Celebrate.</h3>
                <p className="text-slate-300 mt-2">Join the hackathon that’s all about action and impact.</p>
                <Link to="/register">
                  <Button className="mt-5 rounded-full px-6 bg-cyan-500 text-slate-900 hover:bg-cyan-400">Register now</Button>
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

function CardHighlights() {
  return (
    <div className="mt-6 grid gap-3">
      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <div className="text-slate-300 text-sm">Tracks</div>
        <div className="text-white font-medium">{eventConfig.tracks.join(" · ")}</div>
      </div>
      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <div className="text-slate-300 text-sm">Team Size</div>
        <div className="text-white font-medium">{eventConfig.teamSize}</div>
      </div>
      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <div className="text-slate-300 text-sm">Prize Pool</div>
        <div className="text-white font-medium">{eventConfig.prizePool}</div>
      </div>
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
          subtitle="Fast-paced hacking, real impact, and big vibes — by IET, MLSU."
          align="left"
        />
        <p className="text-slate-300 leading-relaxed max-w-3xl">
          HackanRoll is a 24-hour sprint-style hackathon. No overnight stay at venue — teams continue offsite and judges review submissions next day (no live judging).
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
                {new Date(eventConfig.startDateTimeIST).toLocaleString("en-IN", { timeZone: "Asia/Kolkata", timeZoneName: "short" })}
                <span className="text-slate-400"> → </span>
                {new Date(eventConfig.endDateTimeIST).toLocaleString("en-IN", { timeZone: "Asia/Kolkata", timeZoneName: "short" })}
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="text-slate-300 text-sm">Where</div>
              <div className="text-white font-medium">{eventConfig.venueDetails}</div>
            </div>
          </div>
        </section>

        <section>
          <SectionHeader title="Schedule" align="left" />
          <Timeline items={schedule} />
        </section>

        <section>
          <SectionHeader title="Tracks & Prizes" align="left" />
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="text-slate-300 text-sm">Tracks</div>
              <div className="text-white font-medium">{eventConfig.tracks.join(", ")}</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="text-slate-300 text-sm">Prizes</div>
              <div className="text-white font-medium">1st/2nd/3rd + special mentions (TBC)</div>
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
  const [mode, setMode] = useState("register");
  const active = mode === "register" ? eventConfig.register : eventConfig.submit;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 py-12">
        <SectionHeader title="Register & Submit" subtitle="Use the toggle to switch between forms." />

        <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 p-1">
          <Button
            onClick={() => setMode("register")}
            className={`rounded-full px-5 ${mode === "register" ? "bg-cyan-500 text-slate-900" : "bg-transparent hover:bg-white/10 text-slate-200"}`}
          >
            Register
          </Button>
          <Button
            onClick={() => setMode("submit")}
            className={`rounded-full px-5 ml-2 ${mode === "submit" ? "bg-cyan-500 text-slate-900" : "bg-transparent hover:bg-white/10 text-slate-200"}`}
          >
            Submit Project
          </Button>
        </div>

        <FormEmbed
          title={mode === "register" ? "Registration Form" : "Project Submission Form"}
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
          <Button className="mt-6 rounded-full px-6 bg-cyan-500 text-slate-900 hover:bg-cyan-400">Back to Home</Button>
        </Link>
      </main>
      <Footer />
    </div>
  );
}