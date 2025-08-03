import React, { useState } from 'react';
import { Cloud, Zap, Award, ShieldCheck, Server, Globe, Lock, BookOpen, LifeBuoy } from 'lucide-react';
import { motion } from 'framer-motion';
import { RegisterForm } from './RegisterForm';

export default function LandingPage() {

    const [modalIsOpen, setIsModalOpen] = useState(false)

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Hero Section */}
            <header className="relative overflow-hidden min-h-screen bg-gradient-to-r from-[#0066CC] to-[#001F3F]">
                <div className="container mx-auto px-6 py-20 flex flex-col-reverse lg:flex-row items-center">
                    <div className="w-full lg:w-1/2 text-center lg:text-left py-20 lg:px-20">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-white"
                        >
                            Master Cloud & DevOps
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            className="text-lg lg:text-xl mb-8 max-w-md mx-auto lg:mx-0 text-white"
                        >
                            Fast-track your career with our immersive bootcamp—hands-on labs, expert mentors, and certification prep all in one.
                        </motion.p>
                        <motion.a
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.6, duration: 0.3 }}
                            onClick={() => setIsModalOpen(true)}
                            className="inline-block bg-orange-600 text-white px-8 py-4 rounded-full shadow-xl hover:opacity-70 transition"
                        >
                            Enroll Now
                        </motion.a>
                        <RegisterForm
                            isOpen={modalIsOpen}
                            onClose={() => setIsModalOpen(false)}
                        />
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        className="w-full lg:w-1/2 mb-12 lg:mb-0 lg:flex justify-center py-20 hidden"
                    >
                        <img
                            src="hero-image2.webp"
                            alt="Cloud DevOps Illustration"
                            className="w-full h-auto rounded-2xl shadow-2xl"
                        />
                    </motion.div>
                </div>
            </header>

            {/* Features Section */}
            <section
                id="features"
                className="container mx-auto px-6 py-20 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            >
                {[
                    { icon: <Cloud size={32} />, title: 'Hands‑On Labs', description: 'Practice in real‑world environments.' },
                    { icon: <Zap size={32} />, title: 'Expert Mentors', description: 'Learn from industry leaders.' },
                    { icon: <Award size={32} />, title: 'Cert Prep', description: 'AWS, Azure, GCP exam readiness.' },
                ].map((feature) => (
                    <motion.div
                        key={feature.title}
                        whileHover={{ scale: 1.05 }}
                        className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-lg transition"
                    >
                        <div className="mx-auto mb-4 text-blue-500">{feature.icon}</div>
                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                    </motion.div>
                ))}
            </section>

             {/* Mission Section */}
             <section id="mission" className="bg-white py-20">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl font-bold">Our Mission</h2>
                        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                            To empower learners—from total beginners to those with limited experience—with foundational cloud computing and DevOps knowledge.  Through practical, hands-on labs and real-world scenarios, we show how cloud services can be seamlessly integrated into everyday personal and professional projects.
                        </p>
                    </motion.div>
                    <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            { icon: <BookOpen size={32} />, title: 'Cloud Fundamentals', description: 'Understand core concepts like compute, storage, and networking.' },
                            { icon: <LifeBuoy size={32} />, title: 'Hands-On Labs', description: 'Step-by-step exercises to reinforce learning and build confidence.' },
                            { icon: <Zap size={32} />, title: 'Everyday Use Cases', description: 'Practical examples, from hosting a personal website to automating daily tasks.' },
                        ].map((item) => (
                            <motion.div
                                key={item.title}
                                whileHover={{ scale: 1.05 }}
                                className="bg-gray-50 rounded-2xl p-8 text-center shadow-lg transition"
                            >
                                <div className="mx-auto mb-4 text-blue-500">{item.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

                        {/* What We Do Section */}
                        <section id="what-we-do" className="container mx-auto px-6 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold">What We Do</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        We provide comprehensive managed cloud hosting and security services to ensure your platform is robust, compliant, and performant. We are a freelance Managed Cloud Hosting consultancy with over 12 years of commercial experience in providing and securing IT Infrastructure, particularly for organizations handling personal and user-generated data.
                    </p>
                </motion.div>
                <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {[
                        { icon: <Server size={32} />, title: 'Managed Cloud Hosting', description: 'Fully managed infrastructure with proactive monitoring and maintenance.' },
                        { icon: <ShieldCheck size={32} />, title: 'Security & Compliance', description: 'GDPR, ISO 27001, and ISO 9001 aligned practices.' },
                        { icon: <Lock size={32} />, title: 'Data Protection', description: 'Encryption in transit and at rest, with strict access controls.' },
                        { icon: <Globe size={32} />, title: 'Global Data Centers', description: 'EEA-based storage with no data replication outside the region.' },
                        { icon: <Cloud size={32} />, title: 'DDoS & WAF', description: 'Cloudflare integration for robust threat mitigation.' },
                        { icon: <Zap size={32} />, title: 'Continuous Backup & Recovery', description: 'Regular backups and disaster recovery planning.' },
                    ].map((item) => (
                        <motion.div
                            key={item.title}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white rounded-2xl p-8 text-center shadow-lg transition"
                        >
                            <div className="mx-auto mb-4 text-blue-500">{item.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-gray-600">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Banner */}
            <section
                id="enroll"
                className="bg-gradient-to-r from-[#0066CC] to-[#001F3F] text-white text-center py-20"
            >
                <h2 className="text-2xl lg:text-5xl font-bold mb-6">
                    Ready to transform your career?
                </h2>
                <a
                    href="#contact"
                    onClick={() => setIsModalOpen(true)}
                    className="bg-orange-600 text-white font-semibold px-10 py-4 rounded-full shadow-xl hover:opacity-90 transition inline-block"
                >
                    Get Started
                </a>
                <RegisterForm
                    isOpen={modalIsOpen}
                    onClose={() => setIsModalOpen(false)}
                />
            </section>
        </div>
    );
}