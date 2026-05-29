
import { useEffect, useState } from "react"
import {
  Globe,
  Bell,
  CalendarCheck,
  Smartphone,
  ShieldCheck,
  Clock,
  Users,
  CalendarDays,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import CommonTestimonials from "@/components/CommonTestimonials"
import { useNavigate } from "react-router-dom"

// ─── FEATURES ────────────────────────────────────────────────────────────────

const FEATURES = [
  {
    icon: Globe,
    title: "24/7 Online Appointment Booking",
    description:
      "Allow patients to schedule healthcare appointments anytime using secure online booking workflows.",
  },
  {
    icon: CalendarCheck,
    title: "Real-Time Provider Availability",
    description:
      "Display live appointment availability to reduce scheduling conflicts and double bookings.",
  },
  {
    icon: Smartphone,
    title: "Patient Self-Scheduling",
    description:
      "Enable patients to independently select providers, appointment types, and available time slots.",
  },
  {
    icon: Bell,
    title: "Automated Confirmation Workflows",
    description:
      "Send automatic confirmations, reminders, and scheduling updates to patients in real time.",
  },
]

// ─── PROVIDER MANAGEMENT ────────────────────────────────────────────────────

const OPERATIONS = [
  {
    title: "Multi-Provider Schedule Management",
    desc: "Manage provider availability, appointment calendars, and scheduling workflows from one platform.",
  },
  {
    title: "Appointment Capacity Control",
    desc: "Control appointment availability and clinic scheduling capacity more efficiently.",
  },
  {
    title: "Reduced Double Bookings",
    desc: "Improve scheduling accuracy with connected calendar coordination and automated booking workflows.",
  },
  {
    title: "Better Front-Desk Efficiency",
    desc: "Reduce manual scheduling tasks and improve clinic coordination workflows.",
  },
]

// ─── AUTOMATION FEATURES ────────────────────────────────────────────────────

const AUTOMATION_FEATURES = [
  {
    title: "Automated Booking Confirmations",
    desc: "Keep patients informed with instant confirmations and schedule updates.",
  },
  {
    title: "Reminder & Follow-Up Workflows",
    desc: "Reduce missed appointments with automated communication workflows.",
  },
  {
    title: "Connected Calendar Coordination",
    desc: "Sync online bookings with clinic calendars and provider schedules.",
  },
  {
    title: "Smarter Operational Visibility",
    desc: "Track appointments, booking activity, and scheduling performance from one dashboard.",
  },
]

// ─── OUTCOME CARDS ──────────────────────────────────────────────────────────

const BENEFITS = [
  {
    title: "Faster Appointment Access",
    desc: "Patients book care without long phone calls or manual coordination.",
  },
  {
    title: "Better Scheduling Accuracy",
    desc: "Reduce booking conflicts, scheduling errors, and operational delays.",
  },
  {
    title: "Higher Patient Satisfaction",
    desc: "Offer a modern digital scheduling experience patients expect.",
  },
  {
    title: "Improved Operational Productivity",
    desc: "Help staff spend less time managing bookings and more time supporting care delivery.",
  },
]

// ─── FAQ ────────────────────────────────────────────────────────────────────

const FAQ_ITEMS = [
  {
    q: "What is Healthcare Online Booking Software?",
    a: "Healthcare Online Booking Software allows patients to schedule appointments digitally while helping clinics manage provider availability, appointment workflows, and scheduling operations from one platform.",
  },
  {
    q: "How does Online Appointment Scheduling Software improve healthcare operations?",
    a: "It reduces manual scheduling tasks, improves appointment coordination, streamlines booking workflows, and supports better patient scheduling experiences.",
  },
  {
    q: "Can patients book appointments online without calling the clinic?",
    a: "Yes. Patients can select providers, choose available time slots, and confirm appointments through a secure online booking system.",
  },
  {
    q: "Does the software support provider calendar management?",
    a: "Yes. The platform helps clinics manage provider schedules, appointment availability, calendar coordination, and booking capacity.",
  },
  {
    q: "Can online booking software reduce scheduling errors?",
    a: "Yes. Automated scheduling workflows help reduce double bookings, missed appointments, and manual calendar conflicts.",
  },
  {
    q: "Is this software suitable for growing healthcare organizations?",
    a: "Absolutely. The platform supports clinics, healthcare providers, and multi-provider medical practices that need scalable scheduling and booking management tools.",
  },
  {
    q: "Does Healthcare Online Booking Software integrate with Electronic Health Record Software?",
    a: "Yes. Online booking systems can work alongside Electronic Health Record Software, appointment calendars, patient records, and clinic workflows for a connected healthcare experience.",
  },
]

// ─── FAQ ACCORDION ──────────────────────────────────────────────────────────

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

// ─── PAGE ───────────────────────────────────────────────────────────────────

export default function OnlineBookingPage() {
  const navigate = useNavigate()

  useEffect(() => {
    document.title =
      "Healthcare Online Booking Software | Online Appointment Scheduling Software for Clinics"

    let descriptionMeta = document.querySelector('meta[name="description"]')

    if (!descriptionMeta) {
      descriptionMeta = document.createElement("meta")
      descriptionMeta.setAttribute("name", "description")
      document.head.appendChild(descriptionMeta)
    }

    descriptionMeta.setAttribute(
      "content",
      "Enable patients to book appointments online, manage provider schedules, automate booking workflows, and improve clinic efficiency using secure Healthcare Online Booking Software for modern healthcare teams.",
    )

    let keywordsMeta = document.querySelector('meta[name="keywords"]')

    if (!keywordsMeta) {
      keywordsMeta = document.createElement("meta")
      keywordsMeta.setAttribute("name", "keywords")
      document.head.appendChild(keywordsMeta)
    }

    keywordsMeta.setAttribute(
      "content",
      "Healthcare Online Booking Software, Online Appointment Scheduling Software, Patient Scheduling Software, Healthcare Scheduling Platform, Clinic Appointment Booking System, Medical Appointment Scheduling Software, Healthcare Calendar Management, Online Booking Software for Clinics",
    )
  }, [])

  return (
    <div className="bg-white">

      {/* ── HERO SECTION ── */}

      <section className="w-full bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div>

            <p className="text-primary font-medium mb-4">
              Healthcare Online Booking Software
            </p>

            <h1 className="text-3xl lg:text-3xl font-semibold text-gray-900 leading-tight mb-6">
              Online Booking Software for Faster Patient Scheduling & Better Healthcare Access
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Enable patients to book appointments online, manage provider
              availability, automate scheduling workflows, and reduce
              administrative workload using secure Healthcare Online Booking
              Software built for modern clinics.
            </p>

            <div className="flex flex-wrap gap-4">

              <Button
                className="rounded-half px-8 h-11 cursor-pointer"
                onClick={() => navigate("/free-trial")}
              >
                Start Free Trial
              </Button>

              <Button
                variant="outline"
                className="rounded-half px-8 h-11 cursor-pointer"
                onClick={() => navigate("/book-demo")}
              >
                Book a Live Demo
              </Button>

            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src="/featureonlinebooking.png"
                alt="Healthcare Online Booking Software"
                className="w-full object-cover object-top max-h-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── ONLINE BOOKING OVERVIEW ── */}

      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-8">
            Make Patient Appointment Booking Simple, Fast & Available 24/7
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            Give patients the flexibility to schedule visits anytime using
            intelligent Online Appointment Scheduling Software designed for
            healthcare providers, clinics, and growing medical practices.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-14">

            {FEATURES.map((feature) => {
              const Icon = feature.icon

              return (
                <div
                  key={feature.title}
                  className="flex items-start gap-4 border rounded-xl p-6 bg-gray-50 text-left"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>

                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── PATIENT BOOKING EXPERIENCE ── */}

      <section className="bg-gray-50 py-20 px-6">
        <div className="mx-auto max-w-6xl">

          <h2 className="text-3xl lg:text-4xl font-semibold text-center text-gray-900 mb-6">
            Deliver a Seamless Online Booking Experience for Patients
          </h2>

          <p className="text-lg text-gray-600 text-center leading-relaxed max-w-4xl mx-auto mb-14">
            Reduce phone calls, manual coordination, and scheduling delays by
            allowing patients to easily find providers, select time slots, and
            confirm appointments through one connected booking system.
          </p>

          <div className="grid md:grid-cols-2 gap-8">

            {[
              {
                title: "Smart Self-Scheduling",
                desc: "Allow patients to book appointments independently based on real-time availability.",
              },
              {
                title: "Flexible Appointment Selection",
                desc: "Support consultations, follow-ups, recurring visits, and healthcare service bookings.",
              },
              {
                title: "Instant Booking Confirmations",
                desc: "Automatically notify patients when appointments are confirmed, updated, or rescheduled.",
              },
              {
                title: "Easy Rescheduling & Cancellation",
                desc: "Make appointment changes simple for both patients and healthcare staff.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl border p-8"
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

      {/* ── PROVIDER & CLINIC MANAGEMENT ── */}

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl lg:text-4xl font-semibold text-center text-gray-900 mb-6">
            Healthcare Appointment Scheduling Software Built for Clinic Efficiency
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed text-center max-w-4xl mx-auto mb-14">
            Manage provider calendars, appointment capacity, scheduling rules,
            and clinic operations through a connected Healthcare Management
            Software platform.
          </p>

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

      {/* ── WORKFLOW AUTOMATION ── */}

      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl lg:text-4xl font-semibold text-center text-gray-900 mb-6">
            Automate Booking Workflows & Reduce Administrative Burden
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed text-center max-w-4xl mx-auto mb-14">
            Modern healthcare teams need more than appointment forms. They need
            automated workflows that simplify scheduling, improve patient
            communication, and strengthen operational efficiency.
          </p>

          <div className="grid md:grid-cols-2 gap-8">

            {AUTOMATION_FEATURES.map((item) => (
              <div
                key={item.title}
                className="bg-white border rounded-2xl p-8"
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

      {/* ── PATIENT EXPERIENCE & BUSINESS IMPACT ── */}

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl lg:text-4xl font-semibold text-center text-gray-900 mb-6">
            Improve Patient Experience While Growing Clinic Efficiency
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed text-center max-w-4xl mx-auto mb-14">
            Online booking does more than simplify scheduling. It improves
            accessibility, reduces wait times, and helps healthcare
            organizations deliver smoother patient journeys.
          </p>

          <div className="grid md:grid-cols-2 gap-8">

            {BENEFITS.map((item) => (
              <div
                key={item.title}
                className="bg-gray-50 border rounded-2xl p-8"
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

      {/* ── ADDITIONAL MANAGEMENT SECTION ── */}

      <section className="bg-gray-900 py-20 px-6 text-white">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl lg:text-4xl font-semibold mb-8">
            Connected Scheduling Infrastructure for Modern Healthcare Teams
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed max-w-4xl">
            Centralize online bookings, provider schedules, patient
            communication, and appointment coordination inside one connected
            healthcare scheduling environment.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">

            {[
              "Cloud-Based Appointment Scheduling",
              "Connected Provider Calendar Management",
              "Centralized Booking Visibility",
              "Healthcare Workflow Coordination",
            ].map((item) => (
              <div
                key={item}
                className="border border-white/10 rounded-xl p-6 bg-white/5"
              >
                <p className="text-sm leading-relaxed">
                  {item}
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
            Frequently Asked Questions
          </h2>

          <FaqAccordion />
        </div>
      </section>

      {/* ── FINAL CTA ── */}

      <section className="py-24 px-6 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-4xl font-semibold mb-6">
            Modernize Patient Scheduling with Healthcare Online Booking Software
          </h2>

          <p className="text-lg leading-relaxed text-white/90 max-w-3xl mx-auto">
            Manage online appointments, patient scheduling, provider
            availability, and booking workflows using secure, cloud-based
            Appointment Scheduling Software designed for healthcare providers.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">

            <Button
              variant="outline"
              className="bg-white text-black hover:bg-gray-100 rounded-half px-8 h-11 cursor-pointer"
              onClick={() => navigate("/book-demo")}
            >
              Schedule a Demo
            </Button>

            <Button
              className="bg-white text-black hover:bg-gray-100 rounded-half px-8 h-11 cursor-pointer"
              onClick={() => navigate("/free-trial")}
            >
              Start Free Trial
            </Button>

          </div>
        </div>
      </section>

    </div>
  )
}
