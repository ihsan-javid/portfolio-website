"use client";

import { navigation, socialAccounts } from "@/constants";
import "./link.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { slide, scale } from "../../anim";
import { useCallback } from "react";

export function NavigationLink({ handleClick, isOpen }) {
  // Handle navigation with page refresh
  const handleNavigation = useCallback(
    (event, href) => {
      event.preventDefault();
      handleClick(); // Close the menu
      window.location.href = href;
    },
    [handleClick]
  );

  return (
    <motion.div
      // custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        className="uppercase flex flex-col gap-1 mt-4 px-[4vw]  justify-between"
        variants={scale}
        animate={isOpen ? "open" : "closed"}
      >
        {navigation.map((nav) => {
          return (
            <Link
              data-text="Awesome"
              key={nav.title}
              href={nav.url}
              onClick={(e) => handleNavigation(e, nav.url)}
              className="nav-link w-fit text-4xl mt-4"
            >
              {nav.title}
            </Link>
          );
        })}
      </motion.div>
    </motion.div>
  );
}

export function SocialLinks({ handleClick }) {
  return (
    <div className="flex justify-evenly  uppercase mt-4 md:pl-8">
      {socialAccounts.map((link) => {
        return (
          <Link
            key={link.id}
            href={link.url}
            onClick={handleClick}
            className="link flex px-2 py-1 relative text-[0.8rem] opacity-60"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.name}
          </Link>
        );
      })}
    </div>
  );
}
