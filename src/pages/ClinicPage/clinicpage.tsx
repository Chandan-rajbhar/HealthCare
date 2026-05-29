// // "use client";
// // import { Button } from "@/components/ui/button";
// // import { Card, CardContent } from "@/components/ui/card";
// // import { motion } from "framer-motion";
// // import {
// //   ArrowUpRight,
// //   Stethoscope,
// //   Calendar,
// //   TrendingUp,
// //   Users,
// //   CheckCircle2,
// // } from "lucide-react";

// // const cards = [
// //   {
// //     badge: "Patient Care & Records",
// //     icon: Stethoscope,
// //     color: "cyan",
// //     bg: "bg-cyan-50/50",
// //     border: "border-cyan-100",
// //     accent: "bg-cyan-600",
// //     text: "text-cyan-700",
// //     title: "Bring all clinical decisions into one hub",
// //     description: "Unify consultations, histories, and prescriptions in a secure system.",
// //     bullets: [
// //       "Document structured notes during visits",
// //       "Issue and track prescriptions",
// //       "Order labs and receive results",
// //       "Share compliant records safely",
// //     ],
// //     cta: "Discover patient care",
// //     link: "/patient-care",
// //   },
// //   {
// //     badge: "Scheduling & Payments",
// //     icon: Calendar,
// //     color: "purple",
// //     bg: "bg-purple-50/50",
// //     border: "border-purple-100",
// //     accent: "bg-purple-600",
// //     text: "text-purple-700",
// //     title: "Smooth patient flow from booking to billing",
// //     description: "Enhance the journey with online scheduling and integrated payments.",
// //     bullets: [
// //       "24/7 online booking with live slots",
// //       "Smart reminders to reduce no‑shows",
// //       "Integrated checkout & digital invoicing",
// //       "Built-in deposits and memberships",
// //     ],
// //     cta: "Discover scheduling",
// //     link: "/scheduling",
// //   },
// //   {
// //     badge: "Team & Operations",
// //     icon: Users,
// //     color: "orange",
// //     bg: "bg-orange-50/50",
// //     border: "border-orange-100",
// //     accent: "bg-orange-600",
// //     text: "text-orange-700",
// //     title: "Run your practice with one intuitive system",
// //     description: "Coordinate staff schedules and automated workflows in one platform.",
// //     bullets: [
// //       "Role‑based access management",
// //       "Easy staff scheduling & shifts",
// //       "Clear task assignments",
// //       "Automated admin processes",
// //     ],
// //     cta: "Discover operations",
// //     link: "/operations",
// //   },
// //   {
// //     badge: "Growth & Insights",
// //     icon: TrendingUp,
// //     color: "emerald",
// //     bg: "bg-emerald-50/50",
// //     border: "border-emerald-100",
// //     accent: "bg-emerald-600",
// //     text: "text-emerald-700",
// //     title: "Grow smarter with actionable insights",
// //     description: "Monitor revenue and performance from one unified dashboard.",
// //     bullets: [
// //       "Instant access to KPI reports",
// //       "Boost patient lifetime value",
// //       "Built-in email and SMS marketing",
// //       "Loyalty and referral programs",
// //     ],
// //     cta: "Discover growth",
// //     link: "/growth",
// //   },
// // ];

// // export default function ClinicFeatures() {
// //   return (
// //     <div className="bg-slate-50/50 py-24 px-4 sm:px-6">
// //       {/* Section Header */}
// //       <div className="max-w-4xl mx-auto text-center mb-20">
// //        <h2 className="text-4xl md:text-5xl font-sans tracking-tight text-slate-900 mb-6">
// //           Holistic solutions for today’s medical teams
// //         </h2>
// //         <p className="text-xl text-slate-500">
// //           Everything you need to run a high-performing clinic, unified in one sleek interface.
// //         </p>
// //       </div>

