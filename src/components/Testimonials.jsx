import { motion } from 'framer-motion';
import { Star, MessageSquareQuote } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
    {
        name: 'Carlos Mendoza',
        role: 'Gerente de Planta',
        company: 'Procesadora del Sur S.A.',
        text: 'REFRICLIMATIC fue fundamental durante nuestra emergencia de producción. Nos proporcionaron un chiller de 200 TR en menos de 8 horas, evitando pérdidas millonarias. Su equipo técnico es excepcional.',
        rating: 5,
        avatar: 'CM',
    },
    {
        name: 'María E. Gutiérrez',
        role: 'Dir. de Operaciones',
        company: 'Alimentos Andinos',
        text: 'Llevamos 5 años trabajando con REFRICLIMATIC en el mantenimiento preventivo de nuestros 12 chillers. Su servicio es impecable, siempre cumpliendo con cronogramas y superando expectativas.',
        rating: 5,
        avatar: 'MG',
    },
    {
        name: 'Roberto Sánchez',
        role: 'Jefe de Mantenimiento',
        company: 'Industrias Pacífico',
        text: 'La calidad de los equipos alquilados superó nuestras expectativas. El monitoreo remoto 24/7 nos da total tranquilidad en todo momento. Definitivamente los recomiendo para cualquier proyecto.',
        rating: 5,
        avatar: 'RS',
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.15 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
};

export default function Testimonials() {
    return (
        <section id="testimonios" className="testimonials section-padding">
            <div className="container">
                <motion.div
                    className="testimonials__header text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-label">
                        <MessageSquareQuote size={14} />
                        Testimonios
                    </span>
                    <h2 className="section-title">
                        Lo que dicen nuestros <span style={{ color: 'var(--blue-600)' }}>clientes</span>
                    </h2>
                    <p className="section-subtitle mx-auto">
                        La satisfacción de nuestros clientes es nuestra mejor carta de presentación. Construimos relaciones de largo plazo.
                    </p>
                </motion.div>

                <motion.div
                    className="testimonials__grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                >
                    {testimonials.map((testimonial, i) => (
                        <motion.div key={i} className="testimonials__card" variants={cardVariants}>
                            <div className="testimonials__stars">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
                                ))}
                            </div>
                            <p className="testimonials__text">"{testimonial.text}"</p>
                            <div className="testimonials__author">
                                <div className="testimonials__avatar">{testimonial.avatar}</div>
                                <div className="testimonials__author-info">
                                    <strong>{testimonial.name}</strong>
                                    <span>{testimonial.role}</span>
                                    <span className="testimonials__company">{testimonial.company}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
