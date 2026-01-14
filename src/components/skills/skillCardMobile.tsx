import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SkillCardMobileProps {
  title: string;
  iconSrc: string;
  knowledge: string[]; // liste de compétences ou sous-domaines
}

export function SkillCardMobile({ title, iconSrc, knowledge }: SkillCardMobileProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <motion.div
      layout
      onClick={() => setIsOpen(!isOpen)}
      transition={{ layout: { duration: 0.5, ease: "easeInOut" } }}
      className={ `w-full h-40 cursor-pointer overflow-hidden flex flex-col justify-center items-center relative
        ${isOpen ? "flexcolumn-[5] bg-white" : "flexcolumn-[1] bg-white"}`}
      
      >
      

        <motion.div
        layout="position"
        className="flex justify-center items-center gap-4 w-full px-6"
        >
          <motion.img 
          layout
          src={iconSrc} 
          alt={title} 
          className="w-12 h-12 object-contain"
          transition={{ layout: { duration: 0.5, ease: "easeInOut" } }}
          />
          <motion.h2
          layout
          className="text-2xl font-bold"
          transition={{ layout: { duration: 0.5, ease: "easeInOut" } }}
          >{title}
          </motion.h2>
        </motion.div>
          
    </motion.div>

    <AnimatePresence>
      {isOpen && (
        <motion.div
      layout 
      initial={{ opacity: 0 }}
      animate={{ opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 1 }}
      className={ `w-full px-6 mb-4 overflow-hidden
        ${isOpen ? "block" : "hidden"}` } 
        >
        <motion.ul>
            {knowledge.map((item, index) => (
              <motion.li 
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="px-3 py-2 text-gray-800 rounded-lg shadow-sm"
              >
                {item}
              </motion.li>
            ))}
        </motion.ul>
      </motion.div>
      )}
      
    </AnimatePresence>
    </>
  );
}
