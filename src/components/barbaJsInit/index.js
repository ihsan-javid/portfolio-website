"use client";
import barba from "@barba/core";
import { useEffect } from "react";

export default function BarbaInit() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    let isInitialized = false;

    // Function to initialize LocomotiveScroll with debouncing
    const initLocomotiveScroll = async () => {
      if (window._initializingLocomotiveScroll) return;
      window._initializingLocomotiveScroll = true;

      try {
        // Create new instance using dynamic import
        const LocomotiveScrollModule = await import("locomotive-scroll");
        const LocomotiveScroll = LocomotiveScrollModule.default;

        const locomotiveScroll = new LocomotiveScroll({
          el:
            document.querySelector("[data-scroll-container]") || document.body,
          smooth: true,
          multiplier: 1,
          lerp: 0.1,
        });

        console.log("LocomotiveScroll initialized");

        // Store the instance in window for cleanup
        window._locomotiveScrollInstance = locomotiveScroll;
      } catch (error) {
        console.error("Error initializing LocomotiveScroll:", error);
      } finally {
        window._initializingLocomotiveScroll = false;
      }
    };

    // Only initialize Barba once
    if (!isInitialized && !window._barbaInitialized) {
      isInitialized = true;
      window._barbaInitialized = true;

      // Add event listeners for all anchor links to handle navigation with refresh
      document.addEventListener("click", (e) => {
        // Find the closest anchor element
        const link = e.target.closest("a");

        if (
          link &&
          link.href &&
          !link.hasAttribute("target") &&
          !link.hasAttribute("download")
        ) {
          const url = new URL(link.href);

          // Only handle internal links
          if (url.origin === window.location.origin) {
            e.preventDefault();

            // Do a hard refresh to the new URL
            window.location.href = link.href;
          }
        }
      });

      // Initialize LocomotiveScroll on first load with a delay
      setTimeout(initLocomotiveScroll, 500);
    }

    // Cleanup function
    return () => {
      // Clean up locomotive scroll
      if (window._locomotiveScrollInstance) {
        window._locomotiveScrollInstance.destroy();
        window._locomotiveScrollInstance = null;
      }

      if (window._barbaInitialized) {
        window._barbaInitialized = false;
      }
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return null;
}
