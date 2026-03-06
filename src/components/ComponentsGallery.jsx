import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ChevronLeft, ChevronRight, Package } from 'lucide-react';
import './ComponentsGallery.css';

const components = [
    {
        src: '/images/tarjeta_electronica_york_2.png',
        title: 'Tarjetas Electrónicas de Chiller',
        description: 'Controladores electrónicos especializados para sistemas de enfriamiento industrial.',
    },
    {
        src: '/images/sensores_chiller_york.png',
        title: 'Sensores',
        description: 'Sensores de temperatura, presión y flujo para monitoreo preciso de tus equipos.',
    },
    {
        src: '/comp-ventiladores.png',
        title: 'Ventiladores',
        description: 'Ventiladores axiales y centrífugos de alta eficiencia para torres y condensadores.',
    },
    {
        src: '/images/torre_enfriamiento.png',
        title: 'Torres de Enfriamiento',
        description: 'Torres de enfriamiento industriales para disipar calor de procesos críticos.',
    },
    {
        src: '/comp-bomba-agua.png',
        title: 'Bombas de Agua',
        description: 'Bombas centrífugas de alto rendimiento para circuitos de agua helada y condensación.',
    },
    {
        src: '/images/compresor_chiller.png',
        title: 'Compresores',
        description: 'Compresores scroll y de tornillo para sistemas de refrigeración industrial.',
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ComponentsGallery() {
    const [selectedImage, setSelectedImage] = useState(null);

    const openLightbox = (index) => setSelectedImage(index);
    const closeLightbox = () => setSelectedImage(null);
    const goNext = () => setSelectedImage((prev) => (prev + 1) % components.length);
    const goPrev = () => setSelectedImage((prev) => (prev - 1 + components.length) % components.length);

    return (
        <section id="componentes" className="comp-gallery section-padding">
            <div className="container">
                <motion.div
                    className="comp-gallery__header text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-label">
                        <Package size={14} />
                        Componentes y Repuestos
                    </span>
                    <h2 className="section-title">
                        También <span style={{ color: '#0078bf' }}>vendemos</span> componentes
                    </h2>
                    <p className="section-subtitle mx-auto">
                        Ofrecemos repuestos y componentes de alta calidad para el mantenimiento
                        y reparación de tus equipos de refrigeración industrial.
                    </p>
                </motion.div>

                <motion.div
                    className="comp-gallery__grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                >
                    {components.map((comp, index) => (
                        <motion.div
                            key={index}
                            className="comp-gallery__card"
                            variants={cardVariants}
                            whileHover={{ y: -8 }}
                            transition={{ duration: 0.35 }}
                        >
                            <div
                                className="comp-gallery__image-wrapper"
                                onClick={() => openLightbox(index)}
                            >
                                <img src={comp.src} alt={comp.title} loading="lazy" />
                                <div className="comp-gallery__image-overlay">
                                    <ZoomIn size={24} />
                                </div>
                            </div>
                            <div className="comp-gallery__info">
                                <h3 className="comp-gallery__title">{comp.title}</h3>
                                <p className="comp-gallery__desc">{comp.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage !== null && (
                    <motion.div
                        className="comp-gallery__lightbox"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeLightbox}
                    >
                        <button className="comp-gallery__lightbox-close" onClick={closeLightbox}>
                            <X size={24} />
                        </button>
                        <button
                            className="comp-gallery__lightbox-nav comp-gallery__lightbox-nav--prev"
                            onClick={(e) => { e.stopPropagation(); goPrev(); }}
                        >
                            <ChevronLeft size={28} />
                        </button>
                        <motion.div
                            className="comp-gallery__lightbox-content"
                            key={selectedImage}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={components[selectedImage].src}
                                alt={components[selectedImage].title}
                            />
                            <div className="comp-gallery__lightbox-info">
                                <h3>{components[selectedImage].title}</h3>
                                <p>{components[selectedImage].description}</p>
                            </div>
                        </motion.div>
                        <button
                            className="comp-gallery__lightbox-nav comp-gallery__lightbox-nav--next"
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
