import { useState, useRef, useEffect } from "react";
import {
  motion,
  useInView,
  AnimatePresence,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import {
  ChevronDown,
  Mail,
  MessageSquare,
  Bell,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import CommonTestimonials from "@/components/CommonTestimonials";
import { useNavigate } from "react-router-dom";

// ─── Animation Variants ────────────────────────────────────────────────────────

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
} satisfies Variants;

const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
} satisfies Variants;

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: "easeInOut" },
  },
} satisfies Variants;

// ─── Reusable scroll-triggered wrapper ────────────────────────────────────────

function ScrollReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay }}
    >
      {children}
    </motion.div>
  );
}

// ─── Features ──────────────────────────────────────────────────────────────────

const FEATURES = [
  {
    icon: Bell,
    title: "Automated Appointment Reminders",
    description:
      "Reduce missed appointments with automated email and SMS reminder workflows.",
  },
  {
    icon: Mail,
    title: "SMS & Email Notifications",
    description:
      "Send confirmations, schedule updates, and healthcare alerts instantly.",
  },
  {
    icon: MessageSquare,
    title: "Two-Way Patient Communication",
    description:
      "Enable secure messaging between healthcare staff and patients.",
  },
  {
    icon: Users,
    title: "Centralized Communication Dashboard",
    description:
      "Manage patient communication workflows from one secure platform.",
  },
];

const FAQ_ITEMS = [
  {
    q: "What is Healthcare Email & SMS Software?",
    a: "Healthcare Email & SMS Software helps clinics and healthcare providers automate patient communication, appointment reminders, notifications, and follow-up messaging from one platform.",
  },
  {
    q: "How does Email & SMS Software improve healthcare operations?",
    a: "It reduces manual communication tasks, improves patient engagement, streamlines reminders, and supports faster communication workflows.",
  },
  {
    q: "Can patients receive appointment reminders through SMS and email?",
    a: "Yes. Patients can automatically receive reminders, confirmations, schedule updates, and healthcare notifications through both SMS and email.",
  },
  {
    q: "Does the software support automated follow-up messaging?",
    a: "Yes. Clinics can automate follow-up communication, post-visit instructions, wellness reminders, and healthcare updates.",
  },
  {
    q: "Can healthcare staff manage communication from one dashboard?",
    a: "Yes. The platform centralizes patient communication workflows, message tracking, and outreach management in one system.",
  },
  {
    q: "Does Email & SMS Software help reduce missed appointments?",
    a: "Yes. Automated reminders and communication workflows help reduce no-shows and improve appointment attendance.",
  },
  {
    q: "Is the platform suitable for multi-provider healthcare organizations?",
    a: "Absolutely. The software supports clinics, hospitals, healthcare networks, and growing medical practices with scalable communication tools.",
  },
  {
    q: "Can the software integrate with appointment scheduling and EHR systems?",
    a: "Yes. Email & SMS Software can integrate with scheduling systems, Electronic Health Record Software, and patient management platforms for connected healthcare communication.",
  },
];

const LOGOS = [
  "MediCare",
  "HealthFirst",
  "CareSync",
  "MedPlus",
  "ClinicHub",
  "WellCare",
];

// ─── FAQ Accordion ─────────────────────────────────────────────────────────────

function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className="divide-y divide-gray-200 border-t border-gray-200"
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={staggerContainer}
    >
      {FAQ_ITEMS.map((item, index) => {
        const isOpen = openIndex === index;

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
                  isOpen ? "bg-primary text-white" : "bg-gray-100 text-gray-400"
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
        );
      })}
    </motion.div>
  );
}

// ─── Deep Dive Row ─────────────────────────────────────────────────────────────

