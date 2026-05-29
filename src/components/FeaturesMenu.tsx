import { useMemo, useState, type ComponentType, type SVGProps } from "react"
import { useNavigate } from "react-router-dom"
import {
  Atom,
  ArrowRight,
  Bot,
  Box,
  Calendar,
  CalendarCheck,
  ClipboardPlus,
  FileText,
  HandHeart,
  IdCard,
  ImagePlus,
  MonitorCheck,
  ReceiptText,
  Laptop,
  Shield,
  Star,
  Users,
  UserRound,
  WalletCards,
  Video,
  Gift,
  Tag,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

// ─── Routes ───────────────────────────────────────────────────────────────────

const FEATURE_ROUTES: Record<string, string> = {
  "Reviews": "/features/reviews",
  "Promotions": "/features/promotions",
  "Gift Cards": "/features/gift-cards",
  "Patient Loyalty": "/features/patient-loyalty",
  "Task Automation": "/features/task-automation",
  "Email & SMS Campaigns": "/features/email-sms-campaigns",
  "Booking Policies": "/features/booking-policies",
  "Insurance Claims": "/features/insurance-claims",
 "Billing & Checkout": "/features/billing-checkout",
  "Treatment Photos": "/features/treatment-photos",
  "Aftercare Plans": "/features/aftercare-plans",
  "Memberships": "/features/memberships",
  "Patient Records": "/features/patient-records",
  "Telehealth": "/features/telehealth",
  "MediPay": "/features/medipay",
  "Clinical Forms": "/features/clinical-forms",
  "AI Consult Notes": "/features/ai-consult-notes",
  "Client Portal": "/features/client-portal",
  "Online Booking": "/features/online-booking",
  "Calendar": "/features/calendar",
  "Staff Management": "/staff-management",
  "Staff Commissions": "/commissions",
  "Timesheets": "/timesheets",
  "Compliance": "/compliance",
  "Practice Reports": "/features/practice-reports",
  "Analytics": "/features/analytics",
  "Stock Management": "/features/stock-management",
}

// ─── Types ────────────────────────────────────────────────────────────────────

const SIDEBAR_CATS = ["Featured", "Patient Care", "Appointments", "Operations", "Growth"]

type MenuItem = {
  icon: ComponentType<SVGProps<SVGSVGElement>>
  name: string
  desc: string
}

type CategoryPanel = {
  bannerIcon: ComponentType<SVGProps<SVGSVGElement>>
  bannerText: string
  leftHeading: string
  rightHeading: string
  leftItems: MenuItem[]
  rightItems: MenuItem[]
  centerHeading?: string
  centerItems?: MenuItem[]
  release?: {
    image?: string
    imageAlt?: string
    title?: string
    badge?: string
    description?: string
    badgeClassName?: string
    imageClassName?: string
  }
}

// ─── Menu Items ───────────────────────────────────────────────────────────────

const CORE_FEATURES: MenuItem[] = [
  { icon: CalendarCheck, name: "Calendar",        desc: "Appointments, staff & rooms in one view" },
  { icon: Calendar,      name: "Online Booking",  desc: "Self-service booking, 24/7" },
  { icon: Shield,        name: "AI Consult Notes",desc: "Auto-drafted consultation notes" },
  { icon: Laptop,        name: "Client Portal",   desc: "Secure access to book, pay & more" },
  { icon: ClipboardPlus, name: "Clinical Forms",  desc: "Custom clinical forms & notes" },
]

const TOP_PICKS: MenuItem[] = [
  { icon: WalletCards, name: "MediPay",    desc: "Payment processing online & on-site" },
  { icon: Video,       name: "Telehealth", desc: "Secure video consultations built in" },
]

// Patient Care
const CARE_OPTIMIZE: MenuItem[] = [
  { icon: UserRound,    name: "Patient Records", desc: "Centralised patient data & history" },
  { icon: Bot,          name: "AI Consult Notes",desc: "Auto-drafted consultation notes" },
  { icon: Video,        name: "Telehealth",      desc: "Secure video consultations built in" },
  { icon: Box,          name: "Memberships",     desc: "Recurring memberships & service plans" },
]

const CARE_CLINICAL: MenuItem[] = [
  { icon: ClipboardPlus, name: "Clinical Forms",   desc: "Custom clinical forms & notes" },
  { icon: ImagePlus,     name: "Treatment Photos", desc: "Document treatments with photos" },
  { icon: IdCard,        name: "Aftercare Plans",  desc: "Post-treatment care instructions" },
]

// Appointments
const SCHEDULING_ADMIN: MenuItem[] = [
  { icon: Calendar,     name: "Calendar",       desc: "Appointments, staff & rooms in one view" },
  { icon: CalendarCheck,name: "Online Booking", desc: "Self-service booking, 24/7" },
  { icon: Laptop,       name: "Client Portal",  desc: "Secure access to book, pay & more" },
]

const SCHEDULING_PAYMENTS: MenuItem[] = [
  { icon: WalletCards,  name: "MediPay",          desc: "Payment processing online & on-site" },
  { icon: ReceiptText,  name: "Billing & Checkout",desc: "Process payments at checkout" },
  { icon: Shield,       name: "Insurance Claims",  desc: "Submit & track insurance claims" },
]

const SCHEDULING_OTHER: MenuItem[] = [
  { icon: FileText, name: "Booking Policies", desc: "Set booking & cancellation rules" },
]

// Operations
const MANAGEMENT_GROW: MenuItem[] = [
  { icon: Users,       name: "Staff Management",  desc: "Organise staff by roles & teams" },
  { icon: ReceiptText, name: "Staff Commissions", desc: "Track & calculate staff commissions" },
  { icon: Calendar,    name: "Timesheets",         desc: "Record staff hours & attendance" },
  { icon: Shield,      name: "Compliance",         desc: "Stay secure, compliant & efficient" },
]

const MANAGEMENT_INSIGHTS: MenuItem[] = [
  { icon: FileText,     name: "Practice Reports", desc: "Generate practice-wide performance reports" },
  { icon: MonitorCheck, name: "Analytics",         desc: "View real-time metrics & analytics" },
]

const MANAGEMENT_STOCK: MenuItem[] = [
  { icon: Box, name: "Stock Management", desc: "Manage stock levels" },
]

// Growth
const MARKETING_AUTOMATION: MenuItem[] = [
  { icon: FileText, name: "Email & SMS Campaigns", desc: "Send targeted email & SMS campaigns" },
  { icon: Bot,      name: "Task Automation",        desc: "Automate repetitive clinic tasks" },
]

const MARKETING_LOYALTY: MenuItem[] = [
  { icon: Calendar, name: "Patient Loyalty", desc: "Reward & retain repeat patients" },
  { icon: Gift,     name: "Gift Cards",      desc: "Sell & redeem gift cards" },
  { icon: Tag,      name: "Promotions",      desc: "Create offers & discounts" },
  { icon: Star,     name: "Reviews",         desc: "Collect & manage patient reviews" },
]

// ─── Panel Content ─────────────────────────────────────────────────────────────

const PANEL_CONTENT: Record<string, CategoryPanel> = {
  Featured: {
    bannerIcon: Star,
    bannerText: "Explore our popular products",
    leftHeading: "CORE FEATURES",
    rightHeading: "TOP PICKS",
    leftItems: CORE_FEATURES,
    rightItems: TOP_PICKS,
    release: {
      image: "https://pabau.com/wp-content/uploads/2026/02/klarna-img-header.webp",
      imageAlt: "Klarna",
      title: "Klarna",
      badge: "NEW",
      description: "Buy now, pay later is now available in HealVare",
    },
  },
  "Patient Care": {
    bannerIcon: HandHeart,
    bannerText: "Elevate your patient care",
    leftHeading: "OPTIMISE PATIENT CARE",
    rightHeading: "CLINICAL TOOLS",
    leftItems: CARE_OPTIMIZE,
    rightItems: CARE_CLINICAL,
    release: {
      image: "https://pabau.com/wp-content/uploads/2026/02/care-plus-img-header.webp",
      imageAlt: "Care Plus",
      title: "Care Plus",
      badge: "SPOTLIGHT FEATURE",
      description: "Premium patient care tools for smarter workflows and personalised experiences.",
      badgeClassName: "is-spotlight",
      imageClassName: "is-care",
    },
  },
  Appointments: {
    bannerIcon: Calendar,
    bannerText: "Schedule & collect payments with ease",
    leftHeading: "STREAMLINE ADMIN",
    rightHeading: "PAYMENTS",
    centerHeading: "OTHER",
    leftItems: SCHEDULING_ADMIN,
    rightItems: SCHEDULING_PAYMENTS,
    centerItems: SCHEDULING_OTHER,
  },
  Operations: {
    bannerIcon: Atom,
    bannerText: "Run your clinic with confidence",
    leftHeading: "MANAGE & GROW",
    rightHeading: "GAIN INSIGHTS",
    centerHeading: "STOCK",
    leftItems: MANAGEMENT_GROW,
    rightItems: MANAGEMENT_INSIGHTS,
    centerItems: MANAGEMENT_STOCK,
    release: {
      image: "https://pabau.com/wp-content/uploads/2026/02/Insights-Plus-img-menu.webp",
      imageAlt: "Insights Plus",
      title: "Insights Plus",
      badge: "NEW",
      description: "HealVare Insights Plus gives clinics real-time visibility into bookings, revenue, and practitioner performance.",
      badgeClassName: "is-new",
      imageClassName: "is-insights",
    },
  },
  Growth: {
    bannerIcon: ReceiptText,
    bannerText: "Grow your practice faster",
    leftHeading: "AUTOMATION",
    rightHeading: "LOYALTY & RETENTION",
    leftItems: MARKETING_AUTOMATION,
    rightItems: MARKETING_LOYALTY,
    release: {
      image: "https://pabau.com/wp-content/uploads/2026/02/marketing-plus-img-header.webp",
      imageAlt: "Growth Plus",
      title: "Growth Plus",
      badge: "SPOTLIGHT FEATURE",
      description: "HealVare Growth Plus helps clinics attract, engage, and retain patients with built-in tools for campaigns, automation, and follow-ups.",
      badgeClassName: "is-spotlight",
      imageClassName: "is-marketing",
    },
  },
}

// ─── Sub-components ────────────────────────────────────────────────────────────

// function SectionLabel({ children }: { children: ReactNode }) {
//   return <p className="fm-section-label">{children}</p>
// }

// function FeatureRow({ icon: Icon, name, desc }: MenuItem) {
//   const navigate = useNavigate()

//   const handleClick = () => {
//     const route = FEATURE_ROUTES[name]
//     if (route) navigate(route)
//   }

//   return (
//     <Button variant="ghost" className="fm-feature-row" onClick={handleClick}>
//       <span className="fm-feature-icon-wrap">
//         <Icon className="fm-feature-icon" />
//       </span>
//       <span className="fm-feature-copy">
//         <span className="fm-feature-title">{name}</span>
//         <span className="fm-feature-desc">{desc}</span>
//       </span>
//     </Button>
//   )
// }

// // ─── Main Component ────────────────────────────────────────────────────────────

// export default function FeaturesMenu() {
//   const [activeLeft, setActiveLeft] = useState("Featured")

//   const activeCategories = useMemo(() => SIDEBAR_CATS, [])
//   const panel = PANEL_CONTENT[activeLeft] ?? PANEL_CONTENT.Featured
//   const BannerIcon = panel.bannerIcon

//   return (
//     <Card className="fm-root">
//       <div className="fm-shell">
//         <aside className="fm-sidebar" aria-label="Feature categories">
//           {activeCategories.map((cat) => {
//             const isActive = activeLeft === cat
//             return (
//               <Button
//                 key={cat}
//                 type="button"
//                 variant="ghost"
//                 className={`fm-side-button ${isActive ? "is-active" : ""}`}
//                 onMouseEnter={() => setActiveLeft(cat)}
//               >
//                 <span>{cat}</span>
//                 <ArrowRight className="fm-side-arrow" />
//               </Button>
//             )
//           })}
//         </aside>

//         <section className="fm-content" aria-label="Feature details">
//           <Button variant="outline" className="fm-explore-banner" type="button">
//             <BannerIcon className="fm-star" />
//             <span>{panel.bannerText}</span>
//           </Button>

//           <div className="fm-grid-area">
//             <div className={`fm-columns ${panel.centerItems ? "is-three-col" : ""}`}>
//               <section>
//                 <SectionLabel>{panel.leftHeading}</SectionLabel>
//                 <div className="fm-list">
//                   {panel.leftItems.map((item) => (
//                     <FeatureRow key={item.name} {...item} />
//                   ))}
//                 </div>
//               </section>

//               <section>
//                 <SectionLabel>{panel.rightHeading}</SectionLabel>
//                 <div className="fm-list">
//                   {panel.rightItems.map((item) => (
//                     <FeatureRow key={item.name} {...item} />
//                   ))}
//                 </div>
//               </section>

//               {panel.centerItems && panel.centerHeading && (
//                 <section>
//                   <SectionLabel>{panel.centerHeading}</SectionLabel>
//                   <div className="fm-list">
//                     {panel.centerItems.map((item) => (
//                       <FeatureRow key={item.name} {...item} />
//                     ))}
//                   </div>
//                 </section>
//               )}
//             </div>

//             {panel.release && (
//               <>
//               </>
//             )}
//           </div>
//         </section>
//       </div>
//     </Card>
//   )
// }
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-bold tracking-[0.05em] text-slate-400 uppercase mb-5 px-3">
      {children}
    </p>
  )
}

