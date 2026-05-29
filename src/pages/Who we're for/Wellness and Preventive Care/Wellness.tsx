import { useState } from "react";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  BellRing,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  FolderOpen,
  LineChart,
  Repeat,
  Shield,
  ShieldCheck,
  Smartphone,
  Star,
  UserCircle,
  Users,
  Video,
  XCircle,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import PricingTeaser from "@/components/PricingTeaser";

type PortalFeature = {
  title: string;
  desc: string;
  cta?: string;
  icon: any;
};

const portalFeatures: PortalFeature[] = [
  {
    title: "Let clients book appointments 24/7 without phone calls",
    desc: "Clients can view your real-time availability and book consultations anytime. Automated SMS and email reminders reduce no-shows and keep schedules running smoothly.",
    cta: "Discover Online Bookings",
    icon: CalendarCheck,
  },
  {
    title: "Send digital intake forms before the first appointment",
    desc: "Collect client history, lifestyle details, wellness goals, and consent forms in advance so practitioners are fully prepared before sessions begin.",
    icon: ClipboardList,
  },
  {
    title: "Keep all client records organised in one secure place",
    desc: "Store session notes, assessments, treatment plans, and progress reports in a centralised system accessible to your team whenever needed.",
    icon: FolderOpen,
  },
  {
    title: "Manage recurring wellness plans and packages",
    desc: "Set up ongoing wellness programs with automated billing so you never have to chase payments or manage invoices manually.",
    icon: Repeat,
  },
  {
    title: "Run group wellness sessions and workshops",
    desc: "Organise group sessions, manage attendance, and handle registrations alongside individual appointments from one system.",
    icon: Users,
  },
  {
    title: "Give clients access to their wellness journey",
    desc: "Clients can view session notes, upcoming appointments, home programs, and shared resources, helping them stay engaged between visits.",
    cta: "Discover Patient Portal",
    icon: UserCircle,
  },
  {
    title: "Deliver secure telehealth sessions remotely",
    desc: "Provide virtual wellness consultations and follow-up sessions through built-in secure video calls.",
    icon: Video,
  },
  {
    title: "Automate reminders and follow-ups",
    desc: "Reduce missed appointments and improve consistency with SMS and email reminders, recalls, and post-session follow-ups.",
    icon: BellRing,
  },
  {
    title: "Run your clinic from anywhere",
    desc: "Access schedules, client notes, tasks, and updates on mobile so you can manage your practice on the go.",
    icon: Smartphone,
  },
  {
    title: "Protect client data with enterprise-grade security",
    desc: "Keep sensitive records safe with GDPR-compliant safeguards, permissions, and encrypted storage.",
    icon: ShieldCheck,
  },
];

const AccordionFeatures = [
  {
    title: "Let patients book appointments 24/7 without phone calls",
    desc: "Patients can view your real-time availability and book consultations anytime. Automated SMS and email reminders reduce no-shows and keep your schedule running smoothly.",
    cta: "Discover Online Bookings",
    icon: CalendarCheck,
  },
  {
    title: "Send digital intake forms before the first appointment",
    desc: "Collect patient history, lifestyle details, wellness goals, and consent forms in advance so practitioners are fully prepared before sessions begin.",
    icon: ClipboardList,
  },
  {
    title: "Keep all client records organised in one secure place",
    desc: "Store session notes, assessments, treatment plans, and progress reports in a centralised system accessible to your team whenever needed.",
    icon: FolderOpen,
  },
  {
    title: "Manage recurring wellness plans with ease",
    desc: "Set up ongoing wellness programs with automated billing so you never have to chase payments or manage invoices manually.",
    icon: Repeat,
  },
  {
    title: "Give clients access to their wellness journey",
    desc: "Clients can view session notes, upcoming appointments, and shared resources, helping them stay engaged and consistent between visits.",
    cta: "Discover Patient Portal",
    icon: UserCircle,
  },
];
// --- 1. HERO SECTION ---
const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-slate-900 text-white overflow-hidden py-24 lg:py-0 lg:min-h-[700px] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-[#009689]/20 to-transparent pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#009689]/10 border border-[#009689]/20 text-[#009689] text-sm font-sans mb-6">
              <span className="w-2 h-2 rounded-full bg-[#009689] animate-pulse"></span>
              Wellness Practice Platform
            </div>
            <h1 className="text-4xl md:text-6xl font-sans tracking-tight leading-[1.1] mb-6">
              Deliver exceptional wellness experiences
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
              Bring together bookings, client journeys, and payments in one
              seamless platform. Spend less time managing operations and more
              time delivering personalized wellness care.
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
  );
};

