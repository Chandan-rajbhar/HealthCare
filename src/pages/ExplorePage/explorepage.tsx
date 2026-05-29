

// import {
//   ArrowRight,
//   Calendar,
//   ClipboardList,
//   Clock3,
//   CreditCard,
//   FlaskConical,
//   Globe,
//   HandCoins,
//   HeartPulse,
//   Hospital,
//   Image,
//   Layers,
//   MonitorSmartphone,
//   PartyPopper,
//   Pill,
//   Scissors,
//   Sparkles,
//   Stethoscope,
//   Syringe,
//   Telescope,
//   Trophy,
//   UserCog,
//   Users,
//   Wallet,
// } from "lucide-react";
// import type { LucideIcon } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";

// type ExploreItem = {
//   label: string;
//   icon: LucideIcon;
// };

// type ExploreCategory = {
//   title: string;
//   items: ExploreItem[];
// };

// const practiceTypes: ExploreItem[] = [
//   { label: "Med Spa", icon: Sparkles },
//   { label: "Physiotherapy", icon: HeartPulse },
//   { label: "Wellness", icon: Telescope },
//   { label: "GP and Primary Care", icon: Stethoscope },
//   { label: "Dermatology", icon: Syringe },
//   { label: "IV Drip Clinic", icon: FlaskConical },
//   { label: "Skin Clinic", icon: Hospital },
//   { label: "Hair Transplant", icon: Scissors },
//   { label: "Cosmetic Surgery", icon: HandCoins },
//   { label: "Longevity Clinic", icon: Clock3 },
//   { label: "Laser Clinic", icon: Layers },
//   { label: "Mental health", icon: Users },
// ];

// const featureCategories: ExploreCategory[] = [
//   {
//     title: "SCHEDULING & BOOKINGS",
//    items: [
//   { label: "Online Scheduling", icon: Calendar },
//   { label: "Appointment Calendar", icon: Calendar },
//   { label: "Group Classes", icon: Users },
//   { label: "Waitlist Management", icon: ClipboardList },
//   { label: "Mobile Access", icon: MonitorSmartphone },
// ],
//   },
//   {
//     title: "CARE & DOCUMENTATION",
//   items: [
//   { label: "Paperless Forms", icon: ClipboardList },
//   { label: "Lab Results", icon: FlaskConical },
//   { label: "Digital Prescribing", icon: Pill },
//   { label: "Treatment Documentation", icon: Image },
//   { label: "Remote Consultations", icon: Globe },
// ],
//   },
//   {
//     title: "PAYMENTS & OPERATIONS",
//    items: [
//   { label: "Payment Processing", icon: CreditCard },
//   { label: "Quotes & Estimates", icon: Wallet },
//   { label: "Staff Management", icon: UserCog },
//   { label: "Commission Tracking", icon: Trophy },
//   { label: "Inventory Management", icon: Layers },
// ],
//   },
//   {
//     title: "MARKETING & GROWTH",
//  items: [
//   { label: "Marketing Campaigns", icon: PartyPopper },
//   { label: "Lead Management", icon: Users },
//   { label: "Patient Loyalty Programs", icon: Trophy },
//   { label: "Membership Plans", icon: Layers },
//   { label: "Practice Analytics", icon: ClipboardList },
// ],
//   },
// ];

// const ExplorePage = () => {
//   const navigate = useNavigate();

//   const getFeaturePath = (label: string) => {
//    if (
//   label === "Staff Management" ||
//   label === "Commission Tools" ||
//   label === "Inventory Control"
// ) {
//       return "/team-operations";
//     }

//     if (label === "HealthCare Pay" || label === "Quotes") {
//       return "/scheduling-payments";
//     }

//  if (
//   label === "Online Scheduling" ||
//   label === "Appointment Calendar" ||
//   label === "Group Classes" ||
//   label === "Waitlist Management" ||
//   label === "Mobile Access"
// ){
//       return "/scheduling-payments";
//     }

//   if (
//   label === "Paperless Forms" ||
//   label === "Lab Results" ||
//   label === "Digital Prescribing" ||
//   label === "Treatment Documentation" ||
//   label === "Remote Consultations"
// ) {
//       return "/patient-care-records";
//     }

//     return "/explore";
//   };

//   return (
//     <section className="relative isolate overflow-hidden bg-[#042b2d] px-4 py-14 text-white sm:px-6 md:px-8 lg:px-10 lg:py-16">
//       <div className="pointer-events-none absolute inset-0">
//         <div className="absolute -left-40 top-16 h-80 w-80 rounded-full bg-[#0ca3a8]/15 blur-[96px]" />
//         <div className="absolute -right-32 top-24 h-96 w-96 rounded-full bg-[#09757a]/20 blur-[110px]" />
//       </div>

