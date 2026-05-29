import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CheckCircle2,
  ChevronDown,
  FileText,
  Droplets,
  Package,
  Activity,
  Star,
  Shield,
  Users,
  LineChart,
  Pill,
  Clock,
  ArrowUpRight,
  UserCircle,
  Repeat,
  ClipboardList,
  CalendarCheck,
  ShieldCheck,
  Smartphone,
  Receipt,
  BellRing,
  CalendarDays,
  Video,
  UserRound,
  Stethoscope,
} from "lucide-react";
import PricingTeaser from "@/components/PricingTeaser";
import { XCircle, ArrowRight } from "lucide-react";
// --- Local Components ---

const faqs = [
  {
    question: "Is this software suitable for fertility clinics?",
    answer:
      "Yes, it is designed for fertility clinics, supporting IVF cycles, patient tracking, and lab coordination.",
  },
  {
    question: "Can I track fertility treatment cycles?",
    answer:
      "Yes, you can track complete patient journeys including stimulation, retrieval, transfer, and follow-ups.",
  },
  {
    question: "Does it support IVF and other treatments?",
    answer:
      "Yes, it supports IVF, IUI, egg freezing, embryo transfer, and other fertility treatments.",
  },
  {
    question: "Can I manage lab workflows and reports?",
    answer:
      "Yes, you can track lab activities, embryo development, reports, and timelines in one system.",
  },
];

type PortalFeature = {
  title: string;
  desc: string;
  cta?: string;
  icon: any;
};

const portalFeatures: PortalFeature[] = [
  {
    title: "Let patients book consultations 24/7 without phone calls",
    desc: "Patients view real-time availability and book anytime. Automated SMS and email reminders reduce no-shows and keep your clinic schedule running smoothly.",
    cta: "Discover Online Bookings",
    icon: CalendarCheck,
  },
  {
    title: "Create and track complete fertility treatment cycles",
    desc: "Build structured treatment journeys covering initial consultation, stimulation, retrieval, transfer, and follow-up. Each stage is tracked automatically with full visibility.",
    icon: ClipboardList,
  },
  {
    title: "Manage recurring cycles and medication plans with ease",
    desc: "Set up repeat IVF cycles and medication schedules with automated billing — no manual invoicing or payment chasing.",
    icon: Repeat,
  },
  {
    title: "Run group education sessions and fertility workshops",
    desc: "Organise group information sessions, manage attendance, and handle registrations alongside individual appointments — all from one system.",
    icon: Users,
  },
  {
    title: "Give patients access to their fertility journey",
    desc: "Patients can view cycle notes, upcoming appointments, lab results, and shared resources — keeping them informed and engaged throughout treatment.",
    cta: "Discover Patient Portal",
    icon: UserCircle,
  },
];

const Prodfeatures = [
  {
    icon: Stethoscope,
    category: "Clinical",
    title: "Smart Consultation Notes",
    desc: "Create structured fertility consultation notes with hormone history, cycle data, and treatment planning documentation.",
  },
  {
    icon: FileText,
    category: "Clinical",
    title: "Centralised Patient Records",
    desc: "Access consultations, cycle histories, lab results, embryo reports, and treatment notes in one secure place.",
  },
  {
    icon: UserRound,
    category: "Patient",
    title: "Patient Portal",
    desc: "Patients can view appointments, invoices, cycle notes, lab results, and care resources anytime.",
  },
  {
    icon: Video,
    category: "Clinical",
    title: "Integrated Telehealth",
    desc: "Run secure virtual fertility consultations with built-in video and seamless patient access.",
  },
  {
    icon: CalendarDays,
    category: "Scheduling",
    title: "24/7 Online Booking",
    desc: "Let patients book consultations and cycle appointments anytime based on your live calendar availability.",
  },
  {
    icon: BellRing,
    category: "Scheduling",
    title: "Reminders & Follow-ups",
    desc: "Reduce missed appointments with automated SMS and email reminders for medications, scans, and procedures.",
  },
  {
    icon: Receipt,
    category: "Billing",
    title: "Billing & Invoicing",
    desc: "Generate invoices instantly, track payments, and manage multi-cycle treatment billing with ease.",
  },
  {
    icon: Repeat,
    category: "Practice",
    title: "Recurring Cycle Plans",
    desc: "Manage ongoing IVF programs, repeat cycles, and scheduled medication and monitoring appointments.",
  },
  {
    icon: Smartphone,
    category: "Practice",
    title: "Manage On the Go",
    desc: "Access schedules, patient cycle notes, and lab updates from anywhere on any device.",
  },
  {
    icon: ShieldCheck,
    category: "Practice",
    title: "Secure & Fully Compliant",
    desc: "Protect sensitive patient data with enterprise-grade security and GDPR-ready compliance.",
  },
];
// --- Main Page Component ---

