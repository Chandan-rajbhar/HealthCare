"use client";

import { useNavigate } from "react-router-dom";
import { ArrowRight, Star} from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Dr Cemal Kavasogullari",
    role: "GP at Esteem Life Medical Group",
    image: "https://i.pravatar.cc/400?img=11",
    quote:
      "We went with Pabau from day one because it offered us the complete package and could support both sides of the practice seamlessly.",
    rating: 5,
  },
  {
    id: 2,
    name: "Dr Leah Totton",
    role: "Founder / Co-Owner, Dr. Leah",
    image: "https://i.pravatar.cc/400?img=5",
    quote:
      "I appreciate the importance of CRM in the 21st century — Pabau makes it effortless to stay on top of every patient relationship.",
    rating: 5,
  },
  {
    id: 3,
    name: "Roxanne Merchant",
    role: "Head of Operations, Juvea Medical",
    image: "https://i.pravatar.cc/400?img=47",
    quote:
      "Productivity is noticeably better, and we waste far fewer manpower hours on admin tasks that used to take up our whole morning.",
    rating: 5,
  },
  {
    id: 4,
    name: "Dr Sophie Hargreaves",
    role: "Clinical Director, ClearSkin Clinics",
    image: "https://i.pravatar.cc/400?img=20",
    quote:
      "The reporting tools alone saved us hours every week. I finally have real visibility into how the clinic is performing.",
    rating: 5,
  },
  {
    id: 5,
    name: "Marcus Reid",
    role: "Practice Manager, Vitality Health Group",
    image: "https://i.pravatar.cc/400?img=33",
    quote:
      "Onboarding was surprisingly smooth. The team was responsive and our staff were up and running within a week.",
    rating: 5,
  },
];

export default function TestimonialSection() {
  const navigate = useNavigate();

  return (
    <section className="py-24 bg-[#f8fafc] overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-sans tracking-tight text-slate-900 leading-tight mb-4">
              Empowering the people{" "}
              <span className="text-cyan-600">who power healthcare</span>
            </h2>
            <p className="text-base text-slate-500 leading-relaxed">
              Trusted by 10,000+ practitioners to manage clinical workflows,
              patient records, and business growth — all in one place.
            </p>
          </div>
          <Button
            onClick={() => navigate("/case-studies")}
            variant="outline"
            className="self-start md:self-auto shrink-0 rounded-full border-slate-300 text-slate-700 hover:bg-slate-100 gap-2 h-11 px-6 text-sm"
          >
            Read all success stories
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Scrolling track — single direction only */}
        <div className="relative">
          {/* Fade masks */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[YOUR_ACTUAL_BG] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[YOUR_ACTUAL_BG] to-transparent z-10 pointer-events-none" />

          <div className="flex gap-5 animate-infinite-scroll hover:[animation-play-state:paused]">
            {[...testimonials, ...testimonials].map((t, i) => (
              <TestimonialCard key={i} t={t} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 50s linear infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  );
}

type Testimonial = {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
};

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="w-[360px] flex-shrink-0 bg-white border border-slate-200/70 p-6 rounded-2xl hover:shadow-lg hover:shadow-slate-200/60 hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between gap-5">
      {/* Stars */}
      <div className="flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={13}
            className={
              i < t.rating
                ? "fill-amber-400 text-amber-400"
                : "fill-slate-200 text-slate-200"
            }
          />
        ))}
      </div>

      {/* Quote */}
      <div className="relative flex-1">
          
        <p className="text-slate-700 text-sm leading-relaxed font-sans italic pl-5">
          "{t.quote}"
        </p>
      </div>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
        
        <div>
          <p className="text-sm font-sans text-slate-900 leading-tight">
            {t.name}
          </p>
          <p className="text-xs text-slate-500 mt-0.5">{t.role}</p>
        </div>
      </div>
    </div>
  );
}