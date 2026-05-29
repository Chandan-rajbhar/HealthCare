"use client";

import { useRef, useEffect, useState } from "react";
// import "/.index.css";  

// ─── Scroll Velocity Marquee ───────────────────────────────────────────────
function ScrollVelocityMarquee({ items }: { items: React.ReactNode[] }) {
  const [offset, setOffset] = useState(0);
  const velocityRef = useRef(1);
  const lastScrollY = useRef(0);
  const lastTime = useRef(Date.now());
  const rafRef = useRef<number | null>(null);
  const baseSpeed = 0.18;

  useEffect(() => {
    const handleScroll = () => {
      const now = Date.now();
      const dt = Math.max(now - lastTime.current, 1);
      const dy = Math.abs(window.scrollY - lastScrollY.current);
      velocityRef.current = Math.max(1, Math.min((dy / dt) * 8, 5));
      lastScrollY.current = window.scrollY;
      lastTime.current = now;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    let prev = performance.now();
    const tick = (now: number) => {
      const dt = now - prev;
      prev = now;
      setOffset((o) => {
        const next = o - baseSpeed * velocityRef.current * (dt / 16);
        return next <= -50 ? 0 : next;
      });
      velocityRef.current = Math.max(1, velocityRef.current * 0.985);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current!);
  }, []);

  const repeated = [...items, ...items];

  return (
    <div className="marquee-outer">
      <div
        className="marquee-inner"
        style={{ transform: `translateX(${offset}%)` }}
      >
        {repeated.map((item, i) => (
          <div key={i} className="marquee-item">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Badges ───────────────────────────────────────────────────────────────
const badgeData = [
  { label: "Software Advice\nFRONT RUNNERS\n2024", colorClass: "badge-orange" },
  { label: "Capterra\nSHORTLIST\n2024", colorClass: "badge-blue" },
  { label: "Software Advice\nCUSTOMER SUPPORT\n2024", colorClass: "badge-green" },
];

function Badge({ label, colorClass }: { label: string; colorClass: string }) {
  const lines = label.split("\n");
  return (
    <div className={`hc-badge ${colorClass}`}>
      <div className="badge-bar" />
      <div className="badge-text-wrap">
        {lines.map((l, i) => (
          <div key={i} className={`badge-line ${i === 1 ? "badge-line-accent" : "badge-line-muted"}`}>
            {l}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Logos ────────────────────────────────────────────────────────────────
const LogoSsex = () => (
  <div className="logo-ssex">
    <svg width="40" height="26" viewBox="0 0 36 22" fill="none">
      <circle cx="8" cy="7" r="3" fill="#9ca3af" opacity="0.55" />
      <circle cx="18" cy="7" r="3" fill="#9ca3af" opacity="0.55" />
      <circle cx="28" cy="7" r="3" fill="#9ca3af" opacity="0.55" />
      <circle cx="13" cy="15" r="3" fill="#9ca3af" opacity="0.55" />
      <circle cx="23" cy="15" r="3" fill="#9ca3af" opacity="0.55" />
    </svg>
    <div className="logo-ssex-name">ssex Private GP Clinic</div>
    <div className="logo-ssex-sub">Part of Paediatric Diagnostics</div>
  </div>
);

const LogoFemaleHealth = () => (
  <div className="logo-serif logo-female">
    The Female<br />Health Clinic
  </div>
);

const LogoDrNyla = () => (
  <div className="logo-drnyla">
    <div className="logo-drnyla-name">DR.NYLA</div>
    <div className="logo-drnyla-sub">MEDISPA</div>
  </div>
);

const LogoSkn = () => (
  <div className="logo-skn">sk:n</div>
);

const LogoSarahChapman = () => (
  <div className="logo-sarah">
    <div className="logo-sarah-name">SARAH<br />CHAPMAN</div>
    <div className="logo-sarah-sub">London</div>
  </div>
);

const logos = [
  <LogoSsex key="ssex" />,
  <LogoFemaleHealth key="female" />,
  <LogoDrNyla key="dr" />,
  <LogoSkn key="skn" />,
  <LogoSarahChapman key="sarah" />,
];

// ─── Page ─────────────────────────────────────────────────────────────────
export default function HealthCarePage() {
  return (
    <div className="hc-page">
      <div className="hc-dot-bg" />
      <div className="hc-card-wrap">
        {/* Left section */}
        <div className="hc-left">
          <h1 className="hc-headline">
              Backed by 15,200+ medical teams

            <br />
            One platform for seamless patient journeys


          </h1>
          <div className="hc-badges">
            {badgeData.map((b, i) => (
              <Badge key={i} label={b.label} colorClass={b.colorClass} />
            ))}
          </div>
        </div>

        <div className="hc-divider" />

        {/* Right section */}
        <ScrollVelocityMarquee
          items={logos.map((logo, i) => (
            <div key={i} className="hc-logo-wrap">
              {logo}
            </div>
          ))}
        />
      </div>
    </div>
  );
}