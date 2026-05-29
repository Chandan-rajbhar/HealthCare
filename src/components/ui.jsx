import { teal, tealLight } from "./tokens";

export function MegaMenu({ children }) {
  return (
    <div
      style={{
        position: "absolute",
        top: "100%",
        left: "50%",
        transform: "translateX(-50%)",
        background: "#fff",
        border: "1px solid #e2e8f0",
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
        padding: "20px 24px",
        minWidth: 860,
        zIndex: 100,
        animation: "fadeIn 0.15s ease",
      }}
    >
      <style>{`@keyframes fadeIn{from{opacity:0;transform:translateX(-50%) translateY(-6px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}`}</style>
      {children}
    </div>
  );
}

export function SectionLabel({ children }) {
  return (
    <div style={{ fontSize: 11, fontWeight: 700, color: "#94a3b8", letterSpacing: "0.08em", marginBottom: 8, marginTop: 2 }}>
      {children}
    </div>
  );
}

export function FeatureItem({ icon, name, desc }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "8px 0", cursor: "pointer" }}>
      <div style={{ width: 32, height: 32, flexShrink: 0, background: tealLight, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>
        {icon}
      </div>
      <div>
        <div style={{ fontWeight: 500, fontSize: 14 }}>{name}</div>
        <div style={{ fontSize: 12, color: "#64748b" }}>{desc}</div>
      </div>
    </div>
  );
}

export function MenuLink({ label }) {
  return (
    <div style={{ fontSize: 14, color: "#374151", padding: "5px 0", cursor: "pointer" }}>
      {label}
    </div>
  );
}

export function IconBox({ icon }) {
  return (
    <div style={{ width: 32, height: 32, flexShrink: 0, background: tealLight, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>
      {icon}
    </div>
  );
}
