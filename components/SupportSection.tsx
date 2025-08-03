import React from "react";
import FAQSection from "./FAQSection";
import { ContactSection } from "./ContactSection";

export default function SupportSection() {
  return (
    <div id="SupportSection" className="flex items-center justify-center max-w-7xl mx-auto py-20 gap-20 p-10">
      <FAQSection />
      <ContactSection />
    </div>
  );
}
