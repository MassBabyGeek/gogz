"use client";

/**
 * Section À Propos - Présentation de l'entreprise
 * Avec statistiques et valeurs
 */

import { motion } from "framer-motion";
import { Award, Users, TrendingUp, Shield, Target, Heart } from "lucide-react";
import Image from "next/image";
import { getCompanyInfo } from "@/lib/constants";
import Section from "@/components/Section";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations();

  const COMPANY_INFO = getCompanyInfo(t);

  const values = [
    {
      icon: Target,
      title: t("about.values.quality.title"),
      description: t("about.values.quality.description")
    },
    {
      icon: Shield,
      title: t("about.values.trust.title"),
      description: t("about.values.trust.description")
    },
    {
      icon: Heart,
      title: t("about.values.innovation.title"),
      description: t("about.values.innovation.description")
    }
  ];

  const stats = [
    {
      icon: Award,
      value: `${new Date().getFullYear() - Number(COMPANY_INFO.founded)}+`,
      label: t("about.stats.experience")
    },
    {
      icon: Users,
      value: `${COMPANY_INFO.employees}`,
      label: t("about.stats.employees")
    },
    {
      icon: TrendingUp,
      value: `${COMPANY_INFO.projects}+`,
      label: t("about.stats.projects")
    }
  ];

  return (
    <Section
      id="about"
      title={t("about.title")}
      subtitle={t("about.subtitle")}
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
            {t("about.heading", { years: new Date().getFullYear() - Number(COMPANY_INFO.founded) })}
          </h3>

          <div className="space-y-4 text-foreground-secondary leading-relaxed">
            <p>
              {t("about.description", { founded: COMPANY_INFO.founded, name: COMPANY_INFO.name })}
            </p>
            <p>
              {t("about.mission")}
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
              alt={t("about.title")}
              fill
              className="object-cover"
              loading="lazy"
            />
            {/* Badge */}
            <div className="absolute bottom-6 left-6 glass-strong px-6 py-3 rounded-lg shadow-lg">
              <div className="text-3xl font-bold text-primary">100%</div>
              <div className="text-sm text-foreground-secondary">{t("hero.stats.satisfaction")}</div>
            </div>
          </div>

          {/* Nos valeurs */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-foreground">{t("about.values.title")}</h4>
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
