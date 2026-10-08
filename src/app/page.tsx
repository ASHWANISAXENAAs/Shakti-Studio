import React from "react";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Occasions from "@/components/Occasions";
import Gallery from "@/components/Gallery";
import HowItWorks from "@/components/HowItWorks";
import About from "@/components/About";
import WhatsAppCommunity from "@/components/WhatsAppCommunity";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services limit={3} showViewAllButton={true} />
      <Occasions limit={5} showViewAllButton={true} />
      <Gallery limitItems={6} showViewAllButton={true} />
      <HowItWorks showDetailedGuideButton={true} />
      <About showReadMoreButton={true} />
      <WhatsAppCommunity />
      <Faq />
      <Contact />
    </>
  );
}
