"use client";
import { motion } from "framer-motion";

const features = [
  {
    image: "/slide1.jpg",
    title: "Interior Design",
    description: "Spaces that blend comfort, luxury, and functionality.",
    action: "Explore Interiors",
    link: "/interior", // 🔗 link for this box
  },
  {
    image: "/slide2.jpg",
    title: "Concept Planning",
    description: "Innovative ideas turned into reality with precision.",
    action: "View Concepts",
    link: "/concepts", // 🔗 link for this box
  },
  {
    image: "/slide3.jpg",
    title: "Architecture",
    description: "Designs that combine aesthetics with practicality.",
    action: "See Architecture",
    link: "/architecture", // 🔗 link for this box
  },
];

export default function FeatureBoxes() {
  return (
    <section className="w-full bg-black text-white">
      <motion.div
        className="grid md:grid-cols-3 grid-cols-1"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {features.map((feature, idx) => (
          <a
            key={idx}
            href={feature.link}
            className="relative flex flex-col items-center justify-center h-[420px] text-center overflow-hidden group"
            style={{
              backgroundImage: `url(${feature.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Dark overlay (box hover only) */}
            <div className="absolute inset-0 bg-black/60 z-0 transition-all duration-500 group-hover:bg-black/70"></div>

            {/* Content */}
            <div className="relative z-10 px-6">
              <h3 className="text-lg font-semibold mb-2 text-yellow-400 tracking-wide">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-300 mb-6 font-light">
                {feature.description}
              </p>

              {/* Button with hover only on itself */}
             <button className="relative px-6 py-2 border border-yellow-400 text-yellow-400 font-medium  overflow-hidden group bg-transparent">
  {/* Animated fill background (invisible by default) */}
  <span className="absolute inset-0 bg-yellow-400 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></span>

  {/* Text */}
  <span className="relative z-10 transition-colors duration-700 group-hover:text-black">
    {feature.action}
  </span>
</button>

            </div>
          </a>
        ))}
      </motion.div>
    </section>
  );
}
