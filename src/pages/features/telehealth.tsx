import { useEffect, useState } from "react";
import {
  ShieldCheck,
  Clock,
  Video,
  Calendar,
  MessageSquare,
  FileText,
  Database,
  Activity,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import CommonTestimonials from "@/components/CommonTestimonials";
import { useNavigate } from "react-router-dom";

// ─── Core Features ────────────────────────────────────────────────────────────

const FEATURES = [
  {
    icon: Video,
    title: "Virtual Consultations & Video Appointments",
    description:
      "Manage secure virtual healthcare appointments, online consultations, and digital patient interactions through one centralized telehealth environment.",
    cta: "View Virtual Consultation System",
  },
  {
    icon: Calendar,
    title: "Appointment Scheduling & Remote Care Coordination",
    description:
      "Coordinate virtual visits, provider availability, follow-ups, and patient scheduling workflows efficiently.",
    cta: "Explore Scheduling Features",
  },
  {
    icon: MessageSquare,
    title: "Secure Patient Communication",
    description:
      "Enable healthcare teams and patients to communicate securely before, during, and after virtual consultations.",
    cta: "View Patient Communication Tools",
  },
  {
    icon: FileText,
    title: "Connected Healthcare Documentation",
    description:
      "Sync virtual visits with patient records, consultation history, and clinical workflows inside one healthcare ecosystem.",
    cta: "View Clinical Workflow Tools",
  },
];

// ─── Operations Section ──────────────────────────────────────────────────────

const OPERATIONS = [
  {
    title: "Simplify Virtual Scheduling",
    desc: "Coordinate providers, appointments, and remote healthcare workflows from one platform.",
  },
  {
    title: "Improve Patient Accessibility",
    desc: "Deliver healthcare services remotely without location barriers.",
  },
  {
    title: "Improve Communication Efficiency",
    desc: "Strengthen provider-patient communication across virtual care workflows.",
  },
  {
    title: "Reduce Administrative Workload",
    desc: "Automate appointment coordination, notifications, and remote scheduling operations.",
  },
];

// ─── Benefits ────────────────────────────────────────────────────────────────

const BENEFITS = [
  "Manage virtual care workflows from one connected platform",
  "Improve remote patient access and healthcare convenience",
  "Simplify online appointments and consultation coordination",
  "Improve operational visibility across virtual healthcare services",
  "Centralize telehealth operations, communication, and scheduling",
];

// ─── Use Cases ───────────────────────────────────────────────────────────────

const USE_CASES = [
  {
    title: "Private Clinics",
    desc: "Manage virtual consultations, scheduling, and remote patient care efficiently.",
  },
  {
    title: "Specialty Healthcare Practices",
    desc: "Coordinate telehealth services across consultations, follow-ups, and provider workflows.",
  },
  {
    title: "Multi-Provider Healthcare Teams",
    desc: "Manage remote healthcare operations across providers and patient services.",
  },
  {
    title: "Growing Medical Organizations",
    desc: "Scale telehealth delivery with connected digital healthcare infrastructure.",
  },
];

// ─── Integrations ────────────────────────────────────────────────────────────

const INTEGRATIONS = [
  "Electronic Health Record Software",
  "Appointment Scheduling Systems",
  "Patient Portal Platforms",
  "Calendar Management Tools",
  "Video Consultation Systems",
  "Payment Processing Platforms",
  "Clinical Documentation Tools",
  "Healthcare Analytics Dashboards",
];

// ─── FAQ ─────────────────────────────────────────────────────────────────────

const FAQ_ITEMS = [
  {
    q: "What is healthcare telehealth software?",
    a: "It is a platform that helps healthcare providers manage virtual consultations, remote patient care, online appointments, and telehealth workflows.",
  },
  {
    q: "Can providers manage virtual consultations?",
    a: "Yes, the platform supports secure video consultations, online appointments, and remote care coordination.",
  },
  {
    q: "Does it support appointment scheduling?",
    a: "Yes, healthcare teams can manage provider schedules, virtual bookings, and follow-up appointments.",
  },
  {
    q: "Can telehealth workflows connect with patient records?",
    a: "Yes, telehealth operations can integrate with healthcare records, clinical workflows, and healthcare management systems.",
  },
  {
    q: "Is it suitable for growing healthcare organizations?",
    a: "Yes, it supports private clinics, specialty practices, and multi-provider healthcare teams.",
  },
];

// ─── FAQ Accordion ───────────────────────────────────────────────────────────

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

// ─── Page ────────────────────────────────────────────────────────────────────

export default function TelehealthNext() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title =
      "Healthcare Telehealth Software for Virtual Consultations & Remote Patient Care";

    let descriptionMeta = document.querySelector('meta[name="description"]');
    if (!descriptionMeta) {
      descriptionMeta = document.createElement("meta");
      descriptionMeta.setAttribute("name", "description");
      document.head.appendChild(descriptionMeta);
    }
    descriptionMeta.setAttribute(
      "content",
      "Manage virtual consultations, online appointments, remote patient care, and digital healthcare workflows using cloud-based healthcare telehealth software for clinics and healthcare providers.",
    );

    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (!keywordsMeta) {
      keywordsMeta = document.createElement("meta");
      keywordsMeta.setAttribute("name", "keywords");
      document.head.appendChild(keywordsMeta);
    }
    keywordsMeta.setAttribute(
      "content",
      "Healthcare Telehealth Software, Healthcare Payment Software, Telehealth software, Healthcare virtual care software, Virtual consultation software, Medical telehealth platform, Remote patient care software, Healthcare video consultation software, healthcare telehealth software for clinics, virtual consultation software for healthcare providers, cloud based telehealth software platform, remote patient care management software, healthcare virtual appointment software, telehealth scheduling and consultation platform",
    );
  }, []);

  return (
    <div className="bg-white">
      {/* ── HERO SECTION ── */}

      <section className="w-full bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary font-medium mb-4">
              Healthcare Telehealth Software
            </p>

            <h1 className="text-3xl lg:text-3xl font-semibold text-gray-900 leading-tight mb-6">
              Healthcare Telehealth Software for Virtual Consultations &
              Connected Patient Care
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Manage virtual appointments, video consultations, patient
              communication, remote care delivery, and digital healthcare
              workflows using cloud-based healthcare telehealth software built
              for private clinics, specialty practices, and multi-provider
              healthcare teams.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                className="rounded-half px-8 h-11 cursor-pointer"
                onClick={() => navigate("/book-demo")}
              >
                View Telehealth Demo
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
                src="/telehealth.png"
                alt="Healthcare Telehealth Software"
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
            Deliver Virtual Healthcare Without Operational Complexity
          </h2>

          <div className="text-gray-600 leading-relaxed text-lg">
            <p>
              Healthcare providers increasingly manage remote consultations,
              follow-up appointments, patient communication, and digital care
              delivery. Traditional scheduling systems and disconnected
              communication tools often create operational friction and
              fragmented patient experiences.
            </p>

            <p>
              This healthcare telehealth software centralizes virtual
              consultations, appointment coordination, secure communication, and
              remote healthcare workflows from one connected platform.
            </p>

            <p>
              It enables providers to deliver accessible digital care while
              improving scheduling efficiency, patient engagement, and
              operational visibility.
            </p>
          </div>
        </div>
      </section>
      {/* ── CORE FEATURES ── */}

      <section className="bg-gray-50 py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl lg:text-4xl font-semibold text-center text-gray-900">
            Core Features of Our Healthcare Telehealth Software
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mt-14">
            {FEATURES.map((feature) => {
              const Icon = feature.icon;

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
              );
            })}
          </div>
        </div>
      </section>

      {/* ── RESULTS & OPERATIONS ── */}

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-semibold text-center text-gray-900 mb-14">
            How Healthcare Teams Improve Virtual Care Operations
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

                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}

      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-semibold text-center text-gray-900 mb-14">
            Why Healthcare Providers Use Our Telehealth Platform
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
            Built for Every Virtual Healthcare Workflow
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

                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST SECTION ── */}

      <section className="bg-gray-900 py-20 px-6 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-semibold mb-8">
            Built for Modern Virtual Healthcare Delivery
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed max-w-4xl">
            Unlike generic video meeting tools, this healthcare telehealth
            software is designed around real healthcare workflows. Manage
            virtual appointments, patient communication, scheduling, and
            clinical coordination inside one connected healthcare platform.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mt-14">
            {[
              "Secure Virtual Healthcare Infrastructure",
              "Healthcare-Focused Workflow Design",
              "Cloud-Based Care Delivery Platform",
              "Built for Growing Clinical Operations",
              "Connected Patient Care Management",
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
              Secure Telehealth Data & Virtual Healthcare Management
            </h2>

            <p className="text-gray-600 leading-relaxed text-lg mb-6">
              Protect consultation records, patient communication, scheduling
              data, and healthcare workflows using secure cloud-based
              infrastructure.
            </p>

            <p className="text-gray-600 leading-relaxed text-lg">
              Role-based access controls allow providers, administrators, and
              healthcare staff to manage controlled visibility across telehealth
              operations.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="border rounded-2xl p-8 text-center">
              <Database className="w-10 h-10 mx-auto text-primary mb-4" />
              <h3 className="font-semibold text-gray-900">
                Secure Data Infrastructure
              </h3>
            </div>

            <div className="border rounded-2xl p-8 text-center">
              <ShieldCheck className="w-10 h-10 mx-auto text-primary mb-4" />
              <h3 className="font-semibold text-gray-900">Role-Based Access</h3>
            </div>

            <div className="border rounded-2xl p-8 text-center">
              <Clock className="w-10 h-10 mx-auto text-primary mb-4" />
              <h3 className="font-semibold text-gray-900">
                Continuous Monitoring
              </h3>
            </div>

            <div className="border rounded-2xl p-8 text-center">
              <Activity className="w-10 h-10 mx-auto text-primary mb-4" />
              <h3 className="font-semibold text-gray-900">
                Connected Workflows
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* ── PLATFORM RELIABILITY ── */}

      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-8">
            Built for Daily Virtual Healthcare Operations
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            From private clinics to multi-provider healthcare teams, the
            platform supports high-volume virtual healthcare environments. It
            reduces dependency on disconnected communication tools and
            fragmented scheduling systems while supporting efficient remote care
            delivery.
          </p>
        </div>
      </section>

      {/* ── INTEGRATIONS ── */}

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-semibold text-center text-gray-900 mb-14">
            Integrate Telehealth with Your Healthcare Operations Stack
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
            How Our Healthcare Telehealth Software Works
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "Step 1",
                title: "Configure Virtual Care Workflows",
                desc: "Set up telehealth appointments, provider availability, and remote consultation workflows.",
              },
              {
                step: "Step 2",
                title: "Manage Patient Appointments",
                desc: "Coordinate virtual bookings, schedules, and digital patient interactions.",
              },
              {
                step: "Step 3",
                title: "Deliver Remote Consultations",
                desc: "Conduct secure online consultations and connected patient communication.",
              },
              {
                step: "Step 4",
                title: "Track Care Delivery Operations",
                desc: "Monitor appointment activity, consultation workflows, and operational performance.",
              },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-2xl border p-8">
                <span className="text-primary font-semibold text-sm">
                  {item.step}
                </span>

                <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
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
            Frequently Asked Questions About Healthcare Telehealth Software
          </h2>

          <FaqAccordion />
        </div>
      </section>

      {/* ── FINAL CTA ── */}

      <section className="py-24 px-6 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6">
            Modernize Virtual Care & Telehealth Operations
          </h2>

          <p className="text-lg leading-relaxed text-white/90 max-w-3xl mx-auto">
            Streamline virtual consultations, improve remote patient care, and
            centralize telehealth workflows using cloud-based healthcare
            telehealth software.
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
              Book Telehealth Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
