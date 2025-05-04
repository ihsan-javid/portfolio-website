import VisualSvg from "@/components/VisualSvg/VisualSvg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./MainSection.css";
import { useLayoutEffect, useRef } from "react";

export default function () {
  const leftSideText = useRef(null);
  const rightSideText = useRef(null);
  const arrowSvg = useRef();
  useLayoutEffect(() => {
    let tl = gsap.timeline();

    tl.from(leftSideText.current, {
      x: "-130%",
      duration: 2,
    });

    tl.from(
      rightSideText.current,
      {
        x: "130%",
        duration: 2,
      },
      0
    );
    tl.to(arrowSvg.current, {
      rotate: -90,
      scrollTrigger: {
        trigger: arrowSvg.current,
        scrub: true,
      },
    });
  }, []);

  return (
    <section className="font-inter overflow-hidden common-padding w-full sm:min-h-full h-auto bg-am er-400">
      <p className="text-lg text-center max-sm:text-[0.75rem] mt-10">
        &#x1F44B; Hey, My name is{" "}
        <span className="text-[#C1121F] font-Mazius tracking-widest text-[1.4rem] max-sm:text-[0.75rem]">
          ihsan javid
        </span>{" "}
        and I am a freelancer
      </p>
      <div className="row lowercase text-center">
        <h1 ref={leftSideText}>Developer &</h1>
      </div>
      <div className=" row flex gap-3 items-center justify-center lowercase">
        <svg
          width="60"
          height="60"
          ref={arrowSvg}
          className="self-center rotate-[90deg] mr-10 hidden lg:block"
          viewBox="0 0 63 63"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="31.5"
            cy="31.5"
            r="31.5"
            fill="#B8B8B8"
            fillOpacity="0.33"
          />
          <path
            d="M34.1371 35.1502L29.0686 40.2187L24 35.1502"
            stroke="#4E4E4E"
            strokeWidth="1.39444"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M40.2194 23.9993L33.1234 23.9993C32.048 23.9993 31.0166 24.4265 30.2562 25.1869C29.4957 25.9474 29.0685 26.9787 29.0685 28.0542L29.0685 40.2187"
            stroke="#4E4E4E"
            strokeWidth="1.39444"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <VisualSvg />
        <h1 ref={rightSideText}>Designer</h1>
      </div>
    </section>
  );
}
