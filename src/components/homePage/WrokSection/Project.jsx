import { motion } from "framer-motion";
import { useState } from "react";

export default function Project({ project }) {
  const anim = {
    initial: { width: 0 },
    open: {
      width: "auto", 
      transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
    },
    closed: { width: 0,},
  };

  const [isActive, setIsActive] = useState(false);
  const { title1, title2, src, link } = project;

  return (
    <div className="flex justify-self-center w-11/12 last:border-b-2 ">
      <div
        onClick={() => link}
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
        className="border-t-2 font-mediaSans border-black py-[0.75vw] cursor-pointer w-full flex justify-center items-center"
      >
        <p className="mr-[0.75vw] text-[4vh] sm:text-[7vw] md:text-[5vw]">
          {title1}
        </p>
        <motion.div
          initial="initial"
          variants={anim}
          animate={isActive ? "open" : "closed"}
          className="overflow-hidden flex justify-center"
        >
          <img
            className="min-w-[10vw]"
            src={src}
            alt=""
            style={{ width: "10vw" }}
          />
        </motion.div>
        <p className="text-[5vh] sm:text-[7vw] md:text-[5vw] ml-[0.75vw]">
          {title2}
        </p>
      </div>
    </div>
  );
}
