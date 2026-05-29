
import { useState, useRef, useEffect } from "react"
import {
  motion,
  useInView,
  AnimatePresence,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion"
import { ChevronDown, Tag, Percent, Megaphone, TrendingUp, Mail, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import "@/pages/FooterPage/footerpage"
import CommonTestimonials from "@/components/CommonTestimonials"
import { MarketingDemoCTA } from "@/components/MarketingDemoCTA"
import { useNavigate } from "react-router-dom"

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

// ─── Reusable scroll-triggered wrapper ────────────────────────────────────────

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
        ease: [0.22, 1, 0.36, 1] as const,
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
    icon: Tag,
    title: "Automated marketing campaigns",
    description:
      "Launch and manage healthcare promotions automatically to increase patient engagement and appointment bookings.",
  },
  {
    icon: Percent,
    title: "Personalized patient offers",
    description:
      "Create customized discounts, loyalty rewards, and promotional offers based on patient activity and healthcare history.",
  },
  {
    icon: Megaphone,
    title: "Multi-channel communication",
    description:
      "Reach patients through email, SMS, appointment reminders, and automated healthcare notifications.",
  },
  {
    icon: TrendingUp,
    title: "Campaign performance analytics",
    description:
      "Track patient engagement, appointment conversions, and promotional campaign performance from one centralized dashboard.",
  },
]

