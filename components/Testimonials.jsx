"use client";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Alice Johnson",
    role: "Homeowner",
    feedback:
      "EstatixPrime helped me find the perfect home effortlessly. Professional and attentive.",
    img: "/team1.jpg",
  },
  {
    name: "Mark Smith",
    role: "Investor",
    feedback:
      "Amazing service and properties. My investment process was smooth and rewarding.",
    img: "/team2.jpg",
  },
  {
    name: "Sophia Lee",
    role: "Designer",
    feedback:
      "They truly understand clients’ needs and deliver refined, thoughtful experiences.",
    img: "/team3.jpg",
  },
  {
    name: "John Doe",
    role: "Entrepreneur",
    feedback:
      "Highly recommend — premium listings, responsive support, and absolute professionalism.",
    img: "/team1.jpg",
  },
  {
    name: "Emma White",
    role: "Agent",
    feedback:
      "A seamless experience from start to finish. Elegant properties and top-tier service.",
    img: "/team2.jpg",
  },
];

export default function Testimonials() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative w-full py-16 bg-black">
      <h2 className="text-center text-white text-3xl md:text-4xl font-light mb-10">
        What Our Clients Say
      </h2>

      {/* Container */}
      <div
        className={`flex ${
          isMobile ? "overflow-x-auto snap-x scrollbar-hide px-4" : "justify-center gap-4 flex-wrap"
        }`}
      >
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className={`flex-shrink-0 flex flex-col items-center text-center bg-[#111] border border-[#222] rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 ${
              isMobile ? "w-72 snap-center" : "w-64"
            }`}
          >
            <img
              src={t.img}
              alt={t.name}
              className="w-16 h-16 rounded-full object-cover border border-[#d4af37] mb-3"
            />
            <p className="italic text-gray-300 text-sm mb-3">“{t.feedback}”</p>
            <h3 className="font-medium text-white text-base">{t.name}</h3>
            <p className="text-xs text-[#d4af37] tracking-wide">{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
