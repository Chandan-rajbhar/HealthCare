import { useState } from "react";
import {
  ChevronDown,
  Calendar,
  Info,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";


const CODES = [
  {
    title: "Pain in Right Hand",
    code: "M79.641",
    type: "ICD-10-CM",
    author: "Katy Piper",
    date: "April 23, 2026",
    desc: "Right hand pain is one of the most frequently miscoded musculoskeletal complaint...",
  },
  {
    title: "Spondylolisthesis, Lumbar Region",
    code: "M43.16",
    type: "ICD-10-CM",
    author: "Katy Piper",
    date: "April 23, 2026",
    desc: "Lumbar spondylolisthesis is among the most frequently under-documented spinal co...",
  },
  {
    title: "Spinal Enthesopathy, Lumbar Region",
    code: "M46.06",
    type: "ICD-10-CM",
    author: "Katy Piper",
    date: "April 23, 2026",
    desc: "Spinal enthesopathy denials rarely happen because the condition is miscoded enti...",
  },
  {
    title: "Other Tear of Medial Meniscus",
    code: "S83.241",
    type: "ICD-10-CM",
    author: "Katy Piper",
    date: "April 23, 2026",
    desc: "Orthopedic and sports medicine coders submit medial meniscus tear claims daily...",
  },
  {
    title: "Unspecified Protein",
    code: "E46",
    type: "ICD-10-CM",
    author: "Katy Piper",
    date: "April 23, 2026",
    desc: "ICD-10 Code E46: Definition and Clinical Description Malnutrition denials are mo...",
  },
  {
    title: "Observation for Suspected Diseases Ruled Out",
    code: "Z03.89",
    type: "ICD-10-CM",
    author: "Katy Piper",
    date: "April 23, 2026",
    desc: "Claim denials tied to observation encounters often trace back to one preventable...",
  },
];

const FAQS = [
  {
    q: "What are diagnostic codes used for in healthcare?",
    a: "Diagnostic codes are used to categorize and track every diagnosis, symptom, and cause of death. They are essential for medical billing, clinical research, and ensuring that health systems can communicate patient data accurately across different providers.",
  },
  {
    q: "What is the difference between ICD-10 and ICD-10-CM?",
    a: "ICD-10 is the international standard maintained by the WHO. ICD-10-CM is the 'Clinical Modification' used specifically in the United States for clinical settings and billing, providing much higher detail for morbidity.",
  },
  {
    q: "How does ICD-11 differ from earlier versions?",
    a: "ICD-11 is completely digital-fit, supports multiple parent relationships for a single code, and includes significant updates to mental health, traditional medicine, and antimicrobial resistance classifications.",
  },
  {
    q: "What is SNOMED CT and how is it different from ICD coding?",
    a: "SNOMED CT is a clinical terminology used for detailed point-of-care documentation (e.g., specific anatomy and procedures), whereas ICD is a classification system used for high-level reporting and billing.",
  },
  {
    q: "When should clinicians use SNOMED CT instead of ICD codes?",
    a: "Clinicians use SNOMED CT during the actual encounter to record clinical findings with high granularity. This data is then typically mapped to an ICD code by administrative or billing software for insurance claims.",
  },
];

export default function DiagnosticCodesPage() {
  
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-[#FFFFFF] text-[#1E293B] font-sans">
      {/* HEADER SECTION */}
      <header className="py-16 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl fpnt-sans mb-4 text-[#0F172A]">
          Diagnostic Codes
        </h1>
        <p className="text-[#64748B] text-lg leading-relaxed mb-8">
          Professional resources covering CCSD, CPT, HCPCS, and clinical coding
          insights to help healthcare providers code accurately, improve billing
          workflows, and stay compliant.
        </p>
      </header>

      {/* GRID SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex justify-between items-center mb-10 border-b border-slate-100 pb-6">
          <h2 className="text-2xl fpnt-sans text-[#334155]">
            Diagnostic Codes Guide: ICD-10, ICD-11 & SNOMED CT Reference
          </h2>
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-sm text-[#64748B] hover:bg-slate-50">
            Filter <ChevronDown className="w-4 h-4" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {CODES.map((item, idx) => (
            <div key={idx} className="group cursor-pointer">
              {/* Card Header (Image-like) */}
              <div className="h-48 bg-gradient-to-br from-[#F1F5F9] to-[#E2E8F0] rounded-t-2xl relative flex flex-col items-center justify-center p-6 text-center overflow-hidden border border-b-0 border-slate-100">
                
                <p className="text-[10px] fpnt-sans text-[#0369A1] uppercase tracking-tighter mb-1">
                  ICD-10 CODE:
                </p>
                <h3 className="text-xl fpnt-sans text-[#1E293B] mb-1">
                  {item.title}
                </h3>
                <p className="text-sm fpnt-sans text-[#64748B]">{item.code}</p>
                {/* Decorative Pattern */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500/5 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700" />
              </div>

              {/* Card Body */}
              <div className="p-6 border border-slate-100 border-t-0 rounded-b-2xl shadow-sm group-hover:shadow-md transition-shadow">
                <span className="inline-block px-2 py-0.5 rounded bg-[#F0F9FF] text-[#0369A1] text-[10px] fpnt-sans mb-3 border border-[#E0F2FE]">
                  {item.type}
                </span>
                <h4 className="fpnt-sans text-[#334155] mb-2 line-clamp-2">
                  {item.type} Code {item.code}: {item.title}
                </h4>
                <p className="text-sm text-[#64748B] leading-relaxed mb-6 line-clamp-2">
                  {item.desc}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-slate-200" />
                    <span className="text-[11px] fpnt-sans text-[#475569]">
                      {item.author}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-[#94A3B8] font-sans">
                    <Calendar className="w-3 h-3" /> {item.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HUB INFO SECTION */}
      <section className="bg-[#FAFAFA] py-24 px-6 border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl fpnt-sans text-center mb-16 text-[#0F172A]">
            The Diagnostic Codes Hub: Powering Modern Healthcare Documentation
          </h2>
          <div className="grid lg:grid-cols-2 gap-x-16 gap-y-12">
            <div className="space-y-8">
              <p className="text-[#64748B] leading-relaxed">
                Diagnostic coding sits at the foundation of clinical
                documentation, interoperability, and accurate billing. From
                global disease classification to granular clinical terminology,
                standardized code systems help healthcare teams communicate
                clearly.
              </p>
              <div>
                <h4 className="fpnt-sans text-[#334155] mb-2 flex items-center gap-2">
                  ICD-10: The Global Standard{" "}
                  <Info className="w-4 h-4 text-slate-300" />
                </h4>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  The International Classification of Diseases, 10th Revision
                  (ICD-10) provides a structured system for identifying
                  diseases, conditions, and external health factors across
                  healthcare environments worldwide.
                </p>
              </div>
              <div>
                <h4 className="fpnt-sans text-[#334155] mb-2">
                  ICD-10-CM: Clinical Detail for Billing
                </h4>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  ICD-10-CM is the US adaptation of ICD-10, providing higher
                  clinical specificity for reimbursement and medical
                  documentation workflows.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h4 className="fpnt-sans text-[#334155] mb-2">
                  ICD-11: The Future of Digital Health
                </h4>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  ICD-11 represents the next evolution, built for digital
                  systems with improved clinical logic and interoperability for
                  global health analytics.
                </p>
              </div>
              <div>
                <h4 className="fpnt-sans text-[#334155] mb-2">
                  SNOMED CT: Terminology for Precision
                </h4>
                <p className="text-sm text-[#64748B] leading-relaxed">
                  SNOMED CT provides a comprehensive clinical vocabulary that
                  goes beyond diagnosis coding, allowing doctors to describe
                  procedures and clinical findings with precision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header Text */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-sans fpnt-sans text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600">
              Answers to common questions from functional medicine
              practitioners.
            </p>
          </div>

          {/* FAQ Accordion List */}
          <div className="space-y-4">
            {FAQS.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "border-[#009689]/50 bg-[#009689]/5 shadow-sm"
                      : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                >
                  <button
                    className="w-full text-left px-6 py-6 flex justify-between items-center focus:outline-none group"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                  >
                    <span
                      className={`font-sans text-lg md:text-xl pr-8 transition-colors duration-300 ${
                        isOpen
                          ? "text-[#009689] font-semibold"
                          : "text-slate-800"
                      }`}
                    >
                      {faq.q}
                    </span>

                    {/* Icon Toggle Container */}
                    <span
                      className={`flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <div
                        className={`p-1.5 rounded-full transition-colors ${
                          isOpen
                            ? "bg-[#009689]/10 text-[#009689]"
                            : "bg-slate-100 text-slate-400 group-hover:bg-slate-200"
                        }`}
                      >
                        <ChevronDown className="w-5 h-5" />
                      </div>
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 text-slate-600 text-lg leading-relaxed">
                          <div className="pt-2 border-t border-[#009689]/10 mt-1">
                            {faq.a}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
