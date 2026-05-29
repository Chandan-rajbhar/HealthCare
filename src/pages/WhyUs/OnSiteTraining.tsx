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

const OnSiteTraining = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const navigate = useNavigate();
  const faqs = [
    {
      question: "What does a customer success manager do?",
      answer:
        "Your dedicated manager acts as a strategic partner, helping you map out business goals and ensuring your software configuration supports them perfectly.",
    },
    {
      question: "Is this different from support?",
      answer:
        "Yes. While support fixes problems after they happen, Success prevents them and focuses on active growth and workflow optimization.",
    },
    {
      question: "How fast can we get started?",
      answer:
        "Immediately. Upon upgrading, you'll receive an introductory call within 24 hours to begin your tailored onboarding.",
    },
    {
      question: "Is this suitable for small clinics?",
      answer:
        "Absolutely. Small clinics often see the biggest ROI as we help automate tasks that would otherwise require additional administrative staff.",
    },
    {
      question: "How do I upgrade?",
      answer:
        "Simply click the 'Upgrade now' button. Our team will handle the billing transition and assign your manager instantly.",
    },
  ];

  const accountServices = [
    {
      icon: UserRoundCog,
      title: "Hands-on team training",
      desc: "We train your staff directly in your clinic environment.",
    },
    {
      icon: Database,
      title: "Real workflow setup",
      desc: "Configure your system based on your actual day-to-day operations.",
    },
    {
      icon: ClipboardCheck,
      title: "Process optimization",
      desc: "Identify inefficiencies and improve how your clinic operates.",
    },
    {
      icon: BarChart3,
      title: "Role-based training",
      desc: "Each team member learns exactly what they need for their role.",
    },
    {
      icon: Headset,
      title: "Post-training support",
      desc: "We ensure your team stays confident even after training.",
    },
  ];
  const testimonials = [
    {
      text: "The on-site training made a huge difference. Our team understood everything in just one day.",
      name: "Dr. Sarah Mitchell",
      role: "Clinic Director",
      initials: "SM",
    },
    {
      text: "Instead of figuring things out ourselves, we had experts guiding us step by step in our own clinic.",
      name: "James Chen",
      role: "Operations Manager",
      initials: "JC",
    },
    {
      text: "Every staff member left confident. It completely removed the learning curve.",
      name: "Maria Rodriguez",
      role: "Practice Owner",
      initials: "MR",
    },
  ];

  const stats = [
    { icon: Building2, value: "3,500+", label: "Clinics Trained" },
    { icon: TrendingUp, value: "2x", label: "Faster Adoption" },
    { icon: Globe, value: "120+", label: "Locations Covered" },
    { icon: ShieldCheck, value: "98%", label: "Training Satisfaction" },
  ];

  const features = [
    {
      badge: "On-site Experience",
      title: "Training tailored to your clinic",
      desc: "We don’t do generic demos. Our team trains your staff using your real workflows, ensuring immediate impact.",
      points: [
        "In-person training sessions",
        "Customized to your clinic",
        "Hands-on system walkthroughs",
        "Real patient journey simulation",
      ],
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72",
    },
    {
      badge: "Team Enablement",
      title: "Get your entire team up to speed fast",
      desc: "From reception to practitioners, everyone learns how to use HealVare efficiently.",
      points: [
        "Role-based training sessions",
        "Front desk & admin workflows",
        "Practitioner usage training",
        "Confidence across your team",
      ],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
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
              Train your team in person for{" "}
              <span className="text-teal-600">maximum efficiency.</span>
            </h1>

            <p className="text-lg text-slate-600 mb-8 max-w-md leading-relaxed">
              Our experts visit your clinic to train your team hands-on,
              ensuring everyone knows exactly how to use HealVare to its full
              potential.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate("/contact")}
                className="bg-primary text-white font-sans py-4 px-8 rounded-lg text-lg cursor-pointer"
              >
                Get Started
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
                    className="w-full h-[400px] lg:h-[500px] object-cover"
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
                          className="text-teal-600"
                          size={18}
                          strokeWidth={2.5}
                        />
                      </div>
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Interactive CTA */}
                <button className="cursor-pointer group/btn inline-flex items-center gap-3 px-6 py-3 bg-slate-900 text-white rounded-xl font-sans">
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
              What you’ll get with on-site training
            </h2>

            <p className="text-lg text-slate-600">
              Practical, in-person training designed to help your team adopt the
              system quickly and confidently.
            </p>
          </div>

          {/* Grid Section */}
          <div className="grid md:grid-cols-3 gap-8">
            {accountServices.map((item, i) => (
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
            Trusted by Property Professionals
          </h2>

          <p className="text-gray-500">
            See what our customers have to say about LeaseYeti.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white/70 backdrop-blur border border-gray-200 rounded-xl p-6 flex flex-col justify-between"
            >
              {/* Quote Icon */}
              <Quote className="text-primary mb-4" size={28} />

              {/* Text */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                “{t.text}”
              </p>

              {/* Divider */}
              <div className="border-t pt-4 flex items-center gap-3">
                {/* Avatar */}
                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-primary-100 text-blue-600 text-sm font-sans">
                  {t.initials}
                </div>

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
              const isOpen = openIndex === index;
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
                    onClick={() => setOpenIndex(isOpen ? null : index)}
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
                          isOpen ? "bg-blue-50" : "bg-slate-50"
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
      <section className="py-20 px-6 bg-primary text-white text-center">
        <h2 className="text-3xl font-sans mb-4">
          Bring expert training directly to your clinic
        </h2>

        <button className="bg-white text-primary px-6 py-3 rounded-lg font-sans cursor-pointer">
          Book on-site training
        </button>
      </section>
    </div>
  );
};

export default OnSiteTraining;
