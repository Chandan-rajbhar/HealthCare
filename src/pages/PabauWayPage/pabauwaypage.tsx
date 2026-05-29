"use client";
import { 
  CalendarDays,      //  - for bookings/scheduling
  Settings2,         //  - for automation/admin
  Eye,              
  TrendingUp,
  Check,   
} from "lucide-react";
import { ArrowRight } from "lucide-react";
const pabauWayItems = [
  { 
    icon: CalendarDays, 
    text: "Bookings, records, and payments in one place", 
    iconBg: "pabau-icon-orange" 
  },
  { 
    icon: Settings2, 
    text: "Automate admin. Focus on patients.", 
    iconBg: "pabau-icon-purple" 
  },
  { 
    icon: Eye, 
    text: "Real-time visibility across your practice", 
    iconBg: "pabau-icon-yellow" 
  },
  { 
    icon: TrendingUp, 
    text: "Scale your practice without the headaches", 
    iconBg: "pabau-icon-blue" 
  },
];

export default function PabauWayPage() {
  return (
    <div className="pabau-page">
      <h2 className="pabau-page-title">The smarter way to run your clinic</h2>

      <div className="pabau-columns">

        {/* ══ LEFT: The old way ══ */}
        <div className="old-way-card">
          <h3 className="old-way-title">The old way</h3>
          <p className="old-way-subtitle">Scattered tools, constant friction</p>

          <div className="old-way-svg-wrap">
            {/*
              SVG viewBox: 380 × 420
              Items:
                0 – grid icon   x=150 y=20   (top-center)
                1 – dot+pill    x=55  y=130  (left)
                2 – cross+pill  x=165 y=215  (right)
                3 – dot+pill    x=55  y=300  (left)
                4 – grid icon   x=150 y=370  (bottom-center)
            */}
            <svg
              className="old-way-svg"
              viewBox="0 0 380 430"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* ── dashed curved paths ── */}
              {/* 0 → 1 */}
              <path d="M 155 66 C 130 95, 90 105, 68 128"
                stroke="#b0bec5" strokeWidth="1.5" strokeDasharray="5 4"/>
              {/* 1 → 2 */}
              <path d="M 84 138 C 120 138, 148 175, 165 213"
                stroke="#b0bec5" strokeWidth="1.5" strokeDasharray="5 4"/>
              {/* 2 → 3 */}
              <path d="M 165 228 C 145 255, 100 270, 74 298"
                stroke="#b0bec5" strokeWidth="1.5" strokeDasharray="5 4"/>
              {/* 3 → 4 */}
              <path d="M 74 312 C 95 340, 130 358, 152 370"
                stroke="#b0bec5" strokeWidth="1.5" strokeDasharray="5 4"/>

              {/* ── Item 0: grid icon top-center ── */}
              <g transform="translate(128,20)">
                <rect width="48" height="48" rx="11"
                  fill="white" stroke="#d1d5db" strokeWidth="1.5" strokeDasharray="4 3"/>
                <text x="24" y="31" textAnchor="middle" fontSize="20" fill="#9ca3af">⊞</text>
              </g>
              {/* pill beside item 0 */}
              <rect x="182" y="26" width="185" height="36" rx="18"
                fill="white" stroke="#e5e7eb" strokeWidth="1"/>
              <text x="274" y="44" textAnchor="middle" fontSize="12" fill="#374151">Juggling tools that don't talk</text>
              <text x="274" y="58" textAnchor="middle" fontSize="12" fill="#374151">to each other</text>

              {/* ── Item 1: dot + pill — left ── */}
              <circle cx="60" cy="135" r="11" fill="#e5e7eb" stroke="#d1d5db" strokeWidth="1"/>
              <rect x="80" y="119" width="240" height="34" rx="17"
                fill="white" stroke="#e5e7eb" strokeWidth="1"/>
              <text x="200" y="141" textAnchor="middle" fontSize="12" fill="#374151">
                Manual admin and chasing patients
              </text>

              {/* ── Item 2: cross + pill — right ── */}
              <circle cx="160" cy="220" r="12" fill="#fee2e2" stroke="#fca5a5" strokeWidth="1"/>
              <text x="160" y="225" textAnchor="middle" fontSize="12" fill="#ef4444">✕</text>
              <rect x="180" y="204" width="190" height="34" rx="17"
                fill="white" stroke="#e5e7eb" strokeWidth="1"/>
              <text x="275" y="226" textAnchor="middle" fontSize="12" fill="#374151">
                No visibility across the practice
              </text>

              {/* ── Item 3: dot + pill — left ── */}
              <circle cx="60" cy="305" r="11" fill="#e5e7eb" stroke="#d1d5db" strokeWidth="1"/>
              <rect x="80" y="289" width="240" height="34" rx="17"
                fill="white" stroke="#e5e7eb" strokeWidth="1"/>
              <text x="200" y="311" textAnchor="middle" fontSize="12" fill="#374151">
                Growth adds complexity, not control
              </text>

              {/* ── Item 4: grid icon bottom-center ── */}
              <g transform="translate(128,370)">
                <rect width="48" height="48" rx="11"
                  fill="white" stroke="#d1d5db" strokeWidth="1.5" strokeDasharray="4 3"/>
                <text x="24" y="31" textAnchor="middle" fontSize="20" fill="#9ca3af">⊞</text>
              </g>
            </svg>
          </div>
        </div>

        {/* ══ CENTRE connector ══ */}
        <div className="pabau-connector">
          {/* dashed line LEFT side — connects to old-way card */}
          <div className="pabau-connector-line pabau-connector-line--left" />

         <div className="pabau-connector-icon">
  <ArrowRight className="h-6 w-6 text-white" strokeWidth={2.5} />
</div>

          {/* dashed line RIGHT side — connects to pabau-way card */}
          <div className="pabau-connector-line pabau-connector-line--right" />
        </div>

        {/* ══ RIGHT: The Pabau way ══ */}
        <div className="pabau-way-card">
          <div className="pabau-way-header">
            <h3 className="pabau-way-title">
              The smarter way
            </h3>
            <p className="pabau-way-subtitle">
              <span className="pabau-check">
  <Check className="h-4 w-4" />
</span> Scale confidently with a single platform

            </p>
          </div>

          <div className="pabau-way-items">
            {pabauWayItems.map((item, i) => (
              <div key={i} className="pabau-way-item">
                <span className={`pabau-way-item-icon ${item.iconBg}`}>
  <item.icon className="h-5 w-5" />
</span>
                <span className="pabau-way-item-text">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
