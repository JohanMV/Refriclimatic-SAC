import { motion } from 'framer-motion';
import { Zap, Shield, Clock, Award, HeartHandshake, TrendingUp } from 'lucide-react';
import './Benefits.css';

const benefits = [
    {
        icon: <Clock size={28} />,
        title: 'Respuesta Inmediata',
        description: 'Atención de emergencias en menos de 2 horas. Servicio disponible los 7 días de la semana.',
        highlight: '< 2h',
    },
    {
        icon: <Shield size={28} />,
        title: 'Garantía Total',
        description: 'Todos nuestros servicios incluyen garantía de funcionamiento. Tranquilidad total para tu operación.',
        highlight: '100%',
    },
    {
        icon: <Zap size={28} />,
        title: 'Eficiencia Energética',
        description: 'Equipos de última generación que reducen tu consumo energético hasta en un 40% respecto a sistemas convencionales.',
        highlight: '-40%',
    },
    {
        icon: <HeartHandshake size={28} />,
        title: 'Soporte Dedicado',
        description: 'Un especialista asignado exclusivamente a tu proyecto para asegurar resultados óptimos.',
        highlight: '1:1',
    },
];

export default function Benefits() {
    return (
        <section id="beneficios" className="benefits section-padding">
            <div className="container">
                <div className="benefits__layout">
                    <motion.div
                        className="benefits__left"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="section-label">
                            <Award size={14} />
                            ¿Por qué elegirnos?
                        </span>
                        <h2 className="section-title">
                            Ventajas que marcan{' '}
                            <span style={{ color: 'var(--blue-600)' }}>la diferencia</span>
                        </h2>
                        <p className="section-subtitle" style={{ maxWidth: 480 }}>
                            Más de 14 años de experiencia nos respaldan. Somos el aliado
                            estratégico que tu operación industrial necesita.
                        </p>

                        <div className="benefits__big-stats">
                            <div className="benefits__big-stat">
                                <span className="benefits__big-stat-number">100%</span>
                                <span className="benefits__big-stat-label">Tasa de satisfacción de nuestros clientes</span>
                            </div>
                            <div className="benefits__big-stat">
                                <span className="benefits__big-stat-number">2h</span>
                                <span className="benefits__big-stat-label">Tiempo promedio de respuesta a emergencias</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="benefits__grid"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                className="benefits__card"
                                whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(37, 99, 235, 0.12)' }}
                                transition={{ duration: 0.25 }}
                            >
                                <div className="benefits__card-top">
                                    <div className="benefits__card-icon">
                                        {benefit.icon}
                                    </div>
                                    <span className="benefits__card-highlight">{benefit.highlight}</span>
                                </div>
                                <h3 className="benefits__card-title">{benefit.title}</h3>
                                <p className="benefits__card-desc">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
