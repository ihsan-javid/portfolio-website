import { useEffect } from "react";
import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

// Add this component to create the banner elements
export const PageTransition = () => {
  return (
    <div className="page-transition">
      <div id="banner-1" className="banner"></div>
      <div id="banner-2" className="banner"></div>
      <div id="banner-3" className="banner"></div>
      <div id="banner-4" className="banner"></div>
    </div>
  );
};

// Fix the default export to use proper React patterns
export default function Index() {
  useEffect(() => {
    const bannerOne = document.getElementById("banner-1");
    const bannerTwo = document.getElementById("banner-2");
    const bannerThree = document.getElementById("banner-3");
    const bannerFour = document.getElementById("banner-4");

    if (bannerOne && bannerTwo && bannerThree && bannerFour) {
      const tl = gsap.timeline();

      tl.set([bannerOne, bannerTwo, bannerThree, bannerFour], {
        yPercent: -100, // Start off-screen (above)
      }).to([bannerOne, bannerTwo, bannerThree, bannerFour], {
        yPercent: 0, // Animate to their natural position
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
      });
    } else {
      console.error("Banner elements not found during animatePageIn");
    }
  }, []);

  return <PageTransition />;
}

export const animatePageOut = (href, router) => {
  const bannerOne = document.getElementById("banner-1");
  const bannerTwo = document.getElementById("banner-2");
  const bannerThree = document.getElementById("banner-3");
  const bannerFour = document.getElementById("banner-4");

  if (bannerOne && bannerTwo && bannerThree && bannerFour) {
    const tl = gsap.timeline();

    tl.set([bannerOne, bannerTwo, bannerThree, bannerFour], {
      yPercent: 0, // Start at natural position
    }).to([bannerOne, bannerTwo, bannerThree, bannerFour], {
      yPercent: 100, // Move down and off screen
      stagger: 0.2,
      duration: 0.8,
      ease: "power2.in",
      onComplete: () => {
        router.push(href);
      },
    });
  } else {
    console.error(
      "Banner elements not found during animatePageOut, navigating directly"
    );
    router.push(href);
  }
};

// Add CSS for banners
export const pageTransitionStyles = `
.page-transition {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 9999;
  pointer-events: none;
}

.banner {
  position: absolute;
  width: 100%;
  height: 25vh;
  background-color: #000; /* or your brand color */
  transform: translateY(-100%);
}

#banner-1 {
  top: 0;
}
#banner-2 {
  top: 25vh;
}
#banner-3 {
  top: 50vh;
}
#banner-4 {
  top: 75vh;
}
`;
