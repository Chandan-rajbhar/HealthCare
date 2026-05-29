import { useEffect, useState, useRef } from "react"
import {
  motion,
  useInView,
  AnimatePresence,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion"

import {
  ShieldCheck,
  Clock,
  ChevronDown,
  CalendarCheck,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import CommonTestimonials from "@/components/CommonTestimonials"
import { useNavigate } from "react-router-dom"

// ─── Animation Variants ─────────────────────────────────────────────────────

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
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
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.97,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: "easeInOut",
    },
  },
}

// ─── Scroll Reveal ──────────────────────────────────────────────────────────

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

  const inView = useInView(ref, {
    once: true,
    margin: "-80px",
  })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={
        inView
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: 28 }
      }
      transition={{
        duration: 0.6,
        ease: "easeInOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  )
}

// ─── FEATURES ───────────────────────────────────────────────────────────────

const FEATURES = [
  {
    icon: CalendarCheck,
    title: "Custom appointment policies",
    description:
      "Create booking rules, cancellation windows, rescheduling policies, provider availability settings, and appointment limitations based on clinic workflows.",
  },
  {
    icon: Clock,
    title: "Smart scheduling controls",
    description:
      "Prevent double bookings, manage appointment buffers, define scheduling durations, and automate scheduling workflows for improved efficiency.",
  },
  {
    icon: ShieldCheck,
    title: "Automated appointment reminders",
    description:
      "Reduce missed appointments with automated confirmations, reminders, rescheduling notifications, and patient communication workflows.",
  },
  {
    icon: Users,
    title: "Provider availability management",
    description:
      "Coordinate provider schedules, clinic operating hours, appointment capacities, and healthcare scheduling workflows from one platform.",
  },
]

// ─── FAQ ────────────────────────────────────────────────────────────────────

const FAQ_ITEMS = [
  {
    q: "What is Booking Policy Management Software?",
    a: "Booking Policy Management Software helps healthcare providers manage appointment rules, scheduling workflows, cancellation policies, provider availability, and patient booking systems digitally.",
  },
  {
    q: "How does booking policy software improve clinic operations?",
    a: "The software improves operations by automating scheduling workflows, reducing booking conflicts, improving patient communication, and simplifying appointment management.",
  },
  {
    q: "Can clinics create custom appointment policies?",
    a: "Yes. Healthcare providers can define cancellation windows, booking limitations, appointment durations, scheduling buffers, and provider availability rules.",
  },
  {
    q: "Does the platform support online patient booking?",
    a: "Yes. Patients can securely schedule appointments online while the platform automatically applies scheduling policies and provider availability rules.",
  },
  {
    q: "Can the software reduce missed appointments?",
    a: "Yes. Automated reminders, confirmations, and rescheduling notifications help reduce no-shows and improve appointment attendance.",
  },
  {
    q: "Does the software integrate with patient records and billing?",
    a: "Yes. Booking workflows integrate directly with patient records, appointment histories, healthcare billing systems, and operational management tools.",
  },
  {
    q: "Is this software suitable for growing healthcare organizations?",
    a: "Absolutely. The platform is designed for clinics, healthcare providers, and multi-location organizations managing complex scheduling workflows.",
  },
  {
    q: "Can healthcare teams access scheduling systems remotely?",
    a: "Yes. Cloud-based Healthcare EHR Software allows authorized staff to securely access scheduling tools, patient records, booking policies, and operational workflows remotely.",
  },
]

const LOGOS = [
  "MediCare",
  "HealthFirst",
  "CareSync",
  "MedPlus",
  "ClinicHub",
  "WellCare",
]

// ─── FAQ Accordion ──────────────────────────────────────────────────────────

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number>(0)

  const ref = useRef(null)

  const inView = useInView(ref, {
    once: true,
    margin: "-60px",
  })

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
          <motion.div
            key={index}
            variants={cardVariant}
          >
            <button
              className="w-full flex items-center justify-between py-6 text-left gap-4 group"
              onClick={() =>
                setOpenIndex(isOpen ? -1 : index)
              }
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
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${
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
                  key="content"
                  initial={{
                    height: 0,
                    opacity: 0,
                  }}
                  animate={{
                    height: "auto",
                    opacity: 1,
                  }}
                  exit={{
                    height: 0,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.35,
                    ease: "easeInOut",
                  }}
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

// ─── Deep Dive Row ──────────────────────────────────────────────────────────

function DeepDiveRow({
  imageLeft,
  eyebrow,
  heading,
  body,
  bullets,
}: {
  imageLeft: boolean
  eyebrow: string
  heading: string
  body: string
  bullets: string[]
}) {
  const ref = useRef(null)

  const inView = useInView(ref, {
    once: true,
    margin: "-100px",
  })

  const imageVariant = {
    hidden: {
      opacity: 0,
      x: imageLeft ? -32 : 32,
    },
    show: {
      opacity: 1,
      x: 0,
    },
  }

  const textVariant = {
    hidden: {
      opacity: 0,
      x: imageLeft ? 32 : -32,
    },
    show: {
      opacity: 1,
      x: 0,
    },
  }

  return (
    <div
      ref={ref}
      className="grid lg:grid-cols-2 gap-12 items-center"
    >
      <motion.div
        className={`rounded-2xl overflow-hidden bg-gray-100 ${
          !imageLeft
            ? "order-1 lg:order-2"
            : ""
        }`}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        variants={imageVariant}
      >
        <img
          src="/policies.png"
          alt="Booking Policy Management"
          className="w-full h-full object-cover object-top"
        />
      </motion.div>

      <motion.div
        className={
          !imageLeft
            ? "order-2 lg:order-1"
            : ""
        }
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        variants={textVariant}
      >
        <p className="text-xs text-primary uppercase tracking-widest mb-3">
          {eyebrow}
        </p>

        <h3 className="text-3xl font-semibold text-gray-900 mb-4">
          {heading}
        </h3>

        <p className="text-gray-500 leading-relaxed mb-6">
          {body}
        </p>

        <motion.ul
          className="space-y-2 text-sm text-gray-600"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {bullets.map((item) => (
            <motion.li
              key={item}
              className="flex items-center gap-2"
              variants={{
                hidden: {
                  opacity: 0,
                  x: -12,
                },
                show: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: 0.4,
                  },
                },
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block flex-shrink-0" />
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  )
}

// ─── PAGE ───────────────────────────────────────────────────────────────────

export default function BookingPolicies() {
  const navigate = useNavigate()

  useEffect(() => {
    document.title =
      "Booking Policy Management Software | Healthcare EHR Software for Clinics"

    let descriptionMeta = document.querySelector('meta[name="description"]')
    if (!descriptionMeta) {
      descriptionMeta = document.createElement("meta")
      descriptionMeta.setAttribute("name", "description")
      document.head.appendChild(descriptionMeta)
    }
    descriptionMeta.setAttribute(
      "content",
      "Manage appointment policies, scheduling workflows, online patient bookings, provider availability, and healthcare operations using secure Booking Policy Management Software and Healthcare EHR Software.",
    )

    let keywordsMeta = document.querySelector('meta[name="keywords"]')
    if (!keywordsMeta) {
      keywordsMeta = document.createElement("meta")
      keywordsMeta.setAttribute("name", "keywords")
      document.head.appendChild(keywordsMeta)
    }
    keywordsMeta.setAttribute(
      "content",
      "Booking Policy Management Software, Appointment Scheduling Software, Healthcare EHR Software, Electronic Health Record Software, Healthcare Management Software, Clinic Management Software, Online Patient Booking Software, Healthcare Workflow Automation, Provider Scheduling Software, Medical Practice Management Software",
    )
  }, [])

  const heroRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const heroImageY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 40]
  )

  return (
    <div className="bg-white">

      {/* ── HERO ───────────────────────────────── */}
      <section
        ref={heroRef}
        className="w-full bg-gray-50 min-h-[85vh] flex items-center py-20 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

          {/* Left */}
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
              Booking Policy Management Software for Smarter Appointment Scheduling & Clinic Operations
            </motion.h1>

            <motion.p
              className="text-gray-600 text-lg mb-4"
              variants={fadeUp}
            >
              Simplify appointment rules, scheduling policies,
              provider availability, and patient booking
              workflows using cloud-based Healthcare EHR Software.
            </motion.p>

            <motion.p
              className="text-gray-600 mb-8 leading-relaxed"
              variants={fadeUp}
            >
              Improve scheduling efficiency, reduce booking
              conflicts, automate appointment workflows,
              and deliver better patient booking experiences
              from one centralized healthcare platform.
            </motion.p>

            <motion.div variants={fadeUp}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 20,
                }}
                className="inline-block"
              >
                <Button
                  className="rounded-full px-10 h-11 cursor-pointer"
                  onClick={() =>
                    navigate("/book-demo")
                  }
                >
                  Book a Demo
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right */}
          <motion.div
            className="relative flex items-center justify-center min-h-[400px] lg:min-h-[500px]"
            initial={{
              opacity: 0,
              scale: 0.96,
              x: 32,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
              delay: 0.15,
            }}
          >
            <motion.div
              className="rounded-2xl overflow-hidden shadow-xl w-full h-full max-h-[550px]"
              style={{ y: heroImageY }}
            >
              <img
                src="/policies.png"
                alt="Booking Policy Management Software"
                className="w-full h-full object-cover object-top"
              />
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* ── LOGOS ──────────────────────────────── */}
      <section className="bg-white py-12 px-6 border-y border-gray-100">
        <div className="mx-auto max-w-6xl">

          <ScrollReveal>
            <p className="text-center text-sm text-gray-400 uppercase tracking-widest mb-8">
              Trusted by clinics and healthcare providers worldwide
            </p>
          </ScrollReveal>

          <motion.div
            className="flex flex-wrap justify-center items-center gap-10 opacity-40 grayscale"
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              margin: "-60px",
            }}
            variants={staggerContainer}
          >
            {LOGOS.map((name) => (
              <motion.span
                key={name}
                className="text-xl font-bold text-gray-400 tracking-tight"
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 12,
                  },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.4,
                    },
                  },
                }}
              >
                {name}
              </motion.span>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ── FEATURES ───────────────────────────── */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="mx-auto max-w-6xl">

          <ScrollReveal>
            <h2 className="text-3xl font-semibold text-center text-gray-900">
              Key Features of Booking Policy Management Software
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <p className="text-center text-gray-600 mt-4 max-w-3xl mx-auto">
              Manage appointment policies, provider schedules,
              online bookings, and healthcare scheduling
              workflows from one connected platform.
            </p>
          </ScrollReveal>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14"
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              margin: "-80px",
            }}
            variants={staggerContainer}
          >
            {FEATURES.map((feature) => {
              const Icon = feature.icon

              return (
                <motion.div
                  key={feature.title}
                  className="bg-white rounded-xl p-6 shadow-sm border"
                  variants={cardVariant}
                  whileHover={{
                    y: -6,
                    boxShadow:
                      "0 12px 32px -4px rgba(0,0,0,0.10)",
                    transition: {
                      duration: 0.25,
                      ease: "easeOut",
                    },
                  }}
                >
                  <motion.div
                    className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4"
                    whileHover={{
                      rotate: [0, -10, 10, 0],
                      transition: {
                        duration: 0.4,
                      },
                    }}
                  >
                    <Icon className="w-5 h-5 text-primary" />
                  </motion.div>

                  <h3 className="font-semibold text-lg text-gray-900">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>

        </div>
      </section>

      {/* ── PRODUCT DEEP DIVE ──────────────────── */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-6xl space-y-24">

          <DeepDiveRow
            imageLeft
            eyebrow="Appointment Policy Controls"
            heading="Create smarter scheduling workflows"
            body="Manage booking rules, cancellation windows, provider availability, scheduling durations, and appointment buffers to improve operational efficiency and reduce scheduling conflicts."
            bullets={[
              "Custom booking and cancellation policies",
              "Automated scheduling controls",
              "Provider availability management",
            ]}
          />

          <DeepDiveRow
            imageLeft={false}
            eyebrow="Patient Booking Experience"
            heading="Improve online bookings and patient communication"
            body="Allow patients to schedule appointments online while automatically applying clinic policies, provider schedules, reminders, and healthcare booking workflows."
            bullets={[
              "Online patient appointment booking",
              "Automated reminders and confirmations",
              "Reduced no-shows and scheduling conflicts",
            ]}
          />

        </div>
      </section>

      {/* ── BENEFITS ───────────────────────────── */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="mx-auto max-w-6xl">

          <div className="text-center max-w-3xl mx-auto">

            <h2 className="text-3xl font-semibold text-gray-900">
              Improve Scheduling Efficiency & Patient Booking Experiences
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Booking Policy Management Software helps
              healthcare providers automate scheduling
              workflows, reduce administrative burden,
              simplify appointment management, and improve
              operational visibility.
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-14">
            {[
              "Smarter appointment scheduling and booking control",
              "Reduced scheduling conflicts and missed appointments",
              "Improved patient booking experiences and communication",
              "Automated reminders and scheduling workflows",
              "Better provider availability management",
              "Centralized scheduling and operational coordination",
              "Reduced administrative workload and manual scheduling",
              "Scalable systems for growing healthcare organizations",
            ].map((item) => (
              <div
                key={item}
                className="bg-white border rounded-xl p-5 flex items-start gap-3"
              >
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />

                <p className="text-gray-700">
                  {item}
                </p>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── INDUSTRIES ─────────────────────────── */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-5xl text-center">

          <h2 className="text-3xl font-semibold text-gray-900">
            Built for Clinics, Healthcare Providers & Medical Practices
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Our Booking Policy Management Software
            supports healthcare organizations managing
            complex appointment workflows, provider
            schedules, and patient booking systems.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">
            {[
              "Private Clinics",
              "Dental Practices",
              "Wellness Centers",
              "Multi-Provider Organizations",
              "Specialty Healthcare Providers",
              "Medical Practices",
              "Outpatient Facilities",
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

      {/* ── TESTIMONIALS ───────────────────────── */}
      <CommonTestimonials />

      {/* ── FAQ ────────────────────────────────── */}
      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-3xl">

          <ScrollReveal>
            <h2 className="text-4xl font-semibold text-center text-gray-900 mb-12">
              Frequently Asked Questions
            </h2>
          </ScrollReveal>

          <FaqAccordion />

        </div>
      </section>

      {/* ── CTA ────────────────────────────────── */}
      <section className="py-20 px-6 bg-gray-50">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            margin: "-80px",
          }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-3xl font-semibold text-gray-900"
            variants={fadeUp}
          >
            Centralize Appointment Workflows with Healthcare EHR Software
          </motion.h2>

          <motion.p
            className="mt-4 text-gray-600 leading-relaxed"
            variants={fadeUp}
          >
            Discover how HealVare helps healthcare
            organizations manage appointment policies,
            scheduling workflows, provider availability,
            patient bookings, and healthcare operations
            from one connected platform.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 inline-block"
          >
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 18,
              }}
            >
              <Button
                className="rounded-full px-10 h-11 cursor-pointer"
                onClick={() =>
                  navigate("/book-demo")
                }
              >
                Schedule a Demo
              </Button>
            </motion.div>
          </motion.div>

        </motion.div>
      </section>

    </div>
  )
}