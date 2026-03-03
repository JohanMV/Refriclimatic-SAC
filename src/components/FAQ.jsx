import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import './FAQ.css';

const faqs = [
    {
        question: '¿Cuál es el tiempo de respuesta para emergencias?',
        answer: 'Nuestro equipo de respuesta rápida puede atender emergencias en un tiempo promedio de 2 horas dentro del área metropolitana. Para zonas más alejadas, garantizamos la llegada en un máximo de 6 horas. Contamos con equipos de reemplazo listos para despacho inmediato.',
    },
    {
        question: '¿Qué tipos de chillers tienen disponibles para alquiler?',
        answer: 'Contamos con una amplia flota de chillers que va desde 5 hasta 500 toneladas de refrigeración (TR). Disponemos de chillers enfriados por aire y por agua, tanto con compresores scroll, tornillo como centrífugos. Todos nuestros equipos son de marcas reconocidas como Carrier, Trane y York.',
    },
    {
        question: '¿Incluyen la instalación en el servicio de alquiler?',
        answer: 'Sí, nuestro servicio de alquiler incluye transporte, instalación, puesta en marcha, capacitación al personal y desinstalación al finalizar el contrato. También incluimos el monitoreo remoto 24/7 durante todo el período de alquiler.',
    },
    {
        question: '¿Qué garantía ofrecen en sus servicios de reparación?',
        answer: 'Todos nuestros servicios de reparación incluyen una garantía de 6 meses sobre la mano de obra y de 12 meses sobre los repuestos instalados. Utilizamos exclusivamente repuestos originales del fabricante para asegurar la máxima durabilidad.',
    },
    {
        question: '¿Realizan mantenimiento preventivo?',
        answer: 'Sí, ofrecemos planes de mantenimiento preventivo personalizados que incluyen inspecciones periódicas, limpieza de condensadores, verificación de cargas de refrigerante, análisis de aceite, pruebas de eficiencia y más. Nuestros planes se adaptan a las necesidades específicas de cada cliente.',
    },
    {
        question: '¿En qué zonas del Perú ofrecen sus servicios?',
        answer: 'Operamos a nivel nacional con presencia principal en Lima, Arequipa, Trujillo y Piura. Para proyectos especiales, podemos desplazar nuestro equipo a cualquier punto del país. También atendemos clientes en otros países de Sudamérica.',
    },
    {
        question: '¿Cómo solicito una cotización?',
        answer: 'Puede solicitar una cotización a través de nuestro formulario de contacto en la web, llamando a nuestra línea directa +51 999 999 999, o enviando un correo a ventas@refriclimatic.com. Nuestro equipo comercial le responderá en menos de 24 horas con una propuesta personalizada.',
    },
];

function FAQItem({ faq, isOpen, onToggle }) {
    return (
        <div className={`faq__item ${isOpen ? 'faq__item--open' : ''}`}>
            <button className="faq__question" onClick={onToggle} aria-expanded={isOpen}>
                <span>{faq.question}</span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="faq__chevron"
                >
                    <ChevronDown size={20} />
                </motion.div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="faq__answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <p>{faq.answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section id="faq" className="faq section-padding">
            <div className="container">
                <div className="faq__layout">
                    <motion.div
                        className="faq__left"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="section-label">
                            <HelpCircle size={14} />
                            Preguntas Frecuentes
                        </span>
                        <h2 className="section-title">
                            Resolvemos tus{' '}
                            <span style={{ color: 'var(--blue-600)' }}>dudas</span>
                        </h2>
                        <p className="section-subtitle">
                            Encuentra respuestas a las preguntas más comunes sobre nuestros
                            servicios. Si tienes alguna duda adicional, no dudes en
                            contactarnos.
                        </p>

                        <div className="faq__contact-box">
                            <p>¿No encuentras lo que buscas?</p>
                            <a href="#contacto" className="btn btn-primary">
                                Contáctanos
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        className="faq__list"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {faqs.map((faq, index) => (
                            <FAQItem
                                key={index}
                                faq={faq}
                                isOpen={openIndex === index}
                                onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