const FAQ_ITEMS = [
  {
    q: "What is Healthcare Promotion Software?",
    a: "Healthcare Promotion Software helps clinics create, automate, manage, and track patient marketing campaigns, healthcare promotions, and engagement workflows.",
  },
  {
    q: "How do clinic promotions help healthcare organizations grow?",
    a: "Promotions improve patient engagement, increase appointment bookings, strengthen retention, and help clinics attract new patients.",
  },
  {
    q: "Can healthcare clinics automate promotional campaigns?",
    a: "Yes. The platform supports automated healthcare marketing campaigns, reminders, patient outreach, and engagement workflows.",
  },
  {
    q: "Does the software support email and SMS healthcare promotions?",
    a: "Absolutely. Clinics can send promotional messages, reminders, appointment offers, and wellness campaigns through email and SMS communication tools.",
  },
  {
    q: "Can clinics personalize promotional offers for patients?",
    a: "Yes. Healthcare providers can create targeted promotions based on patient history, appointment activity, and healthcare services.",
  },
  {
    q: "Does the software provide marketing performance analytics?",
    a: "Yes. Clinics can monitor campaign engagement, appointment conversions, communication activity, and promotional performance from one dashboard.",
  },
  {
    q: "Is Healthcare Promotion Software suitable for multi-location clinics?",
    a: "Yes. The platform supports healthcare providers, hospitals, wellness centers, and multi-provider medical organizations.",
  },
  {
    q: "Can the software integrate with appointment scheduling and patient management systems?",
    a: "Yes. Healthcare Promotion Software integrates with appointment scheduling systems, Electronic Health Record Software, and healthcare management platforms.",
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
                transition={{
                  duration: 0.3,
                  ease: [0.22, 1, 0.36, 1] as const,
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
                    ease: [0.22, 1, 0.36, 1] as const,
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
  const inView = useInView(ref, { once: true, margin: "-100px" })

  const imageVariant = {
    hidden: { opacity: 0, x: imageLeft ? -32 : 32 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  }

  const textVariant = {
    hidden: { opacity: 0, x: imageLeft ? 32 : -32 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
        delay: 0.1,
      },
    },
  }

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full"
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
          src="/loyalty.png"
          alt="Healthcare Promotion Software Dashboard"
          className="w-full h-full max-w-full object-cover"
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

        <p className="text-gray-500 leading-relaxed mb-6">{body}</p>

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

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function Promotions() {
  const navigate = useNavigate()

  useEffect(() => {
    document.title =
      "Healthcare Promotion Software | Create Powerful Clinic Marketing Campaigns"

    let descriptionMeta = document.querySelector('meta[name="description"]')
    if (!descriptionMeta) {
      descriptionMeta = document.createElement("meta")
      descriptionMeta.setAttribute("name", "description")
      document.head.appendChild(descriptionMeta)
    }
    descriptionMeta.setAttribute(
      "content",
      "Create automated healthcare promotions, patient engagement campaigns, appointment marketing workflows, and SMS & email outreach using secure Healthcare Promotion Software for clinics and healthcare providers.",
    )
  }, [])

  const heroRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const heroImageY = useTransform(scrollYProgress, [0, 1], [0, 40])

  return (
    <div className="bg-white overflow-x-hidden">
      {/* ── HERO ── */}

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
              className="text-3xl lg:text-4xl font-semibold text-gray-900 leading-tight mb-6"
              variants={fadeUp}
            >
              Create Powerful Clinic Promotions with Healthcare Marketing
              Software
            </motion.h1>

            <motion.p
              className="text-gray-600 text-lg mb-4"
              variants={fadeUp}
            >
              Increase patient engagement, boost appointment bookings, promote
              healthcare services, and grow clinic revenue using secure
              Healthcare Promotion & Marketing Software.
            </motion.p>

            <motion.p
              className="text-gray-600 mb-8 leading-relaxed"
              variants={fadeUp}
            >
              HealVare Healthcare Promotion Software helps clinics automate
              patient marketing campaigns, improve communication workflows, and
              increase healthcare service awareness through personalized
              engagement strategies.
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
                  className="rounded-half px-10 h-11 cursor-pointer"
                  onClick={() => navigate("/book-demo")}
                >
                  Schedule a Live Demo
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right */}

          <motion.div
            className="relative flex items-center justify-center min-h-[400px] lg:min-h-[500px]"
            initial={{ opacity: 0, scale: 0.96, x: 32 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1] as const,
              delay: 0.15,
            }}
          >
            <motion.div
              className="rounded-2xl overflow-hidden shadow-xl w-full h-full max-h-[550px]"
              style={{ y: heroImageY }}
            >
              <img
                src="/loyalty.png"
                alt="Healthcare Promotion Software Dashboard"
                className="w-full h-full object-cover object-top"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── LOGOS ── */}

      <section className="bg-white py-12 px-6 border-y border-gray-100">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <p className="text-center text-sm text-gray-400 uppercase tracking-widest mb-8">
              Trusted by 500+ clinics worldwide
            </p>
          </ScrollReveal>

          <motion.div
            className="flex flex-wrap justify-center items-center gap-10 opacity-40 grayscale"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
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

      {/* ── FEATURES ── */}

      <section className="bg-gray-50 py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <h2 className="text-3xl font-semibold text-center text-gray-900">
              Launch Smarter Healthcare Promotions & Patient Marketing Campaigns
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
              Create, automate, manage, and track healthcare promotional
              campaigns from one centralized platform designed for clinics and
              healthcare providers.
            </p>
          </ScrollReveal>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
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
                    boxShadow: "0 12px 32px -4px rgba(0,0,0,0.10)",
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

      {/* ── EMAIL & SMS ── */}

      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-6xl grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <ScrollReveal>
              <p className="text-xs text-primary uppercase tracking-widest mb-3">
                Email & SMS outreach
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                Deliver promotion campaigns with email and SMS communication
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <p className="text-gray-600 leading-relaxed mb-8">
                Reach patients with targeted promotions, appointment offers, and marketing reminders using secure email and SMS workflows designed for clinics.
              </p>
            </ScrollReveal>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 text-primary mb-4">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  Email campaign automation
                </h3>
                <p className="text-sm text-gray-600">
                  Send promotional emails, appointment marketing messages, and campaign announcements automatically.
                </p>
              </div>

              <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 text-primary mb-4">
                  <Bell className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                  SMS engagement
                </h3>
                <p className="text-sm text-gray-600">
                  Notify patients about promotions, booking reminders, and clinic offers via SMS.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden bg-gray-100 shadow-xl">
            <img
              src="/email.png"
              alt="Email and SMS healthcare promotion outreach"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* ── PRODUCT DEEP DIVE ── */}

      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-6xl space-y-24">
          <DeepDiveRow
            imageLeft
            eyebrow="Healthcare marketing"
            heading="Create personalized clinic promotions that drive engagement"
            body="Build targeted healthcare campaigns that encourage appointment scheduling, improve patient retention, and increase awareness of healthcare services through automated communication workflows."
            bullets={[
              "Appointment promotion campaigns",
              "Seasonal wellness promotions",
              "Personalized patient offers",
            ]}
          />

          <DeepDiveRow
            imageLeft={false}
            eyebrow="Automation workflows"
            heading="Automate healthcare promotions & patient engagement"
            body="Simplify campaign management with automated healthcare marketing workflows, smart patient segmentation, and real-time engagement tracking."
            bullets={[
              "Automated promotional campaigns",
              "Smart patient segmentation",
              "Real-time campaign analytics",
            ]}
          />
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}

      <CommonTestimonials />

      {/* ── FAQ ── */}

      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="text-4xl font-semibold text-center text-gray-900 mb-12">
              Frequently asked questions
            </h2>
          </ScrollReveal>

          <FaqAccordion />
        </div>
      </section>

      {/* ── CTA ── */}

      <section className="py-20 px-6">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-3xl font-semibold text-gray-900"
            variants={fadeUp}
          >
            Grow Your Healthcare Practice with Powerful Clinic Promotion
            Software
          </motion.h2>

          <motion.p
            className="mt-4 text-gray-600"
            variants={fadeUp}
          >
            Manage healthcare promotions, patient engagement campaigns,
            appointment marketing, and automated communication workflows using
            secure Healthcare Marketing Software.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 inline-flex justify-center"
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
                className="rounded-half px-10 h-11 cursor-pointer"
                onClick={() => navigate("/book-demo")}
              >
                Book a Live Demo
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <MarketingDemoCTA />
    </div>
  )
}
