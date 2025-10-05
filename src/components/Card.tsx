/**
 * Composant Card - Design System Luxe
 * Carte glassmorphism avec fond sombre premium
 */

import { cn } from "@/lib/utils";
import { ChildrenProps } from "@/lib/types";

interface CardProps extends ChildrenProps {
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
  variant?: "glass" | "elevated" | "bordered";
}

const paddingClasses = {
  sm: "p-[var(--card-padding-sm)]",
  md: "p-[var(--card-padding-md)]",
  lg: "p-[var(--card-padding-lg)]"
};

const variantClasses = {
  glass: "glass",
  elevated: "bg-background-elevated border border-border",
  bordered: "bg-background-secondary border border-border-light"
};

export default function Card({
  children,
  className,
  hover = false,
  padding = "md",
  variant = "glass"
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl",
        variantClasses[variant],
        paddingClasses[padding],
        hover && "glow-on-hover",
        className
      )}
    >
      {children}
    </div>
  );
}

/**
 * Sous-composants pour une meilleure composition (principe SOLID)
 */
export function CardHeader({
  children,
  className
}: ChildrenProps & { className?: string }) {
  return (
    <div className={cn("mb-[var(--spacing-lg)]", className)}>
      {children}
    </div>
  );
}

export function CardTitle({
  children,
  className
}: ChildrenProps & { className?: string }) {
  return (
    <h3 className={cn("text-2xl font-bold text-foreground font-[family-name:var(--font-playfair)]", className)}>
      {children}
    </h3>
  );
}

export function CardDescription({
  children,
  className
}: ChildrenProps & { className?: string }) {
  return (
    <p className={cn("text-foreground-secondary leading-relaxed", className)}>
      {children}
    </p>
  );
}

export function CardContent({
  children,
  className
}: ChildrenProps & { className?: string }) {
  return (
    <div className={cn(className)}>
      {children}
    </div>
  );
}