//       <div className="relative mx-auto max-w-5xl">
//         <h2 className="text-center text-[20px] font-medium leading-tight tracking-[-0.01em] text-white/95 md:text-[34px]">
//   Find the right <span className="text-[#53c7cc]">fit</span> for your practice
// </h2>

//         <Card className="mt-6 border-white/10 bg-transparent py-0 shadow-none ring-0">
//           <CardContent className="p-0">
//             <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
//               {practiceTypes.map(({ label, icon: Icon }) => (
//                 <Button
//                   key={label}
//                   variant="outline"
//                   className="h-10 w-full justify-between rounded-[8px] border border-[#2e5f61] bg-[#164749]/85 px-3 text-left text-[13px] font-medium text-white shadow-none hover:bg-[#1f5a5d]"
//                 >
//                   <span className="flex items-center gap-2.5">
//                     <Icon className="h-3.5 w-3.5 text-white/85" />
//                     <span className="leading-none">{label}</span>
//                   </span>
//                   <ArrowRight className="h-3.5 w-3.5 text-white/50" />
//                 </Button>
//               ))}
//             </div>
//           </CardContent>
//         </Card>

//         <div className="mt-4 flex justify-center">
//           <Button
//             variant="link"
//             className="h-auto gap-1.5 px-0 text-[11px] font-medium tracking-[0.01em] text-white/80 no-underline hover:text-white"
//           >
//             Explore all
//             <ArrowRight className="h-3.5 w-3.5" />
//           </Button>
//         </div>

//        <h3 className="mt-10 text-center text-[21px] font-medium leading-tight tracking-[-0.01em] text-white/95 md:text-[38px]">
//   ...or discover <span className="text-[#53c7cc]">all features</span>
// </h3>

//         <Card className="mt-6 border-white/10 bg-transparent py-0 shadow-none ring-0">
//           <CardContent className="p-0">
//             <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2 xl:grid-cols-4">
//               {featureCategories.map((category) => (
//                 <div key={category.title}>
//                   <p className="mb-2.5 text-[10px] font-medium tracking-[0.08em] text-white/55">
//                     {category.title}
//                   </p>

//                   <div className="space-y-2.5">
//                     {category.items.map(({ label, icon: Icon }) => (
//                       <Button
//                         key={label}
//                         variant="outline"
//                         className="h-10 w-full justify-between rounded-[8px] border border-[#255558] bg-[#0d3d40]/90 px-3 text-left text-[13px] font-medium text-white shadow-none hover:bg-[#145155]"
//                         onClick={() => navigate(getFeaturePath(label))}
//                       >
//                         <span className="flex items-center gap-2.5">
//                           <Icon className="h-3.5 w-3.5 text-white/82" />
//                           <span className="leading-none">{label}</span>
//                         </span>
//                         <ArrowRight className="h-3.5 w-3.5 text-white/50" />
//                       </Button>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </section>
//   );
// };

// export default ExplorePage;

