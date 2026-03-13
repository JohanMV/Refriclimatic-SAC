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
                            <a href="tel:+51929130373" className="cta__contact-item">
                                <div className="cta__contact-icon">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <strong>Llámanos</strong>
                                    <span>+51 929 130 373</span>
                                </div>
                            </a>
                            <a href="mailto:informes@refriclimatic.com" className="cta__contact-item">
                                <div className="cta__contact-icon">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <strong>Escríbenos</strong>
                                    <span>informes@refriclimatic.com</span>
                                </div>
                            </a>
                            <div className="cta__contact-item">
                                <div className="cta__contact-icon">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <strong>Visítanos</strong>
                                    <span>Santa Anita, Lima, Perú</span>
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
                        <form 
                            className="cta__form" 
                            onSubmit={(e) => {
                                e.preventDefault();
                                const formData = new FormData(e.target);
                                const data = Object.fromEntries(formData.entries());
                                
                                const subject = encodeURIComponent(`Nueva Solicitud de Cotización - ${data.company || data.name}`);
                                const body = encodeURIComponent(
                                    `Hola REFRICLIMATIC,\n\n` +
                                    `He recibido una nueva solicitud de cotización desde la web:\n\n` +
                                    `Nombre: ${data.name}\n` +
                                    `Empresa: ${data.company}\n` +
                                    `Correo: ${data.email}\n` +
                                    `Teléfono: ${data.phone}\n` +
                                    `Servicio: ${data.service}\n\n` +
                                    `Mensaje:\n${data.message}\n`
                                );
                                
                                window.location.href = `mailto:informes@refriclimatic.com?subject=${subject}&body=${body}`;
                            }}
                        >
                            <h3 className="cta__form-title">Solicitar Cotización</h3>

                            <div className="cta__form-row">
                                <div className="cta__form-group">
                                    <label htmlFor="name">Nombre completo</label>
                                    <input type="text" id="name" name="name" placeholder="Tu nombre" required />
                                </div>
                                <div className="cta__form-group">
                                    <label htmlFor="company">Empresa</label>
                                    <input type="text" id="company" name="company" placeholder="Tu empresa" required />
                                </div>
                            </div>

                            <div className="cta__form-row">
                                <div className="cta__form-group">
                                    <label htmlFor="email">Correo electrónico</label>
                                    <input type="email" id="email" name="email" placeholder="correo@empresa.com" required />
                                </div>
                                <div className="cta__form-group">
                                    <label htmlFor="phone">Teléfono</label>
                                    <input type="tel" id="phone" name="phone" placeholder="+51 929 130 373" required />
                                </div>
                            </div>

                            <div className="cta__form-group">
                                <label htmlFor="service">Servicio de interés</label>
                                <select id="service" name="service" defaultValue="" required>
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
                                <textarea id="message" name="message" rows="4" placeholder="Cuéntanos sobre tu proyecto o necesidad..." required />
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
