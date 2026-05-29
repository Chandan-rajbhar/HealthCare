"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Clock, Zap, HeartPulse, BarChart3, ArrowDownRight, ArrowUpRight } from "lucide-react";

const stats = [
  {
    label: "Efficiency",
    title: "Reclaim your clinical hours",
    desc: "Cut administrative burnout by 43%. Our automated workflows handle the scheduling and follow-ups so you don't have to.",
    trend: "-43%",
    subtext: "Admin workload",
    icon: Clock,
    trendIcon: ArrowDownRight,
    color: "text-cyan-600",
    bg: "bg-cyan-50",
  },
  {
    label: "Onboarding",
    title: "Team readiness, accelerated",
    desc: "Bring new staff up to speed 2.4x faster. An interface so intuitive, it feels like second nature from day one.",
    trend: "2.4x",
    subtext: "Faster training",
    icon: Zap,
    trendIcon: ArrowUpRight,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    label: "Growth",
    title: "Elevate patient lifetime value",
    desc: "See a 32% surge in patient engagement through precision outreach and loyalty programs that actually stick.",
    trend: "+32%",
    subtext: "Patient retention",
    icon: HeartPulse,
    trendIcon: ArrowUpRight,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    label: "Revenue",
    title: "Double your operational ROI",
    desc: "Clinics using Pabau reclaim 10+ hours weekly. That's more time for high-value care and practice expansion.",
    trend: "2x",
    subtext: "Return on time",
    icon: BarChart3,
    trendIcon: ArrowUpRight,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
];

export default function ImpactSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
           <h2 className="text-4xl md:text-5xl font-sans tracking-tight text-black">
  Reliable outcomes for{" "}
  <span className="text-black">modern healthcare.</span>
</h2>
          </div>
          <p className="max-w-xs text-slate-500 text-sm leading-relaxed border-l-2 border-cyan-500 pl-4">
            We don't just provide software; we provide the metrics that define your success in a competitive landscape.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200 rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50">
          
          {stats.map((item, index) => (
            <Card 
              key={index} 
              className="group relative bg-white border-none rounded-none transition-all duration-500 hover:z-10 hover:bg-slate-50"
            >
              <CardContent className="p-7 flex flex-col h-full">
                
                {/* Icon & Label */}
                <div className="flex items-center justify-between mb-8">
                  <div className={`p-3 rounded-2xl ${item.bg} ${item.color}`}>
                    <item.icon size={24} />
                  </div>
                  
                </div>

                {/* Content */}
                <div className="space-y-4 flex-1">
                  <h3 className="text-xl font-sans leading-tight text-slate-900 group-hover:text-cyan-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                {/* Sub-badge */}
                <div className="mt-8 pt-6 border-t border-slate-100">
                  <span className="text-[10px] font-sans uppercase tracking-[0.12em] text-slate-400">
                    Key Metric: {item.subtext}
                  </span>
                </div>
                
                {/* Animated Background Accent */}
                <div className={`absolute bottom-0 left-0 h-1 w-0 ${item} group-hover:w-full transition-all duration-700`} />
              </CardContent>
            </Card>
          ))}

        </div>
        </div>

    </section>
  );
}