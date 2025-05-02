import React from 'react';

export default function ContactSection() {
  return (
    <section className="bg-[#fafafa] py-56 px-4 h-screen snap-start">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-[40px] md:text-6xl font-bold text-[#4B1FC6] mb-4">Send me a message!</h2>
        <p className="text-xl md:text-2xl text-[#2D0C52] mb-12 max-w-2xl mx-auto">
          Got a question or proposal, or just want <br /> to say hello? Go ahead.
        </p>
        <form className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="text-left">
              <label className="block mb-2 text-[#9C8AAC] text-sm">Your Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border-b border-[#9C8AAC] bg-transparent text-[#2D0C52] placeholder-[#9C8AAC] focus:outline-none focus:border-[#4B1FC6] py-2"
              />
            </div>
            <div className="text-left">
              <label className="block mb-2 text-[#9C8AAC] text-sm">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full border-b border-[#9C8AAC] bg-transparent text-[#2D0C52] placeholder-[#9C8AAC] focus:outline-none focus:border-[#4B1FC6] py-2"
              />
            </div>
          </div>

          <div className="text-left">
            <label className="block mb-2 text-[#9C8AAC] text-sm">Your Message</label>
            <textarea
              rows={3}
              placeholder="Hi, I think we need a design system for our products at Company X. How soon can you hop on to discuss this?"
              className="w-full border-b border-[#9C8AAC] bg-transparent text-[#2D0C52] placeholder-[#9C8AAC] focus:outline-none focus:border-[#4B1FC6] py-2 resize-y"
            />
          </div>

          <div className="flex justify-center">
          <button
              type="submit"
              className="px-40 py-5 border border-[#4B1FC6] text-[#4B1FC6] font-semibold tracking-wide relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-[#4B1FC6] transition-transform duration-500 ease-in-out transform scale-x-0 group-hover:scale-x-100 origin-left z-0"></span>
              <span className="relative z-10 group-hover:text-white transition-colors duration-500">SHOOT →</span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
