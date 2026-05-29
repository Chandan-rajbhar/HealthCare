import { useState } from "react";
import {
  ArrowUpRight,
  CalendarDays,
  ChevronDown,
  ChevronUp,
  ClipboardPlus,
  FileText,
  FileVideo,
  HandHeart,
  MessageSquareHeart,
  ShieldCheck,
  TimerReset,
  UserRound,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
 "@/pages/FooterPage/footerpage";

const heroImage =
  "https://pabau.com/wp-content/uploads/2025/04/patient_experience_hero_iamge-768x320.webp";
const frictionImage =
  "https://pabau.com/wp-content/uploads/2025/04/reduces_friction-768x697.webp";
const convenientAppointmentImage =
  "https://pabau.com/wp-content/uploads/2025/04/convenient_appointment_management-300x234.webp";
const convenienceAndAccessibilityImage =
  "https://pabau.com/wp-content/uploads/2025/04/convenience_and_accessibility-300x278.webp";
const improvedPreparednessImage =
  "https://pabau.com/wp-content/uploads/2025/04/improved_preparedness-768x590.webp";
const betterCoordinationImage =
  "https://pabau.com/wp-content/uploads/2025/04/better_coordination-768x577.webp";
const highQualityImage =
  "https://pabau.com/wp-content/uploads/2025/04/high_quality_patient_experience-300x194.webp";
const appointmentNotificationsImage =
  "https://pabau.com/wp-content/uploads/2025/04/appointment_notifications-300x259.webp";
const videoConferencingImage =
  "https://pabau.com/wp-content/uploads/2025/04/video_conferencing1.webp";
const hipaaImage = "https://pabau.com/wp-content/uploads/2025/04/hipaa1.webp";
const smartSurveysImage =
  "https://pabau.com/wp-content/uploads/2025/04/smart_surveys1-300x232.webp";
const npsBadgeImage =
  "https://pabau.com/wp-content/uploads/2024/04/ClinicalDocumentation_UsersMostLikelyToRecommend_Nps.svg";
const leaderBadgeImage =
  "https://pabau.com/wp-content/uploads/2024/04/ClinicalDocumentation_Leader_Leader.svg";
const bestResultsBadgeImage =
  "https://pabau.com/wp-content/uploads/2024/04/ClinicalDocumentation_BestResults_Total.svg";
const skinLogoImage = "https://pabau.com/wp-content/uploads/2025/03/Skin-1-300x138.webp";
const harrodsLogoImage =
  "https://pabau.com/wp-content/uploads/2025/03/Harrods-300x130.webp";
const veincentreLogoImage =
  "https://pabau.com/wp-content/uploads/2025/03/Veincentre.webp";
const cliniqueLogoImage =
  "https://pabau.com/wp-content/uploads/2025/03/Clinique-des-champs-elysees.webp";
const revivLogoImage =
  "https://pabau.com/wp-content/uploads/2025/03/Reviv-150x150.webp";
const adamImage = "https://pabau.com/wp-content/uploads/2025/04/Adam-Statyris-300x300.webp";
const g2Image = "https://pabau.com/wp-content/uploads/2024/07/g2.webp";
const capterraImage = "https://pabau.com/wp-content/uploads/2024/07/capterra.webp";
const arrow2Image = "https://pabau.com/wp-content/uploads/2023/08/arrow-2.svg";

const featureTiles = [
  { label: "Online appointment scheduling and booking", icon: CalendarDays },
  { label: "Secure patient portal", icon: UserRound },
  { label: "Customizable consent and intake forms", icon: FileText },
  { label: "Automated pre- and post-care communications", icon: HandHeart },
  { label: "Electronic health records", icon: ClipboardPlus },
  { label: "Automated appointment reminders", icon: TimerReset },
  { label: "Telehealth video consultations", icon: FileVideo },
  { label: "Patient feedback and review tools", icon: MessageSquareHeart },
  { label: "HIPAA-compliant infrastructure", icon: ShieldCheck },
];

const bookingItems = [
  {
    title: "Convenient, 24/7 access to scheduling",
    description: "Patients can book appointments anytime, from anywhere—fitting healthcare into their busy lives.",
  },
  {
    title: "Reduces administrative friction",
    description:
      "Online scheduling eliminates back-and-forth emails and phone tag. Patients can see real-time availability and book instantly, creating a seamless experience that puts patient convenience first.",
  },
  {
    title: "Greater control and personalization",
    description: "Customize booking options to match your practice's unique workflows—from appointment types to provider preferences and intake requirements.",
  },
  {
    title: "Reduces appointment anxiety",
    description: "Clear, straightforward booking gives patients confidence in their healthcare decisions, reducing uncertainty about availability and preparation.",
  },
];

const portalItems = [
  {
    title: "Convenient appointment management",
    description:
      "Patients can take control of their appointments by rescheduling or canceling directly through the patient portal.\n\nThis flexibility helps reduce missed appointments and ensures patients can make changes without the hassle of calling the practice.",
  },
  {
    title: "Secure access to personal health information, anytime, anywhere",
    description: "View medical records, treatment history, and upcoming appointments—all from a secure, easy-to-use portal available 24/7.",
  },
  {
    title: "Builds trust through secure communication",
    description: "Message your care team securely, receive important updates, and access educational resources—all within a protected environment that respects patient privacy.",
  },
  {
    title: "Track treatment progress and health goals",
    description: "Patients can view treatment plans, document progress, and stay engaged in their healthcare journey—fostering better outcomes through active participation.",
  },
];

const consentItems = [
  {
    title: "Convenience and accessibility",
    description:
      "Patients can complete digital intake forms at their convenience before arriving for their appointment.\n\nThis flexibility allows patients to fill out information from home or on their mobile devices, reducing the stress of paperwork in a busy waiting area.",
  },
  {
    title: "Shorter wait times for patients",
    description: "Reduce front-office bottlenecks by having intake forms completed ahead of time. Patients arrive ready for their appointment, and your team has all necessary information before they walk through the door.",
  },
  {
    title: "Create personalized treatment plans",
    description: "Use intake data to tailor care plans to each patient's unique needs, medical history, and treatment goals. Informed by accurate, up-to-date information, your clinical team can deliver more personalized, effective care.",
  },
  {
    title: "Improve data security and reduce manual errors",
    description: "Digital forms eliminate illegible handwriting and manual data entry errors. All information is securely stored in the patient's electronic health record, ensuring accuracy, compliance, and easy retrieval when needed.",
  },
];

const precareItems = [
  {
    title: "Improved preparedness and treatment adherence",
    description:
      "When you send patients clear instructions on what to do before and after their appointment, they're never left guessing. They have the information they need to prepare properly and achieve the best possible outcomes.",
  },
  {
    title: "Strengthened patient-provider relationship",
    description: "Proactive communication shows patients you care about their success. Regular, helpful guidance builds trust and demonstrates your commitment to their well-being beyond the appointment itself.",
  },
  {
    title: "Increased patient confidence",
    description: "Clear expectations reduce anxiety and help patients feel more in control of their treatment journey. Confident patients are more engaged, more likely to follow care plans, and more satisfied with their experience.",
  },
  {
    title: "Reduced complications, faster recovery",
    description: "Proper preparation and aftercare adherence directly impact treatment outcomes. When patients know exactly what to do, they're less likely to experience complications and recover more quickly.",
  },
];

const patientExperienceCards = [
  {
    title: "Appointment notifications",
    copy: "Keep your patients informed with timely automated appointment confirmations and reminders.",
    extra:
      "This helps patients stay on track and avoid missed appointments due to busy schedules.",
    image: appointmentNotificationsImage,
    bg: "bg-[#dfe5f2]",
  },
  {
    title: "Telehealth video consultations",
    copy: "Offering virtual appointments provides added flexibility for patients with busy schedules, ensuring they can still receive high-quality care from the comfort of home.",
    extra: "",
    image: videoConferencingImage,
    bg: "bg-[#f5e6ef]",
  },
  {
    title: "Secure HIPAA-compliant access to health records",
    copy: "Patients need reassurance that their personal health information is secure.",
    extra:
      "Our platform ensures protection through stringent safeguards, including role-based access controls, keeping sensitive data safe from unauthorized access or breaches.",
    image: hipaaImage,
    bg: "bg-[#d6efe7]",
  },
  {
    title: "Smart patient feedback and reviews",
    copy: "Positive feedback builds trust.",
    extra:
      "Instead of relying on annual surveys or manual feedback requests, automate the process with our built-in review and survey tools to capture insights when they matter most.",
    image: smartSurveysImage,
    bg: "bg-[#f5ebd5]",
  },
];

const brandLogos = [
  { src: skinLogoImage, alt: "SK:N", cls: "max-w-[104px]" },
  { src: harrodsLogoImage, alt: "Harrods", cls: "max-w-[100px]" },
  { src: veincentreLogoImage, alt: "Veincentre", cls: "max-w-[126px]" },
  { src: cliniqueLogoImage, alt: "Clinique Des Champs Elysees", cls: "max-w-[150px]" },
  { src: revivLogoImage, alt: "Reviv", cls: "max-w-[58px]" },
];

const reviewCards = [
  {
    kind: "large",
    logo: adamImage,
    quote:
      "Being able to automate patient consent, medical history form requests, and follow-up emails has far exceeded my expectations.\n\nThe ability to fully customize these processes to the specific needs of our practice has streamlined my daily operations, saving time and ensuring a consistent, professional patient experience.",
    author: "Adam Statyris",
    role: "Dr Alur Aesthetics",
  },
  {
    kind: "small",
    logo: g2Image,
    quote:
      "This platform helps with everything—from automatically sending appointment confirmations, pre- and post-care instructions, online forms, and review requests. It's perfect for anyone who wants to deliver exceptional patient care.",
    author: "Beatrice M.",
  },
  {
    kind: "wide",
    logo: g2Image,
    quote:
      "I really appreciate the telehealth and SMS features. They make communicating with patients much easier and more efficient.",
    author: "Dr J",
  },
  {
    kind: "small",
    logo: capterraImage,
    quote:
      "I've been in practice for almost 9 years and have tried many different software solutions, but always found something missing. This platform has everything I need—saves time, keeps records and medical forms in one place, and is easy to use. I'm very satisfied with this solution.",
    author: "Yobany V",
  },
];

const faqs = [
  {
    q: "What is practice management software?",
    a: "Practice management software is a digital platform that helps healthcare providers manage and enhance every aspect of patient care—from appointment scheduling and communication to clinical documentation, billing, and patient engagement.",
  },
  {
    q: "Why do you need practice management software?",
    a: "It centralizes the patient journey and removes administrative friction, so your team can spend less time coordinating and more time delivering high-quality care.",
  },
  {
    q: "How can practice management software improve patient satisfaction?",
    a: "Clear communication, easier scheduling, and smoother follow-up create a better patient experience, leading to higher satisfaction and stronger patient-provider relationships.",
  },
  {
    q: "How much does practice management software cost?",
    a: "Pricing depends on your practice size, team count, and feature requirements. Most healthcare practices select a plan based on the number of users and the workflows they need to support.",
  },
];

export default function SchedulingPaymentsPage() {
  const [activeBookingIndex, setActiveBookingIndex] = useState(1);
  const [activePortalIndex, setActivePortalIndex] = useState(0);
  const [activeConsentIndex, setActiveConsentIndex] = useState(0);
  const [activePrecareIndex, setActivePrecareIndex] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  return (
    <>
      <main className="bg-[#ffffff] text-[#102a4c]">
      <section className="bg-[#d4e6e8] px-4 pb-0 pt-14 sm:px-6 md:pt-16">
        <div className="mx-auto max-w-[1100px] text-center">
          <p className="text-[12px] font-medium tracking-[0.02em] text-[#5b6781] uppercase">
  PATIENT-CENTERED PRACTICE MANAGEMENT
</p>
        <h1 className="mx-auto mt-3 max-w-[980px] text-[44px] leading-[1.08] font-semibold tracking-[-0.02em] text-[#2f3f57] max-[1200px]:text-[38px] max-[900px]:text-[31px] max-[560px]:text-[26px]">
  All-in-one practice management software
</h1>
<p className="mx-auto mt-5 max-w-[900px] text-[24px] leading-[1.45] text-[#4e6079] max-[1200px]:text-[21px] max-[900px]:text-[18px] max-[560px]:text-[15px]">
  Set the tone for exceptional patient care with streamlined scheduling,
  simplified communication, and a seamless experience for every patient.
</p>

          <Button
            className="mt-8 h-11 rounded-[2px] bg-[#09757a] px-8 text-[14px] font-semibold text-white hover:bg-[#065d61]"
            size="lg"
          >
            Book a demo
          </Button>

          <img
            src={heroImage}
            alt="Patient experience hero"
            className="mx-auto mt-10 block w-full max-w-[760px]"
            loading="eager"
          />
        </div>
      </section>

      <section className="px-4 py-6 sm:px-6 md:py-9">
        <div className="mx-auto grid max-w-[1320px] grid-cols-1 gap-2.5 md:grid-cols-2 lg:grid-cols-3">
          {featureTiles.map(({ label, icon: Icon }) => (
            <Card
              key={label}
              className="rounded-none border border-[#c5dfe2] bg-[#e0ecef] shadow-none"
            >
              <CardContent className="flex h-[86px] items-center justify-center gap-3 px-5 py-5 text-center">
                <Icon className="h-[18px] w-[18px] text-[#405877]" strokeWidth={1.65} />
                <p className="text-[17px] leading-[1.2] font-medium text-[#0f2b4b] max-[820px]:text-[15px]">
                  {label}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="px-4 pb-2 pt-6 sm:px-6 md:pt-9">
        <div className="mx-auto max-w-[980px] rounded-[8px] bg-gradient-to-r from-[#c5dfe2] to-[#d4e6e8] px-6 py-10 text-center md:px-10">
        <h2 className="mx-auto max-w-[760px] text-[40px] leading-[1.18] font-semibold tracking-[-0.01em] text-[#2f3f57] max-[1200px]:text-[35px] max-[900px]:text-[30px] max-[560px]:text-[25px]">
  Deliver a seamless experience from booking to billing with practice management software
</h2>
<p className="mx-auto mt-6 max-w-[860px] text-[21px] leading-[1.45] text-[#4d5f78] max-[1200px]:text-[19px] max-[900px]:text-[16px] max-[560px]:text-[14px]">
  Delivering an exceptional patient experience involves managing multiple touchpoints—from the first inquiry through treatment and follow-up care.
</p>
         <p className="mx-auto mt-3 max-w-[860px] text-[21px] leading-[1.45] text-[#4d5f78] max-[1200px]:text-[19px] max-[900px]:text-[16px] max-[560px]:text-[14px]">
  Managing every step effectively can be overwhelming. But with our platform, these processes are taken care of for you—helping to ensure you <span className="font-semibold text-[#2f3f57]">attract</span>,
  <span className="font-semibold text-[#2f3f57]"> retain</span>, and
  <span className="font-semibold text-[#2f3f57]"> grow</span> your
  patient base.
</p>
        </div>
      </section>

      <section className="px-4 pb-14 pt-8 sm:px-6 md:pb-16 md:pt-10">
        <div className="mx-auto max-w-[1120px]">
         <h2 className="text-center text-[28px] leading-[1.2] font-semibold tracking-[-0.01em] text-[#032e5f] max-[900px]:text-[24px] max-[560px]:text-[22px]">
  Online appointment scheduling and booking
</h2>
<p className="mx-auto mt-4 max-w-[960px] text-center text-[16px] leading-[1.45] text-[#4b5f79] max-[560px]:text-[15px]">
  A smooth, simple booking experience is the first impression you want to make. That's exactly what online scheduling provides for patients: greater flexibility, control, and convenience.
</p>

          <div className="mx-auto mt-8 grid max-w-[1060px] grid-cols-1 gap-6 lg:grid-cols-[1fr_1fr] lg:items-start">
            <Card className="overflow-hidden rounded-[4px] border-0 bg-[#d4e6e8] shadow-none max-lg:order-2">
              <CardContent className="p-0">
                <img
                  src={frictionImage}
                  alt="Online booking interface"
                  className="h-full max-h-[445px] w-full object-cover"
                  loading="lazy"
                />
              </CardContent>
            </Card>

            <Card className="rounded-none border border-[#bfc7d0] bg-[#e9f2f4] shadow-none max-lg:order-1">
              <CardContent className="p-0">
                {bookingItems.map((item, index) => {
                  const isActive = index === activeBookingIndex;
                  return (
                    <button
                      key={item.title}
                      type="button"
                      onClick={() => setActiveBookingIndex(index)}
                      className={`w-full border-b border-[#bfc7d0] px-5 text-left last:border-b-0 ${
                        isActive
                          ? "bg-[#e7f1ef] shadow-[inset_3px_0_0_0_#00cda6]"
                          : "bg-transparent"
                      }`}
                    >
                      <p className="py-4 text-[19px] leading-[1.25] font-semibold text-[#072d5b] max-[560px]:text-[17px]">
                        {item.title}
                      </p>
                      {isActive && item.description ? (
                        <p className="pb-4 text-[14px] leading-[1.6] whitespace-pre-line text-[#4f647d] max-[560px]:text-[13px]">
                          {item.description}
                        </p>
                      ) : null}
                    </button>
                  );
                })}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="border-t border-[#eef0f2] bg-[#e9f2f4] px-4 py-8 sm:px-6 md:py-10">
        <div className="mx-auto grid max-w-[1120px] grid-cols-1 items-center gap-6 lg:grid-cols-[1fr_1.5fr]">
          <div className="relative hidden h-[170px] md:block">
            <div className="absolute left-0 top-[130px] h-3 w-3 rounded-full bg-[#555b6a]" />
            <svg
              viewBox="0 0 420 170"
              className="h-full w-full"
              aria-hidden="true"
            >
              <path
                d="M18 122 C100 35, 190 170, 270 88 C310 45, 360 50, 395 18"
                fill="none"
                stroke="#5b6070"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
            </svg>
            <img
              src="https://pabau.com/wp-content/uploads/2023/08/arrow-right.svg"
              alt=""
              className="absolute right-0 -top-1 z-10 h-10 w-10 rotate-[-18deg] opacity-90 md:h-12 md:w-12 lg:h-14 lg:w-14"
            />
          </div>

          <div className="text-center lg:text-left">
           <h2 className="text-[28px] leading-[1.2] font-semibold tracking-[-0.01em] text-[#032e5f] max-[900px]:text-[24px] max-[560px]:text-[22px]">
  Secure patient portal for communication and engagement
</h2>
<p className="mx-auto mt-3 max-w-[820px] text-[16px] leading-[1.45] text-[#4f647d] lg:mx-0 max-[560px]:text-[14px]">
  Through a secure, centralized hub, patients can view and manage their health information. Whether it's reviewing treatment history, accessing prescriptions, or checking lab results, everything is available with <span className="font-semibold text-[#15375e]">a simple click.</span>
</p>
          </div>
        </div>

        <div className="mx-auto mt-8 grid max-w-[1120px] grid-cols-1 gap-6 lg:grid-cols-[1fr_1fr] lg:items-start">
          <Card className="rounded-none border border-[#bfc7d0] bg-[#f5f5f6] shadow-none max-lg:order-2">
            <CardContent className="p-0">
              {portalItems.map((item, index) => {
                const isActive = index === activePortalIndex;
                return (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => setActivePortalIndex(index)}
                    className={`w-full border-b border-[#bfc7d0] px-5 text-left last:border-b-0 ${
                      isActive
                        ? "bg-[#dbe2ef] shadow-[inset_2px_0_0_0_#4f8dff]"
                        : "bg-transparent"
                    }`}
                  >
                    <p className="py-4 text-[14px] leading-[1.35] font-semibold text-[#072d5b] sm:text-[16px]">
                      {item.title}
                    </p>
                    {isActive && item.description ? (
                      <p className="pb-4 text-[12px] leading-[1.6] whitespace-pre-line text-[#4f647d] sm:text-[13px]">
                        {item.description}
                      </p>
                    ) : null}
                  </button>
                );
              })}
            </CardContent>
          </Card>

          <Card className="overflow-hidden rounded-[4px] border-0 bg-[#d4e6e8] shadow-none max-lg:order-1">
            <CardContent className="p-5">
              <img
                src={convenientAppointmentImage}
                alt="Convenient appointment management"
                className="mx-auto block h-auto w-full max-w-[300px]"
                loading="lazy"
              />
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="px-4 pb-14 pt-8 sm:px-6 md:pt-11">
        <div className="mx-auto max-w-[1120px]">
        <h2 className="text-center text-[28px] leading-[1.2] font-semibold tracking-[-0.01em] text-[#032e5f] max-[900px]:text-[24px] max-[560px]:text-[22px]">
  Customizable consent and intake forms
</h2>
<p className="mx-auto mt-3 max-w-[980px] text-center text-[16px] leading-[1.45] text-[#4b5f79] max-[560px]:text-[14px]">
  Replace paper-based systems with digital forms and elevate the patient experience. No more printing, no more waiting—patients can complete paperwork at their convenience.
</p>

          <div className="mx-auto mt-8 grid max-w-[940px] grid-cols-1 gap-6 lg:grid-cols-[1fr_1fr] lg:items-start">
            <Card className="overflow-hidden rounded-[4px] border-0 bg-[#d4e6e8] shadow-none">
              <CardContent className="p-5">
                <img
                  src={convenienceAndAccessibilityImage}
                  alt="Convenience and accessibility"
                  className="mx-auto block h-auto w-full max-w-[300px]"
                  loading="lazy"
                />
              </CardContent>
            </Card>

            <Card className="rounded-none border border-[#bfc7d0] bg-[#f5f5f6] shadow-none">
              <CardContent className="p-0">
                {consentItems.map((item, index) => {
                  const isActive = index === activeConsentIndex;
                  return (
                    <button
                      key={item.title}
                      type="button"
                      onClick={() => setActiveConsentIndex(index)}
                      className={`w-full border-b border-[#bfc7d0] px-5 text-left last:border-b-0 ${
                        isActive
                          ? "bg-[#f3ebf2] shadow-[inset_2px_0_0_0_#ff4fa0]"
                          : "bg-transparent"
                      }`}
                    >
                      <p className="py-4 text-[14px] leading-[1.35] font-semibold text-[#072d5b] sm:text-[16px]">
                        {item.title}
                      </p>
                      {isActive && item.description ? (
                        <p className="pb-4 text-[12px] leading-[1.6] whitespace-pre-line text-[#4f647d] sm:text-[13px]">
                          {item.description}
                        </p>
                      ) : null}
                    </button>
                  );
                })}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="px-4 pb-14 pt-1 sm:px-6 md:pt-5">
        <div className="mx-auto max-w-[1120px]">
         <h2 className="text-center text-[28px] leading-[1.2] font-semibold tracking-[-0.01em] text-[#032e5f] max-[900px]:text-[24px] max-[560px]:text-[22px]">
  Automated pre- and post-care communications
</h2>
<p className="mx-auto mt-3 max-w-[980px] text-center text-[16px] leading-[1.45] text-[#4b5f79] max-[560px]:text-[14px]">
  Relying on printed materials or verbal instructions for pre- and post-care guidance? Enhance the patient experience with automated communications that deliver the right information at the right time.
</p>

          <div className="mx-auto mt-8 grid max-w-[1020px] grid-cols-1 gap-6 lg:grid-cols-[1fr_1fr] lg:items-start">
            <Card className="overflow-hidden rounded-[4px] border-0 bg-[#d4e6e8] shadow-none">
              <CardContent className="p-5">
                <img
                  src={improvedPreparednessImage}
                  alt="Improved preparedness and compliance"
                  className="mx-auto block h-auto w-full max-w-[768px]"
                  loading="lazy"
                />
              </CardContent>
            </Card>

            <Card className="rounded-none border border-[#bfc7d0] bg-[#f5f5f6] shadow-none">
              <CardContent className="p-0">
                {precareItems.map((item, index) => {
                  const isActive = index === activePrecareIndex;
                  return (
                    <button
                      key={item.title}
                      type="button"
                      onClick={() => setActivePrecareIndex(index)}
                      className={`w-full border-b border-[#bfc7d0] px-5 text-left last:border-b-0 ${
                        isActive
                          ? "bg-[#e4efee] shadow-[inset_2px_0_0_0_#00b69d]"
                          : "bg-transparent"
                      }`}
                    >
                      <p className="py-4 text-[14px] leading-[1.35] font-semibold text-[#072d5b] sm:text-[16px]">
                        {item.title}
                      </p>
                      {isActive && item.description ? (
                        <p className="pb-4 text-[12px] leading-[1.6] whitespace-pre-line text-[#4f647d] sm:text-[13px]">
                          {item.description}
                        </p>
                      ) : null}
                    </button>
                  );
                })}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="px-4 pb-14 pt-1 sm:px-6 md:pt-5">
        <div className="mx-auto max-w-[1120px]">
         <h2 className="text-center text-[38px] leading-[1.15] font-semibold tracking-[-0.01em] text-[#032e5f] max-[900px]:text-[30px] max-[560px]:text-[24px]">
  Electronic health records
</h2>
<p className="mx-auto mt-3 max-w-[900px] text-center text-[16px] leading-[1.45] text-[#4b5f79] max-[560px]:text-[14px]">
  Digitizing patient records benefits more than just clinical teams. With health information securely accessible from anywhere, patients can expect consistent, high-quality care across every visit.
</p>

          <div className="mx-auto mt-6 grid max-w-[820px] grid-cols-1 gap-2 md:grid-cols-2">
            <Card className="border-0 bg-[#dde4f3] shadow-none">
              <CardContent className="px-5 pb-4 pt-3 text-center">
               <h3 className="text-[15px] leading-[1.35] font-semibold text-[#032e5f]">
  Better care coordination, wherever you practice
</h3>
<p className="mx-auto mt-3 max-w-[300px] text-[12px] leading-[1.55] text-[#304f72]">
  With electronic health records, providers can easily access treatment history, medical records, and clinical images from anywhere—whether at your main practice, a satellite location, or wherever patients receive care.
</p>
                <p className="mx-auto mt-2 max-w-[300px] text-[12px] leading-[1.55] text-[#304f72]">
  This significantly improves care coordination and continuity for patients.
</p>
                <img
                  src={betterCoordinationImage}
                  alt="Better coordination of care"
                  className="mx-auto mt-2 block h-auto w-full max-w-[310px]"
                  loading="lazy"
                />
              </CardContent>
            </Card>

            <Card className="border-0 bg-[#dde4f3] shadow-none">
              <CardContent className="px-5 pb-4 pt-3 text-center">
               <h3 className="text-[15px] leading-[1.35] font-semibold text-[#032e5f]">
  Deliver a consistent, high-quality patient experience
</h3>
<p className="mx-auto mt-3 max-w-[300px] text-[12px] leading-[1.55] text-[#304f72]">
  Creating a consistent experience is challenging, especially if you have multiple locations or providers across your practice.
</p>
<p className="mx-auto mt-2 max-w-[300px] text-[12px] leading-[1.55] text-[#304f72]">
  But with electronic health records, no matter where or with whom patients book, every provider has all the details they need at their fingertips.
</p>
                <img
                  src={highQualityImage}
                  alt="High-quality patient experience"
                  className="mx-auto mt-2 block h-auto w-full max-w-[230px]"
                  loading="lazy"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 pt-3 sm:px-6 md:pt-7 bg-[#f5f5f6]">
        <div className="mx-auto max-w-[1120px]">
        <h2 className="text-[40px] leading-[1.15] font-semibold tracking-[-0.01em] text-[#032e5f] max-[900px]:text-[30px] max-[560px]:text-[24px]">
  Features that elevate the patient experience
</h2>

          <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-2">
            {patientExperienceCards.map((feature) => (
              <Card
                key={feature.title}
                className={`border-0 shadow-none bg-[#e0ecef]`}
              >
                <CardContent className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-[1.1fr_1fr] sm:items-start">
                  <div>
                    <h3 className="text-[17px] leading-[1.25] font-semibold text-[#032e5f]">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-[13px] leading-[1.5] text-[#304f72]">
                      {feature.copy}
                    </p>
                    {feature.extra ? (
                      <p className="mt-3 text-[13px] leading-[1.5] text-[#304f72]">
                        {feature.extra}
                      </p>
                    ) : null}
                  </div>
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="mx-auto block h-auto w-full max-w-[300px]"
                    loading="lazy"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#eceef2] bg-[#e0ecef] px-4 py-10 sm:px-6">
        <div className="mx-auto max-w-[1120px] text-center">
          <h2 className="mx-auto max-w-[380px] text-[42px] leading-[1.2] font-semibold text-[#2f3f57] max-[560px]:text-[34px]">
  Trusted by over 3,500 healthcare practices worldwide
</h2>

          <div className="mt-5 flex items-center justify-center gap-2">
            <img src={npsBadgeImage} alt="NPS Badge" className="h-[64px] w-auto" loading="lazy" />
            <img src={leaderBadgeImage} alt="Leader Badge" className="h-[64px] w-auto" loading="lazy" />
            <img src={bestResultsBadgeImage} alt="Best Results Badge" className="h-[64px] w-auto" loading="lazy" />
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 border-t border-[#e0e2e7] pt-4">
            {brandLogos.map((logo) => (
              <img
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                className={`h-auto w-full ${logo.cls}`}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e0ecef] px-4 pb-10 pt-5 sm:px-6">
        <div className="mx-auto max-w-[1120px]">
          <h2 className="text-center text-[46px] leading-[1.18] font-semibold text-[#2f3f57] max-[560px]:text-[36px]">
            What Our Customers Say
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-[2fr_1fr]">
            <div className="space-y-2">
              <Card className="relative border border-[#cfd6df] bg-[#f8fbff] shadow-none">
                <CardContent className="px-5 pb-8 pt-5 text-center sm:px-7">
                  <img
                    src={reviewCards[0].logo}
                    alt={reviewCards[0].author}
                    className="mx-auto h-[52px] w-[52px] rounded-full object-cover"
                    loading="lazy"
                  />
                  <p className="mt-3 text-[13px] leading-[1.6] text-[#4f647d] italic whitespace-pre-line sm:text-[14px]">
                    &ldquo;{reviewCards[0].quote}&rdquo;
                  </p>
                  <p className="mt-3 text-[18px] font-semibold text-[#122c4c] sm:text-[24px]">
                    {reviewCards[0].author}
                  </p>
                  <p className="mt-1 text-[11px] text-[#97a6bb] sm:text-[13px]">{reviewCards[0].role}</p>
                  <p className="absolute bottom-2 right-4 text-[28px] leading-none font-bold text-[#09757a]">&rdquo;</p>
                </CardContent>
              </Card>

              <Card className="relative border-0 bg-white shadow-none">
                <CardContent className="px-5 pb-5 pt-4 text-center sm:px-6">
                  <img
                    src={reviewCards[2].logo}
                    alt="G2"
                    className="mx-auto h-[36px] w-auto"
                    loading="lazy"
                  />
                  <p className="mt-3 text-[12px] leading-[1.65] text-[#4f647d] italic sm:text-[14px]">
                    &ldquo;{reviewCards[2].quote}&rdquo;
                  </p>
                  <p className="mt-2 text-[13px] font-semibold text-[#122c4c] sm:text-[17px]">{reviewCards[2].author}</p>
                  <div className="absolute right-0 top-0">
                    <div className="inline-flex h-7 w-7 items-center justify-center bg-[#10b9d2] text-white">
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              {[reviewCards[1], reviewCards[3]].map((card) => (
                <Card key={card.author} className="relative border-0 bg-white shadow-none">
                  <CardContent className="px-5 pb-5 pt-4 text-center sm:px-6">
                    <img
                      src={card.logo}
                      alt={card.author}
                      className="mx-auto h-[36px] w-auto"
                      loading="lazy"
                    />
                    <p className="mt-3 text-[12px] leading-[1.65] text-[#4f647d] sm:text-[14px]">
                      {card.quote}
                    </p>
                    <p className="mt-3 text-[13px] font-semibold text-[#122c4c] sm:text-[17px]">{card.author}</p>
                    <div className="absolute right-0 top-0">
                      <div className="inline-flex h-7 w-7 items-center justify-center bg-[#10b9d2] text-white">
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#e9f2f4] px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-[960px]">
          <h2 className="text-center text-[44px] leading-[1.2] font-semibold text-[#032e5f] max-[560px]:text-[34px]">
            FREQUENTLY ASKED QUESTIONS
          </h2>
        <p className="mt-4 text-center text-[16px] text-[#4f647d] max-[560px]:text-[14px]">
  Everything you need to know about our patient experience platform
</p>

          <div className="mt-8">
            {faqs.map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={item.q} className="border-b border-[#c8ced8]">
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                    className="flex w-full items-center justify-between py-4 text-left"
                  >
                    <span className="pr-4 text-[16px] font-semibold text-[#032e5f] sm:text-[18px]">{item.q}</span>
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-[#7f8ca0] text-[#52647f]">
                      {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </span>
                  </button>
                  {isOpen ? (
                    <p className="pb-5 pr-4 text-[14px] leading-[1.6] text-[#4f647d] sm:text-[16px]">
                      {item.a}
                    </p>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#3f4251] px-4 py-12 sm:px-6 sm:py-14">
        <img
          src={arrow2Image}
          alt=""
          className="pointer-events-none absolute -left-6 -bottom-2 hidden w-[560px] opacity-95 md:block lg:-left-10 lg:w-[720px] xl:-left-14 xl:w-[860px]"
        />
        <div className="mx-auto max-w-[1120px] text-center">
         <h2 className="mx-auto max-w-[520px] text-[52px] leading-[1.16] font-medium text-white max-[900px]:text-[40px] max-[560px]:text-[28px]">
  Ready to see how our platform can help your practice grow?
</h2>
          <Button className="mt-6 h-11 rounded-[2px] bg-[#09757a] px-8 text-[14px] font-semibold text-white hover:bg-[#065d61]">
            Book a demo
          </Button>
        </div>
      </section>
      </main>

    </>
  );
}