// //       {/* Cards Container */}
// //       <div className="max-w-6xl mx-auto relative flex flex-col items-center gap-12">
// //         {cards.map((card, i) => (
// //           <div
// //             key={i}
// //             className="sticky w-full"
// //             style={{ top: `${80 + i * 40}px` }} // This creates the "peeking" stack effect
// //           >
// //             <motion.div
// //               initial={{ opacity: 0, y: 20 }}
// //               whileInView={{ opacity: 1, y: 0 }}
// //               viewport={{ once: true }}
// //               transition={{ duration: 0.5, delay: i * 0.1 }}
// //             >
// //               <Card className={`overflow-hidden border-none backdrop-blur-md bg-white/90`}>
// //                 <CardContent className="p-0">
// //                   <div className="flex flex-col md:flex-row items-stretch min-h-[480px]">
                    
// //                     {/* Left Side: Content */}
// //                     <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
// //                       <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-sans uppercase tracking-[0.1em] ${card.bg} ${card.text} mb-6 border ${card.border} w-fit`}>
// //                         <card.icon className="w-4 h-4" />
// //                         {card.badge}
// //                       </div>
                      
// //                       <h3 className="text-3xl font-sans text-slate-900 mb-4 tracking-tight leading-tight">
// //                         {card.title}
// //                       </h3>
// //                       <p className="text-slate-500 text-lg mb-8 leading-relaxed">
// //                         {card.description}
// //                       </p>

// //                       <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
// //                         {card.bullets.map((bullet, idx) => (
// //                           <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm">
// //                             <CheckCircle2 className={`w-5 h-5 ${card.text} shrink-0`} />
// //                             {bullet}
// //                           </li>
// //                         ))}
// //                       </ul>

// //                       <Button 
// //                         variant="ghost" 
// //                         className={`group w-fit p-0 h-auto text-lg font-sans hover:bg-transparent ${card.text}`}
// //                       >
// //                         {card.cta}
// //                         <ArrowUpRight className="ml-2 w-5 h-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
// //                         <div className={`absolute bottom-0 left-0 w-full h-0.5 ${card.accent} origin-left scale-x-0 transition-transform group-hover:scale-x-100`} />
// //                       </Button>
// //                     </div>

// //                     {/* Right Side: Image/Visual */}
// //                     <div className={`flex-1 relative overflow-hidden bg-gradient-to-br ${card.bg} flex items-center justify-center p-8`}>
// //                        {/* Abstract Background Element */}
// //                        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full ${card.accent} opacity-10 blur-3xl`} />
                       
// //                        {/* Mockup "Image" */}
// //                        <div className="relative z-10 w-full aspect-video rounded-xl bg-white shadow-2xl border border-slate-200 p-2 transform transition-transform hover:scale-105 duration-500">
// //                           <div className="w-full h-full rounded-lg bg-slate-100 overflow-hidden relative">
// //                              <img 
// //                                src="https://pabau.com/wp-content/uploads/2026/02/card-img-1.webp" 
// //                                alt="UI Preview"
// //                                className="object-cover w-full h-full mix-blend-multiply opacity-80"
// //                              />
// //                              {/* Floating UI Elements Overlay */}
// //                              <div className="absolute top-4 right-4 h-12 w-32 rounded-lg bg-white shadow-lg border border-slate-100 flex items-center px-3 gap-2 animate-bounce">
// //                                 <div className={`h-2 w-2 rounded-full ${card.accent}`} />
// //                                 <div className="h-2 w-16 bg-slate-100 rounded" />
// //                              </div>
// //                           </div>
// //                        </div>
// //                     </div>

// //                   </div>
// //                 </CardContent>
// //               </Card>
// //             </motion.div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// "use client";

// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { motion } from "framer-motion";
// import {
//   ArrowUpRight,
//   Stethoscope,
//   Calendar,
//   TrendingUp,
//   Users,
//   CheckCircle2,
// } from "lucide-react";

