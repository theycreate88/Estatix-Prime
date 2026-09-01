"use client";
import Link from "next/link";

export default function AboutDetails() {
  const sections = [
    {
      title: "Who We Are",
      text: "EstatixPrime delivers curated real estate experiences. Modern design, comfort, and quality in every property.",
      image: "/slide1.jpg",
      link: "/about/company",
      reverse: false,
    },
    {
      title: "Our Vision",
      text: "Shaping the future of real estate with innovation and trust. Accessible luxury for a smarter lifestyle.",
      image: "/slide2.jpg",
      link: "/about/vision",
      reverse: true,
    },
  ];

  return (
    <section className="w-full bg-black text-white">
      {sections.map((section, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row ${
            section.reverse ? "md:flex-row-reverse" : ""
          } h-screen`}
        >
          {/* Image Section */}
          <div className="md:w-1/2 w-full h-1/2 md:h-full">
            <img
              src={section.image}
              alt={section.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="md:w-1/2 w-full h-1/2 md:h-full flex flex-col justify-center px-8 md:px-16">
            <h2 className="text-3xl md:text-4xl font-light mb-6 relative inline-block">
              {section.title}
              <span className="absolute left-0 -bottom-1 h-[2px] w-16 bg-yellow-400"></span>
            </h2>

            <p className="text-gray-300 leading-relaxed text-lg md:text-xl mb-6">
              {section.text}
            </p>

            {/* Action Button */}
            <Link href={section.link}>
              <button className="relative group px-8 py-2 border border-yellow-400 text-sm font-medium text-yellow-400 overflow-hidden transition-all duration-500">
                <span className="absolute inset-0 bg-yellow-400 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
                <span className="relative z-10 group-hover:text-black transition-colors duration-500">
                  Learn More
                </span>
              </button>
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}
