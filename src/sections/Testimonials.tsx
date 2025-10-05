"use client";

/**
 * Section Avis Clients - Témoignages de satisfaction
 * Design luxe avec cartes glassmorphism style dimension.dev
 */

import Section from "@/components/Section";
import Card from "@/components/Card";
import { getTestimonials } from "@/lib/constants";
import { Star } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Testimonials() {
  const t = useTranslations("testimonials");
  const TESTIMONIALS = getTestimonials(t)

  return (
    <Section
      id="testimonials"
      title={t("title")}
      subtitle={t("subtitle")}
      background="darker"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--gap-cards)] lg:gap-[var(--gap-cards-lg)]">
        {TESTIMONIALS.map((testimonial) => (
          <Card
            key={testimonial.id}
            variant="glass"
            padding="lg"
            hover
            className="flex flex-col h-full"
          >
            {/* Étoiles */}
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className="fill-gold text-gold"
                  aria-label={t("starLabel")}
                />
              ))}
            </div>

            {/* Citation */}
            <blockquote className="text-foreground-secondary text-lg leading-relaxed mb-8 flex-grow italic">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>

            {/* Auteur */}
            <div className="flex items-center gap-4 pt-6 border-t border-border">
              <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-primary/30">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </div>
              <div>
                <p className="font-semibold text-foreground font-[family-name:var(--font-playfair)] text-lg">
                  {testimonial.name}
                </p>
                <p className="text-sm text-foreground-secondary">
                  {testimonial.role}
                </p>
                <p className="text-xs text-primary-light mt-1">
                  {testimonial.project}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
