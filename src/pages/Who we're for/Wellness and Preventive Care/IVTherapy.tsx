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
  ArrowRight,
  XCircle,
  Calendar,
  CalendarCheck,
  UserCircle,
  ArrowUpRight,
  CreditCard,
  BellRing,
  FolderOpen,
} from "lucide-react";
import PricingTeaser from "@/components/PricingTeaser";

const faqs = [
  {
    question: "Is this software suitable for IV therapy clinics?",
    answer:
      "Yes, the platform is specifically designed for IV therapy clinics with tailored workflows, consent forms, and inventory tracking.",
  },
  {
    question: "Can I manage patient records securely?",
    answer:
      "Absolutely. All patient data is encrypted and stored securely with full compliance to healthcare data standards.",
  },
  {
    question: "Does it support online bookings and payments?",
    answer:
      "Yes, patients can book appointments online and you can accept payments seamlessly through the platform.",
  },
  {
    question: "Can I track inventory for IV supplies?",
    answer:
      "Yes, you can track stock levels, batch numbers, and expiry dates in real time.",
  },
];

const features = [
  {
    title: "Smart scheduling & chair management",
    description:
      "Manage bookings, walk-ins, and chair availability in real time. Keep your clinic running smoothly even during peak hours.",
    icon: <Calendar className="w-8 h-8 text-[#009689]" />,
  },
  {
    title: "Digital consents & patient records",
    description:
      "Capture intake forms, IV-specific consents, and treatment history digitally — all securely stored and instantly accessible.",
    icon: <FileText className="w-8 h-8 text-[#009689]" />,
  },
  {
    title: "IV treatment & drip tracking",
    description:
      "Standardize IV protocols, track dosages, and monitor treatments to ensure consistent, high-quality patient care.",
    icon: <Droplets className="w-8 h-8 text-[#009689]" />,
  },
];

type PlatformCapability = {
  title: string;
  desc: string;
  cta?: string;
  icon: any;
};

const platformCapabilities: PlatformCapability[] = [
  {
    title: "Let patients book IV treatments 24/7",
    desc: "Allow clients to book IV drips, add-ons, and follow-ups online based on real-time availability. Reduce front-desk workload and eliminate scheduling conflicts.",
    cta: "Explore Online Booking",
    icon: CalendarCheck,
  },
  {
    title: "Capture digital consents & treatment records",
    desc: "Collect IV-specific consent forms and store detailed treatment notes securely. Access patient history instantly before every session.",
    cta: "View Patient Records",
    icon: FileText,
  },
  {
    title: "Standardize IV protocols & drip delivery",
    desc: "Create consistent IV treatment protocols with predefined dosages and add-ons. Ensure every patient receives safe, repeatable care.",
    icon: Droplets,
  },
  {
    title: "Track inventory for IV supplies in real time",
    desc: "Monitor IV fluids, vitamins, and consumables with live stock updates, batch tracking, and expiry alerts to avoid shortages or waste.",
    icon: Package,
  },
  {
    title: "Handle payments, packages & memberships",
    desc: "Accept payments, sell IV packages, and offer memberships to boost retention and create predictable recurring revenue.",
    icon: CreditCard,
  },
  {
    title: "Give patients a seamless clinic experience",
    desc: "From booking to checkout, deliver a smooth, professional journey. Patients can view appointments, treatment history, and receipts in one place.",
    cta: "Explore Patient Portal",
    icon: UserCircle,
  },
];

const Prodfeatures = [
  {
    icon: CalendarCheck,
    title: "24/7 Online Booking",
    desc: "Let patients book IV drips, add-ons, and follow-ups online based on real-time chair and staff availability.",
  },
  {
    icon: FileText,
    title: "Digital Consents & Intake Forms",
    desc: "Capture IV-specific consent forms and patient health histories digitally before every session.",
  },
  {
    icon: Droplets,
    title: "IV Protocol & Drip Tracking",
    desc: "Standardize IV treatments with predefined protocols, dosages, and add-ons for consistent, safe care.",
  },
  {
    icon: Package,
    title: "Inventory & Stock Management",
    desc: "Track IV fluids, vitamins, and consumables in real time with batch numbers, expiry alerts, and low-stock notifications.",
  },
  {
    icon: FolderOpen,
    title: "Centralized Patient Records",
    desc: "Store treatment history, consents, and clinical notes securely in one place, accessible before every session.",
  },
  {
    icon: UserCircle,
    title: "Patient Portal",
    desc: "Give patients access to their appointments, treatment history, and receipts through a dedicated portal.",
  },
  {
    icon: CreditCard,
    title: "Payments, Packages & Memberships",
    desc: "Accept payments, sell IV session bundles, and offer memberships to boost retention and recurring revenue.",
  },
  {
    icon: BellRing,
    title: "Automated Reminders & Follow-ups",
    desc: "Reduce no-shows and keep patients coming back with automated SMS and email reminders.",
  },
  {
    icon: Shield,
    title: "Secure & Compliant Platform",
    desc: "Protect sensitive patient data with enterprise-grade security and full HIPAA/GDPR compliance.",
  },
];
// --- Main Page Component ---