// const cards = [
//   {
//     badge: "Patient Care & Records",
//     icon: Stethoscope,
//     color: "cyan",
//     bg: "bg-cyan-50/50",
//     border: "border-cyan-100",
//     accent: "bg-cyan-600",
//     text: "text-cyan-700",
//     title: "Bring all clinical decisions into one hub",
//     description: "Unify consultations, histories, and prescriptions in a secure system.",
//     // A doctor using a tablet to review a patient's digital medical chart
//     image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
//     bullets: [
//       "Document structured notes during visits",
//       "Issue and track prescriptions",
//       "Order labs and receive results",
//       "Share compliant records safely",
//     ],
//     cta: "Discover patient care",
//     link: "/patient-care",
//   },
//   {
//     badge: "Scheduling & Payments",
//     icon: Calendar,
//     color: "purple",
//     bg: "bg-purple-50/50",
//     border: "border-purple-100",
//     accent: "bg-purple-600",
//     text: "text-purple-700",
//     title: "Smooth patient flow from booking to billing",
//     description: "Enhance the journey with online scheduling and integrated payments.",
//     // A clean, modern medical reception desk or a person booking an appointment on a phone
//     image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1000&auto=format&fit=crop",
//     bullets: [
//       "24/7 online booking with live slots",
//       "Smart reminders to reduce no‑shows",
//       "Integrated checkout & digital invoicing",
//       "Built-in deposits and memberships",
//     ],
//     cta: "Discover scheduling",
//     link: "/scheduling",
//   },
//   {
//     badge: "Team & Operations",
//     icon: Users,
//     color: "orange",
//     bg: "bg-orange-50/50",
//     border: "border-orange-100",
//     accent: "bg-orange-600",
//     text: "text-orange-700",
//     title: "Run your practice with one intuitive system",
//     description: "Coordinate staff schedules and automated workflows in one platform.",
//     // Diverse medical team collaborating in a modern hallway or meeting room
//     image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=800",
//     bullets: [
//       "Role‑based access management",
//       "Easy staff scheduling & shifts",
//       "Clear task assignments",
//       "Automated admin processes",
//     ],
//     cta: "Discover operations",
//     link: "/operations",
//   },
//   {
//     badge: "Growth & Insights",
//     icon: TrendingUp,
//     color: "emerald",
//     bg: "bg-emerald-50/50",
//     border: "border-emerald-100",
//     accent: "bg-emerald-600",
//     text: "text-emerald-700",
//     title: "Grow smarter with actionable insights",
//     description: "Monitor revenue and performance from one unified dashboard.",
//     // Close up of a dashboard on a screen or a business professional analyzing healthcare data
//     image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
//     bullets: [
//       "Instant access to KPI reports",
//       "Boost patient lifetime value",
//       "Built-in email and SMS marketing",
//       "Loyalty and referral programs",
//     ],
//     cta: "Discover growth",
//     link: "/growth",
//   },
// ];

// export default function ClinicFeatures() {
//   return (
//     <div className="bg-slate-50/50 py-24 px-4 sm:px-6">
//       <div className="max-w-4xl mx-auto text-center mb-20">
//         <h2 className="text-4xl md:text-5xl font-sans tracking-tight text-slate-900 mb-6">
//           Holistic solutions for today’s medical teams
//         </h2>
//         <p className="text-xl text-slate-500">
//           Everything you need to run a high-performing clinic, unified in one sleek interface.
//         </p>
//       </div>

//       <div className="max-w-6xl mx-auto relative flex flex-col items-center gap-12">
//         {cards.map((card, i) => (
//           <div
//             key={i}
//             className="sticky w-full"
//             style={{ top: `${80 + i * 40}px` }}
//           >
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: i * 0.1 }}
//             >
//               <Card className="overflow-hidden border-none backdrop-blur-md bg-white/90 shadow-xl border border-slate-100">
//                 <CardContent className="p-0">
//                   <div className="flex flex-col md:flex-row items-stretch min-h-[480px]">
                    
