import { useState } from "react";
import { motion } from "framer-motion";

type Language = "pt" | "en";

export default function LanguageSwitcher() {
  const [language, setLanguage] = useState<Language>("en");

  const toggleLanguage = () => {
    setLanguage(prev => prev === "en" ? "pt" : "en");
    // Aqui você pode adicionar a lógica de mudança de idioma
    // Por exemplo, usando um contexto de i18n
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex items-center"
    >
      <button
        onClick={toggleLanguage}
        className="relative flex items-center justify-center gap-2 px-2 py-1.5 rounded-2xl transition-all group"
        style={{ backgroundColor: '#ffffff' }}
        aria-label="Switch language"
      >
        {/* Brazil Flag */}
        <div className={`flex items-center justify-center gap-1.5 transition-all ${language === "pt" ? "opacity-100 scale-100" : "opacity-40 scale-95"}`}>
          <span 
            className="text-lg leading-none flex items-center justify-center"
            style={{ filter: language === "pt" ? "none" : "grayscale(100%) brightness(0.7)" }}
          >
            🇧🇷
          </span>
          <span className="text-xs font-semibold leading-none" style={{ color: '#000000' }}>PT</span>
        </div>

        {/* Switch indicator */}
        <div className="relative w-9 h-5 rounded-full p-0.5 transition-all flex items-center" style={{ backgroundColor: '#e8e8e8' }}>
          <motion.div
            className="absolute w-4 h-4 rounded-full shadow-md"
            style={{ backgroundColor: '#fe4151' }}
            animate={{
              x: language === "en" ? 16 : 2,
            }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 30,
            }}
          />
        </div>

        {/* USA Flag */}
        <div className={`flex items-center justify-center gap-1.5 transition-all ${language === "en" ? "opacity-100 scale-100" : "opacity-40 scale-95"}`}>
          <span 
            className="text-lg leading-none flex items-center justify-center"
            style={{ filter: language === "en" ? "none" : "grayscale(100%) brightness(0.7)" }}
          >
            🇺🇸
          </span>
          <span className="text-xs font-semibold leading-none" style={{ color: '#000000' }}>EN</span>
        </div>
      </button>
    </motion.div>
  );
}

