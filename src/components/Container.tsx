/**
 * Composant Container - Design System Luxe
 * Centrage parfait avec padding généreux pour design premium
 */

import { cn } from "@/lib/utils";
import { SectionProps } from "@/lib/types";

interface ContainerProps extends SectionProps {
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
}

const maxWidthClasses = {
  sm: "max-w-screen-sm",
  md: "max-w-screen-md",
  lg: "max-w-screen-lg",
  xl: "max-w-screen-xl",
  "2xl": "max-w-screen-2xl",
  full: "max-w-full"
};

export default function Container({
  children,
  className,
  maxWidth = "xl",
  id
}: ContainerProps) {
  return (
    <div
      id={id}
      className={cn(
        // Espacement cohérent : 24px mobile → 80px desktop
        "mx-auto w-full px-[var(--container-padding-x)] lg:px-[var(--container-padding-x-lg)]",
        maxWidthClasses[maxWidth],
        className
      )}
    >
      {children}
    </div>
  );
}