//                     {/* Left Side: Content */}
//                     <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
//                       <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-sans uppercase tracking-[0.1em] ${card.bg} ${card.text} mb-6 border ${card.border} w-fit`}>
//                         <card.icon className="w-4 h-4" />
//                         {card.badge}
//                       </div>
                      
//                       <h3 className="text-3xl font-sans text-slate-900 mb-4 tracking-tight leading-tight">
//                         {card.title}
//                       </h3>
//                       <p className="text-slate-500 text-lg mb-8 leading-relaxed">
//                         {card.description}
//                       </p>

//                       <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
//                         {card.bullets.map((bullet, idx) => (
//                           <li key={idx} className="flex items-start gap-3 text-slate-600 text-sm">
//                             <CheckCircle2 className={`w-5 h-5 ${card.text} shrink-0`} />
//                             {bullet}
//                           </li>
//                         ))}
//                       </ul>

//                       <Button 
//                         variant="ghost" 
//                         className={`group w-fit p-0 h-auto text-lg font-sans hover:bg-transparent ${card.text} relative`}
//                       >
//                         {card.cta}
//                         <ArrowUpRight className="ml-2 w-5 h-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
//                         <div className={`absolute -bottom-1 left-0 w-full h-0.5 ${card.accent} origin-left scale-x-0 transition-transform group-hover:scale-x-100`} />
//                       </Button>
//                     </div>

//                     {/* Right Side: Stock Image Visual */}
//                     <div className={`flex-1 relative overflow-hidden bg-gradient-to-br ${card.bg} flex items-center justify-center p-8`}>
//                        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full ${card.accent} opacity-10 blur-3xl`} />
                       
//                        <div className="relative z-10 w-full aspect-video rounded-xl bg-white shadow-2xl border border-white/50 p-1 transform transition-transform hover:scale-[1.02] duration-500">
//                           <div className="w-full h-full rounded-lg bg-slate-100 overflow-hidden relative">
//                              <img 
//                                src={card.image} 
//                                alt={card.title}
//                                className="object-cover w-full h-full"
//                              />
//                              {/* Floating Decorative UI Element */}
//                              <div className="absolute bottom-4 left-4 h-14 w-40 rounded-xl bg-white/90 backdrop-blur-md shadow-lg border border-slate-100 flex items-center px-4 gap-3 animate-pulse">
//                                 <div className={`h-3 w-3 rounded-full ${card.accent}`} />
//                                 <div className="space-y-1.5 flex-1">
//                                   <div className="h-2 w-full bg-slate-200 rounded" />
//                                   <div className="h-2 w-2/3 bg-slate-100 rounded" />
//                                 </div>
//                              </div>
//                           </div>
//                        </div>
//                     </div>

//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Stethoscope,
  Calendar,
  TrendingUp,
  Users,
  CheckCircle2,
  Activity,
  FileText,
  CreditCard,
  BarChart3,
  Clock,
  Shield,
} from "lucide-react";

