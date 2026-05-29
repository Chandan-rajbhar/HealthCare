"use client";

import { useEffect, useRef, useState } from "react";

export default function PabauAIPage() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (!sectionRef.current) {
            ticking = false;
            return;
          }

          const rect = sectionRef.current.getBoundingClientRect();
          const vh = window.innerHeight;

          // Start when the section starts entering from bottom.
          // Complete only when section bottom reaches viewport bottom.
          const startTop = vh * 0.9;
          const endTop = vh - rect.height;
          const travel = startTop - endTop;
          const rawProgress = travel <= 0 ? 1 : (startTop - rect.top) / travel;
          const clamped = Math.min(1, Math.max(0, rawProgress));

          setProgress(clamped);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const containerWidth = 78 + progress * 22;
  const containerScale = 0.8 + progress * 0.2;
  const containerTranslateY = (1 - progress) * 110;
  const containerRadius = 54 - progress * 40;
  const containerOpacity = 0.74 + progress * 0.26;

  return (
    <section ref={sectionRef} className="relative py-8 md:py-12">
      <div
        className="relative mx-auto min-h-screen overflow-hidden bg-[#02081c]"
        style={{
          width: `${containerWidth}vw`,
          borderRadius: `${containerRadius}px`,
          opacity: containerOpacity,
          transform: `translateY(${containerTranslateY}px) scale(${containerScale})`,
          transformOrigin: "center bottom",
          transition:
            "width 0.2s ease-out, border-radius 0.2s ease-out, transform 0.2s cubic-bezier(0.2, 0.9, 0.25, 1), opacity 0.2s ease-out",
          willChange: "transform, width, border-radius, opacity"
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_100%,rgba(46,61,107,0.42)_0%,rgba(10,18,45,0.72)_52%,rgba(2,8,28,1)_88%)]" />
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[210px] h-[820px] w-[1700px] -translate-x-1/2 rounded-[999px] bg-[radial-gradient(ellipse_at_center,rgba(72,81,122,0.24)_0%,rgba(30,39,79,0.18)_36%,rgba(7,13,33,0)_68%)]" />
          <div className="absolute left-[8%] top-[150px] h-1.5 w-1.5 rounded-full bg-white/45" />
          <div className="absolute left-[21%] top-[268px] h-1 w-1 rounded-full bg-white/40" />
          <div className="absolute right-[14%] top-[198px] h-1 w-1 rounded-full bg-white/35" />
          <div className="absolute right-[27%] top-[350px] h-1.5 w-1.5 rounded-full bg-white/30" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1220px] px-5 pb-16 pt-10 md:px-8 md:pt-14">
          <div className="mb-9 flex flex-col items-center">
            <div className="relative mb-6 h-[126px] w-[126px] rounded-full bg-[#0f1328] ring-1 ring-white/10 shadow-[0_0_0_12px_rgba(18,31,72,0.45),0_0_42px_rgba(50,146,255,0.35)]">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 48 48" className="h-14 w-14" fill="none">
                  {[
                    [12, 12], [24, 9], [36, 12],
                    [9, 24], [24, 24], [39, 24],
                    [12, 36], [24, 39], [36, 36]
                  ].map(([cx, cy], i) => (
                    <circle key={i} cx={cx} cy={cy} r="3" fill="white" opacity={i === 4 ? 1 : 0.85} />
                  ))}
                </svg>
              </div>
            </div>

           <div className="mb-3 text-center text-[41px] font-semibold leading-[1.18] tracking-[-0.02em] text-[#eef1fa] md:text-[48px]">
  <span className="bg-gradient-to-r from-[#3f74ff] via-[#24a9ff] to-[#07c4ff] bg-clip-text text-transparent">AI-powered</span>
  <span> solutions for everyday healthcare practice</span>
</div>

           <button className="rounded-xl bg-[#f5f7fb] px-6 py-3 text-[22px] font-semibold text-[#111827] shadow-[0_8px_30px_rgba(255,255,255,0.18)] transition duration-200 hover:bg-white">
  Transform care with AI
