import React from 'react';
import { motion } from 'framer-motion';

const GlitchText = ({ children, className = "" }) => (
  <div className={`relative ${className}`}>
    <span className="relative z-10">{children}</span>
    <motion.span
      className="absolute top-0 left-0 text-red-500 opacity-70"
      animate={{ x: [-1, 1, -1], y: [-1, 1, 0] }}
      transition={{ duration: 0.2, repeat: Infinity, repeatType: "reverse" }}
      style={{ clipPath: 'inset(0 0 50% 0)' }}
    >
      {children}
    </motion.span>
    <motion.span
      className="absolute top-0 left-0 text-cyan-400 opacity-70"
      animate={{ x: [1, -1, 1], y: [1, -1, 0] }}
      transition={{ duration: 0.3, repeat: Infinity, repeatType: "reverse" }}
      style={{ clipPath: 'inset(50% 0 0 0)' }}
    >
      {children}
    </motion.span>
  </div>
);

export default GlitchText;