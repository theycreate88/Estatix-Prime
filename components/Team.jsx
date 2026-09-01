"use client";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const teamMembers = [
  {
    name: "John Doe",
    role: "Founder & CEO",
    img: "/team1.jpg",
    socials: { facebook: "#", twitter: "#", linkedin: "#" },
  },
  {
    name: "Jane Smith",
    role: "Interior Designer",
    img: "/team2.jpg",
    socials: { facebook: "#", twitter: "#", linkedin: "#" },
  },
  {
    name: "Mike Johnson",
    role: "Architect",
    img: "/team3.jpg",
    socials: { facebook: "#", twitter: "#", linkedin: "#" },
  },
];

export default function Team() {
  return (
    <section className="w-full px-10 py-20 bg-black text-white">
      <h2 className="text-3xl font-semibold mb-10 text-center tracking-tight">
        Meet Our Team
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {teamMembers.map((member, idx) => (
          <motion.div
            key={idx}
            className="relative w-80 h-90   overflow-hidden cursor-pointer group shadow-lg"
            style={{
              backgroundImage: `url(${member.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 md:opacity-0 group-hover:opacity-80 transition-opacity duration-500" />

            {/* Details */}
            <div className="absolute inset-0 flex flex-col justify-end p-5 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-300 mb-3">{member.role}</p>
              <div className="flex gap-3 text-yellow-400">
                <a href={member.socials.facebook} target="_blank">
                  <FaFacebookF />
                </a>
                <a href={member.socials.twitter} target="_blank">
                  <FaTwitter />
                </a>
                <a href={member.socials.linkedin} target="_blank">
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
