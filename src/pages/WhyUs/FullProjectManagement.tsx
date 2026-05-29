import { useState } from "react";
import {
  ShieldCheck,
  Database,
  ClipboardCheck,
  ChevronDown,
  Quote,
  Building2,
  Globe,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Headset,
  BarChart3,
  UserRoundCog,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

const FullProjectManagement = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const navigate = useNavigate();
  const faqs = [
    {
      question: "What does end-to-end project management include?",
      answer:
        "It covers everything from initial system configuration and data migration to workflow setup and post-launch optimization — your dedicated project manager handles every step.",
    },
    {
      question: "How is this different from standard onboarding?",
      answer:
        "Standard onboarding gives you tools and documentation. Our full project management means our team does the work for you — setup, migration, and configuration are all handled on your behalf.",
    },
    {
      question: "How long does implementation typically take?",
      answer:
        "Most clinics are fully operational in half the time of a typical software rollout. Your project manager will give you a clear timeline during your kickoff call.",
    },
    {
      question: "Is my existing patient data safe during migration?",
      answer:
        "Absolutely. We use encrypted, fully audited data transfer protocols. Your data is validated at every stage and never exposed to unauthorized systems.",
    },
    {
      question: "What happens after the system goes live?",
      answer:
        "We don't disappear at launch. Your project manager stays involved for ongoing optimization, performance monitoring, and scaling support as your clinic grows.",
    },
  ];

  const projectServices = [
    {
      icon: UserRoundCog,
      title: "Dedicated project manager",
      desc: "A single expert responsible for your entire implementation.",
    },
    {
      icon: Database,
      title: "End-to-end data migration",
      desc: "We securely transfer and validate all your data.",
    },
    {
      icon: ClipboardCheck,
      title: "Full system configuration",
      desc: "Every workflow tailored to your clinic’s needs.",
    },
    {
      icon: BarChart3,
      title: "Performance optimization",
      desc: "We continuously refine your system for efficiency.",
    },
    {
      icon: Headset,
      title: "Ongoing managed support",
      desc: "We stay involved even after launch.",
    },
  ];

  const testimonials = [
    {
      text: "They handled everything — from setup to training. We didn’t have to worry about a single step.",
      name: "Dr. Sarah Mitchell",
      role: "Clinic Director",
      initials: "SM",
    },
    {
      text: "The implementation was seamless. Data migration, workflows, everything was done for us.",
      name: "James Chen",
      role: "Healthcare Operations Manager",
      initials: "JC",
    },
    {
      text: "It felt like having an entire technical team dedicated to our clinic.",
      name: "Maria Rodriguez",
      role: "Practice Owner",
      initials: "MR",
    },
  ];

  const stats = [
    { icon: Building2, value: "3,500+", label: "Projects Delivered" },
    { icon: TrendingUp, value: "2x Faster", label: "Implementation Time" },
    { icon: Globe, value: "120+", label: "Countries Served" },
    { icon: ShieldCheck, value: "99%", label: "Successful Migrations" },
  ];

  const features = [
    {
      badge: "Implementation",
      title: "We set everything up for you",
      desc: "Our team takes full ownership of your onboarding — configuring your system, migrating data, and ensuring everything works perfectly from day one.",
      points: [
        "Complete system setup",
        "Secure data migration",
        "Custom workflow configuration",
        "Zero disruption onboarding",
      ],
      image: "/full-account-management.png",
    },
    {
      badge: "Optimization & Scaling",
      title: "We continuously improve your operations",
      desc: "Beyond setup, we actively optimize your workflows, improve efficiency, and help scale your clinic as you grow.",
      points: [
        "Ongoing system optimization",
        "Performance monitoring",
        "Revenue growth strategies",
        "Scalable infrastructure support",
      ],
      image: "/full-account-management.png",
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      <section className="relative w-full min-h-screen flex flex-col justify-center bg-blue-50 px-6 py-12 overflow-hidden">
        {/* Optional: Subtle Background Decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[10%] -right-[5%] w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50" />
          <div className="absolute -bottom-[10%] -left-[5%] w-96 h-96 bg-white rounded-full blur-3xl opacity-60" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-left">
            <h1 className="text-4xl lg:text-6xl font-sans text-slate-900 mb-6 leading-[1.1]">
              We handle your entire setup{" "}
              <span className="text-primary">end-to-end.</span>
            </h1>

            <p className="text-lg text-slate-600 mb-8 max-w-md leading-relaxed">
              From onboarding and data migration to optimization and scaling —
              our team manages every step so you can focus on patient care.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate("/library")}
                className="bg-primary text-white font-sans py-4 px-8 rounded-lg text-lg cursor-pointer"
              >
                See Features{" "}
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

      <section className="bg-gray-50 py-12 px-6 border-y">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => {
            const Icon = stat.icon;

            return (
              <div key={i} className="flex flex-col items-center">
                {/* Icon */}
                <div className="mb-3 text-primary-600">
                  <Icon size={28} />
                </div>

                {/* Value */}
                <h3 className="text-2xl font-sans text-gray-900">
                  {stat.value}
                </h3>

                {/* Label */}
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-white font-sans">
        {features.map((feature, i) => (
          <div
            key={i}
            className="min-h-screen flex items-center justify-center px-6 border-b border-gray-100 last:border-0"
          >
            <div
              className={`max-w-6xl mx-auto grid md:grid-cols-2 gap-16 lg:gap-24 items-center ${
                i % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* IMAGE SIDE */}
              <div
                className={`relative group ${i % 2 !== 0 ? "md:order-2" : ""}`}
              >
                {/* Subtle background glow behind image */}

                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-[400px] lg:h-[500px] object-cover object-left"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>

              {/* CONTENT SIDE */}
              <div className="flex flex-col items-start space-y-8">
                <div className="space-y-4">
                  <h2 className="text-4xl lg:text-5xl font-sans text-slate-900 leading-[1.15] tracking-tight">
                    {feature.title}
                  </h2>

                  <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                    {feature.desc}
                  </p>
                </div>

                {/* Icon List */}
                <ul className="grid grid-cols-1 gap-4 w-full">
                  {feature.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-base text-slate-700 font-sans"
                    >
                      <div className="mt-1 bg-teal-50 p-1 rounded-full">
                        <CheckCircle2
                          className="text-blue-600"
                          size={18}
                          strokeWidth={2.5}
                        />
                      </div>
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Interactive CTA */}
                <button className="group/btn inline-flex items-center gap-3 px-6 py-3 bg-slate-900 text-white rounded-xl font-sans">
                  Learn more
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover/btn:translate-x-1"
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* SECURITY GRID */}
      <section className="min-h-screen flex items-center bg-gray-50 py-24 px-6 font-sans">
        <div className="max-w-7xl mx-auto w-full">
          {/* Header Section */}
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-sans text-slate-900 tracking-tight mb-6">
              Comprehensive security best practices
            </h2>
            <p className="text-lg text-slate-600">
              We employ multi-layered defense strategies to ensure your clinical
              data remains isolated, encrypted, and available only to authorized
              personnel.
            </p>
          </div>

          {/* Grid Section */}
          <div className="grid md:grid-cols-3 gap-8">
            {projectServices.map((item, i) => (
              <div
                key={i}
                className="group bg-white p-10 rounded-2xl border border-slate-200 transition-colors duration-300 hover:border-teal-600 flex flex-col items-start"
              >
                {/* Icon Container - No shadow, just clean fill */}
                <div className="mb-6 bg-teal-50 p-4 rounded-xl text-teal-600 transition-colors duration-300 group-hover:bg-teal-600 group-hover:text-white">
                  <item.icon size={28} strokeWidth={2} />
                </div>

                {/* Text Content */}
                <h4 className="text-xl font-sans text-slate-900 mb-3 tracking-tight">
                  {item.title}
                </h4>

                <p className="text-slate-600 leading-relaxed">{item.desc}</p>

                {/* Decorative detail instead of shadow */}
                <div className="mt-auto pt-8 w-full">
                  <div className="h-1 w-8 bg-slate-100 group-hover:w-full group-hover:bg-teal-600 transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 px-6 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-sans mb-2">
            Trusted by healthcare professionals
          </h2>

          <p className="text-gray-500">
            See how clinics use HealVare to streamline operations.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white/70 backdrop-blur border border-gray-200 rounded-xl p-6 flex flex-col justify-between"
            >
              {/* Quote Icon */}
              <Quote className="text-teal-500 mb-4" size={28} />

              {/* Text */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                “{t.text}”
              </p>

              {/* Divider */}
              <div className="border-t pt-4 flex items-center gap-3">
                {/* Name + Role */}
                <div className="flex flex-col">
                  <span className="text-sm font-sans text-gray-900">
                    {t.name}
                  </span>
                  <span className="text-xs text-gray-500">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-slate-900 tracking-tight mb-6 font-sans">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Common questions from longevity clinic owners about our Platinum
              Success program.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFAQ === index;
              return (
                <div
                  key={index}
                  className={`group border rounded-xl overflow-hidden transition-all duration-200 ${
                    isOpen
                      ? "border-teal-600 bg-white ring-1 ring-blue-600/10"
                      : "border-slate-200 bg-white hover:border-slate-300 shadow-sm"
                  }`}
                >
                  <button
                    className="w-full text-left px-6 py-6 flex justify-between items-center focus:outline-none"
                    onClick={() => setOpenFAQ(isOpen ? null : index)}
                  >
                    <span
                      className={`text-lg md:text-xl pr-8 font-sans transition-colors ${
                        isOpen ? "text-teal-600" : "text-slate-800"
                      }`}
                    >
                      {faq.question}
                    </span>

                    <span
                      className={`flex-shrink-0 transition-all duration-300 ${
                        isOpen
                          ? "rotate-180 text-blue-600"
                          : "text-slate-400 group-hover:text-slate-600"
                      }`}
                    >
                      <div
                        className={`p-2 rounded-lg transition-colors ${
                          isOpen ? "bg-teal-50" : "bg-slate-50"
                        }`}
                      >
                        <ChevronDown className="w-5 h-5" strokeWidth={2.5} />
                      </div>
                    </span>
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-6 text-slate-600 text-lg leading-relaxed border-t border-slate-50 pt-4">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-teal-600 text-white text-center">
        <h2 className="text-3xl font-sans mb-4">
          Ready to see how HealVare can help your practice grow?
        </h2>

        <button className="bg-white text-teal-600 px-6 py-3 rounded-lg font-sans cursor-pointer">
          Book a demo
        </button>
      </section>
    </div>
  );
};

export default FullProjectManagement;
