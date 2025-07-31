"use client";
import React from "react";

import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { TextGenerateEffect } from "./ui/text-generate-effect";

export default function UseCaseSection() {
  return (
    <div className="py-20 max-w-7xl w-full flex flex-col gap-10 mx-auto">
      <TextGenerateEffect
        words="Who's This For? Everyone Who Touches Data"
        className="px-8 text-center"
      />
      <div className="flex flex-col lg:flex-row items-center justify-center gap-4 px-8">
        <Card
          title="Ask your sales CSV anything without learning SQL"
          icon={<AceternityIcon />}
        >
          <CanvasRevealEffect
            animationSpeed={5}
            containerClassName="bg-primary"
          />
        </Card>
        <Card title="Chat with papers, reports, PDFs" icon={<AceternityIcon />}>
          <CanvasRevealEffect
            animationSpeed={5}
            containerClassName="bg-primary"
          />
        </Card>
        <Card
          title=" Rapid API testing and documentation"
          icon={<AceternityIcon />}
        >
          <CanvasRevealEffect
            animationSpeed={5}
            containerClassName="bg-primary"
          />
        </Card>
        <Card title="Quickly explore messy datasets" icon={<AceternityIcon />}>
          <CanvasRevealEffect
            animationSpeed={5}
            containerClassName="bg-primary"
          />
        </Card>
      </div>
    </div>
  );
}

const Card = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-foreground/[0.2] group/canvas-card flex items-center justify-center max-w-sm w-full mx-auto p-4 relative h-[20rem]"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-primary" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-primary" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-primary" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-primary" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-primary group-hover/canvas-card:text-white "
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
        style={{ mixBlendMode: "darken" }}
      />
    </svg>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
