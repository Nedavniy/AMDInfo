import React from "react";
import Header from "./components/Header";
import HeroAmd from "./components/HeroAmd";
import AboutAmd from "./components/AboutAmd";
import PortfolioAmd from "./components/PortfolioAmd";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <HeroAmd />
        <AboutAmd />
        <PortfolioAmd />
        <Contact />
      </main>
      <Footer />
    </>
  );
}