const features = [
  {
    id: "patient-care",
    badge: "01",
    icon: Stethoscope,
    label: "Patient Care & Records",
    title: "Every clinical decision, in one place.",
    description:
      "Unify consultations, histories, and prescriptions in a secure, structured system designed for how clinicians actually think.",
    bullets: [
      { icon: FileText, text: "Structured visit notes with templates" },
      { icon: Shield, text: "Issue and track prescriptions safely" },
      { icon: Activity, text: "Order labs and receive results inline" },
      { icon: CheckCircle2, text: "HIPAA-compliant record sharing" },
    ],
    accent: "#06b6d4",
    accentMuted: "rgba(6,182,212,0.08)",
    accentBorder: "rgba(6,182,212,0.2)",
    visual: {
      bg: "from-slate-900 to-cyan-950",
      chart: [65, 72, 58, 80, 74, 88, 76, 92, 85, 96],
      statLabel: "Records filed this month",
      statValue: "3,841",
      tag: "↑ 14% vs last month",
      tagColor: "#34d399",
      tiles: [
        { label: "Active patients", val: "1,284", color: "#06b6d4" },
        { label: "Prescriptions", val: "428", color: "#818cf8" },
        { label: "Lab orders", val: "97", color: "#f59e0b" },
      ],
    },
  },
  {
    id: "scheduling",
    badge: "02",
    icon: Calendar,
    label: "Scheduling & Payments",
    title: "From first click to final invoice.",
    description:
      "A frictionless patient journey — online booking, smart reminders, integrated checkout — all without leaving the platform.",
    bullets: [
      { icon: Clock, text: "24/7 online booking with real-time slots" },
      { icon: Calendar, text: "Automated reminders cut no-shows by 40%" },
      { icon: CreditCard, text: "Integrated checkout & digital invoicing" },
      { icon: CheckCircle2, text: "Deposits, memberships, and packages" },
    ],
    accent: "#a78bfa",
    accentMuted: "rgba(167,139,250,0.08)",
    accentBorder: "rgba(167,139,250,0.2)",
    visual: {
      bg: "from-slate-900 to-violet-950",
      chart: [40, 55, 48, 70, 62, 75, 68, 82, 78, 91],
      statLabel: "Bookings this week",
      statValue: "312",
      tag: "↑ 8% vs last week",
      tagColor: "#a78bfa",
      tiles: [
        { label: "Confirmed appts", val: "198", color: "#a78bfa" },
        { label: "Revenue collected", val: "$18.4k", color: "#34d399" },
        { label: "No-show rate", val: "2.1%", color: "#f87171" },
      ],
    },
  },
  {
    id: "operations",
    badge: "03",
    icon: Users,
    label: "Team & Operations",
    title: "Your whole clinic, running in sync.",
    description:
      "Role-based permissions, automated workflows, and staff scheduling — so you manage outcomes, not admin.",
    bullets: [
      { icon: Shield, text: "Role-based access and permissions" },
      { icon: Users, text: "Visual staff scheduling and shift swaps" },
      { icon: CheckCircle2, text: "Task assignments with accountability" },
      { icon: Activity, text: "Automated admin workflows" },
    ],
    accent: "#fb923c",
    accentMuted: "rgba(251,146,60,0.08)",
    accentBorder: "rgba(251,146,60,0.2)",
    visual: {
      bg: "from-slate-900 to-orange-950",
      chart: [50, 62, 55, 68, 72, 65, 80, 74, 88, 84],
      statLabel: "Tasks completed today",
      statValue: "147",
      tag: "↑ 22% efficiency gain",
      tagColor: "#fb923c",
      tiles: [
        { label: "Staff active", val: "23", color: "#fb923c" },
        { label: "Shifts covered", val: "100%", color: "#34d399" },
        { label: "Open tasks", val: "6", color: "#f87171" },
      ],
    },
  },
  {
    id: "growth",
    badge: "04",
    icon: TrendingUp,
    label: "Growth & Insights",
    title: "Data that tells you what to do next.",
    description:
      "Real-time KPI dashboards, retention analytics, and built-in marketing tools to grow revenue without growing headcount.",
    bullets: [
      { icon: BarChart3, text: "Instant KPI reports and trend lines" },
      { icon: TrendingUp, text: "Boost patient lifetime value scores" },
      { icon: Activity, text: "Built-in email and SMS campaigns" },
      { icon: CheckCircle2, text: "Loyalty and referral programs" },
    ],
    accent: "#34d399",
    accentMuted: "rgba(52,211,153,0.08)",
    accentBorder: "rgba(52,211,153,0.2)",
    visual: {
      bg: "from-slate-900 to-emerald-950",
      chart: [30, 45, 40, 60, 55, 72, 68, 85, 80, 96],
      statLabel: "Revenue this month",
      statValue: "$42.8k",
      tag: "↑ 18% MoM growth",
      tagColor: "#34d399",
      tiles: [
        { label: "Avg. LTV", val: "$2,140", color: "#34d399" },
        { label: "Retention rate", val: "91%", color: "#06b6d4" },
        { label: "NPS score", val: "74", color: "#a78bfa" },
      ],
    },
  },
];

