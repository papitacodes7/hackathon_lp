import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { Separator } from "../components/ui/separator";
import { eventConfig } from "../config/event";
import { Trophy, Users, Timer, Menu, X, CheckCircle2 } from "lucide-react";

// Small icon map for StatCard (lucide-react only)
const IconMap = { Trophy, Users, Timer };

// Navbar (sticky, responsive)
export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const navLinkCls = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive ? "text-cyan-300" : "text-slate-300 hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/5 border-b border-white/10 bg-slate-900/70">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            {/* Removed the cyan dot behind the brand name as requested */}
            <span className="text-white font-semibold tracking-wide">{eventConfig.name}</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            <NavLink to="/" className={navLinkCls}>Home</NavLink>
            <NavLink to="/about" className={navLinkCls}>About</NavLink>
            <NavLink to="/details" className={navLinkCls}>Event Details</NavLink>
            <NavLink to="/register" className={navLinkCls}>Register</NavLink>
            <Link to="/register">
              <Button className="ml-2 rounded-full bg-cyan-500 text-slate-900 hover:bg-cyan-400">Register now</Button>
            </Link>
          </nav>

          <button aria-label="Toggle menu" className="lg:hidden text-white" onClick={() => setOpen((v) => !v)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-slate-900/95">
          <div className="mx-auto max-w-6xl px-4 py-3 flex flex-col gap-1">
            <NavLink to="/" className={navLinkCls} onClick={() => setOpen(false)}>Home</NavLink>
            <NavLink to="/about" className={navLinkCls} onClick={() => setOpen(false)}>About</NavLink>
            <NavLink to="/details" className={navLinkCls} onClick={() => setOpen(false)}>Event Details</NavLink>
            <NavLink to="/register" className={navLinkCls} onClick={() => setOpen(false)}>Register</NavLink>
          </div>
        </div>
      )}
    </header>
  );
}

// Footer
export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">© 2025 {eventConfig.name} · IET, MLSU · Udaipur</p>
        <div className="flex items-center gap-3 text-sm">
          <a href={eventConfig.socials.instagram || "#"} className="hover:text-white">Instagram</a>
          <Separator orientation="vertical" className="h-4 bg-white/20" />
          <a href={eventConfig.socials.linkedin || "#"} className="hover:text-white">LinkedIn</a>
          <Separator orientation="vertical" className="h-4 bg-white/20" />
          <a href={`mailto:${eventConfig.socials.email}`} className="hover:text-white">Email</a>
        </div>
      </div>
    </footer>
  );
}

// Section Header
export function SectionHeader({ title, subtitle, align = "center" }) {
  return (
    <div className={`mb-8 ${align === "left" ? "text-left" : "text-center"}`}>
      <h2 className="display-title text-2xl md:text-3xl font-semibold text-white tracking-tight">{title}</h2>
      {subtitle && <p className="mt-2 text-slate-300 max-w-3xl mx-auto">{subtitle}</p>}
    </div>
  );
}

