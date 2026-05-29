
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
  CalendarCheck,
  ShieldCheck,
  Settings,
  ChevronDown,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import CommonTestimonials from "@/components/CommonTestimonials"

// ─── Animation Variants ────────────────────────────────────────────────────────

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

// ─── Scroll Reveal ─────────────────────────────────────────────────────────────

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
      transition={{
        duration: 0.6,
        delay,
      }}
    >
      {children}
    </motion.div>
  )
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const FEATURES = [
  {
    icon: Users,
    title: "Staff Scheduling & Shift Management",
    description:
      "Create and manage provider schedules, staff shifts, availability calendars, appointment assignments, and workforce planning workflows more efficiently.",
  },
  {
    icon: ShieldCheck,
    title: "Role-Based Access Management",
    description:
      "Control access to patient records, billing systems, scheduling tools, healthcare documentation, and operational workflows based on staff roles and permissions.",
  },
  {
    icon: CalendarCheck,
    title: "Attendance & Workforce Tracking",
    description:
      "Track attendance, working hours, staff activity, operational performance, and scheduling efficiency from one integrated healthcare platform.",
  },
  {
    icon: Settings,
    title: "Task & Workflow Management",
    description:
      "Assign administrative tasks, monitor workflow progress, automate operational activities, and improve healthcare team productivity.",
  },
]

