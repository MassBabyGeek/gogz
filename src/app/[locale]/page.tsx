/**
 * Page d'accueil - Site vitrine BTP Excellence
 * Architecture optimisée avec Server Components
 */

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import Portfolio from "@/sections/Portfolio";
import About from "@/sections/About";
import Testimonials from "@/sections/Testimonials";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
