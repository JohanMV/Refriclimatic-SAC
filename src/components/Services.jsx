import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './Services.css';

const services = [
    {
        badge: 'Popular',
        title: 'Alquiler de Chillers',
        description: 'Equipos de enfriamiento industrial disponibles para alquiler temporal o a largo plazo, con capacidades desde 5 hasta 500 toneladas de refrigeración.',
        image: '/service-alquiler.png',
        linkText: 'Solicitar cotización',
    },
    {
        badge: 'Esencial',
        title: 'Mantenimiento Preventivo',
        description: 'Programas de mantenimiento diseñados para maximizar la vida útil de tus equipos y prevenir paradas no planificadas que afecten tu producción.',
        image: '/service-mantenimiento.png',
        linkText: 'Más información',
    },
    {
        badge: '24/7',
        title: 'Reparación Especializada',
        description: 'Diagnóstico y reparación de fallas en chillers de cualquier marca y capacidad. Servicio de emergencia disponible las 24 horas, los 7 días de la semana.',
        image: '/hero-banner.png',
        linkText: 'Contactar ahora',
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
                    <p className="section-subtitle mx-auto">
                        Ofrecemos servicios completos de climatización industrial para asegurar la continuidad de tu operación.
                    </p>
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
                                <a href="#contacto" className="services__card-link">
                                    {service.linkText} <ArrowRight size={16} />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
