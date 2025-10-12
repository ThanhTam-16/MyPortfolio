import React from 'react'
import { motion } from 'framer-motion';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaYoutube, 
  FaGithub, 
  FaLinkedinIn,
  FaPhone, 
  FaMapMarkerAlt,
  FaHeart
} from 'react-icons/fa';
import { 
  SiTiktok 
} from 'react-icons/si';
import { 
  HiMail 
} from 'react-icons/hi';

// Thêm avatarPath - bạn cần thay đổi đường dẫn này cho phù hợp
const avatarPath = "avt1.JPEG"; // Thay bằng đường dẫn thực tế

const Footer = ({ t }) => {
  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/thanhtam.100604',
      icon: FaFacebookF,
      color: 'hover:bg-blue-500'
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/thtam_106',
      icon: FaInstagram,
      color: 'hover:bg-pink-500'
    },
    {
      name: 'TikTok',
      href: 'https://www.tiktok.com/@tamzit100604',
      icon: SiTiktok,
      color: 'hover:bg-black dark:hover:bg-white'
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/@tamnguyenthanh11',
      icon: FaYoutube,
      color: 'hover:bg-red-500'
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/t%C3%A2m-nguy%E1%BB%85n-th%C3%A0nh-a12a27345/',
      icon: FaLinkedinIn,
      color: 'hover:bg-blue-600'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/ThanhTam-dvl',
      icon: FaGithub,
      color: 'hover:bg-gray-800 dark:hover:bg-white'
    }
  ];

  const contactInfo = [
    {
      icon: FaPhone,
      text: '+84 868 713 558',
      href: 'tel:+84868713558'
    },
    {
      icon: HiMail,
      text: 'nguyenthanhtam10062004@gmail.com',
      href: 'mailto:nguyenthanhtam10062004@gmail.com'
    },
    {
      icon: FaMapMarkerAlt,
      text: 'Quận 12, TP. Hồ Chí Minh',
      href: '#'
    }
  ];

  return (
    <footer className="py-8 bg-gray-900/90 border-t border-gray-700 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
          {/* Contact Information - Cột 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 text-center lg:text-left"
          >
            <h3 className="text-lg font-bold mb-3 text-cyan-400 font-mono">CONTACT ME</h3>
            <div className="space-y-2 mb-4">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="flex items-center justify-center lg:justify-start gap-2 text-gray-300 hover:text-cyan-400 transition-colors group text-sm"
                  whileHover={{ x: 5 }}
                >
                  <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>{item.text}</span>
                </motion.a>
              ))}
            </div>

            {/* Social Icons */}
            <div>
              <h3 className="text-lg font-bold mb-3 text-cyan-400 font-mono">FOLLOW ME</h3>
              <div className="flex justify-center lg:justify-start gap-1">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-8 h-8 flex items-center justify-center rounded-full bg-gray-800/50 border border-gray-700 text-gray-300 transition-all ${social.color} group relative`}
                    whileHover={{ 
                      scale: 1.15,
                      y: -3
                    }}
                    whileTap={{ scale: 0.95 }}
                    title={social.name}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Links - Cột 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center lg:text-left"
          >
            <h3 className="text-lg font-bold mb-3 text-cyan-400 font-mono">NAVIGATION</h3>
            <div className="space-y-1">
              {['home', 'about', 'skills', 'projects', 'contact'].map((section, index) => (
                <motion.a
                  key={index}
                  href={`#${section}`}
                  className="block text-gray-300 hover:text-cyan-400 transition-colors text-sm font-mono py-1"
                  whileHover={{ x: 3 }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Avatar Section - Cột 3 (bên phải) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center lg:justify-end items-start"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="h-50 rounded-lg overflow-hidden border-2 border-cyan-400/30 shadow-lg"
              >
                <img 
                  src={avatarPath} 
                  alt="Avatar" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                animate={{ 
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -inset-2 rounded-lg border border-dashed border-cyan-400/20"
              />
            </div>
          </motion.div>
        </div>

        {/* Separator */}
        <motion.div
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent bg-[length:200%_auto] max-w-4xl mx-auto mb-4"
        />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >

          <motion.p
            className="text-gray-400 text-xs mb-1 flex items-center justify-center gap-1"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Made with <FaHeart className="w-3 h-3 text-red-500" /> by Nguyen Thanh Tam
          </motion.p>
          
          <motion.p
            className="text-gray-500 text-xs font-mono"
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          >
            © {new Date().getFullYear()} All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;