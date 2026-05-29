import { Button } from "@/components/ui/button";
import {
  Gift,
  Link2,
  Users,
  ChevronDown,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
  {
    q: "Who can join the referral program?",
    a: "Anyone with an active account can participate. There are no minimum follower counts or professional requirements.",
  },
  {
    q: "Is there a limit to referrals?",
    a: "Absolutely not. Your earning potential is uncapped. The more you share, the more you earn.",
  },
  {
    q: "When do I receive my reward?",
    a: "Rewards are processed instantly once your referral completes their first billing cycle. You'll see it in your dashboard immediately.",
  },
];  
const steps = [
  {
    icon: Link2,
    title: "Share your link",
    desc: "Copy your unique URL and share it across your professional network.",
  },
  {
    icon: Users,
    title: "They sign up",
    desc: "Your referral joins using your link and starts their growth journey.",
  },
  {
    icon: Gift,
    title: "You both earn",
    desc: "Receive $180 in credits or cash once they become a verified customer.",
  },
];

export default function ReferFriendPage() {
  
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="bg-[#fcfcfd] text-slate-900 font-sans selection:bg-teal-100">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-teal-50/50 to-transparent -z-10" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
        
          <h1 className="text-6xl font-sans tracking-tight text-slate-900 mb-6 lg:text-7xl">
            Spread the word.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500">
              Collect $180.
            </span>
          </h1>
          <p className="text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of partners earning monthly rewards by recommending
            the platform that powers their business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="bg-slate-900 text-white px-8 py-6 rounded-2xl text-lg">
              Get my referral link
            </Button>
            <Button
              variant="ghost"
              className="text-slate-600 px-8 py-6 rounded-2xl text-lg group"
            >
              How it works
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </motion.div>
      </section>

      {/* STATS STRIP - Upgraded to Cards */}
      <section className="px-6 mb-24">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              value: "$180",
              label: "Per Referral",
              desc: "Highest in the industry",
            },
            {
              value: "Unlimited",
              label: "Referral Cap",
              desc: "No limits on earnings",
            },
            {
              value: "24h",
              label: "Avg. Payout",
              desc: "Fastest processing time",
            },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm text-center md:text-left"
            >
              <p className="text-3xl font-sans text-slate-900">{s.value}</p>
              <p className="text-sm font-sans text-slate-700 uppercase tracking-wide mt-1">
                {s.label}
              </p>
              <p className="text-xs text-slate-400 mt-1">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="py-24 px-6 bg-slate-50/50">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-sans text-slate-900 mb-4">
              Simple as 1-2-3
            </h2>
            <div className="h-1 w-20 bg-teal-500 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {steps.map((step, i) => (
              <div key={step.title} className="relative group">
                <div className="mb-8 w-16 h-16 rounded-2xl bg-white shadow-lg shadow-teal-100/50 flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-3">
                  <step.icon className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-sans text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-500 leading-relaxed">{step.desc}</p>
                {i < 2 && (
                  <div className="hidden md:block absolute top-8 -right-6 text-slate-200">
                    <ArrowRight className="w-8 h-8" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON/BENEFIT CARD */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="p-12 lg:p-16 flex-1">
            <h2 className="text-4xl font-sans text-white mb-6">
              Win-win for everyone.
            </h2>
            <div className="space-y-6">
              {[
                "Instant $180 credit for you",
                "Your friend gets $180 off their first year",
                "Priority support for referred accounts",
                "Exclusive partner community access",
              ].map((text) => (
                <div
                  key={text}
                  className="flex items-center gap-3 text-slate-300"
                >
                  <CheckCircle2 className="w-5 h-5 text-teal-400" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-teal-600 p-12 lg:p-16 flex-1 flex flex-col justify-center items-center text-center">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 w-full max-w-sm">
              <p className="text-teal-50 text-sm font-sans uppercase tracking-widest mb-2">
                Total Potential
              </p>
              <p className="text-6xl font-sans text-white mb-4">$∞</p>
              <p className="text-teal-100 text-sm">
                Start your referral journey today and build a passive income
                stream.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-sans text-slate-900 mb-10 text-center">
            Got questions?
          </h2>
          <div className="space-y-4">
            {FAQS.map((item, i) => (
              <div key={item.q} className="border-b border-slate-100">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex justify-between items-center py-6 text-left group"
                >
                  <span
                    className={`text-lg font-sans transition-colors ${open === i ? "text-teal-600" : "text-slate-700 group-hover:text-slate-900"}`}
                  >
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 ${open === i ? "rotate-180 text-teal-600" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-slate-500 leading-relaxed">
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

      {/* FINAL CALL TO ACTION */}
      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-teal-500 to-emerald-600 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-xl shadow-teal-100">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-sans text-white mb-6">
              Ready to start earning?
            </h2>
            <p className="text-teal-50 text-lg mb-10 max-w-xl mx-auto opacity-90">
              Join 5,000+ others who have already turned their network into a
              source of income.
            </p>
            <Button
              size="lg"
              className="bg-white text-teal-700 rounded-2xl px-10 py-7 text-xl font-sans"
            >
              Get Started Now
            </Button>
          </div>
          {/* Decorative circles */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-emerald-700/20 rounded-full blur-3xl" />
        </div>
      </section>
    </div>
  );
}
