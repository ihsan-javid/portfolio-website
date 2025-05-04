"use client";
import "./page.css";
import AboutSection from "@/components/homePage/AboutSection";
import MainSection from "@/components/homePage/MainSection";
import WrokSection from "@/components/homePage/WrokSection";
import FooterSection from "@/components/homePage/footerSection";

export default function Page() {
  return (
    <main data-scroll-section>
      <MainSection />
      <AboutSection />
      <WrokSection />
      <FooterSection />
    </main>
  );
}
