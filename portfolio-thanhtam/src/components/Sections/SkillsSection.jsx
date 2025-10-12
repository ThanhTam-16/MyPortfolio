import React from 'react';
import { motion } from 'framer-motion';
import GlitchText from '../BackgroundEffects/GlitchText';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaPython, FaPhp, FaReact, FaAngular, 
  FaNodeJs, FaLaravel, FaDocker, FaGithub, FaUsers, FaLightbulb, 
  FaClock 
} from "react-icons/fa";
import { 
  SiTypescript, SiNextdotjs, SiExpress, SiMongodb, SiMysql, 
  SiPostman, SiTailwindcss, SiAntdesign, SiSocketdotio, 
  SiGraphql, SiVercel 
} from "react-icons/si";
import { DiVisualstudio} from "react-icons/di";
import { MdOutlineCode, MdMessage } from "react-icons/md";
import { TbBolt } from "react-icons/tb";
import { Zap } from 'lucide-react';

const SkillsSection = ({ t }) => {
  const skillCategories = [
    {
    title: "Programming Languages",
    icon: MdOutlineCode,
    skills: [
      { name: "JavaScript", icon: FaJs, color: "text-yellow-500", hoverColor: "group-hover:text-yellow-400", bgColor: "bg-yellow-500/10" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-600", hoverColor: "group-hover:text-blue-500", bgColor: "bg-blue-600/10" },
      { name: "Python", icon: FaPython, color: "text-green-500", hoverColor: "group-hover:text-green-400", bgColor: "bg-green-500/10" },
      { name: "PHP", icon: FaPhp, color: "text-purple-500", hoverColor: "group-hover:text-purple-400", bgColor: "bg-purple-500/10" }
    ]
  },
  {
    title: "Frontend",
    icon: FaReact,
    skills: [
      { name: "HTML", icon: FaHtml5, color: "text-orange-500", hoverColor: "group-hover:text-orange-400", bgColor: "bg-orange-500/10" },
      { name: "CSS/SCSS", icon: FaCss3Alt, color: "text-blue-500", hoverColor: "group-hover:text-blue-400", bgColor: "bg-blue-500/10" },
      { name: "ReactJS", icon: FaReact, color: "text-cyan-500", hoverColor: "group-hover:text-cyan-400", bgColor: "bg-cyan-500/10" },
      { name: "Angular", icon: FaAngular, color: "text-red-600", hoverColor: "group-hover:text-red-500", bgColor: "bg-red-600/10" },
      { name: "TailwindCSS", icon: SiTailwindcss, color: "text-cyan-400", hoverColor: "group-hover:text-cyan-300", bgColor: "bg-cyan-400/10" },
    ]
  },
  {
    title: "Backend",
    icon: FaNodeJs,
    skills: [
      { name: "NodeJS", icon: FaNodeJs, color: "text-green-600", hoverColor: "group-hover:text-green-500", bgColor: "bg-green-600/10" },
      { name: "Express", icon: SiExpress, color: "text-gray-500", hoverColor: "group-hover:text-gray-400", bgColor: "bg-gray-500/10" },
      { name: "Laravel", icon: FaLaravel, color: "text-red-500", hoverColor: "group-hover:text-red-400", bgColor: "bg-red-500/10" },
      { name: "RESTful API", icon: MdOutlineCode, color: "text-green-500", hoverColor: "group-hover:text-green-400", bgColor: "bg-green-500/10" },
    ]
  },
  {
    title: "Database & Tools",
    icon: SiMysql,
    skills: [
      // { name: "MongoDB", icon: SiMongodb, color: "text-green-500", hoverColor: "group-hover:text-green-400", bgColor: "bg-green-500/10" },
      { name: "MySQL", icon: SiMysql, color: "text-blue-600", hoverColor: "group-hover:text-blue-500", bgColor: "bg-blue-600/10" },
      { name: "Git/GitHub", icon: FaGithub, color: "text-black dark:text-white", hoverColor: "group-hover:text-gray-800 dark:group-hover:text-gray-400", bgColor: "bg-gray-800/10 dark:bg-gray-200/10" },
      { name: "Vercel", icon: SiVercel, color: "text-black dark:text-white", hoverColor: "group-hover:text-gray-800 dark:group-hover:text-gray-400", bgColor: "bg-gray-800/10 dark:bg-gray-200/10" },
      { name: "Postman", icon: SiPostman, color: "text-orange-500", hoverColor: "group-hover:text-orange-400", bgColor: "bg-orange-500/10" }
    ]
  },
  {
    title: "Soft Skills",
    icon: FaUsers,
    skills: [
      { name: "Teamwork", icon: FaUsers, color: "text-blue-500", hoverColor: "group-hover:text-blue-400", bgColor: "bg-blue-500/10" },
      { name: "Communication", icon: MdMessage, color: "text-green-500", hoverColor: "group-hover:text-green-400", bgColor: "bg-green-500/10" },
      { name: "Problem Solving", icon: FaLightbulb, color: "text-yellow-500", hoverColor: "group-hover:text-yellow-400", bgColor: "bg-yellow-500/10" },
      { name: "Fast Learning", icon: TbBolt, color: "text-cyan-500", hoverColor: "group-hover:text-cyan-400", bgColor: "bg-cyan-500/10" },
      { name: "Time Management", icon: FaClock, color: "text-purple-500", hoverColor: "group-hover:text-purple-400", bgColor: "bg-purple-500/10" },
      { name: "Adaptability", icon: FaReact, color: "text-orange-500", hoverColor: "group-hover:text-orange-400", bgColor: "bg-orange-500/10" }
    ]
  }
  ];

  return (
    <section id="skills" className="py-10 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <GlitchText className="text-4xl font-bold mb-4 font-mono">
            {t.skills.title}
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

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 50px rgba(0,0,0,0.3)"
              }}
              className="bg-card/50 border border-border rounded-xl p-6 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 group/category"
            >
              {/* Category Header */}
              <div className="flex items-center justify-center mb-6 space-x-3">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="p-2 bg-cyan-500/10 rounded-lg"
                >
                  <category.icon className="w-6 h-6 text-cyan-500" />
                </motion.div>
                <h3 className="text-xl font-bold font-mono text-foreground">
                  <motion.span
                    animate={{
                      color: ['#06b6d4', '#ef4444', '#06b6d4']
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity
                    }}
                  >
                    {category.title}
                  </motion.span>
                </h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    whileHover={{ 
                      scale: 1.05,
                      y: -2
                    }}
                    className={`group rounded-lg p-3 text-center cursor-pointer transition-all duration-200 border border-border hover:border-cyan-500/30 ${skill.bgColor}`}
                  >
                    <div className="flex flex-col items-center space-y-2">
                      <motion.div
                        whileHover={{ 
                          scale: 1.2,
                          rotate: 5
                        }}
                        className={`p-2 rounded-lg ${skill.bgColor} transition-colors`}
                      >
                        <skill.icon className={`w-5 h-5 ${skill.color} ${skill.hoverColor}`} />
                      </motion.div>
                      <span className={`text-xs font-mono font-medium ${skill.color} ${skill.hoverColor} transition-colors`}>
                        {skill.name}
                      </span>
                    </div>
                    
                    {/* Hover effect line */}
                    <motion.div
                      className="h-0.5 bg-gradient-to-r from-cyan-500 to-transparent mt-2 opacity-0 group-hover:opacity-100"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Stats Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="bg-card/50 border border-border rounded-xl p-6 backdrop-blur-sm col-span-full lg:col-span-2 xl:col-span-1"
          >
            <div className="flex items-center justify-center mb-6 space-x-3">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="p-2 bg-cyan-500/10 rounded-lg"
              >
                <Zap className="w-6 h-6 text-cyan-500" />
              </motion.div>
              <h3 className="text-xl font-bold font-mono text-foreground">
                <motion.span
                  animate={{
                    color: ['#ef4444', '#06b6d4', '#ef4444']
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity
                  }}
                >
                  Skills Overview
                </motion.span>
              </h3>
            </div>

            <div className="space-y-4">
              {[
                { label: "Frontend Development", value: 80, color: "from-cyan-500 to-blue-500" },
                { label: "Backend Development", value: 75, color: "from-green-500 to-emerald-500" },
                { label: "Database Design", value: 70, color: "from-blue-500 to-indigo-500" },
                { label: "UI/UX Design", value: 65, color: "from-purple-500 to-pink-500" },
                { label: "Problem Solving", value: 85, color: "from-orange-500 to-red-500" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center text-sm">
                    <span className="font-mono text-foreground">{item.label}</span>
                    <span className="font-mono text-cyan-400">{item.value}%</span>
                  </div>
                  <div className="w-full bg-accent rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className={`h-2 rounded-full bg-gradient-to-r ${item.color} relative overflow-hidden`}
                    >
                      <motion.div
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;