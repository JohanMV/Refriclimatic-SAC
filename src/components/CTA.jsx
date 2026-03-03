import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail, MapPin, Send } from 'lucide-react';
import './CTA.css';

export default function CTA() {
    return (
        <section id="contacto" className="cta section-padding">
            <div className="cta__bg-effects">
                <div className="cta__glow cta__glow--1" />
                <div className="cta__glow cta__glow--2" />
            </div>
            <div className="container">
                <div className="cta__layout">
                    {/* Left: Info */}
                    <motion.div
                        className="cta__info"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="cta__title">
                            ¿Listo para optimizar tu{' '}
                            <span className="cta__title-highlight">sistema de enfriamiento?</span>
                        </h2>
                        <p className="cta__subtitle">
                            Solicita una cotización sin compromiso. Nuestro equipo de expertos
                            analizará tus necesidades y te ofrecerá la mejor solución.
                        </p>

                        <div className="cta__contact-items">
                            <a href="tel:+51999999999" className="cta__contact-item">
                                <div className="cta__contact-icon">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <strong>Llámanos</strong>
                                    <span>+51 999 999 999</span>
                                </div>
                            </a>
                            <a href="mailto:ventas@refriclimatic.com" className="cta__contact-item">
                                <div className="cta__contact-icon">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <strong>Escríbenos</strong>
                                    <span>ventas@refriclimatic.com</span>
                                </div>
                            </a>
                            <div className="cta__contact-item">
                                <div className="cta__contact-icon">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <strong>Visítanos</strong>
                                    <span>Av. Industrial 1250, Lima, Perú</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Form */}
                    <motion.div
                        className="cta__form-wrapper"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <form className="cta__form" onSubmit={(e) => e.preventDefault()}>
                            <h3 className="cta__form-title">Solicitar Cotización</h3>

                            <div className="cta__form-row">
                                <div className="cta__form-group">
                                    <label htmlFor="name">Nombre completo</label>
                                    <input type="text" id="name" placeholder="Tu nombre" />
                                </div>
                                <div className="cta__form-group">
                                    <label htmlFor="company">Empresa</label>
                                    <input type="text" id="company" placeholder="Tu empresa" />
                                </div>
                            </div>

                            <div className="cta__form-row">
                                <div className="cta__form-group">
                                    <label htmlFor="email">Correo electrónico</label>
                                    <input type="email" id="email" placeholder="correo@empresa.com" />
                                </div>
                                <div className="cta__form-group">
                                    <label htmlFor="phone">Teléfono</label>
                                    <input type="tel" id="phone" placeholder="+51 999 999 999" />
                                </div>
                            </div>

                            <div className="cta__form-group">
                                <label htmlFor="service">Servicio de interés</label>
                                <select id="service" defaultValue="">
                                    <option value="" disabled>Selecciona un servicio</option>
                                    <option value="alquiler">Alquiler de Chillers</option>
                                    <option value="reparacion">Reparación y Mantenimiento</option>
                                    <option value="proyecto">Proyecto de Ingeniería</option>
                                    <option value="monitoreo">Monitoreo y Control</option>
                                    <option value="otro">Otro</option>
                                </select>
                            </div>

                            <div className="cta__form-group">
                                <label htmlFor="message">Mensaje</label>
                                <textarea id="message" rows="4" placeholder="Cuéntanos sobre tu proyecto o necesidad..." />
                            </div>

                            <button type="submit" className="btn btn-primary btn-lg cta__submit">
                                <Send size={18} />
                                Enviar Solicitud
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
