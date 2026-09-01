"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

// Sample gallery images
const galleryItems = [
  { image: "/slide1.jpg", title: "Luxury Villa" },
  { image: "/g1.jpg", title: "Modern Apartment" },
  { image: "/g2.jpg", title: "Cozy Cottage" },
  { image: "/slide2.jpg", title: "Beach House" },
  { image: "/slide3.jpg", title: "Penthouse" },
  { image: "/g2.jpg", title: "Urban Loft" },
];

export default function Gallery() {
  const [selectedIdx, setSelectedIdx] = useState(null);

  const closeModal = () => setSelectedIdx(null);
  const prevImage = () =>
    setSelectedIdx((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
  const nextImage = () =>
    setSelectedIdx((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1));

  return (
    <section className="w-full px-4 md:px-[10%] py-16 bg-black text-white">
      <h2 className=" text-2xl md:text-3xl font-semibold mb-10 text-center">
        Our Projects Gallery
      </h2>

      {/* Gallery */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {galleryItems.map((item, idx) => (
          <motion.div
            key={idx}
            className="relative mb-4 overflow-hidden cursor-pointer group"
            whileHover={{ scale: 1.02 }}
            onClick={() => setSelectedIdx(idx)}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <motion.h3
              className="absolute bottom-5 left-5 text-sm md:text-base font-medium text-white opacity-0 group-hover:opacity-100"
              initial={{ x: -20 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.3 }}
            >
              {item.title}
            </motion.h3>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative max-w-4xl w-full mx-4"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
            >
              <img
                src={galleryItems[selectedIdx].image}
                alt={galleryItems[selectedIdx].title}
                className="w-full h-auto object-contain rounded-md"
              />
              <h3 className="absolute bottom-6 left-6 text-white text-lg font-medium">
                {galleryItems[selectedIdx].title}
              </h3>

              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-white/20 transition"
              >
                <X size={24} />
              </button>

              {/* Prev Button */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full hover:bg-white/20 transition"
              >
                <ChevronLeft size={28} />
              </button>

              {/* Next Button */}
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full hover:bg-white/20 transition"
              >
                <ChevronRight size={28} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