const features = [
  {
    title: "Holistic Patient Scheduling",
    description:
      "Enable patients to book consultations, therapies, and wellness sessions 24/7. Smart scheduling ensures optimal staff utilization and zero overlaps.",
    icon: (
      <svg
        className="w-8 h-8 text-[#009689]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Integrated EMR & Wellness Records",
    description:
      "Maintain complete patient profiles including clinical history, treatments, therapy notes, and wellness plans — all in one secure system.",
    icon: (
      <svg
        className="w-8 h-8 text-[#009689]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    title: "Automated Billing & Payments",
    description:
      "Streamline invoicing for consultations, treatments, and wellness packages. Accept payments digitally and reduce billing overhead effortlessly.",
    icon: (
      <svg
        className="w-8 h-8 text-[#009689]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

const CoreFeatures = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-sans text-slate-900 mb-6">
            Everything you need to run and scale your wellness clinic without
            burnout.
          </h2>
          <p className="text-lg text-slate-600">
            From bookings and client management to treatment journeys and
            payments — all the tools you need to grow your wellness practice
            without administrative overload.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => {
            const stats = [
              { stat: "5.1 hrs", label: "saved per practitioner weekly" },
              { stat: "91%", label: "better client journey visibility" },
              { stat: "3.4x", label: "higher client retention" },
            ];

            return (
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

                <p className="text-slate-600 leading-relaxed mb-6">
                  {feature.description}
                </p>

                <div className="pt-6 border-t border-slate-100">
                  <p className="text-2xl font-sans text-[#009689]">
                    {stats[index].stat}
                  </p>
                  <p className="text-xs uppercase tracking-widest text-slate-400 font-medium mt-1">
                    {stats[index].label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// --- 3. FEATURE HIGHLIGHT 1 (Patient Care) ---
const FeatureOne = () => {
  const navigate = useNavigate();
  const bullets = [
    "Comprehensive patient charting and EMR.",
    "Customizable intake forms and consent waivers.",
    "Integrated telehealth for virtual wellness consults.",
    "Automated follow-ups and aftercare instructions.",
  ];

  return (
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
                        Emma Richardson
                      </h4>
                      <p className="text-sm text-slate-500">
                        Wellness Program - Week 4
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-4 bg-slate-100 rounded w-full"></div>
                    <div className="h-4 bg-slate-100 rounded w-5/6"></div>
                    <div className="h-4 bg-slate-100 rounded w-4/6"></div>
                  </div>
                  <button
                    onClick={() => navigate("/features")}
                    className="w-full mt-6 bg-[#009689]/10 text-[#009689] font-medium py-2 rounded-md"
                  >
                    View Clinical Notes
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-sans text-slate-900 mb-6">
              Delivering the highest standard of wellness care
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Equip your practitioners with powerful, intuitive tools that
              provide a complete 360-degree view of every patient's wellness
              journey. Less time charting, more time healing.
            </p>
            <ul className="space-y-5">
              {bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0 text-[#009689]">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <span className="text-slate-700 text-lg">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- 5. TRUST, STATS & TESTIMONIALS ---
const TrustStats = () => {
  return (
    <section className="bg-slate-900 py-24 text-white relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#009689]/5 blur-3xl pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center divide-y lg:divide-y-0 lg:divide-x divide-slate-700 mb-20">
          <div className="py-4 lg:py-0">
            <Shield className="w-10 h-10 text-[#009689] mx-auto mb-4" />
            <p className="text-5xl font-sans mb-2">100%</p>
            <p className="text-sm text-slate-400 uppercase tracking-widest font-medium">
              GDPR Compliant
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
            "A complete transformation for our wellness center. From bookings to
            client journeys, everything runs effortlessly. Giving us back 15+
            hours every week to focus on truly personalized care."{" "}
          </p>
          <div>
            <h4 className="font-sans text-xl text-white">Dr. Marcus Chen</h4>
            <p className="text-[#009689] font-medium">
              Wellness Practitioner, London
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- 6. FAQ SECTION ---
const faqs = [
  {
    question: "Is the platform fully HIPAA and GDPR compliant?",
    answer:
      "Yes, our software employs end-to-end AES-256 encryption. We meet and exceed global healthcare data privacy standards, ensuring your patients' wellness records are completely secure.",
  },
  {
    question: "How easy is it to set up online booking for my clinic?",
    answer:
      "Extremely easy. You can embed our booking widget directly onto your website or use our hosted booking portal. Patients can view real-time availability and book in under 60 seconds.",
  },
  {
    question: "Can I manage long-term wellness programs and packages?",
    answer:
      "Absolutely. Our recurring membership and package management tools allow you to sell bundles (e.g., 5 IV sessions or a 12-week coaching program) and automatically track session usage and billing.",
  },
  {
    question: "Do you offer data migration from my current system?",
    answer:
      "Yes, our dedicated onboarding team will securely export, clean, and map your existing patient data, appointments, and clinical notes to our platform with zero downtime for your active practice.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-sans text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600">
            Common questions from longevity clinic owners.
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
  );
};

// --- 7. BOTTOM CTA BANNER ---
const BottomCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-slate-900 py-24 border-t border-slate-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-[#009689]/10 to-transparent"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-sans text-white mb-6">
          Ready to scale your wellness clinic?
        </h2>
        <p className="text-xl text-slate-300 mb-10">
          Join thousands of modern practices delivering elevated patient care.
          Start your transition today.
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
  );
};

const Section2 = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-white py-24 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-sans text-slate-900 leading-tight">
            Even the best wellness clinics hit a wall
            <br />
            <span className="text-slate-400 font-light italic">
              when admin starts replacing client care.
            </span>
          </h2>
        </div>

        {/* Split Grid */}
        <div className="grid md:grid-cols-2 border border-slate-200 divide-y md:divide-y-0 md:divide-x divide-slate-200">
          {/* Problems */}
          <div className="p-12 bg-slate-50/50">
            <header className="flex items-center gap-3 mb-10">
              <div className="h-px w-8 bg-slate-300" />
              <p className="text-[10px] font-sans uppercase tracking-[0.3em] text-slate-400">
                Challenges for Wellness Clinics
              </p>
            </header>

            <ul className="space-y-8">
              {[
                "Hours lost managing bookings, cancellations, and rescheduling manually",
                "Client notes, treatment plans, and records spread across disconnected tools",
                "Missed follow-ups reducing retention and recurring revenue",
                "Too much admin taking focus away from personalized care",
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

          {/* Solutions */}
          <div className="p-12 bg-white">
            <header className="flex items-center gap-3 mb-10">
              <div className="h-px w-8 bg-[#009689]" />
              <p className="text-[10px] font-sans uppercase tracking-[0.3em] text-[#009689] font-sans">
                With your all-in-one wellness platform
              </p>
            </header>

            <ul className="space-y-8">
              {[
                "Bookings, reminders, and cancellations automated end-to-end",
                "Secure client records, treatment notes, and wellness journeys in one place",
                "Recurring packages, memberships, and billing handled smoothly",
                "More time to deliver elevated, high-touch wellness experiences",
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
              <button
                onClick={() => navigate("/features")}
                className="flex items-center gap-2 text-[#009689] text-sm font-sans uppercase tracking-wider group"
              >
                See the platform in action
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProdAccordion = () => {
  const [featureOpen, setFeatureOpen] = useState(0);
  return (
    <>
      <section className="bg-slate-50 py-24 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[420px] hidden lg:block">
            <img
              src="/Wellness.png"
              alt="Wellness Dashboard"
              className="w-full h-full object-contain rounded-2xl"
            />
          </div>

          {/* RIGHT ACCORDION */}
          <div className="max-w-2xl mx-auto space-y-3">
            {AccordionFeatures.map((item, i) => {
              const active = featureOpen === i;
              const Icon = item.icon;

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

                    <ChevronDown
                      className={`transition-transform duration-300 text-slate-400 ${
                        active ? "rotate-180 text-teal-600" : ""
                      }`}
                      size={20}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      active ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-6 ml-[68px]">
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
    </>
  );
};

const ProdFeatures = () => {
  return (
    <>
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
              From the first patient interaction to billing and compliance,
              everything your team needs is already here.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portalFeatures.map((feature, i) => {
              const Icon = feature.icon;
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
                      {feature.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

// --- MAIN COMPILED PAGE ---
export default function Wellness() {
  return (
    <div className="min-h-screen font-sans bg-white selection:bg-[#009689]/30">
      <HeroSection />
      <Section2 />
      <CoreFeatures />
      <FeatureOne />
      <ProdAccordion />
      <ProdFeatures />
      <PricingTeaser />
      <FaqSection />
      <TrustStats />
      <BottomCTA />
    </div>
  );
}
