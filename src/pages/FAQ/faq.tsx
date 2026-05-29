
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const faqItems = [
  {
    question: "What types of healthcare practices use this platform?",
    answer:
      "Our platform is designed for GP practices, primary care clinics, medical aesthetics, med spas, cosmetic surgery, mental health services, physiotherapy, wellness centers, and more. If you see patients, manage appointments, and maintain clinical records, this solution is built for you.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "Most healthcare practices are fully operational within 7-14 business days. The platform is designed for easy configuration without technical expertise, and our support team guides you through every step.",
  },
  {
    question: "Is patient data stored securely and HIPAA compliant?",
    answer:
      "Yes. We use enterprise-grade encryption, secure infrastructure, and role-based access controls to protect patient information while ensuring your clinical team can access the right data when needed.",
  },
  {
    question: "Can this platform support multi-location practices?",
    answer:
      "Absolutely. Manage multiple clinic locations from a single platform with location-specific calendars, provider schedules, services, and reporting—all while maintaining centralized control over operations.",
  },
  {
    question: "Does this replace my existing healthcare software?",
    answer:
      "For most practices, yes. Our all-in-one platform combines appointment scheduling, electronic health records, billing, patient communications, and practice analytics in one connected system.",
  },
  {
    question: "What integrations are available for healthcare workflows?",
    answer:
      "Our platform integrates with leading healthcare tools including lab systems, e-prescribing platforms, accounting software, payment processors, and marketing tools to fit seamlessly into your existing clinical workflows.",
  },
  {
    question: "What support is available after implementation?",
    answer:
      "You receive dedicated onboarding support, ongoing training resources, and continuous assistance from our customer success team—ensuring your practice confidently adopts and maximizes the platform.",
  },
];

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((itemIndex) => itemIndex !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="bg-[#f2f2f2] py-[78px] md:py-[96px]">
      <div className="mx-auto w-full max-w-[760px] px-4 sm:px-6">
        <h2 className="mb-[52px] text-center text-[40px] leading-[1.1] font-normal tracking-[-0.02em] text-[#0f172a] md:text-[42px]">
          Frequently asked questions
        </h2>

        <div>
          {faqItems.map((item, index) => {
            const isOpen = openItems.includes(index);

            return (
              <div key={item.question}>
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => toggleItem(index)}
                  className="h-auto min-h-[54px] w-full justify-between rounded-none px-0 py-3 text-left text-[14px] leading-[1.35] font-normal text-[#111827] hover:bg-transparent"
                >
                  <span>{item.question}</span>

                  {isOpen ? (
                    <span className="flex size-[18px] items-center justify-center rounded-full bg-[#11a4c0] text-white">
                      <ChevronUp className="size-[12px]" />
                    </span>
                  ) : (
                    <ChevronDown className="size-[16px] text-[#374151]" />
                  )}
                </Button>

                {isOpen && (
                  <p className="pb-[14px] pr-8 text-[14px] leading-[1.75] text-[#6b8aa5]">
                    {item.answer}
                  </p>
                )}

                <Separator className="bg-[#d7d7d7]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;


