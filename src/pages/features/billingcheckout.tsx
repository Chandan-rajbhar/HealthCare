import { useState, useEffect } from "react"
import {
  CreditCard,
  FileText,
  ShieldCheck,
  BarChart3,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import CommonTestimonials from "@/components/CommonTestimonials"
import { useNavigate } from "react-router-dom"

// ─── FEATURES ────────────────────────────────────────────────────────────────

const FEATURES = [
  {
    icon: FileText,
    title: "Smart healthcare billing",
    description:
      "Generate invoices, manage treatment charges, and automate healthcare billing workflows from one centralized system.",
  },
  {
    icon: CreditCard,
    title: "Fast patient checkout",
    description:
      "Simplify patient checkout with digital invoices, quick billing summaries, and secure payment collection workflows.",
  },
  {
    icon: ShieldCheck,
    title: "Secure payment processing",
    description:
      "Accept secure online and in-clinic payments while managing transactions and financial records safely.",
  },
  {
    icon: BarChart3,
    title: "Real-time financial reporting",
    description:
      "Track revenue, invoices, payment performance, and operational insights using centralized reporting dashboards.",
  },
]

// ─── FAQ ─────────────────────────────────────────────────────────────────────

const FAQ_ITEMS = [
  {
    q: "What is Healthcare Billing & Checkout Software?",
    a: "Healthcare Billing & Checkout Software helps clinics manage patient billing, invoices, payment collection, checkout workflows, and healthcare financial operations digitally.",
  },
  {
    q: "How does billing software improve clinic operations?",
    a: "The platform automates payment workflows, reduces paperwork, improves billing accuracy, and simplifies checkout processes for healthcare teams.",
  },
  {
    q: "Can the software process patient payments securely?",
    a: "Yes. The platform supports secure online and in-clinic payment processing, transaction tracking, and invoice management workflows.",
  },
  {
    q: "Does the software integrate with patient records?",
    a: "Yes. Billing information connects directly with patient records, appointments, treatment histories, prescriptions, and healthcare documentation.",
  },
  {
    q: "Can clinics manage insurance billing workflows?",
    a: "Yes. Clinics can organize insurance coordination, reimbursement tracking, and patient billing workflows within one centralized system.",
  },
]

// ─── FAQ ACCORDION ───────────────────────────────────────────────────────────

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
                  isOpen
                    ? "bg-primary text-white"
                    : "text-gray-400"
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

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function BillingCheckout() {
  const navigate = useNavigate()

  useEffect(() => {
    document.title = "Healthcare Billing & Checkout Software | Healthcare EHR Software for Clinics"

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null
      if (!el) {
        el = document.createElement("meta")
        el.setAttribute("name", name)
        document.head.appendChild(el)
      }
      el.setAttribute("content", content)
    }

    setMeta(
      "description",
      "Manage healthcare billing, patient payments, invoices, checkout workflows, insurance coordination, and financial operations using secure Billing & Checkout Software and Healthcare EHR Software for clinics."
    )

    setMeta(
      "keywords",
      "Healthcare Billing Software, Billing & Checkout Software, Healthcare EHR Software, Electronic Health Record Software, Medical Billing Software, Healthcare Management Software, Clinic Management Software, Patient Payment Processing, Healthcare Workflow Automation, Appointment Scheduling Software"
    )
  }, [])

  return (
    <div className="bg-white">

      {/* ── HERO ───────────────────────────────────── */}
      <section className="w-full bg-gray-50 min-h-[700px] flex items-center py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>
            <h1 className="text-3xl lg:text-3xl font-semibold text-gray-900 leading-tight mb-6">
              Healthcare Billing & Checkout Software for Faster Payments & Streamlined Clinic Operations
            </h1>

            <p className="text-gray-600 text-lg mb-6">
              Simplify healthcare billing, invoices, patient payments,
              insurance workflows, and checkout operations using secure
              cloud-based Healthcare EHR Software.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              HealVare Billing & Checkout Software helps healthcare
              organizations improve billing accuracy, accelerate payment
              collection, reduce administrative workload, and deliver
              smoother patient checkout experiences from one centralized platform.
            </p>

            <Button
              className="rounded-full px-10 h-11 cursor-pointer"
              onClick={() => navigate("/book-demo")}
            >
              Book a Demo
            </Button>
          </div>

          {/* Right */}
          <div className="relative h-full flex items-center">
            <div className="rounded-2xl overflow-hidden w-full aspect-[4/3] lg:h-[500px]">
              <img
                src="/billing.png"
                alt="Healthcare Billing Software"
                className="w-full h-full object-cover object-top shadow-2xl"
              />
            </div>
          </div>

        </div>
      </section>


      

      {/* ── LOGOS ─────────────────────────────────── */}
      <section className="bg-white py-12 px-6 border-y border-gray-100">
        <div className="mx-auto max-w-6xl">

          <p className="text-center text-sm text-gray-400 uppercase tracking-widest mb-8">
            Trusted by clinics and healthcare providers worldwide
          </p>

          <div className="flex flex-wrap justify-center items-center gap-10 opacity-40 grayscale">
            {[
              "MediCare",
              "HealthFirst",
              "CareSync",
              "MedPlus",
              "ClinicHub",
              "WellCare",
            ].map((name) => (
              <span
                key={name}
                className="text-xl font-bold text-gray-400 tracking-tight"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES ──────────────────────────────── */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="mx-auto max-w-6xl">

          <h2 className="text-3xl font-semibold text-center text-gray-900">
            Everything Healthcare Teams Need for Smarter Billing & Checkout
          </h2>

          <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
            Manage invoices, patient payments, insurance coordination,
            financial reporting, and billing workflows from one connected
            healthcare platform.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
            {FEATURES.map((feature) => {
              const Icon = feature.icon

              return (
                <div
                  key={feature.title}
                  className="bg-white rounded-xl p-6 shadow-sm border"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>

                  <h3 className="font-semibold text-lg text-gray-900">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ── PRODUCT SECTIONS ─────────────────────── */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-6xl space-y-24">

          {/* Row 1 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div className="rounded-2xl overflow-hidden bg-gray-100">
              <img
                src="/billing.png"
                alt="Healthcare Billing"
                className="w-full h-full object-cover object-top shadow-2xl"
              />
            </div>

            <div>
              <p className="text-xs text-primary uppercase tracking-widest mb-3">
                Healthcare Billing
              </p>

              <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                Simplify billing and patient payment collection
              </h3>

              <p className="text-gray-500 leading-relaxed mb-6">
                Generate invoices, manage treatment charges,
                coordinate insurance billing, and process patient
                payments quickly using centralized healthcare billing workflows.
              </p>

              <ul className="space-y-2 text-sm text-gray-600">
                {[
                  "Generate digital invoices instantly",
                  "Process secure patient payments",
                  "Manage billing and insurance workflows",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Row 2 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div className="order-2 lg:order-1">
              <p className="text-xs text-primary uppercase tracking-widest mb-3">
                Financial Management
              </p>

              <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                Track invoices, revenue, and payment performance
              </h3>

              <p className="text-gray-500 leading-relaxed mb-6">
                Monitor invoices, payment histories, outstanding balances,
                revenue insights, and financial performance directly from
                one connected Healthcare EHR Software platform.
              </p>

              <ul className="space-y-2 text-sm text-gray-600">
                {[
                  "Track revenue and payment analytics",
                  "Monitor outstanding balances",
                  "Access centralized financial records",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="order-1 lg:order-2 rounded-2xl overflow-hidden bg-gray-100">
              <img
                src="/billing.png"
                alt="Financial Reporting"
                className="w-full h-full object-cover object-top shadow-2xl"
              />
            </div>

          </div>

        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────── */}
      <CommonTestimonials />

      {/* ── FAQ ──────────────────────────────────── */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-3xl">

          <h2 className="text-4xl font-semibold text-center text-gray-900 mb-12">
            Frequently asked questions
          </h2>

          <FaqAccordion />

        </div>
      </section>

      {/* ── CTA ──────────────────────────────────── */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="mx-auto max-w-4xl text-center">

          <h2 className="text-3xl font-semibold text-gray-900">
            Ready to simplify healthcare billing and checkout?
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Discover how HealVare helps healthcare organizations
            streamline billing workflows, improve payment collection,
            and manage financial operations from one connected platform.
          </p>

          <Button
            className="mt-8 rounded-full px-10 h-11 cursor-pointer"
            onClick={() => navigate("/book-demo")}
          >
            Schedule a Demo
          </Button>

        </div>
      </section>

    </div>
  )
}