"use client";
import React from "react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import Link from "next/link";
export default function HeroSection() {
  return (
    <div className="relative max-w-7xl mx-auto bg-background w-full pt-20">
      <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] dark:bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)] opacity-50 blur-[80px]"></div>
      <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="px-4 py-10 md:py-20">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold md:text-4xl lg:text-7xl text-foreground font-sans">
          {"Talk to Your Data Like Never Before"
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-5 inline-block"
              >
                {word}
              </motion.span>
            ))}
        </h1>
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="relative z-10 mx-auto max-w-2xl py-4 text-center text-lg font-normal text-secondary-foreground font-serif"
        >
          Upload a CSV, PDF, API, or webpage — and just ask questions in plain
          English.
          <br />
          No SQL. No scraping. No technical setup.
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 1,
          }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Button
            variant="default"
            className="hover:-translate-y-1 cursor-pointer"
          >
            Explore Now
          </Button>
          <Button
            variant="outline"
            className="hover:-translate-y-1 cursor-pointer"
          >
            <Link href="#SupportSection">Contact Support</Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