function DeepDiveRow({
  imageLeft,
  eyebrow,
  heading,
  body,
  bullets,
}: {
  imageLeft: boolean;
  eyebrow: string;
  heading: string;
  body: string;
  bullets: string[];
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const imageVariant = {
    hidden: { opacity: 0, x: imageLeft ? -32 : 32 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

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
  };

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
          src="/email.png"
          alt="Healthcare Email SMS Software"
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
                show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block flex-shrink-0" />
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function EmailSmsCampaigns() {
  const navigate = useNavigate();

  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroImageY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  useEffect(() => {
    document.title = "Healthcare Email & SMS Software | Patient Communication Software for Clinics"

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
      "Automate appointment reminders, patient notifications, follow-up messaging, and healthcare communication workflows using secure Email & SMS Software designed for modern clinics and healthcare providers."
    )
  }, [])

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
              className="text-4xl lg:text-4xl font-semibold text-gray-900 leading-tight mb-6"
              variants={fadeUp}
            >
              Healthcare Email & SMS Software for Faster Patient Communication
            </motion.h1>

            <motion.p
              className="text-gray-600 text-lg mb-6"
              variants={fadeUp}
            >
              Send appointment reminders, booking confirmations, follow-up
              messages, and important healthcare updates through secure Email &
              SMS Communication Software built for modern healthcare providers
              and clinics.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              variants={fadeUp}
            >
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
                src="/email.png"
                alt="Healthcare Email and SMS Software"
                className="w-full h-full object-cover"
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
              Trusted by healthcare providers worldwide
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
                  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
                }}
              >
                {name}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── OVERVIEW ── */}

      <section className="bg-gray-50 py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <h2 className="text-3xl font-semibold text-center text-gray-900">
              Simplify Patient Communication with Automated Email & SMS
              Workflows
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <p className="text-center text-gray-600 mt-4 max-w-3xl mx-auto">
              Improve patient engagement, reduce missed appointments, and
              streamline communication using intelligent Email & SMS Software
              designed for healthcare organizations, clinics, and medical
              practices.
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
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  className="bg-white rounded-xl p-6 shadow-sm border"
                  variants={cardVariant}
                  whileHover={{
                    y: -6,
                    boxShadow: "0 12px 32px -4px rgba(0,0,0,0.10)",
                    transition: { duration: 0.25, ease: "easeOut" },
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
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── PATIENT COMMUNICATION ── */}

      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-6xl space-y-24">
          <DeepDiveRow
            imageLeft
            eyebrow="Patient Communication"
            heading="Deliver Faster & More Convenient Patient Communication"
            body="Help patients stay informed throughout their healthcare journey with automated reminders, confirmations, alerts, and personalized healthcare messages delivered directly through email and SMS."
            bullets={[
              "Automated appointment reminders",
              "Instant healthcare notifications",
              "Follow-up communication workflows",
            ]}
          />

          <DeepDiveRow
            imageLeft={false}
            eyebrow="Healthcare Messaging"
            heading="Enable Secure Two-Way Patient Messaging"
            body="Support better patient experiences with connected communication workflows that allow healthcare staff and patients to communicate quickly and efficiently."
            bullets={[
              "Two-way patient communication",
              "Real-time schedule updates",
              "Connected messaging workflows",
            ]}
          />
        </div>
      </section>

      {/* ── STAFF MANAGEMENT ── */}

      <section className="bg-gray-50 py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <h2 className="text-3xl font-semibold text-center text-gray-900">
              Healthcare Communication Software Built for Operational Efficiency
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <p className="text-center text-gray-600 mt-4 max-w-3xl mx-auto">
              Manage patient communication workflows, staff coordination, and
              automated outreach campaigns from one centralized healthcare
              communication platform.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mt-14">
            {[
              "Reduced Missed Appointments",
              "Faster Patient Outreach",
              "Improved Staff Productivity",
              "Centralized Communication Tracking",
              "Better Patient Engagement",
            ].map((item) => (
              <div
                key={item}
                className="bg-white border rounded-xl p-6 text-center shadow-sm"
              >
                <p className="font-medium text-gray-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AUTOMATION ── */}

      <section className="bg-white py-20 px-6">
        <div className="mx-auto max-w-6xl space-y-24">
          <DeepDiveRow
            imageLeft
            eyebrow="Workflow Automation"
            heading="Automate Healthcare Communication Workflows"
            body="Modern healthcare organizations need automated communication systems that improve responsiveness, reduce administrative workload, and support better patient experiences."
            bullets={[
              "Automated appointment reminders",
              "Smart follow-up messaging",
              "Real-time communication updates",
            ]}
          />

          <DeepDiveRow
            imageLeft={false}
            eyebrow="Analytics Dashboard"
            heading="Track Communication Performance from One Dashboard"
            body="Monitor patient engagement, message delivery, communication activity, and workflow performance using a centralized analytics dashboard."
            bullets={[
              "Communication analytics dashboard",
              "Patient engagement tracking",
              "Message delivery monitoring",
            ]}
          />
        </div>
      </section>

      {/* ── BUSINESS IMPACT ── */}

      <section className="bg-gray-50 py-20 px-6">
        <div className="mx-auto max-w-6xl">
          <ScrollReveal>
            <h2 className="text-3xl font-semibold text-center text-gray-900">
              Improve Patient Engagement While Streamlining Healthcare
              Operations
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <p className="text-center text-gray-600 mt-4 max-w-3xl mx-auto">
              Email and SMS communication tools help healthcare organizations
              improve responsiveness, strengthen patient relationships, and
              simplify communication management across the entire care journey.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
            {[
              {
                title: "Better Appointment Attendance",
                desc: "Automated reminders help reduce missed appointments and scheduling gaps.",
              },
              {
                title: "Faster Patient Communication",
                desc: "Deliver important healthcare updates instantly through email and SMS.",
              },
              {
                title: "Improved Patient Satisfaction",
                desc: "Provide patients with convenient, modern communication experiences.",
              },
              {
                title: "Increased Operational Efficiency",
                desc: "Reduce manual outreach tasks and simplify healthcare communication workflows.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white border rounded-2xl p-8 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
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
          <ScrollReveal>
            <h2 className="text-4xl font-semibold text-center text-gray-900 mb-12">
              Frequently Asked Questions
            </h2>
          </ScrollReveal>

          <FaqAccordion />
        </div>
      </section>

      {/* ── FINAL CTA ── */}

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
            Modernize Patient Communication with Healthcare Email & SMS
            Software
          </motion.h2>

          <motion.p
            className="mt-4 text-gray-600 max-w-2xl mx-auto"
            variants={fadeUp}
          >
            Manage reminders, notifications, patient messaging, and
            communication workflows using secure, cloud-based Email & SMS
            Communication Software designed for healthcare providers.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap justify-center gap-4"
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
              onClick={() => navigate("/free-trial")}
            >
              Start Free Trial
            </Button>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}