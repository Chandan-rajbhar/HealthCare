import { useState } from "react";
import {
  ShieldCheck,
  Cloud,
  Lock,
  Database,
  ClipboardCheck,
  ChevronDown,
  Quote,
  Building2,
  Globe,
  TrendingUp,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const SecurityPage = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    "What is HealVare’s uptime like?",
    "Can I access HealVare on mobile?",
    "Where are your servers located?",
    "Do you comply with GDPR?",
    "Is my data encrypted?",
  ];

  const securityFeatures = [
    {
      icon: Cloud,
      title: "Cloud based hosting",
      desc: "Secure cloud infrastructure with high availability and scalability.",
    },
    {
      icon: Lock,
      title: "Data encryption",
      desc: "All sensitive data is encrypted in transit and at rest.",
    },
    {
      icon: Database,
      title: "Daily backups",
      desc: "Automated backups ensure data safety and recovery.",
    },
    {
      icon: ClipboardCheck,
      title: "Incident response plans",
      desc: "Prepared systems for fast incident handling and mitigation.",
    },
    {
      icon: ShieldCheck,
      title: "Regular security audits",
      desc: "Continuous monitoring and auditing for vulnerabilities.",
    },
  ];

  const testimonials = [
    {
      text: "Knowing our patient data is protected with enterprise-grade security gives us complete peace of mind. We no longer worry about compliance or data breaches.",
      name: "Dr. Sarah Mitchell",
      role: "Clinic Director",
      initials: "SM",
    },
    {
      text: "The built-in GDPR and HIPAA compliance features have made audits significantly easier. Everything is structured, secure, and always accessible when we need it.",
      name: "James Chen",
      role: "Healthcare Operations Manager",
      initials: "JC",
    },
    {
      text: "From encrypted records to secure payment processing, the platform ensures every touchpoint is protected. It's exactly what a modern clinic needs.",
      name: "Maria Rodriguez",
      role: "Practice Owner",
      initials: "MR",
    },
  ];

  const stats = [
    {
      icon: Building2,
      value: "3,500+",
      label: "Clinics Managed",
    },
    {
      icon: Globe,
      value: "120+",
      label: "Countries Served",
    },
    {
      icon: TrendingUp,
      value: "$500M+",
      label: "Revenue Processed",
    },
    {
      icon: ShieldCheck,
      value: "99.9%",
      label: "Uptime Guarantee",
    },
  ];

  const features = [
    {
      badge: "Security Infrastructure",
      title: "Protecting Patient Data Shouldn't Be This Hard",
      desc: "Legacy systems fall short when it comes to modern security standards. Our platform ensures your clinic operates with enterprise-grade protection without added complexity.",
      points: [
        "End-to-end data encryption",
        "HIPAA & GDPR compliance ready",
        "Secure cloud infrastructure",
        "Global data protection standards",
      ],
      image: "https://img.freepik.com/free-photo/cybersecurity-data-protection-concept-futuristic-shield-lock_23-2151998492.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
      badge: "Payments & Compliance",
      title: "Secure Payments Without the Complexity",
      desc: "Handle transactions with confidence using fully encrypted and compliant payment processing built for healthcare providers.",
      points: [
        "PCI-compliant payment processing",
        "Encrypted transactions",
        "No hidden fees or risks",
        "Built for healthcare workflows",
      ],
      image: "https://img.freepik.com/free-photo/cybersecurity-data-protection-concept-futuristic-shield-lock_23-2151998492.jpg?semt=ais_hybrid&w=740&q=80",
    },
  ];

  return (
    <div className="bg-white text-gray-900">
      {/* HERO */}
      {/* <section className="bg-blue-50 py-20 px-6 min-h-screen">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4 text-blue-600">
              <ShieldCheck size={20} />
              <span className="font-sans">Security First</span>
            </div>

            <h1 className="text-4xl font-sans mb-4 leading-tight">
              Security controls medical practitioners can trust
            </h1>

            <p className="text-gray-600 mb-6">
              Enterprise-grade infrastructure designed to protect patient data
              and ensure compliance.
            </p>

            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-sans hover:bg-blue-700">
              See features
            </button>
          </div>

          <div className="h-[300px] bg-gray-200 rounded-xl flex items-center justify-center">
            Illustration
          </div>
        </div>
      </section> */}

      <section className="relative w-full min-h-screen flex flex-col justify-center bg-blue-50 px-6 py-12 overflow-hidden">
        {/* Optional: Subtle Background Decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[10%] -right-[5%] w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50" />
          <div className="absolute -bottom-[10%] -left-[5%] w-96 h-96 bg-white rounded-full blur-3xl opacity-60" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 mb-6">
              <ShieldCheck size={18} strokeWidth={2.5} />
              <span className="text-sm font-sans tracking-wide uppercase">
                Security First
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-sans text-slate-900 mb-6 leading-[1.1]">
              Security controls medical practitioners{" "}
              <span className="text-blue-600">can trust.</span>
            </h1>

            <p className="text-lg text-slate-600 mb-8 max-w-md leading-relaxed">
              Enterprise-grade infrastructure meticulously designed to protect
              sensitive patient data while ensuring seamless regulatory
              compliance.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-xl font-sans transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 active:scale-95">
                See features
                <ChevronRight size={18} />
              </button>
              <button className="px-8 py-4 rounded-xl font-sans text-slate-600 hover:bg-white transition-colors">
                Read Whitepaper
              </button>
            </div>
          </div>

          {/* Right Illustration Placeholder */}
          <div className="relative">
            {/* Decorative Backglow */}
            <div className="absolute inset-0 bg-blue-400 blur-[100px] opacity-20 rounded-full" />

            <div className="relative h-[400px] lg:h-[500px] bg-gradient-to-br from-white to-blue-50 border border-white rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden">
              <div className="flex flex-col items-center text-blue-200">
                <ShieldCheck size={120} strokeWidth={0.5} />
                <span className="mt-4 font-sans text-blue-300 uppercase tracking-widest">
                  Secure Infrastructure
                </span>
              </div>

              {/* Abstract UI Elements to make it feel "real" */}
              <div className="absolute top-8 left-8 w-32 h-2 bg-blue-100 rounded-full" />
              <div className="absolute top-14 left-8 w-20 h-2 bg-blue-50 rounded-full" />
              <div className="absolute bottom-8 right-8 w-16 h-16 border-4 border-blue-100 rounded-full opacity-50" />
            </div>
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
                <div className="mb-3 text-blue-600">
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
          <div className={`max-w-6xl mx-auto grid md:grid-cols-2 gap-16 lg:gap-24 items-center ${
            i % 2 !== 0 ? "md:flex-row-reverse" : ""
          }`}>
            
            {/* IMAGE SIDE */}
            <div className={`relative group ${i % 2 !== 0 ? "md:order-2" : ""}`}>
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
                    <div className="mt-1 bg-blue-50 p-1 rounded-full">
                      <CheckCircle2 className="text-blue-600" size={18} strokeWidth={2.5} />
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
            We employ multi-layered defense strategies to ensure your clinical data 
            remains isolated, encrypted, and available only to authorized personnel.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {securityFeatures.map((item, i) => (
            <div 
              key={i} 
              className="group bg-white p-10 rounded-2xl border border-slate-200 transition-colors duration-300 hover:border-blue-600 flex flex-col items-start"
            >
              {/* Icon Container - No shadow, just clean fill */}
              <div className="mb-6 bg-blue-50 p-4 rounded-xl text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                <item.icon size={28} strokeWidth={2} />
              </div>

              {/* Text Content */}
              <h4 className="text-xl font-sans text-slate-900 mb-3 tracking-tight">
                {item.title}
              </h4>
              
              <p className="text-slate-600 leading-relaxed">
                {item.desc}
              </p>

              {/* Decorative detail instead of shadow */}
              <div className="mt-auto pt-8 w-full">
                <div className="h-1 w-8 bg-slate-100 group-hover:w-full group-hover:bg-blue-600 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


      {/* TESTIMONIALS */}
      <section className="py-20 px-6 bg-[#f8fafc]">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <div className="inline-block px-4 py-1 mb-4 text-sm font-sans text-blue-600 bg-blue-50 rounded-full">
            Testimonials
          </div>

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
              <Quote className="text-blue-500 mb-4" size={28} />

              {/* Text */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                “{t.text}”
              </p>

              {/* Divider */}
              <div className="border-t pt-4 flex items-center gap-3">
                {/* Avatar */}
                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-sm font-sans">
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
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-sans text-center mb-10">
            Frequently asked questions
          </h2>

          <div className="space-y-4">
            {faqs.map((q, i) => (
              <div key={i} className="border rounded-lg">
                <button
                  className="w-full flex justify-between items-center p-4"
                  onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                >
                  <span>{q}</span>
                  <ChevronDown
                    className={`transition ${
                      openFAQ === i ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openFAQ === i && (
                  <div className="px-4 pb-4 text-gray-600 text-sm">
                    This is a placeholder answer explaining the feature in
                    detail.
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-sans mb-4">
          Ready to see how HealVare can help your practice grow?
        </h2>

        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-sans">
          Book a demo
        </button>
      </section>
    </div>
  );
};

export default SecurityPage;
