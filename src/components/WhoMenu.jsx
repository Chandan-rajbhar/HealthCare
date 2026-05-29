import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import {
  Flower2,
  ChevronRight,
  ScanSearch,
  Venus,
  Shirt,
  Brain,
  Building2,
  Leaf,
  Trophy,
  Dumbbell,
  Pill,
  Activity,
  Heart,
} from "lucide-react";

const CATEGORIES = [
  {
    id: "wellness",
    title: "Wellness and Preventive Care",
    subcategories: [
      {
        id: "medical-wellness",
        name: "Wellness and Preventive Care",
        header: "Medical-led wellness and preventive care",
        solutions: [
          {
            name: "Private Practice",
            icon: Building2,
            route: "/private-practice",
          },
          { name: "IV Therapy", icon: Pill, route: "/iv-therapy" },
          { name: "Wellness", icon: Leaf, route: "/wellness" },
          { name: "Weight Loss", icon: Dumbbell, route: "/weight-loss" },
          { name: "Longevity", icon: Trophy, route: "/longevity" },
          {
            name: "Metabolic Health",
            icon: Activity,
            route: "/metabolic-health",
          },
          {
            name: "Functional Medicine",
            icon: Flower2,
            route: "/functional-medicine",
          },
        ],
      },
      {
        id: "medical-aesthetics",
        name: "Medical Aesthetics",
        icon: ScanSearch,
        header: "Surgical and non-surgical aesthetic care",
        solutions: [
          { name: "Medspa", icon: Flower2, route: "/medspa" },
          { name: "Skin Clinic", icon: Brain, route: "skin-clinic" },
          { name: "Aesthetic Clinic", icon: Pill, route: "/aesthetic-clinic" },
          { name: "Laser Clinic", icon: Leaf, route: "laser-clinic" },
          { name: "Dermatology", icon: Activity, route: "/dermatology" },
          {
            name: "Hair Transplant Clinic",
            icon: Trophy,
            route: "/hair-transplant-clinic",
          },
          { name: "Cosmetic Surgery", icon: Shirt, route: "/cosmetic-surgery" },
          { name: "Spa", icon: Dumbbell, route: "/spa" },
        ],
      },
      {
        id: "womens-mens-health",
        name: "Women's and Men's Health",
        icon: Venus,
        header: "Specialist care for reproductive, hormonal, and sexual health",
        solutions: [
          { name: "Fertility", icon: Leaf, route: "/fertility" },
          { name: "Sexual Health", icon: Venus, route: "/sexual-health" },
          { name: "IVF & Gynecology", icon: Pill, route: "/ivf" },
          { name: "Pelvic Health", icon: Activity, route: "/pelvic-health" },
          { name: "Men's Health", icon: Venus, route: "/men-health" },
          {
            name: "Hormone Replacement Therapy",
            icon: Brain,
            route: "/hormone-replacement-therapy",
          },
        ],
      },
      {
        id: "musculoskeletal",
        name: "Musculoskeletal and Performance",
        icon: Shirt,
        header: "Non-surgical and regenerative care for movement and recovery",
        solutions: [
          {
            name: "Physical Therapy",
            icon: Building2,
            route: "/physical-therapy",
          },
          { name: "Osteopathy", icon: Dumbbell, route: "/osteopathy" },
          { name: "Sports Medicine", icon: Activity, route: "sports-medicine" },
          {
            name: "Regenerative Medicine",
            icon: Brain,
            route: "/regenerative-medicine",
          },
          { name: "Chiropractic", icon: Flower2, route: "/chiropractic" },
          { name: "PRP Therapy", icon: Pill, route: "prp-therapy" },
        ],
      },
      {
        id: "mental-health",
        name: "Mental Health and Lifestyle",
        icon: Brain,
        header: "Clinical mental health and behavioral care",
        solutions: [
          { name: "Mental Health", icon: Brain, route: "/mental-health" },
          { name: "Psychiatry", icon: ScanSearch, route: "/psychiatry" },
          { name: "Psychology", icon: Activity, route: "/psychology" },
          { name: "Coaching", icon: Venus, route: "/coaching" },
          {
            name: "Therapy & Counseling",
            icon: Building2,
            route: "/therapy-counseling",
          },
          { name: "Speech Therapy", icon: Leaf, route: "/speech-therapy" },
          { name: "ADHD Assessment", icon: Flower2, route: "/adhd-assessment" },
          {
            name: "Occupational Therapy",
            icon: Heart,
            route: "/occupational-therapy",
          },
        ],
      },
    ],
  },
];

const ROLES = [
  { name: "Practice Owner", route: "/practice-owner" },
  { name: "Practice Managers", route: "/practice-managers" },
  { name: "Treatment Providers", route: "/treatment-providers" },
  { name: "Front of House Staff", route: "/front-of-house" },
  { name: "Marketers", route: "/marketers" },
];

