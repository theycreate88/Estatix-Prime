"use client";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "remixicon/fonts/remixicon.css";
import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true); // show loader initially

  useEffect(() => {
    // Show loader on every route change
    setLoading(true);

    const timeout = setTimeout(() => setLoading(false), 1500); // adjust duration
    return () => clearTimeout(timeout);
  }, [pathname]); // run on route change

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&family=Oswald:wght@200..700&family=Playwrite+HU:wght@100..400&display=swap"
          rel="stylesheet"
        />
      </head>
     <body className="relative bg-black text-white">
  <ScrollToTopButton />
  <Header />
  {children}
  <Footer />
  {loading && <Loader />} {/* Overlay loader */}
</body>

    </html>
  );
}
