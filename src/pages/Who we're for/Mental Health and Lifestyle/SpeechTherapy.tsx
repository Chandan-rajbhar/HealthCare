import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CheckCircle2,
  ChevronDown,
  FileText,
  Activity,
  Star,
  Shield,
  Users,
  LineChart,
  Pill,
  Clock,
} from "lucide-react";
import PricingTeaser from "@/components/PricingTeaser";
import { XCircle, ArrowRight } from "lucide-react";
// --- Local Components ---
import {
  Mic,
  ClipboardList,
  FolderOpen,
  Video,
  UserCircle,
  CalendarCheck,
  BellRing,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

const features = [
  {
    icon: ClipboardList,
    category: "Clinical",
    title: "Digital Intake & Coaching Agreements",
    desc: "Send coaching agreements and intake questionnaires automatically when clients book — every session starts with full context.",
  },
  {
    icon: FolderOpen,
    category: "Clinical",
    title: "Centralised Client Records",
    desc: "Store session notes, homework assignments, and progress reviews securely in one place — accessible across the entire coaching journey.",
  },
  {
    icon: UserCircle,
    category: "Patient",
    title: "Client Portal",
    desc: "Clients access session notes, upcoming appointments, and tailored resources — staying accountable and engaged between sessions.",
  },
  {
    icon: Video,
    category: "Clinical",
    title: "Integrated Telehealth",
    desc: "Host secure video coaching sessions directly within the platform. Clients receive a unique join link automatically when they book.",
  },
  {
    icon: CalendarCheck,
    category: "Scheduling",
    title: "24/7 Online Booking",
    desc: "Clients view real-time availability and book discovery sessions or recurring appointments without any back-and-forth.",
  },
  {
    icon: BellRing,
    category: "Scheduling",
    title: "Reminders & Recall Automation",
    desc: "Automated SMS and email reminders reduce no-shows. Smart recall ensures clients receive timely follow-ups automatically.",
  },
  {
    icon: Pill,
    category: "Scheduling",
    title: "Packages & Session Tracking",
    desc: "Sell coaching bundles that automatically deduct credits per session and alert clients when packages are running low.",
  },
  {
    icon: Mic,
    category: "Practice",
    title: "Recurring Membership Billing",
    desc: "Collect monthly coaching retainers via automated direct debit — ideal for retainer-based and ongoing coaching models.",
  },
  {
    icon: Smartphone,
    category: "Practice",
    title: "Manage Your Practice On the Go",
    desc: "Check schedules, review client notes, and coordinate your team from your mobile — whether you're between sessions or travelling.",
  },
  {
    icon: ShieldCheck,
    category: "Practice",
    title: "Secure & Fully Compliant",
    desc: "Bank-grade encryption and strict access controls keep all client details and session notes private. HIPAA and GDPR compliant.",
  },
];

const faqs = [
  {
    question:
      "Can I create therapy plans and track session usage automatically?",
    answer:
      "Yes. You can create structured therapy plans (e.g., 10-session programs), and each session is automatically tracked and deducted as appointments are completed. You'll also be notified when a plan is nearing completion.",
  },
  {
    question: "Does it support group therapy sessions and workshops?",
    answer:
      "Yes. You can schedule group speech therapy sessions, manage participant limits, and handle registrations and payments just as easily as individual appointments.",
  },
  {
    question: "Is the system secure for sensitive patient records?",
    answer:
      "Yes. The platform is HIPAA and GDPR compliant, with bank-grade encryption and strict access controls to ensure all patient records and therapy notes remain private and secure.",
  },
  {
    question: "Can patients book their own appointments online?",
    answer:
      "Yes. Patients can view your real-time availability and book sessions 24/7 through your online booking page, reducing administrative workload and back-and-forth communication.",
  },
  {
    question: "Does it support video sessions for remote speech therapy?",
    answer:
      "Yes. Built-in telehealth allows you to conduct secure online speech therapy sessions. Patients receive a unique video link automatically when they book a virtual appointment.",
  },
  {
    question: "Can I set up recurring therapy programs or payments?",
    answer:
      "Yes. You can set up ongoing therapy plans with automated billing on a weekly or monthly basis, making it easy to manage long-term patient care without manual invoicing.",
  },
];
const portalFeatures = [
  {
    title: "Let patients book appointments 24/7 without phone calls",
    desc: "Patients can view your real-time availability and book sessions anytime. Automated SMS and email reminders reduce no-shows and keep schedules running smoothly.",
    cta: "Discover Online Bookings",
  },
  {
    title: "Offer therapy plans and track sessions automatically",
    desc: "Create structured therapy plans and session bundles. Each appointment is tracked automatically, with clear visibility into completed and remaining sessions.",
  },
  {
    title: "Manage recurring therapy plans with ease",
    desc: "Set up ongoing therapy programs with automated billing, so you never have to chase payments or manage invoices manually.",
  },
  {
    title: "Run group therapy sessions and workshops",
    desc: "Organize group speech therapy sessions, manage attendance, and handle registrations alongside individual appointments — all from one system.",
  },
  {
    title: "Give patients access to their therapy journey",
    desc: "Patients can view session notes, upcoming appointments, and shared resources — helping them stay engaged and consistent between sessions.",
    cta: "Discover Patient Portal",
  },
];
// --- Main Page Component ---

export default function SpeechTherapy() {
  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [featureOpen, setFeatureOpen] = useState(0);
  const [active, _setActive] = useState("All");

  const filtered =
    active === "All" ? features : features.filter((f) => f.category === active);
  return (
    <div className="bg-white font-sans selection:bg-[#009689]/30">
      {/* 1. Hero Section (Dark Theme) */}
      <section className="relative bg-slate-900 text-white overflow-hidden py-24 lg:py-0 lg:min-h-[700px] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#009689]/20 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#009689]/10 border border-[#009689]/20 text-[#009689] text-sm font-semibold mb-6">
                <span className="w-2 h-2 rounded-full bg-[#009689] animate-pulse"></span>
                Built for Speech Therapy Clinics
              </div>
              <h1 className="text-4xl md:text-6xl font-sans tracking-tight leading-[1.1] mb-6">
                Run your speech therapy clinic without admin overwhelm.
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
                Manage patient records, therapy plans, session notes, and
                appointments — all in one place. Built for speech therapists who
                want to focus on patient progress, not paperwork.{" "}
              </p>{" "}
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

      <section className="bg-white py-24 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-sans text-slate-900 leading-tight">
              Even the best speech therapists hit a wall
              <br />
              <span className="text-slate-400 font-light italic">
                when admin work takes over.
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 border border-slate-200 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            {/* Problem Side */}
            <div className="p-12 bg-slate-50/50">
              <header className="flex items-center gap-3 mb-10">
                <div className="h-px w-8 bg-slate-300" />
                <p className="text-[10px] font-sans uppercase tracking-[0.3em] text-slate-400">
                  Challenges for Coaching Businesses
                </p>
              </header>

              <ul className="space-y-8">
                {[
                  "Hours lost managing appointments, cancellations, and rescheduling manually",
                  "Patient progress scattered across paper notes, files, and different systems",
                  "Missed follow-ups and inconsistent therapy plans affecting outcomes",
                  "Administrative workload reducing time available for patient care",
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
                  With your all-in-one therapy platform
                </p>
              </header>

              <ul className="space-y-8">
                {[
                  "Appointments, cancellations, and reminders handled automatically",
                  "All patient records, notes, and therapy plans stored in one secure place",
                  "Consistent follow-ups and reminders improve patient outcomes",
                  "More time to focus on therapy instead of administrative work",
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
                <button className="flex items-center gap-2 text-[#009689] text-sm font-sans font-sans uppercase tracking-wider group">
                  See the platform in action
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-sans text-slate-900 mb-6">
              Everything you need to run and scale your coaching business
              without burnout.
            </h2>
            <p className="text-lg text-slate-600">
              From scheduling and client management to content delivery and
              billing — all the tools you need to grow your coaching practice
              without the admin overload.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: <Clock className="w-8 h-8 text-[#009689]" />,
                title: "Reduce admin workload",
                description:
                  "Automate patient intake, therapy notes, and follow-ups so you can focus more on sessions and less on paperwork.",
                stat: "4.2 hrs",
                statLabel: "saved per clinician per week",
              },
              {
                icon: <Activity className="w-8 h-8 text-[#009689]" />,
                title: "Improve patient outcomes",
                description:
                  "Track speech progress, session history, and personalized therapy plans with clear timelines and structured insights.",
                stat: "89%",
                statLabel: "improved care visibility",
              },
              {
                icon: <LineChart className="w-8 h-8 text-[#009689]" />,
                title: "Improve retention & consistency",
                description:
                  "Reduce missed sessions and ensure continuity of care with automated reminders and easy rescheduling.",
                stat: "3.1x",
                statLabel: "higher patient retention",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-white border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="bg-[#009689]/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-sans text-slate-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {feature.description}
                </p>
                <div className="pt-6 border-t border-slate-100">
                  <p className="text-2xl font-sans text-[#009689]">
                    {feature.stat}
                  </p>
                  <p className="text-xs uppercase tracking-widest text-slate-400 font-medium mt-1">
                    {feature.statLabel}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Feature Showcase 1 (Paperless Consents & Medical Records) */}
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
                          Patient Chart
                        </h4>
                        <p className="text-sm text-slate-500">
                          Coaching Program — Session Notes
                        </p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-4 bg-slate-100 rounded w-full"></div>
                      <div className="h-4 bg-slate-100 rounded w-5/6"></div>
                      <div className="h-4 bg-slate-100 rounded w-4/6"></div>
                    </div>
                    <button className="w-full mt-6 bg-[#009689]/10 text-[#009689] font-sans py-2 rounded-md">
                      View Complete Record
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="w-12 h-12 bg-[#009689]/10 rounded-xl flex items-center justify-center mb-6">
                <FileText className="w-6 h-6 text-[#009689]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-sans text-slate-900 mb-6">
                Capture complete patient history and track progress easily
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Patient intake forms, session notes, therapy plans, and progress
                tracking — all securely stored and accessible whenever you need
                them.
              </p>
              <ul className="space-y-5">
                {[
                  "Digital intake forms completed before the first session",
                  "Session notes and therapy plans stored in unified patient records",
                  "Track speech progress and milestones over time",
                  "Secure video sessions for remote speech therapy",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 text-[#009689]">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <span className="text-slate-700 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT MOCKUP */}
          <div className="relative h-[420px] hidden lg:block">
            <div className="absolute left-0 top-8 w-56 bg-white rounded-2xl shadow-sm border border-slate-100 p-5">
              <p className="text-xs font-sans text-slate-500 mb-5">ACCOUNT</p>

              <div className="space-y-4 text-sm">
                <div className="text-[#009689] font-semibold">Dashboard</div>
                <div className="text-slate-400">Personal Details</div>
                <div className="text-slate-400">Payments</div>
                <div className="text-slate-400">Appointments</div>
                <div className="text-slate-400">Therapy Notes</div>
              </div>
            </div>

            <div className="absolute left-36 top-16 w-80 bg-slate-50 rounded-3xl border border-slate-200 shadow-lg p-6">
              <p className="text-xs font-sans text-[#009689] mb-6">
                UPCOMING APPOINTMENT
              </p>

              <h4 className="text-lg font-semibold text-slate-900">
                Dr. Marcus Chen
              </h4>

              <p className="text-slate-500 mb-6">Clinical Psychologist</p>

              <div className="space-y-4 text-sm text-slate-600">
                <div>
                  <p className="text-xs uppercase">Service</p>
                  <p>Mental Health Counseling</p>
                </div>

                <div>
                  <p className="text-xs uppercase">Date</p>
                  <p>Friday 17th April</p>
                </div>

                <div>
                  <p className="text-xs uppercase">Time</p>
                  <p>12:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT ACCORDION */}
          <div>
            {portalFeatures.map((item, i) => {
              const active = featureOpen === i;

              return (
                <div key={i} className="border-b border-slate-300">
                  <button
                    onClick={() => setFeatureOpen(active ? -1 : i)}
                    className={`w-full flex justify-between items-start text-left py-6 px-5 ${
                      active
                        ? "bg-white border border-[#009689] rounded-t-xl"
                        : ""
                    }`}
                  >
                    <span
                      className={`text-xl leading-snug ${
                        active
                          ? "font-semibold text-slate-900"
                          : "text-slate-800"
                      }`}
                    >
                      {item.title}
                    </span>

                    <span className="text-[#009689] text-xl">
                      {active ? "−" : "+"}
                    </span>
                  </button>

                  {active && (
                    <div className="bg-white border border-[#009689] border-t-0 rounded-b-xl px-5 pb-6">
                      <p className="text-slate-600 leading-7 mb-4">
                        {item.desc}
                      </p>

                      {item.cta && (
                        <button className="text-[#009689] font-semibold">
                          {item.cta} ↗
                        </button>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Feature Showcase 3 (Stock & Inventory Management) */}
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
              From the first patient interaction to billing and compliance —
              everything your team needs is already here.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((feature, i) => {
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

      <PricingTeaser />

      {/* 7. FAQ Section */}

      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-sans text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600">
              Common questions from speech therapists and clinic owners.
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

      {/* 5. Trust & Stats Section (Dark Theme) */}
      <section className="bg-slate-900 py-24 text-white relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#009689]/5 blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center divide-y lg:divide-y-0 lg:divide-x divide-slate-700 mb-20">
            <div className="py-4 lg:py-0">
              <Shield className="w-10 h-10 text-[#009689] mx-auto mb-4" />
              <p className="text-5xl font-sans mb-2">100%</p>
              <p className="text-sm text-slate-400 uppercase tracking-widest font-medium">
                HIPAA Compliant
              </p>
            </div>
            <div className="py-4 lg:py-0">
              <Activity className="w-10 h-10 text-[#009689] mx-auto mb-4" />
              <p className="text-5xl font-sans mb-2">1M+</p>
              <p className="text-sm text-slate-400 uppercase tracking-widest font-medium">
                Coaching Sessions Logged
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
              I used to spend hours managing appointments and paperwork. Now
              everything is automated and I can fully focus on my patients.
            </p>
            <div>
              <h4 className="font-sans text-xl text-white">Dr. Marcus Chen</h4>
              <p className="text-[#009689] font-medium">
                Speech Therapist, Pediatric Therapy Clinic
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Bottom CTA Banner */}
      <section className="bg-slate-900 py-24 border-t border-slate-800 relative overflow-hidden text-center pt-12">
        <div className="absolute inset-0 bg-gradient-to-t from-[#009689]/10 to-transparent pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-sans text-white mb-6">
            Focus on patient progress, not paperwork.
          </h2>

          <p className="text-xl text-slate-300 mb-10">
            See how speech therapy clinics automate scheduling, documentation,
            and patient management — without the admin chaos.
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
    </div>
  );
}
