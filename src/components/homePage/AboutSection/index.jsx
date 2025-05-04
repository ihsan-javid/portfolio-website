import gsap from "gsap";
import { AiOutlineArrowRight } from "react-icons/ai";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./AboutSection.css";
import { useRouter } from "next/navigation";
import { useRef, useLayoutEffect } from "react";
import Button from "@/components/button";

export default function AboutSection() {
  const router = useRouter();
  const textRefs = useRef([]);
  const skillRefs = useRef([]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();

    textRefs.current.forEach((el) => {
      if (el) {
        tl.from(el, {
          left: "-200px",
          opacity: 0,
          ease: "power3.out",
          duration: 3,
          scrollTrigger: {
            trigger: el,
            scrub: true,
            start: "0px bottom",
            end: "bottom+=400px bottom",
          },
        });
      }
      skillRefs.current.forEach((sk) => {
        tl.fromTo(
          sk,
          {
            right: "-100px",
            opacity: 0,
          },
          {
            right: "0px",
            opacity: 1,
            ease: "power3.out",
            duration: 3,
            scrollTrigger: {
              trigger: sk,
              scrub: true,
              start: "0px bottom",
              end: "bottom+=200px bottom",
            },
          }
        );
      });
    });
  }, []);

  return (
    <section className="common-padding about lg:pt-30 sm:pt-20 sm:px-20 pt-10 lg:px-40 h-screen">
      <div>
        <div className="flex md:justify-evenly w-ful h-full max-sm:text-sm sm:text-xl sm:flex-row gap-4 flex-col text-black font-inter justify-items-center items-center">
          {/* Text Section */}
          <div className="text font-inter">
            {phrases.map((phrase, index) => (
              <div
                key={index}
                className="relative"
                ref={(el) => (textRefs.current[index] = el)}
              >
                {phrase}
              </div>
            ))}
          </div>

          {/* Skills Section */}
          <div className="text-lg max-sm:text-sm">
            {skills.map((skill, index) => {
              return (
                <div
                  className="relative"
                  key={index}
                  ref={(sk) => (skillRefs.current[index] = sk)}
                >
                  {skill}
                </div>
              );
            })}
          </div>
        </div>

        {/* Button Section */}

          <a href="/about">

          <Button className="border-btn black-border-btn mt-20 lg:mt-0 btn">
            About Me
            <AiOutlineArrowRight className="icon" />
          </Button>
          </a>
      </div>
    </section>
  );
}

const phrases = [
  <span key={0}>I am Ihsan Javid, a passionate Web Developer</span>,
  <span key={1}>
    & Designer crafting{" "}
    <span className="font-Mazius text-[#C1121F]">innovative</span> yet highly
    functional,
  </span>,
  <span key={2}>user-centric, and visually compelling digital</span>,
  <span key={3}>experiences for web and</span>,
  <span key={4}>Mobile.</span>,
];
const skills = [
  <span>Full Stack Development /</span>,
  <span>Web & mobile / UI & UX</span>,
];
