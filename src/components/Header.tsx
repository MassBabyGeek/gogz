"use client";

/**
 * Header Navigation - Design System Luxe
 * Navigation fixe glassmorphism avec fond sombre premium
 */

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { getCompanyInfo } from "@/lib/constants";
import Container from "./Container";
import Button from "./Button";
import LanguageSwitcher from "./LanguageSwitcher";

const navItems = [
  { href: "#hero", key: "home" },
  { href: "#services", key: "services" },
  { href: "#realisations", key: "portfolio" },
  { href: "#about", key: "about" },
  { href: "#contact", key: "contact" }
];

export default function Header() {
  const t = useTranslations('nav');
  const tCompany = useTranslations('company');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const COMPANY_INFO = getCompanyInfo(tCompany)

  // Détection du scroll pour effet glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "glass-strong py-4 shadow-lg shadow-black/20"
          : "bg-background/30 backdrop-blur-md py-6 border-b border-border/30"
      )}
    >
      <Container>
        <nav className="flex items-center justify-between" aria-label="Navigation principale">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center shadow-lg shadow-primary/30">
              <span className="text-white font-bold text-xl font-[family-name:var(--font-playfair)]">BE</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-foreground font-[family-name:var(--font-playfair)]">
                {tCompany('name')}
              </h1>
              <p className="text-xs text-foreground-secondary hidden md:block">
                {tCompany('tagline')}
              </p>
            </div>
          </div>

          {/* Navigation Desktop */}
          <ul className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-foreground-secondary hover:text-primary-light font-medium transition-all duration-300 hover:scale-110 inline-block"
                >
                  {t(item.key as "home" | "services" | "portfolio" | "about" | "contact")}
                </a>
              </li>
            ))}
          </ul>

          {/* Bouton CTA Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher />
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-2 text-foreground-secondary hover:text-gold transition-colors duration-300"
              aria-label={`Appeler au ${COMPANY_INFO.phone}`}
            >
              <Phone size={20} />
              <span className="font-semibold">{COMPANY_INFO.phone}</span>
            </a>
            <Button size="sm" variant="gold" onClick={() => window.location.href = '#contact'}>
              {t('cta')}
            </Button>
          </div>

          {/* Bouton Menu Mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary-light transition-colors rounded-lg hover:bg-background-elevated"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Menu Mobile */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 glass-strong rounded-xl p-6 animate-in fade-in slide-in-from-top-5 duration-300">
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={handleNavClick}
                    className="block text-foreground hover:text-primary-light font-medium text-lg transition-colors py-2 px-4 rounded-lg hover:bg-background-elevated"
                  >
                    {t(item.key as "home" | "services" | "portfolio" | "about" | "contact")}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col gap-4 pt-6 border-t border-border">
              <div className="flex justify-center mb-2">
                <LanguageSwitcher />
              </div>
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center gap-3 text-foreground-secondary hover:text-gold transition-colors py-2 px-4"
              >
                <Phone size={20} />
                <span className="font-semibold">{COMPANY_INFO.phone}</span>
              </a>
              <Button
                className="w-full"
                variant="gold"
                onClick={() => {
                  handleNavClick();
                  window.location.href = '#contact';
                }}
              >
                {t('cta')}
              </Button>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
