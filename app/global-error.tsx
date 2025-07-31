"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Error boundaries must be Client Components

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    // global-error must include html and body tags
    <html>
      <body>
        <div className="relative w-full max-w-7xl bg-background h-screen mx-auto flex items-center justify-center gap-15">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
          <div className="flex flex-col gap-5 items-center justify-center">
            <h2 className="text-4xl font-bold text-shadow-lg font-mono">
              Something went wrong!
            </h2>
            <Button variant="default" className="shadow-lg hover:-translate-y-1 cursor-pointer" onClick={() => reset()}>
              Try again
            </Button>
          </div>
          <Image src="/error.png" alt="Error" width={550} height={550} />
        </div>
      </body>
    </html>
  );
}
