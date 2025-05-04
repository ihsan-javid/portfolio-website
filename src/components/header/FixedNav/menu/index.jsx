import { useEffect } from "react";
import "./menu.css";
import Button from "../../../button";
import { motion } from "framer-motion";
import { useMagneticEffect } from "@/components/megniticEffect";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Menu({ isOpen, handleClick }) {
  const transition = { duration: 0.5, ease: "linear" };
  const magneticRef = useMagneticEffect(0.5);

  useEffect(() => {
    const menu = document.querySelector(".menu");

    // Set initial state
    gsap.set(menu, {
      opacity: 0,
      scale: 0,
      display: "none",
    });

    ScrollTrigger.create({
      start: "100px top",
      end: "99999",
      onEnter: () => {
        gsap.to(menu, {
          display: "block",
          opacity: 1,
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      },
      onLeaveBack: () => {
        gsap.to(menu, {
          opacity: 0,
          scale: 0,
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => gsap.set(menu, { display: "none" }),
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <motion.div
      ref={magneticRef}
      onClick={handleClick}
      className="right-4 top-4 p-6 menu z-20 fixed" // Changed to fixed positioning
    >
      <Button className="w-14 h-14 cursor-pointer flex gap-1 flex-col justify-center rounded-full items-center  bg-[#011627]">
        <motion.div
          className="item"
          animate={{
            rotate: isOpen ? 45 : 0,
            y: isOpen ? 7 : 0,
          }}
          transition={transition}
        ></motion.div>

        <motion.div
          animate={{
            opacity: isOpen ? 0 : 1,
            x: isOpen ? -13 : 0,
          }}
          transition={transition}
          className="item"
        ></motion.div>
        <motion.div
          animate={{
            rotate: isOpen ? -45 : 0,
            y: isOpen ? -8 : 0,
          }}
          transition={transition}
          className="item"
        ></motion.div>
      </Button>
    </motion.div>
  );
}
