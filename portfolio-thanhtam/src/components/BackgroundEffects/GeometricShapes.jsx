import React from 'react';
import { motion } from 'framer-motion';

const GeometricShapes = () => {
  const shapes = [
    { type: 'triangle', x: 10, y: 20, size: 20, duration: 8 },
    { type: 'square', x: 80, y: 70, size: 15, duration: 12 },
    { type: 'circle', x: 20, y: 80, size: 25, duration: 10 },
    { type: 'diamond', x: 70, y: 30, size: 18, duration: 15 },
    { type: 'hexagon', x: 40, y: 60, size: 22, duration: 9 }
  ];

  const getShapeComponent = (shape) => {
    const baseClasses = "absolute border border-gray-500/30 opacity-20";
    switch(shape.type) {
      case 'triangle':
        return <div className={`${baseClasses} w-0 h-0`} style={{
          borderLeft: `${shape.size/2}px solid transparent`,
          borderRight: `${shape.size/2}px solid transparent`,
          borderBottom: `${shape.size}px solid rgba(107,114,128,0.3)`
        }} />;
      case 'square':
        return <div className={`${baseClasses} w-[${shape.size}px] h-[${shape.size}px] rotate-45`} />;
      case 'circle':
        return <div className={`${baseClasses} w-[${shape.size}px] h-[${shape.size}px] rounded-full`} />;
      case 'diamond':
        return <div className={`${baseClasses} w-[${shape.size}px] h-[${shape.size}px] rotate-45`} />;
      default:
        return <div className={`${baseClasses} w-[${shape.size}px] h-[${shape.size}px]`} />;
    }
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ left: `${shape.x}%`, top: `${shape.y}%` }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {getShapeComponent(shape)}
        </motion.div>
      ))}
    </div>
  );
};

export default GeometricShapes;