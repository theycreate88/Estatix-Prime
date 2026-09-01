"use client";

import Gallery from "@/components/Gallery";
import WhyChoose from "@/components/WhyChoose";
import Testimonials from "@/components/Testimonials";
export default function Home2() {
  return (
    <>
    <section
      className="relative min-h-[80vh] flex items-center justify-start bg-cover bg-center"
      style={{ backgroundImage: "url('/slide2.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-10" />

      {/* Content */}
      <div className="relative z-20 text-left text-white px-6 md:px-20 max-w-xl">
        <h1 className="text-3xl md:text-4xl font-light mb-3 tracking-tight">
          Discover Modern Living
        </h1>
        <p className="text-gray-400 text-sm md:text-base mb-6">
          Experience urban elegance and comfort in our handpicked modern apartments across the city.
        </p>

        <button className="relative group px-8 py-2 border border-yellow-400 text-sm font-medium text-yellow-400 overflow-hidden transition-colors duration-500">
          <span className="absolute inset-0 bg-yellow-400 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
          <span className="relative z-10 group-hover:text-black transition-colors duration-500">
            View Listings
          </span>
        </button>
      </div>
    </section>
      
          <div className="relative z-0">
            <WhyChoose/>
            <Gallery/>
            <Testimonials />
          </div>
        </>
  );
}
