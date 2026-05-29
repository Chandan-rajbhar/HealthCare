import { ClipboardPlus, CalendarClock, BadgeDollarSign, Layers, Video, Boxes, BarChart3 } from "lucide-react";


import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ReportsSection from "@/components/ReportsSection";
 "@/pages/FooterPage/footerpage";

const digitalClientRecordsImage =
  "https://pabau.com/wp-content/uploads/2024/07/digitalclientrecords-1-541x1024.webp";
const pointOfSaleImage =
  "https://pabau.com/wp-content/uploads/2024/07/pointofsalessystem-1536x570.webp";
const appointmentRemindersImage =
  "https://pabau.com/wp-content/uploads/2024/07/appointmentreminders-1536x707.webp";
const videoConsultationsImage =
  "https://pabau.com/wp-content/uploads/2022/11/videoconsultations-1-1536x464.png";
const completeStockManagementImage =
  "https://pabau.com/wp-content/uploads/2022/11/completestockmanagement-1536x464.png";

const featureTiles = [
  { label: "Patient Medical Records", Icon: ClipboardPlus },
  { label: "Prescription Management", Icon: CalendarClock },
  { label: "Billing & Insurance", Icon: BadgeDollarSign },
  { label: "Lab Integration", Icon: Layers },
  { label: "Telemedicine", Icon: Video },
  { label: "Medication Management", Icon: Boxes },
  { label: "Clinical Reports", Icon: BarChart3 },
];

const recordsPoints = [
  {
    title: "Complete Digital Medical Records",
    body: "Replace paper with secure, comprehensive digital patient records. Access complete medical history, lab results, imaging reports, and clinical notes instantly. Every patient encounter is documented and easily retrievable for continuity of care.",
  },
  {
    title: "Clinical Decision Support",
    body: "Get real-time alerts for drug interactions, allergies, and potential clinical conflicts. Our system flags important health conditions and provides evidence-based recommendations to support clinical decision-making at the point of care.",
  },
  {
    title: "HIPAA-Compliant Data Storage",
    body: "All patient data is encrypted and stored securely with full HIPAA compliance. Multi-factor authentication, audit logs, and role-based access controls ensure patient privacy is protected at all times.",
  },
  {
    title: "Clinical Information Sharing",
    body: "Securely share clinical summaries with specialists and referring physicians. Generate clinical letters automatically, send lab referrals electronically, and coordinate care seamlessly across your healthcare network.",
  },
];

const appointmentPoints = [
  {
    title: "Automated Appointment Scheduling",
    body: "Reduce no-shows with automated patient reminders via SMS, email, or push notifications. Let patients self-schedule through your patient portal within available appointment slots, reducing administrative burden.",
  },
  {
    title: "Provider Schedule Management",
    body: "Optimize provider schedules with intelligent scheduling that considers appointment types, provider availability, and patient preferences. Reduce wait times and improve clinic efficiency.",
  },
  {
    title: "Waitlist Management",
    body: "Automatically manage cancellations and no-shows by maintaining a dynamic waitlist. Quickly fill open slots and ensure your provider schedule is optimized for maximum efficiency.",
  },
  {
    title: "Pre-visit Patient Preparation",
    body: "Send pre-appointment instructions, pre-visit questionnaires, and required documentation directly to patients. Ensure they arrive prepared with all necessary information completed.",
  },
];

const pointOfSalePoints = [
  {
    title: "Integrated Billing & Claims Management",
    body: "Generate accurate bills and insurance claims directly from patient visits. Automate eligibility verification, reduce claim denials, and get paid faster with integrated payment processing.",
  },
  {
    title: "Multiple Payment Methods",
    body: "Accept insurance, cash, credit cards, and electronic check payments. Integrated payment gateway with PCI compliance ensures secure transactions and multiple payment options for patient convenience.",
  },
  {
    title: "Patient Invoicing & Payment Tracking",
    body: "Generate itemized invoices with procedure codes, medications, and supplies. Track payments, manage patient accounts, and send automated payment reminders for outstanding balances.",
  },
  {
    title: "Financial Reporting & Analytics",
    body: "Get real-time visibility into revenue by procedure, provider, insurance plan, and patient. Generate financial reports for accounting, identify revenue trends, and optimize your billing operations.",
  },
];

