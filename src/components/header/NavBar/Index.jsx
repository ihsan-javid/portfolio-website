import Link from "next/link";
import { useMagneticEffect } from "@/components/megniticEffect";
import "./NavBar.css";
import React, { useCallback } from "react";

export default function NavBar({ handleClick }) {
  const magneticRef = useMagneticEffect(0.2);

  // Handle navigation with page refresh
  const handleNavigation = useCallback((event, href) => {
    event.preventDefault();
    window.location.href = href;
  }, []);

  return (
    <div className="py-1 font-inter max-sm:px-2 px-12 h-[60px] nav-bar w-full items-center flex justify-between">
      <Link
        ref={magneticRef}
        href="/"
        className="flex px-3 h-full items-center justify-center logo"
        onClick={(e) => handleNavigation(e, "/")}
      >
        <span className="credit">&copy;</span>
        <div className="relative flex items-center text-wrapper">
          <span className="absolute text left-0">Code by Ihsan Javid</span>
        </div>
      </Link>

      <div className="max-sm:hidden w-auto h-full flex items-center text-lg justify-center">
        <Link
          href="/about"
          className="link"
          onClick={(e) => handleNavigation(e, "/about")}
        >
          About
        </Link>
        <Link
          href="/work"
          className="link"
          onClick={(e) => handleNavigation(e, "/work")}
        >
          Work
        </Link>
        <Link
          href="/contact"
          className="link"
          onClick={(e) => handleNavigation(e, "/contact")}
        >
          Contact
        </Link>
      </div>
      <a
        onClick={handleClick}
        className="max-sm:flex sm:hidden cursor-pointer link"
      >
        Menu
      </a>
    </div>
  );
}
