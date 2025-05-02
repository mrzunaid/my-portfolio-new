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
          <button className="border border-[#4731d4] text-[#4731d4] font-semibold px-20 py-5 flex items-center gap-2 hover:bg-[#4731d4] hover:text-white transition-all text-sm tracking-wide uppercase">
            See my work <ArrowRight size={16} />
          </button>
        </div>
        

        {/* Right column */}
        <div className="p-10">
          <h2 className="text-3xl md:text-6xl font-bold text-[#4731d4] mb-8">
            I write,<br /> sometimes
          </h2>
          <p className="text-[#1f0c3d] text-2xl mb-16">
            About design, <br /> frontend dev, <br />
            learning and life.
          </p>
          <button className="border border-[#4731d4] text-[#4731d4] font-semibold px-20 py-5 flex items-center gap-2 hover:bg-[#4731d4] hover:text-white transition-all text-sm tracking-wide uppercase">
            Read my articles <ArrowRight size={16} />
          </button>
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
