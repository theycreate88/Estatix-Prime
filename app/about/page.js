"use client";
 import { useState } from "react";
import { motion } from "framer-motion";
import WhyChoose from "@/components/WhyChoose";
import Header from "@/components/Header";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import AboutDetails from "@/components/AboutDetails";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
export default function About() {
  
 
   return (
     <>
        
       <ScrollToTopButton />
    <section
      className="relative w-full h-[60vh] bg-cover bg-center"
      style={{ backgroundImage: "url('/slide1.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute bottom-10 left-[10%] z-20"
      >
        <h1 className="text-3xl md:text-4xl font-light text-white tracking-wide relative inline-block">
          About Us
          {/* Yellow Underline */}
          <motion.span
            className="absolute left-0 -bottom-1 h-[2px] bg-yellow-400"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </h1>
      </motion.div>
    </section>
     {/* Sections Below Hero */}
         <div className="relative z-0">
           <WhyChoose />
          <AboutDetails/>
          <Team/>
          <Testimonials/>
         </div>
         </>
  );
}
