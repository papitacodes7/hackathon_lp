import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Avatar, AvatarFallback } from "../components/ui/avatar";
import { SectionHeader } from "./common";
import { team } from "../mocks/mock";
import { Button } from "../components/ui/button";
import { Github, Linkedin } from "lucide-react";

// AboutUs component — shows the core team who built the site/event
export default function AboutUs() {
  const empty = !team || team.length === 0;
  return (
    <section id="team" className="mx-auto max-w-6xl px-4 py-12">
      <SectionHeader
        title="About Us"
        subtitle="Bina caffeine ke bhi kaam karne wale — team se milo!"
        align="left"
      />

      {empty ? (
        <Card className="border-white/10 bg-white/[0.05]">
          <CardContent className="p-6 text-slate-300 text-sm">
            Team list coming soon. Add members in <span className="text-cyan-300">src/mocks/mock.js</span> → <span className="text-cyan-300">team</span> array.
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {team.map((m, idx) => (
            <Card
              key={idx}
              className="relative overflow-hidden border-white/10 bg-white/[0.06] hover:bg-white/[0.1] transition-colors group"
            >
              <div className="pointer-events-none absolute -inset-0.5 rounded-xl bg-gradient-to-br from-cyan-500/10 to-transparent" />
              <CardHeader className="flex flex-col items-center text-center space-y-3">
                <Avatar className="h-14 w-14 ring-2 ring-cyan-400/40 group-hover:ring-cyan-300/60 transition-transform">
                  {m.avatar ? (
                    <img src={m.avatar} alt={`${m.name} avatar`} className="h-full w-full object-cover" />
                  ) : (
                    <AvatarFallback className="bg-cyan-500/10 text-cyan-300">
                      {m.name
                        .split(" ")
                        .map((p) => p[0])
                        .join("")
                        .slice(0, 2)
                        .toUpperCase()}
                    </AvatarFallback>
                  )}
                </Avatar>
                <CardTitle className="text-white text-base">{m.name}</CardTitle>
                <p className="text-slate-400 text-sm">{m.role}</p>
              </CardHeader>
              <CardContent className="flex items-center justify-center gap-2 pb-5">
                <Button asChild variant="outline" className="rounded-full border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/10">
                  <a href={m.linkedin || "#"} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <Linkedin size={16} />
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-full border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/10">
                  <a href={m.github || "#"} target="_blank" rel="noreferrer" aria-label="GitHub">
                    <Github size={16} />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </section>
  );
}