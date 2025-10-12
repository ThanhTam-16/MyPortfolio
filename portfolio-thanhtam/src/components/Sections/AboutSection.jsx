import React from 'react';
import { motion } from 'framer-motion';
import GlitchText from '../BackgroundEffects/GlitchText';
import AnimatedCounter from '../BackgroundEffects/AnimatedCounter';
import { Award, MapPin, Phone, Mail, Calendar } from 'lucide-react';

const AboutSection = ({ t }) => (
  
    <section id="about" className="py-5 relative">
        <div className="container mx-auto px-4">
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
        >
            <GlitchText className="text-4xl font-bold mb-4 font-mono">
            {t.about.title}
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

        <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
            >
            {/* Education Card */}
            <motion.div
                whileHover={{ 
                scale: 1.02,
                boxShadow: "0 0 50px rgba(239, 68, 68, 0.2)"
                }}
                className="bg-card/50 border border-border rounded-xl p-6 backdrop-blur-sm hover:border-red-500/50 transition-all duration-300"
            >
                <h3 className="text-2xl font-bold mb-4 flex items-center space-x-3 font-mono">
                <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                    <Award className="w-6 h-6 text-red-400" />
                </motion.div>
                <span>{t.about.education}</span>
                </h3>
                <div className="space-y-3 text-muted-foreground font-mono">
                <p className="text-lg font-semibold text-cyan-400">{t.about.university} | 2022 - nay</p>
                <p>{t.about.major}</p>
                <p className="text-yellow-400 font-bold">{t.about.gpa}</p>
                <p>{t.about.graduation}</p>
                </div>
            </motion.div>

            {/* Contact Info Card */}
            <motion.div
                whileHover={{ 
                scale: 1.02,
                boxShadow: "0 0 50px rgba(6, 182, 212, 0.2)"
                }}
                className="bg-card/50 border border-border rounded-xl p-6 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300"
            >
                <h3 className="text-2xl font-bold mb-4 flex items-center space-x-3 font-mono">
                <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <MapPin className="w-6 h-6 text-cyan-400" />
                </motion.div>
                <span>Thông tin liên hệ</span>
                </h3>
                <div className="space-y-3 font-mono">
                {[
                    { icon: Phone, text: "0868 713 558", color: "text-green-400" },
                    { icon: Mail, text: "nguyenthanhtam10062004@gmail.com", color: "text-blue-400" },
                    { icon: MapPin, text: t.about.location, color: "text-purple-400" }
                ].map((item, index) => (
                    <motion.div 
                    key={index}
                    className="flex items-center space-x-3"
                    whileHover={{ x: 10 }}
                    >
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                    <span className="break-all text-muted-foreground">{item.text}</span>
                    </motion.div>
                ))}
                </div>
            </motion.div>
            </motion.div>

            {/* Stats and Awards */}
            <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
            >
            

            {/* Awards */}
            <motion.div
                whileHover={{ 
                scale: 1.02,
                boxShadow: "0 0 50px rgba(251, 191, 36, 0.2)"
                }}
                className="bg-card/50 border border-border rounded-xl p-6 backdrop-blur-sm hover:border-yellow-500/50 transition-all duration-300"
            >
                <h3 className="text-2xl font-bold mb-6 flex items-center space-x-3 font-mono">
                <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                >
                    <Award className="w-6 h-6 text-yellow-400" />
                </motion.div>
                <span>{t.about.awards}</span>
                </h3>
                <div className="space-y-4">
                {[
                    { date: '4/2024', award: '🥉 Đạt giải Ba cuộc thi Triển Khai Hệ Thống Mạng' },
                    { date: '5/2024', award: '🥈 Đạt giải Nhì cuộc thi Kỹ Thuật Phần Mềm' },
                    { date: '5/2025', award: '🥉 Đạt giải Ba cuộc thi Khoa Học Dữ Liệu' },
                    { date: '6/2025', award: 'Đạt giải Tư cuộc thi Triển Khai Hệ Thống Mạng' }
                ].map((item, index) => (
                    <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="flex items-start space-x-4 p-4 rounded-lg bg-gray-600/10 border border-gray-700/50 hover:border-yellow-500/30 transition-all font-mono"
                    >
                    <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    >
                        <Calendar className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                    </motion.div>
                    <div>
                        <p className="font-medium text-yellow-400">{item.date}</p>
                        <p className="text-muted-foreground text-sm">{item.award}</p>
                    </div>
                    </motion.div>
                ))}
                </div>
            </motion.div>
            </motion.div>
        </div>
        </div>
    </section>
);

export default AboutSection;