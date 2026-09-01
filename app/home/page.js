"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Home1 from "@/components/Home1";
import Home2 from "@/components/Home2";
import WhyChoose from "@/components/WhyChoose";
import FeatureBoxes from "@/components/FeatureBoxes";
import Gallery from "@/components/Gallery";

export default function HomePage() {
  const [selectedHome, setSelectedHome] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleChangeHome = (home) => {
    if (home === selectedHome || isTransitioning) return;
    setIsTransitioning(true);

    setTimeout(() => setSelectedHome(home), 400);
    setTimeout(() => setIsTransitioning(false), 800);
  };

  return (
    <>
      <ScrollToTopButton />

      {/* Hero Section */}
      <div className="relative w-full overflow-hidden bg-black z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedHome}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="w-full relative bg-black"
          >
            {selectedHome === 1 ? <Home1 /> : <Home2 />}
          </motion.div>
        </AnimatePresence>

        {/* Black Fade Overlay */}
        <motion.div
          animate={{ opacity: isTransitioning ? 1 : 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 bg-black z-30 pointer-events-none"
        />
      </div>

      {/* Sections Below Hero */}
      <div className="relative z-0">
        <WhyChoose />
        <Gallery />
        <FeatureBoxes />
      </div>
    </>
  );
}