import {
  ArrowRight,
  Calendar,
  ClipboardList,
  Clock3,
  CreditCard,
  FlaskConical,
  Globe,
  HandCoins,
  HeartPulse,
  Hospital,
  Image,
  Layers,
  MonitorSmartphone,
  PartyPopper,
  Pill,
  Scissors,
  Sparkles,
  Stethoscope,
  Syringe,
  Telescope,
  Trophy,
  UserCog,
  Users,
  Wallet,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

type ExploreItem = { label: string; icon: LucideIcon };
type ExploreCategory = { title: string; color: string; bg: string; items: ExploreItem[] };

const practiceTypes: ExploreItem[] = [
  { label: "Med Spa", icon: Sparkles },
  { label: "Physiotherapy", icon: HeartPulse },
  { label: "Wellness", icon: Telescope },
  { label: "GP and Primary Care", icon: Stethoscope },
  { label: "Dermatology", icon: Syringe },
  { label: "IV Drip Clinic", icon: FlaskConical },
  { label: "Skin Clinic", icon: Hospital },
  { label: "Hair Transplant", icon: Scissors },
  { label: "Cosmetic Surgery", icon: HandCoins },
  { label: "Longevity Clinic", icon: Clock3 },
  { label: "Laser Clinic", icon: Layers },
  { label: "Mental Health", icon: Users },
];

const featureCategories: ExploreCategory[] = [
  {
    title: "Scheduling & Bookings",
    color: "text-teal-600",
    bg: "bg-teal-50",
    items: [
      { label: "Online Scheduling", icon: Calendar },
      { label: "Appointment Calendar", icon: Calendar },
      { label: "Group Classes", icon: Users },
      { label: "Waitlist Management", icon: ClipboardList },
      { label: "Mobile Access", icon: MonitorSmartphone },
    ],
  },
  {
    title: "Care & Documentation",
    color: "text-blue-600",
    bg: "bg-blue-50",
    items: [
      { label: "Paperless Forms", icon: ClipboardList },
      { label: "Lab Results", icon: FlaskConical },
      { label: "Digital Prescribing", icon: Pill },
      { label: "Treatment Documentation", icon: Image },
      { label: "Remote Consultations", icon: Globe },
    ],
  },
  {
    title: "Payments & Operations",
    color: "text-violet-600",
    bg: "bg-violet-50",
    items: [
      { label: "Payment Processing", icon: CreditCard },
      { label: "Quotes & Estimates", icon: Wallet },
      { label: "Staff Management", icon: UserCog },
      { label: "Commission Tracking", icon: Trophy },
      { label: "Inventory Management", icon: Layers },
    ],
  },
  {
    title: "Marketing & Growth",
    color: "text-orange-500",
    bg: "bg-orange-50",
    items: [
      { label: "Marketing Campaigns", icon: PartyPopper },
      { label: "Lead Management", icon: Users },
      { label: "Patient Loyalty", icon: Trophy },
      { label: "Membership Plans", icon: Layers },
      { label: "Practice Analytics", icon: ClipboardList },
    ],
  },
];

const ExplorePage = () => {
  const navigate = useNavigate();

  const getFeaturePath = (label: string) => {
    if (["Staff Management", "Commission Tools", "Inventory Control"].includes(label))
      return "/team-operations";
    if (["Online Scheduling", "Appointment Calendar", "Group Classes", "Waitlist Management", "Mobile Access", "HealthCare Pay", "Quotes"].includes(label))
      return "/scheduling-payments";
    if (["Paperless Forms", "Lab Results", "Digital Prescribing", "Treatment Documentation", "Remote Consultations"].includes(label))
      return "/patient-care-records";
    return "/explore";
  };

  return (
    <section className="bg-[#f8fafb] px-4 py-16 sm:px-6 md:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">

        {/* ── Section 1: Practice Types ── */}
        <div className="mb-16">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Built for your type of practice
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm text-gray-500 leading-relaxed">
              Whether you run a single-location clinic or a multi-site group, the platform adapts to how you work.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {practiceTypes.map(({ label, icon: Icon }) => (
              <button
                key={label}
                onClick={() => navigate("/explore")}
                className="group flex flex-col items-center gap-2.5 rounded-2xl border border-gray-100 bg-white px-3 py-4 text-center shadow-sm transition-all duration-200 hover:border-teal-200 hover:shadow-md hover:-translate-y-0.5"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-50 transition-colors group-hover:bg-teal-100">
                  <Icon className="h-4 w-4 text-teal-600" />
                </div>
                <span className="text-[12px] font-medium leading-tight text-gray-700 group-hover:text-gray-900">
                  {label}
                </span>
              </button>
            ))}
          </div>

          <div className="mt-5 text-center">
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="mb-16 flex items-center gap-4">
          <div className="h-px flex-1 bg-gray-200" />
          <span className="text-[11px] font-semibold tracking-[0.15em] text-gray-400 uppercase">
            All Features
          </span>
          <div className="h-px flex-1 bg-gray-200" />
        </div>

        {/* ── Section 2: Feature Categories ── */}
        <div>
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Everything in one platform
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm text-gray-500 leading-relaxed">
              No more juggling separate tools. Every feature your clinic needs, connected and working together.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {featureCategories.map((category) => (
              <div
                key={category.title}
                className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
              >
                {/* Category header */}
                <div className="mb-4 flex items-center gap-2.5">
                  <div className={`h-1.5 w-5 rounded-full ${category.bg.replace("bg-", "bg-").replace("50", "400")}`} />
                  <p className={`text-[11px] font-bold tracking-[0.08em] uppercase ${category.color}`}>
                    {category.title}
                  </p>
                </div>

                {/* Feature items */}
                <div className="space-y-1">
                  {category.items.map(({ label, icon: Icon }) => (
                    <button
                      key={label}
                      onClick={() => navigate(getFeaturePath(label))}
                      className="group flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left transition-colors hover:bg-gray-50"
                    >
                      <span className="flex items-center gap-2.5">
                        <div className={`flex h-7 w-7 items-center justify-center rounded-lg ${category.bg}`}>
                          <Icon className={`h-3.5 w-3.5 ${category.color}`} />
                        </div>
                        <span className="text-[13px] font-medium text-gray-700 group-hover:text-gray-900">
                          {label}
                        </span>
                      </span>
                      <ArrowRight className="h-3 w-3 text-gray-300 opacity-0 transition-opacity group-hover:opacity-100" />
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default ExplorePage;
