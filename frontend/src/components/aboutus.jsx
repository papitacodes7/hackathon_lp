import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Avatar, AvatarFallback } from "../components/ui/avatar";
import { SectionHeader } from "./common";
import { team, faculty } from "../mocks/mock"; 
import { Button } from "../components/ui/button";
import { Github, Linkedin, Phone } from "lucide-react";

// Reusable grid for coordinators
const CoordinatorGrid = ({ list }) => {
  const empty = !list || list.length === 0;
  if (empty) {
    return (
      <Card className="border-white/10 bg-white/[0.05]">
        <CardContent className="p-6 text-slate-300 text-sm text-center">
          Coming soon. Add members in <span className="text-cyan-300">src/mocks/mock.js</span>.
        </CardContent>
      </Card>
    );
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
      {list.map((m, idx) => (
        <Card
          key={idx}
          className="relative flex flex-col justify-between overflow-hidden border-white/10 bg-white/[0.06] hover:bg-white/[0.1] transition-colors group rounded-2xl"
        >
          {/* Glow effect */}
          <div className="pointer-events-none absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-transparent" />
          
          <CardHeader className="flex flex-col items-center text-center space-y-3">
            <Avatar className="h-16 w-16 ring-2 ring-cyan-400/40 group-hover:ring-cyan-300/60 transition-transform">
              {m.avatar ? (
                <img src={m.avatar} alt={`${m.name} avatar`} className="h-full w-full object-cover rounded-full" />
              ) : (
                <AvatarFallback className="bg-cyan-500/10 text-cyan-300 text-lg font-semibold">
                  {m.name
                    .split(" ")
                    .map((p) => p[0])
                    .join("")
                    .slice(0, 2)
                    .toUpperCase()}
                </AvatarFallback>
              )}
            </Avatar>
            <CardTitle className="text-white text-lg font-medium">{m.name}</CardTitle>
            <p className="text-slate-400 text-sm">{m.role}</p>
          </CardHeader>

          {/* Buttons */}
          <CardContent className="flex items-center justify-center gap-3 pb-6">
            {m.linkedin && (
              <Button asChild size="icon" variant="outline" className="rounded-full border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/10">
                <a href={m.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <Linkedin size={18} />
                </a>
              </Button>
            )}
            {m.github && (
              <Button asChild size="icon" variant="outline" className="rounded-full border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/10">
                <a href={m.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                  <Github size={18} />
                </a>
              </Button>
            )}
            {m.phone && (
              <Button asChild size="icon" variant="outline" className="rounded-full border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/10">
                <a href={`tel:${m.phone}`} aria-label="Call">
                  <Phone size={18} />
                </a>
              </Button>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

// AboutUs component — main section + subsections
export default function AboutUs() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12 space-y-12">
      {/* Main Heading */}
      {/* <div className="space-y-2">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-300 drop-shadow-lg">
          About Us
        </h2>
        <p className="text-lg text-slate-400 max-w-3xl">
          Meet the amazing people who make this event possible ✨
        </p>
      </div> */}

      {/* Faculty Coordinators */}
      <div className="space-y-1">
        <SectionHeader
          title="Faculty Coordinators"
          subtitle="Guiding lights behind the hackathon — meet our faculty mentors."
          align="left"
        />
        <CoordinatorGrid list={faculty} />
      </div>

      {/* Student Coordinators */}
      <div className="space-y-1">
        <SectionHeader
          title="Student Coordinators"
          subtitle="Bina caffeine ke bhi kaam karne wale — team se milo!"
          align="left"
        />
        <CoordinatorGrid list={team} />
      </div>
    </section>
  );
}

