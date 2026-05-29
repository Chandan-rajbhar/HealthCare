
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
  Clock,
  CalendarDays,
  FileText,
  BarChart2,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import CommonTestimonials from "@/components/CommonTestimonials"

// ─────────────────────────────────────────────────────────────
// ANIMATION VARIANTS
// ─────────────────────────────────────────────────────────────

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

// ─────────────────────────────────────────────────────────────
// SCROLL REVEAL
// ─────────────────────────────────────────────────────────────

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
        delay,
      }}
    >
      {children}
    </motion.div>
  )
}

// ─────────────────────────────────────────────────────────────
// FEATURES
// ─────────────────────────────────────────────────────────────

const FEATURES = [
  {
    icon: Clock,
    title: "Digital attendance tracking",
    description:
      "Track employee attendance, working hours, check-ins, absences, overtime, and shift activity using centralized workforce management tools.",
  },

  {
    icon: CalendarDays,
    title: "Staff scheduling & shift management",
    description:
      "Create and manage provider schedules, shift rotations, availability calendars, and workforce planning workflows more efficiently.",
  },

  {
    icon: FileText,
    title: "Automated time tracking",
    description:
      "Reduce manual administrative work with automated attendance records, shift tracking, working hour calculations, and workflow automation.",
  },

  {
    icon: BarChart2,
    title: "Real-time workforce monitoring",
    description:
      "Monitor scheduling gaps, operational coverage, attendance trends, and workforce availability through real-time dashboards.",
  },
]

// ─────────────────────────────────────────────────────────────
// FAQ
// ─────────────────────────────────────────────────────────────

const FAQ_ITEMS = [
  {
    q: "What is Staff Time & Attendance Software?",
    a: "Staff Time & Attendance Software helps clinics and healthcare providers manage attendance tracking, staff scheduling, working hours, shift management, and workforce operations digitally.",
  },

  {
    q: "How does attendance software improve healthcare operations?",
    a: "The software improves healthcare operations by automating attendance workflows, reducing manual tracking, improving workforce visibility, and simplifying staff coordination.",
  },

  {
    q: "Can clinics manage staff shifts and provider schedules?",
    a: "Yes. The platform supports provider scheduling, shift management, workforce planning, availability tracking, and operational scheduling workflows.",
  },

  {
    q: "Does the software support automated attendance tracking?",
    a: "Yes. Healthcare teams can automate attendance records, overtime tracking, working hour calculations, and shift monitoring using digital workforce management tools.",
  },

  {
    q: "Can administrators monitor workforce activity in real time?",
    a: "Yes. The platform provides real-time workforce dashboards, attendance insights, scheduling visibility, and operational reporting tools.",
  },

  {
    q: "Does the software integrate with payroll and scheduling systems?",
    a: "Yes. Attendance workflows connect directly with payroll coordination, appointment scheduling systems, staff management systems, and Healthcare EHR Software operations.",
  },

  {
    q: "Is this software suitable for growing healthcare organizations?",
    a: "Absolutely. The platform supports clinics, hospitals, healthcare groups, and multi-location medical organizations managing expanding healthcare teams.",
  },

  {
    q: "Can staff securely access schedules remotely?",
    a: "Yes. Authorized healthcare teams can securely access schedules, attendance records, workforce tools, and operational workflows remotely using cloud-based software.",
  },
]

// ─────────────────────────────────────────────────────────────
// LOGOS
// ─────────────────────────────────────────────────────────────

const LOGOS = [
  "MediCare",
  "HealthFirst",
  "CareSync",
  "MedPlus",
  "ClinicHub",
  "WellCare",
]

// ─────────────────────────────────────────────────────────────
// FAQ ACCORDION
// ─────────────────────────────────────────────────────────────

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

