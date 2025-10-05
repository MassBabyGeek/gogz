"use client";

/**
 * Section Hero - Bannière principale
 * Avec animations Framer Motion et design moderne
 */

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { COMPANY_INFO } from "@/lib/constants";
import Container from "@/components/Container";
import Button from "@/components/Button";

export default function Hero() {
  const t = useTranslations('hero');
  const tCompany = useTranslations('company');

  const years = new Date().getFullYear() - COMPANY_INFO.founded;

  const features = [
    t('features.quote'),
    t('features.team'),
    t('features.warranty'),
    t('features.deadline')
  ];
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-32 md:pt-40 pb-16 overflow-hidden"
    >
      {/* Image de fond avec overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&h=1080&fit=crop&q=80"
          alt="Chantier de construction"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary-dark/85 to-primary-dark/70" />
      </div>

      {/* Contenu */}
      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Colonne gauche : Texte */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-secondary/30"
            >
              <CheckCircle2 size={20} className="text-secondary" />
              <span className="text-sm font-semibold">
                {t('badge', { year: COMPANY_INFO.founded, projects: COMPANY_INFO.projects })}
              </span>
            </motion.div>

            {/* Titre principal */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              {tCompany('tagline')}
            </motion.h1>

            {/* Sous-titre */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed"
            >
              {t('description', { years })}
            </motion.p>

            {/* Points clés */}
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-3 mb-8"
            >
              {features.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 size={24} className="text-secondary flex-shrink-0" />
                  <span className="text-lg">{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                variant="secondary"
                onClick={() => window.location.href = '#contact'}
                className="group"
              >
                {t('cta.primary')}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="secondary"
                onClick={() => window.location.href = '#realisations'}
                className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary-dark"
              >
                {t('cta.secondary')}
              </Button>
            </motion.div>
          </motion.div>

          {/* Colonne droite : Statistiques */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:grid grid-cols-2 gap-[var(--spacing-md)]"
          >
            {[
              {
                value: `${years}+`,
                label: t('stats.experience')
              },
              {
                value: `${COMPANY_INFO.projects}+`,
                label: t('stats.projects')
              },
              {
                value: `${COMPANY_INFO.employees}`,
                label: t('stats.employees')
              },
              {
                value: "100%",
                label: t('stats.satisfaction')
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all"
              >
                <div className="text-4xl font-bold text-secondary mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-200 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>

      {/* Indicateur de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
