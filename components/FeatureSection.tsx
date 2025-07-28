import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export function FeatureSection() {
  return (
    <BentoGrid className="max-w-7xl w-full p-5 mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const items = [
  {
    title: "SheetSpeak - Talk to Your CSVs",
    description:
      "Upload your spreadsheets, and our AI will infer schema, generate ERDs, and answer your questions using live SQL queries on the data.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-card-foreground" />,
    className: "col-span-2",
  },
  {
    title: "DocuChat - Talk to Your PDFs & Docs",
    description:
      "Upload PDF or DOCX files. We'll turn them into searchable knowledge bases with RAG-powered contextual answers.",
    header: <Skeleton />,
    icon: <IconFileBroken className="h-4 w-4 text-card-foreground" />,
    className: "col-span-2",
  },
  {
    title: "API Whisperer - Talk to Your APIs",
    description:
      "Paste in an OpenAPI file or endpoint URL. Our tool turns it into an intelligent Postman-like assistant. No more manual testing.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-card-foreground" />,
    className: "col-span-2",
  },
  {
    title: "WebSage - Talk to the Web",
    description:
      "Input any URL and instantly chat with its content. Ideal for news articles, competitor sites, docs, and dynamic pages.",
    header: <Skeleton />,
    icon: <IconTableColumn className="h-4 w-4 text-card-foreground" />,
    className: "col-span-2",
  }
];
