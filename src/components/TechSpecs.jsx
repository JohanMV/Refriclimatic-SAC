import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Gauge, Thermometer, Wind, Fan, BatteryCharging, ChevronDown } from 'lucide-react';
import './TechSpecs.css';

const specs = [
    // ─── First row ───
    {
        icon: <Gauge size={24} />,
        label: 'Capacidad de Enfriamiento',
        value: '60 – 210 TR',
        detail: 'Toneladas de refrigeración',
    },
    {
        icon: <Fan size={24} />,
        label: 'Tipos de Condensación',
        value: 'Aire / Agua',
        detail: 'Según aplicación',
    },
    {
        icon: <Cpu size={24} />,
        label: 'Voltaje',
        value: '220V - 380V - 460V',
        detail: 'Trifásico',
    },
    // ─── Second row ───
    {
        icon: <Thermometer size={24} />,
        label: 'Rango de Temperatura',
        value: '5°C a +20°C',
        detail: 'Según requerimiento',
    },
    {
        icon: <Wind size={24} />,
        label: 'Gas Refrigerante',
        value: 'R-410A / R-134A / R-22',
        detail: 'Refrigerante ecológico',
    },
    {
        icon: <BatteryCharging size={24} />,
        label: 'Eficiencia Energética',
        value: '0.28 kW/TR',
        detail: 'Consumo optimizado',
    },
];

export default function TechSpecs() {
    const [expanded, setExpanded] = useState(false);

    const firstRow = specs.slice(0, 3);
    const secondRow = specs.slice(3);

    return (
        <section id="caracteristicas" className="tech-specs section-padding">
            <div className="tech-specs__bg-pattern" />
            <div className="container">
                <motion.div
                    className="tech-specs__header text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-label" style={{ background: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.9)' }}>
                        <Cpu size={14} />
                        Especificaciones Técnicas
                    </span>
                    <h2 className="section-title" style={{ color: 'var(--white)' }}>
                        Tecnología de{' '}
                        <span style={{ color: '#60a5fa' }}>alto rendimiento</span>
                    </h2>
                    <p className="section-subtitle mx-auto" style={{ color: 'rgba(255,255,255,0.65)' }}>
                        Nuestros equipos cuentan con la más avanzada tecnología en refrigeración
                        industrial, garantizando rendimiento y eficiencia.
                    </p>
                </motion.div>

                {/* First row — always visible */}
                <div className="tech-specs__grid">
                    {firstRow.map((spec, index) => (
                        <motion.div
                            key={index}
                            className="tech-specs__card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ scale: 1.03, y: -4 }}
                        >
                            <div className="tech-specs__card-icon">
                                {spec.icon}
                            </div>
                            <span className="tech-specs__card-label">{spec.label}</span>
                            <span className="tech-specs__card-value">{spec.value}</span>
                            <span className="tech-specs__card-detail">{spec.detail}</span>
                        </motion.div>
                    ))}
                </div>

                {/* Second row — expandable */}
                <AnimatePresence>
                    {expanded && (
                        <motion.div
                            className="tech-specs__grid tech-specs__grid--second"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        >
                            {secondRow.map((spec, index) => (
                                <motion.div
                                    key={index + 3}
                                    className="tech-specs__card"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.4 }}
                                    whileHover={{ scale: 1.03, y: -4 }}
                                >
                                    <div className="tech-specs__card-icon">
                                        {spec.icon}
                                    </div>
                                    <span className="tech-specs__card-label">{spec.label}</span>
                                    <span className="tech-specs__card-value">{spec.value}</span>
                                    <span className="tech-specs__card-detail">{spec.detail}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Toggle button */}
                <div className="tech-specs__toggle-wrapper">
                    <button
                        className="tech-specs__toggle"
                        onClick={() => setExpanded(!expanded)}
                    >
                        <span>{expanded ? 'Ver menos' : 'Ver más especificaciones'}</span>
                        <motion.span
                            className="tech-specs__toggle-icon"
                            animate={{ rotate: expanded ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ChevronDown size={18} />
                        </motion.span>
                    </button>
                </div>
            </div>
        </section>
    );
}
