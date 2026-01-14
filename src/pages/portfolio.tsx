import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HomePage } from "./homePage";
import { ContactPage } from "./contact";
import { SkillsPage } from "./skillsPage";
import { ProjectsPage } from "./ProjectsPage";

export function Portfolio() {
    const [currentSection, setCurrentSection] = useState<
        "home" | "projets" | "compétences" | "contact"
    >("home");
  
    return (
      <div className="relative w-screen h-screen overflow-hidden">
        {/* HomePage toujours présente mais derrière */}
        <motion.div
          key="home"
          initial={false}
          animate={{ y: 0 }}
          className="absolute w-full h-full z-0"
        >
          <HomePage onSectionChange={setCurrentSection} />
        </motion.div>
  
        <AnimatePresence mode="wait">
          {currentSection === "contact" && (
            <motion.div
              key="contact"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.6 }}
              className="absolute w-full h-full z-10"
            >
              <ContactPage onSectionChange={setCurrentSection}/>
            </motion.div>
          )}
          {currentSection === "compétences" && (
            <motion.div
              key="compétences"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.6 }}
              className="absolute w-full h-full z-10"
              >
              <SkillsPage onSectionChange={setCurrentSection}/>
            </motion.div>
          )}
          {currentSection === "projets" && (
            <motion.div
              key="projets"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.6 }}
              className="absolute w-full h-full z-10"
            >
              <ProjectsPage onSectionChange={setCurrentSection}/>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }
  

