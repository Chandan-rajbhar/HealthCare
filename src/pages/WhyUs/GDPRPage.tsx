import {
  ShieldCheck,
  Scale,
  FileCheck,
  Lock,
  Users,
  Globe,
  Zap,
} from "lucide-react";

const GDPRPage = () => {
  return (
    <div className="bg-white font-sans text-slate-900">
      {/* --- HERO SECTION --- */}
      <section className="min-h-[80vh] flex items-center justify-center bg-blue-50 px-6 py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-100/50 skew-x-12 translate-x-20" />

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 mb-6">
              <ShieldCheck size={16} strokeWidth={3} />
              <span className="text-xs font-sans uppercase tracking-widest">
                Compliance
              </span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-sans tracking-tight leading-[1.1] mb-8">
              GDPR Compliance at{" "}
              <span className="text-blue-600">HealVare.</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
              We take data protection seriously. Our infrastructure is
              meticulously designed to ensure your personal data is handled with
              transparency, security, and full regulatory integrity.
            </p>
          </div>

          <div className="hidden lg:flex justify-center">
            <div className="relative w-80 h-80 bg-blue-600 rounded-3xl flex items-center justify-center shadow-2xl rotate-3">
              <span className="text-white font-sans text-6xl tracking-tighter">
                GDPR
              </span>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white border border-blue-100 rounded-2xl shadow-xl flex items-center justify-center -rotate-12">
                <Lock className="text-blue-600" size={32} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CORE ROLE & DPA --- */}
      <section className="min-h-screen flex items-center py-24 px-6 border-b border-slate-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-16">
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-sans tracking-tighter sticky top-24">
              Our Role & Framework
            </h2>
          </div>

          <div className="lg:col-span-3 space-y-20">
            <div>
              <h3 className="text-2xl font-sans mb-4 flex items-center gap-3">
                <Users className="text-blue-600" /> Our Role in Compliance
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                HealVare acts as a{" "}
                <span className="text-slate-900 font-sans underline decoration-blue-500 underline-offset-4">
                  data processor
                </span>{" "}
                while our clients act as the{" "}
                <span className="text-slate-900 font-sans underline decoration-blue-500 underline-offset-4">
                  data controllers
                </span>
                . As a processor, we handle personal data on your behalf under
                your instructions, ensuring it is processed in line with GDPR
                requirements.
              </p>
            </div>

            <div className="p-10 bg-slate-900 text-white rounded-3xl">
              <h3 className="text-2xl font-sans mb-4 flex items-center gap-3">
                <FileCheck className="text-blue-400" /> Data Processing
                Agreement (DPA)
              </h3>
              <p className="text-slate-300 mb-8 leading-relaxed">
                We provide a comprehensive DPA that outlines the
                responsibilities and obligations of both parties in compliance
                with Article 28 of the GDPR. This agreement ensures we meet the
                highest standards of protection.
              </p>
              <button className="bg-transparent border-2 border-white px-8 py-3 rounded-none font-sans uppercase tracking-widest text-xs hover:bg-white hover:text-slate-900 transition-all">
                Download DPA
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECURITY MEASURES GRID --- */}
      <section className="min-h-screen flex items-center bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-4xl lg:text-6xl font-sans tracking-tighter text-center mb-20">
            Robust Security Measures
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Lock,
                title: "Encryption",
                desc: "Data is encrypted both in transit and at rest to prevent unauthorized access at every touchpoint.",
              },
              {
                icon: Zap,
                title: "Access Controls",
                desc: "We use strict access controls to ensure that only authorized personnel can access sensitive data.",
              },
              {
                icon: Scale,
                title: "Regular Audits",
                desc: "Our systems are regularly audited to identify and mitigate any potential vulnerabilities before they arise.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-10 border border-slate-200 rounded-2xl transition-colors hover:border-blue-600 group"
              >
                <item.icon
                  className="text-blue-600 mb-6 transition-transform group-hover:scale-110"
                  size={32}
                />
                <h4 className="text-xl font-sans mb-4">{item.title}</h4>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- RESPONSIBILITIES & RIGHTS --- */}
      <section className="min-h-screen flex items-center bg-slate-50 py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <h2 className="text-4xl font-sans tracking-tight">
              Your Responsibilities
            </h2>
            <div className="space-y-8">
              {[
                "Obtaining explicit consent",
                "Responding to Data Subject Requests",
                "Data Minimization",
              ].map((text, i) => (
                <div key={i} className="flex gap-4">
                  <div className="h-6 w-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs shrink-0 mt-1">
                    {i + 1}
                  </div>
                  <p className="text-lg font-sans text-slate-700">{text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white p-12 border border-slate-200 rounded-3xl">
            <h2 className="text-4xl font-sans tracking-tight mb-8 text-blue-600">
              Data Subject Rights
            </h2>
            <ul className="space-y-6">
              {[
                {
                  r: "Right to Access",
                  d: "Individuals can request access to their personal data.",
                },
                {
                  r: "Right to Rectification",
                  d: "Individuals can request corrections to inaccurate data.",
                },
                {
                  r: "Right to Erasure",
                  d: "The 'Right to be Forgotten' allows deletion requests.",
                },
                {
                  r: "Data Portability",
                  d: "Requests for data in machine-readable formats.",
                },
              ].map((item, i) => (
                <li
                  key={i}
                  className="border-b border-slate-100 pb-4 last:border-0"
                >
                  <span className="block font-sans text-slate-900 mb-1">
                    {item.r}
                  </span>
                  <span className="text-slate-500 text-sm">{item.d}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* --- INTERNATIONAL & BREACH --- */}
      <section className="py-24 px-6 border-y border-slate-100">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <Globe className="text-blue-600 mb-6" size={40} />
            <h3 className="text-2xl font-sans mb-4">International Transfers</h3>
            <p className="text-slate-600 leading-relaxed">
              As a global company, we ensure that any international data
              transfers are protected by appropriate safeguards, such as
              Standard Contractual Clauses (SCCs).
            </p>
          </div>
          <div>
            <Zap className="text-blue-600 mb-6" size={40} />
            <h3 className="text-2xl font-sans mb-4">Data Breach Response</h3>
            <p className="text-slate-600 leading-relaxed">
              We maintain a detailed Data Breach Response Plan ensuring we can
              identify, contain, and report breaches to relevant authorities
              within the 72-hour window.
            </p>
          </div>
        </div>
      </section>

      {/* --- CONTACT FOOTER CTA --- */}
      <section className="py-20 px-6 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-sans mb-4">
          Ready to see how HealVare can help your practice grow?
        </h2>

        <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-sans">
          Book a demo
        </button>
      </section>
    </div>
  );
};

export default GDPRPage;
