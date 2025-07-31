"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="relative w-full max-w-7xl bg-background h-screen mx-auto flex items-center justify-center gap-10">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      <div className="flex flex-col gap-5 items-center justify-center">
        <h2 className="text-4xl font-bold text-shadow-lg text-center font-mono">
          The page you are looking
          <br /> for does not exist!
        </h2>

        <Button
          asChild
          className="shadow-lg hover:-translate-y-1 transition cursor-pointer"
        >
          <Link href="/">Return to Home</Link>
        </Button>
      </div>
      <Image src="/not-found.png" alt="Not Found" width={525} height={525} />
    </div>
  );
}
