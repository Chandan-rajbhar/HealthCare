import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CheckCircle2,
  LayoutDashboard,
  Users,
  CalendarDays,
  Calendar,
  CreditCard,
  FileText,
  Search,
  Bell,
  MessageSquare,
  ChevronUp,
  ChevronDown,
  AlertCircle,
  Menu,
  X,
} from "lucide-react";

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

export default function Hero() {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLElement | null>(null);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [mobileSidebar, setMobileSidebar] = useState(false);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((itemIndex) => itemIndex !== index)
        : [...prev, index],
    );
  };

  useEffect(() => {
    const onScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const sectionTop = section.offsetTop;
      const distance = Math.max((window.scrollY || 0) - sectionTop, 0);

      setScrollProgress(clamp(distance / 600, 0, 1));
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dashboardStyle = useMemo(
    () => ({
      transform: `
      perspective(2000px)
      rotateX(${12 - scrollProgress * 12}deg)
      scale(${0.94 + scrollProgress * 0.06})
      translateY(${-scrollProgress * 15}px)
    `,
      opacity: 0.5 + scrollProgress * 0.5,
      transition: "all 0.2s cubic-bezier(0.22, 1, 0.36, 1)",
    }),
    [scrollProgress],
  );

  const navItems = [
    { label: "Dashboard", icon: LayoutDashboard, active: true },
    { label: "Patients", icon: Users },
    { label: "Appointments", icon: CalendarDays },
    { label: "Calendar", icon: Calendar },
    { label: "Billing", icon: CreditCard },
    { label: "EMR", icon: FileText },
  ];

  const stats = [
    {
      label: "Total Patients",
      value: "1,284",
      badge: { text: "+12%", positive: true },
      sub: null,
      icon: <Users className="h-5 w-5 text-blue-500" />,
      iconBg: "bg-blue-50",
      action: false,
    },
    {
      label: "Today's Appointments",
      value: "18",
      badge: { text: "Current", positive: null },
      sub: "Next appointment at 10:30 AM",
      icon: <CalendarDays className="h-5 w-5 text-cyan-500" />,
      iconBg: "bg-cyan-50",
      action: false,
    },
    {
      label: "Monthly Revenue",
      value: "$42.8k",
      badge: { text: "+8.4%", positive: true },
      sub: null,
      icon: <CreditCard className="h-5 w-5 text-emerald-500" />,
      iconBg: "bg-emerald-50",
      action: false,
    },
    {
      label: "Outstanding Payments",
      value: "$2,150",
      badge: { text: "Action", positive: false },
      sub: "4 invoices past due date",
      icon: <AlertCircle className="h-5 w-5 text-red-500" />,
      iconBg: "bg-red-50",
      action: true,
    },
  ];

  const featureTabs = [
    "Smart Appointment Scheduling",
    "Online Patient Booking",
    "Digital Health Records",
    "Automated Clinical Workflows",
    "Secure Healthcare Payments",
  ];

  const capabilities = [
    {
      title: "Patient Care & Records",
      description:
        "Access digital patient histories, clinical notes, treatment plans, prescriptions, and medical documentation in one secure system.",
    },
    {
      title: "Scheduling & Billing",
      description:
        "Streamline appointment scheduling, payment collection, invoicing, and healthcare billing workflows.",
    },
    {
      title: "Team & Operations",
      description:
        "Coordinate staff, automate administrative tasks, and improve communication across your healthcare organization.",
    },
    {
      title: "Growth & Analytics",
      description:
        "Use real-time reporting, patient insights, and operational analytics to make smarter business decisions.",
    },
  ];

  const benefits = [
    {
      title: "Reclaim Clinical Time",
      description:
        "Reduce paperwork, repetitive admin tasks, and disconnected manual processes.",
    },
    {
      title: "Accelerate Team Performance",
      description:
        "Help providers and staff work faster with centralized workflows and instant data access.",
    },
    {
      title: "Increase Patient Engagement",
      description:
        "Deliver smoother communication, simplified scheduling, and better patient experiences.",
    },
    {
      title: "Improve Operational Growth",
      description:
        "Track performance, manage revenue workflows, and scale healthcare operations confidently.",
    },
  ];

  const trustPoints = [
    "Faster Scheduling Workflows",
    "Better Patient Record Management",
    "Improved Billing Efficiency",
    "Stronger Clinical Coordination",
    "Scalable Healthcare Operations",
  ];

  const faqs = [
    {
      question: "What is Healthcare EHR Software?",
      answer:
        "Healthcare EHR Software helps clinics manage patient records, appointments, billing, clinical notes, and workflows in one secure platform.",
    },
    {
      question:
        "How does Electronic Health Record Software improve clinic operations?",
      answer:
        "It streamlines scheduling, documentation, communication, and billing while reducing administrative work.",
    },
    {
      question: "Who can use Healthcare Management Software?",
      answer:
        "Clinics, hospitals, wellness centers, specialists, and healthcare organizations can all use the platform.",
    },
    {
      question:
        "Does the platform support appointment scheduling and online booking?",
      answer:
        "Yes. It includes scheduling tools, online booking, reminders, and calendar management.",
    },
  ];

  useEffect(() => {
    document.title =
      "Healthcare EHR Software | Electronic Health Record Software";
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20"
    >
      {/* Background */}
      <div className="absolute inset-x-0 top-0 h-[500px] bg-[radial-gradient(circle_at_top,_rgba(6,182,212,0.15),transparent_60%)] -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* HERO */}
        <div className="text-center">
          <h1 className="mx-auto max-w-5xl text-3xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-3xl">
            Healthcare EHR Software for Smarter Clinic Operations & Connected
            Patient Care
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base lg:text-lg">
            Simplify patient records, appointment scheduling, billing workflows,
            and healthcare operations using cloud-based Electronic Health Record
            Software designed for modern clinics and healthcare providers.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              onClick={() => navigate("/book-demo")}
              className="h-12 w-full rounded-full px-8 text-base sm:w-auto"
            >
              Start Free Trial
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate("/book-demo")}
              className="h-12 w-full rounded-full px-8 text-base sm:w-auto"
            >
              Schedule Live Demo
            </Button>
          </div>
        </div>

        {/* DASHBOARD */}
        <div className="relative mt-14 lg:mt-20" style={dashboardStyle}>
          <div className="absolute inset-0 rounded-[32px] bg-gradient-to-r from-cyan-300/20 to-blue-300/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
            <div className="flex flex-col lg:flex-row">
              {/* Mobile Header */}
              <div className="flex items-center justify-between border-b border-slate-100 p-4 lg:hidden">
                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-600 text-white">
                    S
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      HealVare
                    </p>

                    <p className="text-xs text-slate-400">
                      PRIVATE PRACTICE
                    </p>
                  </div>
                </div>

                <button onClick={() => setMobileSidebar(!mobileSidebar)}>
                  {mobileSidebar ? (
                    <X className="h-6 w-6 text-slate-700" />
                  ) : (
                    <Menu className="h-6 w-6 text-slate-700" />
                  )}
                </button>
              </div>

              {/* SIDEBAR */}
              <aside
                className={`
                  ${
                    mobileSidebar ? "block" : "hidden"
                  }
                  w-full border-b border-slate-100 bg-white lg:block lg:w-64 lg:border-b-0 lg:border-r
                `}
              >
                <div className="hidden items-center gap-3 border-b border-slate-100 px-5 py-5 lg:flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-600 text-white">
                    S
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-800">
                      HealVare
                    </p>

                    <p className="text-xs text-slate-400">
                      PRIVATE PRACTICE
                    </p>
                  </div>
                </div>

                <nav className="space-y-1 p-4">
                  {navItems.map((item) => (
                    <div
                      key={item.label}
                      className={`flex cursor-pointer items-center gap-3 rounded-xl px-4 py-3 text-sm transition-all ${
                        item.active
                          ? "bg-cyan-50 text-cyan-700"
                          : "text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      <item.icon className="h-5 w-5" />
                      {item.label}
                    </div>
                  ))}
                </nav>
              </aside>

              {/* CONTENT */}
              <div className="flex-1 overflow-hidden">
                {/* Topbar */}
                <header className="flex flex-col gap-4 border-b border-slate-100 bg-white p-4 sm:flex-row sm:items-center sm:justify-between lg:p-6">
                  <div className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3 sm:w-[320px]">
                    <Search className="h-4 w-4 text-slate-400" />

                    <span className="text-sm text-slate-400">
                      Search patients or records...
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-4 sm:justify-end">
                    <div className="flex items-center gap-4">
                      <Bell className="h-5 w-5 text-slate-500" />
                      <MessageSquare className="h-5 w-5 text-slate-500" />
                    </div>

                    <div className="flex items-center gap-3 border-l border-slate-200 pl-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 text-sm font-semibold text-white">
                        JS
                      </div>

                      <div>
                        <p className="text-sm font-medium text-slate-800">
                          Dr. Julianna Smith
                        </p>

                        <p className="text-xs text-slate-400">
                          Chief Medical Officer
                        </p>
                      </div>
                    </div>
                  </div>
                </header>

                {/* Main */}
                <div className="bg-slate-50/50 p-4 sm:p-6">
                  <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h2 className="text-xl font-semibold text-slate-900">
                        Clinical Overview
                      </h2>

                      <p className="mt-1 text-sm text-slate-500">
                        Good morning, Dr. Smith. Here's what's happening today.
                      </p>
                    </div>

                    <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm text-slate-500 shadow-sm">
                      <Calendar className="h-4 w-4 text-cyan-600" />
                      June 14, 2026
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    {stats.map((stat) => (
                      <Card
                        key={stat.label}
                        className="rounded-2xl border border-slate-200 shadow-sm"
                      >
                        <CardContent className="p-5">
                          <div className="mb-4 flex items-start justify-between">
                            <div
                              className={`flex h-11 w-11 items-center justify-center rounded-xl ${stat.iconBg}`}
                            >
                              {stat.icon}
                            </div>

                            <span
                              className={`rounded-full px-3 py-1 text-xs font-medium ${
                                stat.action
                                  ? "bg-red-100 text-red-600"
                                  : stat.badge.positive === true
                                    ? "bg-emerald-100 text-emerald-600"
                                    : "bg-slate-100 text-slate-600"
                              }`}
                            >
                              {stat.badge.positive === true && (
                                <ChevronUp className="mr-1 inline h-3 w-3" />
                              )}

                              {stat.badge.text}
                            </span>
                          </div>

                          <p className="text-sm text-slate-500">
                            {stat.label}
                          </p>

                          <h3 className="mt-2 text-3xl font-bold text-slate-900">
                            {stat.value}
                          </h3>

                          {stat.sub && (
                            <p className="mt-2 text-xs leading-5 text-slate-400">
                              {stat.sub}
                            </p>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FEATURES */}
        <div className="mt-20 space-y-20">
          <section className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-3xl">
              Complete Healthcare Management Software
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600">
              Manage online booking, digital patient records, scheduling,
              payments, and healthcare workflows from one centralized platform.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
              {featureTabs.map((tab) => (
                <div
                  key={tab}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-left transition-all hover:-translate-y-1 hover:border-cyan-300"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-cyan-600" />

                    <p className="font-medium text-slate-800">{tab}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Capabilities */}
          <section>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-slate-900 sm:text-3xl">
                Electronic Health Record Software
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600">
                Eliminate disconnected systems and streamline healthcare
                operations with one integrated platform.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {capabilities.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <h3 className="text-2xl font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits */}
          <section>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-slate-900 sm:text-3xl">
                Improve Productivity & Patient Experience
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600">
                Modern healthcare organizations need intelligent systems that
                improve workflows and reduce administrative workload.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {benefits.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
                >
                  <h3 className="text-2xl font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Trust */}
          <section>
            <div className="text-center">
              <h2 className="text-3xl font-bold text-slate-900 sm:text-3xl">
                Trusted by Healthcare Teams
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600">
                Clinics and healthcare organizations use our software to improve
                workflows and operational performance.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {trustPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <CheckCircle2 className="mt-1 h-5 w-5 text-cyan-600" />

                  <p className="text-slate-700">{point}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="rounded-[32px] border border-slate-200 bg-slate-50 px-6 py-14 text-center sm:px-10">
            <h2 className="mx-auto max-w-4xl text-3xl font-bold text-slate-900 sm:text-3xl">
              Built for Clinics & Growing Medical Practices
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-600">
              Manage appointments, billing systems, patient communication, and
              operational growth from one unified platform.
            </p>
          </section>

          {/* FAQ */}
          <section className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
            <div className="mx-auto max-w-4xl">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="mt-10 space-y-2">
                {faqs.map((faq, index) => {
                  const isOpen = openItems.includes(index);

                  return (
                    <div key={index}>
                      <button
                        onClick={() => toggleItem(index)}
                        className="flex w-full items-center justify-between gap-4 py-5 text-left"
                      >
                        <span className="text-base font-medium text-slate-800 sm:text-lg">
                          {faq.question}
                        </span>

                        <span
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                            isOpen
                              ? "bg-cyan-600 text-white"
                              : "bg-slate-100 text-slate-600"
                          }`}
                        >
                          {isOpen ? (
                            <ChevronUp className="h-5 w-5" />
                          ) : (
                            <ChevronDown className="h-5 w-5" />
                          )}
                        </span>
                      </button>

                      {isOpen && (
                        <p className="pb-5 pr-2 text-sm leading-7 text-slate-600 sm:text-base">
                          {faq.answer}
                        </p>
                      )}

                      <Separator />
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="rounded-[32px] border border-slate-200 bg-white px-6 py-14 text-center shadow-sm sm:px-10">
            <h2 className="mx-auto max-w-4xl text-3xl font-bold text-slate-900 sm:text-3xl">
              Modernize Your Healthcare Workflow
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-600">
              Upgrade patient management, digital records, scheduling, billing,
              and operational efficiency using secure Healthcare EHR Software.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                onClick={() => navigate("/book-demo")}
                className="h-14 w-full rounded-full px-8 text-lg sm:w-auto"
              >
                Book a Demo
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => navigate("/book-demo")}
                className="h-14 w-full rounded-full px-8 text-lg sm:w-auto"
              >
                Start Free Trial
              </Button>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}