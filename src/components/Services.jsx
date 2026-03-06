import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';
import './Services.css';

const services = [
    {
        badge: 'Popular',
        title: 'Alquiler de Chillers',
        description: 'Equipos de enfriamiento industrial disponibles para alquiler temporal o a largo plazo, con capacidades desde 60 hasta 210 toneladas de refrigeración.',
        image: '/images/chiller_york_alquiler_3.png',
        linkText: 'Más información',
        specs: [
            { label: 'Marcas', value: 'York, Carrier, Trane' },
            { label: 'Enfriamiento', value: '60 – 210 TR' },
            { label: 'Condensación', value: 'Aire / Agua' },
            { label: 'Voltaje', value: '220V / 380V / 460V' },
            { label: 'Gas Refrigerante', value: 'R-410A / R-134A / R-22' },
        ],
    },
    {
        badge: 'Esencial',
        title: 'Mantenimiento Preventivo',
        description: 'Programas de mantenimiento diseñados para maximizar la vida útil de tus equipos y prevenir paradas no planificadas que afecten tu producción.',
        image: '/images/mantenimiento_trabajador.png',
        linkText: 'Más información',
        specs: [
            { label: 'Fluidos', value: 'Análisis de aceite y gas' },
            { label: 'Limpieza', value: 'Lavado de condensadores' },
            { label: 'Eléctrica', value: 'Ajuste de bornes y megado' },
            { label: 'Control', value: 'Calibración de sensores' },
            { label: 'Entregable', value: 'Informe técnico detallado' },
        ],
    },
    {
        badge: '24/7',
        title: 'Reparación Especializada',
        description: 'Diagnóstico y reparación de fallas en chillers de cualquier marca y capacidad. Servicio de emergencia disponible los 7 días de la semana.',
        image: '/images/repacion_chiller_refriclimatic.png',
        linkText: 'Más información',
        specs: [
            { label: 'Compresores', value: 'Rebobinado y overhaul' },
            { label: 'Fugas', value: 'Vacío y recarga de gas' },
            { label: 'Componentes', value: 'Bombas y torres' },
            { label: 'Electrónica', value: 'Tarjetas de control' },
            { label: 'Garantía', value: 'Puesta en marcha certificada' },
        ],
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.15 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

export default function Services() {
    const [selectedService, setSelectedService] = useState(null);

    const openDetail = (index) => setSelectedService(index);
    const closeDetail = () => setSelectedService(null);
    const goNext = () => setSelectedService((prev) => (prev + 1) % services.length);
    const goPrev = () => setSelectedService((prev) => (prev - 1 + services.length) % services.length);

    return (
        <section id="servicios" className="services section-padding">
            <div className="container">
                <motion.div
                    className="services__header text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-label">
                        Nuestros Servicios
                    </span>
                    <h2 className="section-title">
                        Soluciones integrales en <br />
                        <span style={{ color: 'var(--blue-600)' }}>enfriamiento industrial</span>
                    </h2>
                </motion.div>

                <motion.div
                    className="services__grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="services__card"
                            variants={cardVariants}
                        >
                            <div className="services__card-image">
                                <span className="services__card-badge">{service.badge}</span>
                                <img src={service.image} alt={service.title} />
                            </div>
                            <div className="services__card-content">
                                <h3 className="services__card-title">{service.title}</h3>
                                <p className="services__card-desc">{service.description}</p>
                                <button
                                    className="services__card-link"
                                    onClick={() => openDetail(index)}
                                >
                                    {service.linkText} <ArrowRight size={16} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* ── Service Detail Lightbox ── */}
            <AnimatePresence>
                {selectedService !== null && (
                    <motion.div
                        className="services__lightbox"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeDetail}
                    >
                        <button className="services__lightbox-close" onClick={closeDetail}>
                            <X size={24} />
                        </button>
                        <button
                            className="services__lightbox-nav services__lightbox-nav--prev"
                            onClick={(e) => { e.stopPropagation(); goPrev(); }}
                        >
                            <ChevronLeft size={28} />
                        </button>

                        <motion.div
                            className="services__lightbox-layout"
                            key={selectedService}
                            initial={{ opacity: 0, scale: 0.92 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.92 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Left: Specs card */}
                            <div className="services__lightbox-specs-card">
                                <h4 className="services__lightbox-specs-title">
                                    {services[selectedService].title}
                                </h4>
                                <div className="services__lightbox-specs-list">
                                    {services[selectedService].specs.map((spec, i) => (
                                        <motion.div
                                            key={i}
                                            className="services__lightbox-spec"
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.08 + i * 0.05, duration: 0.3 }}
                                        >
                                            <span className="services__lightbox-spec-label">{spec.label}</span>
                                            <span className="services__lightbox-spec-value">{spec.value}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Right: Image card (same style as ComponentsGallery lightbox) */}
                            <div className="services__lightbox-image-card">
                                <img
                                    src={services[selectedService].image}
                                    alt={services[selectedService].title}
                                />
                                <div className="services__lightbox-image-info">
                                    <h3>{services[selectedService].title}</h3>
                                    <p>{services[selectedService].description}</p>
                                </div>
                            </div>
                        </motion.div>

                        <button
                            className="services__lightbox-nav services__lightbox-nav--next"
                            onClick={(e) => { e.stopPropagation(); goNext(); }}
                        >
                            <ChevronRight size={28} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
