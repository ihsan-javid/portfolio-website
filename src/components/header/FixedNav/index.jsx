import { motion, AnimatePresence } from "framer-motion";
import { menuSlide } from "../anim";
import { NavigationLink, SocialLinks } from "./links";
import Curve from "./curve";

export default function Index({ isOpen, handleClick }) {
  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="lg:w-1/3 max-sm:w-full sm:w-1/2 flex flex-col justify-around text-[#FDFFFC] h-[100vh] bg-[#011627] fixed z-10 right-0 top-0"
    >
      <div className="flex uppercase flex-col mt-12 my-4 px-4">
        <div className="mt-2 opacity-[0.5]">
          <p>Navigation</p>
          <hr />
        </div>
        <NavigationLink isOpen={isOpen} handleClick={handleClick} />
      </div>
      <div className="px-4">
        <SocialLinks isOpen={isOpen} handleClick={handleClick} />
      </div>
      <Curve />
    </motion.div>
  );
}
