import { motion } from 'framer-motion';
import { ArrowRight, Play, Shield, Clock, Wrench } from 'lucide-react';
import './Hero.css';

export default function Hero() {
    return (
        <section id="hero" className="hero">
            {/* Background Image */}
            <div className="hero__bg">
                <img src="/hero-bg-alt.png" alt="Industrial chillers facility" />
                <div className="hero__overlay" />
            </div>

            {/* Floating decorative elements */}
            <div className="hero__particles">
                <div className="hero__particle hero__particle--1" />
                <div className="hero__particle hero__particle--2" />
                <div className="hero__particle hero__particle--3" />
            </div>

            <div className="hero__container container">
                <div className="hero__content">
                    <motion.div
                        className="hero__badge"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <Shield size={14} />
                        <span>Más de 15 años de experiencia</span>
                    </motion.div>

                    <motion.h1
                        className="hero__title"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.7 }}
                    >
                        Soluciones en{' '}
                        <span className="hero__title-highlight">Chillers Industriales</span>{' '}
                        para tu operación
                    </motion.h1>

                    <motion.p
                        className="hero__subtitle"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.45, duration: 0.7 }}
                    >
                        Alquiler, reparación y mantenimiento de chillers industriales con
                        respuesta inmediata. Garantizamos la continuidad operativa de tu
                        planta con equipos de última generación.
                    </motion.p>

                    <motion.div
                        className="hero__actions"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.7 }}
                    >
                        <a href="#contacto" className="btn btn-primary btn-lg hero__btn-primary">
                            Solicitar Cotización
                            <ArrowRight size={18} />
                        </a>
                        <a href="#servicios" className="btn btn-outline-white btn-lg">
                            Nuestros Servicios
                        </a>
                    </motion.div>

                    {/* Stats Row */}
                    <motion.div
                        className="hero__stats"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.7 }}
                    >
                        <div className="hero__stat">
                            <span className="hero__stat-number">15+</span>
                            <span className="hero__stat-label">Años de Experiencia</span>
                        </div>
                        <div className="hero__stat-divider" />
                        <div className="hero__stat">
                            <span className="hero__stat-number">500+</span>
                            <span className="hero__stat-label">Proyectos Completados</span>
                        </div>
                        <div className="hero__stat-divider" />
                        <div className="hero__stat">
                            <span className="hero__stat-number">24/7</span>
                            <span className="hero__stat-label">Soporte Técnico</span>
                        </div>
                    </motion.div>
                </div>

                {/* Hero Image Card */}
                <motion.div
                    className="hero__image-card"
                    initial={{ opacity: 0, x: 50, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <img src="/hero-banner.png" alt="Chillers industriales REFRICLIMATIC" className="hero__image" />
                    <div className="hero__image-overlay" />

                    {/* Floating badge on image */}
                    <motion.div
                        className="hero__float-badge"
                        animate={{ y: [0, -8, 0] }}
                        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                    >
                        <Clock size={20} />
                        <div>
                            <strong>Respuesta en 2h</strong>
                            <small>Servicio de emergencia</small>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Bottom wave */}
            <div className="hero__wave">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" />
                </svg>
            </div>
        </section>
    );
}