const BIZ_SIZES = [
  { name: "Enterprise", route: "/enterprise" },
  { name: "Large practice", route: "/large-practice" },
  { name: "Small practice", route: "/small-practice" },
  { name: "Solo practitioner", route: "/solo-practitioner" },
];

export default function WhoMenu() {
  const navigate = useNavigate();
  const [activeCategoryId, setActiveCategoryId] = useState("wellness");
  const [activeSubCategoryId, setActiveSubCategoryId] =
    useState("medical-wellness");

  const activeCategory =
    CATEGORIES.find((item) => item.id === activeCategoryId) ?? CATEGORIES[0];
  const activeSubCategory =
    activeCategory.subcategories.find(
      (item) => item.id === activeSubCategoryId,
    ) ?? activeCategory.subcategories[0];
  const solutions = activeSubCategory.solutions ?? [];
  const ActiveHeaderIcon = activeSubCategory.icon ?? Flower2;

  // Render SectionLabel identical to FeaturesMenu to ensure same ui styling
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
        {/* Sidebar - Clean & Minimal */}
        <aside className="w-[320px] bg-slate-50/50 border-r border-slate-100 p-5 flex flex-col gap-1.5 overflow-y-auto">
          {activeCategory.subcategories.map((item) => {
            const Icon = item.icon ?? Flower2;
            const isActive = activeSubCategoryId === item.id;
            return (
              <Button
                key={item.id}
                variant="ghost"
                className={`group flex items-center justify-between w-full h-auto py-3 px-4 rounded-xl text-[14px] font-medium transition-all duration-200
                  ${
                    isActive
                      ? "bg-white text-teal-600 shadow-sm border border-slate-200/60"
                      : "text-slate-500 hover:bg-white hover:text-teal-600"
                  }`}
                onMouseEnter={() => {
                  setActiveCategoryId(activeCategory.id);
                  setActiveSubCategoryId(item.id);
                }}
              >
                <div className="flex items-center justify-start gap-3 text-left">
                  <Icon className="w-5 h-5 shrink-0" />
                  <span className="leading-snug break-words whitespace-normal">
                    {item.name}
                  </span>
                </div>
                <ChevronRight
                  className={`w-4 h-4 shrink-0 transition-all duration-300 ${isActive ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"}`}
                />
              </Button>
            );
          })}
        </aside>

        {/* Main Content - Solutions Grid */}
        <section className="flex-1 flex flex-col border-r border-slate-100">
          <div className="px-10 pt-8 pb-2">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-teal-50/50 border border-teal-100/50 text-teal-700 text-[13px] font-medium">
              <ActiveHeaderIcon className="w-4 h-4 text-teal-600" />
              <span>{activeSubCategory.header ?? activeSubCategory.name}</span>
            </div>
          </div>

          <div className="px-10 py-8 flex-1 overflow-y-auto">
            <div className="grid grid-cols-2 gap-x-10 gap-y-4">
              {solutions.map((item) => {
                const Icon = item.icon;
                return (
                  <Button
                    key={item.name}
                    variant="ghost"
                    className="group flex items-center justify-start gap-4 h-auto p-3 transition-all duration-200 hover:bg-slate-50 rounded-xl w-full whitespace-normal text-left"
                    onClick={() => {
                      if (item.route) {
                        navigate(item.route);
                      }
                    }}
                  >
                    <div className="flex shrink-0 items-center justify-center w-10 h-10 rounded-lg bg-slate-50 text-slate-500 group-hover:bg-white group-hover:text-teal-600 group-hover:shadow-md group-hover:shadow-teal-600/10 transition-all duration-200 border border-transparent group-hover:border-teal-100">
                      <Icon className="w-5 h-5 shrink-0" />
                    </div>
                    <span className="text-[14px] font-semibold text-slate-900 group-hover:text-teal-700 transition-colors text-left break-words leading-tight">
                      {item.name}
                    </span>
                  </Button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Right Panel - Filters */}
        <aside className="w-[260px] bg-slate-50/30 p-8 flex flex-col gap-8 overflow-y-auto">
          <div className="space-y-3">
            <SectionLabel>ROLE</SectionLabel>
            <div className="flex flex-col gap-1">
              {ROLES.map((role) => (
                <Button
                  key={role.name}
                  variant="ghost"
                  className="justify-start text-[13px] font-medium text-slate-600 hover:text-teal-700 hover:bg-slate-100/50 rounded-lg h-9 px-3"
                  onClick={() => navigate(role.route)}
                >
                  {role.name}
                </Button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <SectionLabel>BUSINESS SIZE</SectionLabel>
            <div className="flex flex-col gap-1">
              {BIZ_SIZES.map((size) => (
                <Button
                  key={size.name}
                  variant="ghost"
                  className="justify-start text-[13px] font-medium text-slate-600 hover:text-teal-700 hover:bg-slate-100/50 rounded-lg h-9 px-3"
                  onClick={() => navigate(size.route)}
                >
                  {size.name}
                </Button>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
