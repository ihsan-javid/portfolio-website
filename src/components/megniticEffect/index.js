import { useRef, useEffect } from "react";
import gsap from "gsap";

const magneticEffect =
  (element, strength = 0.3) =>
  (e) => {
    const { left, top, width, height } = element.getBoundingClientRect();
    const x = e.clientX - (left + width / 2);
    const y = e.clientY - (top + height / 2);
    element.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

const resetPosition = (element) => () => {
  element.style.transform = `translate(0px, 0px)`;
};

export const useMagneticEffect = (strength = 0.3) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouse = (e) => {
      const { left, top, width, height } = element.getBoundingClientRect();
      const x = e.clientX - (left + width / 2);
      const y = e.clientY - (top + height / 2);

      gsap.to(element, {
        x: x * strength,
        y: y * strength,
        duration: 0.6,
        ease: "power3.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.3)",
      });
    };

    element.addEventListener("mousemove", handleMouse);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouse);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [strength]);

  return ref;
};
