"use client";
import { motion } from "framer-motion";
import { projects } from "@/constants";
import React, { useRef, useState } from "react";
import Footer from "@/components/homePage/footerSection";
import Link from "next/link";
import gsap from "gsap";
import { useEffect } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function page() {
  const cursor = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    let xMoveCursor = gsap.quickTo(cursor.current, "left", {
      duration: 0.45,
      ease: "power3",
    });

    let yMoveCursor = gsap.quickTo(cursor.current, "top", {
      duration: 0.45,
      ease: "power3",
    });

    window.addEventListener("mousemove", (e) => {
      const { pageX, pageY } = e;
      xMoveCursor(pageX);
      yMoveCursor(pageY);
    });
  }, []);

  const scaleAnimation = {
    initial: { scale: 0, x: "-50%", y: "-50%" },
    enter: {
      scale: 1,
      x: "-50%",
      y: "-50%",
      transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
    },
    closed: {
      scale: 0,
      x: "-50%",
      y: "-50%",
      transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
    },
  };

  return (
    <div data-barba="container" data-barba-namespace="work">
      <section className="common-padding">
        <div className="pt-10 font-inter">
          <div className="lg:px-30 sm:px-20 px-10 py-10">
            <div>
              <h1 className="flex flex-col md:leading-16 text-3xl sm:text-5xl md:text-7xl font-mediaSans ">
                <span>Creating next level </span>
                <span>digital products</span>
              </h1>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-wrap h-auto pt-30">
          {projects.map((project, index) => {
            return (
              <div
                key={index}
                className="lg:w-1/2 px-[2%] pb-36 overflow-hidden"
              >
                <Link
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  href={project.link}
                  className="flex items-center flex-col overflow-hidden"
                >
                  <div className="w-full overflow-hidden relative">
                    <motion.img
                      animate={
                        hoveredIndex === index ? { scale: 1.1 } : { scale: 1 }
                      }
                      transition={{ duration: 0.3 }}
                      className="w-full"
                      src={project.src}
                    />
                  </div>

                  <div className="w-full">
                    <h4 className="text-2xl py-8 font-normal">
                      {project.name}
                    </h4>
                    <hr className="mt-3 h-4" />
                    <div className="flex justify-between items-center text-base font-medium">
                      <p className="py-4">{project.description}</p>
                      <p>{project.year}</p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
        <motion.div
          variants={scaleAnimation}
          initial="initial"
          animate={hoveredIndex !== null ? "enter" : "closed"}
          ref={cursor}
          className="absolute bg-[#E71D36] font-medium w-20 h-20 rounded-full flex justify-center items-center pointer-events-none text-white"
        >
          <h1>Visit</h1>
          <AiOutlineArrowRight className="ml-1 -rotate-45" />
        </motion.div>
      </section>
      <Footer />
    </div>
  );
}
