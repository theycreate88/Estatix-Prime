"use client";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
const footerLinks = {
useful: [
{ name: "Home", href: "/" },
{ name: "About Us", href: "/about" },
{ name: "Projects", href: "/projects" },
{ name: "Contact", href: "/contact" },
],
features: [
{ name: "Luxury Villas", href: "/luxury-villas" },
{ name: "Modern Apartments", href: "/modern-apartments" },
{ name: "Beach Houses", href: "/beach-houses" },
{ name: "Penthouse", href: "/penthouse" },
],
socials: [
{ icon: Facebook, href: "[https://facebook.com](https://facebook.com)" },
{ icon: Instagram, href: "[https://instagram.com](https://instagram.com)" },
{ icon: Linkedin, href: "[https://linkedin.com](https://linkedin.com)" },
{ icon: Twitter, href: "[https://twitter.com](https://twitter.com)" },
],
};

return ( <footer className="bg-black text-white py-16 px-[10%]"> <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
{/* About Us */} <div> <h3 className="text-lg font-semibold mb-4 text-yellow-400">About Us</h3> <p className="text-gray-400 text-sm leading-relaxed">
EstatixPrime offers premium real estate properties, connecting clients
to luxurious and modern living spaces with trust and excellence. </p> </div>

 
    {/* Useful Links */}
    <div>
      <h3 className="text-lg font-semibold mb-4 text-yellow-400">Useful Links</h3>
      <ul className="space-y-2">
        {footerLinks.useful.map((link, idx) => (
          <motion.li
            key={idx}
            className="relative w-fit cursor-pointer overflow-hidden"
            whileHover="hover"
          >
            <a
              href={link.href}
              className="text-gray-300 text-sm transition-colors duration-300 hover:text-white"
            >
              {link.name}
            </a>
            <motion.span
              className="absolute left-0 bottom-0 h-[2px] w-full bg-yellow-400"
              initial={{ x: "-100%", opacity: 0 }}
              variants={{
                hover: {
                  x: "0%",
                  opacity: 1,
                  transition: { duration: 0.4, ease: "easeOut" },
                },
              }}
            />
          </motion.li>
        ))}
      </ul>
    </div>

    {/* Features */}
    <div>
      <h3 className="text-lg font-semibold mb-4 text-yellow-400">Features</h3>
      <ul className="space-y-2">
        {footerLinks.features.map((feature, idx) => (
          <motion.li
            key={idx}
            className="relative w-fit cursor-pointer overflow-hidden"
            whileHover="hover"
          >
            <a
              href={feature.href}
              className="text-gray-300 text-sm transition-colors duration-300 hover:text-white"
            >
              {feature.name}
            </a>
            <motion.span
              className="absolute left-0 bottom-0 h-[2px] w-full bg-yellow-400"
              initial={{ x: "-100%", opacity: 0 }}
              variants={{
                hover: {
                  x: "0%",
                  opacity: 1,
                  transition: { duration: 0.4, ease: "easeOut" },
                },
              }}
            />
          </motion.li>
        ))}
      </ul>
    </div>

    {/* Socials */}
    <div>
      <h3 className="text-lg font-semibold mb-4 text-yellow-400">Socials</h3>
      <div className="flex space-x-4">
        {footerLinks.socials.map((social, idx) => (
          <motion.a
            key={idx}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, color: "#facc15" }}
            transition={{ duration: 0.3 }}
            className="p-2 border border-gray-700 rounded-full hover:border-yellow-400 transition"
          >
            <social.icon size={18} />
          </motion.a>
        ))}
      </div>
    </div>
  </div>

 {/* Bottom Line */}
<div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
  © {new Date().getFullYear()} EstatixPrime. 
   <br /><br />
   Powered by <b>
  <a 
    href="https://theycreate.vercel.app/" 
    className="text-gray-400 hover:text-white  "
    target="_blank"
    rel="noopener noreferrer"
  >
   TheyCreate Developers
  </a></b>
</div>

</footer>
 

);
}
