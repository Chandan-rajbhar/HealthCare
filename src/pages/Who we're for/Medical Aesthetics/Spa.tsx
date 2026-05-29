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
  XCircle,
  ArrowRight,
  UserCircle,
  Repeat,
  ClipboardList,
  CalendarCheck,
  ArrowUpRight,
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

// --- Local Components ---

const faqs = [
  {
    question: "Is this software suitable for day spas and wellness centres?",
    answer:
      "Yes, it is designed for spas and wellness businesses, supporting treatment bookings, membership management, therapist scheduling, and client records.",
  },
  {
    question: "Can I manage treatment packages and session tracking?",
    answer:
      "Yes, you can sell multi-session packages and automatically track usage so guests and staff always know remaining visits.",
  },
  {
    question: "Does it support memberships and recurring billing?",
    answer:
      "Yes, set up monthly or annual wellness memberships with automated billing and renewal reminders.",
  },
  {
    question: "Can I manage multiple therapists and treatment rooms?",
    answer:
      "Yes, manage therapist availability, room assignments, and scheduling across your entire spa from one dashboard.",
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
    title: "Let guests book treatments 24/7 without phone calls",
    desc: "Guests view real-time therapist availability and book anytime. Automated SMS and email reminders reduce no-shows and keep your treatment rooms full.",
    cta: "Discover Online Bookings",
    icon: CalendarCheck,
  },
  {
    title: "Sell treatment packages and track sessions automatically",
    desc: "Create structured wellness packages and session bundles. Each visit is tracked automatically with clear visibility into completed and remaining treatments.",
    icon: ClipboardList,
  },
  {
    title: "Manage memberships and recurring plans with ease",
    desc: "Set up ongoing wellness memberships with automated billing — no manual invoicing or payment chasing.",
    icon: Repeat,
  },
  {
    title: "Run group classes and wellness workshops",
    desc: "Organise group yoga, meditation, or beauty sessions, manage attendance, and handle registrations alongside individual bookings — all from one system.",
    icon: Users,
  },
  {
    title: "Give guests access to their wellness journey",
    desc: "Guests can view treatment history, upcoming appointments, package balances, and aftercare recommendations — keeping them engaged between visits.",
    cta: "Discover Guest Portal",
    icon: UserCircle,
  },
];

const Prodfeatures = [
  {
    icon: Stethoscope,
    category: "Clinical",
    title: "Smart Treatment Notes",
    desc: "Create structured treatment notes with client preferences, contraindications, and therapist observations after every session.",
  },
  {
    icon: FileText,
    category: "Clinical",
    title: "Centralised Client Records",
    desc: "Access intake forms, treatment history, product preferences, and visit notes in one secure place.",
  },
  {
    icon: UserRound,
    category: "Guest",
    title: "Guest Portal",
    desc: "Guests can view appointments, invoices, package balances, and aftercare resources anytime.",
  },
  {
    icon: Video,
    category: "Clinical",
    title: "Virtual Consultations",
    desc: "Run secure online skin or wellness consultations with built-in video and seamless guest access.",
  },
  {
    icon: CalendarDays,
    category: "Scheduling",
    title: "24/7 Online Booking",
    desc: "Let guests book treatments and therapists anytime based on live availability.",
  },
  {
    icon: BellRing,
    category: "Scheduling",
    title: "Reminders & Follow-ups",
    desc: "Reduce no-shows and drive rebookings with automated SMS and email reminders.",
  },
  {
    icon: Receipt,
    category: "Billing",
    title: "Billing & Invoicing",
    desc: "Generate invoices instantly, track payments, and manage membership and package billing.",
  },
  {
    icon: Repeat,
    category: "Practice",
    title: "Memberships & Packages",
    desc: "Manage ongoing wellness memberships, session bundles, and scheduled repeat bookings.",
  },
  {
    icon: Smartphone,
    category: "Practice",
    title: "Manage On the Go",
    desc: "Access schedules, guest notes, and room availability from anywhere on any device.",
  },
  {
    icon: ShieldCheck,
    category: "Practice",
    title: "Secure & Fully Compliant",
    desc: "Protect guest data with enterprise-grade security and GDPR-ready compliance.",
  },
];

// --- Main Page Component ---