function FeatureRow({ icon: Icon, name, desc }: MenuItem) {
  const navigate = useNavigate()

  const handleClick = () => {
    const route = FEATURE_ROUTES[name]
    if (route) navigate(route)
  }

  return (
    <Button 
      variant="ghost" 
      className="group flex items-start justify-start gap-4 h-auto p-3 transition-all duration-200 hover:bg-slate-50 rounded-xl w-full" 
      onClick={handleClick}
    >
      <div className="flex shrink-0 items-center justify-center w-10 h-10 rounded-lg bg-slate-50 text-slate-500 group-hover:bg-white group-hover:text-teal-600 group-hover:shadow-md group-hover:shadow-teal-600/10 transition-all duration-200 border border-transparent group-hover:border-teal-100">
        <Icon className="w-5 h-5" />
      </div>
      <div className="flex flex-col items-start text-left overflow-hidden">
        <span className="text-[14px] font-semibold text-slate-900 group-hover:text-teal-700 transition-colors">
          {name}
        </span>
        <span className="text-[12px] leading-snug text-slate-500 line-clamp-2 mt-0.5">
          {desc}
        </span>
      </div>
    </Button>
  )
}

export default function FeaturesMenu() {
  const [activeLeft, setActiveLeft] = useState("Featured")
  const activeCategories = useMemo(() => SIDEBAR_CATS, [])
  const panel = PANEL_CONTENT[activeLeft] ?? PANEL_CONTENT.Featured
  const BannerIcon = panel.bannerIcon

  return (
    <Card className="absolute top-full left-1/2 -translate-x-1/2 w-[1100px] overflow-hidden border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.15)] animate-in fade-in zoom-in-95 duration-200 z-[110] rounded-b-2xl rounded-t-none">
      <div className="flex h-[600px] bg-white">
        
        {/* Sidebar - Clean & Minimal */}
        <aside className="w-[220px] bg-slate-50/50 border-r border-slate-100 p-5 flex flex-col gap-1.5">
          {activeCategories.map((cat) => {
            const isActive = activeLeft === cat
            return (
              <Button
                key={cat}
                variant="ghost"
                className={`group flex items-center justify-between w-full h-12 px-4 rounded-xl text-[14px] font-medium transition-all duration-200
                  ${isActive 
                    ? "bg-white text-teal-600 shadow-sm border border-slate-200/60" 
                    : "text-slate-500 hover:bg-white hover:text-teal-600"}`}
                onMouseEnter={() => setActiveLeft(cat)}
              >
                <span>{cat}</span>
                <ArrowRight className={`w-4 h-4 transition-all duration-300 ${isActive ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"}`} />
              </Button>
            )
          })}
        </aside>

        {/* Main Content - Wider & Spaced */}
        <section className="flex-1 flex flex-col">
          {/* Header Banner - Subtle background tint */}
          <div className="px-10 pt-8 pb-2">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-teal-50/50 border border-teal-100/50 text-teal-700 text-[13px] font-medium">
              <BannerIcon className="w-4 h-4 text-teal-600" />
              <span>{panel.bannerText}</span>
            </div>
          </div>

          <div className="px-10 py-8 flex-1">
            <div className={`grid gap-10 ${panel.centerItems ? "grid-cols-3" : "grid-cols-2"}`}>
              {/* Left Column */}
              <div className="space-y-1">
                <SectionLabel>{panel.leftHeading}</SectionLabel>
                <div className="flex flex-col gap-1">
                  {panel.leftItems.map((item) => (
                    <FeatureRow key={item.name} {...item} />
                  ))}
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-1">
                <SectionLabel>{panel.rightHeading}</SectionLabel>
                <div className="flex flex-col gap-1">
                  {panel.rightItems.map((item) => (
                    <FeatureRow key={item.name} {...item} />
                  ))}
                </div>
              </div>

              {/* Optional Center Column */}
              {panel.centerItems && panel.centerHeading && (
                <div className="space-y-1">
                  <SectionLabel>{panel.centerHeading}</SectionLabel>
                  <div className="flex flex-col gap-1">
                    {panel.centerItems.map((item) => (
                      <FeatureRow key={item.name} {...item} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </Card>
  )
}