// Scroll-reveal util (Apple-like smoothness without heavy animations)
export function Reveal({ as: Comp = "div", children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setShow(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setShow(true);
          io.disconnect();
        }
      });
    }, { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Comp ref={ref} className={`${className} ${show ? 'reveal-show' : 'reveal-hidden'}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Comp>
  );
}

// Countdown — calculates time differences based on IST ISO strings
export function Countdown({ targetIso, registrationDeadlineIso, endIso }) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const target = useMemo(() => new Date(targetIso), [targetIso]);
  const regDeadline = useMemo(() => new Date(registrationDeadlineIso), [registrationDeadlineIso]);
  const end = useMemo(() => new Date(endIso), [endIso]);

  const diff = (dt) => Math.max(0, dt - now.getTime());
  const fmt = (ms) => {
    const total = Math.floor(ms / 1000);
    const days = Math.floor(total / 86400);
    const hours = Math.floor((total % 86400) / 3600);
    const mins = Math.floor((total % 3600) / 60);
    const secs = total % 60;
    return { days, hours, mins, secs };
  };

  let headline = "";
  let time = { days: 0, hours: 0, mins: 0, secs: 0 };

  if (now < regDeadline) {
    headline = "Registration closes in";
    time = fmt(diff(regDeadline));
  } else if (now < target) {
    headline = "Starts in";
    time = fmt(diff(target));
  } else if (now < end) {
    headline = "Live now · Ends in";
    time = fmt(diff(end));
  } else {
    headline = "HackanRoll has ended — highlights soon!";
  }

  return (
<div className="w-full flex flex-col items-center">
  <p className="text-cyan-300 text-sm uppercase tracking-wider mb-3 text-center">
    {headline}
  </p>
  {now < end && (
    <div className="w-full flex justify-center">
  <div className="grid grid-cols-4 gap-2 md:gap-4 max-w-4xl w-full px-4">
        {[
          { label: "Days", value: time.days },
          { label: "Hours", value: time.hours },
          { label: "Minutes", value: time.mins },
          { label: "Seconds", value: time.secs },
        ].map((t) => (
          <Card key={t.label} className="bg-white/5 border border-white/10">
            <CardContent className="p-3 md:p-4 text-center">
              <div className="text-xl md:text-2xl font-semibold text-white tabular-nums">
                {String(t.value).padStart(2, "0")}
              </div>
              <div className="text-[10px] xs:text-xs uppercase tracking-wider text-slate-300 mt-1">
                {t.label}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )}
</div>
  );
}

// StatCard — small glass card with icon
export function StatCard({ icon = "Trophy", label, value }) {
  const Icon = IconMap[icon] || Trophy;
  return (
   <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
    <CardTitle className="text-sm font-medium text-slate-300">
      {label}
    </CardTitle>
    <Icon size={18} className="text-cyan-300" />
  </CardHeader>
  <CardContent>
    <div className="text-lg font-semibold text-white leading-snug">
      {value}
    </div>
  </CardContent>
</Card>
  );
}

// Timeline (simple vertical)
export function Timeline({ items, showDots = true }) {
  return (
    <div className="relative pl-6">
      {/* vertical line */}
      <div className="absolute left-2 top-0 bottom-0 w-px bg-white/10" />
      <ul className="space-y-8">
        {items.map((it, idx) => (
          <li key={idx} className="relative">
            {showDots && (
              <span className="absolute -left-[7px] mt-1 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_8px_1px_rgba(34,211,238,0.6)]" />
            )}

            {/* Time */}
            <div className="text-xs text-slate-400 tracking-wide mb-1">
              {it.time}
            </div>

            {/* Title */}
            <div className="text-lg font-semibold text-white leading-snug">
              {it.title}
            </div>

            {/* Description */}
            <div className="text-sm text-slate-300 mt-1 leading-relaxed">
              {it.description}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}


// FAQ using shadcn Accordion
export function FAQAccordion({ items }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((f, idx) => (
        <AccordionItem key={idx} value={`item-${idx}`} className="border-white/10">
          <AccordionTrigger className="text-left text-white hover:text-cyan-300">{f.q}</AccordionTrigger>
          <AccordionContent className="text-slate-300">{f.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

// Promise list — inspired by AWAL's style
export function JudgingCriteria() {
  const criteria = [
    "Innovation and Creativity (20%)",
    "Technical Implementation (20%)",
    "Functionality & Stability (20%)",
    "User Interface & Experience (15%)",
    "Presentation and Communication (15%)",
    "Real-World Impact (10%) [Extra]"
  ];

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
      {criteria.map((c) => (
        <li key={c} className="flex items-center gap-2 text-slate-300">
          <CheckCircle2 size={18} className="text-purple-400" />
          <span className="text-base font-medium">{c}</span>
        </li>
      ))}
    </ul>
  );
}


// Google Form embed with graceful fallback
export function FormEmbed({ title, embedUrl, shareUrl }) {
  const [failed, setFailed] = useState(false);
  const frameRef = useRef(null);

  useEffect(() => {
    setFailed(false); // reset on url change
  }, [embedUrl]);

  return (
    <section className="w-full">
      <SectionHeader title={title} subtitle="Fill out the form below. If it doesn't load, use the button." />
      {!failed ? (
        <div className="rounded-xl overflow-hidden border border-white/10 bg-white/5">
          <iframe
            ref={frameRef}
            title={title}
            src={embedUrl}
            className="w-full min-h-[1200px] md:min-h-[1000px]"
            onError={() => setFailed(true)}
          />
        </div>
      ) : (
        <Card className="bg-amber-500/10 border-amber-500/30">
          <CardContent className="p-6">
            <p className="text-amber-300">We couldn't load the embedded form.</p>
            <Button asChild className="mt-4 bg-cyan-500 text-slate-900 hover:bg-cyan-400 rounded-full">
              <a href={shareUrl} target="_blank" rel="noreferrer">Open Form</a>
            </Button>
          </CardContent>
        </Card>
      )}
    </section>
  );
}