import {
  ArrowUpRight,
  CalendarArrowDown,
  CalendarClock,
  ChevronDown,
  Hand,
  BadgeCheck,
  Film,
  NotebookText,
  Syringe,
  CreditCard,
  Mail,
  CircleDollarSign,
  WandSparkles,
  ScrollText,
  Monitor,
} from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
 "../FooterPage/footerpage";

const featureTiles = [
  { label: "Appointment scheduling and online booking", icon: CalendarArrowDown },
  { label: "Secure patient portal", icon: Hand },
  { label: "HIPAA-compliant electronic health records", icon: BadgeCheck },
  { label: "Clinical photography and imaging", icon: Film },
  { label: "Pre- and post-treatment care plans", icon: NotebookText },
  { label: "Image annotation and injection mapping", icon: Syringe },
  { label: "Customizable patient consent forms", icon: ScrollText },
  { label: "Automated pre- and post-care communications", icon: Mail },
  { label: "Deposits and cancellation protection", icon: CircleDollarSign },
  { label: "Marketing tools for patient engagement", icon: WandSparkles },
  { label: "Centralized e-prescribing", icon: CreditCard },
];

const bookingPills = [
  "Round-the-clock appointment access",
  "Flexible scheduling options",
  "Seamless rescheduling and cancellations",
  "Efficient resource allocation",
];

const portalPills = [
  "Customize your patient portal to reflect your practice",
  "Empower patients with self-service tools",
  "Choose the information you want to collect",
  "Control what patients can view and access",
];

const hipaaPills = [
  "Maintain secure patient data protection",
  "Role-based access controls and authentication",
  "Comprehensive electronic health records",
  "One-click access to critical health information",
];

const labsPills = [
  "Integrate with your preferred lab partner",
  "Submit lab orders directly from the platform",
  "Track all lab requests in one centralized view",
  "Easily share results with patients",
];

const prescribePills = [
  "Prescribe and send directly from the platform",
  "Real-time error detection and safety checks",
  "Complete prescription audit trail and history",
  "Works seamlessly across all providers and locations",
];

const streamlinedFeatures = [
  {
    title: "Customizable clinical forms",
    text: "Design your forms once, then let the platform handle the rest. Forms are sent, completed, and returned automatically—with patient records populated instantly. Eliminate manual data entry and streamline your clinical documentation workflow.",
    icon: ScrollText,
  },
  {
    title: "Automated pre- and post-care communications",
    text: "Never miss a follow-up with automated pre- and post-treatment emails. The system delivers timely instructions and check-ins without any manual effort, helping optimize treatment outcomes and ensuring a smooth patient journey.",
    icon: Mail,
  },
  {
    title: "Deposits and cancellation protection",
    text: "Protect your practice revenue from no-shows and last-minute cancellations. Set deposit requirements and payment protection rules to minimize financial impact—safeguarding your bottom line automatically.",
    icon: CircleDollarSign,
  },
  {
    title: "Integrated point-of-sale system",
    text: "Streamline billing, invoicing, and payments while reducing errors and improving cash flow. Accept payments seamlessly with integrated card terminals, all connected to your practice management platform. Access financial reports to gain valuable insights that help grow your practice.",
    icon: Monitor,
  },
  {
    title: "Automated appointment reminders",
    text: "Reduce missed appointments with customizable reminders. Send automated confirmation emails and texts containing appointment details, intake forms, and cancellation policies. Set it up once, and let the system maintain a consistently full schedule.",
    icon: CalendarClock,
  },
  {
    title: "Patient engagement and marketing tools",
    text: "Grow your patient base with confidence. Automate personalized communications, create loyalty programs, and boost engagement with gift vouchers. Built-in marketing features help attract new patients, collect reviews, and track success—all from one platform.",
    icon: WandSparkles,
  },
];

const trustedLogos = [
  { src: "https://pabau.com/wp-content/uploads/2024/07/capterra.webp", alt: "Capterra", score: "4.7 / 5" },
  { src: "https://pabau.com/wp-content/uploads/2026/02/software-advice-best-customer-support.svg", alt: "Software Advice Best Customer Support", score: "4.7 / 5" },
  { src: "https://pabau.com/wp-content/uploads/2026/02/software-advice-front-runners.svg", alt: "Software Advice Front Runners", score: "4.7 / 5" },
  { src: "https://pabau.com/wp-content/uploads/2024/07/capterra.webp", alt: "Capterra", score: "4.8 / 5" },
  { src: "https://pabau.com/wp-content/uploads/2026/02/capterra-shortlist.svg", alt: "Capterra Shortlist" },
  { src: "https://pabau.com/wp-content/uploads/2024/04/ClinicalDocumentation_BestResults_Total.svg", alt: "Best Results" },
  { src: "https://pabau.com/wp-content/uploads/2024/04/ClinicalDocumentation_Leader_Leader.svg", alt: "Leader" },
  { src: "https://pabau.com/wp-content/uploads/2024/04/ClinicalDocumentation_UsersMostLikelyToRecommend_Nps.svg", alt: "Users Most Likely To Recommend" },
];

