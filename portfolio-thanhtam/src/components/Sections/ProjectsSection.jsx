import React from 'react';
import { motion } from 'framer-motion';
import GlitchText from '../BackgroundEffects/GlitchText'
import { ExternalLink, Github } from 'lucide-react';

// Thêm đường dẫn ảnh cho các dự án - bạn cần thay đổi các đường dẫn này
const projectImages = {
  footballField: "/tzfootball.png", 
  tzBookStore: "/tzbookstore.png",     
//   trafficDetection: "/images/traffic-detection-project.jpg" 
};

const ProjectsSection = ({ t }) => (
  <section id="projects" className="py-5 relative">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/10 to-transparent"></div>
    
    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <GlitchText className="text-4xl font-bold mb-4 font-mono">
          {t.projects.title}
        </GlitchText>
        <motion.div 
          className="w-32 h-1 mx-auto rounded-full"
          animate={{
            background: [
              'linear-gradient(90deg, #ef4444, #06b6d4)',
              'linear-gradient(90deg, #06b6d4, #ef4444)',
              'linear-gradient(90deg, #ef4444, #06b6d4)'
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* FootballField Project */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ 
            y: -10,
            rotateY: 5,
            boxShadow: "0 25px 50px rgba(34, 197, 94, 0.3)"
          }}
          className="group relative"
        >
          <div className="bg-gray-500/10 border border-gray-700 rounded-xl overflow-hidden backdrop-blur-sm hover:border-green-500/50 transition-all duration-500 transform-gpu">
            {/* Project Header với ảnh thực tế */}
            <div className="relative h-48 overflow-hidden">
              <img 
                src={projectImages.footballField} 
                alt="FootballField Project" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              
              {/* Floating particles */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-green-400/50 rounded-full"
                  animate={{
                    x: [Math.random() * 200, Math.random() * 200],
                    y: [Math.random() * 200, Math.random() * 200],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: i * 0.5
                  }}
                />
              ))}
              
              <div className="absolute top-4 right-4">
                <motion.span 
                  animate={{ 
                    boxShadow: [
                      "0 0 0 0 rgba(34, 197, 94, 0.7)",
                      "0 0 0 10px rgba(34, 197, 94, 0)",
                    ]
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="bg-green-500 text-white text-xs px-3 py-1 rounded-full font-mono font-bold"
                >
                  ACTIVE
                </motion.span>
              </div>

              {/* Project title overlay */}
              <div className="absolute bottom-4 left-4">
                <motion.h3 
                  className="text-xl font-bold text-white font-mono"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  FootballField
                </motion.h3>
              </div>
            </div>
            
            {/* Project Content */}
            <div className="p-6">
              <p className="text-muted-foreground text-sm mb-4 font-mono">
                Website đặt và quản lý sân bóng với React, NodeJS, MySQL
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {['React', 'NodeJS', 'MySQL', 'Tailwind'].map((tech, i) => (
                  <motion.span 
                    key={tech}
                    animate={{ 
                      color: ['#6b7280', '#22c55e', '#6b7280'],
                      borderColor: ['#374151', '#22c55e', '#374151']
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                    className="bg-gray-500/15 border text-xs px-2 py-1 rounded-full font-mono"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              
              <div className="flex space-x-2">
                <motion.a
                  href="https://tzfootball.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(34, 197, 94, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 bg-gradient-to-r from-green-600 to-green-500 text-white text-center py-2 rounded-lg font-mono text-sm flex items-center justify-center space-x-1 transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>DEMO</span>
                </motion.a>
                <motion.a
                  href="https://github.com/ThanhTam-dvl"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="p-2 border border-gray-600 rounded-lg hover:border-green-500/50 transition-all"
                >
                  <Github className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
            
            {/* Hover overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-blue-500/10 rounded-xl pointer-events-none"
            />
          </div>
        </motion.div>

        {/* TZBookStore Project */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          whileHover={{ 
            y: -10,
            rotateY: -5,
            boxShadow: "0 25px 50px rgba(168, 85, 247, 0.3)"
          }}
          className="group relative"
        >
          <div className="bg-gray-500/10 border border-gray-700 rounded-xl overflow-hidden backdrop-blur-sm hover:border-purple-500/50 transition-all duration-500">
            {/* Project Header với ảnh thực tế */}
            <div className="relative h-48 overflow-hidden">
              <img 
                src={projectImages.tzBookStore} 
                alt="TZBookStore Project" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              
              {[...Array(7)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-purple-400/50 rounded-full"
                  animate={{
                    x: [Math.random() * 200, Math.random() * 200],
                    y: [Math.random() * 200, Math.random() * 200],
                    scale: [0, 1, 0]
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: i * 0.3
                  }}
                />
              ))}
              
              <div className="absolute top-4 right-4">
                <motion.span 
                  animate={{ 
                    boxShadow: [
                      "0 0 0 0 rgba(168, 85, 247, 0.7)",
                      "0 0 0 10px rgba(168, 85, 247, 0)",
                    ]
                  }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="bg-purple-500 text-white text-xs px-3 py-1 rounded-full font-mono font-bold"
                >
                  COMPLETED
                </motion.span>
              </div>

              {/* Project title overlay */}
              <div className="absolute bottom-4 left-4">
                <motion.h3 
                  className="text-xl font-bold text-white font-mono"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  TZBookStore
                </motion.h3>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-muted-foreground text-sm mb-4 font-mono">
                Website bán sách trực tuyến với 2 phiên bản Angular+NodeJS và Laravel
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {['Angular', 'Laravel', 'NodeJS', 'MySQL'].map((tech, i) => (
                  <motion.span 
                    key={tech}
                    animate={{ 
                      color: ['#6b7280', '#a855f7', '#6b7280'],
                      borderColor: ['#374151', '#a855f7', '#374151']
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                    className="bg-gray-500/15 border text-xs px-2 py-1 rounded-full font-mono"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              
              <div className="flex space-x-2">
                <motion.a
                  href="https://tzbookstore.id.vn"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(168, 85, 247, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-purple-500 text-white text-center py-2 rounded-lg font-mono text-sm flex items-center justify-center space-x-1"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>DEMO</span>
                </motion.a>
                <motion.a
                  href="https://github.com/ThanhTam-dvl/Website_TZBookStore_LaravelMysql"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="p-2 border border-gray-600 rounded-lg hover:border-purple-500/50 transition-all"
                >
                  <Github className="w-5 h-5" />
                </motion.a>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 rounded-xl pointer-events-none"
            />
          </div>
        </motion.div>

         {/* Traffic Violation Detection Project */}
            <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ 
                y: -10,
                rotateY: 5,
                boxShadow: "0 25px 50px rgba(239, 68, 68, 0.3)"
            }}
            className="group relative"
            >
            <div className="bg-gray-500/10 border border-gray-700 rounded-xl overflow-hidden backdrop-blur-sm hover:border-red-500/50 transition-all duration-500">
                <div className="relative h-48 bg-gradient-to-br from-red-600/20 to-orange-600/20 flex items-center justify-center overflow-hidden">
                <motion.div
                    animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, -10, 10, 0]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-6xl"
                >
                    🚦
                </motion.div>
                
                {[...Array(6)].map((_, i) => (
                    <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-red-400/60 rounded-full"
                    animate={{
                        x: [0, Math.random() * 150, 0],
                        y: [0, Math.random() * 150, 0],
                        opacity: [0, 1, 0]
                    }}
                    transition={{
                        duration: 2.5 + Math.random(),
                        repeat: Infinity,
                        delay: i * 0.4
                    }}
                    />
                ))}
                
                <div className="absolute top-4 right-4">
                    <motion.span 
                    animate={{ 
                        boxShadow: [
                        "0 0 0 0 rgba(251, 191, 36, 0.7)",
                        "0 0 0 10px rgba(251, 191, 36, 0)",
                        ]
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="bg-yellow-500 text-black text-xs px-3 py-1 rounded-full font-mono font-bold"
                    >
                    AWARD
                    </motion.span>
                </div>

                {/* Project title overlay */}
                <div className="absolute bottom-4 left-4">
                    <motion.h3 
                    className="text-xl font-bold text-white font-mono"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    >
                    Traffic Detection
                    </motion.h3>
                </div>
                </div>
                
                <div className="p-6">
                
                
                <p className="text-gray-400 text-sm mb-4 font-mono">
                    Hệ thống phát hiện xe vi phạm giao thông sử dụng YOLOv8 và Computer Vision
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                    {['Python', 'OpenCV', 'PyTorch', 'YOLOv8'].map((tech, i) => (
                    <motion.span 
                        key={tech}
                        animate={{ 
                        color: ['#6b7280', '#ef4444', '#6b7280'],
                        borderColor: ['#374151', '#ef4444', '#374151']
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                        className="bg-gray-500/15 border text-xs px-2 py-1 rounded-full font-mono"
                    >
                        {tech}
                    </motion.span>
                    ))}
                </div>
                
                <div className="flex space-x-2">
                    <motion.a
                    href="https://github.com/ThanhTam-dvl/Traffic_Violation_Detection"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(239, 68, 68, 0.5)" }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-gradient-to-r from-red-600 to-red-500 text-white text-center py-2 rounded-lg font-mono text-sm flex items-center justify-center space-x-1"
                    >
                    <Github className="w-4 h-4" />
                    <span>VIEW CODE</span>
                    </motion.a>
                </div>
                </div>
                
                <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-orange-500/10 rounded-xl pointer-events-none"
                />
            </div>
            </motion.div>
      </div>

      {/* Running Text */}
      <motion.div
        className="mt-16 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <motion.div
          animate={{ x: ['100%', '-100%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="whitespace-nowrap text-4xl font-bold text-gray-500/20 font-mono"
        >
          • INTERN FULLSTACK DEVELOPER • FRONTEND (REACT, ANGULAR) • BACKEND (NODEJS, LARAVEL, MYSQL) • 
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default ProjectsSection;