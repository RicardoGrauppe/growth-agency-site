import { motion } from "framer-motion";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container flex items-center justify-between h-16 md:h-20 pt-4">
        {/* Logo - Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <a href="/" className="flex items-center group hover:opacity-80 transition-opacity">
            <img 
              src="/images/Nexus Logo Completa.png" 
              alt="NEXUS creative studio" 
              className="h-10 md:h-12 w-auto object-contain"
            />
          </a>
        </motion.div>

        {/* Language Switcher - Right Side */}
        <LanguageSwitcher />
      </div>
    </header>
  );
}