// ─────────────────────────────────────────────────────────────
// DEEP DIVE SECTION
// ─────────────────────────────────────────────────────────────

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
          src="/staff.png"
          alt="Healthcare workforce management"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.div
        className={
          !imageLeft ? "order-2 lg:order-1" : ""
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

// ─────────────────────────────────────────────────────────────
// MAIN PAGE
// ─────────────────────────────────────────────────────────────

export default function StaffAttendancePage() {
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
   useEffect(() => {
     document.title = "Healthcare Staff Time & Attendance Software | Healthcare EHR Software";
     const metaDescription = document.querySelector('meta[name="description"]');
     if (metaDescription) {
       metaDescription.setAttribute('content', 'Manage staff attendance, provider schedules, workforce tracking, shift management, and healthcare operations using secure Staff Time & Attendance Software and Healthcare EHR Software.');
     } else {
       const meta = document.createElement('meta');
       meta.name = 'description';
       meta.content = 'Manage staff attendance, provider schedules, workforce tracking, shift management, and healthcare operations using secure Staff Time & Attendance Software and Healthcare EHR Software.';
       document.head.appendChild(meta);
     }
   }, []);

   return (
    <div className="bg-white">

      {/* HERO */}
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
              Healthcare Staff Time & Attendance Software for Smarter Workforce Management
            </motion.h1>

            <motion.p
              className="text-gray-600 text-lg mb-4"
              variants={fadeUp}
            >
              Manage healthcare staff attendance,
              working hours, shift schedules,
              provider availability, overtime
              tracking, and workforce operations
              from one centralized healthcare
              platform.
            </motion.p>

            <motion.p
              className="text-gray-600 mb-8 leading-relaxed"
              variants={fadeUp}
            >
              Improve workforce visibility,
              streamline scheduling workflows,
              reduce administrative workload,
              and strengthen operational
              efficiency using integrated
              Healthcare EHR Software.
            </motion.p>

            <motion.div variants={fadeUp}>
              <Button className="rounded-half px-10 h-11 cursor-pointer">
                Book a Demo
              </Button>
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
              ease: [0.22, 1, 0.36, 1],
              delay: 0.15,
            }}
          >
            <motion.div
              className="rounded-2xl overflow-hidden shadow-xl w-full h-full max-h-[550px]"
              style={{ y: heroImageY }}
            >
              <img
                src="/staff.png"
                alt="Healthcare Staff Attendance Software"
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

      {/* FEATURES */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="mx-auto max-w-6xl">

          <ScrollReveal>
            <h2 className="text-3xl font-semibold text-center text-gray-900">
              Key Features of Staff Time & Attendance Software
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <p className="text-center text-gray-600 mt-4 max-w-3xl mx-auto">
              Simplify attendance tracking,
              workforce scheduling, overtime
              management, and healthcare
              operations using centralized
              workforce management tools.
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
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>

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
            eyebrow="Attendance tracking"
            heading="Track workforce attendance and working hours"
            body="Monitor healthcare staff attendance, overtime, shift activity, and provider availability using centralized workforce tracking tools."
            bullets={[
              "Track working hours and overtime",
              "Monitor attendance records",
              "Improve workforce accountability",
            ]}
          />

          <DeepDiveRow
            imageLeft={false}
            eyebrow="Shift scheduling"
            heading="Simplify provider scheduling and workforce planning"
            body="Manage provider schedules, shift rotations, workforce planning, and operational coverage more efficiently from one platform."
            bullets={[
              "Create shift schedules",
              "Track provider availability",
              "Reduce scheduling conflicts",
            ]}
          />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <CommonTestimonials />

      {/* BENEFITS */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">

          <ScrollReveal>
            <h2 className="text-3xl font-semibold text-center text-gray-900">
              Improve Workforce Visibility & Operational Efficiency
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <p className="text-center text-gray-600 mt-4 max-w-3xl mx-auto">
              Centralized workforce management
              helps healthcare organizations
              improve coordination, reduce
              manual processes, and streamline
              healthcare scheduling workflows.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 mt-14">
            {[
              "Accurate staff attendance and working hour tracking",
              "Improved provider scheduling and workforce coordination",
              "Reduced administrative workload and manual processes",
              "Better operational visibility and staffing management",
              "Automated shift tracking and attendance workflows",
              "Improved workforce accountability and productivity",
              "Centralized healthcare workforce management",
              "Scalable systems for growing healthcare organizations",
            ].map((item) => (
              <div
                key={item}
                className="bg-white border rounded-xl p-5 text-gray-700"
              >
                ✔ {item}
              </div>
            ))}
          </div>
        </div>
      </section>

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
            Centralize Workforce Operations with Healthcare EHR Software
          </motion.h2>

          <motion.p
            className="mt-4 text-gray-600"
            variants={fadeUp}
          >
            Manage attendance tracking,
            workforce scheduling, patient
            workflows, billing systems,
            and operational coordination
            from one secure healthcare
            platform.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 inline-block"
          >
            <Button className="rounded-half px-10 h-11 cursor-pointer">
              Schedule a Demo
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}
