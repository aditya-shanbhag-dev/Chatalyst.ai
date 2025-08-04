import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  return (
    <div>
      <Accordion
        type="single"
        collapsible
        className="w-full min-w-[40rem] max-w-[52rem]"
        defaultValue="faq-1"
      >
        <AccordionItem value="faq-1">
          <AccordionTrigger>
            What is this platform and who is it for?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              This platform turns static data into dynamic conversations.
              Whether you&apos;re a business analyst, researcher, developer, or
              growth hacker, you can chat with spreadsheets, documents, APIs,
              and even live web pages.
            </p>
            <p>
              No technical expertise is required — just upload, ask, and act.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="faq-2">
          <AccordionTrigger>How secure is my data?</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              Your data is encrypted in transit and at rest. Uploaded files are
              temporary and never used to train models.
            </p>
            <ul className="list-disc list-inside">
              <li>End-to-end encryption</li>
              <li>Automatic file deletion after sessions</li>
              <li>No third-party data sharing</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="faq-3">
          <AccordionTrigger>
            Can I connect databases or just upload files?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              Currently, you can upload CSV, PDF, and DOCX files. Native
              Postgres and MySQL integrations are in development.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="faq-4">
          <AccordionTrigger>How does &quot;Talk to Your CSV&quot; work?</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>Upload a CSV file and our AI:</p>
            <ul className="list-disc list-inside">
              <li>Infers schema and relationships</li>
              <li>Generates an ERD (Entity Relationship Diagram)</li>
              <li>
                Lets you ask natural language questions that convert to SQL and
                return live results
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="faq-5">
          <AccordionTrigger>
            What types of documents can I upload?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>Supported formats include:</p>
            <ul className="list-disc list-inside">
              <li>PDFs</li>
              <li>Microsoft Word (DOCX)</li>
            </ul>
            <p>
              Our system turns them into searchable, chat-ready knowledge bases
              using AI-powered embeddings.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="faq-6">
          <AccordionTrigger>Does it support private APIs?</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>Yes! Paste in your OpenAPI spec or endpoint URL and:</p>
            <ul className="list-disc list-inside">
              <li>We load your endpoints and generate documentation</li>
              <li>You can chat with your API to understand and test it</li>
              <li>Get auto-generated cURL and request payloads</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="faq-7">
          <AccordionTrigger>
            What kind of websites can I use with WebSage?
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>WebSage works with:</p>
            <ul className="list-disc list-inside">
              <li>News articles and blogs</li>
              <li>Competitor landing pages</li>
              <li>Docs — including those rendered with JavaScript</li>
            </ul>
            <p>
              It scrapes the content, summarizes it, and answers your questions
              in real time.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="faq-8">
          <AccordionTrigger>What AI models power this?</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              We use best-in-class language models (like GPT-4) and LangChain
              for Retrieval-Augmented Generation (RAG).
            </p>
            <ul className="list-disc list-inside">
              <li>Vector search ensures relevant context</li>
              <li>Live answers come from your data — not hallucinations</li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="faq-9">
          <AccordionTrigger>Is there a free plan?</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              Yes. The free plan offers limited uploads and queries to get you
              started. Upgrade for more storage, speed, and features.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="faq-10">
          <AccordionTrigger>Can I use this with my team?</AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>
              Team plans with shared workspaces, role-based access, and
              collaboration tools are launching soon. Join the waitlist for
              early access.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
