import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Sun, Moon, Menu, X } from 'lucide-react';

const Navbar = ({
  t,
  darkMode,
  isMenuOpen,
  setIsMenuOpen,
  toggleLanguage,
  toggleDarkMode,
  scrollToSection
}) => (
  <motion.nav 
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-40 border-b border-border"
  >
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <motion.div 
        className="w-12 h-12 rounded-full overflow-hidden border-2 border-cyan-400 flex items-center justify-center shadow-lg"
        animate={{
          boxShadow: darkMode
            ? [
                "0 0 0 0 rgba(6,182,212,0.7)",
                "0 0 0 8px rgba(239,68,68,0.2)",
                "0 0 0 0 rgba(6,182,212,0.7)"
              ]
            : [
                "0 0 0 0 rgba(6,182,212,0.3)",
                "0 0 0 8px rgba(239,68,68,0.1)",
                "0 0 0 0 rgba(6,182,212,0.3)"
              ]
        }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "loop" }}
      >
        <img
          src="avt3.JPEG"
          alt="Avatar"
          className="w-full h-full object-cover"
        />
      </motion.div>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8">
        {t.nav.map((item, index) => (
          <motion.button
            key={item}
            onClick={() => scrollToSection(['home', 'about', 'skills', 'projects', 'contact'][index])}
            className="relative text-muted-foreground hover:text-foreground transition-all duration-300 font-mono"
            whileHover={{ scale: 1.1 }}
          >
            {item}
            <motion.span 
              className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-red-500 to-cyan-400"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        ))}
      </div>
      
      {/* Controls */}
      <div className="flex items-center space-x-4">
        <motion.button
          onClick={toggleLanguage}
          className="p-2 rounded-lg bg-accent hover:bg-accent/80 transition-all border border-border"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Globe className="w-5 h-5 text-foreground" />
        </motion.button>
        <motion.button
          onClick={toggleDarkMode}
          className="p-2 rounded-lg bg-accent hover:bg-accent/80 transition-all border border-border"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {darkMode ? <Sun className="w-5 h-5 text-foreground" /> : <Moon className="w-5 h-5 text-foreground" />}
        </motion.button>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-accent hover:bg-accent/80 transition-all border border-border"
        >
          {isMenuOpen ? <X className="w-5 h-5 text-foreground" /> : <Menu className="w-5 h-5 text-foreground" />}
        </button>
      </div>
    </div>
    
    {/* Mobile Navigation */}
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background border-t border-border"
        >
          <div className="px-4 py-4 space-y-2">
            {t.nav.map((item, index) => (
              <button
                key={item}
                onClick={() => scrollToSection(['home', 'about', 'skills', 'projects', 'contact'][index])}
                className="block w-full text-left px-4 py-2 rounded-lg hover:bg-accent transition-colors font-mono text-foreground"
              >
                {item}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.nav>
);

export default Navbar;