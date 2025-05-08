"use client";

import { ArrowRight } from "lucide-react";

export default function WorkAndWritingSection() {
  return (
    <section className="h-screen snap-start w-full bg-[#f9f9f9] py-40">
      <div className="max-w-[90%] mx-auto px-4 relative grid grid-cols-1 md:grid-cols-2 py-24 gap-12 bg-white shadow-md rounded-md">
        {/* Left column */}
        <div className="p-10 border-r border-[#4731d4]">
          <h2 className="text-3xl md:text-6xl font-bold text-[#4731d4] mb-8">
            I build &<br /> design stuff
          </h2>
          <p className="text-[#1f0c3d] text-2xl mb-16">
            Open source projects, <br /> web apps <br />
            and experimentals.
          </p>
          <div className="flex">
            <button className="px-20 py-5 uppercase border border-[#4B1FC6] text-[#4B1FC6] font-semibold tracking-wide relative overflow-hidden group">
              <span className="absolute inset-0 bg-[#4B1FC6] transition-transform duration-500 ease-in-out transform scale-x-0 group-hover:scale-x-100 origin-left z-0"></span>
              <span className="relative z-10 group-hover:text-white transition-colors duration-500 flex items-center justify-center gap-2 tracking-wider">
                See my work
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path d="M5 12h14"></path>
                  <path d="M15 6l6 6-6 6"></path>
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* Right column */}
        <div className="p-10">
          <h2 className="text-3xl md:text-6xl font-bold text-[#4731d4] mb-8">
            I write,
            <br /> sometimes
          </h2>
          <p className="text-[#1f0c3d] text-2xl mb-16">
            About design, <br /> frontend dev, <br />
            learning and life.
          </p>

          <div className="flex">
            <button className="px-20 py-5 uppercase border border-[#4B1FC6] text-[#4B1FC6] font-semibold tracking-wide relative overflow-hidden group">
              <span className="absolute inset-0 bg-[#4B1FC6] transition-transform duration-500 ease-in-out transform scale-x-0 group-hover:scale-x-100 origin-left z-0"></span>
              <span className="relative z-10 group-hover:text-white transition-colors duration-500 flex items-center justify-center gap-2 tracking-wider">
                Read my articles
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path d="M5 12h14"></path>
                  <path d="M15 6l6 6-6 6"></path>
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* Vertical icon menu */}
        <div className="absolute right-8 top-2/3 transform -translate-y-1/2 hidden md:flex flex-col items-center gap-5">
          <span className="w-2 h-2 bg-[#4731d4] rotate-45"></span>
          <span className="w-2 h-2 bg-[#4731d4] rotate-45"></span>
          <span className="w-2 h-2 bg-[#4731d4] rotate-45"></span>
          <span className="w-2 h-2 border border-[#4731d4] rotate-45"></span>
          <span className="w-2 h-2 bg-[#4731d4] rotate-45"></span>
        </div>
      </div>
    </section>
  );
}
