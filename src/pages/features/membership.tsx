import { useEffect, useState } from "react";
import {
  FileText,
  ShieldCheck,
  Clock,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import CommonTestimonials from "@/components/CommonTestimonials";
import { useNavigate } from "react-router-dom";

// ─── Data ─────────────────────────────────────────────────────────────────────

const FEATURES = [
  {
    icon: Star,
    title: "Flexible membership plans",
    description:
      "Create healthcare memberships, wellness subscriptions, preventive care programs, and recurring patient plans with customizable pricing structures.",
  },
  {
    icon: Clock,
    title: "Automated recurring billing",
    description:
      "Simplify healthcare payments with recurring billing cycles, automated invoicing, payment reminders, and secure payment processing.",
  },
  {
    icon: ShieldCheck,
    title: "Secure member portal",
    description:
      "Provide patients with secure access to membership details, invoices, appointment scheduling, payment history, and healthcare services.",
  },
  {
    icon: FileText,
    title: "Membership analytics",
    description:
      "Track recurring revenue, patient retention, membership growth, billing performance, and operational insights using real-time dashboards.",
  },
];

const FAQ_ITEMS = [
  {
    q: "What is Healthcare Membership Management Software?",
    a: "Healthcare Membership Management Software is a digital solution that helps clinics and healthcare providers manage patient memberships, subscriptions, recurring billing, wellness programs, and healthcare engagement workflows.",
  },
  {
    q: "How does membership software improve healthcare operations?",
    a: "Membership software automates recurring payments, simplifies enrollment, improves scheduling workflows, reduces administrative tasks, and helps healthcare teams manage patient programs more efficiently.",
  },
  {
    q: "Can clinics automate recurring membership billing?",
    a: "Yes. The platform supports automated recurring billing, payment reminders, invoice generation, secure healthcare payment processing, and subscription management workflows.",
  },
  {
    q: "Does the platform support online patient enrollment?",
    a: "Yes. Patients can register online, enroll in healthcare memberships, manage subscriptions, schedule appointments, and access membership information through secure digital workflows.",
  },
  {
    q: "Is Healthcare Membership Management Software suitable for growing healthcare organizations?",
    a: "Absolutely. The platform is designed to scale with growing clinics, wellness programs, subscription healthcare models, and multi-provider healthcare organizations.",
  },
  {
    q: "Can memberships be connected with appointment scheduling?",
    a: "Yes. Membership plans can integrate with appointment scheduling software, provider calendars, patient reminders, and visit management workflows.",
  },
  {
    q: "Does the software include reporting and analytics?",
    a: "Yes. Healthcare teams can track membership growth, recurring revenue, patient retention, billing performance, and operational analytics using real-time reporting dashboards.",
  },
  {
    q: "Is patient membership information secure?",
    a: "Yes. The platform uses secure cloud-based infrastructure to protect patient data, billing records, membership details, and healthcare information.",
  },
];

// ─── FAQ Accordion ─────────────────────────────────────────────────────────────

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className="divide-y divide-gray-200 border-t border-gray-200">
      {FAQ_ITEMS.map((item, index) => {
        const isOpen = openIndex === index;

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
        );
      })}
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function Membership() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title =
      "Healthcare Membership Management Software for Clinics & Healthcare Providers"

    let descriptionMeta = document.querySelector('meta[name="description"]')
    if (!descriptionMeta) {
      descriptionMeta = document.createElement("meta")
      descriptionMeta.setAttribute("name", "description")
      document.head.appendChild(descriptionMeta)
    }
    descriptionMeta.setAttribute(
      "content",
      "Manage healthcare memberships, recurring billing, patient subscriptions, scheduling, and wellness programs using secure Healthcare Membership Management Software for clinics and healthcare providers.",
    )

    let keywordsMeta = document.querySelector('meta[name="keywords"]')
    if (!keywordsMeta) {
      keywordsMeta = document.createElement("meta")
      keywordsMeta.setAttribute("name", "keywords")
      document.head.appendChild(keywordsMeta)
    }
    keywordsMeta.setAttribute(
      "content",
      "Healthcare Membership Management Software, Healthcare Management Software, Membership Billing Software, Patient Subscription Management, Healthcare EHR Software, Electronic Health Record Software, Clinic Management Software, Appointment Scheduling Software, Healthcare Workflow Automation, Medical Practice Management Software",
    )
  }, [])

  return (
    <div className="bg-white">
      {/* ── HERO ── */}
      <section className="w-full bg-gray-50 min-h-[700px] flex items-center py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <p className="text-sm font-medium text-primary uppercase tracking-[0.2em] mb-4">
              Healthcare Membership Management Software
            </p>

            <h1 className="text-3xl lg:text-3xl font-semibold text-gray-900 leading-tight mb-6">
              Healthcare Membership Management Software for Modern Clinics &
              Wellness Programs
            </h1>

            <p className="text-gray-600 text-lg mb-6">
              Simplify patient memberships, wellness subscriptions, recurring
              billing, healthcare plans, and patient engagement using secure
              cloud-based Healthcare Membership Management Software.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Our integrated Healthcare Management Software helps clinics,
              wellness centers, and healthcare providers automate membership
              operations, improve patient retention, streamline payments, and
              strengthen long-term patient relationships.
            </p>

            <div className="flex items-center gap-6">
              <Button
                className="mt-4 rounded-half px-10 h-11 cursor-pointer"
                onClick={() => navigate("/book-demo")}
              >
                Book a Demo
              </Button>
            </div>
          </div>

          {/* Right */}
          <div className="relative h-full flex items-center">
            <div className="rounded-2xl overflow-hidden w-full aspect-[4/3] lg:aspect-auto lg:h-[520px]">
              <img
                src="/memberships.png"
                alt="Healthcare Membership Management Software"
                className="w-full h-full object-cover object-top shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── LOGOS BAR ── */}
      <section className="bg-white py-12 px-6 border-y border-gray-100">
        <div className="mx-auto max-w-6xl">
          <p className="text-center text-sm text-gray-400 uppercase tracking-widest mb-8">
            Trusted by clinics & wellness providers worldwide
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

      {/* ── FEATURES ── */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold text-center text-gray-900">
            Key Features of Healthcare Membership Management Software
          </h2>

          <p className="text-center text-gray-600 mt-4 max-w-3xl mx-auto">
            Manage recurring memberships, patient enrollments, billing
            workflows, appointment scheduling, and healthcare communication from
            one centralized healthcare platform.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
            {FEATURES.map((feature) => {
              const Icon = feature.icon;

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
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PRODUCT DEEP DIVE ── */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-6xl space-y-24">
          {/* Row 1 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden bg-gray-100">
              <img
                src="/memberships.png"
                alt="Membership Plans"
                className="w-full h-full object-cover object-top shadow-2xl"
              />
            </div>

            <div>
              <p className="text-xs text-primary uppercase tracking-widest mb-3">
                Flexible healthcare memberships
              </p>

              <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                Simplify patient memberships & subscription plans
              </h3>

              <p className="text-gray-500 leading-relaxed mb-6">
                Create and manage healthcare memberships, wellness programs,
                preventive care plans, and recurring patient subscriptions with
                customizable pricing, billing cycles, and healthcare benefits.
              </p>

              <ul className="space-y-2 text-sm text-gray-600">
                {[
                  "Monthly and annual membership plans",
                  "Custom pricing and subscription tiers",
                  "Recurring wellness and preventive care programs",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
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
                Membership automation
              </p>

              <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                Centralize membership operations & recurring billing
              </h3>

              <p className="text-gray-500 leading-relaxed mb-6">
                Automate recurring payments, manage patient enrollments, connect
                appointment scheduling workflows, and improve long-term patient
                engagement using intelligent Healthcare EHR Software.
              </p>

              <ul className="space-y-2 text-sm text-gray-600">
                {[
                  "Automated invoicing and payment reminders",
                  "Online patient enrollment and onboarding",
                  "Integrated scheduling and communication workflows",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="order-1 lg:order-2 rounded-2xl overflow-hidden bg-gray-100">
              <img
                src="/memberships.png"
                alt="Membership Management Dashboard"
                className="w-full h-full object-cover object-top shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-semibold text-gray-900">
            Improve patient retention & operational efficiency
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Healthcare organizations increasingly rely on recurring membership
            programs to strengthen patient relationships and create predictable
            revenue streams. Healthcare Membership Management Software helps
            clinics automate workflows, reduce administrative tasks, and improve
            the overall patient experience.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mt-14 text-left">
            {[
              "Simplified patient membership management",
              "Automated recurring billing and invoicing",
              "Improved patient engagement and retention",
              "Faster enrollment and onboarding workflows",
              "Centralized healthcare operations and communication",
              "Better visibility into recurring revenue performance",
              "Streamlined scheduling and member coordination",
              "Scalable systems for growing healthcare organizations",
            ].map((item) => (
              <div
                key={item}
                className="bg-white rounded-xl border p-5 flex gap-3"
              >
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />

                <p className="text-gray-700 text-sm leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-semibold text-gray-900">
            Built for clinics, wellness centers & healthcare providers
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Our Healthcare Membership Management Software combines patient
            records, scheduling, billing workflows, healthcare automation, and
            membership administration into one connected healthcare ecosystem.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-14">
            {[
              "Private Clinics",
              "Wellness Centers",
              "Preventive Care Programs",
              "Medical Practices",
              "Subscription Healthcare Services",
              "Multi-Provider Healthcare Organizations",
              "Fitness & Rehabilitation Clinics",
              "Growing Healthcare Businesses",
            ].map((item) => (
              <div
                key={item}
                className="border rounded-xl p-5 bg-gray-50 text-gray-800 font-medium"
              >
                {item}
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
            Frequently asked questions
          </h2>

          <FaqAccordion />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-semibold text-gray-900">
            Ready to simplify healthcare memberships & recurring billing?
          </h2>

          <p className="mt-4 text-gray-600">
            See how HealVare Healthcare Membership Management Software helps
            clinics automate memberships, improve patient retention, and manage
            recurring healthcare operations from one secure platform.
          </p>

          <Button
            className="mt-8 rounded-half px-10 h-11 cursor-pointer"
            onClick={() => navigate("/book-demo")}
          >
            Schedule a Demo
          </Button>
        </div>
      </section>
    </div>
  );
}