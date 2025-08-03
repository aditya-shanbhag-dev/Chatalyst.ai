import Link from "next/link";
import React from "react";
import Image from "next/image";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function NavBar() {
  return (
    <div className="h-15 top-0 w-full fixed backdrop-blur-md bg-background/70 flex items-center justify-between px-4 py-2 shadow-md rounded-md z-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between w-full">
        <div className="ml-3 flex items-center justify-center gap-2">
          <Image src="/header-icon.png" alt="Logo" width={30} height={25} />
          <Link href="/">
            <div className="text-xl font-semibold font-serif text-primary text-shadow-lg hover:text-foreground transition-transform duration-200">
              Chatalyst.ai
            </div>
          </Link>
          <div className="ml-7 flex items-center justify-center gap-4">
            <Link
              href="/sheetspeak"
              className="text-sm font-semibold text-primary hover:text-foreground text-shadow-md hover:-translate-y-0.5"
            >
              SheetSpeak
            </Link>
            <Link
              href="/docuchat"
              className="text-sm font-semibold text-primary hover:text-foreground text-shadow-md hover:-translate-y-0.5"
            >
              DocuChat
            </Link>
            <Link
              href="/whisperer"
              className="text-sm font-semibold text-primary hover:text-foreground text-shadow-md hover:-translate-y-0.5"
            >
              Whisperer
            </Link>
            <Link
              href="/websage"
              className="text-sm font-semibold text-primary hover:text-foreground text-shadow-md hover:-translate-y-0.5"
            >
              WebSage
            </Link>
          </div>
        </div>
        <div className="mr-3 flex items-center justify-center gap-5">
          <ModeToggle />
          <SignedOut>
            <Button
              variant="default"
              className="hover:-translate-y-0.5 cursor-pointer"
            >
              <Link href="/sign-in">Sign In</Link>
            </Button>
            <Button
              variant="outline"
              className="hover:-translate-y-0.5 cursor-pointer"
            >
              <Link href="/sign-up">Sign Up</Link>
            </Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </div>
  );
}
