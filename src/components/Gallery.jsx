import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import './Gallery.css';

const images = [
    { src: '/images/York-150-TON.png', title: 'Chiller Industrial de Alta Capacidad', category: 'Equipos' },
    { src: '/gallery-2.png', title: 'Sistemas de Enfriamiento en Azotea', category: 'Instalaciones' },
    { src: '/gallery-3.png', title: 'Componentes de Precisión', category: 'Tecnología' },
    { src: '/gallery-4.png', title: 'Instalación de Chiller con Grúa', category: 'Proyectos' },
    { src: '/gallery-5.png', title: 'Montaje de Equipo Industrial', category: 'Proyectos' },
    { src: '/hero-banner.png', title: 'Planta de Chillers Industriales', category: 'Instalaciones' },
    { src: '/images/camion_transporte_refriclimatic.png', title: 'Transporte de Chiller Industrial', category: 'Logística' },
    { src: '/images/chiller_york_trabajador_mantenimiento.png', title: 'Mantenimiento Técnico Especializado', category: 'Servicios' },
];

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);

    const openLightbox = (index) => setSelectedImage(index);
    const closeLightbox = () => setSelectedImage(null);
    const goNext = () => setSelectedImage((prev) => (prev + 1) % images.length);
    const goPrev = () => setSelectedImage((prev) => (prev - 1 + images.length) % images.length);

    return (
        <section id="galeria" className="gallery section-padding">
            <div className="container">
                <motion.div
                    className="gallery__header text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-label">
                        <Camera size={14} />
                        Galería de Proyectos
                    </span>
                    <h2 className="section-title">
                        Nuestro <span style={{ color: 'var(--blue-600)' }}>portafolio</span> de trabajo
                    </h2>
                    <p className="section-subtitle mx-auto">
                        Conoce algunos de nuestros proyectos realizados y la calidad de nuestros equipos e instalaciones.
                    </p>
                </motion.div>

                <motion.div
                    className="gallery__grid"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            className={`gallery__item ${index === 0 ? 'gallery__item--large' : ''}`}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => openLightbox(index)}
                        >
                            <img src={img.src} alt={img.title} loading="lazy" />
                            <div className="gallery__item-overlay">
                                <ZoomIn size={24} />
                                <span className="gallery__item-category">{img.category}</span>
                                <span className="gallery__item-title">{img.title}</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage !== null && (
                    <motion.div
                        className="gallery__lightbox"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeLightbox}
                    >
                        <button className="gallery__lightbox-close" onClick={closeLightbox}>
                            <X size={24} />
                        </button>
                        <button className="gallery__lightbox-nav gallery__lightbox-nav--prev" onClick={(e) => { e.stopPropagation(); goPrev(); }}>
                            <ChevronLeft size={28} />
                        </button>
                        <motion.div
                            className="gallery__lightbox-content"
                            key={selectedImage}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img src={images[selectedImage].src} alt={images[selectedImage].title} />
                            <div className="gallery__lightbox-info">
                                <span className="gallery__lightbox-category">{images[selectedImage].category}</span>
                                <h3>{images[selectedImage].title}</h3>
                            </div>
                        </motion.div>
                        <button className="gallery__lightbox-nav gallery__lightbox-nav--next" onClick={(e) => { e.stopPropagation(); goNext(); }}>
                            <ChevronRight size={28} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
