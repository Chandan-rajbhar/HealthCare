
import { useState, useRef, useEffect } from "react"
import {
  motion,
  useInView,
  AnimatePresence,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion"
import {
  ChevronDown,
  Calendar,
  Clock,
  Users,
  Layers,
  CheckCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import CommonTestimonials from "@/components/CommonTestimonials"
import { useNavigate } from "react-router-dom"

const FEATURES = [
  {
    icon: Calendar,
    title: "Multi-Provider Calendar Management",
    description:
      "Manage schedules for multiple providers, departments, and clinic locations from one centralized healthcare calendar.",
  },
  {
    icon: Clock,
    title: "Patient Appointment Scheduling",
    description:
      "Simplify patient bookings, consultations, follow-ups, and recurring appointments with organized scheduling workflows.",
  },
  {
    icon: Users,
    title: "Real-Time Availability Tracking",
    description:
      "Monitor provider availability, appointment slots, and scheduling updates instantly across your organization.",
  },
  {
    icon: Layers,
    title: "Centralized Schedule Visibility",
    description:
      "Give healthcare teams complete visibility into appointments, staff schedules, and clinic operations.",
  },
]

const OUTCOME_CARDS = [
  {
    title: "Reduce No-Shows",
    description:
      "Improve attendance with organized scheduling workflows and appointment visibility.",
  },
  {
    title: "Increase Scheduling Accuracy",
    description:
      "Prevent double bookings, missed appointments, and manual scheduling mistakes.",
  },
  {
    title: "Improve Staff Productivity",
    description:
      "Help teams spend less time managing calendars and more time supporting patients.",
  },
  {
    title: "Enhance Patient Convenience",
    description:
      "Make scheduling faster, clearer, and easier for patients and staff.",
  },
]

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
}

const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: "easeInOut" },
  },
}

function ScrollReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  )
}

