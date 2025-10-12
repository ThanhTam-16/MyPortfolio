import React, { useState} from 'react';
import { motion } from 'framer-motion';
import GlitchText from '../BackgroundEffects/GlitchText';
import { Phone, Mail, MapPin, Terminal, Github } from 'lucide-react';

const ContactSection = ({ t }) => {
    const [form, setForm] = useState({ email: "", message: ""});
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus(" Đang gửi...");

        try {
            const res = await fetch(`${import.meta.env.VITE_API_URL}/send-mail`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(form)
            });

            const data = await res.json();
            if (data.success) {
                setStatus("✅ Gửi thành công!");
                setForm({ email: "", message: ""});
            } else {
                setStatus("❌ Gửi thất bại.");
            }
        } catch (error) {
            setStatus("Lỗi server.");
        }
    };

    return(

    <section id="contact" className="py-8 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/10 to-transparent"></div>
            
            <div className="container mx-auto px-4 relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <GlitchText className="text-4xl font-bold mb-4 font-mono">
                {t.contact.title}
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
                <motion.p 
                className="mt-6 text-muted-foreground max-w-2xl mx-auto font-mono"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity }}
                >
                {t.contact.subtitle}
                </motion.p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 0 50px rgba(6, 182, 212, 0.2)"
                }}
                className="bg-card/50 border border-border rounded-xl p-8 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-500"
                >
                <div className="text-center mb-8">
                    <motion.div 
                    animate={{ 
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="text-6xl mb-4"
                    >
                    🤝
                    </motion.div>
                    <motion.p 
                    className="text-muted-foreground font-mono"
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    >
                    {t.contact.message}
                    </motion.p>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="relative">
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder={t.contact.emailPlaceholder}
                        className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-500/10 text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all font-mono backdrop-blur-sm"
                        required
                    />
                    <Mail className="w-5 h-5 text-cyan-400 absolute right-3 top-1/2 transform -translate-y-1/2" />
                    </div>

                    <div className="relative">
                    <textarea
                        rows={5}
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder={t.contact.messagePlaceholder}
                        className="w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-500/10 text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all resize-none font-mono backdrop-blur-sm"
                        required
                    />
                    </div>

                    <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-3 rounded-lg font-mono font-bold uppercase tracking-wider"
                    >
                    {t.contact.send}
                    </motion.button>    

                    {status && <p className="text-center text-sm mt-2">{status}</p>}
                </form>
                </motion.div>

                {/* Contact Info & Social */}
                <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
                >
                {/* Contact Information */}
                <motion.div
                    whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 0 50px rgba(239, 68, 68, 0.2)"
                    }}
                    className="bg-card/50 border border-border rounded-xl p-6 backdrop-blur-sm hover:border-red-500/50 transition-all duration-500"
                >
                    <h3 className="text-2xl font-bold mb-6 font-mono text-center">
                    <motion.span
                        animate={{
                        color: ['#ffffff', '#ef4444', '#06b6d4', '#ffffff']
                        }}
                        transition={{
                        duration: 4,
                        repeat: Infinity
                        }}
                    >
                        Thông tin liên hệ
                    </motion.span>
                    </h3>
                    
                    <div className="space-y-4">
                    {[
                        { 
                        icon: Phone, 
                        label: t.contact.phone,
                        value: "0868 713 558",
                        href: "tel:0868713558",
                        color: "text-green-400",
                        hoverColor: "hover:border-green-500/50"
                        },
                        { 
                        icon: Mail, 
                        label: t.contact.email,
                        value: "nguyenthanhtam10062004@gmail.com",
                        href: "mailto:nguyenthanhtam10062004@gmail.com",
                        color: "text-blue-400",
                        hoverColor: "hover:border-blue-500/50"
                        },
                        { 
                        icon: MapPin, 
                        label: t.contact.address,
                        value: "Quận 12, TP. Hồ Chí Minh",
                        color: "text-purple-400",
                        hoverColor: "hover:border-purple-500/50"
                        }
                    ].map((item, index) => (
                        <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ x: 10, scale: 1.02 }}
                        className={`flex items-center space-x-4 p-4 rounded-lg border border-gray-600/50 bg-gray-500/10 ${item.hoverColor} transition-all cursor-pointer group backdrop-blur-sm`}
                        >
                        <motion.div
                            animate={{ 
                            rotate: [0, 360],
                            scale: [1, 1.1, 1]
                            }}
                            transition={{ 
                            duration: 3,
                            repeat: Infinity,
                            delay: index * 0.5
                            }}
                            className={`p-3 bg-gray-500/15 rounded-lg ${item.color} group-hover:bg-gray-600/30 transition-colors`}
                        >
                            <item.icon className="w-6 h-6" />
                        </motion.div>
                        <div className="flex-1">
                            <p className="font-medium text-white font-mono">{item.label}</p>
                            {item.href ? (
                            <a 
                                href={item.href}
                                className={`text-muted-foreground text-sm break-all hover:${item.color} transition-colors font-mono`}
                            >
                                {item.value}
                            </a>
                            ) : (
                            <p className="text-muted-foreground text-sm font-mono">{item.value}</p>
                            )}
                        </div>
                        </motion.div>
                    ))}
                    </div>
                </motion.div>

                {/* Social Media */}
                <motion.div
                    whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 0 50px rgba(251, 191, 36, 0.2)"
                    }}
                    className="bg-card/50 border border-border rounded-xl p-6 backdrop-blur-sm hover:border-yellow-500/50 transition-all duration-500"
                >
                    <h3 className="text-2xl font-bold mb-6 font-mono text-center">
                    <motion.span
                        animate={{
                        color: ['#ffffff', '#fbbf24', '#8b5cf6', '#ffffff']
                        }}
                        transition={{
                        duration: 5,
                        repeat: Infinity
                        }}
                    >
                        Kết nối với tôi
                    </motion.span>
                    </h3>
                    
                    <div className="flex justify-center space-x-6">
                    {[
                        {
                        icon: Github,
                        href: "https://github.com/Thanhtam-dvl",
                        color: "hover:text-gray-300",
                        bgColor: "hover:bg-gray-700/50"
                        },
                        {
                        icon: Mail,
                        href: "mailto:nguyenthanhtam10062004@gmail.com",
                        color: "hover:text-blue-400",
                        bgColor: "hover:bg-blue-900/30"
                        },
                        {
                        icon: Phone,
                        href: "tel:0868713558",
                        color: "hover:text-green-400",
                        bgColor: "hover:bg-green-900/30"
                        }
                    ].map((social, index) => (
                        <motion.a
                        key={index}
                        href={social.href}
                        target={social.href.startsWith('http') ? '_blank' : undefined}
                        rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        whileHover={{ 
                            scale: 1.2, 
                            rotate: [0, -10, 10, 0],
                            boxShadow: "0 10px 30px rgba(255, 255, 255, 0.1)"
                        }}
                        whileTap={{ scale: 0.9 }}
                        className={`p-4 bg-gray-800/10 border border-gray-600 rounded-xl ${social.color} ${social.bgColor} transition-all duration-300 backdrop-blur-sm`}
                        >
                        <social.icon className="w-8 h-8" />
                        </motion.a>
                    ))}
                    </div>
                </motion.div>

                {/* Terminal-style box */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gray-900/90 border border-green-500/50 rounded-lg p-4 font-mono text-sm"
                >
                    <div className="flex items-center space-x-2 mb-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-muted-foreground ml-2">terminal</span>
                    </div>
                    <div className="text-green-400">
                    <motion.div
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                    >
                        $ whoami
                    </motion.div>
                    <div className="text-white">thanhtam@developer:~$ Frontend Specialist</div>
                    <div className="text-cyan-400">$ status</div>
                    <div className="text-white">Available for opportunities</div>
                    <motion.div
                        animate={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                        className="text-green-400 inline"
                    >
                        █
                    </motion.div>
                    </div>
                </motion.div>
                </motion.div>
            </div>
            </div>
        </section>
    );
};

export default ContactSection;