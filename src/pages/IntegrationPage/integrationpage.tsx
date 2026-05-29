"use client";

import { ArrowRight } from "lucide-react";

const IntegrationPage = () => {
  return (
    <div className="bg-white flex flex-col items-center">

      {/* ── Text block ─────────────────────────────────────────── */}
      <div className="w-full max-w-3xl text-center px-2 pt-0 pb-8">
        <p className="text-[11px] font-semibold tracking-[0.18em] text-gray-500 uppercase mb-3">
          Seamless connections
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
  Works seamlessly with your existing tools
</h2>
       <p className="text-sm text-gray-500 max-w-xl mx-auto leading-relaxed mb-6">
  Seamlessly integrate with your existing platforms to manage billing, prescribing, and operations—all from a single dashboard.
</p>
        <button className="inline-flex items-center gap-2 bg-gray-900 hover:bg-primary text-white text-sm font-medium rounded-full px-5 py-2.5 transition-colors">
          See all connections
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* ── Integration diagram image ───────────────────────────── */}
      <div className="w-full max-w-4xl px-4 pb-16">
        <img
          src="https://pabau.com/wp-content/uploads/2026/03/integrations-pabau.png"
          alt="Pabau integrations diagram"
          className="w-full h-auto object-contain"
          draggable={false}
        />
      </div>

    </div>
  );
};

export default IntegrationPage;
