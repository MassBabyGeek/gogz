"use client";

/**
 * Footer - Design System Luxe
 * Pied de page sombre premium avec séparateurs élégants
 */

import { MapPin, Phone, Mail, Facebook, Linkedin, Instagram } from "lucide-react";
import { useTranslations } from "next-intl";
import { getCompanyInfo } from "@/lib/constants";
import Container from "./Container";

const navItems = [
  { href: "#hero", key: "home" },
  { href: "#services", key: "services" },
  { href: "#realisations", key: "portfolio" },
  { href: "#about", key: "about" },
  { href: "#contact", key: "contact" }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const t = useTranslations('nav');
  const tFooter = useTranslations('footer');
  const tCompany = useTranslations('company');
  const tServices = useTranslations('services');

  const COMPANY_INFO = getCompanyInfo(tCompany) 

  return (
    <footer className="bg-background-secondary border-t border-border">
      {/* Contenu principal du footer */}
      <div className="py-16 md:py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            {/* Colonne 1 : À propos */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold-dark rounded-lg flex items-center justify-center shadow-lg shadow-gold/20">
                  <span className="text-background font-bold text-xl font-[family-name:var(--font-playfair)]">BE</span>
                </div>
                <h3 className="text-xl font-bold text-foreground font-[family-name:var(--font-playfair)]">
                  {tCompany('name')}
                </h3>
              </div>
              <p className="text-foreground-secondary leading-relaxed mb-6">
                {tFooter('description')}
              </p>
              <div className="flex gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-lg glass hover:bg-primary-light/20 hover:text-primary-light transition-all duration-300"
                  aria-label={tFooter('social.facebookLabel')}
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-lg glass hover:bg-primary-light/20 hover:text-primary-light transition-all duration-300"
                  aria-label={tFooter('social.linkedinLabel')}
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-lg glass hover:bg-primary-light/20 hover:text-primary-light transition-all duration-300"
                  aria-label={tFooter('social.instagramLabel')}
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            {/* Colonne 2 : Navigation */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-foreground font-[family-name:var(--font-playfair)]">{tFooter('quickLinks')}</h4>
              <ul className="space-y-3">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-foreground-secondary hover:text-primary-light transition-colors duration-300 inline-block"
                    >
                      {t(item.key as "home" | "services" | "portfolio" | "about" | "contact")}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Colonne 3 : Services */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-foreground font-[family-name:var(--font-playfair)]">{t('services')}</h4>
              <ul className="space-y-3 text-foreground-secondary">
                <li className="hover:text-primary-light transition-colors duration-300 cursor-pointer">{tServices('construction.title')}</li>
                <li className="hover:text-primary-light transition-colors duration-300 cursor-pointer">{tServices('renovation.title')}</li>
                <li className="hover:text-primary-light transition-colors duration-300 cursor-pointer">{tServices('masonry.title')}</li>
                <li className="hover:text-primary-light transition-colors duration-300 cursor-pointer">{tServices('structural.title')}</li>
              </ul>
            </div>

            {/* Colonne 4 : Contact */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-foreground font-[family-name:var(--font-playfair)]">{t('contact')}</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin size={20} className="text-gold mt-1 flex-shrink-0" />
                  <span className="text-foreground-secondary">{tCompany('address')}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={20} className="text-gold flex-shrink-0" />
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="text-foreground-secondary hover:text-primary-light transition-colors duration-300"
                  >
                    {tCompany('phone')}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={20} className="text-gold flex-shrink-0" />
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-foreground-secondary hover:text-primary-light transition-colors duration-300"
                  >
                    {tCompany('email')}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>

      {/* Séparateur élégant */}
      <div className="elegant-divider" />

      {/* Barre du bas */}
      <div className="py-8">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground-muted">
            <p>
              {tFooter('copyright', { year: currentYear })}
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
