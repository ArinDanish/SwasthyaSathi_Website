"use client";

import { useState } from "react";

export default function ProductGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Placeholder tiles — swap the gradient div for an <img> once screenshots are ready
  const images = [
    { id: 1, title: "Dashboard overview", description: "The main analytics dashboard" },
    { id: 2, title: "Patient check-in", description: "Smart check-in interface" },
    { id: 3, title: "Appointment scheduling", description: "Intelligent scheduling system" },
    { id: 4, title: "Clinical notes", description: "AI-assisted documentation" },
    { id: 5, title: "Reports & analytics", description: "Detailed clinic insights" },
    { id: 6, title: "Mobile app", description: "Access on the go" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="max-w-xl mb-12">
          <p className="eyebrow mb-4">Inside the product</p>
          <h2 className="section-title">A look at the screens</h2>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {images.map((image) => (
            <button
              key={image.id}
              onClick={() => setSelectedImage(image.id)}
              className="text-left cursor-pointer bg-[--sage] rounded-2xl overflow-hidden border border-[--line] hover:-translate-y-1 transition-transform h-52"
            >
              <div className="w-full h-full bg-gradient-to-br from-[--sage] to-[--teal]/20 flex items-center justify-center flex-col p-4">
                <p className="font-display font-semibold text-[--ink] text-center">
                  {image.title}
                </p>
                <p className="text-sm text-[--ash] text-center mt-1">
                  {image.description}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Image Upload Section */}
        <div className="bg-[--sand] border-2 border-dashed border-[--teal]/30 rounded-2xl p-10 text-center">
          <h3 className="font-display font-semibold text-lg text-[--ink] mb-2">
            Upload product images
          </h3>
          <p className="text-[--ash] mb-6 max-w-md mx-auto">
            Drag and drop real product screenshots here to replace these
            placeholders.
          </p>
          <button className="bg-[--ink] hover:bg-[--teal-deep] text-[--sand] font-semibold py-2.5 px-6 rounded-full transition">
            Choose files
          </button>
        </div>

        {/* Modal for full image view */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-[--ink]/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-5 border-b border-[--line]">
                <h3 className="font-display font-semibold text-[--ink]">
                  {images.find((img) => img.id === selectedImage)?.title}
                </h3>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="text-[--ash] hover:text-[--ink] text-2xl leading-none"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>
              <div className="bg-[--sage] h-80 flex items-center justify-center">
                <p className="text-[--ash]">Image placeholder</p>
              </div>
              <div className="p-5 bg-[--sand] border-t border-[--line]">
                <p className="text-[--ash]">
                  {images.find((img) => img.id === selectedImage)?.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
