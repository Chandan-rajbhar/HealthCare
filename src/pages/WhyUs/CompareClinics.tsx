import { useNavigate } from "react-router-dom";
import {
  CheckCircle2,
  ArrowRight,
  XCircle,
  ShieldCheck,
  Sparkles,
  Clock3,
  LineChart,
  Users,
  Layers3,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function CompareClinics() {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const comparisons = [
    {
      title: "All-in-One Platform",
      ours: "Bookings, EMR, payments, marketing, forms, analytics & growth tools in one place.",
      others: "Multiple disconnected tools that increase cost and admin work.",
    },
    {
      title: "Built for Modern Clinics",
      ours: "Designed for aesthetic, dental, wellness, GP and specialist clinics.",
      others: "Generic systems with limited healthcare workflows.",
    },
    {
      title: "Automation First",
      ours: "Automated reminders, follow-ups, recalls, reviews and campaigns.",
      others: "Heavy manual tasks or expensive add-ons.",
    },
    {
      title: "Fast Support & Onboarding",
      ours: "Dedicated onboarding, training and responsive customer success.",
      others: "Slow ticket queues and limited guidance.",
    },
    {
      title: "Growth Focused",
      ours: "Revenue dashboards, rebooking tools and marketing insights.",
      others: "Only operational tools with little business growth support.",
    },
    {
      title: "Security & Compliance",
      ours: "Strong security controls with privacy-focused infrastructure.",
      others: "Compliance gaps or outdated systems.",
    },
  ];

  const stats = [
    {
      icon: Clock3,
      value: "20+ hrs",
      label: "Saved weekly through automation",
    },
    {
      icon: LineChart,
      value: "30%",
      label: "Higher repeat bookings potential",
    },
    { icon: Users, value: "10k+", label: "Teams using modern workflows" },
    { icon: Layers3, value: "1 Platform", label: "Replacing multiple tools" },
  ];

  const faqs = [
    {
      question: "How does the automated ADHD assessment workflow work?",
      answer:
        "Our system automates the entire journey: from initial inquiry and pre-screening forms to self-report scales (like DIVA or ASRS) and final report generation. You can track progress in real-time.",
    },
    {
      question: "Is the platform compliant with healthcare data regulations?",
      answer:
        "Yes, we are fully HIPAA and GDPR compliant. All patient data and assessment results are encrypted and stored securely with strict access controls for clinical staff.",
    },
    {
      question: "Can we customize the assessment forms?",
      answer:
        "Absolutely. You can build your own custom intake forms, clinical note templates, and scoring logic to match your clinic's specific ADHD assessment protocol.",
    },
  ];
  return (
    <main className="bg-white text-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-100">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-cyan-50" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-100 bg-white px-4 py-2 text-sm font-medium text-teal-700 shadow-sm">
              <Sparkles className="h-4 w-4" />
              Better Than Traditional Clinic Software
            </div>

            <h1 className="text-5xl font-sans tracking-tight sm:text-6xl lg:text-7xl">
              Why modern clinics are switching to smarter software
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Replace outdated systems, spreadsheets and disconnected tools with
              one platform built to run your clinic, delight patients and grow
              revenue.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                onClick={() => navigate("/pricing")}
                className="cursor-pointer inline-flex items-center gap-2 rounded-xl bg-teal-600 px-6 py-6 text-sm font-sans text-white hover:bg-teal-700"
              >
                Book a Demo
              </Button>

              <Button
                variant="outline"
                onClick={() => navigate("/success-stories")}
                className="cursor-pointer rounded-xl border-slate-300 px-6 py-6 text-sm font-sans hover:border-slate-400 hover:bg-slate-50"
              >
                View Success Stories
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="text-3xl font-sans">{item.value}</p>
                <p className="mt-2 text-sm text-slate-600">{item.label}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-sans tracking-tight">
              Side-by-side comparison
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              See why growing clinics prefer a modern all-in-one platform.
            </p>
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <div className="grid grid-cols-3 border-b border-slate-200 bg-slate-50 text-sm font-sans">
              <div className="p-5">Feature</div>
              <div className="p-5 text-teal-700">Our Platform</div>
              <div className="p-5 text-slate-500">Typical Market Software</div>
            </div>

            {comparisons.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-3 border-b border-slate-100 last:border-none"
              >
                <div className="p-5 font-medium">{row.title}</div>

                <div className="p-5">
                  <div className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                    <p className="text-sm leading-7 text-slate-700">
                      {row.ours}
                    </p>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex gap-3">
                    <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-rose-500" />
                    <p className="text-sm leading-7 text-slate-600">
                      {row.others}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Better */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {[
            "Reduce no-shows with reminders and confirmations",
            "Save staff time with smart automations",
            "Increase repeat visits with recalls and follow-ups",
            "Track performance with real-time dashboards",
            "Improve patient experience from booking to billing",
            "Scale easily across multiple locations",
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-200 p-6 shadow-sm"
            >
              <ShieldCheck className="mb-4 h-8 w-8 text-teal-600" />
              <p className="text-lg font-medium leading-8">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-sans text-slate-900 mb-4 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600">
              Common questions from ADHD clinic owners and assessors.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "border-teal-500/50 bg-teal-50/30 shadow-md"
                      : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                >
                  <button
                    className="w-full text-left px-6 py-6 flex justify-between items-center focus:outline-none group"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span
                      className={`font-sans text-lg md:text-xl pr-8 transition-colors duration-300 ${
                        isOpen
                          ? "text-teal-800 font-semibold"
                          : "text-slate-800"
                      }`}
                    >
                      {faq.question}
                    </span>
                    <span
                      className={`flex-shrink-0 transition-all duration-300 transform ${
                        isOpen ? "rotate-180 text-teal-600" : "text-slate-400"
                      }`}
                    >
                      <div
                        className={`p-1.5 rounded-full transition-colors duration-300 ${
                          isOpen
                            ? "bg-teal-100"
                            : "bg-slate-100 group-hover:bg-slate-200"
                        }`}
                      >
                        <ChevronDown className="w-5 h-5" />
                      </div>
                    </span>
                  </button>

                  {/* Animated Container using CSS Grid for perfect height handling */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-6 text-slate-600 text-lg leading-relaxed border-t border-teal-500/10 pt-4 mt-2">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-teal-600 to-cyan-600 px-8 py-14 text-white lg:px-14">
          <h2 className="text-4xl font-sans">
            Ready to outperform outdated clinic software?
          </h2>

          <p className="mt-4 max-w-2xl text-white/90">
            See how your clinic can save time, improve patient journeys and grow
            faster.
          </p>

          <button
            onClick={() => navigate("/pricing")}
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-sans text-slate-900 transition hover:bg-slate-100"
          >
            Request Demo
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>
    </main>
  );
}
