import { useEffect, useState } from "react";
import {
  FileText,
  ShieldCheck,
  Clock,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import CommonTestimonials from "@/components/CommonTestimonials";
import { useNavigate } from "react-router-dom";

// ─── Data ─────────────────────────────────────────────────────────────────────

const FEATURES = [
  {
    icon: FileText,
    title: "Digital patient records",
    description:
      "Store patient histories, prescriptions, diagnoses, allergies, treatment plans, and clinical documentation securely in one centralized platform.",
  },
  {
    icon: ShieldCheck,
    title: "Secure cloud access",
    description:
      "Access patient records, appointments, and healthcare workflows securely from anywhere using cloud-based Healthcare EHR Software.",
  },
  {
    icon: Clock,
    title: "Smart record retrieval",
    description:
      "Quickly locate patient files, treatment histories, clinical notes, and healthcare records with intelligent search functionality.",
  },
  {
    icon: Users,
    title: "Multi-provider collaboration",
    description:
      "Enable doctors, nurses, specialists, and staff to coordinate patient care efficiently across clinics and healthcare departments.",
  },
];

const FAQ_ITEMS = [
  {
    q: "What is Patient Record Management Software?",
    a: "Patient Record Management Software is a digital healthcare solution that helps clinics and healthcare providers securely manage patient records, medical histories, prescriptions, clinical notes, and healthcare documentation from one centralized platform.",
  },
  {
    q: "How does Healthcare EHR Software improve patient record management?",
    a: "Healthcare EHR Software organizes patient information digitally, reduces paperwork, improves accessibility, streamlines clinical workflows, and helps healthcare teams manage records more efficiently.",
  },
  {
    q: "Can providers securely access patient records remotely?",
    a: "Yes. Cloud-based Electronic Health Record Software allows authorized healthcare professionals to securely access patient records, schedules, and healthcare workflows from anywhere.",
  },
  {
    q: "Does the software support clinical documentation?",
    a: "Yes. The platform supports digital clinical documentation, treatment plans, medical notes, prescriptions, patient histories, and healthcare workflow management.",
  },
  {
    q: "Is Patient Record Management Software suitable for growing clinics?",
    a: "Absolutely. The platform is designed for growing clinics, medical practices, and healthcare organizations that need scalable healthcare management solutions and stronger operational visibility.",
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

export default function PatientRecords() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title =
      "Patient Record Management Software | Healthcare EHR Software for Clinics"

    let descriptionMeta = document.querySelector('meta[name="description"]')
    if (!descriptionMeta) {
      descriptionMeta = document.createElement("meta")
      descriptionMeta.setAttribute("name", "description")
      document.head.appendChild(descriptionMeta)
    }
    descriptionMeta.setAttribute(
      "content",
      "Manage patient histories, clinical documentation, appointments, billing workflows, and healthcare operations using secure Patient Record Management Software and cloud-based Healthcare EHR Software for clinics and healthcare providers.",
    )

    let keywordsMeta = document.querySelector('meta[name="keywords"]')
    if (!keywordsMeta) {
      keywordsMeta = document.createElement("meta")
      keywordsMeta.setAttribute("name", "keywords")
      document.head.appendChild(keywordsMeta)
    }
    keywordsMeta.setAttribute(
      "content",
      "Patient Record Management Software, Healthcare EHR Software, Electronic Health Record Software, Healthcare Management Software, Clinic Management Software, Medical Practice Management Software, Healthcare Workflow Automation, Digital Patient Records, Clinical Documentation Software, Appointment Scheduling Software",
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
              Healthcare EHR Software
            </p>

            <h1 className="text-3xl lg:text-3xl font-semibold text-gray-900 leading-tight mb-6">
              Patient Record Management Software for Secure & Efficient
              Healthcare Operations
            </h1>

            <p className="text-gray-600 text-lg mb-6">
              Simplify patient histories, clinical documentation,
              prescriptions, treatment plans, lab reports, and healthcare
              operations using centralized Healthcare EHR Software built for
              modern clinics and healthcare providers.
            </p>

            <p className="text-gray-600 leading-relaxed">
              Our cloud-based Patient Record Management Software helps
              healthcare organizations improve operational efficiency, reduce
              paperwork, strengthen clinical coordination, and deliver better
              patient care experiences from one secure platform.
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
                src="/records.png"
                alt="Patient Record Management Software Dashboard"
                className="w-full h-full object-cover object-top shadow-2xl colar-black/10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── LOGOS BAR ── */}
      <section className="bg-white py-12 px-6 border-y border-gray-100">
        <div className="mx-auto max-w-6xl">
          <p className="text-center text-sm text-gray-400 uppercase tracking-widest mb-8">
            Trusted by modern clinics & healthcare providers
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
            Key Features of Patient Record Management Software
          </h2>

          <p className="text-center text-gray-600 mt-4 max-w-3xl mx-auto">
            Manage patient records, healthcare documentation, scheduling,
            billing workflows, and operational processes from one connected
            Healthcare Management Software platform.
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
                src="/records.png"
                alt="Digital Patient Records"
                className="w-full h-full object-cover object-top shadow-2xl"
              />
            </div>

            <div>
              <p className="text-xs text-primary uppercase tracking-widest mb-3">
                Digital patient records
              </p>

              <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                Simplify digital patient record management
              </h3>

              <p className="text-gray-500 leading-relaxed mb-6">
                Store and manage patient histories, diagnoses, prescriptions,
                allergies, treatment plans, medical notes, and healthcare
                documentation from one centralized Electronic Health Record
                Software platform.
              </p>

              <ul className="space-y-2 text-sm text-gray-600">
                {[
                  "Access complete patient histories instantly",
                  "Manage prescriptions and treatment plans",
                  "Reduce paperwork and manual documentation",
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
                Healthcare workflow automation
              </p>

              <h3 className="text-3xl font-semibold text-gray-900 mb-4">
                Improve healthcare operations & clinical coordination
              </h3>

              <p className="text-gray-500 leading-relaxed mb-6">
                Connect patient records with appointment scheduling, billing
                workflows, healthcare administration, and operational management
                tools to improve efficiency and patient care delivery.
              </p>

              <ul className="space-y-2 text-sm text-gray-600">
                {[
                  "Integrated scheduling and billing workflows",
                  "Faster clinical documentation and retrieval",
                  "Better coordination across healthcare teams",
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
                src="/records.png"
                alt="Healthcare Workflow Automation"
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
            Why healthcare teams need Patient Record Management Software
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Modern healthcare organizations need more than disconnected systems
            and paper-based processes. Centralized Healthcare EHR Software helps
            providers improve documentation accuracy, reduce administrative
            burden, strengthen communication, and support faster clinical
            decision-making.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mt-14 text-left">
            {[
              "Faster access to patient histories and medical documentation",
              "Reduced paperwork and manual administrative tasks",
              "Improved healthcare workflow automation",
              "Better clinical coordination across healthcare teams",
              "Enhanced patient experience and communication",
              "Secure healthcare data management and storage",
              "Simplified appointment scheduling workflows",
              "Scalable solutions for growing clinics and healthcare organizations",
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
            Built for modern clinics & healthcare organizations
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Our Electronic Health Record Software supports healthcare providers
            managing patient care, scheduling, documentation, billing systems,
            operational workflows, and healthcare administration from one secure
            environment.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-14">
            {[
              "Private Clinics",
              "Medical Practices",
              "Healthcare Groups",
              "Multi-Provider Clinics",
              "Wellness Centers",
              "Specialty Healthcare Providers",
              "Outpatient Facilities",
              "Growing Healthcare Organizations",
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
            Improve patient care with centralized healthcare records
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            See how HealVare Patient Record Management Software helps clinics
            simplify healthcare workflows, manage clinical documentation, and
            improve operational efficiency with secure cloud-based Healthcare
            EHR Software.
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