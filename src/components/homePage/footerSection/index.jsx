import Button from "@/components/button";
import { socialAccounts } from "@/constants";
import { AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// ✅ Always register plugin at top level
gsap.registerPlugin(ScrollTrigger);

export default function index() {
  const ref = useRef();

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      gsap.to(ref.current, {
        top: "300px",
        position: "relative",
        scrollTrigger: {
          trigger: ref.current,
          scrub: true,
          start: "20 400", // desktop
          end: "400 100",
        },
      });
    });

    mm.add("(max-width: 767px)", () => {
      gsap.to(ref.current, {
        top: "300px",
        position: "relative",
        scrollTrigger: {
          trigger: ref.current,
          scrub: true,
          start: "top 90%", // mobile
          end: "400 100",
        },
      });
    });

    return () => mm.revert(); // cleanup
  }, []);

  return (
    <footer className="w-full relative h-full overflow-hidden bg-[#011627]">
      <div className="h-full relative common-padding z-0 w-auto flex justify-center items-center">
        <div className="overflow-hidden max-sm:overflow-clip">
          <svg
            ref={ref}
            id="c-circle"
            viewBox="0 0 1254 1254"
            className="w-2xl relative -z-10  -top-60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {" "}
            <circle
              cx="627"
              cy="627"
              r="627"
              fill="url(#paint0_radial_3260_3)"
            ></circle>{" "}
            <defs>
              {" "}
              <radialGradient
                id="paint0_radial_3260_3"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(627) rotate(90) scale(813)"
              >
                {" "}
                <stop stopColor="#F3F3F3" stopOpacity="0.45"></stop>{" "}
                <stop offset="1" stopColor="white" stopOpacity="0"></stop>{" "}
              </radialGradient>
            </defs>{" "}
          </svg>
        </div>
        {/* <div className=" absolute w-screen z0 h-screen"> */}
        <div className="absolute text-white top-10 common-padding w-screen z-0 h-screen flex flex-col gap-10 max-sm:gap-6">
          <div>
            <h1 className="text-4xl sm:text-8xl text-center font-mediaSans tracking-wide">
              Let's Talk
              <br /> About the Next
              <br /> big thing
            </h1>
            <svg
              className="stroke-[#c2c2c2] rotate-0 hidden lg:block absolute top-60 left-20"
              width="54"
              height="54"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <path
                d="M3.10162 3.10156L62.9999 62.9999"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
              <path
                d="M63 1.00001L63 63L0.999989 63"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
            </svg>
          </div>
          <div className="w-full lg:w-2/3 h-0.5 rounded-full flex self-center opacity-70 bg-white"></div>
          <div className="flex max-sm:flex-col gap-10 max-sm:gap-10 justify-center">
            <Button
              onClick={() => {
                window.location.href = "mailto:ihsan.codes@gmail.com";
              }}
              className="btn w-full sm:w-60 h-15 rounded-full"
            >
              ihsan.codes@gmail.com
            </Button>
            <Button
              onClick={() => {
                window.location.href = "tel:+923341948027";
              }}
              className="btn w-full sm:w-60 h-15 rounded-full"
            >
              +92 3341948027
            </Button>
            <a href="/contact">
              <Button className="btn w-full sm:w-60 flex justify-center items-center rounded-full h-15">
                Get in touch <AiOutlineArrowRight className="icon ml-2" />
              </Button>
            </a>
          </div>
          <div className="max-sm:mt25  w-full h-fit">
            <dir className="flex justify-between relative -bottom-10 max-sm:flex-col max-sm:gap-3 w-full">
              <div className="flex flex-col gap-2">
                <p className="uppercase  text-[2vh] sm:text-[1vw] opacity-70">
                  version
                </p>
                <p>2025 © Edition</p>
              </div>
              <hr className="block sm:hidden" />
              <dir>
                <p className="uppercase  text-[2vh] sm:text-[1vw] opacity-70">
                  socials
                </p>
                <div className="h-10 flex gap-4 items-center">
                  {socialAccounts.map((account) => {
                    return (
                      <Link
                        href={account.url}
                        className="footer-link"
                        key={account.id}
                      >
                        {account.name}
                      </Link>
                    );
                  })}
                </div>
              </dir>
            </dir>
            {/* </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
