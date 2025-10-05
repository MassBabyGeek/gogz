/**
 * Composant Section - Design System Luxe
 * Espacements généreux et fond sombre premium
 */

import { cn } from "@/lib/utils";
import Container from "./Container";

interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  background?: "dark" | "darker" | "elevated";
}

const backgroundClasses = {
  dark: "bg-background",
  darker: "bg-background-secondary",
  elevated: "bg-background-elevated"
};

export default function Section({
  id,
  title,
  subtitle,
  children,
  className,
  background = "dark"
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        // Espacement cohérent : 80px mobile → 112px tablet → 160px desktop
        "py-[var(--section-padding-y)] md:py-[var(--section-padding-y-md)] lg:py-[var(--section-padding-y-lg)]",
        backgroundClasses[background],
        className
      )}
    >
      <Container>
        {/* En-tête de section */}
        {(title || subtitle) && (
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            {subtitle && (
              <p className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] mb-4 md:mb-6 text-primary-light">
                {subtitle}
              </p>
            )}
            {title && (
              <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-[family-name:var(--font-playfair)] title-dimension leading-[1.1] tracking-tight px-4">
                {title}
              </h2>
            )}
          </div>
        )}

        {/* Contenu de la section */}
        {children}
      </Container>
    </section>
  );
}