export default function Spa() {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [featureOpen, setFeatureOpen] = useState<number | null>(null);
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#009689]/30">
      {/* 1. Hero Section (Dark Theme) */}
      <section className="relative bg-slate-900 text-white overflow-hidden py-24 lg:py-0 lg:min-h-[700px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#009689]/20 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#009689]/10 border border-[#009689]/20 text-[#009689] text-sm font-sans mb-6">
                <span className="w-2 h-2 rounded-full bg-[#009689] animate-pulse"></span>
                Built for Spas & Wellness Centres
              </div>
              <h1 className="text-4xl md:text-6xl font-sans tracking-tight leading-[1.1] mb-6">
                Modern software for spas and wellness centres.
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
                Streamline bookings, manage client wellness journeys, track
                treatment packages, and deliver premium guest experiences with
                one unified platform built for spas and wellness centres.{" "}
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
                  className="relative z-10 w-full max-w-[600px] object-contain drop-shadow-2xl origin-bottom translate-y-6"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section-2 */}

      <section className="bg-white py-24 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-sans text-slate-900 leading-tight">
              Even the best spas hit a wall
              <br />
              <span className="text-slate-400 font-light italic">
                when admin work takes over.
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 border border-slate-200 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            {/* Problem Side */}
            <div className="p-12 bg-slate-50/50">
              <header className="flex items-center gap-3 mb-10">
                <div className="h-px w-8 bg-slate-300" />
                <p className="text-[10px] font-sans uppercase tracking-[0.3em] text-slate-400">
                  Challenges for Spas & Wellness Centres
                </p>
              </header>

              <ul className="space-y-8">
                {[
                  "Hours lost managing bookings, cancellations, and therapist scheduling manually",
                  "Client records and treatment preferences spread across disconnected systems",
                  "Billing delays and membership errors slowing down revenue flow",
                  "Too much admin reducing time for guest care and treatment delivery",
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
                  With your all-in-one spa platform
                </p>
              </header>

              <ul className="space-y-8">
                {[
                  "Bookings, cancellations, and reminders handled automatically",
                  "Secure digital client profiles, treatment history, and preferences in one place",
                  "Faster invoicing, smoother membership billing, and stronger revenue flow",
                  "More time to focus on guest experiences instead of administrative work",
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
              Everything you need to run and grow your spa
            </h2>
            <p className="text-lg text-slate-600">
              Automate workflows, track treatment packages, and improve guest
              retention — all from a platform built specifically for spas and
              wellness centres.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: <Clock className="w-8 h-8 text-[#009689]" />,
                title: "Save time",
                description:
                  "Automate booking management, treatment logs, and client follow-ups so your team can focus on delivering exceptional guest experiences.",
                stat: "3.4 hrs",
                statLabel: "saved per therapist per week",
              },
              {
                icon: <Activity className="w-8 h-8 text-[#009689]" />,
                title: "Improve retention",
                description:
                  "Track client treatment history and preferences to deliver personalised experiences that keep guests coming back.",
                stat: "89%",
                statLabel: "client retention rate",
              },
              {
                icon: <LineChart className="w-8 h-8 text-[#009689]" />,
                title: "Grow revenue",
                description:
                  "Increase spend per visit with membership plans, treatment packages, and automated rebooking reminders.",
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
                          Client Profile
                        </h4>
                        <p className="text-sm text-slate-500">
                          Spa Treatment Session
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
                Comprehensive records for every spa treatment
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Capture every step of the client journey — from intake forms to
                post-treatment follow-ups.
              </p>
              <ul className="space-y-5">
                {[
                  "Custom intake forms for wellness and spa treatments",
                  "Track treatment packages, sessions used, and remaining visits",
                  "Client preference notes and contraindication records",
                  "Maintain detailed treatment and aftercare notes per visit",
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
                Manage spa products, consumables, and treatment inventory
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Track massage oils, skincare products, and treatment consumables
                with full visibility.
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
                      Monitor stock levels of skincare products, oils, and
                      treatment consumables in real time
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
                      spa and skincare supplies
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
                          Massage Oil Sets
                        </td>
                        <td className="p-4 text-slate-600 font-sans">
                          48 units
                        </td>
                        <td className="p-4">
                          <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-sans">
                            Healthy
                          </span>
                        </td>
                      </tr>
                      <tr className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-sans text-slate-800">
                          Facial Sheet Masks
                        </td>
                        <td className="p-4 text-slate-600 font-sans">
                          14 units
                        </td>
                        <td className="p-4">
                          <span className="px-2 py-1 bg-amber-100 text-amber-700 rounded text-xs font-sans">
                            Low Stock
                          </span>
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-sans text-slate-800">
                          Treatment Consumable Kits
                        </td>
                        <td className="p-4 text-slate-600 font-sans">
                          62 bags
                        </td>
                        <td className="p-4">
                          <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-sans">
                            Healthy
                          </span>
                        </td>
                      </tr>
                      <tr className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-sans text-slate-800">
                          Implanter Pens
                        </td>
                        <td className="p-4 text-slate-600 font-sans">
                          12 units
                        </td>
                        <td className="p-4">
                          <span className="px-2 py-1 bg-amber-100 text-amber-700 rounded text-xs font-sans">
                            Low Stock
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
                <div className="text-slate-400">Treatment Notes</div>
              </div>
            </div>

            <div className="absolute left-36 top-16 w-80 bg-slate-50 rounded-3xl border border-slate-200 shadow-lg p-6">
              <p className="text-xs font-sans text-[#009689] mb-6">
                UPCOMING APPOINTMENT
              </p>

              <h4 className="text-lg font-semibold text-slate-900">
                Sophie Hartley
              </h4>
              <p className="text-slate-500 mb-6">Senior Spa Therapist</p>

              <div className="space-y-4 text-sm text-slate-600">
                <div>
                  <p className="text-xs uppercase">Service</p>
                  <p>Doctor</p>
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

      {/* Pricing Section */}
      <PricingTeaser />

      {/* 7. FAQ Section */}

      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-sans text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600">
              Common questions from aesthetic clinic owners.
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
              "This platform has transformed how we run our spa. From bookings
              to membership billing, everything is seamless, beautifully
              organised, and built for guest-first businesses."
            </p>
            <div>
              <h4 className="font-sans text-xl text-white">Emma Caldwell</h4>
              <p className="text-[#009689] font-sans">
                Owner, Serenity Wellness Spa
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
            Ready to modernize your spa?
          </h2>

          <p className="text-xl text-slate-300 mb-10">
            Join leading spas and wellness centres delivering exceptional guest
            experiences, improving retention, and growing their business with
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
