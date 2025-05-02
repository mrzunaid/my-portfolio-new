
const SkillsOverview = () => {
    return (
        <section className="relative h-screen snap-start w-full bg-[#f9f9f9] py-80 px-24 overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 ">
            {/* Design Section */}
            <div className="relative flex flex-col justify-center my-auto ">
              {/* Dotted grid background */}
              <div className="absolute top-0 left-0 -translate-x-8 -translate-y-8">
                <svg width="100" height="100" className="opacity-30">
                  <defs>
                    <pattern id="dot-grid" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                      <circle cx="1" cy="1" r="1" fill="#4831d4" />
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill="url(#dot-grid)" />
                </svg>
              </div>
    
              <h2 className="text-5xl md:text-6xl font-extrabold text-[#4831d4] mb-6">Design</h2>
              <p className="text-base md:text-lg text-[#3d155f] max-w-lg">
                I'm probably not the typical designer positioned behind an Illustrator artboard adjusting pixels, but I design.
                Immersed in stylesheets tweaking font sizes and contemplating layouts is where you'll find me (~_^). I'm committed
                to creating fluent user experiences while staying fashionable.
              </p>
    
              {/* Dots below */}
              <div className="mt-10 flex gap-3">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-3 h-3 border-2 border-[#4831d4] rounded-full bg-white"
                  ></div>
                ))}
              </div>
            </div>
    
            {/* Engineering Section */}
            <div className="relative flex flex-col justify-end text-right">
              {/* Dotted grid background */}
              <div className="absolute top-20 right-0 translate-x-8 -translate-y-8">
                <svg width="100" height="100" className="opacity-30">
                  <defs>
                    <pattern id="dot-grid-right" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                      <circle cx="1" cy="1" r="1" fill="#4831d4" />
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill="url(#dot-grid-right)" />
                </svg>
              </div>
    
              <h2 className="text-5xl md:text-6xl font-extrabold text-[#4831d4] mb-6 text-right">Engineering</h2>
              <p className="text-base md:text-lg text-[#3d155f] max-w-lg ml-auto text-left leading-6">
                In building JavaScript applications, I'm equipped with just the right tools, and can absolutely function independently
                of them to deliver fast, resilient solutions optimized for scale — performance and scalability are priorities on my radar.
              </p>
    
              {/* Side dots */}
              <div className="absolute left-[90%] -bottom-12 transform -translate-x-1/2 flex gap-2">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2.5 h-2.5 border-2 border-[#4831d4] rounded-full bg-white"
                  ></div>
                ))}
              </div>
    
              {/* Step line icon */}
              <div className="absolute right-100 top-20">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <polyline
                    points="0,10 10,10 10,20 20,20 20,30 30,30 30,40"
                    fill="none"
                    stroke="#4831d4"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>
      );
  };
  
  export default SkillsOverview;
  