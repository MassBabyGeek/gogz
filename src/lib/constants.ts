"use client";

import { useTranslations } from "next-intl";
import { NavItem, Service, Project, Testimonial } from "./types";

/**
 * Navigation principale
 */
export const getNavItems = (t: ReturnType<typeof useTranslations>): NavItem[] => [
  { label: t("nav.home"), href: "#hero" },
  { label: t("nav.services"), href: "#services" },
  { label: t("nav.portfolio"), href: "#realisations" },
  { label: t("nav.about"), href: "#about" },
  { label: t("nav.contact"), href: "#contact" },
];

/**
 * Services proposés par l'entreprise
 */
export const getServices = (t: ReturnType<typeof useTranslations>): Service[] => [
  {
    id: "construction",
    title: t("construction.title"),
    description: t("construction.description"),
    icon: "Building2",
    features: [
      t("construction.features.houses"),
      t("construction.features.commercial"),
      t("construction.features.studies"),
      t("construction.features.monitoring"),
    ]
  },
  {
    id: "renovation",
    title: t("renovation.title"),
    description: t("renovation.description"),
    icon: "HardHat",
    features: [
      t("renovation.features.interior"),
      t("renovation.features.exterior"),
      t("renovation.features.standards"),
      t("renovation.features.energy"),
    ]
  },
  {
    id: "maconnerie",
    title: t("masonry.title"),
    description: t("masonry.description"),
    icon: "Wrench",
    features: [
      t("masonry.features.structure"),
      t("masonry.features.facades"),
      t("masonry.features.walls"),
      t("masonry.features.foundations"),
    ]
  },
  {
    id: "gros-oeuvre",
    title: t("structural.title"),
    description: t("structural.description"),
    icon: "Hammer",
    features: [
      t("structural.features.earthwork"),
      t("structural.features.concrete"),
      t("structural.features.framework"),
      t("structural.features.elevation"),
    ]
  }
];

/**
 * Projets réalisés (Portfolio)
 */
export const getProjects = (t: ReturnType<typeof useTranslations>): Project[] => [
  {
    id: "villa",
    title: t("projects.villa.title"),
    category: t("projects.villa.category"),
    description: t("projects.villa.description"),
    imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
    year: 2023,
    location: t("projects.villa.location")
  },
  {
    id: "castle",
    title: t("projects.castle.title"),
    category: t("projects.castle.category"),
    description: t("projects.castle.description"),
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
    year: 2023,
    location: t("projects.castle.location")
  },
  {
    id: "building",
    title: t("projects.building.title"),
    category: t("projects.building.category"),
    description: t("projects.building.description"),
    imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
    year: 2022,
    location: t("projects.building.location")
  },
  {
    id: "extension",
    title: t("projects.extension.title"),
    category: t("projects.extension.category"),
    description: t("projects.extension.description"),
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    year: 2024,
    location: t("projects.extension.location")
  },
  {
    id: "mall",
    title: t("projects.mall.title"),
    category: t("projects.mall.category"),
    description: t("projects.mall.description"),
    imageUrl: "https://images.unsplash.com/photo-1481437156560-3205f6a55735?q=80&w=1195&auto=format&fit=crop&ixlib=rb-4.1.0",
    year: 2022,
    location: t("projects.mall.location")
  },
  {
    id: "facade",
    title: t("projects.facade.title"),
    category: t("projects.facade.category"),
    description: t("projects.facade.description"),
    imageUrl: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",
    year: 2023,
    location: t("projects.facade.location")
  }
];

/**
 * Témoignages clients
 */
export const getTestimonials = (t: ReturnType<typeof useTranslations>): Testimonial[] => [
  {
    id: "sophie",
    name: t("clients.sophie.name"),
    role: t("clients.sophie.role"),
    project: t("clients.sophie.project"),
    quote: t("clients.sophie.quote"),
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
    rating: 5
  },
  {
    id: "jean",
    name: t("clients.jean.name"),
    role: t("clients.jean.role"),
    project: t("clients.jean.project"),
    quote: t("clients.jean.quote"),
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    rating: 5
  },
  {
    id: "marie",
    name: t("clients.marie.name"),
    role: t("clients.marie.role"),
    project: t("clients.marie.project"),
    quote: t("clients.marie.quote"),
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
    rating: 5
  },
  {
    id: "thomas",
    name: t("clients.thomas.name"),
    role: t("clients.thomas.role"),
    project: t("clients.thomas.project"),
    quote: t("clients.thomas.quote"),
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
    rating: 5
  },
  {
    id: "isabelle",
    name: t("clients.isabelle.name"),
    role: t("clients.isabelle.role"),
    project: t("clients.isabelle.project"),
    quote: t("clients.isabelle.quote"),
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face",
    rating: 5
  },
  {
    id: "francois",
    name: t("clients.francois.name"),
    role: t("clients.francois.role"),
    project: t("clients.francois.project"),
    quote: t("clients.francois.quote"),
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    rating: 5
  }
];

/**
 * Informations de l'entreprise
 */
export const getCompanyInfo = (t: ReturnType<typeof useTranslations>) => ({
  name: t("name"),
  tagline: t("tagline"),
  description: t("description"),
  phone: t("phone"),
  email: t("email"),
  address: t("address"),
  founded: t("founded"),
  employees: 45, // tu peux garder les valeurs fixes ou les traduire si nécessaire
  projects: 500
});
