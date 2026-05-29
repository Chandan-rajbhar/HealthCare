import { useState } from "react";
import {
  ChevronDown,
  CheckCircle2,
  TrendingUp,
  CalendarCheck,
  Gift,
  CreditCard,
  BarChart3,
  LifeBuoy,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

const RevenueGrowth = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    "What happens during the consultation?",
    "Who is this for?",
    "Is it really free?",
    "How long does it take?",
    "What results can I expect?",
  ];

  const steps = [
    {
      title: "Complete review of your clinic",
      desc: "We analyze your current setup, workflows, and revenue streams.",
    },
    {
      title: "Personalized recommendations",
      desc: "Get tailored strategies based on your clinic’s needs.",
    },
    {
      title: "See immediate results",
      desc: "Implement changes that can drive revenue quickly.",
    },
    {
      title: "Ongoing optimization",
      desc: "We continue refining your processes as you grow.",
    },
  ];

  const strategies = [
    {
      icon: TrendingUp,
      title: "Add service packages",
      desc: "Bundle treatments to increase average order value.",
    },
    {
      icon: Gift,
      title: "Sell gift cards",
      desc: "Bring in upfront revenue and attract new clients.",
    },
    {
      icon: BarChart3,
      title: "Customized deposits",
      desc: "Reduce no-shows and secure bookings.",
    },
    {
      icon: CalendarCheck,
      title: "Client recalls",
      desc: "Automatically bring patients back for follow-ups.",
    },
    {
      icon: CreditCard,
      title: "Smooth checkout",
      desc: "Reduce friction and improve payment conversion.",
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      {/* HERO */}
      <section className="relative w-full min-h-screen flex flex-col justify-center bg-teal-50 px-6 py-12 overflow-hidden">
        {/* Optional: Subtle Background Decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[10%] -right-[5%] w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-50" />
          <div className="absolute -bottom-[10%] -left-[5%] w-96 h-96 bg-white rounded-full blur-3xl opacity-60" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-700 mb-6">
              <ShieldCheck size={18} strokeWidth={2.5} />
              <span className="text-sm font-sans tracking-wide uppercase">
                Full Project Management
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-sans text-slate-900 mb-6 leading-[1.1]">
              We handle your entire setup{" "}
              <span className="text-teal-600">end-to-end.</span>
            </h1>

            <p className="text-lg text-slate-600 mb-8 max-w-md leading-relaxed">
              From onboarding and data migration to optimization and scaling —
              our team manages every step so you can focus on patient care.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 bg-teal-600 text-white px-8 py-4 rounded-xl font-sans transition-all hover:bg-teal-700 hover:shadow-lg hover:shadow-teal-200 active:scale-95">
                See features
                <ChevronRight size={18} />
              </button>
              <button className="px-8 py-4 rounded-xl font-sans text-slate-600 hover:bg-white transition-colors">
                Read Whitepaper
              </button>
            </div>
          </div>

          <div className="relative flex items-end justify-center">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-blue-400/10 blur-3xl pointer-events-none" />
            <img
              src="/doctor2.png"
              alt="Doctor"
              className="relative z-10 w-full max-w-[500px] lg:max-w-[600px] object-contain object-bottom drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="py-24 px-6 bg-white font-sans">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl font-sans tracking-tight text-slate-900 mb-4">
            What to expect
          </h2>
          <p className="text-slate-500 text-lg">
            A structured consultation designed to deliver actionable growth
            strategies.
          </p>
        </div>

        <div className="max-w-7xl mx-auto relative">
          {/* Desktop Connector Line */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-px bg-slate-200" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            {steps.map((step, i) => (
              <div
                key={i}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Step Number Circle */}
                <div className="w-24 h-24 rounded-2xl bg-white border-2 border-slate-100 flex items-center justify-center mb-8 relative z-10 transition-colors duration-200 group-hover:border-teal-600">
                  <span className="text-3xl font-black text-slate-200 group-hover:text-teal-600 transition-colors duration-200">
                    0{i + 1}
                  </span>

                  {/* Small Status Icon Overlay */}
                  <div className="absolute -bottom-2 -right-2 bg-teal-600 rounded-lg p-1.5 text-white">
                    <CheckCircle2 size={16} strokeWidth={3} />
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xl font-sans text-slate-900 tracking-tight">
                    {step.title}
                  </h4>
                  <p className="text-sm text-slate-500 leading-relaxed max-w-[200px] mx-auto">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="bg-teal-600 text-white py-12 text-center">
        <h3 className="text-xl mb-4">
          Book a revenue growth consultation today
        </h3>
        <button className="bg-white text-teal-600 px-6 py-3 rounded-lg">
          Schedule now
        </button>
      </section>

      {/* STRATEGIES */}
      <section className="py-24 px-6 bg-white font-sans">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-teal-600 font-sans tracking-widest text-xs uppercase">
            Growth Strategies
          </span>
          <h2 className="text-4xl font-sans mt-4 tracking-tight text-slate-900">
            5 smart ways to boost your revenue
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200 overflow-hidden rounded-xl">
          {strategies.map((s, i) => (
            <div
              key={i}
              className="bg-white p-8 flex flex-col gap-5 transition-colors duration-200 hover:bg-slate-50/50"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-teal-50 text-teal-600">
                <s.icon size={24} strokeWidth={1.5} />
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-teal-600/50 font-mono text-sm font-sans">
                    0{i + 1}
                  </span>
                  <h4 className="font-sans text-slate-900 text-lg tracking-tight">
                    {s.title}
                  </h4>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}

          {/* Optional: CTA Card if you only have 5 items to fill the 6th grid spot */}
          <div className="bg-teal-600 p-8 flex flex-col justify-center items-start gap-4">
            <h4 className="text-white font-sans text-lg leading-snug">
              Ready to scale your business?
            </h4>
            <button className="bg-white text-teal-600 px-5 py-2 rounded-full text-sm font-sans hover:bg-teal-50 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="py-24 px-6 bg-white font-sans">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-sans tracking-tight text-slate-900">
            Revenue consultation vs support
          </h2>
          <p className="mt-4 text-slate-500 text-lg">
            Understand the difference between maintaining your clinic and
            scaling it.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-0 border border-slate-200 rounded-2xl overflow-hidden">
          {/* Revenue Growth - Proactive Side */}
          <div className="p-10 bg-slate-50/50 flex flex-col">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-teal-600 text-white mb-6">
              <TrendingUp size={24} />
            </div>
            <h4 className="text-2xl font-sans text-slate-900 mb-4">
              Revenue Growth
            </h4>
            <p className="text-slate-600 mb-8 text-sm leading-relaxed">
              Proactive partnership focused on your bottom line and market
              expansion.
            </p>
            <ul className="space-y-4">
              {[
                "Strategic recommendations to increase yield",
                "Advanced growth-focused data insights",
                "Marketing and patient retention strategies",
                "Benchmarking against industry leaders",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-slate-700"
                >
                  <CheckCircle2 className="w-5 h-5 text-teal-600 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Support - Reactive Side */}
          <div className="p-10 bg-white border-l border-slate-200 flex flex-col">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 text-slate-600 mb-6">
              <LifeBuoy size={24} />
            </div>
            <h4 className="text-2xl font-sans text-slate-900 mb-4">
              Customer Support
            </h4>
            <p className="text-slate-600 mb-8 text-sm leading-relaxed">
              Reactive assistance to ensure your day-to-day operations run
              smoothly.
            </p>
            <ul className="space-y-4">
              {[
                "Technical troubleshooting and bug fixes",
                "Guidance on using specific system features",
                "Account setup and basic assistance",
                "General 'how-to' queries",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-slate-500"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl text-center mb-10">
            Frequently asked questions
          </h2>

          {faqs.map((q, i) => (
            <div key={i} className="border rounded-lg mb-3">
              <button
                onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                className="w-full flex justify-between p-4"
              >
                {q}
                <ChevronDown className={openFAQ === i ? "rotate-180" : ""} />
              </button>

              {openFAQ === i && (
                <div className="p-4 text-gray-600 text-sm">
                  Placeholder answer explaining the consultation.
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-teal-600 text-white py-20 text-center">
        <h2 className="text-3xl mb-4">Ready to grow your clinic revenue?</h2>
        <button className="bg-white text-teal-600 px-6 py-3 rounded-lg">
          Book consultation
        </button>
      </section>
    </div>
  );
};

export default RevenueGrowth;
