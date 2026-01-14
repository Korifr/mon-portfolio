import { motion } from "framer-motion";
import { useState } from "react";

interface Project {
    id: number;
    backgroundColor?: string;
    title?: string;
    description: string;
    logo?: string;
    image: string;
    buttonText?: string;
    buttonLink?: string;
    tags?: Tags[];
}

interface Tags {
    id: number;
    name: string;
    color: string;
}

interface ProjectsPageProps {
    onSectionChange: (section: "home") => void;
}

const TagsData: Tags[] = [
    { id: 1, name: "En cours", color: "#3B82F6" },
    { id: 2, name: "Terminé", color: "#22C55E" },
];

const projects: Project[] = [
  {
    id: 1,
    backgroundColor: "#ff8800",
    title: "FoodlyShare",
    description: "Application web avec React & Spring Boot. Plateforme de partage de recettes permettant de créer, illustrer et découvrir des plats du monde entier",
    logo: "/assets/img/logoFs.png",
    image: "/assets/img/foodlyshare.png",
    buttonText: "Voir le projet",
    buttonLink: "https://github.com/FoodlyShare/FoodlyShare",
    tags: [TagsData[1]],
  },
  {
    id: 2,
    backgroundColor: "black",
    title: "Portfolio",
    description: "Portfolio Personnel avec React & Typescript.",
    logo: "/assets/img/logo.png",
    image: "/assets/img/portfolio.png",
    buttonText: "Voir le projet",
    buttonLink: "https://github.com/MaximeLamarche/Portfolio",
    tags: [TagsData[0]],
  },
];

export function ProjectsPage({ onSectionChange }: ProjectsPageProps) {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <div className="w-full h-screen flex flex-col overflow-hidden bg-black text-white sm:flex-row">
        <div className="absolute top-4 left-4 sm:top-4 sm:left-4 z-20">
            <button
                onClick={() => onSectionChange("home")}
                className="px-4 py-2 bg-black text-white border-2 border-white font-semibold rounded-lg shadow-md hover:bg-white hover:text-black transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white"
            >
                Accueil
            </button>
        </div>
      {projects.map((project) => {
        const isActive = project.id === activeId;

        return (
          <motion.div
            key={project.id}
            layout
            onClick={() => setActiveId(isActive ? null : project.id)}
            transition={{ layout: { duration: 0.6, ease: "easeInOut" } }}
            className={`relative cursor-pointer overflow-hidden ${
              isActive ? "flex-[5]" : "flex-[1]"
            } transition-[flex] duration-700 ease-in-out flex items-center justify-center`}
            style={{
              backgroundColor: isActive ? "transparent" : project.backgroundColor,
            }}
          >
            {/* Image (apparaît uniquement si actif) */}
            <motion.img
              src={project.image}
              alt={project.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: isActive ? 1 : 0 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay sombre quand actif */}
            {isActive && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: ( window.innerWidth >= 640 ? 0.2 : 0.7) }}
                className="absolute inset-0 bg-black"
              />
            )}

            {/* Contenu */}
            <motion.div
              layout
              className="relative z-10 text-center flex flex-col items-center justify-center p-6"
            >
              {/* Logo (disparaît quand actif) */}
              {project.logo && (
                <motion.img
                  src={project.logo}
                  alt={`${project.title} logo`}
                  initial={false}
                  animate={{
                    opacity: isActive ? 0 : 1,
                    scale: isActive ? 0.8 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                  className="mb-4 object-contain" style={{ width: (window.innerWidth >= 640 ? 600 : 200), height: (window.innerWidth >= 640 ? 600 : 100) }}
                />
              )}

            {/* ✅ Tags + Titre dans une div */}
            <motion.div
                layout
                className="flex flex-col items-center justify-center space-y-3"
                animate={{
                    x: isActive ? (window.innerWidth >= 640 ? 500 : 0) : 0, // seulement sur desktop
                    y: isActive ? (window.innerWidth >= 640 ? -300 : 0) : 0,
                }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
              >
                {/* Tags dynamiques */}
                {isActive && project.tags && (
                  <div className="flex gap-3 mb-2">
                    {project.tags.map((tag) => (
                      <motion.div
                        key={tag.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="px-4 py-1 text-black font-semibold rounded-full text-sm"
                        style={{ backgroundColor: tag.color }}
                      >
                        {tag.name}
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Titre */}
                <motion.h2
                  layout
                  className="sm:text-5xl text-4xl font-bold "
                  animate={{
                    opacity: 1,
                    scale: isActive ? 1.2 : 1,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                >
                  {project.title}
                </motion.h2>
              </motion.div>

              {/* Description (apparait uniquement quand actif) */}
              {isActive && (
                <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                    opacity: 1,
                    scale: isActive ? 1.2 : 1, 
                    x: isActive ? (window.innerWidth >= 640 ? 500 : 0) : 0,
                    y: isActive ? (window.innerWidth >= 640 ? -300 : 0) : 0, 
                }}
                transition={{
                    duration: 0.8,
                    ease: [0.76, 0, 0.24, 1],
                }}
                  exit={{ opacity: 0 }}
                  className="mt-6 text-gray-300 max-w-md"
                >
                  {project.description}
                </motion.p>
              )}

                {/* Bouton (apparaît uniquement si actif) */}
                {isActive && (
                <motion.a
                    href={project.buttonLink || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                        opacity: 1,
                        scale: isActive ? 1.2 : 1, 
                        x: isActive ? (window.innerWidth >= 640 ? 500 : 0) : 0,
                        y: isActive ? (window.innerWidth >= 640 ? -300 : 0) : 0,
                    }}
                    transition={{
                        duration: 0.3,
                        ease: [0.76, 0, 0.24, 1],
                    }}
                    exit={{ opacity: 0 }}
                    className="mt-8 inline-block px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-100 transition duration-300 ease-in-out"
                >
                    {project.buttonText || "Voir le projet"}
                </motion.a>
                )}
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
