"use client";
import React from "react";
import { Marquee } from "@/components/ui/marquee";
import ColourfulText from "./ui/colourful-text";

export default function TechStackSection() {
  return (
    <div className="max-w-7xl w-full flex flex-col items-center gap-10 mx-auto">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-primary relative z-10 font-serif text-shadow-lg">
        The Stack Behind the <ColourfulText text="Magic" />
      </h1>
      <Marquee className="max-w-7xl w-full">
        <div className="flex gap-6 text-muted-foreground text-sm md:text-base">
          <span className="font-mono font-semibold">React</span>
          <span>•</span>
          <span className="font-mono font-semibold">Next.js</span>
          <span>•</span>
          <span className="font-mono font-semibold">TypeScript</span>
          <span>•</span>
          <span className="font-mono font-semibold">Tailwind CSS</span>
          <span>•</span>
          <span className="font-mono font-semibold">Postgres</span>
          <span>•</span>
          <span className="font-mono font-semibold">Prisma</span>
          <span>•</span>
          <span className="font-mono font-semibold">Neon</span>
          <span>•</span>
          <span className="font-mono font-semibold">Clerk</span>
          <span>•</span>
          <span className="font-mono font-semibold">Shadcn/ui</span>
          <span>•</span>
          <span className="font-mono font-semibold">LangChain</span>
          <span>•</span>
          <span className="font-mono font-semibold">Zustand</span>
          <span>•</span>
          <span className="font-mono font-semibold">Vercel</span>
          <span>•</span>
        </div>
      </Marquee>
    </div>
  );
}
