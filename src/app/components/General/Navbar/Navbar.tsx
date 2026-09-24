"use client";
import Link from "next/link";
import Logo from "./Logo";
import LinkButton from "../LinkButton";
import { LuDownload, LuMenu, LuX } from "react-icons/lu";
import MobileNav from "./MobileNav";
import { useEffect, useState } from "react";

export const navLinks = [
  { url: "#home", label: "Home" },
  { url: "#services", label: "Services" },
  { url: "#resume", label: "Resume" },
  { url: "#projects", label: "Projects" },
  { url: "#skills", label: "Skills" },
  // { url: "#testimonials", label: "Testimonials" },
  { url: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [navBackground, setNavBackground] = useState(false);

  useEffect(() => {
    const navHandler = () => {
      if (window.scrollY >= 90) setNavBackground(true);
      if (window.scrollY < 90) setNavBackground(false);
    };
    window.addEventListener("scroll", navHandler);

    return () => {
      window.removeEventListener("scroll", navHandler);
    };
  }, []);

  return (
    <>
      <nav
        className={`h-18 fixed z-50 w-full transition-all duration-300 ${navBackground ? "bg-slate-900" : ""}`}
      >
        <div className="flex items-center h-full justify-between w-[90%] mx-auto">
          {/* Logo */}
          <Logo />

          {/* nav-links */}
          <ul className="hidden lg:flex xl:space-x-10 md:space-x-4 space-x-2">
            {navLinks.map((link) => (
              <li key={link.url}>
                <Link
                  href={link.url}
                  className="text-gray-200 hover:text-cyan-300 font-medium transition-colors duration-300"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Button */}
          <div className="hidden lg:block">
            <LinkButton
              href="/Documents/Ayyubian Ar Raufan Dev CV.pdf"
              text="Download CV"
              download
              icon={LuDownload}
              iconPosition="left"
            />
          </div>
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="w-8 h-8 cursor-pointer text-white z-100 lg:hidden"
          >
            {navOpen ? <LuX size={30} /> : <LuMenu size={30} />}
          </button>

          <MobileNav navOpen={navOpen} setNavOpen={setNavOpen} />
        </div>
      </nav>
    </>
  );
}
