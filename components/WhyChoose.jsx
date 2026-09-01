"use client";
import { motion } from "framer-motion";

export default function WhyChoose() {
  return (
    <section className="relative w-full py-16 px-6 bg-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center"
      >
        {/* Left Side - Heading */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-3 border-l-2 border-yellow-400 pl-3 tracking-tight">
            Why Choose EstatixPrime?
          </h2>
          <p className="text-sm text-gray-300">
            Trusted listings, premium properties, and personalized experiences.
          </p>
        </div>

        {/* Right Side - Description */}
        <div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Finding your ideal home goes beyond browsing listings — it’s about discovering
            the lifestyle you deserve. EstatixPrime connects you with verified agents,
            advanced filters, virtual tours, and instant updates. From luxury villas to
            modern city apartments, we make your journey seamless, secure, and inspiring.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
