import { useNavigate } from "react-router-dom";

const EBooks = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* Hero Section */}

      <section className="relative bg-white text-white overflow-hidden py-24 lg:py-32 min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-sans mb-6">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                Knowledge Hub & Resources
              </div>
              <h1 className="text-4xl md:text-6xl text-black font-sans tracking-tight leading-[1.1] mb-6">
                Master the future of{" "}
                <span className="text-primary">clinical operations</span>
              </h1>
              <p className="text-lg md:text-xl text-black mb-10 leading-relaxed">
                Access our curated library of whitepapers and e-books. From
                AI-driven diagnostics to optimizing patient flow, stay ahead
                with evidence-based hospital management strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigate("/library")}
                  className="bg-primary text-white font-sans py-4 px-8 rounded-lg text-lg cursor-pointer"
                >
                  Browse Library
                </button>
                <button
                  onClick={() => navigate("/newsletter")}
                  className="bg-transparent cursor-pointer border border-slate-700  text-black font-sans py-4 px-8 rounded-lg transition-all duration-300 text-lg"
                >
                  Join 5k+ Readers
                </button>
              </div>
            </div>

            <div className="relative lg:ml-10">
              {/* Resource Center Mockup */}
              <div className="relative bg-slate-800 border border-slate-700 rounded-2xl shadow-2xl shadow-black/60 overflow-hidden backdrop-blur-sm">
                <div className="flex items-center px-4 py-3 bg-slate-900 border-b border-slate-700">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                  </div>
                  <div className="mx-auto bg-slate-800 text-slate-400 text-xs px-4 py-1 rounded-md font-mono">
                    resources.hms-cloud.com
                  </div>
                </div>
                <div className="p-6 md:p-8 aspect-[4/3] flex flex-col gap-6">
                  <div className="flex justify-between items-center mb-2">
                    <div className="h-6 w-32 bg-slate-700 rounded"></div>
                    <div className="flex gap-2">
                      <div className="h-2 w-8 bg-blue-500/40 rounded-full"></div>
                      <div className="h-2 w-8 bg-slate-700 rounded-full"></div>
                    </div>
                  </div>

                  {/* Featured E-book Card Simulated */}
                  <div className="flex-1 bg-slate-900/50 rounded-xl border border-slate-700 flex flex-col p-5 relative overflow-hidden group">
                    <div className="flex gap-4">
                      <div className="w-24 h-32 bg-gradient-to-t from-blue-600 to-blue-400 rounded-md shadow-lg shrink-0 flex items-end p-2">
                        <div className="w-full h-1 bg-white/20 rounded"></div>
                      </div>
                      <div className="flex-1 space-y-3">
                        <div className="h-3 bg-blue-400/20 rounded w-1/3"></div>
                        <div className="h-5 bg-white rounded w-full"></div>
                        <div className="h-5 bg-white rounded w-2/3"></div>
                        <div className="h-3 bg-slate-700 rounded w-full mt-4"></div>
                        <div className="h-3 bg-slate-700 rounded w-4/5"></div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-700/30 p-4 rounded-xl border border-slate-600/50">
                      <p className="text-slate-400 text-[10px] mb-1 uppercase font-sans tracking-wider">
                        Downloads This Month
                      </p>
                      <p className="text-2xl font-sans text-white">1,284</p>
                    </div>
                    <div className="bg-slate-700/30 p-4 rounded-xl border border-slate-600/50">
                      <p className="text-slate-400 text-[10px] mb-1 uppercase font-sans tracking-wider">
                        New Guides Added
                      </p>
                      <p className="text-2xl font-sans text-blue-400">+8</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative element to emphasize "E-books" */}
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-lg shadow-xl hidden md:block">
                <p className="text-xs font-sans uppercase">Trending Now</p>
                <p className="text-sm">2026 HIPAA Compliance Guide</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEXT SECTION */}
      <section className="bg-slate-50 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* eBooks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div className="group flex flex-col bg-white rounded-3xl border border-slate-100 p-6">
              <div className="relative mb-8 flex justify-center">
                {/* Decorative Background Element */}
                <div className="absolute inset-0 top-12 bg-sky-50 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>

                {/* Book Image with Realistic Shadow */}
                <img
                  src="/ebook.jpg"
                  alt="Med spa business guide"
                  className="relative z-10 w-[65%] rounded-md shadow-[10px_20px_40px_-15px_rgba(0,0,0,0.3)] group-hover:shadow-[15px_25px_50px_-12px_rgba(0,0,0,0.4)] transition-all duration-300"
                />
              </div>

              <div className="flex flex-col flex-1">
                <div className="mb-4">
                  <span className="text-[10px] font-sans uppercase tracking-widest text-[#49abc9] bg-sky-50 px-3 py-1 rounded-full">
                    Business Strategy
                  </span>
                </div>
                <h3 className="text-xl font-sans text-slate-900 mb-3 group-hover:text-[#49abc9] transition-colors">
                  Med spa business guide
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-1">
                  Your go-to guide for launching a successful med spa. Learn
                  everything from setup costs, legal essentials, and software.
                </p>

                <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                  <span className="text-xs font-sans text-slate-400">
                    12 min read
                  </span>
                  <button className="text-[#49abc9] font-sans text-sm flex items-center gap-2 group/btn">
                    Read Guide
                    <span className="transform group-hover/btn:translate-x-1 transition-transform">
                      →
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group flex flex-col bg-white rounded-3xl border border-slate-100 p-6">
              <div className="relative mb-8 flex justify-center">
                <div className="absolute inset-0 top-12 bg-sky-50 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                <img
                  src="/ebook.jpg   "
                  alt="Marketing guide"
                  className="relative z-10 w-[65%] rounded-md shadow-[10px_20px_40px_-15px_rgba(0,0,0,0.3)] group-hover:shadow-[15px_25px_50px_-12px_rgba(0,0,0,0.4)] transition-all duration-300"
                />
              </div>

              <div className="flex flex-col flex-1">
                <div className="mb-4">
                  <span className="text-[10px] font-sans uppercase tracking-widest text-[#49abc9] bg-sky-50 px-3 py-1 rounded-full">
                    Growth & Marketing
                  </span>
                </div>
                <h3 className="text-xl font-sans text-slate-900 mb-3 group-hover:text-[#49abc9] transition-colors">
                  Marketing your med spa
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-1">
                  Discover 14 proven marketing strategies to grow in 2026.
                  Covers branding, social media, and Google Business Profiles.
                </p>

                <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                  <span className="text-xs font-sans text-slate-400">
                    18 min read
                  </span>
                  <button className="text-[#49abc9] font-sans text-sm flex items-center gap-2 group/btn">
                    Read Guide
                    <span className="transform group-hover/btn:translate-x-1 transition-transform">
                      →
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group flex flex-col bg-white rounded-3xl border border-slate-100 p-6">
              <div className="relative mb-8 flex justify-center">
                <div className="absolute inset-0 top-12 bg-sky-50 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                <img
                  src="/ebook.jpg"
                  alt="Service expansion"
                  className="relative z-10 w-[65%] rounded-md shadow-[10px_20px_40px_-15px_rgba(0,0,0,0.3)] group-hover:shadow-[15px_25px_50px_-12px_rgba(0,0,0,0.4)] transition-all duration-300"
                />
              </div>

              <div className="flex flex-col flex-1">
                <div className="mb-4">
                  <span className="text-[10px] font-sans uppercase tracking-widest text-[#49abc9] bg-sky-50 px-3 py-1 rounded-full">
                    Operations
                  </span>
                </div>
                <h3 className="text-xl font-sans text-slate-900 mb-3 group-hover:text-[#49abc9] transition-colors">
                  Med spa service expansion
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-1">
                  Essential strategies and actionable steps to help you launch a
                  new service, stress-free. A must for growing practices.
                </p>

                <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                  <span className="text-xs font-sans text-slate-400">
                    15 min read
                  </span>
                  <button className="text-[#49abc9] font-sans text-sm flex items-center gap-2 group/btn">
                    Read Guide
                    <span className="transform group-hover/btn:translate-x-1 transition-transform">
                      →
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NewsLetter */}
      <section className="bg-slate-50 py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center relative">
            {/* Optional decorative blur stays relative to the text content */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#49abc9]/5 blur-3xl rounded-full"></div>

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-sans text-slate-900 tracking-tight mb-6">
                Sign up to our email newsletter
              </h2>
              <p className="text-slate-500 text-lg mb-10 max-w-2xl mx-auto">
                Stay informed with the latest industry insights, product
                updates, and strategies for hospital management and med spa
                growth.
              </p>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="max-w-md mx-auto"
              >
                <div className="flex flex-col gap-4">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email*"
                    className="w-full px-6 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#49abc9]/20 focus:border-[#49abc9] transition-all bg-white text-slate-900 placeholder:text-slate-400 shadow-sm"
                  />

                  <button
                    type="submit"
                    className="w-full bg-[#49abc9] hover:bg-[#3d8fa8] text-white font-sans py-4 px-8 rounded-xl shadow-lg shadow-[#49abc9]/20 transition-all duration-300 transform active:scale-[0.98]"
                  >
                    Submit
                  </button>
                </div>

                <div className="mt-6 flex items-center justify-center gap-2 text-slate-400">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04m18.236 0a11.955 11.955 0 01-8.618 3.04M12 2.944a11.955 11.955 0 01-8.618 3.04m18.236 0a11.955 11.955 0 01-8.618 3.04M12 21.355c-7.147-4.14-10.421-11.104-10.421-11.104S5.104 1.5 12 1.5s10.421 8.751 10.421 8.751-3.274 6.964-10.421 11.104z"
                    />
                  </svg>
                  <p className="text-xs">
                    Your data is secured and never shared with 3rd parties.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EBooks;
