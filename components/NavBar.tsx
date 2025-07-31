import Link from "next/link";
import React from "react";
import Image from "next/image";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
  SignUpButton,
} from "@clerk/nextjs";

export default function NavBar() {
  return (
    <div className="h-15 top-0 w-full fixed backdrop-blur-md bg-background/70 flex items-center justify-between px-4 py-2 shadow-md rounded-md z-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between w-full">
        <div className="ml-3 flex items-center justify-center gap-2">
          <Link href="/">
            <Image src="/header-icon.png" alt="Logo" width={30} height={25} />
          </Link>
          <div className="text-lg font-semibold font-mono text-primary text-shadow-md">
            Chatalyst.ai
          </div>
        </div>
        <div className="mr-3 flex items-center justify-center gap-5">
          <ModeToggle />
          <SignedOut>
            <SignInButton />
            <SignUpButton>
              <Button variant="default" className="hover:-translate-y-0.5 cursor-pointer">
                Sign Up
              </Button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </div>
  );
}
