import { motion } from 'framer-motion';
import { Cpu, Gauge, Thermometer, Droplets, Fan, BatteryCharging } from 'lucide-react';
import './TechSpecs.css';

const specs = [
    {
        icon: <Gauge size={24} />,
        label: 'Capacidad de Enfriamiento',
        value: '5 – 500 TR',
        detail: 'Toneladas de refrigeración',
    },
    {
        icon: <Thermometer size={24} />,
        label: 'Rango de Temperatura',
        value: '-10°C a +25°C',
        detail: 'Según requerimiento',
    },
    {
        icon: <Droplets size={24} />,
        label: 'Flujo de Agua',
        value: 'Hasta 2,000 GPM',
        detail: 'Galones por minuto',
    },
    {
        icon: <Fan size={24} />,
        label: 'Tipos de Condensación',
        value: 'Aire / Agua',
        detail: 'Según aplicación',
    },
    {
        icon: <BatteryCharging size={24} />,
        label: 'Eficiencia Energética',
        value: '0.55 kW/TR',
        detail: 'Consumo optimizado',
    },
    {
        icon: <Cpu size={24} />,
        label: 'Control PLC',
        value: 'Automatizado',
        detail: 'Monitoreo remoto IoT',
    },
];

export default function TechSpecs() {
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

                <div className="tech-specs__grid">
                    {specs.map((spec, index) => (
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
            </div>
        </section>
    );
}
