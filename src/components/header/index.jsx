"use client";
import Nav from "./FixedNav";
import { useEffect, useRef, useState } from "react";
import { ScrollContainer } from "react-scrollbars-custom";
import { AnimatePresence } from "framer-motion";
import useScrollLock from "use-scroll-lock";
import scrollLock from "scroll-lock";
import NavBar from "./NavBar/Index";
import { enablePageScroll, disablePageScroll } from "@fluejs/noscroll";
import Menu from "./FixedNav/menu";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    if (isOpen) {
      setIsOpen(false);
      console.log(isOpen);
    } else {
      setIsOpen(true);
      console.log(isOpen);
    }
  };

  return (
    <>
      <Menu handleClick={handleClick} isOpen={isOpen} />
      <div className="">
        <NavBar handleClick={handleClick} />
        <AnimatePresence mode="wait">
          {isOpen && <Nav isOpen={isOpen} handleClick={handleClick} />}
        </AnimatePresence>
      </div>
    </>
  );
}