const FAQ_ITEMS = [
  {
    q: "What is Healthcare Calendar Software?",
    a: "Healthcare Calendar Software is a scheduling solution that helps clinics and healthcare providers manage appointments, provider availability, patient bookings, and daily scheduling workflows from one centralized platform.",
  },
  {
    q: "How does Appointment Scheduling Software improve clinic operations?",
    a: "Appointment Scheduling Software helps reduce scheduling errors, streamline bookings, improve provider coordination, and simplify calendar management for healthcare teams.",
  },
  {
    q: "Can healthcare providers manage multiple schedules from one calendar?",
    a: "Yes. Healthcare Calendar Software supports multi-provider scheduling, allowing clinics to manage providers, staff schedules, appointments, and operational calendars in one view.",
  },
  {
    q: "Does the software support appointment rescheduling and cancellations?",
    a: "Yes. The platform allows healthcare teams to handle appointment updates, cancellations, and schedule changes efficiently.",
  },
  {
    q: "Is this calendar software suitable for growing healthcare practices?",
    a: "Absolutely. The platform is designed for clinics, medical practices, healthcare groups, and multi-provider organizations that need scalable scheduling workflows.",
  },
  {
    q: "Can scheduling workflows integrate with Electronic Health Record Software?",
    a: "Yes. The calendar system can work alongside Electronic Health Record Software, patient records, billing systems, and healthcare workflows for a connected operational experience.",
  },
]

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number>(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <motion.div
      ref={ref}
      className="divide-y divide-gray-200 border-t border-gray-200"
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={staggerContainer}
    >
      {FAQ_ITEMS.map((item, index) => {
        const isOpen = openIndex === index

        return (
          <motion.div key={index} variants={cardVariant}>
            <button
              className="w-full flex items-center justify-between py-6 text-left gap-4 group"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <span
                className={`text-base font-semibold transition-colors duration-200 ${
                  isOpen
                    ? "text-gray-900"
                    : "text-gray-600 group-hover:text-gray-800"
                }`}
              >
                {item.q}
              </span>

              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                  isOpen
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-400"
                }`}
              >
                <ChevronDown size={16} />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-500 text-sm leading-relaxed pb-6">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )
      })}
    </motion.div>
  )
}

export default function CalendarFeaturePage() {
  const navigate = useNavigate()

  useEffect(() => {
    document.title =
      "Healthcare Calendar Software | Appointment Scheduling Software for Clinics & Healthcare Providers"

    let descriptionMeta = document.querySelector('meta[name="description"]')
    if (!descriptionMeta) {
      descriptionMeta = document.createElement("meta")
      descriptionMeta.setAttribute("name", "description")
      document.head.appendChild(descriptionMeta)
    }
    descriptionMeta.setAttribute(
      "content",
      "Manage provider schedules, patient appointments, clinic calendars, and healthcare scheduling workflows using secure Healthcare Calendar Software built for modern healthcare teams.",
    )
  }, [])

  const heroRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const heroImageY = useTransform(scrollYProgress, [0, 1], [0, 40])

  return (
    <div className="bg-white">

      {/* HERO SECTION */}
      <section
        ref={heroRef}
        className="w-full bg-gray-50 min-h-[85vh] flex items-center py-20 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

          <motion.div
            className="flex flex-col justify-center"
            initial="hidden"
            animate="show"
            variants={staggerContainer}
          >
            <motion.h1
              className="text-3xl lg:text-3xl font-semibold text-gray-900 leading-tight mb-6"
              variants={fadeUp}
            >
              Healthcare Calendar Software for Smart Appointment Scheduling & Clinic Coordination
            </motion.h1>

            <motion.p
              className="text-gray-600 text-lg leading-relaxed mb-8"
              variants={fadeUp}
            >
              Manage appointments, provider availability, patient bookings,
              scheduling workflows, and clinic calendars from one intelligent
              Healthcare Calendar Software built for modern healthcare teams.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              variants={fadeUp}
            >
              <Button
                className="rounded-half px-8 h-11 cursor-pointer"
                onClick={() => navigate("/start-free-trial")}
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
            </motion.div>
          </motion.div>

          <motion.div
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.96, x: 32 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="rounded-2xl overflow-hidden w-full"
              style={{ y: heroImageY }}
            >
              <img
                src="/calendarfeature.png"
                alt="Healthcare Calendar Software"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CALENDAR OVERVIEW SECTION */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-6xl">

          <ScrollReveal>
            <h2 className="text-3xl lg:text-3xl font-semibold text-center text-gray-900">
              One Unified Calendar for Providers, Staff & Patient Scheduling
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <p className="text-center text-gray-600 mt-5 max-w-3xl mx-auto leading-relaxed">
              Simplify clinic scheduling with a centralized Healthcare
              Appointment Scheduling Software that helps healthcare teams
              coordinate appointments, provider availability, room management,
              and daily operations in real time.
            </p>
          </ScrollReveal>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {FEATURES.map((feature) => {
              const Icon = feature.icon

              return (
                <motion.div
                  key={feature.title}
                  className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
                  variants={cardVariant}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  <h3 className="font-semibold text-lg text-gray-900 mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5 mt-14">
            {[
              "Automated Calendar Coordination",
              "Patient Appointment Scheduling",
              "Real-Time Availability Tracking",
              "Centralized Schedule Visibility",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-white border rounded-xl px-5 py-4"
              >
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPOINTMENT MANAGEMENT SECTION */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <img
              src="/calendarfeature.png"
              alt="Appointment Scheduling Software"
              className="rounded-2xl w-full object-cover"
            />
          </div>

          <div>
            <p className="text-primary uppercase tracking-widest text-sm mb-4">
              Appointment Management
            </p>

            <h2 className="text-3xl lg:text-3xl font-semibold text-gray-900 mb-6">
              Appointment Scheduling Software Designed for Busy Healthcare Practices
            </h2>

            <p className="text-gray-600 leading-relaxed mb-10">
              Reduce scheduling friction with smart appointment booking tools
              that help clinics manage consultations, follow-ups, recurring
              visits, cancellations, and provider schedules efficiently.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Smart Appointment Booking
                </h3>
                <p className="text-gray-600">
                  Create, update, reschedule, and manage patient appointments
                  with fewer clicks.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Automated Scheduling Workflows
                </h3>
                <p className="text-gray-600">
                  Minimize manual coordination through intelligent scheduling
                  automation.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Flexible Provider Availability
                </h3>
                <p className="text-gray-600">
                  Configure provider calendars, availability rules, time slots,
                  and working hours.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Cancellation & Rescheduling Management
                </h3>
                <p className="text-gray-600">
                  Handle changes quickly without disrupting clinical workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLINICAL OPERATIONS SECTION */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-6xl">

          <ScrollReveal>
            <h2 className="text-3xl lg:text-3xl font-semibold text-center text-gray-900">
              Keep Clinical Operations Organized with Connected Scheduling Workflows
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <p className="text-center text-gray-600 mt-5 max-w-3xl mx-auto leading-relaxed">
              Integrate appointment scheduling with patient records, clinical
              documentation, billing, and healthcare operations using connected
              Healthcare Management Software.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mt-16">
            {[
              "Faster Front-Desk Operations",
              "Improved Patient Flow Management",
              "Reduced Scheduling Errors",
              "Better Provider Coordination",
              "Stronger Operational Visibility",
            ].map((item) => (
              <div
                key={item}
                className="bg-gray-50 rounded-2xl border border-gray-100 p-6 text-center"
              >
                <CheckCircle className="w-8 h-8 text-primary mx-auto mb-4" />

                <h3 className="font-semibold text-gray-900 leading-snug">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTIVITY & OUTCOMES SECTION */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="mx-auto max-w-6xl">

          <ScrollReveal>
            <h2 className="text-3xl lg:text-3xl font-semibold text-center text-gray-900">
              Improve Scheduling Efficiency & Patient Experience
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <p className="text-center text-gray-600 mt-5 max-w-3xl mx-auto leading-relaxed">
              Modern healthcare organizations need more than a digital calendar.
              They need smarter scheduling systems that improve efficiency,
              reduce administrative burden, and support better patient
              experiences.
            </p>
          </ScrollReveal>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {OUTCOME_CARDS.map((item) => (
              <motion.div
                key={item.title}
                className="bg-white rounded-2xl border border-gray-100 p-7"
                variants={cardVariant}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <CommonTestimonials />

      {/* FAQ SECTION */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-3xl">

          <ScrollReveal>
            <h2 className="text-3xl lg:text-3xl font-semibold text-center text-gray-900 mb-12">
              Frequently Asked Questions
            </h2>
          </ScrollReveal>

          <FaqAccordion />
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-20 px-6 bg-gray-50">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-3xl lg:text-3xl font-semibold text-gray-900"
            variants={fadeUp}
          >
            Upgrade Clinic Scheduling with Intelligent Healthcare Calendar Software
          </motion.h2>

          <motion.p
            className="mt-5 text-gray-600 leading-relaxed"
            variants={fadeUp}
          >
            Manage provider calendars, patient appointments, scheduling
            workflows, and clinic coordination using secure, cloud-based
            Appointment Scheduling Software built for healthcare providers.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mt-10"
            variants={fadeUp}
          >
            <Button
              className="rounded-half px-8 h-11 cursor-pointer"
              onClick={() => navigate("/book-demo")}
            >
              Schedule a Demo
            </Button>

            <Button
              variant="outline"
              className="rounded-half px-8 h-11 cursor-pointer"
              onClick={() => navigate("/start-free-trial")}
            >
              Start Free Trial
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}