function MiniChart({ data, color }: { data: number[]; color: string }) {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const w = 280;
  const h = 80;
  const pad = 8;
  const points = data.map((v, i) => {
    const x = pad + (i / (data.length - 1)) * (w - pad * 2);
    const y = h - pad - ((v - min) / range) * (h - pad * 2);
    return `${x},${y}`;
  });
  const pathD = `M ${points.join(" L ")}`;
  const areaD = `M ${points[0]} L ${points.join(" L ")} L ${pad + (w - pad * 2)},${h - pad} L ${pad},${h - pad} Z`;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-20">
      <defs>
        <linearGradient id={`area-${color}`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0.0" />
        </linearGradient>
      </defs>
      <path d={areaD} fill={`url(#area-${color})`} />
      <path d={pathD} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {data.map((_, i) => {
        const x = pad + (i / (data.length - 1)) * (w - pad * 2);
        const y = h - pad - ((data[i] - min) / range) * (h - pad * 2);
        return i === data.length - 1 ? (
          <circle key={i} cx={x} cy={y} r="4" fill={color} />
        ) : null;
      })}
    </svg>
  );
}

export default function ClinicFeatures() {
  const [active, setActive] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!autoplay) return;
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % features.length);
    }, 3500);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [autoplay]);

  const current = features[active];

  const handleSelect = (i: number) => {
    setActive(i);
    setAutoplay(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  return (
    <section className="relative bg-[#0b0f1a] py-28 px-4 sm:px-8 overflow-hidden">
      {/* Ambient background blobs */}
      <div
        className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 transition-all duration-1000"
        style={{ background: current.accent }}
      />
      <div
        className="pointer-events-none absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full blur-[120px] opacity-10 transition-all duration-1000"
        style={{ background: current.accent }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-20 max-w-2xl">
          <p className="text-xs font-sans uppercase tracking-[0.2em] mb-4" style={{ color: current.accent }}>
            Platform Capabilities
          </p>
          <h2 className="text-4xl md:text-5xl font-sans text-white leading-[1.1] tracking-tight mb-5">
            Everything your clinic needs,{" "}
            <span className="text-slate-400">nothing it doesn't.</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Four pillars. One platform. Built for clinics that refuse to compromise on care or efficiency.
          </p>
        </div>

        {/* Main Layout: Left nav + Right visual */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Left: Feature selector */}
          <div className="lg:w-[42%] flex flex-col gap-3">
            {features.map((f, i) => {
              const isActive = i === active;
              return (
                <motion.button
                  key={f.id}
                  onClick={() => handleSelect(i)}
                  className="relative text-left w-full rounded-2xl p-5 transition-all duration-300 cursor-pointer border"
                  style={{
                    background: isActive ? f.accentMuted : "rgba(255,255,255,0.02)",
                    borderColor: isActive ? f.accentBorder : "rgba(255,255,255,0.05)",
                  }}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  {/* Progress bar when active */}
                  {isActive && autoplay && (
                    <motion.div
                      className="absolute bottom-0 left-0 h-[2px] rounded-b-2xl"
                      style={{ background: f.accent }}
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 3.5, ease: "linear" }}
                    />
                  )}

                  <div className="flex items-start gap-4">
                    <div
                      className="mt-0.5 h-10 w-10 rounded-xl flex items-center justify-center shrink-0 transition-colors"
                      style={{
                        background: isActive ? f.accent : "rgba(255,255,255,0.05)",
                      }}
                    >
                      <f.icon
                        className="h-5 w-5"
                        style={{ color: isActive ? "#fff" : "#94a3b8" }}
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span
                          className="text-xs font-sans uppercase tracking-widest"
                          style={{ color: isActive ? f.accent : "#475569" }}
                        >
                          {f.badge}
                        </span>
                      </div>
                      <p className={`font-sans text-[15px] leading-snug mb-1 ${isActive ? "text-white" : "text-slate-400"}`}>
                        {f.label}
                      </p>

                      {/* <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            style={{ overflow: "hidden" }}
                          >
                            <p className="text-slate-400 text-sm leading-relaxed mt-2 mb-4">
                              {f.description}
                            </p>
                            <ul className="space-y-2">
                              {f.bullets.map((b, bi) => (
                                <li key={bi} className="flex items-center gap-2.5 text-sm text-slate-300">
                                  <b.icon className="h-3.5 w-3.5 shrink-0" style={{ color: f.accent }} />
                                  {b.text}
                                </li>
                              ))}
                            </ul>
                            <button
                              className="mt-5 inline-flex items-center gap-2 text-sm font-sans group"
                              style={{ color: f.accent }}
                            >
                              Learn more
                              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </button>
                          </motion.div>
                        )}
                      </AnimatePresence> */}
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Right: Animated visual panel */}
          <div className="lg:w-[58%]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 24, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -16, scale: 0.98 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className={`rounded-3xl bg-gradient-to-br ${current.visual.bg} p-6 border`}
                style={{ borderColor: current.accentBorder }}
              >
                {/* Visual header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div
                      className="h-9 w-9 rounded-xl flex items-center justify-center"
                      style={{ background: current.accent }}
                    >
                      <current.icon className="h-4.5 w-4.5 text-white h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-white font-sans text-sm">{current.label}</p>
                      <p className="text-slate-500 text-xs">Live overview</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-sans px-3 py-1 rounded-full"
                    style={{ background: "rgba(255,255,255,0.06)", color: "#94a3b8" }}>
                    <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse inline-block" />
                    Live
                  </div>
                </div>

                {/* Main stat */}
                <div className="mb-6 px-1">
                  <p className="text-slate-500 text-xs mb-1">{current.visual.statLabel}</p>
                  <div className="flex items-end gap-3">
                    <span className="text-4xl font-sans text-white tracking-tight">
                      {current.visual.statValue}
                    </span>
                    <span
                      className="text-xs font-sans mb-1.5 px-2 py-0.5 rounded-full"
                      style={{
                        color: current.visual.tagColor,
                        background: `${current.visual.tagColor}18`,
                      }}
                    >
                      {current.visual.tag}
                    </span>
                  </div>
                </div>

                {/* Chart */}
                <div className="mb-6 rounded-2xl p-4" style={{ background: "rgba(0,0,0,0.2)" }}>
                  <MiniChart data={current.visual.chart} color={current.accent} />
                </div>

                {/* Stat tiles */}
                <div className="grid grid-cols-3 gap-3">
                  {current.visual.tiles.map((tile) => (
                    <div
                      key={tile.label}
                      className="rounded-xl p-4"
                      style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
                    >
                      <p className="text-slate-500 text-[10px] uppercase tracking-widest mb-2">{tile.label}</p>
                      <p className="font-sans text-xl" style={{ color: tile.color }}>{tile.val}</p>
                    </div>
                  ))}
                </div>

                {/* Bottom decorative bar */}
                <div className="mt-5 h-1 w-full rounded-full" style={{ background: "rgba(255,255,255,0.05)" }}>
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: current.accent }}
                    initial={{ width: "0%" }}
                    animate={{ width: "68%" }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-wrap items-center justify-between gap-6">
          <p className="text-slate-500 text-sm">Trusted by 2,000+ clinics across 40 countries</p>
          <div className="flex flex-wrap gap-6">
            {["HIPAA Compliant", "SOC 2 Certified", "24/7 Support", "99.9% Uptime"].map((t) => (
              <div key={t} className="flex items-center gap-2 text-slate-400 text-xs font-sans">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}