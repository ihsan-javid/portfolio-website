import { projects, totleProject } from "@/constants";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import "./index.css";
import { useRouter } from "next/navigation";
import AnimitedText from "./Project";
import { useEffect, useRef } from "react";
import Project from "./Project";
import Button from "@/components/button";
export default function Index() {
  const projectRef = useRef([]);

  return (
    <section className="w-screen h-auto bg-[#F2F2F2] wave flow-root">
      <div className="common-padding w-full h-full font-inter text-black pt-20 sm:pt-40 ">
        <div className="flex items-center justify-between px-10 md:px-30">
          <Link
            href="/work"
            className="text-black flex items-baseline gap[4vw] text-6xl font-bold"
          >
            Wo<span className="font-Mazius">r</span>k{" "}
            <span className="text-2xl ml-[4vw]">({totleProject})</span>
          </Link>
          <svg
            className="stroke-[#5c5c5c] rotate-90 hidden lg:block"
            width="64"
            height="64"
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

        <div className="w-full h-auto mt-14 ">
          <div className="relative"></div>
        </div>
        <div>
          {projects.map((project, index) => {
            return <Project key={index} project={project} />;
          })}
        </div>
        <a href="/work">
          <Button className="border-btn black-border-btn  my-20">
            More Works
            <AiOutlineArrowRight className="icon ml-2" />
          </Button>
        </a>
      </div>
    </section>
  );
}
