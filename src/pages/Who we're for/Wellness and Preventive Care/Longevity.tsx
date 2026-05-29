import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Activity,
  LineChart,
  Pill,
  ChevronDown,
  CheckCircle2,
  Star,
  Shield,
  Users,
  ArrowRight,
  XCircle,
  ClipboardList,
  FolderOpen,
  UserCircle,
  CalendarCheck,
  Repeat,
  ArrowUpRight,
} from "lucide-react";
import PricingTeaser from "@/components/PricingTeaser";

// --- 1. HERO SECTION ---
const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-slate-900 text-white overflow-hidden py-24 lg:py-0 lg:min-h-[700px] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-[#009689]/20 to-transparent pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#009689]/10 border border-[#009689]/20 text-[#009689] text-sm font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-[#009689] animate-pulse"></span>
              Longevity Clinic Software
            </div>
            <h1 className="text-4xl md:text-6xl font-sans tracking-tight leading-[1.1] mb-6">
              Optimizing Longevity Clinic Operations.
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
              The premier platform designed for anti-aging, longevity, and
              functional medicine clinics. Manage advanced biomarker tracking,
              personalized protocols, and effortless patient booking in one
              unified dashboard.
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

const Section2 = () => {
  return (
    <section className="bg-white py-24 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-sans text-slate-900 leading-tight">
            Even the best longevity clinics hit a ceiling
            <br />
            <span className="text-slate-400 font-light italic">
              when systems can't handle complexity.
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 border border-slate-200 divide-y md:divide-y-0 md:divide-x divide-slate-200">
          {/* Problem Side */}
          <div className="p-12 bg-slate-50/50">
            <header className="flex items-center gap-3 mb-10">
              <div className="h-px w-8 bg-slate-300" />
              <p className="text-[10px] font-sans uppercase tracking-[0.3em] text-slate-400">
                Challenges for Longevity Clinics
              </p>
            </header>

            <ul className="space-y-8">
              {[
                "Biomarker data scattered across labs, spreadsheets, and disconnected systems",
                "Complex treatment protocols managed manually with no automation",
                "Limited visibility into patient progress and long-term outcomes",
                "Time lost coordinating memberships, follow-ups, and recurring treatments",
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
                With your longevity platform
              </p>
            </header>

            <ul className="space-y-8">
              {[
                "All biomarkers unified into one real-time, visual patient dashboard",
                "Automated, logic-based protocols for IVs, peptides, and therapies",
                "Clear tracking of biological age, trends, and patient outcomes",
                "Seamless memberships, billing, and recurring treatment workflows",
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
  );
};

// --- 2. CORE FEATURES GRID ---
const features = [
  {
    title: "Advanced Biomarker Tracking",
    description:
      "Log, graph, and monitor hundreds of health markers in real-time. Present highly visual progress reports to patients instantly.",
    icon: <LineChart className="w-8 h-8 text-[#009689]" />,
  },
  {
    title: "Personalized Protocol Management",
    description:
      "Build logic-based treatment plans involving IV infusions, peptides, hormones, and lifestyle interventions securely.",
    icon: <Pill className="w-8 h-8 text-[#009689]" />,
  },
  {
    title: "Seamless Patient Booking",
    description:
      "Let clients self-schedule complex longevity consultations or recurring treatments online, eliminating double-bookings.",
    icon: <Activity className="w-8 h-8 text-[#009689]" />,
  },
];

const CoreFeatures = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-sans text-slate-900 mb-6">
            Everything you need to run and scale your longevity clinic without
            operational friction.
          </h2>
          <p className="text-lg text-slate-600">
            From biomarker tracking and protocol management to patient journeys
            and recurring memberships, manage your entire longevity practice in
            one intelligent, unified system.
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
  );
};

const ProdFeatures = () => {
  const Prodfeatures = [
    {
      icon: ClipboardList,
      category: "Clinical",
      title: "Digital Intake & Health Assessments",
      desc: "Capture detailed lifestyle, genetic, and medical data before consultations with fully customizable intake forms.",
    },
    {
      icon: FolderOpen,
      category: "Clinical",
      title: "Centralized Patient Records",
      desc: "Store lab results, biomarker history, treatment protocols, and clinical notes securely in one unified system.",
    },
    {
      icon: UserCircle,
      category: "Patient",
      title: "Patient Portal",
      desc: "Give patients access to their biomarkers, upcoming treatments, and protocol updates to improve engagement and retention.",
    },
    {
      icon: Activity,
      category: "Clinical",
      title: "Biomarker & Lab Tracking",
      desc: "Visualize lab data over time, monitor trends, and make data-driven decisions with real-time biomarker dashboards.",
    },
    {
      icon: CalendarCheck,
      category: "Scheduling",
      title: "24/7 Online Booking",
      desc: "Allow patients to book consultations, IV therapies, and follow-ups based on real-time availability.",
    },
    {
      icon: CalendarCheck,
      category: "Scheduling",
      title: "Automated Reminders & Follow-ups",
      desc: "Reduce no-shows and ensure protocol adherence with automated reminders and follow-up workflows.",
    },
    {
      icon: Pill,
      category: "Clinical",
      title: "Protocol & Treatment Management",
      desc: "Design and manage personalized longevity protocols including IV therapy, peptides, hormones, and supplements.",
    },
    {
      icon: Repeat,
      category: "Revenue",
      title: "Memberships & Recurring Billing",
      desc: "Offer tiered longevity programs with automated billing, renewals, and treatment usage tracking.",
    },
    {
      icon: Activity,
      category: "Practice",
      title: "Run Your Clinic From Anywhere",
      desc: "Access schedules, patient data, and protocol updates on the go with a fully responsive platform.",
    },
  ];
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
            {Prodfeatures.map((feature, i) => {
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

// --- 3. WORKFLOW / PATIENT JOURNEY ---
const WorkflowJourney = () => {
  const navigate = useNavigate();
  const steps = [
    "Digital intake & pre-consultation questionnaires.",
    "Automated laboratory request workflows.",
    "Dynamic prescription and dosing schedules.",
    "Subscription and membership tier billing.",
  ];

  return (
    <section className="bg-slate-50 py-24 border-y border-slate-200 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-sans text-slate-900 mb-6 leading-tight">
              Manage complex treatment plans seamlessly.
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              From the initial consultation to continuous biological monitoring,
              our system streamlines the operational burden, so your medical
              team focuses entirely on improving healthspans.
            </p>
            <ul className="space-y-5 mb-10">
              {steps.map((step, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="mt-0.5 flex-shrink-0 text-[#009689] bg-[#009689]/20 p-1 rounded-full">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="text-slate-700 text-lg font-medium">
                    {step}
                  </span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => navigate("/pricing")}
              className="bg-slate-900 hover:bg-slate-800 text-white font-sans py-3.5 px-8 rounded-lg transition-colors duration-300"
            >
              View Pricing Options
            </button>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="absolute inset-0 bg-[#009689]/5 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200 p-6 relative z-10">
              <div className="flex border-b border-slate-100 pb-4 mb-4 gap-4">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 font-sans">
                  JD
                </div>
                <div>
                  <h4 className="font-sans text-slate-900">John Doe</h4>
                  <p className="text-sm text-slate-500">
                    Longevity Protocol 'Alpha'
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-[#009689]/10 border border-[#009689]/20 p-4 rounded-xl flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-[#007a6e]">
                      NAD+ IV Infusion
                    </p>
                    <p className="text-sm text-[#007a6e]">
                      Scheduled: Today, 2:00 PM
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-white text-[#009689] rounded-lg text-xs font-sans shadow-sm">
                    Upcoming
                  </span>
                </div>
                <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-slate-700">
                      Comprehensive Blood Panel
                    </p>
                    <p className="text-sm text-slate-500">Drawn: Oct 12th</p>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-lg text-xs font-sans">
                    Results Ready
                  </span>
                </div>
                <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl flex justify-between items-center">
                  <div>
                    <p className="font-semibold text-slate-700">
                      Monthly Membership Fee
                    </p>
                    <p className="text-sm text-slate-500">
                      Auto-billed: Nov 1st
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-slate-200 text-slate-600 rounded-lg text-xs font-sans">
                    Paid
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- 4. TRUST & STATS ---
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
            "Switching to this unified platform allowed us to scale our
            longevity practice from 50 to over 400 concierge patients
            seamlessly. The biomarker tracking and protocol automation are
            unmatched."
          </p>
          <div>
            <h4 className="font-sans text-xl text-white">Dr. Marcus Chen</h4>
            <p className="text-[#009689] font-medium">
              Medical Director, Apex Longevity Institute
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- 5. FAQ SECTION ---
const faqs = [
  {
    question: "Does the software integrate with diagnostic lab results?",
    answer:
      "Yes, our platform supports API and HL7 integrations with major diagnostic laboratories. Results can be automatically pulled into the patient's EMR and graphed alongside historical biomarker data.",
  },
  {
    question: "Can we sell and manage recurring memberships?",
    answer:
      "Absolutely. Built-in subscription management allows you to create customized membership tiers (e.g., Gold Longevity Tier includes 2 IVs, 1 Physician Consult/month). Payments are auto-billed seamlessly via Stripe.",
  },
  {
    question:
      "Is it suitable for inventory management (e.g., Peptides, Supplements)?",
    answer:
      "Yes, the system includes robust clinic inventory management. Set minimum threshold alerts so you never run out of critical NAD+, peptides, or nutraceutical supplies.",
  },
  {
    question: "Are patient intake forms customizable?",
    answer:
      "You have full control. Build advanced digital intake questionnaires to capture detailed lifestyle, genetic, and family history data prior to the patient setting foot in the clinic.",
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

// --- 6. BOTTOM CTA BANNER ---
const BottomCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-slate-900 py-24 relative overflow-hidden text-center z-10">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#007a6e]/40 via-slate-900 to-slate-900 pointer-events-none -z-10"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-6xl font-sans text-white mb-6 tracking-tight">
          Ready to transform your Longevity Clinic?
        </h2>
        <p className="text-xl text-slate-300 mb-12 font-light">
          Get started today and join the elite network of intelligent clinics
          redefining human healthspan.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => navigate("/book-demo")}
            className="bg-[#009689] text-white font-sans py-5 px-12 rounded-xl cursor-pointer"
          >
            Schedule a demo
          </button>
          <button
            onClick={() => navigate("/pricing")}
            className="bg-white text-slate-900 font-sans py-5 px-12 rounded-xl cursor-pointer"
          >
            See pricing
          </button>
        </div>
      </div>
    </section>
  );
};

const PlatformBenefits = () => {
  const [featureOpen, setFeatureOpen] = useState<number>(0);

  type PlatformCapability = {
    title: string;
    desc: string;
    cta?: string;
    icon: any;
  };

  const platformCapabilities: PlatformCapability[] = [
    {
      title: "Let patients book consultations and treatments 24/7",
      desc: "Patients can schedule longevity consultations, IV therapies, and follow-ups based on your real-time availability. Automated reminders reduce no-shows and keep your calendar optimized.",
      cta: "Explore Online Booking",
      icon: CalendarCheck,
    },
    {
      title: "Track biomarkers in one unified patient dashboard",
      desc: "Aggregate lab results and health markers into a single, visual timeline. Monitor trends, compare historical data, and present clear progress insights to patients.",
      cta: "View Biomarker Tracking",
      icon: LineChart,
    },
    {
      title: "Build and automate personalized treatment protocols",
      desc: "Create structured longevity programs with IV infusions, peptides, hormones, and lifestyle interventions. Automate dosing schedules and follow-ups with precision.",
      icon: ClipboardList,
    },
    {
      title: "Manage recurring memberships and billing seamlessly",
      desc: "Offer tiered longevity memberships with included treatments and consultations. Automate billing, renewals, and usage tracking without manual admin work.",
      icon: Repeat,
    },
    {
      title: "Coordinate complex patient journeys with ease",
      desc: "From intake to ongoing optimization, manage every touchpoint in one system. Ensure consistent follow-ups, lab reviews, and protocol adjustments across the lifecycle.",
      icon: Activity,
    },
    {
      title: "Give patients full visibility into their healthspan progress",
      desc: "Patients can access their biomarkers, upcoming treatments, and protocol updates through a dedicated portal, improving engagement and long-term retention.",
      cta: "Explore Patient Experience",
      icon: UserCircle,
    },
  ];

  return (
    <section className="bg-slate-50 py-24 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT MOCKUP */}
    <div className="relative h-[420px] hidden lg:block">
            <img
              src="/Wellness.png"
              alt="Wellness Dashboard"
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
                        active ? "text-slate-900" : "text-slate-600 font-medium"
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
  );
};

// --- MAIN PAGE COMPONENT ---
export default function Longevity() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#009689]/30">
      <HeroSection />
      <Section2 />
      <CoreFeatures />
      <WorkflowJourney />
      <PlatformBenefits />
      <ProdFeatures />
      <PricingTeaser />

      <FaqSection />
      <TrustStats />

      <BottomCTA />
    </div>
  );
}
