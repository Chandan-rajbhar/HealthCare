import { useEffect, useState } from "react"
import {
  ShieldCheck,
  Clock,
  FileText,
  CreditCard,
  BarChart3,
  Wallet,
  Receipt,
  Database,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import CommonTestimonials from "@/components/CommonTestimonials"
import { useNavigate } from "react-router-dom"

// ─── Core Features ────────────────────────────────────────────────────────────

const FEATURES = [
  {
    icon: Receipt,
    title: "Patient Billing & Invoice Management",
    description:
      "Manage patient invoices, balances, healthcare charges, and payment records from one centralized billing environment.",
    cta: "View Billing System",
  },
  {
    icon: CreditCard,
    title: "Secure Patient Payment Processing",
    description:
      "Accept digital healthcare payments through secure payment workflows designed for modern clinics and healthcare providers.",
    cta: "Explore Payment Features",
  },
  {
    icon: Wallet,
    title: "Revenue Workflow Automation",
    description:
      "Automate healthcare payment tracking, invoice coordination, reminders, and recurring billing operations.",
    cta: "View Revenue Automation Tools",
  },
  {
    icon: BarChart3,
    title: "Financial Reporting & Payment Visibility",
    description:
      "Track payment activity, billing performance, revenue trends, and healthcare financial workflows using centralized dashboards.",
    cta: "View Financial Dashboard",
  },
]

// ─── Operations ──────────────────────────────────────────────────────────────

const OPERATIONS = [
  {
    title: "Simplify Billing Management",
    desc: "Centralize invoices, payment workflows, and financial coordination.",
  },
  {
    title: "Improve Revenue Visibility",
    desc: "Track payment performance, transactions, and billing activity in real time.",
  },
  {
    title: "Reduce Administrative Complexity",
    desc: "Automate payment coordination and reduce manual financial processes.",
  },
  {
    title: "Improve Patient Payment Experience",
    desc: "Provide faster, clearer, and more accessible healthcare payment workflows.",
  },
]

// ─── Benefits ────────────────────────────────────────────────────────────────

const BENEFITS = [
  "Manage billing workflows from one connected platform",
  "Improve visibility into patient payments and revenue operations",
  "Reduce manual billing coordination and financial administration",
  "Simplify invoices, transactions, and healthcare payment workflows",
  "Centralize healthcare financial operations across clinics and providers",
]

// ─── Use Cases ───────────────────────────────────────────────────────────────

const USE_CASES = [
  {
    title: "Private Clinics",
    desc: "Manage invoices, payments, and operational billing workflows.",
  },
  {
    title: "Specialty Healthcare Practices",
    desc: "Coordinate patient billing and healthcare revenue processes.",
  },
  {
    title: "Multi-Provider Healthcare Teams",
    desc: "Handle payment workflows across providers and healthcare operations.",
  },
  {
    title: "Growing Medical Organizations",
    desc: "Scale healthcare financial operations with connected billing systems.",
  },
]

// ─── Integrations ────────────────────────────────────────────────────────────

const INTEGRATIONS = [
  "Electronic Health Record Software",
  "Appointment Scheduling Systems",
  "Patient Portal Platforms",
  "Accounting & Financial Systems",
  "Payment Gateways",
  "Calendar Tools",
  "Revenue Analytics Dashboards",
]

// ─── FAQ ─────────────────────────────────────────────────────────────────────

const FAQ_ITEMS = [
  {
    q: "What is healthcare payment software?",
    a: "It is a system that helps healthcare providers manage billing, invoices, patient payments, and revenue workflows.",
  },
  {
    q: "Can billing workflows be automated?",
    a: "Yes, the platform supports invoice automation, payment tracking, and recurring billing workflows.",
  },
  {
    q: "Does it support secure patient payments?",
    a: "Yes, it supports secure healthcare payment management and protected transaction handling.",
  },
  {
    q: "Can clinics manage invoices and payments from one system?",
    a: "Yes, healthcare teams can centralize billing operations and payment coordination from one platform.",
  },
  {
    q: "Is it suitable for growing healthcare organizations?",
    a: "Yes, it supports private clinics, specialty practices, and multi-provider healthcare operations.",
  },
]

// ─── FAQ Accordion ───────────────────────────────────────────────────────────

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number>(0)

  return (
    <div className="divide-y divide-gray-200 border-t border-gray-200">
      {FAQ_ITEMS.map((item, index) => {
        const isOpen = openIndex === index

        return (
          <div key={index}>
            <button
              className="w-full flex items-center justify-between py-6 text-left gap-4"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <span
                className={`text-base font-semibold ${
                  isOpen ? "text-gray-900" : "text-gray-700"
                }`}
              >
                {item.q}
              </span>

              <span
                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                  isOpen ? "bg-primary text-white" : "text-gray-400"
                }`}
              >
                {isOpen ? (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M18 15l-6-6-6 6" />
                  </svg>
                ) : (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                )}
              </span>
            </button>

            {isOpen && (
              <p className="text-gray-500 text-sm leading-relaxed pb-6">
                {item.a}
              </p>
            )}
          </div>
        )
      })}
    </div>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function Medipay() {
  const navigate = useNavigate()

  useEffect(() => {
    document.title =
      "Healthcare Payment Software for Billing, Patient Payments & Revenue Management"

    let descriptionMeta = document.querySelector('meta[name="description"]')
    if (!descriptionMeta) {
      descriptionMeta = document.createElement("meta")
      descriptionMeta.setAttribute("name", "description")
      document.head.appendChild(descriptionMeta)
    }
    descriptionMeta.setAttribute(
      "content",
      "Manage patient payments, healthcare billing, invoices, and revenue workflows using cloud-based healthcare payment software built for clinics and healthcare providers.",
    )

    let keywordsMeta = document.querySelector('meta[name="keywords"]')
    if (!keywordsMeta) {
      keywordsMeta = document.createElement("meta")
      keywordsMeta.setAttribute("name", "keywords")
      document.head.appendChild(keywordsMeta)
    }
    keywordsMeta.setAttribute(
      "content",
      "Healthcare Payment Software, Healthcare billing software, Medical payment software, Patient payment management software, Healthcare revenue management software, Healthcare billing platform, Medical billing workflow software, healthcare payment software for clinics, medical billing and payment management software, cloud based healthcare payment platform, patient billing software for healthcare providers, healthcare revenue workflow management software, healthcare financial operations software",
    )
  }, [])

  return (
    <div className="bg-white">

      {/* ── HERO SECTION ── */}

      <section className="w-full bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">

          <div>
            <p className="text-primary font-medium mb-4">
              Healthcare Payment Software
            </p>

            <h1 className="text-3xl lg:text-3xl font-semibold text-gray-900 leading-tight mb-6">
              Healthcare Payment Software for Billing, Patient Payments &
              Revenue Workflows
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Manage patient payments, invoices, healthcare billing, revenue
              operations, and payment workflows using cloud-based healthcare
              payment software built for private clinics, specialty practices,
              and multi-provider healthcare teams.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                className="rounded-half px-8 h-11 cursor-pointer"
                onClick={() => navigate("/book-demo")}
              >
                View Payment Demo
              </Button>

              <Button
                variant="outline"
                className="rounded-half px-8 h-11 cursor-pointer"
                onClick={() => navigate("/free-trial")}
              >
                Start Free Trial
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/payments.jpg"
                alt="Healthcare Payment Software"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── INTRO SECTION ── */}

      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-8">
            Simplify Healthcare Billing & Patient Payment Operations
          </h2>

          <div className="space-y-1 text-gray-600 leading-relaxed text-lg">

            <p>
              Healthcare providers manage invoices, patient balances, payment
              coordination, and revenue workflows every day. Manual billing
              systems, disconnected payment tools, and fragmented financial
              processes often create administrative delays and payment
              inefficiencies.
            </p>

            <p>
              This healthcare payment software centralizes billing workflows,
              payment processing, invoice management, and healthcare financial
              coordination from one connected platform.
            </p>

            <p>
              It helps clinics improve visibility into payments, reduce
              operational complexity, and streamline revenue workflows across
              healthcare operations.
            </p>
          </div>
        </div>
      </section>

      {/* ── CORE FEATURES ── */}

      <section className="bg-gray-50 py-20 px-6">
        <div className="mx-auto max-w-7xl">

          <h2 className="text-3xl lg:text-4xl font-semibold text-center text-gray-900">
            Core Features of Our Healthcare Payment Software
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mt-14">
            {FEATURES.map((feature) => {
              const Icon = feature.icon

              return (
                <div
                  key={feature.title}
                  className="bg-white rounded-2xl border p-8 shadow-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {feature.description}
                  </p>

                  <button className="text-primary font-medium hover:underline cursor-pointer">
                    {feature.cta}
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── RESULTS & OPERATIONS ── */}

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl lg:text-4xl font-semibold text-center text-gray-900 mb-14">
            How Clinics Improve Healthcare Payment Operations
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {OPERATIONS.map((item) => (
              <div
                key={item.title}
                className="border rounded-2xl p-8 hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}

      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl lg:text-4xl font-semibold text-center text-gray-900 mb-14">
            Why Healthcare Teams Use Our Payment Management Platform
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {BENEFITS.map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-4 bg-white border rounded-xl p-6"
              >
                <ShieldCheck className="w-5 h-5 text-primary mt-1 flex-shrink-0" />

                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── USE CASES ── */}

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl lg:text-4xl font-semibold text-center text-gray-900 mb-14">
            Built for Every Healthcare Billing Workflow
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {USE_CASES.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border p-8 bg-gray-50"
              >
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST SECTION ── */}

      <section className="bg-gray-900 py-20 px-6 text-white">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl lg:text-4xl font-semibold mb-8">
            Built for Modern Healthcare Revenue Operations
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed max-w-4xl">
            Unlike generic payment platforms, this healthcare payment software
            is designed around real healthcare billing workflows. Manage
            payments, billing coordination, invoices, and financial operations
            inside one connected healthcare environment.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mt-14">
            {[
              "Secure Payment Infrastructure",
              "Healthcare-Focused Workflow Design",
              "Cloud-Based Financial Management",
              "Built for Growing Clinical Operations",
              "Centralized Revenue Visibility",
            ].map((item) => (
              <div
                key={item}
                className="border border-white/10 rounded-xl p-5 bg-white/5"
              >
                <p className="text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECURITY SECTION ── */}

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

          <div>

            <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-6">
              Secure Healthcare Billing & Payment Data Management
            </h2>

            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              Protect billing records, patient payment information, transaction
              histories, and healthcare financial data using secure cloud-based
              infrastructure.
            </p>

            <p className="text-gray-600 leading-relaxed text-lg">
              Role-based access controls help administrators, finance teams, and
              providers manage operational visibility while maintaining
              controlled access across billing workflows.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">

            <div className="border rounded-2xl p-8 text-center">
              <Database className="w-10 h-10 mx-auto text-primary mb-4" />
              <h3 className="font-semibold text-gray-900">
                Secure Financial Infrastructure
              </h3>
            </div>

            <div className="border rounded-2xl p-8 text-center">
              <ShieldCheck className="w-10 h-10 mx-auto text-primary mb-4" />
              <h3 className="font-semibold text-gray-900">
                Role-Based Visibility
              </h3>
            </div>

            <div className="border rounded-2xl p-8 text-center">
              <Clock className="w-10 h-10 mx-auto text-primary mb-4" />
              <h3 className="font-semibold text-gray-900">
                Real-Time Billing Tracking
              </h3>
            </div>

            <div className="border rounded-2xl p-8 text-center">
              <FileText className="w-10 h-10 mx-auto text-primary mb-4" />
              <h3 className="font-semibold text-gray-900">
                Connected Revenue Workflows
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* ── PLATFORM RELIABILITY ── */}

      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-8">
            Built for Daily Healthcare Financial Operations
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            From private clinics to multi-provider healthcare practices, the
            platform supports high-volume healthcare billing environments. It
            reduces dependency on disconnected tools, spreadsheets, and manual
            payment coordination.
          </p>
        </div>
      </section>

      {/* ── INTEGRATIONS ── */}

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl lg:text-4xl font-semibold text-center text-gray-900 mb-14">
            Integrate Payment Workflows with Your Healthcare Operations Stack
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {INTEGRATIONS.map((item) => (
              <div
                key={item}
                className="border rounded-xl p-6 bg-gray-50 text-center"
              >
                <p className="font-medium text-gray-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}

      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl lg:text-4xl font-semibold text-center text-gray-900 mb-14">
            How Our Healthcare Payment Software Works
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                step: "Step 1",
                title: "Configure Billing Structures",
                desc: "Set up invoices, charges, payment workflows, and financial rules.",
              },
              {
                step: "Step 2",
                title: "Manage Patient Payments",
                desc: "Track balances, transactions, and healthcare payment activity.",
              },
              {
                step: "Step 3",
                title: "Automate Billing Operations",
                desc: "Handle reminders, invoices, recurring billing, and payment coordination.",
              },
              {
                step: "Step 4",
                title: "Monitor Revenue Performance",
                desc: "Track financial reporting, payment trends, and billing visibility.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-2xl border p-8"
              >
                <span className="text-primary font-semibold text-sm">
                  {item.step}
                </span>

                <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}

      <CommonTestimonials />

      {/* ── FAQ ── */}

      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-3xl">

          <h2 className="text-4xl font-semibold text-center text-gray-900 mb-12">
            Frequently Asked Questions About Healthcare Payment Software
          </h2>

          <FaqAccordion />
        </div>
      </section>

      {/* ── FINAL CTA ── */}

      <section className="py-24 px-6 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-4xl font-semibold mb-6">
            Modernize Healthcare Billing & Payment Management
          </h2>

          <p className="text-lg leading-relaxed text-white/90 max-w-3xl mx-auto">
            Streamline patient payments, automate billing workflows, and
            improve healthcare revenue visibility using cloud-based healthcare
            payment software.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">

            <Button
              className="bg-white text-black hover:bg-gray-100 rounded-half px-8 h-11 cursor-pointer"
              onClick={() => navigate("/free-trial")}
            >
              Start Free Trial
            </Button>

            <Button
              variant="outline"
              className="border-white text-white bg-whitetext-black rounded-half px-8 h-11 cursor-pointer"
              onClick={() => navigate("/book-demo")}
            >
              Book Payment Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

