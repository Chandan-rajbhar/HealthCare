import { Button } from "@/components/ui/button";
import { Route, useNavigate } from "react-router-dom";
import {
  Sparkles,
  Scale,
  Calculator,
  Database,
  UserRoundCog,
  BadgeCheck,
  Building2,
  BarChart3,
  Headset,
  ShieldCheck,
  FileCheck2,
  ClipboardCheck,
  Gem,
  BriefcaseBusiness,
  CornerDownRight,
  ChevronRight,
} from "lucide-react";

const COMPARE = [
  {
    icon: Sparkles,
    name: "Success Stories",
    path: "/success-stories",
  },
  {
    icon: Scale,
    name: "Compare Clinic",
    path: "/compare-clinic",
  },
  // {
  //   icon: Calculator,
  //   name: "Measure HealthCare Savings",
  //   path: "/healthcare-savings",
  // },
];

const IMPLEMENTATION = [
  { icon: Database, label: "Data Implementation" , route: "/data-implementation" },
  { icon: UserRoundCog, label: "Account Management" , route: "/account-management"},
  { icon: BadgeCheck, label: "Full Project Management" , route: "/full-project-management" },
  { icon: Building2, label: "On-site Training", route: "/on-site-training" },
  { icon: BarChart3, label: "Revenue Growth Consultation" , route: "/revenue-growth-consultation" },
  { icon: Headset, label: "Platinum Customer Success" , route: "/platinum-customer-success" },
];

const SECURITY = [
  {
    icon: ShieldCheck,
    label: "Security Commitment",
    route: "/security-commitment",
  },
  { icon: FileCheck2, label: "HIPAA Compliance"  },
  { icon: ClipboardCheck, label: "GDPR Compliance" , route: "/gdpr-compliance" },
];

const COMPANY = [
  { icon: Gem, label: "About Us", route: "/about" },
  { icon: BriefcaseBusiness, label: "Careers", route: "/careers" },
  { icon: CornerDownRight, label: "Contact Us", route: "/contact" },
];

export default function WhyMenu() {
  const navigate = useNavigate();
  function SectionLabel({ children }) {
    return (
      <p className="text-[11px] font-bold tracking-[0.05em] text-slate-400 uppercase mb-5 px-3">
        {children}
      </p>
    );
  }

  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[1100px] overflow-hidden border border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.15)] animate-in fade-in zoom-in-95 duration-200 z-[110] rounded-b-2xl rounded-t-none bg-white">
      <div className="flex h-[600px] bg-white text-slate-800">
        {/* LEFT SIDEBAR - Compare & Value (Previously in Middle) */}
        <aside className="w-[320px] bg-slate-50/50 border-r border-slate-100 p-5 flex flex-col gap-1.5 overflow-y-auto">
          <div className="px-3 pt-4 pb-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-teal-50/50 border border-teal-100/50 text-teal-700 text-[13px] font-medium">
              <Sparkles className="w-4 h-4 text-teal-600" />
              <span>Resources & Comparisons</span>
            </div>
          </div>
          {COMPARE.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.name}
                variant="ghost"
                onClick={() => navigate(item.path)}
                className="group flex items-center justify-between w-full h-auto py-3 px-4 rounded-xl text-[14px] font-medium transition-all duration-200 text-slate-500 hover:bg-white hover:text-teal-600 hover:shadow-sm hover:border-slate-200/60"
              >
                <div className="flex items-center justify-start gap-3 text-left">
                  <Icon className="w-5 h-5 shrink-0" />
                  <div className="flex flex-col">
                    <span className="leading-snug font-semibold text-slate-900 group-hover:text-teal-700">
                      {item.name}
                    </span>
                    <span className="text-[11px] text-slate-400 font-normal line-clamp-1">
                      {item.desc}
                    </span>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 shrink-0 transition-all duration-300 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100" />
              </Button>
            );
          })}
        </aside>

        {/* MAIN CONTENT - Implementation & Growth (Previously on Left) */}
        <section className="flex-1 flex flex-col border-r border-slate-100">
          <div className="px-10 py-12 flex-1 overflow-y-auto">
            <SectionLabel>IMPLEMENTATION & GROWTH</SectionLabel>
            <div className="grid grid-cols-1 gap-y-2">
              {IMPLEMENTATION.map((item) => {
                const Icon = item.icon;
                return (
                  <Button
                    key={item.label}
                    onClick={() => item.route && navigate(item.route)}
                    variant="ghost"
                    className="group flex items-center justify-start gap-4 h-auto p-3 transition-all duration-200 hover:bg-slate-50 rounded-xl w-full whitespace-normal text-left"
                  >
                    <div className="flex shrink-0 items-center justify-center w-10 h-10 rounded-lg bg-slate-50 text-slate-500 group-hover:bg-white group-hover:text-teal-600 group-hover:shadow-md group-hover:shadow-teal-600/10 transition-all duration-200 border border-transparent group-hover:border-teal-100">
                      <Icon className="w-5 h-5 shrink-0" />
                    </div>
                    <span className="text-[14px] font-medium text-slate-700 group-hover:text-teal-700 transition-colors">
                      {item.label}
                    </span>
                  </Button>
                );
              })}
            </div>
          </div>
        </section>

        {/* RIGHT PANEL - Security & Company */}
        <aside className="w-[260px] bg-slate-50/30 p-8 flex flex-col gap-8 overflow-y-auto">
          <div className="space-y-3">
            <SectionLabel>SECURITY</SectionLabel>
            <div className="flex flex-col gap-1">
              {SECURITY.map((item) => (
                <Button
                  key={item.label}
                  onClick={() => item.route && navigate(item.route)}
                  variant="ghost"
                  className="group justify-start text-[13px] font-medium text-slate-600 hover:text-teal-700 hover:bg-slate-100/50 rounded-lg h-9 px-3 gap-2"
                >
                  <item.icon className="w-4 h-4 text-slate-400 group-hover:text-teal-600" />
                  {item.label}
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <SectionLabel>COMPANY</SectionLabel>
            <div className="flex flex-col gap-1">
              {COMPANY.map((item) => (
                <Button
                  key={item.label}
                  variant="ghost"
                  onClick={() => item.route && navigate(item.route)}
                  className="group justify-start text-[13px] font-medium text-slate-600 hover:text-teal-700 hover:bg-slate-100/50 rounded-lg h-9 px-3 gap-2"
                >
                  <item.icon className="w-4 h-4 text-slate-400 group-hover:text-teal-600" />
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