export default function Fertility() {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [featureOpen, setFeatureOpen] = useState<number>(-1);
  return (
    <div className="bg-white font-sans selection:bg-[#009689]/30">
      {/* 1. Hero Section (Dark Theme) */}
      <section className="relative bg-slate-900 text-white overflow-hidden py-24 lg:py-0 lg:min-h-[700px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#009689]/20 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#009689]/10 border border-[#009689]/20 text-[#009689] text-sm font-sans mb-6">
                <span className="w-2 h-2 rounded-full bg-[#009689] animate-pulse"></span>
                Built for Fertility Clinics
              </div>
              <h1 className="text-4xl md:text-6xl font-sans tracking-tight leading-[1.1] mb-6">
                Advanced software for fertility clinics.
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
                Streamline fertility treatments, manage patient journeys, track
                cycles and outcomes, and deliver consistent care with one
                unified platform built for fertility clinics.{" "}
              </p>{" "}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigate("/book-demo")}
                  className="bg-[#009689] hover:bg-[#007a6e] text-white font-sans py-4 px-8 rounded-lg shadow-lg shadow-[#009689]/30 transition-all duration-300 text-lg"
                >
                  Schedule a demo
                </button>
                <button
                  onClick={() => navigate("/pricing")}
                  className="bg-transparent border border-slate-700 hover:border-slate-500 hover:bg-slate-800 text-white font-sans py-4 px-8 rounded-lg transition-all duration-300 text-lg"
                >
                  See pricing
                </button>
              </div>
            </div>

            <div className="relative lg:ml-10 flex items-end justify-center">
              {/* Doctor Image */}
              <div className="relative flex items-end justify-center">
                {/* Glow behind doctor */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[420px] h-[420px] rounded-full bg-[#009689]/10 blur-3xl pointer-events-none"></div>

                <img
                  src="/doctor.webp"
                  alt="Doctor"
                  className="relative z-10 w-full max-w-[600px] object-contain drop-shadow-2xl scale-100 origin-bottom translate-y-6"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-sans text-slate-900 leading-tight">
              Running a fertility clinic <br />
              <span className="text-slate-400 font-light italic">
                shouldn't feel disorganized.
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 border border-slate-200 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            {/* Problem Side */}
            <div className="p-12 bg-slate-50/50">
              <header className="flex items-center gap-3 mb-10">
                <div className="h-px w-8 bg-slate-300" />
                <p className="text-[10px] font-sans uppercase tracking-[0.3em] text-slate-400">
                  Legacy Workflows
                </p>
              </header>

              <ul className="space-y-8">
                {[
                  "Patient fertility records are scattered across systems",
                  "Cycle tracking and treatment history are hard to manage",
                  "Follow-ups and critical milestones get missed",
                  "No clear visibility into treatment workflows or lab coordination",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <XCircle className="w-5 h-5 text-slate-300 mt-0.5 stroke-[1.5px]" />
                    <span className="text-slate-500 text-base leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solution Side */}
            <div className="p-12 bg-white">
              <header className="flex items-center gap-3 mb-10">
                <div className="h-px w-8 bg-[#009689]" />
                <p className="text-[10px] font-sans uppercase tracking-[0.3em] text-[#009689] font-sans">
                  With Functional
                </p>
              </header>

              <ul className="space-y-8">
                {[
                  "Everything organized in one fertility-focused system",
                  "Track cycles, hormone levels, and treatment timelines",
                  "Automated reminders for appointments and medications",
                  "Real-time visibility into lab workflows and procedures",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="w-5 h-5 text-[#009689] mt-0.5 stroke-[2px]" />
                    <span className="text-slate-900 font-sans text-base leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-12 pt-8 border-t border-slate-100">
                <button className="flex items-center gap-2 text-[#009689] text-sm font-sans font-sans uppercase tracking-wider group">
                  See the platform in action
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-sans text-slate-900 mb-6">
              Everything you need to run and scale your fertility clinic
            </h2>
            <p className="text-lg text-slate-600">
              Automate workflows, track treatment outcomes, and improve patient
              retention — all from a platform built specifically for fertility
              clinics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: <Clock className="w-8 h-8 text-[#009689]" />,
                title: "Save time",
                description:
                  "Automate cycle tracking, documentation, and follow-ups so your team can focus on patient care instead of manual coordination.",
                stat: "4.2 hrs",
                statLabel: "saved per clinician per week",
              },
              {
                icon: <Activity className="w-8 h-8 text-[#009689]" />,
                title: "Improve outcomes",
                description:
                  "Track hormone levels, cycle progress, and treatment outcomes with structured timelines and insights.",
                stat: "89%",
                statLabel: "treatment success visibility",
              },
              {
                icon: <LineChart className="w-8 h-8 text-[#009689]" />,
                title: "Grow revenue",
                description:
                  "Increase repeat cycles and treatment adherence with automated reminders and structured care plans.",
                stat: "3.1x",
                statLabel: "average revenue growth",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-white border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="bg-[#009689]/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-sans text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {feature.description}
                </p>
                <div className="pt-6 border-t border-slate-100">
                  <p className="text-2xl font-sans text-[#009689]">
                    {feature.stat}
                  </p>
                  <p className="text-xs uppercase tracking-widest text-slate-400 font-sans mt-1">
                    {feature.statLabel}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Feature Showcase 1 (Paperless Consents & Medical Records) */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#009689]/10 to-transparent blur-3xl -z-10 rounded-full"></div>
              <div className="bg-white border border-slate-200 p-2 rounded-2xl shadow-xl relative z-10">
                <div className="aspect-square md:aspect-video lg:aspect-square bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center p-8">
                  <div className="w-full max-w-sm bg-white shadow-sm border border-slate-100 rounded-lg p-6">
                    <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-100">
                      <div className="w-16 h-16 bg-slate-200 rounded-full"></div>
                      <div>
                        <h4 className="text-lg font-sans text-slate-900">
                          Patient Chart
                        </h4>
                        <p className="text-sm text-slate-500">
                          Fertility Treatment Cycle
                        </p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-4 bg-slate-100 rounded w-full"></div>
                      <div className="h-4 bg-slate-100 rounded w-5/6"></div>
                      <div className="h-4 bg-slate-100 rounded w-4/6"></div>
                    </div>
                    <button className="w-full mt-6 bg-[#009689]/10 text-[#009689] font-sans py-2 rounded-md">
                      View Complete Record
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="w-12 h-12 bg-[#009689]/10 rounded-xl flex items-center justify-center mb-6">
                <FileText className="w-6 h-6 text-[#009689]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-sans text-slate-900 mb-6">
                Comprehensive records for fertility treatments
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Capture every step of the patient journey — from initial
                consultation to post-cycle follow-up care.
              </p>
              <ul className="space-y-5">
                {[
                  "Custom consultation forms for fertility treatments",
                  "Track IVF cycles, hormone levels, and medications",
                  "Monitor embryo development and lab results",
                  "Maintain detailed treatment and follow-up notes",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 text-[#009689]">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <span className="text-slate-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Feature Showcase 3 (Stock & Inventory Management) */}
      <section className="bg-slate-50 py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="w-12 h-12 bg-[#009689]/10 rounded-xl flex items-center justify-center mb-6">
                <Pill className="w-6 h-6 text-[#009689]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-sans text-slate-900 mb-6">
                Manage lab supplies, medications, and clinic inventory
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Track lab consumables, medications, and clinic inventory with
                full visibility.
              </p>

              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#009689]/20 flex items-center justify-center mt-1">
                    <Package className="w-5 h-5 text-[#009689]" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-sans text-slate-900">
                      Real-time tracking
                    </h4>
                    <p className="mt-1 text-slate-600">
                      Monitor stock levels of fertility medications, lab
                      consumables, and clinic supplies in real time
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#009689]/20 flex items-center justify-center mt-1">
                    <Droplets className="w-5 h-5 text-[#009689]" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-sans text-slate-900">
                      Batch & expiry tracking
                    </h4>
                    <p className="mt-1 text-slate-600">
                      Track batch numbers, lot details, and expiry dates for all
                      fertility medications and lab supplies
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#009689]/20 flex items-center justify-center mt-1">
                    <Activity className="w-5 h-5 text-[#009689]" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-sans text-slate-900">
                      Automated low-stock alerts
                    </h4>
                    <p className="mt-1 text-slate-600">
                      Get automated alerts for low-stock high-value items to
                      avoid treatment disruptions
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Inventory Table UI Mockup */}
            <div className="order-1 lg:order-2">
              <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200 overflow-hidden">
                <div className="bg-slate-50 p-4 border-b border-slate-100 flex justify-between items-center">
                  <span className="font-sans text-slate-800">
                    Live Inventory
                  </span>
                  <div className="px-3 py-1 bg-[#009689]/10 text-[#009689] text-xs font-sans rounded-full">
                    Updated Just Now
                  </div>
                </div>
                <div className="p-0">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-100">
                        <th className="p-4 text-xs font-sans text-slate-500 uppercase tracking-wider">
                          Item Name
                        </th>
                        <th className="p-4 text-xs font-sans text-slate-500 uppercase tracking-wider">
                          In Stock
                        </th>
                        <th className="p-4 text-xs font-sans text-slate-500 uppercase tracking-wider">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-sans text-slate-800">
                          FSH Injection Kits
                        </td>
                        <td className="p-4 text-slate-600 font-sans">
                          86 units
                        </td>
                        <td className="p-4">
                          <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-sans">
                            Healthy
                          </span>
                        </td>
                      </tr>
                      <tr className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-sans text-slate-800">
                          Embryo Culture Media
                        </td>
                        <td className="p-4 text-slate-600 font-sans">
                          9 units
                        </td>
                        <td className="p-4">
                          <span className="px-2 py-1 bg-amber-100 text-amber-700 rounded text-xs font-sans">
                            Low Stock
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-sans text-slate-800">
                          Lab Consumable Kits
                        </td>
                        <td className="p-4 text-slate-600 font-sans">
                          54 bags
                        </td>
                        <td className="p-4">
                          <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-sans">
                            Healthy
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-sans text-slate-800">
                          Surgical Consumable Kits
                        </td>
                        <td className="p-4 text-slate-600 font-sans">
                          85 bags
                        </td>
                        <td className="p-4">
                          <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-sans">
                            Healthy
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Accordion */}

      <section className="bg-slate-50 py-24 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT MOCKUP */}
          <div className="relative h-[420px] hidden lg:block">
            <div className="absolute left-0 top-8 w-56 bg-white rounded-2xl shadow-sm border border-slate-100 p-5">
              <p className="text-xs font-sans text-slate-500 mb-5">ACCOUNT</p>

              <div className="space-y-4 text-sm">
                <div className="text-[#009689] font-semibold">Dashboard</div>
                <div className="text-slate-400">Personal Details</div>
                <div className="text-slate-400">Payments</div>
                <div className="text-slate-400">Appointments</div>
                <div className="text-slate-400">Cycle Notes</div>
              </div>
            </div>

            <div className="absolute left-36 top-16 w-80 bg-slate-50 rounded-3xl border border-slate-200 shadow-lg p-6">
              <p className="text-xs font-sans text-[#009689] mb-6">
                UPCOMING APPOINTMENT
              </p>

              <h4 className="text-lg font-semibold text-slate-900">
                Dr. Aisha Patel
              </h4>
              <p className="text-slate-500 mb-6">
                Reproductive Endocrinologist
              </p>

              <div className="space-y-4 text-sm text-slate-600">
                <div>
                  <p className="text-xs uppercase">Service</p>
                  <p>IVF Cycle Consultation</p>
                </div>

                <div>
                  <p className="text-xs uppercase">Date</p>
                  <p>Friday 17th April</p>
                </div>

                <div>
                  <p className="text-xs uppercase">Time</p>
                  <p>12:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT ACCORDION */}
          <div className="max-w-2xl mx-auto space-y-3">
            {portalFeatures.map((item, i) => {
              const active = featureOpen === i;
              const Icon = item.icon; // Assuming you add icons to your data

              return (
                <div
                  key={i}
                  className={`transition-all duration-300 rounded-2xl border ${
                    active
                      ? "bg-white border-teal-100 shadow-[0_10px_30px_-10px_rgba(0,150,137,0.1)] shadow-teal-900/5"
                      : "bg-transparent border-transparent"
                  }`}
                >
                  <button
                    onClick={() => setFeatureOpen(active ? -1 : i)}
                    className="w-full flex items-center gap-5 py-5 px-6 text-left"
                  >
                    {/* Icon Wrapper */}
                    {Icon && (
                      <div
                        className={`flex shrink-0 items-center justify-center w-12 h-12 rounded-xl transition-colors duration-300 ${
                          active
                            ? "bg-teal-500 text-white"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        <Icon size={24} strokeWidth={2} />
                      </div>
                    )}

                    <div className="flex-1">
                      <span
                        className={`block text-lg transition-colors duration-300 ${
                          active
                            ? "font-sans text-slate-900"
                            : "font-medium text-slate-600"
                        }`}
                      >
                        {item.title}
                      </span>
                    </div>

                    {/* Animated Chevron */}
                    <ChevronDown
                      className={`transition-transform duration-300 text-slate-400 ${
                        active ? "rotate-180 text-teal-600" : ""
                      }`}
                      size={20}
                    />
                  </button>

                  {/* Content Area with smooth height feel */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      active ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-6 ml-[68px]">
                      {" "}
                      {/* Aligns text with the title, skipping icon width */}
                      <p className="text-slate-500 leading-relaxed text-[15px] mb-4">
                        {item.desc}
                      </p>
                      {item.cta && (
                        <button className="group flex items-center gap-1.5 text-teal-600 font-semibold text-sm hover:text-teal-700 transition-colors">
                          {item.cta}
                          <ArrowUpRight
                            size={16}
                            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}

      <section className="bg-white py-24 border-y border-slate-100">
        <style>{`

        .feat-card {
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .feat-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 32px -8px rgba(0,150,137,0.13);
        }
        .filter-btn {
          transition: background 0.15s, color 0.15s;
        }
       `}</style>

        <div
          style={{ fontFamily: "'DM Sans', sans-serif" }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          {/* Header */}
          <div className="max-w-2xl mb-14">
            <p className="text-xs uppercase tracking-[0.2em] text-[#009689] font-medium mb-3">
              Platform Features
            </p>
            <h2
              style={{ fontFamily: "'DM Serif Display', serif" }}
              className="text-4xl text-slate-900 leading-tight mb-4"
            >
              One platform for your
              <br />
              <em className="text-slate-400 font-normal">
                entire clinic workflow.
              </em>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              From the first patient interaction to billing and compliance —
              everything your team needs is already here.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Prodfeatures.map((Prodfeature, i) => {
              const Icon = Prodfeature.icon;
              return (
                <div
                  key={i}
                  className="feat-card bg-slate-50 border border-slate-100 rounded-2xl p-6 flex flex-col gap-4"
                >
                  {/* Top row */}
                  <div className="flex items-start justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#009689]/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-[#009689]" />
                    </div>
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-slate-900 font-semibold text-base mb-1.5">
                      {Prodfeature.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {Prodfeature.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <PricingTeaser />

      {/* 7. FAQ Section */}

      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-sans text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600">
              Common questions from fertility clinic owners.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`border rounded-2xl transition-all duration-300 overflow-hidden ${isOpen ? "border-[#009689]/50 bg-[#009689]/10/30 shadow-md" : "border-slate-200 bg-white hover:border-slate-300"}`}
                >
                  <button
                    className="w-full text-left px-6 py-6 flex justify-between items-center focus:outline-none"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span
                      className={`font-sans text-lg md:text-xl pr-8 ${isOpen ? "text-[#007a6e]" : "text-slate-800"}`}
                    >
                      {faq.question}
                    </span>
                    <span
                      className={`flex-shrink-0 transition-transform duration-300 transform ${isOpen ? "rotate-180 text-[#009689]" : "text-slate-400"}`}
                    >
                      <div
                        className={`p-1.5 rounded-full ${isOpen ? "bg-[#009689]/20" : "bg-slate-100"}`}
                      >
                        <ChevronDown className="w-5 h-5" />
                      </div>
                    </span>
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    <div className="px-6 pb-6 text-slate-600 text-lg leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Trust & Stats Section (Dark Theme) */}
      <section className="bg-slate-900 py-24 text-white relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#009689]/5 blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center divide-y lg:divide-y-0 lg:divide-x divide-slate-700 mb-20">
            <div className="py-4 lg:py-0">
              <Shield className="w-10 h-10 text-[#009689] mx-auto mb-4" />
              <p className="text-5xl font-sans mb-2">100%</p>
              <p className="text-sm text-slate-400 uppercase tracking-widest font-sans">
                HIPAA Compliant
              </p>
            </div>
            <div className="py-4 lg:py-0">
              <Activity className="w-10 h-10 text-[#009689] mx-auto mb-4" />
              <p className="text-5xl font-sans mb-2">1M+</p>
              <p className="text-sm text-slate-400 uppercase tracking-widest font-sans">
                Treatments Logged
              </p>
            </div>
            <div className="py-4 lg:py-0">
              <Users className="w-10 h-10 text-[#009689] mx-auto mb-4" />
              <p className="text-5xl font-sans mb-2">92%</p>
              <p className="text-sm text-slate-400 uppercase tracking-widest font-sans">
                Patient Retention
              </p>
            </div>
            <div className="py-4 lg:py-0">
              <LineChart className="w-10 h-10 text-[#009689] mx-auto mb-4" />
              <p className="text-5xl font-sans mb-2">3.5x</p>
              <p className="text-sm text-slate-400 uppercase tracking-widest font-sans">
                Avg. ROI Increase
              </p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-slate-800 border border-slate-700 rounded-3xl p-8 md:p-12 text-center shadow-2xl">
            <div className="flex justify-center text-yellow-500 mb-6 gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 fill-current" />
              ))}
            </div>
            <p className="text-2xl md:text-3xl leading-snug font-sans text-slate-200 mb-8 italic">
              "This platform has transformed how we manage fertility treatments.
              From cycle tracking to lab coordination, everything is seamless,
              structured, and built for precision."
            </p>
            <div>
              <h4 className="font-sans text-xl text-white">Dr. Aisha Patel</h4>
              <p className="text-[#009689] font-sans">
                Clinical Director, Bloom Fertility Centre
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Bottom CTA Banner */}
      <section className="bg-slate-900 py-24 border-t border-slate-800 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-t from-[#009689]/10 to-transparent pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-sans text-white mb-6">
            Ready to modernize your fertility clinic?
          </h2>

          <p className="text-xl text-slate-300 mb-10">
            Join leading fertility clinics delivering structured patient care,
            improving cycle outcomes, and scaling their practice with
            confidence.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => navigate("/book-demo")}
              className="bg-[#009689] hover:bg-[#007a6e] text-white font-sans py-4 px-10 rounded-lg shadow-lg shadow-[#009689]/30 transition-all duration-300 text-lg"
            >
              Schedule a demo
            </button>

            <button
              onClick={() => navigate("/pricing")}
              className="bg-white hover:bg-slate-50 text-slate-900 font-sans py-4 px-10 rounded-lg transition-all duration-300 text-lg"
            >
              See pricing
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
