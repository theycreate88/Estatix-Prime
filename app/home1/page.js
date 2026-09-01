"use client";
import FeatureBoxes from "@/components/FeatureBoxes";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";

export default function Home1() {
  return (
    <>
{/* Hero Section */}
<section
  className="relative h-[100vh] flex flex-col justify-center items-center bg-cover bg-center"
  style={{ backgroundImage: "url('/slide1.jpg')" }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/70 z-10" />

  {/* Content */}
  <div className="relative z-20 text-center text-white px-6 md:px-0 max-w-3xl space-y-5">
    {/* Title */}
    <h1 className="text-3xl md:text-4xl font-light text-yellow-400 leading-tight">
      Find Your Dream Home
    </h1>

    {/* Subtitle */}
    <p className="text-gray-300 text-sm md:text-base font-light">
      Explore modern spaces crafted for comfort and elegance. Start your journey to a perfect home today.
    </p>

    {/* Minimalistic Info */}
    <div className="mt-4 text-gray-400 text-xs md:text-sm">
      <p>Curated listings updated daily.</p>
      <p>Direct access to verified properties.</p>
    </div>

    {/* CTA Button */}
   <button className="relative group mt-[5%] px-8 py-2 border border-yellow-400 text-sm font-medium text-yellow-400 overflow-hidden transition-colors duration-500">
          <span className="absolute inset-0 bg-yellow-400 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
          <span className="relative z-10 group-hover:text-black transition-colors duration-500">
            View Listings
          </span>
        </button>
  </div>

  {/* Scroll Down Indicator */}
  <div className="absolute bottom-6 flex flex-col items-center text-gray-400 animate-bounce">
    <span className="block w-[2px] h-6 bg-yellow-400 mb-1 rounded"></span>
    <span className="text-xs">Scroll</span>
  </div>
</section>


      {/* Testimonials */}
      <div className="relative z-0">
        <FeatureBoxes/>
        <Team/>
        <Testimonials />
      </div>
    </>
  );
}
