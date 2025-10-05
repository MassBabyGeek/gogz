/**
 * Composant Button - Design System Luxe
 * Boutons premium avec effets glassmorphism et lueur
 */

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "gold" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

const variantClasses = {
  primary: "bg-primary text-white hover:bg-primary-light hover:shadow-[0_0_25px_rgba(56,189,248,0.5)] focus:ring-primary-light",
  secondary: "glass text-foreground hover:bg-white/10 hover:border-primary-light focus:ring-primary-light",
  gold: "bg-gradient-to-r from-gold to-gold-dark text-background hover:shadow-[0_0_25px_rgba(197,165,114,0.5)] focus:ring-gold",
  ghost: "text-foreground-secondary hover:text-primary-light hover:bg-background-elevated focus:ring-primary-light"
};

const sizeClasses = {
  sm: "px-[var(--spacing-lg)] py-[var(--spacing-sm)] text-sm",
  md: "px-[var(--spacing-xl)] py-[var(--spacing-md)] text-base",
  lg: "px-[var(--spacing-2xl)] py-[var(--spacing-lg)] text-lg"
};

export default function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        // Classes de base
        "inline-flex items-center justify-center gap-3 rounded-lg font-semibold",
        "transition-all duration-500 ease-in-out",
        "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background",
        "disabled:opacity-40 disabled:cursor-not-allowed",
        "hover:scale-105 active:scale-95",
        // Classes variant
        variantClasses[variant],
        // Classes size
        sizeClasses[size],
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
