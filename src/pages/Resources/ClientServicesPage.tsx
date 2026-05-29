import { useNavigate } from "react-router-dom";
import {
  BarChart3,
  Users,
  Settings,
  ShieldCheck,
  GraduationCap,
  TrendingUp,
} from "lucide-react";

type Service = {
  title: string;
  description: string;
  points: string[];
  image: string;
};

const SERVICES: Service[] = [
  {
    title: "Data Migration & System Onboarding",
    description:
      "We securely transfer your data and structure your system to ensure a smooth and reliable launch.",
    points: [
      "Secure and accurate data migration",
      "Seamless, no-disruption setup",
      "End-to-end system configuration",
    ],
    image: "/data-mig.jpg",
  },
  {
    title: "End-to-End Project Delivery",
    description:
      "Our specialists manage your entire implementation process to ensure timely and efficient deployment.",
    points: [
      "Dedicated project leadership",
      "Structured milestone planning",
      "Ongoing coordination and support",
    ],
    image: "/end-to-end.jpg",
  },
  {
    title: "Premium Client Success Management",
    description:
      "Receive priority support and strategic guidance designed to maximize long-term success.",
    points: [
      "Priority access to support",
      "Performance and growth insights",
      "Regular strategic reviews",
    ],
    image: "/client-management.jpg",
  },
  {
    title: "Revenue Optimization & Growth Strategy",
    description:
      "We help you identify opportunities and implement proven strategies to increase revenue and efficiency.",
    points: [
      "Advanced upselling frameworks",
      "Client retention optimization",
      "Data-driven performance tracking",
    ],
    image: "revenue.jpg",
  },
];