const FAQ_ITEMS = [
  {
    q: "What is Healthcare Staff Management Software?",
    a: "Healthcare Staff Management Software is a digital solution that helps clinics and healthcare providers manage staff scheduling, workforce coordination, communication, operational workflows, and healthcare team administration.",
  },
  {
    q: "How does staff management software improve clinic operations?",
    a: "The software improves clinic operations by automating scheduling workflows, improving team communication, reducing administrative workload, and centralizing workforce management.",
  },
  {
    q: "Can clinics manage provider schedules and staff shifts?",
    a: "Yes. The platform supports provider scheduling, shift management, staff availability tracking, appointment assignments, and workforce coordination workflows.",
  },
  {
    q: "Does the software support role-based staff access?",
    a: "Yes. Healthcare organizations can manage permissions and control access to patient records, billing systems, scheduling tools, and healthcare documentation based on staff roles.",
  },
  {
    q: "Can healthcare teams track attendance and workforce activity?",
    a: "Yes. The platform includes attendance tracking, working hour monitoring, workforce visibility, and operational performance management tools.",
  },
  {
    q: "Does the software integrate with scheduling and patient records?",
    a: "Yes. Staff management workflows connect directly with appointment scheduling software, patient records, billing systems, and healthcare operational tools within the Healthcare EHR Software platform.",
  },
  {
    q: "Is this software suitable for growing healthcare organizations?",
    a: "Absolutely. The platform is designed for clinics, healthcare providers, hospitals, and multi-location healthcare organizations managing expanding healthcare teams.",
  },
  {
    q: "Can staff securely access workflows remotely?",
    a: "Yes. Cloud-based Electronic Health Record Software allows authorized healthcare teams to securely access schedules, operational tools, patient information, and workflows from anywhere.",
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

// ─── FAQ Accordion ─────────────────────────────────────────────────────────────

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
                transition={{
                  duration: 0.3,
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
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    duration: 0.35,
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

// ─── Deep Dive Row ─────────────────────────────────────────────────────────────

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
      transition: {
        duration: 0.7,
      },
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
      transition: {
        duration: 0.7,
        delay: 0.1,
      },
    },
  }

  return (
    <div
      ref={ref}
      className="grid lg:grid-cols-2 gap-12 items-center"
    >
      <motion.div
        className={`rounded-2xl overflow-hidden bg-gray-100 ${
          !imageLeft ? "order-1 lg:order-2" : ""
        }`}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        variants={imageVariant}
      >
        <img
          src="/team.png"
          alt="Healthcare Staff Management Software Dashboard"
          className="w-full h-full object-cover object-top"
        />
      </motion.div>

      <motion.div
        className={!imageLeft ? "order-2 lg:order-1" : ""}
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
                hidden: { opacity: 0, x: -12 },

                show: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.4 },
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

// ─── Main Page ─────────────────────────────────────────────────────────────────

export default function StaffManagement() {
  const heroRef = useRef(null)

  useEffect(() => {
    document.title = "Healthcare Staff Management Software | Healthcare EHR Software for Clinics"

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
      "Manage staff scheduling, workforce coordination, provider communication, attendance tracking, and healthcare operations using secure Healthcare Staff Management Software and Healthcare EHR Software."
    )

    setMeta(
      "keywords",
      "Healthcare Staff Management Software, Healthcare EHR Software, Electronic Health Record Software, Healthcare Management Software, Clinic Management Software, Workforce Management Software, Provider Scheduling Software, Healthcare Workflow Automation, Medical Practice Management Software, Appointment Scheduling Software"
    )
  }, [])

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

      {/* HERO SECTION */}

      <section
        ref={heroRef}
        className="w-full bg-gray-50 min-h-[85vh] flex items-center py-20 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

          {/* LEFT */}

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
              Healthcare Staff Management Software for Smarter Team Coordination & Clinic Operations
            </motion.h1>

            <motion.p
              className="text-gray-600 text-lg mb-4"
              variants={fadeUp}
            >
              Simplify staff scheduling, team communication, workforce coordination,
              attendance tracking, and healthcare operations using cloud-based
              Healthcare EHR Software.
            </motion.p>

            <motion.p
              className="text-gray-600 mb-8 leading-relaxed"
              variants={fadeUp}
            >
              Our Healthcare Staff Management Software helps clinics improve
              workforce efficiency, streamline operational workflows,
              strengthen collaboration between healthcare teams,
              and support better patient care from one centralized
              healthcare management platform.
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
                <Button className="rounded-half px-10 h-11 cursor-pointer">
                  Book a Demo
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* RIGHT */}

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
              delay: 0.15,
            }}
          >
            <motion.div
              className="rounded-2xl overflow-hidden shadow-xl w-full h-full max-h-[550px]"
              style={{ y: heroImageY }}
            >
              <img
                src="/team.png"
                alt="Healthcare Staff Management Software Dashboard"
                className="w-full h-full object-cover object-left"
              />
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* LOGOS */}

      <section className="bg-white py-12 px-6 border-y border-gray-100">
        <div className="mx-auto max-w-6xl">

          <ScrollReveal>
            <p className="text-center text-sm text-gray-400 uppercase tracking-widest mb-8">
              Trusted by healthcare teams worldwide
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
                  hidden: { opacity: 0, y: 12 },

                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.4 },
                  },
                }}
              >
                {name}
              </motion.span>
            ))}
          </motion.div>

        </div>
      </section>

      {/* FEATURES */}

      <section className="bg-gray-50 py-20 px-6">
        <div className="mx-auto max-w-6xl">

          <ScrollReveal>
            <h2 className="text-3xl font-semibold text-center text-gray-900">
              Built for Modern Clinics & Healthcare Teams
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
              Manage healthcare staff scheduling, workforce coordination,
              operational workflows, provider communication,
              and attendance tracking using one centralized
              healthcare management platform.
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
                      transition: { duration: 0.4 },
                    }}
                  >
                    <Icon className="w-5 h-5 text-primary" />
                  </motion.div>

                  <h3 className="font-semibold text-lg text-gray-900">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>

        </div>
      </section>

      {/* DEEP DIVE */}

      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-6xl space-y-24">

          <DeepDiveRow
            imageLeft
            eyebrow="Workforce Coordination"
            heading="Manage Healthcare Teams, Staff Roles & Daily Operations"
            body="Centralize workforce scheduling, healthcare team coordination, provider communication, and operational workflows using integrated Healthcare Staff Management Software designed for clinics and healthcare organizations."
            bullets={[
              "Create and manage provider schedules",
              "Assign staff roles and permissions",
              "Improve healthcare team communication",
            ]}
          />

          <DeepDiveRow
            imageLeft={false}
            eyebrow="Operational Efficiency"
            heading="Track Attendance, Tasks & Healthcare Workflow Performance"
            body="Monitor attendance, manage staff activity, assign operational tasks, and improve healthcare workflow visibility using centralized Healthcare EHR Software."
            bullets={[
              "Track attendance and working hours",
              "Monitor workflow progress",
              "Improve operational visibility and productivity",
            ]}
          />

        </div>
      </section>

      {/* TESTIMONIALS */}

      <CommonTestimonials />

      {/* FAQ */}

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

      {/* CTA */}

      <section className="py-20 px-6">
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
            Ready to streamline healthcare staff management?
          </motion.h2>

          <motion.p
            className="mt-4 text-gray-600"
            variants={fadeUp}
          >
            See how Healthcare Staff Management Software helps clinics improve workforce coordination, operational efficiency, and healthcare team productivity.
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
              <Button className="rounded-half px-10 h-11 cursor-pointer">
                Schedule a Demo
              </Button>
            </motion.div>
          </motion.div>

        </motion.div>
      </section>

    </div>
  )
}

