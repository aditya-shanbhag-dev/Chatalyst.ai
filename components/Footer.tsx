import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="max-w-7xl bottom-0 mt-auto mx-auto h-auto pt-10 pb-15 w-full">
      <div className="w-full h-px mb-10 bg-gradient-to-r from-transparent via-shadow-color/70 to-transparent"></div>
      <div className="text-center text-sm text-muted-foreground">
        Made with ❤️ by{" "}
        <Link href={"https://www.linkedin.com/in/aditya-shanbhag-5065b0240/"}>
          <span className="underline">Aditya Shanbhag</span>
        </Link>
        &nbsp;&nbsp;&nbsp; © {new Date().getFullYear()} Chatalyst.ai. All rights
        reserved.
      </div>
    </div>
  );
}
