"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./page.css";
import Footer from "@/components/homePage/footerSection";

export default function page() {
  const dots1 = useRef([]);
  const dots2 = useRef([]);
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([...dots1.current, ...dots2.current], { opacity: 0 });
      gsap.to([...dots1.current, ...dots2.current], {
        opacity: 1,
        duration: 0.4,
        ease: "power1.inOut",
        stagger: 0.3,
        repeat: -1,
        yoyo: true,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div data-scroll-section>
      <section id="main" className="w-full h-auto">
        <div className="common-padding font-inter w-full h-auto flex flex-col pt-10 px-10 sm:pt-20 sm:px-30">
          <div className="w-full h-auto lg:my-5">
            <h1 className="font-mediaSans flex flex-col leading-9 sm:leading-16 sm:text-[5vw] sm:px-10 text-[4.5vh]">
              <span>Helping brands thrive</span>
              <span> in the digital world</span>
            </h1>
          </div>
          <hr className="w-full lg:w-[90%] self-center my-10 lg:my-20 sm:ml-10" />
          <div className="">
            <svg
              className="stroke-[#5e5e5e] -rotate-20 hidden lg:block  absolute left-12"
              width="18"
              height="18"
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
          <div className="flex w-full justify-between flex-col lg:flex-row h-auto">
            <div className="w-full lg:w-[30%] flex gap-4 lg:gap-8 sm:px-10 flex-col">
              <div>
                <p className="text-sm">
                  I help companies from all over the world with tailor-made
                  solutions. With each project, I push my work to new horizons,
                  always putting quality first.
                </p>
              </div>
              <div className="flex text-sm opacity-50 sm:mb-10 max-sm:mb-10 font-medium">
                <span>Always exploring</span>
                {Array.from({ length: 3 }).map((_, i) => (
                  <span key={i} ref={(el) => (dots1.current[i] = el)}>
                    .
                  </span>
                ))}
              </div>
            </div>
            <div className="overflow-hidden md:w-[65%] max-sm:h-auto w-full  md:pl-10  ">
              <img
                // data-scroll
                // data-scroll-speed="0.2"
                className="w-full max-sm:h-[60%] lg:scale-[1.4]  rounded-lg object-cover"
                src="./images/myImg.jpg"
                alt="Parallax"
              />
            </div>
          </div>
          <div className="h-screen w-full lg:mt-30 mt-10">
            <div className="flx text-[1.75rem] font-bold max-sm:font-semibold lg:pb-20 pb-10">
              <span>I can help you with</span>
              {Array.from({ length: 3 }).map((_, i) => (
                <span key={i} ref={(el) => (dots2.current[i] = el)}>
                  .
                </span>
              ))}
            </div>
            <div className="w-full flex lg:flex-row flex-col justify-around lg:gap-2 gap-4 sm:gap-4">
              <div className="box w-full lg:w-[300px] ">
                <p className="hidden pNumber lg:block">01</p>
                <hr />
                <h4>Design</h4>
                <h6>
                  With a solid track record in designing websites, I deliver
                  strong and user-friendly digital designs. (Since 2024 only in
                  combination with development)
                </h6>
              </div>
              <div className="box lg:w-[300px]">
                <p className="hidden pNumber lg:block">02</p>
                <hr />
                <h4>Developement</h4>
                <h6>
                  I build scalable websites from scratch that fit seamlessly
                  with design. My focus is on micro animations, transitions and
                  interaction. Building with Webflow (or Kirby CMS).
                </h6>
              </div>
              <div className="box lg:w-[300px]">
                <p className="hidden lg:block">03</p>
                <hr />
                <h4 className="flex items-center gap-2">
                  <span>
                    <svg className="w-7 h-7" viewBox="0 0 100 100">
                      <title>Oval + Oval + Oval + Oval Mask</title>
                      <g
                        id="Page-1"
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <g
                          id="Artboard"
                          transform="translate(-468.000000, -671.000000)"
                          fill="#000"
                        >
                          <g
                            id="Oval-+-Oval-+-Oval-+-Oval-Mask"
                            transform="translate(468.000000, 671.000000)"
                          >
                            <path
                              d="M99.1731586,50.0066986 C71.9402858,50.4482381 50,72.6619049 50,100 L50,100 L49.9933014,99.1731586 C49.5517619,71.9402858 27.3380951,50 0,50 L0,50 L0.826841425,49.9933014 C28.0597142,49.5517619 50,27.3380951 50,0 L50,0 L50.0066986,0.826841425 C50.4482381,28.0597142 72.6619049,50 100,50 L100,50 Z"
                              id="Combined-Shape"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </span>{" "}
                  The full package
                </h4>
                <h6>
                  A complete website from concept to implementation, that's what
                  makes me stand out. My great sense for design and my
                  development skills enable me to create kick-ass projects.
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
