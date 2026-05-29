import { useState } from "react";
import { Check, ChevronDown, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
("@/pages/FooterPage/footerpage");

type Plan = {
  name: string;
  users: string;
  secondary: string;
  tertiary?: string;
  price?: string;
  priceSuffix?: string;
  footnote?: string;
  practicesTitle: string;
  practices: string[];
  featured?: boolean;
};

const plans: Plan[] = [
  {
    name: "Solo",
    users: "1 user",
    secondary: "Unlimited patients",
    practicesTitle: "Practices on Solo typically:",
    practices: [
      "Operate full-time as a solo practitioner",
      "Manage high patient volume",
      "Run fully digital clinical workflows",
      "Use a purpose-built practice management system",
    ],
  },
  {
    name: "Team",
    users: "2–3 users",
    secondary: "Unlimited patients",
    featured: true,
    practicesTitle: "Practices on Team typically:",
    practices: [
      "Share calendars and treatment rooms",
      "Coordinate team access and permissions",
      "Centralize billing and payment workflows",
      "Utilize patient retention tools",
    ],
  },
  {
    name: "Group",
    users: "6–15 users",
    secondary: "Unlimited patients",
    practicesTitle: "Practices on Group typically:",
    practices: [
      "Operate with larger clinical teams",
      "Manage inventory and supplies centrally",
      "Use cross-team reporting and analytics",
      "Connect with external systems and tools",
    ],
  },
  {
    name: "Enterprise",
    users: "16+ users",
    secondary: "Unlimited patients",
    tertiary: "Multi-location supported",
    practicesTitle: "Practices on Enterprise typically:",
    practices: [
      "Run multiple clinic locations",
      "Support large clinical and administrative teams",
      "Maintain governance and role-based access",
      "Report across sites, departments, and teams",
    ],
  },
];

const pricingFaqItems = [
  {
    question: "Do all plans include full platform access?",
    answer:
      "Yes. Every plan includes complete access to scheduling, online booking, clinical records, forms, payments, invoicing, marketing tools, inventory, and reporting. Plans differ only by the number of users—not by features.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Pricing is based on your practice size. Choose a plan that matches the number of users in your clinic, and each team member gets access to the same core platform.",
  },
  {
    question: "What counts as a user?",
    answer:
      "A user is any staff member who needs their own login, calendar access, patient workflows, or reporting access within the platform.",
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer:
      "Yes. As your practice grows or changes, you can easily move to a different plan that matches your current user count.",
  },
  {
    question: "What happens during a demo?",
    answer:
      "We'll walk through your practice workflows, demonstrate how the platform fits your needs, and recommend the right setup for your team and goals.",
  },
];

const PlanCard = ({ plan }: { plan: Plan }) => {
  return (
    <div
      className={`relative flex flex-col rounded-2xl border transition-all duration-200 hover:-translate-y-0.5 ${
        plan.featured
          ? "border-teal-600 bg-white shadow-[0_0_0_4px_rgba(13,148,136,0.05),0_8px_32px_rgba(13,148,136,0.1)]"
          : "border-slate-200 bg-white shadow-sm hover:border-slate-300"
      }`}
    >
      <div
        className={`h-[3px] w-full rounded-t-2xl ${
          plan.featured ? "bg-teal-600" : "bg-slate-200"
        }`}
      />

      {plan.featured && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-600 px-3 py-1 text-[11px] font-normal uppercase tracking-widest text-white shadow-sm">
            <Zap className="h-3 w-3" />
            Most popular
          </span>
        </div>
      )}

      <div className="flex flex-1 flex-col px-6 pb-7 pt-6">
        <div className="mb-5">
          <h3
            className={`text-[22px] font-sans tracking-tight ${
              plan.featured ? "text-teal-700" : "text-slate-900"
            }`}
          >
            {plan.name}
          </h3>
          <div className="mt-2 flex flex-wrap items-center gap-1.5">
            <span className="inline-flex items-center rounded-md bg-slate-100 px-2 py-0.5 text-[12px] font-normal text-slate-600">
              {plan.users}
            </span>
            <span className="inline-flex items-center rounded-md bg-slate-100 px-2 py-0.5 text-[12px] font-normal text-slate-600">
              {plan.secondary}
            </span>
            {plan.tertiary && (
              <span className="inline-flex items-center rounded-md bg-teal-50 px-2 py-0.5 text-[12px] font-normal text-teal-700 border border-teal-100">
                {plan.tertiary}
              </span>
            )}
          </div>
        </div>

        {plan.price && (
          <div className="mb-4">
            <p className="flex items-start leading-none">
              <span className="mr-0.5 mt-1.5 text-[18px] font-normal text-slate-400">
                £
              </span>
              <span className="text-[44px] font-normal leading-none tracking-tight text-slate-900">
                {plan.price}
              </span>
              <span className="mb-1.5 ml-1.5 mt-auto text-[13px] text-slate-400">
                {plan.priceSuffix}
              </span>
            </p>
            {plan.footnote && (
              <p className="mt-1.5 text-[12px] text-slate-400 font-normal">
                {plan.footnote}
              </p>
            )}
          </div>
        )}

        <Button
          className={`mb-5 h-[42px] w-full rounded-xl text-[14px] font-sans transition-all ${
            plan.featured
              ? "bg-teal-600 text-white hover:bg-teal-700 shadow-md shadow-teal-600/20"
              : "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-300"
          }`}
        >
          Book a demo
        </Button>

        <div className="mb-5 h-px bg-slate-100" />

        <p className="mb-3 text-[11px] font-sans uppercase tracking-widest text-slate-400">
          {plan.practicesTitle}
        </p>
        <ul className="flex flex-col gap-3">
          {plan.practices.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-[13.5px] font-normal leading-snug text-slate-600"
            >
              <span
                className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
                  plan.featured
                    ? "bg-teal-100 text-teal-600"
                    : "bg-emerald-50 text-emerald-600"
                }`}
              >
                <Check className="h-2.5 w-2.5" strokeWidth={2.5} />
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const PricingPage = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number>(0);

  return (
    <>
      <main className="bg-white pb-16">
        {/* ── Hero ── */}
        <section className="relative overflow-hidden border-b border-slate-100 bg-white px-4 pb-14 pt-16 sm:px-6 md:px-8">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(#0d9488 1px, transparent 1px), linear-gradient(90deg, #0d9488 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[900px] -translate-x-1/2 rounded-full bg-teal-50 opacity-40 blur-3xl" />

          <div className="relative mx-auto max-w-[720px] text-center">
            <h1 className="mt-4 text-[44px] font-normal leading-[1.1] tracking-[-0.03em] text-slate-900 md:text-[58px]">
              All features.{" "}
              <span className="text-teal-600">Pay for your team.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-[540px] text-[16px] font-normal leading-[1.65] text-slate-500">
              Complete platform access on every plan — pricing based only on
              user count.
            </p>
          </div>
        </section>

        {/* ── Plans Grid ── */}
        <section className="px-4 pb-12 pt-14 sm:px-6 md:px-8">
          <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {plans.map((plan) => (
              <PlanCard key={plan.name} plan={plan} />
            ))}
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="px-6 py-24 bg-white">
          <div className="mx-auto max-w-[820px]">
            <div className="mb-16 text-center">
              <h2 className="text-4xl font-normal tracking-tight text-slate-900 md:text-5xl">
                Questions? <span className="text-teal-600">Answers.</span>
              </h2>
              <p className="mt-4 text-lg font-normal text-slate-500">
                Everything you need to know about our pricing and plans.
              </p>
            </div>

            <div className="space-y-4">
              {pricingFaqItems.map((item, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={item.question}
                    className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? "border-[#009689]/50 shadow-md"
                        : "border-slate-200 bg-white hover:border-slate-300"
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                      className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left focus:outline-none"
                    >
                      <span
                        className={`text-lg md:text-xl font-sans pr-8 ${
                          isOpen ? "text-[#007a6e]" : "text-slate-800"
                        }`}
                      >
                        {item.question}
                      </span>

                      <span
                        className={`flex-shrink-0 transition-transform duration-300 ${
                          isOpen
                            ? "rotate-180 text-[#009689]"
                            : "text-slate-400"
                        }`}
                      >
                        <div
                          className={`p-1.5 rounded-full ${
                            isOpen ? "bg-[#009689]/20" : "bg-slate-100"
                          }`}
                        >
                          <ChevronDown className="w-5 h-5" />
                        </div>
                      </span>
                    </button>

                    <div
                      className={`transition-all duration-300 ease-in-out ${
                        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-6 pb-6 text-slate-600 text-lg leading-relaxed">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default PricingPage;