function PointList({ items }: { items: { title: string; body: string }[] }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-x-7 sm:gap-y-6">
      {items.map((item) => (
        <div key={item.title}>
          <div className="mb-2 h-[2px] w-[24px] bg-[#f7fbff]" />
          <h3 className="text-[15px] leading-[1.3] font-semibold text-white">{item.title}</h3>
          <p className="mt-1.5 text-[11px] leading-[1.45] text-[#d8f4fb]">{item.body}</p>
        </div>
      ))}
    </div>
  );
}

function MultipleIntegrationsSection() {
  return (
    <section className="w-full px-4 py-10 bg-white">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex items-center mb-2">
          <img src="https://pabau.com/wp-content/uploads/2024/04/integrations-icon.png" alt="Integrations Icon" className="h-8 w-8 mr-2" />
          <div>
            <h2 className="text-[28px] font-semibold text-[#222] leading-tight">Multiple Integrations</h2>
            <p className="text-[15px] text-[#6f7b89] mt-1">Multi-software management made easy.</p>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="shadow-none border border-[#e5e7eb] p-0">
            <CardContent className="p-0">
              <div className="bg-[#e3e0fa] flex items-center justify-center h-[60px] rounded-t-md">
                <img src="https://pabau.com/wp-content/uploads/2024/04/stripe-logo-300x143.webp" alt="Stripe" className="h-[32px] object-contain" />
              </div>
              <div className="p-4 bg-white rounded-b-md">
  <h3 className="text-[16px] font-semibold text-[#101828]">Stripe</h3>
  <p className="text-[13px] text-[#6f7b89] mt-1 mb-4">Streamline payment processing and accelerate revenue growth with seamless Stripe integration.</p>
  <Button variant="outline" className="h-7 rounded-full border-[#09757a] px-4 text-[11px] text-[#09757a] hover:bg-white">Learn more</Button>
</div>
            </CardContent>
          </Card>
          <Card className="shadow-none border border-[#e5e7eb] p-0">
            <CardContent className="p-0">
              <div className="bg-[#b6f2fa] flex items-center justify-center h-[60px] rounded-t-md">
                <img src="https://pabau.com/wp-content/uploads/2024/04/Xero_software_logo-2.webp" alt="Xero" className="h-[32px] object-contain" />
              </div>
             <div className="p-4 bg-white rounded-b-md">
  <h3 className="text-[16px] font-semibold text-[#101828]">Xero</h3>
  <p className="text-[13px] text-[#6f7b89] mt-1 mb-4">Simplify accounting and streamline financial management with seamless Xero integration.</p>
  <Button variant="outline" className="h-7 rounded-full border-[#09757a] px-4 text-[11px] text-[#09757a] hover:bg-white">Learn more</Button>
</div>
            </CardContent>
          </Card>
          <Card className="shadow-none border border-[#e5e7eb] p-0">
            <CardContent className="p-0">
              <div className="bg-[#fbefff] flex items-center justify-center h-[60px] rounded-t-md">
                <img src="https://pabau.com/wp-content/uploads/2024/04/healthcode-logo-300x62.webp" alt="Healthcode" className="h-[32px] object-contain" />
              </div>
             <div className="p-4 bg-white rounded-b-md">
  <h3 className="text-[16px] font-semibold text-[#101828]">Healthcode</h3>
  <p className="text-[13px] text-[#6f7b89] mt-1 mb-4">Connect insurance payments processed through our platform to Healthcode for seamless payment reconciliation.</p>
  <Button variant="outline" className="h-7 rounded-full border-[#09757a] px-4 text-[11px] text-[#09757a] hover:bg-white">Learn more</Button>
</div>
            </CardContent>
          </Card>
        </div>
        <div className="mt-8 bg-[#09757a] text-white p-5 rounded-xl flex flex-col md:flex-row items-center justify-between">
          <p className="text-[15px] font-medium text-center md:text-left mb-3 md:mb-0">We offer multiple integrations, including Stripe, Xero, Healthcode, CloudRx, and lots more, so you can do everything you need, all from one system.</p>
          <Button variant="outline" className="h-7 rounded bg-white px-4 text-[11px] text-[#09757a] border-none hover:bg-[#A7CDCF]">Read more</Button>
        </div>
      </div>
    </section>
  );
}