const faqItems = [
  {
    q: "What is practice management software?",
    a: "Practice management software is designed to streamline the administrative and clinical operations of healthcare practices. It helps manage appointments, patient records, billing, inventory, marketing, and more—all from a single platform.",
  },
  {
    q: "How can practice management software benefit my healthcare practice?",
    a: "It helps your team reduce administrative tasks, improve patient communication, manage appointments and payments, and keep all practice operations connected in one unified system.",
  },
  {
    q: "How much does practice management software cost?",
    a: "Pricing varies based on your team size and practice needs. Most healthcare practices select a plan based on user count and support requirements.",
  },
  {
    q: "Can this platform be used to manage staff and team performance?",
    a: "Yes. You can manage staff schedules, role-based permissions, commission tracking, and team performance—all from a single platform.",
  },
];

export default function PatientCareRecordsPage() {
  const [activeBookingPill, setActiveBookingPill] = useState(0);
  const [activePortalPill, setActivePortalPill] = useState(0);
  const [activeHipaaPill, setActiveHipaaPill] = useState(0);
  const [activeLabsPill, setActiveLabsPill] = useState(0);
  const [activePrescribePill, setActivePrescribePill] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <main className="pmr-page">
      <section className="pmr-hero">
        <div className="pmr-wrap">
         <p className="pmr-eyebrow">PRACTICE MANAGEMENT</p>
<h1 className="pmr-title">All-in-one practice management software for healthcare clinics</h1>
<p className="pmr-subtitle">
  Patient care is complex—but it doesn't have to be a headache. Our platform simplifies practice management so you can deliver exceptional care with every visit.
</p>

          <div className="pmr-actions">
            <Button className="pmr-btn-primary">Book a demo</Button>
            <Button variant="outline" className="pmr-btn-secondary">
              Take a product tour
            </Button>
          </div>

          <div className="pmr-image-frame">
            <img
              src="https://pabau.com/wp-content/uploads/2024/07/patient-management-hero-1024x518.webp"
              alt="Patient management calendar"
              className="pmr-hero-image"
              loading="eager"
            />
            <img
              src="https://pabau.com/wp-content/uploads/2024/07/patient-management-hero-1.webp"
              alt="Patient management mobile preview"
              className="pmr-phone-image"
              loading="eager"
            />
          </div>
        </div>
      </section>

      <section className="pmr-grid-section">
        <div className="pmr-wrap">
          <div className="pmr-grid">
            {featureTiles.map(({ label, icon: Icon }) => (
              <Card key={label} className="pmr-tile">
                <CardContent className="pmr-tile-content">
                  <Icon className="pmr-tile-icon" strokeWidth={2} />
                  <p className="pmr-tile-label">{label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="pmr-copy-card">
            <CardContent className="pmr-copy-content">
              <h2 className="pmr-copy-title">Make clinic management a breeze with Pabau&apos;s EMR software</h2>
             <p className="pmr-copy-text">
  Built for clinics and healthcare practices like yours, our all-in-one practice management solution transforms daily operations into a streamlined, efficient workflow.
</p>
             <p className="pmr-copy-text">
  It centralizes essential daily operations—including appointment scheduling, electronic health records, billing, patient management, and marketing—into one seamless platform.
</p>
              <p className="pmr-copy-text">
  Want to spend less time on paperwork and more time growing your practice? Our platform can help.
</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="pmr-feature-section">
        <div className="pmr-wrap pmr-wrap-feature">
          <h2 className="pmr-feature-title">Appointment scheduling and online booking</h2>
         <p className="pmr-feature-subtitle">
  Tired of scheduling headaches? Our smart booking system is here to help. We've designed appointment scheduling and online booking features to simplify the process for both you and your patients.
</p>

          <div className="pmr-feature-row">
            <div className="pmr-pill-column">
              {bookingPills.map((pill, idx) => (
                <Button
                  key={pill}
                  type="button"
                  variant="outline"
                  aria-pressed={idx === activeBookingPill}
                  onClick={() => setActiveBookingPill(idx)}
                  className={`pmr-pill pmr-pill-blue ${idx === activeBookingPill ? "is-active" : ""}`}
                >
                  {pill}
                </Button>
              ))}
            </div>

            <Card className="pmr-feature-card pmr-feature-card-blue">
              <CardContent className="pmr-feature-card-content">
                <img
                  src="https://pabau.com/wp-content/uploads/2024/07/available-24-7-768x498.webp"
                  alt="24/7 booking availability"
                  className="pmr-feature-image"
                  loading="lazy"
                />
               <p className="pmr-feature-card-text">
  Never miss after-hours appointment requests. Our user-friendly online portal is always available, capturing booking opportunities around the clock—so your practice stays connected even when you're off the clock.
</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="pmr-strip" aria-label="Potential bookings callout">
        <div className="pmr-wrap pmr-strip-wrap">
          <p className="pmr-strip-text">Don&apos;t miss out on potential bookings</p>
          <Button variant="outline" className="pmr-strip-btn">
            Learn more
          </Button>
        </div>
      </section>

      <section className="pmr-feature-section pmr-feature-section-bottom">
        <div className="pmr-wrap pmr-wrap-feature">
          <h2 className="pmr-feature-title">Patient portal for seamless communication</h2>
         <p className="pmr-feature-subtitle">
  First impressions matter—online and in person. Your patient portal is the digital face of your practice. Let's make it shine as brightly as the care you provide.
</p>

          <div className="pmr-feature-row pmr-feature-row-reverse">
            <Card className="pmr-feature-card pmr-feature-card-green">
              <CardContent className="pmr-feature-card-content">
                <img
                  src="https://pabau.com/wp-content/uploads/2024/07/Brand-your-portal-boost-your-image-768x448.webp"
                  alt="Brand your portal"
                  className="pmr-feature-image"
                  loading="lazy"
                />
               <p className="pmr-feature-card-text">
  Want your online presence to reflect your practice's personality? Easy. Use our theme builders to select your brand colors and add team photos. Showcase your latest reviews to make a strong first impression with new patients.
</p>
              </CardContent>
            </Card>

            <div className="pmr-pill-column pmr-pill-column-right">
              {portalPills.map((pill, idx) => (
                <Button
                  key={pill}
                  type="button"
                  variant="outline"
                  aria-pressed={idx === activePortalPill}
                  onClick={() => setActivePortalPill(idx)}
                  className={`pmr-pill pmr-pill-green ${idx === activePortalPill ? "is-active" : ""}`}
                >
                  {pill}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pmr-strip pmr-strip-green" aria-label="Portal callout">
        <div className="pmr-wrap pmr-strip-wrap">
          <p className="pmr-strip-text">Learn more about Pabau&apos;s client portal</p>
          <Button variant="outline" className="pmr-strip-btn">
            Learn more
          </Button>
        </div>
      </section>

      <section className="pmr-feature-section">
        <div className="pmr-wrap pmr-wrap-feature">
          <h2 className="pmr-feature-title">HIPAA compliance and EMR at your fingertips</h2>
         <p className="pmr-feature-subtitle">
  While software alone doesn't ensure HIPAA compliance, our platform is designed to help clinics maintain compliance and manage detailed electronic health records safely and securely.
</p>

          <div className="pmr-feature-row">
            <div className="pmr-pill-column">
              {hipaaPills.map((pill, idx) => (
                <Button
                  key={pill}
                  type="button"
                  variant="outline"
                  aria-pressed={idx === activeHipaaPill}
                  onClick={() => setActiveHipaaPill(idx)}
                  className={`pmr-pill pmr-pill-pink ${idx === activeHipaaPill ? "is-active" : ""}`}
                >
                  {pill}
                </Button>
              ))}
            </div>

            <Card className="pmr-feature-card pmr-feature-card-pink">
              <CardContent className="pmr-feature-card-content">
                <img
                  src="https://pabau.com/wp-content/uploads/2024/07/Keep-patient-data-secure-768x485.webp"
                  alt="Keep patient data secure"
                  className="pmr-feature-image"
                  loading="lazy"
                />
               <p className="pmr-feature-card-text">
  We take patient privacy seriously. Our platform uses robust encryption to keep all data secure. From medical records to appointment history, everything is stored safely, ensuring regulatory compliance and building trust with your patients.
</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="pmr-strip pmr-strip-pink" aria-label="HIPAA callout">
        <div className="pmr-wrap pmr-strip-wrap">
          <p className="pmr-strip-text">Find out how Pabau helps with HIPAA compliance</p>
          <Button variant="outline" className="pmr-strip-btn">
            Learn more
          </Button>
        </div>
      </section>

      <section className="pmr-feature-section pmr-feature-section-bottom">
        <div className="pmr-wrap pmr-wrap-feature">
          <h2 className="pmr-feature-title">Custom labs integration</h2>
         <p className="pmr-feature-subtitle">
  Need to manage lab requests in your practice? Our integrated lab solution makes it easy to request, review, and share lab results—all from one system. This keeps your team organized and focused on delivering high-quality patient care.
</p>

          <div className="pmr-feature-row pmr-feature-row-reverse">
            <Card className="pmr-feature-card pmr-feature-card-amber">
              <CardContent className="pmr-feature-card-content">
                <img
                  src="https://pabau.com/wp-content/uploads/2025/06/Integrate-with-your-lab-partner-of-choice-768x560.webp"
                  alt="Integrate with your lab partner of choice"
                  className="pmr-feature-image"
                  loading="lazy"
                />
                <p className="pmr-feature-card-text">
  Our integrated lab solution connects your practice directly to your preferred lab system.
</p>
              </CardContent>
            </Card>

            <div className="pmr-pill-column pmr-pill-column-right">
              {labsPills.map((pill, idx) => (
                <Button
                  key={pill}
                  type="button"
                  variant="outline"
                  aria-pressed={idx === activeLabsPill}
                  onClick={() => setActiveLabsPill(idx)}
                  className={`pmr-pill pmr-pill-amber ${idx === activeLabsPill ? "is-active" : ""}`}
                >
                  {pill}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pmr-feature-section">
        <div className="pmr-wrap pmr-wrap-feature">
          <h2 className="pmr-feature-title">Centralized Prescriptions</h2>
        <p className="pmr-feature-subtitle">
  Need to manage prescriptions more efficiently across your practice?
  <br />
  Our centralized prescribing solution gives you one simple place to create, send, and track all prescriptions. No more switching between platforms or chasing pharmacy confirmations—just fast, accurate, compliant prescribing that keeps your practice moving.
</p>

          <div className="pmr-feature-row">
            <div className="pmr-pill-column">
              {prescribePills.map((pill, idx) => (
                <Button
                  key={pill}
                  type="button"
                  variant="outline"
                  aria-pressed={idx === activePrescribePill}
                  onClick={() => setActivePrescribePill(idx)}
                  className={`pmr-pill pmr-pill-blue ${idx === activePrescribePill ? "is-active" : ""}`}
                >
                  {pill}
                </Button>
              ))}
            </div>

            <Card className="pmr-feature-card pmr-feature-card-blue">
              <CardContent className="pmr-feature-card-content">
                <img
                  src="https://pabau.com/wp-content/uploads/2025/08/Prescribe-and-send-directly-from-Pabau-768x465.webp"
                  alt="Centralized prescriptions"
                  className="pmr-feature-image"
                  loading="lazy"
                />
                <p className="pmr-feature-card-text">
  Submit prescriptions electronically through leading pharmacy networks, or email them directly to your preferred pharmacy inbox.
</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="pmr-simple-section">
        <div className="pmr-wrap pmr-wrap-narrow">
          <h2 className="pmr-simple-title">Before and after photos</h2>
         <p className="pmr-simple-subtitle">
  Let your results speak for themselves. Impress your patients by showcasing their treatment transformations with clinical photography.
</p>

          <Card className="pmr-simple-card">
            <CardContent className="pmr-simple-card-content">
              <div className="pmr-simple-grid">
                <div>
                  <h3 className="pmr-simple-grid-title">Side-by-side comparisons</h3>
                  <p className="pmr-simple-grid-text">
  Seamlessly compare before and after images with retained high-resolution photos, highlighting the subtle clinical changes that make all the difference.
</p>
                </div>
                <div>
                  <h3 className="pmr-simple-grid-title">Upload and save directly to client records</h3>
                <p className="pmr-simple-grid-text">
  No more lost images. Every photo you take automatically lands in the right patient's secure record—no need to transfer between systems. Review progress or share results anytime; it's all there when you need it.
</p>
                </div>
              </div>
              <Button className="pmr-simple-btn">Learn more</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="pmr-simple-section">
        <div className="pmr-wrap pmr-wrap-narrow">
          <h2 className="pmr-simple-title">Pre- and post-care instructions</h2>
        <p className="pmr-simple-subtitle">
  Verbally explaining care instructions or handing out printed materials isn't ideal if you want patients to achieve the best possible treatment outcomes. The likelihood is they'll forget or simply lose the information.
</p>
<p className="pmr-simple-subtitle pmr-simple-subtitle-second">
  With automated pre- and post-care communications, you can send clear instructions via email and SMS before and after every appointment—without lifting a finger. Our platform handles it all.
</p>

          <Card className="pmr-simple-card">
            <CardContent className="pmr-simple-card-content">
              <div className="pmr-simple-grid">
                <div>
                  <h3 className="pmr-simple-grid-title">Help patients feel prepared and ready</h3>
                 <p className="pmr-simple-grid-text">
  The last thing you want is for a patient to arrive and be unable to receive treatment.
</p>
                 <p className="pmr-simple-grid-text">
  The same applies to post-care. If patients don't follow instructions, they're likely to experience suboptimal results.
</p>
                  <p className="pmr-simple-grid-text">
  Pre- and post-care instructions set every patient up for success.
</p>
                </div>
                <div>
                  <h3 className="pmr-simple-grid-title">Consistent, standardized communications</h3>
                 <p className="pmr-simple-grid-text">
  Do you have a large team or multiple practice locations? With automated pre- and post-care instructions, you can ensure every patient receives consistent guidance for their treatment.
</p>
                  <p className="pmr-simple-grid-text">No inconsistencies, no confusion!</p>
                </div>
              </div>
              <Button className="pmr-simple-btn">Learn more</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="pmr-simple-section">
        <div className="pmr-wrap pmr-wrap-narrow">
          <h2 className="pmr-simple-title">Image markup and injection plotting</h2>
        <p className="pmr-simple-subtitle">
  Took that patient photo? Now make it work harder. Use our annotation and injection mapping tools to visually document treatment details directly on the image.
</p>

          <Card className="pmr-simple-card">
            <CardContent className="pmr-simple-card-content">
              <div className="pmr-simple-grid">
                <div>
                  <h3 className="pmr-simple-grid-title">Pinpoint injections and track treatment details</h3>
                 <p className="pmr-simple-grid-text">
  Pinpoint injection sites with precision. Mark dosages and other key information directly on photos. Later, access a complete visual history—area, product, batch number, date—it's all documented.
</p>
                </div>
                <div>
                  <h3 className="pmr-simple-grid-title">Minimize the risk of mistakes</h3>
                 <p className="pmr-simple-grid-text">
  Why leave room for errors when you don't have to? Our platform comes with pre-selected injectables, treatment areas, and measurements. No need for free typing means fewer chances for mistakes. It's faster, smarter, and lets you spend less time double-checking.
</p>
                </div>
              </div>
              <Button className="pmr-simple-btn">Learn more</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="pmr-streamlined">
        <div className="pmr-wrap pmr-wrap-streamlined">
          <h2 className="pmr-streamlined-title">Features for streamlined patient management</h2>
          <div className="pmr-streamlined-grid">
            {streamlinedFeatures.map(({ title, text, icon: Icon }) => (
              <article key={title} className="pmr-streamlined-item">
                <Icon className="pmr-streamlined-icon" strokeWidth={1.8} />
                <h3 className="pmr-streamlined-item-title">{title}</h3>
                <p className="pmr-streamlined-item-text">{text}</p>
                <Button variant="link" className="pmr-streamlined-link" type="button">
                  <span>⟶</span>
                  <span>Learn more</span>
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pmr-reviews">
        <div className="pmr-wrap pmr-wrap-reviews">
          <h2 className="pmr-reviews-title">Customer Reviews & Testimonials</h2>

          <div className="pmr-testimonial-board">
            <Card className="pmr-main-review">
              <CardContent className="pmr-main-review-content">
                <Button variant="ghost" className="pmr-review-external" type="button">
                  <ArrowUpRight className="h-3 w-3" />
                </Button>
                <img src="https://pabau.com/wp-content/uploads/2025/07/Kim-Eric.webp" alt="Eric Kim" className="pmr-main-review-avatar" loading="lazy" />
                <p className="pmr-main-review-text">
  One of the top challenges our platform has helped me overcome is streamlining patient communication and appointment management. It has made it so much easier to manage patient interactions in one place, saving time and reducing missed appointments.
</p>
                <p className="pmr-main-review-name">Eric Kim</p>
                <p className="pmr-main-review-clinic">Eric Kim Clinic</p>
                <span className="pmr-main-review-quote">❞</span>
              </CardContent>
            </Card>

            <div className="pmr-side-reviews">
              <Card className="pmr-side-review">
                <CardContent className="pmr-side-review-content">
                  <Button variant="ghost" className="pmr-review-external" type="button">
                    <ArrowUpRight className="h-3 w-3" />
                  </Button>
                  <img src="https://pabau.com/wp-content/uploads/2024/07/g2.webp" alt="G2" className="pmr-side-review-logo is-g2" loading="lazy" />
                  <p className="pmr-side-review-text">What I liked most about the Pabau app is its user-friendly interface and comprehensive patient management system.</p>
                  <p className="pmr-side-review-name">Edgar D.</p>
                  <p className="pmr-side-review-stars">★★★★★</p>
                </CardContent>
              </Card>

              <Card className="pmr-side-review">
                <CardContent className="pmr-side-review-content">
                  <Button variant="ghost" className="pmr-review-external" type="button">
                    <ArrowUpRight className="h-3 w-3" />
                  </Button>
                  <img src="https://pabau.com/wp-content/uploads/2024/07/capterra.webp" alt="Capterra" className="pmr-side-review-logo" loading="lazy" />
                  <p className="pmr-side-review-text">What do you like best about Pabau? The ability to access the records for patients easily, it is very user friendly.</p>
                  <p className="pmr-side-review-name">Susie G.</p>
                  <p className="pmr-side-review-stars">★★★★★</p>
                </CardContent>
              </Card>
            </div>

            <Card className="pmr-mini-review">
              <CardContent className="pmr-mini-review-content">
                <Button variant="ghost" className="pmr-review-external" type="button">
                  <ArrowUpRight className="h-3 w-3" />
                </Button>
                <img src="https://pabau.com/wp-content/uploads/2024/07/capterra.webp" alt="Capterra" className="pmr-mini-review-logo" loading="lazy" />
                <p className="pmr-mini-review-text">The ability to create links for specific treatments is a standout feature.</p>
                <p className="pmr-mini-review-name">Sadiq Q.</p>
              </CardContent>
            </Card>

            <Card className="pmr-mini-review">
              <CardContent className="pmr-mini-review-content">
                <Button variant="ghost" className="pmr-review-external" type="button">
                  <ArrowUpRight className="h-3 w-3" />
                </Button>
                <img src="https://pabau.com/wp-content/uploads/2024/07/capterra.webp" alt="Capterra" className="pmr-mini-review-logo" loading="lazy" />
                <p className="pmr-mini-review-text">Great service, good quality software and great team to help set up and deal with any queries.</p>
                <p className="pmr-mini-review-name">Rachael C.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="pmr-trusted">
        <div className="pmr-wrap pmr-wrap-trusted">
          <p className="pmr-trusted-title">Trusted by 3500+ practices across the world</p>
          <div className="pmr-trusted-row">
            {trustedLogos.map((logo) => (
              <div className="pmr-trusted-item" key={logo.alt}>
                <img src={logo.src} alt={logo.alt} className="pmr-trusted-logo" loading="lazy" />
                {logo.score && <p className="pmr-trusted-score">● {logo.score}</p>}
              </div>
            ))}
          </div>
          <div className="pmr-trusted-line" />
        </div>
      </section>

      <section className="pmr-faq">
        <div className="pmr-wrap pmr-wrap-faq">
          <h2 className="pmr-faq-title">Clinic Software FAQs</h2>
          <div className="pmr-faq-list">
            {faqItems.map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <Card className="pmr-faq-item" key={item.q}>
                  <CardContent className="pmr-faq-item-content">
                    <button
                      type="button"
                      className="pmr-faq-trigger"
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                    >
                      <span>{item.q}</span>
                      <ChevronDown className={`pmr-faq-icon ${isOpen ? "is-open" : ""}`} />
                    </button>
                    {isOpen && <p className="pmr-faq-answer">{item.a}</p>}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pmr-final-cta">
        <div className="pmr-wrap pmr-final-cta-wrap">
          <h2 className="pmr-final-cta-title">Ready to supercharge your clinic with Pabau?</h2>
          <Button className="pmr-final-cta-btn">Book a demo</Button>
        </div>
      </section>


    </main>
  );
}
