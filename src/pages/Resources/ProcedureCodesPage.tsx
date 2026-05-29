import React, { useState } from "react";
import { ChevronDown, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
// --- Types ---
interface CodeCard {
  id: string;
  category: "CPT" | "HCPCS" | "CCSD";
  code: string;
  title: string;
  description: string;
  author: string;
  date: string;
}

const FAQS = [
  {
    q: "What are diagnostic codes used for in healthcare?",
    a: "Diagnostic codes are used to categorize and track every diagnosis, symptom, and cause of death. They are essential for medical billing, clinical research, and ensuring that health systems can communicate patient data accurately.",
  },
  {
    q: "What is the difference between ICD-10 and ICD-10-CM?",
    a: "ICD-10 is the international standard maintained by the WHO. ICD-10-CM is the 'Clinical Modification' used specifically in the United States for clinical settings and billing, providing much higher detail for morbidity.",
  },
  {
    q: "How does ICD-11 differ from earlier versions?",
    a: "ICD-11 is completely digital-fit, supports multiple parent relationships for a single code, and includes significant updates to mental health and traditional medicine classifications.",
  },
  {
    q: "What is SNOMED CT and how is it different from ICD coding?",
    a: "SNOMED CT is a clinical terminology used for detailed point-of-care documentation, whereas ICD is a classification system used for high-level reporting and billing.",
  },
];

const ProcedureCodesPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const cards: CodeCard[] = [
    {
      id: "1",
      category: "CPT",
      code: "78815",
      title: "PET/CT Billing, Modifiers & Reimbursement",
      description:
        "PET/CT denials are among the costliest in nuclear medicine billing. CPT Code 788...",
      author: "Katy Piper",
      date: "April 23, 2026",
    },
    {
      id: "2",
      category: "CPT",
      code: "25000",
      title: "Incision of Extensor Tendon Sheath, Wrist",
      description:
        "CPT Code 25000: Definition, Clinical Description, and Code Placement Claim denia...",
      author: "Katy Piper",
      date: "April 23, 2026",
    },
    {
      id: "3",
      category: "CPT",
      code: "13101",
      title: "Complex Repair Trunk, 2.6-7.5 cm",
      description:
        "Complex wound repair billing is one of the most contested areas in integumentary...",
      author: "Katy Piper",
      date: "April 23, 2026",
    },
    {
      id: "4",
      category: "CPT",
      code: "80053",
      title: "Comprehensive Metabolic Panel Billing Guide",
      description:
        "CMP claims get denied more often than most lab codes — not because the tes...",
      author: "Katy Piper",
      date: "April 23, 2026",
    },
    {
      id: "5",
      category: "HCPCS",
      code: "J1756",
      title: "Iron Sucrose Injection Billing",
      description:
        "Iron sucrose claims get denied more than billers expect. The unit-of-service cal...",
      author: "Katy Piper",
      date: "April 23, 2026",
    },
    {
      id: "6",
      category: "HCPCS",
      code: "C1725",
      title: "Catheter, Transluminal Angioplasty, Non-Laser",
      description:
        "HCPCS Code C1725: Definition and Official Description Cardiovascular billing tea...",
      author: "Katy Piper",
      date: "April 23, 2026",
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      ={/* --- Hero Section --- */}
      <header className="py-16 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl font-sans mb-4 text-slate-900">
          Procedure Codes
        </h1>
        <p className="text-slate-500 text-lg">
          Browse clinical coding guides for{" "}
          <span className="font-sans">CCSD, CPT</span> and{" "}
          <span className="font-sans">HCPCS</span> procedure codes. Each guide
          covers usage, documentation requirements, modifiers and reimbursement
          to help healthcare providers bill accurately and reduce claim denials.
        </p>
      </header>
      {/* --- Filter Bar --- */}
      <section className="px-6 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mb-8 border-t border-slate-100 pt-8">
        <h2 className="text-2xl font-sans text-slate-800 mb-4 md:mb-0">
          Procedure Codes: CPT, HCPCS & CCSD Billing Reference
        </h2>
        <div className="relative">
          <select className="appearance-none border border-slate-200 rounded-md px-4 py-2 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-sky-500">
            <option>Filter</option>
          </select>
          <ChevronDown
            className="absolute right-3 top-2.5 text-slate-400"
            size={16}
          />
        </div>
      </section>
      {/* --- Grid Content --- */}
      <main className="px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {cards.map((card) => (
          <div
            key={card.id}
            className="border border-slate-100 rounded-xl overflow-hidden hover:border-sky-200 transition-colors"
          >
            {/* Mock Card Image/Header */}
            <div className="h-48 bg-slate-50 p-6 relative flex flex-col justify-center items-center text-center">
              <p className="text-[10px] text-sky-500 font-sans uppercase tracking-wider mb-1">
                {card.category} CODE:
              </p>
              <h3 className="text-lg font-sans text-slate-800 leading-tight px-4">
                {card.title}
              </h3>
              <p className="text-slate-400 font-sans mt-2">{card.code}</p>
            </div>

            <div className="p-6">
              <span className="inline-block bg-sky-50 text-sky-600 text-[10px] font-sans px-2 py-0.5 rounded mb-3 uppercase">
                {card.category} CODES
              </span>
              <h4 className="font-sans text-slate-800 mb-2 leading-tight">
                {card.category} Code {card.code}: {card.title}
              </h4>
              <p className="text-slate-500 text-sm mb-6 line-clamp-2">
                {card.description}
              </p>

              <div className="flex items-center justify-between border-t border-slate-50 pt-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-sans text-slate-600">
                    {card.author}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-slate-400 text-xs">
                  <Calendar size={12} />
                  <span>{card.date}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </main>
      {/* --- SEO Content Section --- */}
      <section className="bg-slate-50/50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-sans text-slate-900 mb-4">
              The Procedure Codes Hub: Accurate Billing Across Clinical
              Specialties
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-sm text-slate-600 leading-relaxed">
            <div className="space-y-6">
              <p>
                Procedure coding underpins every clinical billing workflow, from
                initial consultation to complex surgical intervention.
                Standardised code systems ensure that the services delivered by
                healthcare professionals are documented with precision...
              </p>
              <h3 className="text-slate-900 font-sans text-base">
                CPT Codes: The Foundation of US Procedural Billing
              </h3>
              <p>
                Current Procedural Terminology (CPT) codes, maintained by the
                American Medical Association, are the primary classification
                system for reporting medical procedures and services in the
                United States...
              </p>
              <h3 className="text-slate-900 font-sans text-base">
                HCPCS Codes: Beyond Procedures to Supplies and Services
              </h3>
              <p>
                The Healthcare Common Procedure Coding System (HCPCS) extends
                CPT by adding Level II codes for items and services not covered
                by standard procedural terminology...
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-slate-900 font-sans text-base">
                CCSD Codes: UK Private Healthcare Procedure Classification
              </h3>
              <p>
                Clinical Coding and Schedule Development (CCSD) codes are the
                standard procedure classification system used across UK private
                healthcare. Insurers including BUPA, AXA, Aviva, and Vitality
                use CCSD codes to determine procedure eligibility...
              </p>
              <h3 className="text-slate-900 font-sans text-base">
                Modifiers: Precision in Procedural Reporting
              </h3>
              <p>
                Modifiers are two-character suffixes appended to CPT and HCPCS
                codes that provide additional context about a procedure without
                changing its definition...
              </p>
              <h3 className="text-slate-900 font-sans text-base">
                Reducing Claim Denials Through Accurate Coding
              </h3>
              <p>
                Coding errors remain one of the leading causes of claim denials
                across both US and UK healthcare. Common mistakes include
                unbundling, upcoding, and missing or incorrect modifiers...
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* --- FAQ Section --- */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header Text */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-sans font-sans text-slate-900 mb-4">
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
};

export default ProcedureCodesPage;