export default function IVTherapy() {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [featureOpen, setFeatureOpen] = useState<number>(0);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#009689]/30">
      {/* 1. Hero Section (Dark Theme) */}

      <section className="relative bg-slate-900 text-white overflow-hidden py-24 lg:py-0 lg:min-h-[700px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#009689]/20 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#009689]/10 border border-[#009689]/20 text-[#009689] text-sm font-semibold mb-6">
                <span className="w-2 h-2 rounded-full bg-[#009689] animate-pulse"></span>
                Built for IV Therapy Clinics
              </div>
              <h1 className="text-4xl md:text-6xl font-sans tracking-tight leading-[1.1] mb-6">
                Streamline your IV therapy practice operations.
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
                Save hours of admin time, manage patient flow effortlessly, and
                deliver exceptional care with the all-in-one software designed
                specifically for IV drip and vitamin therapy clinics.
              </p>
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
              Even the best IV therapy clinics hit a ceiling
              <br />
              <span className="text-slate-400 font-light italic">
                when operations can’t keep up with patient demand.
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 border border-slate-200 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            {/* Problem Side */}
            <div className="p-12 bg-slate-50/50">
              <header className="flex items-center gap-3 mb-10">
                <div className="h-px w-8 bg-slate-300" />
                <p className="text-[10px] font-sans uppercase tracking-[0.3em] text-slate-400">
                  Challenges for IV Therapy Clinics
                </p>
              </header>

              <ul className="space-y-8">
                {[
                  "Appointments, walk-ins, and chair availability managed across disconnected systems",
                  "Patient notes, consent forms, and treatment history scattered or paper-based",
                  "Manual tracking of IV drips, vitamins, and consumables leading to stock issues",
                  "Time lost coordinating bookings, treatments, and payments during busy clinic hours",
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
                <p className="text-[10px] font-sans uppercase tracking-[0.3em] text-[#009689] font-semibold">
                  With your IV therapy platform
                </p>
              </header>

              <ul className="space-y-8">
                {[
                  "Smart scheduling with real-time chair and staff availability",
                  "Centralized patient records with digital consents and treatment history",
                  "Automated inventory tracking for IV drips, vitamins, and supplies",
                  "Seamless flow from booking → treatment → checkout in one system",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="w-5 h-5 text-[#009689] mt-0.5 stroke-[2px]" />
                    <span className="text-slate-900 font-medium text-base leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-12 pt-8 border-t border-slate-100">
                <button className="flex items-center gap-2 text-[#009689] text-sm font-sans uppercase tracking-wider group">
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
              Everything you need to run and scale your IV therapy clinic
              without operational friction.
            </h2>
            <p className="text-lg text-slate-600">
              From bookings and chair management to treatment delivery,
              payments, and inventory — manage your entire IV drip clinic in one
              connected, easy-to-use system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-white border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="bg-[#009689]/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <div className="text-[#009689]">{feature.icon}</div>
                </div>

                <h3 className="text-xl font-sans text-slate-900 mb-3">
                  {feature.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
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
                          IV Hydration Session
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
                Paperless consents & medical records
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Streamline patient onboarding with digital intake forms and IV
                therapy-specific consent documents. Keep detailed, secure
                medical histories accessible anywhere.
              </p>

              <ul className="space-y-5">
                {[
                  "Customizable digital consent forms for IV drips",
                  "Secure, HIPAA-compliant patient charting",
                  "Automated intake forms sent before appointments",
                  "Quick access to medical history and vitals",
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
                Precision stock & inventory management
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Never run out of critical supplies. Track every IV bag, vitamin
                vial, and syringe right down to the exact dosage. Optimize your
                ordering and reduce costly waste.
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
                      Instantly view stock levels for IV liquids and vitamins
                      across your entire clinic.
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
                      Ensure strict compliance by tracking batch numbers and
                      expiry dates automatically.
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
                      Get notified immediately when vital supplies are running
                      low so you can reorder in time.
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
                          Vitamin C (Ascorbic Acid)
                        </td>
                        <td className="p-4 text-slate-600 font-medium">
                          450ml
                        </td>
                        <td className="p-4">
                          <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-sans">
                            Healthy
                          </span>
                        </td>
                      </tr>
                      <tr className="border-b border-slate-50 hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-sans text-slate-800">
                          Glutathione Vials
                        </td>
                        <td className="p-4 text-slate-600 font-medium">
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
                          Saline 500ml Bags
                        </td>
                        <td className="p-4 text-slate-600 font-medium">
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

      <section className="bg-slate-50 py-24 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[420px] hidden lg:block">
            <img
              src="/iv therapy.png"
              alt="IV Therapy Dashboard"
              className="w-full h-full object-contain rounded-2xl"
            />
          </div>

          {/* RIGHT ACCORDION */}
          <div className="max-w-2xl mx-auto space-y-3">
            {platformCapabilities.map((item, i) => {
              const active = featureOpen === i;
              const Icon = item.icon;

              return (
                <div
                  key={i}
                  className={`transition-all duration-300 rounded-2xl border ${
                    active
                      ? "bg-white border-teal-100 shadow-[0_10px_30px_-10px_rgba(0,150,137,0.1)]"
                      : "bg-transparent border-transparent"
                  }`}
                >
                  <button
                    onClick={() => setFeatureOpen(active ? -1 : i)}
                    className="w-full flex items-center gap-5 py-5 px-6 text-left"
                  >
                    {Icon && (
                      <div
                        className={`flex items-center justify-center w-12 h-12 rounded-xl ${
                          active
                            ? "bg-teal-500 text-white"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        <Icon size={24} />
                      </div>
                    )}

                    <div className="flex-1">
                      <span
                        className={`block text-lg ${
                          active
                            ? "text-slate-900"
                            : "text-slate-600 font-medium"
                        }`}
                      >
                        {item.title}
                      </span>
                    </div>

                    <ChevronDown
                      className={`transition-transform duration-300 ${
                        active ? "rotate-180 text-teal-600" : "text-slate-400"
                      }`}
                      size={20}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      active ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-6 ml-[68px]">
                      <p className="text-slate-500 text-[15px] mb-4">
                        {item.desc}
                      </p>

                      {item.cta && (
                        <button className="flex items-center gap-1.5 text-teal-600 font-semibold text-sm">
                          {item.cta}
                          <ArrowUpRight size={16} />
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

      <section className="bg-white py-24 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-2xl mb-14">
            <p className="text-xs uppercase tracking-[0.2em] text-[#009689] font-medium mb-3">
              Platform Features
            </p>
            <h2 className="text-4xl text-slate-900 leading-tight mb-4">
              Everything you need to run
              <br />
              <em className="text-slate-400 font-normal">
                a seamless IV therapy clinic.
              </em>
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              From bookings and consents to drip tracking, inventory, and
              payments, manage your entire IV clinic in one connected platform.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Prodfeatures.map((Prodfeature, i) => {
              const Icon = Prodfeature.icon;

              return (
                <div
                  key={i}
                  className="bg-slate-50 border border-slate-100 rounded-2xl p-6 flex flex-col gap-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#009689]/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#009689]" />
                  </div>

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

      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-sans text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600">
              Common questions from IV therapy clinic owners.
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
              <p className="text-sm text-slate-400 uppercase tracking-widest font-medium">
                HIPAA & GDPR Compliant
              </p>
            </div>
            <div className="py-4 lg:py-0">
              <Activity className="w-10 h-10 text-[#009689] mx-auto mb-4" />
              <p className="text-5xl font-sans mb-2">1M+</p>
              <p className="text-sm text-slate-400 uppercase tracking-widest font-medium">
                Treatments Logged
              </p>
            </div>
            <div className="py-4 lg:py-0">
              <Users className="w-10 h-10 text-[#009689] mx-auto mb-4" />
              <p className="text-5xl font-sans mb-2">92%</p>
              <p className="text-sm text-slate-400 uppercase tracking-widest font-medium">
                Patient Retention
              </p>
            </div>
            <div className="py-4 lg:py-0">
              <LineChart className="w-10 h-10 text-[#009689] mx-auto mb-4" />
              <p className="text-5xl font-sans mb-2">3.5x</p>
              <p className="text-sm text-slate-400 uppercase tracking-widest font-medium">
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
            <p className="text-2xl md:text-3xl leading-snug font-medium text-slate-200 mb-8 italic">
              "Managing our IV therapy clinic became effortless. Bookings,
              patient records, and inventory are all in one place — we've saved
              hours every week and improved patient experience dramatically."
            </p>
            <div>
              <h4 className="font-sans text-xl text-white">Dr. Marcus Chen</h4>
              <p className="text-[#009689] font-medium">
                Clinic Director, London IV Therapy Centre
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
            Ready to grow your IV therapy clinic?
          </h2>

          <p className="text-xl text-slate-300 mb-10">
            Join leading IV drip clinics streamlining bookings, managing
            treatments effortlessly, and boosting revenue with an all-in-one
            platform.
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
