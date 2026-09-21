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
      <Services />
      <Occasions />
      <Gallery />
      <HowItWorks />
      <About />
      <WhatsAppCommunity />
      <Faq />
      <Contact />
    </>
  );
}
