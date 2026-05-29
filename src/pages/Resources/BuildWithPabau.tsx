import {
  Code2,
  Rocket,
  Zap,
  Puzzle,
  Users,
  TrendingUp,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BuildWithPabau() {
  const [open, setOpen] = useState<number | null>(null);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  };

  return (
    <div className="bg-[#FCFCFD] text-slate-900 font-sans selection:bg-teal-100">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-teal-50/50 via-transparent to-transparent -z-10" />

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeIn}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-xs font-sans uppercase tracking-wider mb-6">
              <Zap className="w-3 h-3 fill-current" /> Partner Program 2.0
            </div>
            <h1 className="text-5xl lg:text-7xl font-sans tracking-tight mb-6 leading-[1.1] text-slate-900">
              Build the future of{" "}
              <span className="text-teal-600">health tech.</span>
            </h1>
            <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
              Integrate your solution with Pabau's ecosystem. Reach 3,000+
              clinics worldwide and scale your impact with our robust API.
            </p>

            <div className="flex flex-wrap gap-5">
              {/* CUSTOM PRIMARY BUTTON */}
              <button className="group relative px-8 py-4 bg-slate-900 text-white font-sans rounded-2xl transition-all duration-300 hover:bg-slate-800 hover:shadow-[0_20px_40px_-12px_rgba(15,23,42,0.3)] active:scale-95 overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Apply to Partner{" "}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
                {/* Subtle shine effect */}
                <div className="absolute inset-0 w-1/2 h-full bg-white/10 skew-x-[-25deg] -translate-x-full group-hover:translate-x-[250%] transition-transform duration-1000 ease-in-out" />
              </button>

              {/* CUSTOM GHOST/OUTLINE BUTTON */}
              <button className="px-8 py-4 bg-white border border-slate-200 text-slate-600 font-sans rounded-2xl transition-all duration-200 hover:bg-slate-50 hover:border-slate-300 hover:text-slate-900 active:scale-95">
                Explore Documentation
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 rounded-[2.5rem] shadow-2xl border-8 border-white flex items-center justify-center overflow-hidden">
              <Code2 className="w-24 h-24 text-slate-400/40" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY PARTNER - CARD GRID */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-sans mb-4 tracking-tight">
              Why Partner With Us?
            </h2>
            <p className="text-slate-500 text-lg">
              Everything you need to build, test, and scale your healthcare
              integration.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Rocket,
                title: "Growing Marketplace",
                desc: "Instantly accessible to our global network of medical professionals.",
              },
              {
                icon: Puzzle,
                title: "Rich API Suite",
                desc: "RESTful endpoints designed for speed, security, and developer joy.",
              },
              {
                icon: Users,
                title: "Partner Managers",
                desc: "No bots here. Get a direct line to our engineering and marketing teams.",
              },
              {
                icon: Zap,
                title: "One-Click Install",
                desc: "Let users connect your app in seconds with OAuth2 flows.",
              },
              {
                icon: Code2,
                title: "Sandbox Access",
                desc: "Build in a safe, replicated environment with mock medical data.",
              },
              {
                icon: TrendingUp,
                title: "Rev-Share Model",
                desc: "Benefit from a sustainable partnership that grows as you do.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group p-8 bg-[#FCFCFD] border border-slate-100 rounded-[2.5rem] hover:bg-white hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center mb-8 transition-transform group-hover:scale-110 group-hover:rotate-3">
                  <item.icon className="w-7 h-7 text-teal-600" />
                </div>
                <h3 className="text-xl font-sans mb-3">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-sans mb-12 text-center">
            Developer FAQs
          </h2>
          <div className="space-y-3">
            {[
              {
                q: "How long does approval take?",
                a: "Typically 3-5 business days for initial review.",
              },
              {
                q: "Are there costs involved?",
                a: "It's free to build. We only take a share for marketplace leads.",
              },
              {
                q: "What support is available?",
                a: "Access to our dev-only Slack and direct partner email support.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200/60 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left font-sans text-slate-800"
                >
                  {item.q}
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${open === i ? "rotate-180" : "text-slate-400"}`}
                  />
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <p className="px-6 pb-5 text-slate-500 leading-relaxed">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-6xl mx-auto bg-teal-600 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-[0_40px_80px_-15px_rgba(13,148,136,0.3)]">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-sans text-white mb-6">
              Ready to start building?
            </h2>
            <p className="text-teal-50 text-lg mb-12 max-w-xl mx-auto opacity-90">
              Join the ecosystem powering the world's best clinics.
            </p>

            {/* WHITE PRIMARY BUTTON */}
            <button className="px-10 py-5 bg-white text-teal-700 font-sans rounded-2xl text-lg shadow-xl transition-all duration-300 hover:bg-teal-50 hover:-translate-y-1 active:scale-95 active:translate-y-0">
              Create Developer Account
            </button>
          </div>

          {/* Background Orbs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
        </div>
      </section>
    </div>
  );
}
