import React from "react";
import Hero from "@/components/Hero";
import SmartStudioFinder from "@/components/SmartStudioFinder";
import CategoryVarietyExplorer from "@/components/CategoryVarietyExplorer";
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
      {/* AI-Age Interactive Style & Service Finder */}
      <SmartStudioFinder />
      {/* 3 Core Pillars: Beauty Parlour (Facial, Hair, Manicure), Sarees, Art & Craft Varieties */}
      <CategoryVarietyExplorer />
      <Services limit={6} showViewAllButton={true} />
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
