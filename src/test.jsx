"use client";
import React from "react";
import { StickyScroll } from "./component/ui/StickyScroll";

const content = [
  {
    title: "VigilX - Lightweight EDR",
    description:
      "A Python-based lightweight Endpoint Detection and Response tool that detects ransomware, malware, and brute-force SSH attacks on Linux. It features a minimal React dashboard for monitoring.",
    content: (
      <a
        href="/projects/vigilx"
        target="_blank"
        rel="noopener noreferrer"
        className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white rounded-lg transform transition-transform duration-300 hover:scale-105"
      >
        VigilX Project
      </a>
    ),
  },
  {
    title: "Steganography Project",
    description:
      "Developed a steganography tool for embedding and extracting hidden messages in images. Enhanced the tool’s efficiency and optimized its performance for larger image files.",
    content: (
      <a
        href="/projects/smilebooth"
        target="_blank"
        rel="noopener noreferrer"
        className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--indigo-500))] flex items-center justify-center text-white rounded-lg transform transition-transform duration-300 hover:scale-105"
      >
        Steganography Project
      </a>
    ),
  },
  {
    title: "Vortex",
    description:
    "Designed Vortex Fashion’s mobile interface, prioritizing user experience and visual appeal.Independently iterated designs based on user feedback and prototyping, ensuring optimal user experience.Optimized mobile site performance for fast loading and improved user engagement.",
    content: (
      <a
        href="/projects/jobscript"
        target="_blank"
        rel="noopener noreferrer"
        className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white rounded-lg transform transition-transform duration-300 hover:scale-105 font-bold"
      >
        Vortex
      </a>
    ),
  },
  {
    title: "Sloud - Music Website",
    description:
      "A music website built using Wix Studios with a marketplace for selling band merchandise. Focused on user experience and optimized for fast loading and engagement.",
    content: (
      <a
        href="/projects/sloud"
        target="_blank"
        rel="noopener noreferrer"
        className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--red-500),var(--pink-500))] flex items-center justify-center text-white rounded-lg transform transition-transform duration-300 hover:scale-105"
      >
        Sloud
      </a>
    ),
  },
  {
    title: "Custom Linux Shell",
    description:
      "A custom Linux shell implemented in C. Supports basic shell operations, including running commands, I/O redirection, and piping.",
    content: (
      <a
        href="/projects/linux-shell"
        target="_blank"
        rel="noopener noreferrer"
        className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--green-500),var(--lime-500))] flex items-center justify-center text-white rounded-lg transform transition-transform duration-300 hover:scale-105"
      >
        Linux Shell Project
      </a>
    ),
  },
];

export function StickyScrollRevealDemo() {
  return (
    <div className="py-10 bg-gray-300 scrollbar-none">
      <p className="text-black pl-10 pb-8 font-open-sans text-xl md:text-5xl font-semibold">
        Works<span className="text-red-600">.</span>
      </p>
      <div className="scrollbar-none">
        <StickyScroll content={content} />
      </div>
    </div>
  );
}