</button>
          </div>

          <div className="rounded-[22px] border border-white/10 bg-[linear-gradient(145deg,rgba(18,24,56,0.85)_0%,rgba(9,14,35,0.92)_100%)] p-7 md:p-9 shadow-[0_26px_70px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.06)]">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div>
                <div className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#b68cff]">AI SCRIBE AGENT</div>
                <h2 className="mb-4 text-[39px] font-semibold leading-[1.08] tracking-[-0.02em] text-[#f4f6fb]">
                  Turn voice into structured clinical notes
                </h2>
                <p className="max-w-[520px] text-[17px] leading-[1.6] text-[#aeb8d2]">
                  AI listens during your consultation and generates structured treatment notes and consult summaries. You focus on the patient, not the screen.
                </p>
              </div>
              <div className="rounded-[18px] border border-white/10 bg-[linear-gradient(140deg,rgba(16,22,49,0.95)_0%,rgba(6,10,28,0.96)_100%)] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_20px_60px_rgba(0,0,0,0.45)]">
                <div className="mb-5 inline-flex items-center rounded-full border border-[#1f86d8] bg-[#142442] px-4 py-2 text-[14px] text-[#c8d2ea]">
                  <span className="mr-2 h-2.5 w-2.5 rounded-full bg-[#fc567f]" />
                 AI is documenting clinical notes...
                </div>
                <svg viewBox="0 0 260 60" className="mx-auto w-full max-w-[320px]">
                  {[6, 12, 18, 8, 22, 28, 14, 32, 20, 10, 26, 30, 16, 24, 12, 18, 28, 14, 20, 8, 22, 16, 26, 12, 18, 24, 10, 20, 14, 28].map((h, idx) => {
                    const x = idx * 8 + 6;
                    const y = (60 - h) / 2;
                    return (
                      <rect
                        key={idx}
                        x={x}
                        y={y}
                        width="5"
                        height={h}
                        rx="3"
                        className="fill-white/90"
                        style={{
                          animation: "gentleBounce 1.2s infinite alternate",
                          animationDelay: `${0.45 + (idx % 6) * 0.07}s`,
                          transformOrigin: "center"
                        }}
                      />
                    );
                  })}
                </svg>
              </div>
            </div>
          </div>

          <div className="mt-7 grid gap-6 md:grid-cols-2">
            <div className="rounded-[22px] border border-white/10 bg-[linear-gradient(145deg,rgba(16,22,50,0.88)_0%,rgba(8,12,32,0.92)_100%)] p-7 shadow-[0_24px_60px_rgba(0,0,0,0.52),inset_0_1px_0_rgba(255,255,255,0.06)]">
              <div className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#b68cff]">PRESCRIBING AGENT</div>
              <img
                src="https://pabau.com/wp-content/uploads/2026/03/ai-scribe-1.webp"
                alt="Prescribing Agent"
                className="mb-4 w-full rounded-[16px] border border-white/10"
              />
              <p className="text-[17px] leading-[1.6] text-[#aeb8d2]">
                Real-time safety checks run automatically against the patient record so prescriptions are accurate, every time.
              </p>
            </div>

            <div className="rounded-[22px] border border-white/10 bg-[linear-gradient(145deg,rgba(16,22,50,0.88)_0%,rgba(8,12,32,0.92)_100%)] p-7 shadow-[0_24px_60px_rgba(0,0,0,0.52),inset_0_1px_0_rgba(255,255,255,0.06)]">
              <div className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-[#b68cff]">LETTERS AGENT</div>
              <img
                src="https://pabau.com/wp-content/uploads/2026/03/ai-scribe-2.webp"
                alt="Letters Agent"
                className="mb-4 w-full rounded-[16px] border border-white/10"
              />
              <p className="text-[17px] leading-[1.6] text-[#aeb8d2]">
                Generate referral letters, summaries, and patient communications instantly. Drafted from the patient record and ready to send.
              </p>
            </div>
          </div>
        </div>

      <style>{`
        @keyframes gentleBounce {
          0% { transform: scaleY(0.85); opacity: 0.6; }
          100% { transform: scaleY(1.15); opacity: 1; }
        }
      `}</style>
      </div>
    </section>
  );
}