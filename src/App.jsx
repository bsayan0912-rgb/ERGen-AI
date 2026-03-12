import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import HowItWorks from "./components/HowItWorks";
import FeaturesSection from "./components/FeaturesSection";
import PricingSection from "./components/PricingSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import TermsSection from "./components/TermsSection";
import Footer from "./components/Footer";

function Home() {
   return (
    <>
      <Hero />
      <ProblemSection />
      <HowItWorks />
      <FeaturesSection />
      <PricingSection />
      <AboutSection />
      <ContactSection />
      <TermsSection />
      <Footer />
    </>
  );
}

function Features() {
  return <h1 style={{ padding: "100px" }}>Features Page</h1>;
}

function Pricing() {
  return <h1 style={{ padding: "100px" }}>Pricing Page</h1>;
}

function Login() {
  return <h1 style={{ padding: "100px" }}>Login Page</h1>;
}

function App() {
   useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;