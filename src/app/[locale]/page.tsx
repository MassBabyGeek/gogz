/**
 * Page d'accueil - Site vitrine BTP Excellence
 * Architecture : Server Component avec sections lazy-loadées
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
      {/* Navigation */}
      <Header />

      {/* Contenu principal */}
      <main>
        {/* Section Hero avec animations */}
        <Hero />

        {/* Section Services */}
        <Services />

        {/* Section Portfolio/Réalisations */}
        <Portfolio />

        {/* Section À propos */}
        <About />

        {/* Section Avis Clients */}
        <Testimonials />

        {/* Section Contact */}
        <Contact />
      </main>

      {/* Pied de page */}
      <Footer />
    </>
  );
}
