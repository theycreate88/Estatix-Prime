"use client";
import { motion } from "framer-motion";

export default function Home1() {
  return (
    <section
      className="relative min-h-[80vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/slide1.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center text-white px-6"
      >
        <h1 className="text-3xl md:text-4xl font-light mb-3 tracking-tight">
          Find Your Dream Home
        </h1>
        <p className="text-sm md:text-base mb-5 max-w-xl mx-auto text-gray-200">
          Explore exclusive listings of luxury homes and modern apartments designed for your lifestyle.
        </p>

     <motion.a
  href="/projects"
  whileHover={{}}
  className="relative group px-8 py-2 border border-yellow-400 text-sm font-medium text-yellow-400 overflow-hidden transition-colors duration-500 inline-block cursor-pointer"
>
  <span className="absolute inset-0 bg-yellow-400 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
  <span className="relative z-10 group-hover:text-black transition-colors duration-500">
    Browse Properties
  </span>
</motion.a>


      </motion.div>
    </section>
  );
}
