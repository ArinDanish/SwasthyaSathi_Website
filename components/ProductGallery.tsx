"use client";

import { useState } from "react";

const images = [
  { id: 1, title: "Dashboard overview", description: "Main analytics & clinic KPIs at a glance", icon: "📊" },
  { id: 2, title: "Patient check-in", description: "AI-guided smart check-in flow", icon: "✅" },
  { id: 3, title: "Appointment scheduling", description: "Intelligent calendar & slot management", icon: "📅" },
  { id: 4, title: "Clinical notes", description: "Real-time AI-assisted documentation", icon: "📋" },
  { id: 5, title: "Reports & analytics", description: "Deep-dive clinic performance insights", icon: "📈" },
  { id: 6, title: "Mobile access", description: "Full functionality on any device", icon: "📱" },
];

const gradients = [
  "linear-gradient(135deg, #1b4f9c 0%, #3eaee0 100%)",
  "linear-gradient(135deg, #3eaee0 0%, #7acfef 100%)",
  "linear-gradient(135deg, #0f3270 0%, #1b4f9c 100%)",
  "linear-gradient(135deg, #1d8bbf 0%, #3eaee0 100%)",
  "linear-gradient(135deg, #2d69c4 0%, #7acfef 100%)",
  "linear-gradient(135deg, #1b4f9c 0%, #2d69c4 100%)",
];

export default function ProductGallery() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const selectedImage = images.find((img) => img.id === selectedId);

  return (
    <section className="py-20" style={{ background: "#ffffff" }}>
      <div className="container">
        <div className="max-w-xl mb-12">
          <p className="eyebrow mb-4">Inside the product</p>
          <h2 className="section-title">A look at the screens</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, i) => (
            <button
              key={image.id}
              onClick={() => setSelectedId(image.id)}
              className="text-left rounded-2xl overflow-hidden h-52 relative group cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              style={{
                background: gradients[i],
                boxShadow: "0 4px 16px rgba(27,79,156,0.15)",
              }}
            >
              {/* Grid pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />

              <div className="relative h-full flex flex-col items-center justify-center p-5">
                <span className="text-3xl mb-3">{image.icon}</span>
                <p className="font-display font-bold text-white text-center text-lg">
                  {image.title}
                </p>
                <p className="text-sm text-white/70 text-center mt-1">
                  {image.description}
                </p>

                {/* Hover cue */}
                <div
                  className="absolute bottom-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0"
                  style={{ background: "rgba(255,255,255,0.2)" }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M15 3h6v6M14 10l7-7M9 21H3v-6M10 14l-7 7"/>
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-200"
            style={{ background: "rgba(14,37,64,0.8)", backdropFilter: "blur(8px)" }}
            onClick={() => setSelectedId(null)}
          >
            <div
              className="bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl transition-all duration-300"
              style={{ boxShadow: "0 32px 64px rgba(14,37,64,0.4)" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal header */}
              <div
                className="flex items-center justify-between px-6 py-4 border-b"
                style={{ borderColor: "#dcedf8" }}
              >
                <h3 className="font-display font-bold text-lg" style={{ color: "#0e2540" }}>
                  {selectedImage.title}
                </h3>
                <button
                  onClick={() => setSelectedId(null)}
                  className="w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:bg-[#f0f7ff]"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5a7a96" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M18 6 6 18M6 6l12 12"/>
                  </svg>
                </button>
              </div>

              {/* Placeholder screen */}
              <div
                className="h-72 flex flex-col items-center justify-center"
                style={{
                  background:
                    gradients[images.findIndex((img) => img.id === selectedId)],
                }}
              >
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                  }}
                />
                <span className="text-5xl mb-3">{selectedImage.icon}</span>
                <p className="text-white font-display font-bold text-xl">{selectedImage.title}</p>
                <p className="text-white/60 text-sm mt-2">Screenshot coming soon</p>
              </div>

              <div className="p-5" style={{ background: "#f5f9fd" }}>
                <p style={{ color: "#5a7a96" }}>{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
