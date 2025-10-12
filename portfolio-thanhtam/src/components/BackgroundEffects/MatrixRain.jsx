import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const MatrixRain = () => {
  const [drops, setDrops] = useState([]);
  useEffect(() => {
    const generateDrops = () => {
      const newDrops = [];
      for (let i = 0; i < 15; i++) {
        newDrops.push({
          id: i,
          x: Math.random() * 100,
          delay: Math.random() * 5,
          duration: 3 + Math.random() * 2,
        });
      }
      setDrops(newDrops);
    };
    generateDrops();
  }, []);
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 opacity-20">
      {drops.map((drop) => (
        <motion.div
          key={drop.id}
          className="absolute w-px bg-gradient-to-b from-transparent via-gray-400 to-transparent"
          style={{ left: `${drop.x}%`, height: '100px' }}
          animate={{
            y: [-100, window.innerHeight + 100],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: drop.duration,
            delay: drop.delay,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

export default MatrixRain;