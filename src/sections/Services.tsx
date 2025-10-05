"use client";

/**
 * Section Services - Présentation des services
 * Avec icônes dynamiques et animations au scroll
 */

import { motion } from "framer-motion";
import { Building2, HardHat, Wrench, Hammer, Check } from "lucide-react";
import Section from "@/components/Section";
import Card, { CardHeader, CardTitle, CardDescription, CardContent } from "@/components/Card";
import { useTranslations } from "next-intl";

// Map des icônes (principe Single Responsibility)
const iconMap = {
  Building2,
  HardHat,
  Wrench,
  Hammer
};

interface Service {
  id: string;
  icon: keyof typeof iconMap;
  title: string;
  description: string;
  features: string[];
}

interface ServicesProps {
  services?: Service[];
}

export default function Services({ services }: ServicesProps) {
  const t = useTranslations("services");

  // Si aucune props, on génère les services dynamiquement depuis les traductions
  const SERVICES: Service[] = services || [
    {
      id: "construction",
      icon: "Building2",
      title: t("construction.title"),
      description: t("construction.description"),
      features: [
        t("construction.features.houses"),
        t("construction.features.commercial"),
        t("construction.features.studies"),
        t("construction.features.monitoring"),
      ]
    },
    {
      id: "renovation",
      icon: "HardHat",
      title: t("renovation.title"),
      description: t("renovation.description"),
      features: [
        t("renovation.features.interior"),
        t("renovation.features.exterior"),
        t("renovation.features.standards"),
        t("renovation.features.energy"),
      ]
    },
    {
      id: "maconnerie",
      icon: "Wrench",
      title: t("masonry.title"),
      description: t("masonry.description"),
      features: [
        t("masonry.features.structure"),
        t("masonry.features.facades"),
        t("masonry.features.walls"),
        t("masonry.features.foundations"),
      ]
    },
    {
      id: "gros-oeuvre",
      icon: "Hammer",
      title: t("structural.title"),
      description: t("structural.description"),
      features: [
        t("structural.features.earthwork"),
        t("structural.features.concrete"),
        t("structural.features.framework"),
        t("structural.features.elevation"),
      ]
    }
  ];

  return (
    <Section
      id="services"
      title={t("title")}       // "Nos services"
      subtitle={t("subtitle")} // "Expertise BTP"
      background="darker"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[var(--gap-cards)] lg:gap-[var(--gap-cards-lg)]">
        {SERVICES.map((service, index) => {
          const IconComponent = iconMap[service.icon as keyof typeof iconMap];

          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card hover className="h-full">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <IconComponent size={28} className="text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>

                <CardDescription className="mb-6">
                  {service.description}
                </CardDescription>

                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check
                          size={18}
                          className="text-secondary mt-0.5 flex-shrink-0"
                        />
                        <span className="text-sm text-foreground-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-12 text-center"
      >
        <p className="text-lg text-foreground-secondary mb-6">
          {t("cta.description")} {/* "Besoin d'un service personnalisé..." */}
        </p>
        <a
          href="#contact"
          className="inline-block bg-gradient-to-r from-gold to-gold-dark text-background px-8 py-4 rounded-lg font-semibold hover:shadow-[0_0_25px_rgba(197,165,114,0.5)] transition-all duration-300"
        >
          {t("cta.button")} {/* "Demander un devis" */}
        </a>
      </motion.div>
    </Section>
  );
}