export default function ClientServicesPage() {
  const navigate = useNavigate();

  return (
    <div className="bg-white text-slate-800">
      {/* HERO */}
      <section className="relative bg-slate-50 py-24 overflow-hidden">
        {/* Soft Background Accents */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-100/40 blur-[120px] rounded-full -z-10"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-100/40 blur-[120px] rounded-full -z-10"></div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-100 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                </span>
                <span className="text-xs font-sans tracking-widest text-teal-700 uppercase">
                  Client Services
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-sans text-slate-900 leading-[1.1] mb-8 tracking-tight">
                Set up, scale, and{" "}
                <span className="text-teal-600">succeed</span> with your
                services
              </h1>

              <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
                Everything you need to launch, manage, and grow your clinic with
                expert support and automated workflows.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
               <button
                  onClick={() => navigate("/contact")}
                  className="bg-primary text-white font-sans py-4 px-8 rounded-lg text-lg cursor-pointer"
                >
                  Get Started
                </button>

                <button
                  onClick={() => navigate("/case-studies")}
                  className="flex cursor-pointer items-center justify-center bg-white border border-slate-200 text-slate-700 font-sans py-4 px-8 rounded-2xl hover:bg-slate-50 hover:border-slate-300 transition-all duration-300"
                >
                  View Success Stories
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-4 pt-8 border-t border-slate-200">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden"
                    >
                      <img
                        src={`https://i.pravatar.cc/150?u=${i}`}
                        alt="user"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <p className="text-slate-900 font-sans">
                    Trusted by 500+ Clinics
                  </p>
                  <p className="text-slate-500">Global operations support</p>
                </div>
              </div>
            </div>

            {/* Right Visual Element (Modern Card Stack) */}
            <div className="relative hidden lg:block">
              <div className="relative z-10 bg-white rounded-[2rem] p-8 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-slate-100">
                {/* Mockup Content */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="h-4 w-32 bg-slate-100 rounded-full"></div>
                    <div className="h-8 w-8 bg-teal-50 rounded-lg flex items-center justify-center">
                      <div className="h-4 w-4 bg-teal-500 rounded-sm"></div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-12 w-full bg-slate-50 rounded-xl border border-slate-100 flex items-center px-4 justify-between">
                      <div className="h-2 w-24 bg-slate-200 rounded-full"></div>
                      <div className="h-4 w-12 bg-teal-100 rounded-full"></div>
                    </div>
                    <div className="h-12 w-full bg-slate-50 rounded-xl border border-slate-100 flex items-center px-4 justify-between opacity-60">
                      <div className="h-2 w-20 bg-slate-200 rounded-full"></div>
                      <div className="h-4 w-12 bg-slate-200 rounded-full"></div>
                    </div>
                  </div>
                  <div className="pt-4">
                    <div className="h-32 w-full bg-teal-600 rounded-2xl p-4 flex flex-col justify-between">
                      <div className="h-2 w-16 bg-teal-400 rounded-full"></div>
                      <div className="text-white font-sans text-xl">
                        84% Growth
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Accent Card */}
              <div className="absolute -bottom-6 -left-6 z-20 bg-white shadow-2xl rounded-2xl p-4 border border-slate-100 flex items-center gap-4 animate-bounce-slow">
                <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  ✓
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 uppercase font-sans">
                    Setup Status
                  </p>
                  <p className="text-sm font-sans text-slate-900">
                    100% Complete
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE GRID */}
      <section className="py-24 bg-white font-sans">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header with a "Breadcrumb" style layout */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-20 border-b border-slate-900 pb-12">
            <div className="max-w-2xl">
              <span className="text-[11px] font-sans tracking-[0.2em] text-teal-600 uppercase block mb-4">
                Professional Services
              </span>
              <h2 className="text-4xl md:text-5xl font-sans text-slate-900 tracking-tight italic">
                Our Expertise
              </h2>
            </div>
            <p className="text-slate-500 text-lg max-w-sm lg:text-right leading-relaxed">
              Strategic, technical, and operational support for every stage of
              your clinic’s journey.
            </p>
          </div>

          {/* The "Blueprint" Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Users,
                label: "Client onboarding",
                desc: "Smoothly bring your team and patient records onto the platform without disruption.",
              },
              {
                icon: BarChart3,
                label: "Project management",
                desc: "Clear planning and execution to keep your rollout on track.",
              },
              {
                icon: Settings,
                label: "System setup",
                desc: "Tailored configuration aligned with how your clinic actually operates.",
              },
              {
                icon: ShieldCheck,
                label: "Compliance",
                desc: "Built to meet strict healthcare regulations and data protection standards.",
              },
              {
                icon: GraduationCap,
                label: "Training",
                desc: "Practical training sessions to get your staff confident and ready.",
              },
              {
                icon: TrendingUp,
                label: "Growth consulting",
                desc: "Strategic insights to help you increase performance and revenue.",
              },
            ].map((item, i) => (
              <div
                key={item.label}
                className="group relative p-10 border border-slate-100 -ml-[1px] -mt-[1px] transition-all duration-500 hover:bg-slate-900"
              >
                {/* Subtle Index Number */}
                <span className="absolute top-10 right-10 text-[10px] font-mono text-slate-300 group-hover:text-slate-700 transition-colors">
                  0{i + 1}
                </span>

                <div className="flex flex-col h-full">
                  <div className="mb-12 inline-flex items-center justify-center w-12 h-12 rounded-full border border-slate-200 text-slate-900 group-hover:border-teal-500 group-hover:text-teal-400 transition-all duration-500">
                    <item.icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>

                  <h3 className="text-xl font-sans text-slate-900 mb-4 group-hover:text-white transition-colors">
                    {item.label}
                  </h3>

                  <p className="text-slate-500 group-hover:text-slate-400 leading-relaxed text-sm mb-8 flex-grow">
                    {item.desc}
                  </p>

                  <button className="flex items-center gap-2 text-[11px] font-sans tracking-widest text-teal-600 uppercase group-hover:text-white transition-all">
                    Details
                    <span className="w-4 h-[1px] bg-teal-600 group-hover:bg-white transition-all group-hover:w-8"></span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA bar */}
          <div className="mt-20 p-8 bg-slate-50 flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-100">
            <p className="text-slate-700 font-sans">
              Ready to discuss a custom implementation plan?
            </p>
            <button className="bg-slate-900 text-white px-8 py-3 text-sm font-sans hover:bg-teal-600 transition-colors">
              Contact Expert
            </button>
          </div>
        </div>
      </section>

      {/* SERVICES SECTIONS */}
      <section className="py-32 bg-white font-sans overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-40">
            {SERVICES.map((service, i) => (
              <div
                key={service.title}
                className={`flex flex-col md:flex-row items-center gap-16 lg:gap-32 ${
                  i % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* VISUAL COMPONENT: Layered Border Frame */}
                <div className="flex-1 relative">
                  {/* Background Decorative Frame (Asymmetric) */}
                  <div
                    className={`absolute -inset-4 border border-slate-100 rounded-[2.5rem] -z-10 ${
                      i % 2 !== 0 ? "translate-x-8" : "-translate-x-8"
                    }`}
                  ></div>

                  <div className="relative aspect-[4/3] bg-slate-50 rounded-3xl overflow-hidden border border-slate-200">
                    {/* Subtle Grid Overlay */}
                    <div
                      className="absolute inset-0 opacity-20 pointer-events-none"
                      style={{
                        backgroundImage:
                          "radial-gradient(#cbd5e1 1px, transparent 1px)",
                        backgroundSize: "24px 24px",
                      }}
                    ></div>

                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* CONTENT COMPONENT */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-8"></div>

                  <h2 className="text-4xl md:text-5xl font-sans text-slate-900 mb-8 tracking-tight leading-[1.1]">
                    {service.title.split(" ").map((word, index) => (
                      <span
                        key={index}
                        className={
                          index === service.title.split(" ").length - 1
                            ? "text-teal-600"
                            : ""
                        }
                      >
                        {word}{" "}
                      </span>
                    ))}
                  </h2>

                  <p className="text-slate-500 text-lg md:text-xl mb-12 leading-relaxed font-light">
                    {service.description}
                  </p>

                  {/* Feature List: Icon-less Minimalist Approach */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6 mb-12">
                    {service.points.map((point) => (
                      <div key={point} className="group flex flex-col gap-2">
                        <div className="h-[2px] w-6 bg-slate-200 group-hover:w-full group-hover:bg-teal-500 transition-all duration-500"></div>
                        <span className="text-sm font-sans text-slate-700 tracking-tight">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex pt-4">
                    <button
                      onClick={() => navigate("/contact")}
                      className="group flex items-center gap-6 bg-transparent text-slate-900 border-b-2 border-slate-900 pb-2 text-sm font-sans tracking-widest hover:text-teal-600 hover:border-teal-600 transition-all duration-300"
                    >
                      EXPLORE CASE STUDY
                      <div className="relative overflow-hidden w-5 h-5">
                        <svg
                          className="w-5 h-5 absolute transition-all duration-300 -translate-x-full group-hover:translate-x-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                        <svg
                          className="w-5 h-5 absolute transition-all duration-300 translate-x-0 group-hover:translate-x-full"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2.5"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-slate-50 py-24 overflow-hidden font-sans">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-16 items-start">
            {/* Left Column: Heading & Stats */}
            <div className="lg:sticky lg:top-10">
              <h2 className="text-4xl font-sans text-slate-900 leading-tight mb-6">
                Trusted by <span className="text-teal-600">3,500+</span> modern
                practices
              </h2>
              <p className="text-slate-500 mb-8 leading-relaxed">
                From independent clinics to large hospital networks, we provide
                the backbone for world-class patient care.
              </p>

              {/* Metric Counter (Simple & Clean) */}
              <div className="pt-8 border-t border-slate-200">
                <p className="text-3xl font-sans text-slate-900">98%</p>
                <p className="text-xs text-slate-400 uppercase tracking-widest font-sans mt-1">
                  Client Retention Rate
                </p>
              </div>
            </div>

            {/* Right Column: Dynamic Testimonials */}
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
              {[
                {
                  text: "This platform completely transformed our clinic workflow. The automation alone saved our admin team 15 hours a week.",
                  author: "Dr. Sarah Chen",
                  role: "Chief of Surgery, Metro Health",
                },
                {
                  text: "We saw a 40% increase in efficiency after onboarding. It’s the first software our staff actually enjoys using.",
                  author: "Marcus Thorne",
                  role: "Operations Director, Thorne Wellness",
                },
              ].map((testimonial, i) => (
                <div
                  key={i}
                  className="relative flex flex-col bg-white border border-slate-200 p-10 rounded-3xl"
                >
                  {/* Massive Stylized Quote Mark */}
                  <span className="absolute top-4 right-8 text-8xl font-sans text-slate-50 opacity-[0.08] select-none">
                    “
                  </span>

                  <div className="flex-1 relative z-10">
                    <div className="mb-6 flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className="w-4 h-4 text-teal-500 fill-current"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    <p className="text-slate-700 text-lg leading-relaxed italic mb-8">
                      “{testimonial.text}”
                    </p>
                  </div>

                  <div className="pt-8 border-t border-slate-100 mt-auto">
                    <div className="flex justify-between items-end">
                      <div>
                        <p className="font-sans text-slate-900">
                          {testimonial.author}
                        </p>
                        <p className="text-xs text-slate-500 mt-1">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 text-white py-32 overflow-hidden font-sans relative">
        {/* Subtle Grid Accent */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(#5eead4 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 border-y border-slate-900 py-16">
            {/* Text Side */}
            <div className="max-w-2xl text-left">
              <h2 className="text-4xl md:text-6xl font-sans tracking-tight leading-tight mb-6">
                Ready to scale your <br />
                <span className="text-teal-400">medical practice?</span>
              </h2>
              <p className="text-slate-400 text-lg md:text-xl font-light max-w-xl">
                Join 3,500+ clinics using our platform to automate their
                operations and deliver a superior patient experience.
              </p>
            </div>

            {/* Button Side - Rectangular & Transparent */}
            <div className="shrink-0">
              <button
                onClick={() => navigate("/contact")}
                className="group relative flex items-center gap-8 border-2 border-teal-500 bg-transparent px-10 py-6 transition-all duration-500 ease-in-out hover:bg-teal-500"
              >
                <div className="flex flex-col items-start">
                  <span className="text-2xl font-sans text-white group-hover:text-slate-950 transition-colors">
                    Book a Demo
                  </span>
                </div>

                <div className="w-12 h-12 rounded-full border border-teal-500/30 flex items-center justify-center group-hover:bg-slate-950 group-hover:border-slate-950 transition-all duration-500">
                  <svg
                    className="w-5 h-5 text-teal-400 group-hover:text-teal-500 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
