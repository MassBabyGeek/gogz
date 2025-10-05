/**
 * Types TypeScript globaux pour l'application BTP
 * Suivant les principes SOLID et Clean Code
 */

/**
 * Service proposé par l'entreprise
 */
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

/**
 * Projet/Réalisation de l'entreprise
 */
export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  year: number;
  location: string;
}

/**
 * Élément de navigation
 */
export interface NavItem {
  label: string;
  href: string;
}

/**
 * Données du formulaire de contact
 */
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

/**
 * Props pour les composants avec enfants
 */
export interface ChildrenProps {
  children: React.ReactNode;
}

/**
 * Props communes pour les sections
 */
export interface SectionProps extends ChildrenProps {
  className?: string;
  id?: string;
}

/**
 * Témoignage client
 */
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  project: string;
  quote: string;
  avatar: string;
  rating: number;
}
