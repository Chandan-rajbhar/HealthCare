import { useState } from "react";
import {
  ChevronDown,
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Settings,
  ShieldCheck,
  Users,
  ChevronRight,
  Star,
  Quote,
  TrendingUp,
  Gem,
} from "lucide-react";

const PlatinumCustomerSuccess = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What does a customer success manager do?",
      answer:
        "Your dedicated manager acts as a strategic partner, helping you map out business goals and ensuring your software configuration supports them perfectly.",
    },
    {
      question: "Is this different from support?",
      answer:
        "Yes. While support fixes problems after they happen, Success prevents them and focuses on active growth and workflow optimization.",
    },
    {
      question: "How fast can we get started?",
      answer:
        "Immediately. Upon upgrading, you'll receive an introductory call within 24 hours to begin your tailored onboarding.",
    },
    {
      question: "Is this suitable for small clinics?",
      answer:
        "Absolutely. Small clinics often see the biggest ROI as we help automate tasks that would otherwise require additional administrative staff.",
    },
    {
      question: "How do I upgrade?",
      answer:
        "Simply click the 'Upgrade now' button. Our team will handle the billing transition and assign your manager instantly.",
    },
  ];

  const accountServices = [
    {
      icon: Star,
      title: "Dedicated expert help",
      desc: "Work directly with an expert who understands your clinic's specific goals.",
    },
    {
      icon: Settings,
      title: "Workflow optimization",
      desc: "We tailor everything to your specific day-to-day operations and workflows.",
    },
    {
      icon: BarChart3,
      title: "Ongoing performance audits",
      desc: "We continuously improve how your system performs to maximize revenue.",
    },
    {
      icon: Users,
      title: "Best practice guidance",
      desc: "Leverage proven workflows used by the top-performing clinics in the industry.",
    },
    {
      icon: ShieldCheck,
      title: "Proactive compliance",
      desc: "We don’t wait for problems—we ensure your security and compliance stay ahead.",
    },
  ];

  const stats = [
    { icon: TrendingUp, value: "40%", label: "Avg. Revenue Growth" },
    { icon: Users, value: "1-on-1", label: "Dedicated Support" },
    { icon: Gem, value: "Premium", label: "Feature Access" },
    { icon: CheckCircle2, value: "24h", label: "Priority Onboarding" },
  ];

  const features = [
    {
      badge: "Strategic Partnership",
      title: "A service built around your clinic’s growth",
      desc: "We don’t just provide software; we provide a dedicated growth partner to ensure you get the highest ROI possible.",
      points: [
        "Dedicated Account Manager",
        "Monthly strategic reviews",
        "Customized growth roadmap",
        "Priority feature requests",
      ],
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0",
    },
  ];

  const testimonials = [
    {
      text: "Having a dedicated manager changed our business. We finally feel like we're using 100% of the platform.",
      name: "Dr. Aris Thorne",
      role: "Lead Practitioner",
      initials: "AT",
    },
    {
      text: "The ROI was immediate. They found inefficiencies in our booking flow we hadn't noticed for years.",
      name: "Sarah Jenkins",
      role: "Practice Manager",
      initials: "SJ",
    },
  ];

  return (
    <div className="bg-white text-gray-900 font-sans antialiased">
      {/* HERO SECTION */}
      <section className="relative w-full min-h-[90vh] flex flex-col justify-center bg-teal-50 px-6 py-12 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[10%] -right-[5%] w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-50" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-700 mb-6">
              <Star size={18} fill="currentColor" />
              <span className="text-sm tracking-wide uppercase font-sans">
                Platinum Success
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl text-slate-900 mb-6 leading-[1.1] font-sans tracking-tight">
              Unlock your clinic's{" "}
              <span className="text-teal-600">full potential.</span>
            </h1>

            <p className="text-lg text-slate-600 mb-8 max-w-md leading-relaxed">
              Get a dedicated expert to help you grow, optimize workflows, and
              ensure your clinic stays ahead of the competition.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 bg-teal-600 text-white px-8 py-4 rounded-xl transition-all hover:bg-teal-700 hover:shadow-lg hover:shadow-teal-200 active:scale-95 font-sans">
                Upgrade to Platinum
                <ChevronRight size={18} />
              </button>
              <button className="px-8 py-4 rounded-xl text-slate-600 hover:bg-white border border-transparent hover:border-slate-200 transition-colors font-sans">
                View Comparison
              </button>
            </div>
          </div>

          <div className="relative flex items-end justify-center">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-blue-400/10 blur-3xl pointer-events-none" />
            <img
              src="/doctor2.png"
              alt="Doctor"
              className="relative z-10 w-full max-w-[500px] lg:max-w-[600px] object-contain object-bottom drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-white py-12 px-6 border-y border-slate-100">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="mb-3 text-primary-600">
                <stat.icon size={28} />
              </div>
              <h3 className="text-2xl text-gray-900 font-sans">{stat.value}</h3>
              <p className="text-sm text-gray-500 mt-1 font-sans">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-24">
        {features.map((feature, i) => (
          <div
            key={i}
            className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 lg:gap-24 items-center px-6"
          >
            <div className="relative overflow-hidden rounded-2xl group border border-slate-100">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            <div className="flex flex-col items-start space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl text-slate-900 leading-[1.15] tracking-tight font-sans">
                  {feature.title}
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {feature.desc}
                </p>
              </div>

              <ul className="grid grid-cols-1 gap-4 w-full">
                {feature.points.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-base text-slate-700"
                  >
                    <CheckCircle2
                      className="text-teal-600 mt-1"
                      size={18}
                      strokeWidth={2.5}
                    />
                    {point}
                  </li>
                ))}
              </ul>

              <button className="group/btn inline-flex items-center gap-3 px-6 py-3 bg-slate-900 text-white rounded-xl font-sans">
                Schedule a Consultation
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover/btn:translate-x-1"
                />
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* SERVICES GRID */}
      <section className="bg-slate-50 py-24 px-6">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-4xl md:text-5xl text-slate-900 tracking-tight mb-6 font-sans">
              Included in Platinum
            </h2>
            <p className="text-lg text-slate-600">
              White-glove service designed for clinics that prioritize growth
              and operational excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {accountServices.map((item, i) => (
              <div
                key={i}
                className="group bg-white p-10 rounded-2xl border border-slate-200 transition-all duration-300 hover:border-teal-600 hover:shadow-xl hover:shadow-teal-900/5 flex flex-col items-start"
              >
                <div className="mb-6 bg-teal-50 p-4 rounded-xl text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                  <item.icon size={28} />
                </div>
                <h4 className="text-xl text-slate-900 mb-3 font-sans">
                  {item.title}
                </h4>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                <div className="mt-auto pt-8 w-full">
                  <div className="h-1 w-8 bg-slate-100 group-hover:w-full group-hover:bg-teal-600 transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-1">
            <div className="inline-block px-4 py-1 mb-4 text-sm text-teal-600 bg-teal-50 rounded-full font-sans">
              Testimonials
            </div>
            <h2 className="text-4xl text-slate-900 font-sans tracking-tight leading-tight">
              Hear from our Platinum members
            </h2>
          </div>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-slate-50 border border-slate-100 rounded-2xl p-8 flex flex-col justify-between h-full"
            >
              <div>
                <Quote
                  className="text-teal-500/20 mb-6"
                  size={40}
                  fill="currentColor"
                />
                <p className="text-slate-700 text-lg leading-relaxed mb-8 italic">
                  “{t.text}”
                </p>
              </div>
              <div className="border-t border-slate-200 pt-6 flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-teal-600 text-white font-sans text-sm">
                  {t.initials}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-sans text-gray-900">
                    {t.name}
                  </span>
                  <span className="text-xs text-gray-500 font-sans">
                    {t.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 px-6 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 mb-4 text-sm font-sans text-teal-600 bg-teal-50 rounded-full uppercase tracking-wide">
              FAQ
            </div>
            <h2 className="text-4xl md:text-5xl text-slate-900 tracking-tight mb-6 font-sans">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Common questions from longevity clinic owners about our Platinum
              Success program.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`group border rounded-xl overflow-hidden transition-all duration-200 ${
                    isOpen
                      ? "border-teal-600 bg-white ring-1 ring-teal-600/10"
                      : "border-slate-200 bg-white hover:border-slate-300 shadow-sm"
                  }`}
                >
                  <button
                    className="w-full text-left px-6 py-6 flex justify-between items-center focus:outline-none"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span
                      className={`text-lg md:text-xl pr-8 font-sans transition-colors ${
                        isOpen ? "text-teal-600" : "text-slate-800"
                      }`}
                    >
                      {faq.question}
                    </span>

                    <span
                      className={`flex-shrink-0 transition-all duration-300 ${
                        isOpen
                          ? "rotate-180 text-teal-600"
                          : "text-slate-400 group-hover:text-slate-600"
                      }`}
                    >
                      <div
                        className={`p-2 rounded-lg transition-colors ${
                          isOpen ? "bg-teal-50" : "bg-slate-50"
                        }`}
                      >
                        <ChevronDown className="w-5 h-5" strokeWidth={2.5} />
                      </div>
                    </span>
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-6 text-slate-600 text-lg leading-relaxed border-t border-slate-50 pt-4">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 px-6 bg-teal-600 text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-sans mb-6 tracking-tight">
            Ready for a higher level of success?
          </h2>
          <p className="text-teal-100 mb-10 text-lg">
            Join the elite clinics using HealVare Platinum to scale their
            operations.
          </p>
          <button className="bg-white text-teal-600 px-10 py-5 rounded-xl font-sans hover:bg-teal-50 transition-all shadow-xl hover:scale-105 active:scale-95">
            Upgrade to Platinum Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default PlatinumCustomerSuccess;
