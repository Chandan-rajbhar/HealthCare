import { MegaMenu } from "./ui";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import {
  BookOpenText,
  UserRound,
  FileText,
  FileCheck2,
  ClipboardCheck,
  MonitorCheck,
  NotebookPen,
  GraduationCap,
  BookMarked,
  RefreshCw,
  UserPlus,
  Code2,
  Share2,
  Headphones,
  ExternalLink,
  ChevronRight,
  Sparkles,
} from "lucide-react";


const POPULAR = [
  {
    title: "Med Spa Trends In 2026",
    image:
      "https://pabau.com/wp-content/uploads/2025/10/Cover-The-most-popular-med-spa-trends-in-2026.webp",
    type: "ebook",
  },
  {
    title: "Med Spa Business Guide",
    image:
      "https://pabau.com/wp-content/uploads/2025/10/Cover-The-Ultimate-Guide-to-Starting-a-Med-Spa-Business-eBook.webp",
    type: "ebook",
  },
  {
    title: "Botox Consent Form",
    image:
      "https://pabau.com/wp-content/uploads/2026/03/Botox-hyperhidrosis-consent-form-206x300.png",
    type: "template",
  },
  {
    title: "Med Spa Cost Template",
    image:
      "https://pabau.com/wp-content/uploads/2025/07/Cover-Med-Spa-Cost-Template.webp",
    type: "template",
  },
];

const GUIDES = [
  { icon: BookOpenText, label: "eBooks & Resources", route: "/ebooks" },
  { icon: UserRound, label: "Client Services", route: "/client-services" },
  { icon: FileText, label: "Templates", route: "/templates" },
  { icon: FileCheck2, label: "ICD Codes", route: "/icd-codes" },
  { icon: ClipboardCheck, label: "Procedure Codes", route: "/procedure-codes" },
];

const EDUCATION = [
  { icon: NotebookPen, label: "Blog" },
  { icon: GraduationCap, label: "Clinic Academy" },
  { icon: BookMarked, label: "Clinic Knowledge Base" },
  { icon: RefreshCw, label: "Product Updates" },
];

const REFERRALS = [
  { icon: UserPlus, label: "Refer-a-friend" , route: "/refer-friend"},
  { icon: Code2, label: "Build with HealthCare", route: "build-with-us" },
  { icon: Share2, label: "Become a Partner" },
];

function SectionLabel({ children }) {
  return (
    <p className="text-[11px] font-bold tracking-[0.05em] text-slate-400 uppercase mb-5 px-3">
      {children}
    </p>
  );
}

export default function ResourcesMenu() {
  const navigate = useNavigate();

  return (
    <MegaMenu>
      <div className="absolute top-full left-1/2 -translate-x-1/2 w-[1100px] overflow-hidden border border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.15)] animate-in fade-in zoom-in-95 duration-200 z-[110] rounded-b-2xl rounded-t-none bg-white">
        <div className="flex h-[600px] bg-white text-slate-800">
          {/* LEFT SIDEBAR - Popular Resources */}
          {/* <aside className="w-[320px] bg-slate-50/50 border-r border-slate-100 p-5 flex flex-col overflow-y-auto">
            <div className="px-3 pt-4 pb-6">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-teal-50/50 border border-teal-100/50 text-teal-700 text-[13px] font-medium">
                <Sparkles className="w-4 h-4 text-teal-600" />
                <span>Popular Resources</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 px-2">
              {POPULAR.map((item) => (
                <button key={item.title} className="group text-left" type="button">
                  <Card className="overflow-hidden border-slate-200 group-hover:border-teal-200 group-hover:shadow-md transition-all duration-200">
                    <div className="aspect-[3/4] overflow-hidden bg-slate-100">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                    </div>
                  </Card>
                  <p className="mt-2 text-[11px] font-semibold text-slate-600 group-hover:text-teal-700 line-clamp-2 px-1">
                    {item.title}
                  </p>
                </button>
              ))}
            </div>
            <div className="mt-auto flex justify-center gap-1.5 py-4">
               <div className="w-1.5 h-1.5 rounded-full bg-teal-500" />
               <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
            </div>
          </aside> */}

          {/* MAIN CONTENT - Guides & Education */}
          <section className="flex-1 flex border-r border-slate-100 divide-x divide-slate-100">
            <div className="flex-1 px-8 py-12 overflow-y-auto">
              <SectionLabel>GUIDES AND TOOLS</SectionLabel>
              <div className="grid grid-cols-1 gap-y-1">
                {GUIDES.map((item) => (
                  <Button
                    key={item.label}
                    variant="ghost"
                    onClick={() => navigate(item.route)}
                    className="group flex items-center justify-start gap-4 h-auto p-3 transition-all duration-200 hover:bg-slate-50 rounded-xl w-full text-left"
                  >
                    <div className="flex shrink-0 items-center justify-center w-9 h-9 rounded-lg bg-slate-50 text-slate-500 group-hover:bg-white group-hover:text-teal-600 group-hover:shadow-md group-hover:shadow-teal-600/10 transition-all duration-200 border border-transparent group-hover:border-teal-100">
                      <item.icon className="w-4 h-4 shrink-0" />
                    </div>
                    <span className="text-[14px] font-medium text-slate-700 group-hover:text-teal-700 transition-colors">
                      {item.label}
                    </span>
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex-1 px-8 py-12 overflow-y-auto">
              <SectionLabel>EDUCATION</SectionLabel>
              <div className="grid grid-cols-1 gap-y-1">
                {EDUCATION.map((item) => (
                  <Button
                    key={item.label}
                    variant="ghost"
                    className="group flex items-center justify-start gap-4 h-auto p-3 transition-all duration-200 hover:bg-slate-50 rounded-xl w-full text-left"
                  >
                    <div className="flex shrink-0 items-center justify-center w-9 h-9 rounded-lg bg-slate-50 text-slate-500 group-hover:bg-white group-hover:text-teal-600 group-hover:shadow-md group-hover:shadow-teal-600/10 transition-all duration-200 border border-transparent group-hover:border-teal-100">
                      <item.icon className="w-4 h-4 shrink-0" />
                    </div>
                    <span className="text-[14px] font-medium text-slate-700 group-hover:text-teal-700 transition-colors">
                      {item.label}
                    </span>
                  </Button>
                ))}
              </div>
            </div>
          </section>

          {/* RIGHT PANEL - Referrals & Support */}
          <aside className="w-[280px] bg-slate-50/30 p-8 flex flex-col gap-8 overflow-y-auto">
            <div className="space-y-3">
              <SectionLabel>REFERRALS</SectionLabel>
              <div className="flex flex-col gap-1">
                {REFERRALS.map((item) => (
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
    </MegaMenu>
  );
}
