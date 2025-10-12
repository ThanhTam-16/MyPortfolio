import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MatrixRain from './BackgroundEffects/MatrixRain';
import GeometricShapes from './BackgroundEffects/GeometricShapes';
import Navbar from './Sections/Navbar';
import HeroSection from './Sections/HeroSection';
import AboutSection from './Sections/AboutSection';
import SkillsSection from './Sections/SkillsSection';
import ProjectsSection from './Sections/ProjectsSection';
import ContactSection from './Sections/ContactSection';
import Footer from './Sections/Footer';
import {
  ChevronUp,
  Code,
  Database,
  Server,
  Cpu,
  Monitor,
} from 'lucide-react';

// Main Portfolio Component
const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState('vi');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  // Mouse tracking for cursor effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage((lang) => (lang === 'vi' ? 'en' : 'vi'));
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const content = {
    vi: {
      nav: ['Trang chủ', 'Giới thiệu', 'Kỹ năng', 'Dự án', 'Liên hệ'],
      hero: {
        greeting: 'Xin chào, Tôi là',
        name: 'NGUYỄN THÀNH TÂM',
        role: 'Web Developer',
        description:
          'Tôi là sinh viên năm cuối chuyên ngành Kỹ thuật Phần mềm, có kinh nghiệm phát triển ứng dụng web với React, Angular, NodeJS, Laravel và MySQL.',
        downloadCV: 'Tải CV',
        contactMe: 'Liên hệ',
      },
      about: {
        title: 'GIỚI THIỆU',
        education: 'Học vấn',
        university: 'Đại học Nguyễn Tất Thành',
        major: 'Công nghệ kỹ thuật phần mềm',
        gpa: 'GPA 3.3/4',
        graduation: 'Dự kiến tốt nghiệp: 2026',
        awards: 'Giải thưởng',
        location: 'Quận 12, TP. Hồ Chí Minh',
      },
      skills: {
        title: 'KỸ NĂNG',
        frontend: 'Frontend',
        backend: 'Backend',
        database: 'Cơ sở dữ liệu',
        tools: 'Công cụ & Công nghệ',
        soft: 'Kỹ năng mềm',
      },
      projects: {
        title: 'DỰ ÁN NỔI BẬT',
      },
      contact: {
        title: 'LIÊN HỆ',
        subtitle: 'Hãy để lại email nếu bạn muốn biết thêm thông tin về tôi',
        message: 'Chúng tôi sẽ liên hệ với bạn sớm nhất có thể! Cảm ơn sự quan tâm của bạn.',
        emailPlaceholder: 'Địa chỉ email',
        messagePlaceholder: 'Tin nhắn của bạn',
        send: 'Gửi',
        phone: 'Điện thoại',
        email: 'Email',
        address: 'Địa chỉ',
      },
    },
    en: {
      nav: ['Home', 'About', 'Skills', 'Projects', 'Contact'],
      hero: {
        greeting: "Hello, I'm",
        name: 'NGUYEN THANH TAM',
        role: 'Web Developer',
        description:
          'I am a final-year Software Engineering student with experience in web application development using React, Angular, NodeJS, Laravel, and MySQL.',
        downloadCV: 'Download CV',
        contactMe: 'Contact Me',
      },
      about: {
        title: 'ABOUT ME',
        education: 'Education',
        university: 'Nguyen Tat Thanh University',
        major: 'Software Engineering Technology',
        gpa: 'GPA 3.3/4',
        graduation: 'Expected graduation: 2026',
        awards: 'Awards',
        location: 'District 12, Ho Chi Minh City',
      },
      skills: {
        title: 'SKILLS',
        frontend: 'Frontend',
        backend: 'Backend',
        database: 'Database',
        tools: 'Tools & Technologies',
        soft: 'Soft Skills',
      },
      projects: {
        title: 'FEATURED PROJECTS',
      },
      contact: {
        title: 'CONTACT',
        subtitle: 'Please leave your email if you want to know more information about me',
        message: 'We will contact you as soon as possible! Thank you for your interest.',
        emailPlaceholder: 'Email address',
        messagePlaceholder: 'Your message',
        send: 'Send',
        phone: 'Phone',
        email: 'Email',
        address: 'Address',
      },
    },
  };

  const t = content[language];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      {/* Custom Cursor */}
      <motion.div
        className="fixed w-4 h-4 bg-white/30 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{ x: mousePosition.x - 8, y: mousePosition.y - 8 }}
        transition={{ type: 'spring', damping: 30, stiffness: 500 }}
      />

      {/* Background Effects */}
      <MatrixRain />
      <GeometricShapes />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Navbar */}
        <Navbar
          t={t}
          darkMode={darkMode}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          toggleLanguage={toggleLanguage}
          toggleDarkMode={toggleDarkMode}
          scrollToSection={scrollToSection}
        />

        {/* Sections */}
        <HeroSection t={t} scrollToSection={scrollToSection} />
        <AboutSection t={t} />
        <SkillsSection t={t} />
        <ProjectsSection t={t} />
        <ContactSection t={t} />

        {/* Footer */}
        <Footer t={t} />

        {/* Scroll to Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0, rotate: 180 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0, rotate: 180 }}
              onClick={scrollToTop}
              whileHover={{
                scale: 1.1,
                boxShadow: '0 0 30px rgba(6, 182, 212, 0.5)',
                rotate: 5,
              }}
              whileTap={{ scale: 0.9 }}
              className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full border-2 border-cyan-500/50 backdrop-blur-sm z-50 group"
            >
              <motion.div
                animate={{ y: [-2, 2, -2] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ChevronUp className="w-3 h-3" />
              </motion.div>
              {/* Pulse effect */}
              <motion.div
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="absolute inset-0 bg-cyan-500 rounded-full"
              />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Background Grid */}
        <div className="fixed inset-0 opacity-5 pointer-events-none z-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        {/* Floating Tech Icons */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-5 opacity-20">
          {/*
            { icon: Code, x: 10, y: 30, duration: 12 },
            { icon: Database, x: 80, y: 60, duration: 15 },
            { icon: Server, x: 20, y: 80, duration: 10 },
            { icon: Cpu, x: 70, y: 20, duration: 18 },
            { icon: Monitor, x: 90, y: 40, duration: 14 }
          */}
          {Array.from({ length: 5 }).map((_, index) => (
            <motion.div
              key={index}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 180, 360],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: Math.random() * 10 + 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Code className="w-8 h-8 text-gray-500" />
            </motion.div>
          ))}
        </div>

        {/* Particle System */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 10 + 5,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;