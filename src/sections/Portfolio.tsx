"use client";

/**
 * Section Portfolio - Réalisations
 * Galerie de projets avec filtres et lazy loading
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import Image from "next/image";
import { PROJECTS } from "@/lib/constants";
import Section from "@/components/Section";

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Tous");

  // Extraction des catégories uniques (principe DRY)
  const categories = ["Tous", ...Array.from(new Set(PROJECTS.map(p => p.category)))];

  // Filtrage des projets
  const filteredProjects = selectedCategory === "Tous"
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <Section
      id="realisations"
      title="Nos réalisations"
      subtitle="Portfolio"
      background="dark"
    >
      {/* Filtres */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-200 ${
              selectedCategory === category
                ? "bg-primary text-white shadow-lg"
                : "glass text-foreground-secondary hover:glass-strong hover:text-primary-light"
            }`}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Grille de projets */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="group relative glass rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Overlay au hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Badge catégorie */}
                <div className="absolute top-4 right-4 bg-secondary text-primary-dark px-3 py-1 rounded-full text-sm font-semibold">
                  {project.category}
                </div>
              </div>

              {/* Contenu */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-foreground-secondary mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Métadonnées */}
                <div className="flex items-center gap-4 text-sm text-foreground-secondary">
                  <div className="flex items-center gap-1">
                    <MapPin size={16} className="text-secondary" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={16} className="text-secondary" />
                    <span>{project.year}</span>
                  </div>
                </div>
              </div>

              {/* Bouton détails (visible au hover) */}
              <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <button className="w-full bg-secondary text-primary-dark py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors">
                  Voir les détails
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Message si aucun résultat */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-foreground-secondary text-lg">
            Aucun projet trouvé dans cette catégorie.
          </p>
        </div>
      )}
    </Section>
  );
}
