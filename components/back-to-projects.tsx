"use client";

import { ArrowUp } from "lucide-react";

export default function BackToProjects() {
  return (
    <div className="mt-10 flex justify-end">
      <a
        href="#projects"
        className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/8 px-4 py-2 text-sm font-semibold text-white/80 transition hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/12 hover:text-white"
      >
        <ArrowUp className="h-4 w-4" />
        Back to projects
      </a>
    </div>
  );
}
