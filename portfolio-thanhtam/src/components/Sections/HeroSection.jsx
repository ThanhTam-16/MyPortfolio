import React, {useState} from 'react';
import { motion } from 'framer-motion';
import GlitchText from '../BackgroundEffects/GlitchText';
import { Download, Terminal, Github, Mail, Phone } from 'lucide-react';

// Thêm avatarPath 
const avatarPath = "avt2.JPEG"; 

const HeroSection = ({ t, scrollToSection }) => {
  const [showCVOptions, setShowCVOptions] = useState(false);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Phần thông tin bên trái */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="lg:w-1/2 text-center lg:text-left space-y-8"
          >
            <motion.p 
              className="text-lg text-gray-400 font-mono"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {t.hero.greeting}
            </motion.p>
            <GlitchText className="text-4xl md:text-7xl font-bold tracking-wider">
              {t.hero.name}
            </GlitchText>
            <motion.div
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              className="text-2xl md:text-4xl font-semibold bg-gradient-to-r from-red-500 via-cyan-400 to-red-500 bg-clip-text text-transparent bg-[length:200%_auto]"
            >
              {t.hero.role}
            </motion.div>
            <motion.p 
              className="text-muted-foreground leading-relaxed font-mono text-sm md:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {t.hero.description}
            </motion.p>
            <motion.div 
              className="flex flex-row gap-4 mt-12 relative justify-center sm:justify-start"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
            >
              {/* Nút Download CV */}
              <motion.button
                onClick={() => setShowCVOptions(!showCVOptions)}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(239, 68, 68, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-4 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold rounded-lg border-2 border-red-500 hover:border-red-400 transition-all duration-300 font-mono uppercase tracking-wider"
              >
                <Download className="w-5 h-5 mr-2 inline" />
                {t.hero.downloadCV}
              </motion.button>

              {/* Menu lựa chọn ngôn ngữ CV */}
              {showCVOptions && (
                <div className="absolute top-full mt-2 left-0 bg-white shadow-lg rounded-lg border p-4 space-y-2 z-50">
                  <a 
                    href="/NguyenThanhTam_CV_VI.pdf" 
                    download="NguyenThanhTam_CV_VI.pdf"
                    className="block text-sm font-mono text-red-600 hover:underline"
                  >
                    📄 CV Tiếng Việt
                  </a>
                  <a 
                    href="/NguyenThanhTam_CV.pdf" 
                    download="NguyenThanhTam_CV.pdf"
                    className="block text-sm font-mono text-cyan-600 hover:underline"
                  >
                    📄 CV English
                  </a>
                </div>
              )}
              <motion.button
                onClick={() => scrollToSection('contact')}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(6, 182, 212, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-4 bg-transparent border-2 border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 font-mono uppercase tracking-wider"
              >
                <Terminal className="w-5 h-5 mr-2 inline" />
                {t.hero.contactMe}
              </motion.button>
            </motion.div>
            <motion.div 
              className="flex space-x-6 pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
            >
              {[
                { icon: Github, href: "https://github.com/Thanhtam-dvl", color: "hover:text-red-400" },
                { icon: Mail, href: "mailto:nguyenthanhtam10062004@gmail.com", color: "hover:text-cyan-400" },
                { icon: Phone, href: "tel:0868713558", color: "hover:text-yellow-400" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className={`p-4 bg-card/50 rounded-xl border border-border ${social.color} transition-all duration-300 backdrop-blur-sm`}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Phần avatar bên phải */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="lg:w-1/2 flex justify-center relative"
          >
            <div className="relative">
              {/* Avatar chính */}
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(239, 68, 68, 0.7)",
                    "0 0 0 20px rgba(239, 68, 68, 0)",
                    "0 0 0 40px rgba(6, 182, 212, 0)",
                    "0 0 0 20px rgba(6, 182, 212, 0.3)",
                  ]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-cyan-400/30"
              >
                <img 
                  src={avatarPath} 
                  alt="Avatar" 
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Hiệu ứng xung quanh avatar */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-400/50"
              />
              
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border-2 border-dashed border-red-400/50"
              />

              {/* Các hình học trôi nổi xung quanh */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-4 h-4 bg-cyan-400/70 rounded-full"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: Math.random() * 3 + 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}

              {/* Hiệu ứng particles */}
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-red-400 rounded-full"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    x: [0, (Math.random() - 0.5) * 60],
                    y: [0, (Math.random() - 0.5) * 60],
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: Math.random() * 5 + 3,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;