export default function TeamOperationsPage() {
  return (
    <>
      <main className="bg-[#09757a] text-white">
        <section className="px-4 pb-7 pt-7 sm:px-6 md:pb-9 md:pt-8">
          <div className="mx-auto max-w-[1020px] text-center">
            <p className="text-[12px] tracking-[0.08em] uppercase text-[#A7CDCF]">HEALTHCARE MANAGEMENT</p>
            <h1 className="mx-auto mt-2 max-w-[620px] text-[48px] leading-[1.04] font-semibold max-[900px]:text-[38px] max-[600px]:text-[30px]">
              Streamlined Operations. Better Patient Care.
            </h1>
            <p className="mx-auto mt-3 max-w-[700px] text-[21px] leading-[1.38] text-[#A7CDCF] max-[900px]:text-[17px] max-[600px]:text-[14px]">
              Transform your healthcare facility with comprehensive EHR solutions. Eliminate operational bottlenecks, improve clinical workflows, and deliver exceptional patient care with our integrated healthcare management platform.
            </p>

            <Button className="mt-6 h-10 rounded-[2px] border border-[#A7CDCF] bg-transparent px-6 text-[12px] font-semibold text-white hover:bg-[#A7CDCF] hover:text-[#09757a]">
              Take product tour
            </Button>

            <div className="mx-auto mt-7 grid max-w-[980px] grid-cols-2 gap-2.5 md:grid-cols-4 lg:grid-cols-7">
              {featureTiles.map(({ label, Icon }) => (
                <Card key={label} className="border-0 bg-[#A7CDCF] shadow-none">
                  <CardContent className="flex h-[76px] flex-col items-center justify-center gap-1.5 p-2 text-center">
                    <Icon className="h-4 w-4 text-[#09757a]" strokeWidth={1.8} />
                    <p className="text-[10px] leading-[1.15] font-medium text-[#09757a]">{label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#A7CDCF] px-4 py-8 sm:px-6 md:py-10">
          <div className="mx-auto max-w-[980px]">
            <div className="max-w-[740px]">
              <ClipboardPlus className="h-5 w-5 text-[#09757a]" strokeWidth={1.8} />
              <h2 className="mt-2 text-[38px] leading-[1.08] font-medium text-[#09757a] max-[700px]:text-[32px] max-[520px]:text-[24px]">
                Digital Medical Records
              </h2>
              <p className="mt-2 text-[23px] leading-[1.34] text-[#065d61] max-[900px]:text-[19px] max-[600px]:text-[14px]">
                Secure, comprehensive electronic health records (EHR) that maintain the complete medical history of every patient. Access clinical data instantly and improve clinical decision-making at the point of care.
              </p>
            </div>

            <Button variant="outline" className="mt-4 h-7 rounded-full border-[#09757a] px-4 text-[8px] text-[#09757a] hover:bg-white">
              BACK TO TOP
            </Button>

            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1fr] lg:gap-8">
              <img
                src={digitalClientRecordsImage}
                alt="Digital Medical records"
                className="mx-auto w-full max-w-[390px]"
                loading="lazy"
              />

              <div>
                {recordsPoints.map((point) => (
                  <div key={point.title} className="mb-6">
                    <div className="mb-2 h-[2px] w-[24px] bg-[#09757a]" />
                    <h3 className="text-[15px] leading-[1.3] font-semibold text-[#09757a]">{point.title}</h3>
                    <p className="mt-1.5 text-[11px] leading-[1.45] text-[#065d61]">{point.body}</p>
                  </div>
                ))}

                <Card className="rounded-[10px] border-0 bg-[#09757a] shadow-none">
                  <CardContent className="p-4">
                    <p className="text-[30px] leading-[1.12] font-semibold text-white max-[700px]:text-[24px] max-[520px]:text-[20px]">
                      Secure, Compliant, and Always Accessible
                    </p>
                   <Button className="mt-3 h-8 w-full rounded-[2px] bg-[#A7CDCF] text-[9px] text-[#09757a] hover:bg-white">
  Start free trial
</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-8 sm:px-6 md:py-10 bg-[#09757a] text-white">
          <div className="mx-auto max-w-[980px]">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1fr] lg:items-start">
              <div>
                <CalendarClock className="h-5 w-5 text-[#A7CDCF]" strokeWidth={1.8} />
                <h2 className="mt-2 text-[38px] leading-[1.08] font-medium max-[700px]:text-[32px] max-[520px]:text-[24px]">
                  Smart Appointment Management
                </h2>
                <p className="mt-2 text-[23px] leading-[1.34] text-[#A7CDCF] max-[900px]:text-[19px] max-[600px]:text-[14px]">
                  Reduce no-shows and optimize provider schedules with automated reminders, waitlist management, and intuitive patient scheduling.
                </p>

                <Button variant="outline" className="mt-4 h-7 rounded-full border-[#A7CDCF] bg-transparent px-4 text-[8px] text-[#A7CDCF] hover:bg-[#A7CDCF] hover:text-[#09757a]">
                  BACK TO TOP
                </Button>
              </div>

              <img
                src={appointmentRemindersImage}
                alt="Appointment reminders"
                className="w-full rounded-[2px]"
                loading="lazy"
              />
            </div>

            <div className="mt-6">
              <PointList items={appointmentPoints} />
            </div>

            <Card className="mt-6 rounded-[14px] border-0 bg-[#A7CDCF] shadow-none">
              <CardContent className="flex flex-col items-start justify-between gap-3 p-5 sm:flex-row sm:items-center">
                <p className="text-[33px] leading-[1.1] font-semibold text-[#09757a] max-[700px]:text-[28px] max-[520px]:text-[22px]">
                  Reduce No-Shows and Optimize Your Schedule
                </p>
                <Button className="h-9 rounded-[2px] bg-[#09757a] px-5 text-[11px] text-white hover:bg-[#065d61]">
                  Explore platform
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="px-4 pb-10 pt-1 sm:px-6 md:pb-12 md:pt-3 bg-[#A7CDCF]">
          <div className="mx-auto max-w-[980px]">
            <div>
              <BadgeDollarSign className="h-5 w-5 text-[#09757a]" strokeWidth={1.8} />
              <h2 className="mt-2 text-[38px] leading-[1.08] font-medium text-[#09757a] max-[700px]:text-[32px] max-[520px]:text-[24px]">
                Integrated Billing & Revenue Cycle Management
              </h2>
              <p className="mt-2 max-w-[940px] text-[22px] leading-[1.34] text-[#065d61] max-[900px]:text-[19px] max-[600px]:text-[14px]">
                Streamline billing operations with automated claims processing, insurance verification, and secure payment collection. Reduce denials and get paid faster.
              </p>
            </div>

            <img
              src={pointOfSaleImage}
              alt="Billing and Revenue Management"
              className="mt-6 w-full rounded-[2px]"
              loading="lazy"
            />

            <Button variant="outline" className="mt-4 h-7 rounded-full border-[#09757a] bg-white px-4 text-[8px] text-[#09757a] hover:bg-white">
              BACK TO TOP
            </Button>

            <div className="mt-6">
              <PointList items={pointOfSalePoints} />
            </div>

            <Card className="mt-6 rounded-[14px] border-0 bg-[#09757a] shadow-none">
              <CardContent className="flex flex-col items-start justify-between gap-3 p-5 sm:flex-row sm:items-center">
                <p className="text-[33px] leading-[1.1] font-semibold text-white max-[700px]:text-[28px] max-[520px]:text-[22px]">
                  Maximize Revenue and Minimize Billing Errors
                </p>
                <Button className="h-9 rounded-[2px] bg-[#A7CDCF] px-5 text-[11px] text-[#09757a] hover:bg-white">
                   Start free trial
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
        <MultipleIntegrationsSection />
        <section className="px-4 py-8 sm:px-6 md:py-10 bg-white">
          <div className="mx-auto max-w-[980px]">
            <div className="flex items-center mb-2">
              <Video className="h-6 w-6 text-[#09757a] mr-2" strokeWidth={1.8} />
              <h2 className="text-[32px] font-semibold text-[#101828]">Video Conferencing</h2>
            </div>
           <p className="text-[16px] text-[#6f7b89] mb-6">
  Patient care extends beyond the treatment room. Streamline your practice operations with telehealth consultations, pre-treatment preparation, and personalized aftercare—all from one platform.
</p>
           
            <img
              src={videoConsultationsImage}
              alt="Video Conferencing"
              className="w-full rounded-[6px] mb-6"
              loading="lazy"
            />
             <Button variant="outline" className="mb-6 h-7 rounded-full border-[#bcc6d0] px-4 text-[10px] text-[#64748b] hover:bg-white">
              BACK TO TOP
            </Button>
            <div className="flex flex-col gap-6 md:flex-row md:gap-8">
              <div className="flex-1">
  <h3 className="text-[16px] font-semibold text-[#101828] mb-1 border-t-2 border-[#09757a] pt-2">Simple setup for high-definition video calls</h3>
  <p className="text-[13px] text-[#6f7b89]">Our streamlined telehealth setup means you spend more time connecting with patients and less time managing technology. Scheduling is simple, and joining calls is hassle-free.</p>
</div>
             <div className="flex-1">
  <h3 className="text-[16px] font-semibold text-[#101828] mb-1 border-t-2 border-[#09757a] pt-2">Secure, private video consultations</h3>
  <p className="text-[13px] text-[#6f7b89]">Prioritize patient confidentiality with encrypted video calls, secure data storage, and completely private conversations. All patient information remains safely protected.</p>
</div>
            </div>
            <div className="flex flex-col gap-6 md:flex-row md:gap-8 mt-6">
              <div className="flex-1">
                <h3 className="text-[16px] font-semibold text-[#101828] mb-1 border-t-2 border-[#09757a] pt-2">Manage client admin during your call</h3>
                <p className="text-[13px] text-[#6f7b89]">Want to multitask during your conversations to save time later? No problem. With Telehealth you can pull up client information, raise invoices and share information all in a single window.</p>
              </div>
            <div className="flex-1">
  <h3 className="text-[16px] font-semibold text-[#101828] mb-1 border-t-2 border-[#09757a] pt-2">Host team meetings and professional consultations</h3>
  <p className="text-[13px] text-[#6f7b89]">Need to connect with your team or collaborate with colleagues? Use our video conferencing feature to host meetings with up to 25 participants.</p>
</div>
            </div>
          </div>
        </section>
        <section className="px-4 py-8 sm:px-6 md:py-10 bg-white">
          <div className="mx-auto max-w-[980px]">
            <div className="flex items-center mb-2">
              <Boxes className="h-6 w-6 text-[#09757a] mr-2" strokeWidth={1.8} />
              <h2 className="text-[32px] font-semibold text-[#101828]">Complete Stock Management</h2>
            </div>
            <p className="text-[16px] text-[#6f7b89] mb-6">
  Managing inventory is the last thing you want to do after a busy day of patient care. Good thing you don't have to. Our platform streamlines inventory management so you always know exactly where things stand.
</p>
            <img
              src={completeStockManagementImage}
              alt="Complete Stock Management"
              className="w-full rounded-[6px] mb-6"
              loading="lazy"
            />
             <Button variant="outline" className="mb-6 h-7 rounded-full border-[#bcc6d0] px-4 text-[10px] text-[#64748b] hover:bg-white ">
              BACK TO TOP
            </Button>
            <div className="flex flex-col gap-6 md:flex-row md:gap-8">
              <div className="flex-1">
                <h3 className="text-[16px] font-semibold text-[#101828] mb-1 border-t-2 border-[#09757a] pt-2">Simplify all your inventory management</h3>
                <p className="text-[13px] text-[#6f7b89]">Segment your products into three, easy-to-manage categories — retail, consumables and injectables — and keep track of all stock. One click tells you exactly what you have (and what you need).</p>
              </div>
             <div className="flex-1">
  <h3 className="text-[16px] font-semibold text-[#101828] mb-1 border-t-2 border-[#09757a] pt-2">Maintain optimal inventory levels</h3>
  <p className="text-[13px] text-[#6f7b89]">Store key supplier information directly in our platform so you can generate purchase orders as soon as inventory runs low. Assign suppliers to specific products and track order statuses—all within a single system.</p>
</div>
            </div>
            <div className="flex flex-col gap-6 md:flex-row md:gap-8 mt-6">
              <div className="flex-1">
                <h3 className="text-[16px] font-semibold text-[#101828] mb-1 border-t-2 border-[#09757a] pt-2">Automate stock updates and deductions</h3>
                <p className="text-[13px] text-[#6f7b89]">Use your purchase orders to automatically update stock levels and link products to your services to automate stock deductions when you administer specific treatments.</p>
              </div>
              <div className="flex-1">
                <h3 className="text-[16px] font-semibold text-[#101828] mb-1 border-t-2 border-[#09757a] pt-2">Minimise your efforts and increase your profits</h3>
                <p className="text-[13px] text-[#6f7b89]">When you reduce your manual work and get full oversight of all your stock levels, you’ll have more time and knowledge to promote your products and increase your retail sales.</p>
              </div>
            </div>
           
          </div>
        </section>
      </main>
      <ReportsSection />

    </>
  );
}

