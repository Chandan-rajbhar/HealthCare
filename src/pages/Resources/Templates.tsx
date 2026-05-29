import React from "react";
import { Download, Calendar } from "lucide-react";

// --- Types ---
interface TemplateData {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: { label: string; color: string }[];
  author: { name: string; avatar: string };
  downloads: number;
  date: string;
}

// --- Mock Data ---
const templates: TemplateData[] = [
  {
    id: 1,
    title: "Medical Spa Business Plan Template",
    description:
      "Launching a medical spa without a formal business plan is one of the highest-ris...",
    image: "/api/placeholder/400/300", // Replace with actual image
    tags: [{ label: "UNCATEGORIZED", color: "bg-cyan-50 text-cyan-500" }],
    author: { name: "Katy Piper", avatar: "/api/placeholder/32/32" },
    downloads: 20,
    date: "April 23, 2026",
  },
  {
    id: 2,
    title: "Riso Hudson Enneagram Test Template",
    description:
      "Download Your Free Riso Hudson Enneagram Test (Sampler) Riso Hudson Enneagram Te...",
    image: "/api/placeholder/400/300",
    tags: [
      { label: "MENTAL HEALTH & THERAPY", color: "bg-cyan-400 text-white" },
      { label: "PSYCHOLOGY", color: "bg-indigo-500 text-white" },
    ],
    author: { name: "Katy Piper", avatar: "/api/placeholder/32/32" },
    downloads: 24,
    date: "April 23, 2026",
  },
  {
    id: 3,
    title: "Infertility Consultation Notes Template",
    description:
      "Fertility clinics face a unique documentation challenge: capturing complex repro...",
    image: "/api/placeholder/400/300",
    tags: [
      { label: "FERTILITY", color: "bg-amber-400 text-white" },
      {
        label: "REPRODUCTIVE & SEXUAL HEALTH",
        color: "bg-cyan-50 text-cyan-500",
      },
    ],
    author: { name: "Katy Piper", avatar: "/api/placeholder/32/32" },
    downloads: 16,
    date: "April 23, 2026",
  },
];

// --- Sub-Component: Card ---
const TemplateCard: React.FC<{ item: TemplateData }> = ({ item }) => {
  return (
    <div className="flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
      {/* Top Image Section */}
      <div className="relative aspect-[4/3] bg-amber-50 p-6 flex items-center justify-center">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-contain rounded shadow-lg border border-gray-200"
        />
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Title & Text */}
        <h3 className="text-xl font-sans text-slate-800 mb-3 leading-snug cursor-pointer hover:text-cyan-600 transition-colors">
          {item.title}
        </h3>
        <p className="text-gray-500 text-sm mb-6 line-clamp-2 leading-relaxed">
          {item.description}
        </p>

        {/* Footer */}
        <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-50">
          <div className="flex items-center gap-2">
            <span className="text-xs font-sans text-gray-600">
              {item.author.name}
            </span>
          </div>

          <div className="flex items-center gap-4 text-gray-400">
            <div className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded">
              <Download size={14} />
              <span className="text-[10px] font-sans text-slate-600">
                {item.downloads} downloads
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span className="text-[10px] font-sans">{item.date}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main Page ---
export default function Templates() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates.map((item) => (
            <TemplateCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
