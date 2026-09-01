"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
        setIsHomeDropdownOpen(false);
      }
    };
    if (isMobileMenuOpen) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  const linkClasses = (path) =>
    `transition-colors duration-300 ${
      pathname === path ? "text-yellow-400 font-semibold" : "text-white hover:text-yellow-400"
    }`;

  const homeLinkClasses = (path) =>
    `block px-4 py-2 text-sm rounded transition-colors duration-200 ${
      pathname === path
        ? "bg-yellow-400 text-black"
        : "text-white hover:bg-yellow-400 hover:text-black"
    }`;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-black/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto relative">
        <h1 className="text-xl md:text-2xl font-semibold tracking-wide text-white">
          EstatixPrime
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          {/* Home Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setIsHomeDropdownOpen(true)}
            onMouseLeave={() => setIsHomeDropdownOpen(false)}
          >
            <button className={`${linkClasses("/")} flex items-center gap-1`}>
              Home <ChevronDown size={16} />
            </button>

            <div
              className={`absolute left-0 mt-2 w-44 bg-black border   shadow-md   transition-all duration-200 ${
                isHomeDropdownOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
              }`}
            >
              <Link href="/" className={homeLinkClasses("/")}>
                Main Home
              </Link>
              <Link href="/home1" className={homeLinkClasses("/home1")}>
                Home Style 1
              </Link>
              <Link href="/home2" className={homeLinkClasses("/home2")}>
                Home Style 2
              </Link>
            </div>
          </li>

          <li>
            <Link href="/about" className={linkClasses("/about")}>
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" className={linkClasses("/projects")}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className={linkClasses("/contact")}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-yellow-400"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="absolute top-full right-4 mt-2 w-56 bg-black border shadow-lg p-4 space-y-3 md:hidden"
          >
            {/* Home Dropdown Mobile */}
            <div>
              <button
                onClick={() => setIsHomeDropdownOpen(!isHomeDropdownOpen)}
                className="flex items-center justify-between w-full text-white hover:text-yellow-400"
              >
                Home <ChevronDown size={16} />
              </button>
              {isHomeDropdownOpen && (
                <div className="mt-2 space-y-1 pl-2">
                  <Link
                    href="/"
                    className={homeLinkClasses("/")}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Main Home
                  </Link>
                  <Link
                    href="/home1"
                    className={homeLinkClasses("/home1")}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home Style 1
                  </Link>
                  <Link
                    href="/home2"
                    className={homeLinkClasses("/home2")}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home Style 2
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/about"
              className="block text-white hover:text-yellow-400"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/projects"
              className="block text-white hover:text-yellow-400"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="block text-white hover:text-yellow-400"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
