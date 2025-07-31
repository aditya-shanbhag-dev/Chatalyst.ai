"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

export function ZeroSection() {

  const words = [
    {
      text: "Ready",
      className: "text-foreground text-shadow-lg",
    },
    {
      text: "to",
      className: "text-foreground text-shadow-lg",
    },
    {
      text: "talk",
      className: "text-foreground text-shadow-lg",
    },
    {
      text: "to",
      className: "text-foreground text-shadow-lg",
    },
    {
      text: "your",
      className: "text-foreground text-shadow-lg",
    },
    {
      text: "data?",
      className: "text-primary text-shadow-lg",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-[40rem] max-w-7xl mx-auto px-4 w-full py-10">
      <p className="text-ring text-xs sm:text-base  ">
        Upload your first file in under 60 seconds.
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] hover:outline-none hover:ring-2 hover:ring-accent hover:ring-offset-2 hover:ring-offset-accent hover:-translate-y-0.5">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] bg-[conic-gradient(from_90deg_at_50%_50%,#5B3C72_0%,#28356E_50%,#5B3C72_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-background px-3 py-1 text-sm font-medium text-primary backdrop-blur-3xl">
            Get Started for Free
          </span>
        </button>
      </div>
    </div>
  );
}
