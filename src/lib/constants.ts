/**
 * Constantes de l'application
 * Centralisation des données pour faciliter la maintenance (principe DRY)
 */

import { NavItem, Service, Project, Testimonial } from "./types";

/**
 * Navigation principale
 */
export const NAV_ITEMS: NavItem[] = [
  { label: "Accueil", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Réalisations", href: "#realisations" },
  { label: "À propos", href: "#about" },
  { label: "Contact", href: "#contact" },
];

/**
 * Services proposés par l'entreprise
 */
export const SERVICES: Service[] = [
  {
    id: "construction",
    title: "Construction neuve",
    description: "Nous réalisons vos projets de construction de A à Z avec expertise et qualité.",
    icon: "Building2",
    features: [
      "Maisons individuelles",
      "Bâtiments commerciaux",
      "Études techniques",
      "Suivi de chantier"
    ]
  },
  {
    id: "renovation",
    title: "Rénovation",
    description: "Rénovation complète ou partielle de vos bâtiments avec respect du cachet existant.",
    icon: "HardHat",
    features: [
      "Rénovation intérieure",
      "Rénovation extérieure",
      "Mise aux normes",
      "Rénovation énergétique"
    ]
  },
  {
    id: "maconnerie",
    title: "Maçonnerie",
    description: "Travaux de maçonnerie générale et spécialisée par des artisans qualifiés.",
    icon: "Wrench",
    features: [
      "Gros œuvre",
      "Façades",
      "Murs porteurs",
      "Fondations"
    ]
  },
  {
    id: "gros-oeuvre",
    title: "Gros œuvre",
    description: "Expertise en gros œuvre pour des structures solides et durables.",
    icon: "Hammer",
    features: [
      "Terrassement",
      "Dalle béton",
      "Charpente",
      "Élévation des murs"
    ]
  }
];

/**
 * Projets réalisés (Portfolio)
 */
export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Villa moderne Les Pins",
    category: "Construction neuve",
    description: "Villa contemporaine de 200m² avec piscine et terrasse.",
    imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
    year: 2023,
    location: "Lyon"
  },
  {
    id: "2",
    title: "Rénovation Château de la Loire",
    category: "Rénovation",
    description: "Rénovation complète d'un château du 18ème siècle.",
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
    year: 2023,
    location: "Tours"
  },
  {
    id: "3",
    title: "Immeuble résidentiel Le Parc",
    category: "Gros œuvre",
    description: "Construction d'un immeuble de 5 étages, 20 appartements.",
    imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
    year: 2022,
    location: "Marseille"
  },
  {
    id: "4",
    title: "Extension maison familiale",
    category: "Maçonnerie",
    description: "Extension de 50m² avec création d'une véranda.",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    year: 2024,
    location: "Bordeaux"
  },
  {
    id: "5",
    title: "Centre commercial Horizon",
    category: "Construction neuve",
    description: "Bâtiment commercial de 3000m² avec parking souterrain.",
    imageUrl: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop",
    year: 2022,
    location: "Lille"
  },
  {
    id: "6",
    title: "Restauration façade historique",
    category: "Rénovation",
    description: "Restauration de façade d'un bâtiment classé monument historique.",
    imageUrl: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop",
    year: 2023,
    location: "Paris"
  }
];

/**
 * Témoignages clients
 */
export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Sophie Martin",
    role: "Propriétaire",
    project: "Villa moderne Les Pins",
    quote: "Une équipe exceptionnelle qui a transformé notre rêve en réalité. La qualité du travail et le respect des délais ont dépassé nos attentes. Nous recommandons vivement BTP Excellence.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
    rating: 5
  },
  {
    id: "2",
    name: "Jean-Pierre Durand",
    role: "Directeur Général",
    project: "Centre commercial Horizon",
    quote: "Professionnalisme remarquable du début à la fin. BTP Excellence a su gérer un projet complexe avec une efficacité impressionnante. Un partenaire de confiance pour nos futurs projets.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    rating: 5
  },
  {
    id: "3",
    name: "Marie Dubois",
    role: "Architecte",
    project: "Rénovation Château de la Loire",
    quote: "Expertise technique et respect du patrimoine architectural. L'équipe a su préserver l'authenticité tout en intégrant les normes modernes. Un travail d'orfèvre absolument remarquable.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
    rating: 5
  },
  {
    id: "4",
    name: "Thomas Leclerc",
    role: "Promoteur immobilier",
    project: "Immeuble résidentiel Le Parc",
    quote: "Collaboration exemplaire sur notre projet immobilier. La rigueur et la qualité d'exécution ont permis de livrer en avance. BTP Excellence est notre partenaire privilégié.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
    rating: 5
  },
  {
    id: "5",
    name: "Isabelle Laurent",
    role: "Propriétaire",
    project: "Extension maison familiale",
    quote: "À l'écoute, réactifs et créatifs. Notre extension a été réalisée dans les règles de l'art. L'équipe a su proposer des solutions innovantes tout en respectant notre budget.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face",
    rating: 5
  },
  {
    id: "6",
    name: "François Bernard",
    role: "Chef de projet",
    project: "Restauration façade historique",
    quote: "Savoir-faire exceptionnel en restauration du patrimoine. Chaque détail a été traité avec le plus grand soin. Un résultat qui honore l'histoire du bâtiment.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    rating: 5
  }
];

/**
 * Informations de l'entreprise
 */
export const COMPANY_INFO = {
  name: "BTP Excellence",
  tagline: "Votre partenaire construction de confiance",
  description: "Expert en construction, rénovation et maçonnerie depuis plus de 25 ans.",
  phone: "+33 1 23 45 67 89",
  email: "contact@btp-excellence.fr",
  address: "15 Avenue des Bâtisseurs, 75000 Paris",
  founded: 1998,
  employees: 45,
  projects: 500
};
