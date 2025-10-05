"use client";

/**
 * Section À Propos - Présentation de l'entreprise
 * Avec statistiques et valeurs
 */

import { motion } from "framer-motion";
import { Award, Users, TrendingUp, Shield, Target, Heart } from "lucide-react";
import Image from "next/image";
import { COMPANY_INFO } from "@/lib/constants";
import Section from "@/components/Section";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Qualité",
      description: "Excellence et précision dans chaque projet"
    },
    {
      icon: Shield,
      title: "Fiabilité",
      description: "Respect des engagements et des délais"
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Amour du métier et satisfaction client"
    }
  ];

  const stats = [
    {
      icon: Award,
      value: `${new Date().getFullYear() - COMPANY_INFO.founded}+`,
      label: "Années d'expertise"
    },
    {
      icon: Users,
      value: `${COMPANY_INFO.employees}`,
      label: "Professionnels qualifiés"
    },
    {
      icon: TrendingUp,
      value: `${COMPANY_INFO.projects}+`,
      label: "Projets livrés"
    }
  ];

  return (
    <Section
      id="about"
      title="À propos de nous"
      subtitle="Notre histoire"
      background="elevated"
    >
      <div className="grid lg:grid-cols-2 gap-[var(--spacing-2xl)] lg:gap-[var(--spacing-3xl)] items-center">
        {/* Colonne gauche : Texte */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Plus de {new Date().getFullYear() - COMPANY_INFO.founded} ans d&apos;excellence
            dans le BTP
          </h3>

          <div className="space-y-4 text-foreground-secondary leading-relaxed">
            <p>
              Fondée en {COMPANY_INFO.founded}, <strong>{COMPANY_INFO.name}</strong> est
              devenue une référence dans le domaine de la construction, de la rénovation
              et de la maçonnerie.
            </p>
            <p>
              Notre équipe de {COMPANY_INFO.employees} professionnels passionnés met son
              savoir-faire au service de vos projets, qu&apos;ils soient résidentiels ou
              commerciaux. Nous combinons techniques traditionnelles et innovations
              modernes pour garantir des résultats durables et de qualité.
            </p>
            <p>
              Certifiés et assurés, nous respectons les normes les plus strictes du
              secteur. Chaque chantier est une nouvelle opportunité de démontrer notre
              engagement envers l&apos;excellence et la satisfaction client.
            </p>
          </div>

          {/* Statistiques */}
          <div className="grid grid-cols-3 gap-[var(--spacing-md)] mt-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <stat.icon size={24} className="text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-foreground-secondary mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Colonne droite : Image + Valeurs */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Image */}
          <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop&q=80"
              alt="Équipe BTP Excellence"
              fill
              className="object-cover"
              loading="lazy"
            />
            {/* Badge */}
            <div className="absolute bottom-6 left-6 glass-strong px-6 py-3 rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-foreground-secondary">Clients satisfaits</div>
            </div>
          </div>

          {/* Nos valeurs */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-foreground">Nos valeurs</h4>
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 glass p-4 rounded-xl"
              >
                <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <value.icon size={20} className="text-secondary" />
                </div>
                <div>
                  <h5 className="font-bold text-foreground mb-1">{value.title}</h5>
                  <p className="text-sm text-foreground-secondary">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
