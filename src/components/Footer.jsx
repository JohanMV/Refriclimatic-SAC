import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube, ArrowUp } from 'lucide-react';
import { scrollToSection } from '../utils/scrollTo';
import './Footer.css';

const footerLinks = {
    servicios: [
        { label: 'Alquiler de Chillers', sectionId: 'servicios' },
        { label: 'Reparación Especializada', sectionId: 'servicios' },
        { label: 'Mantenimiento Preventivo', sectionId: 'servicios' },
    ],
    empresa: [
        { label: 'Sobre Nosotros', sectionId: 'beneficios' },
        { label: 'Galería', sectionId: 'galeria' },
        { label: 'Testimonios', sectionId: 'testimonios' },
        { label: 'Preguntas Frecuentes', sectionId: 'faq' },
        { label: 'Contacto', sectionId: 'contacto' },
    ],
};

export default function Footer() {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__grid">
                    {/* Brand */}
                    <div className="footer__brand">
                        <div className="footer__logo">
                            <img src="/images/Refriclimatic_logo_icon.webp" alt="REFRICLIMATIC S.A.C. Logo" className="footer__logo-img" style={{ maxHeight: '60px' }} />
                        </div>
                        <p className="footer__brand-desc">
                            Líderes en soluciones de enfriamiento industrial. Más de 14 años
                            de experiencia brindando servicios de alquiler, reparación y
                            mantenimiento de chillers industriales.
                        </p>
                        <div className="footer__socials">
                            <a href="#" aria-label="Facebook" className="footer__social-link"><Facebook size={18} /></a>
                            <a href="#" aria-label="Instagram" className="footer__social-link"><Instagram size={18} /></a>
                            <a href="#" aria-label="LinkedIn" className="footer__social-link"><Linkedin size={18} /></a>
                            <a href="#" aria-label="YouTube" className="footer__social-link"><Youtube size={18} /></a>
                        </div>
                    </div>

                    {/* Links: Servicios */}
                    <div className="footer__links">
                        <h4>Servicios</h4>
                        <ul>
                            {footerLinks.servicios.map((link, i) => (
                                <li key={i}>
                                    <a href={`#${link.sectionId}`} onClick={(e) => scrollToSection(link.sectionId, e)}>{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Links: Empresa */}
                    <div className="footer__links">
                        <h4>Empresa</h4>
                        <ul>
                            {footerLinks.empresa.map((link, i) => (
                                <li key={i}>
                                    <a href={`#${link.sectionId}`} onClick={(e) => scrollToSection(link.sectionId, e)}>{link.label}</a>
                                </li>
                            ))}
                            <li>
                                <a
                                    href="/#/términos-condiciones"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer__terms-link"
                                >
                                    Términos y Condiciones
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer__links footer__contact-col">
                        <h4>Contacto</h4>
                        <div className="footer__contact-items">
                            <a href="tel:+51 929 130 373" className="footer__contact-link">
                                <Phone size={16} />
                                <span>+51 929 130 373</span>
                            </a>
                            <a href="mailto:informes@refriclimatic.com" className="footer__contact-link">
                                <Mail size={16} />
                                <span>informes@refriclimatic.com</span>
                            </a>
                            <div className="footer__contact-link">
                                <MapPin size={16} />
                                <span>Santa Anita, Lima, Perú</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p className="footer__copyright">
                        © 2026 REFRICLIMATIC S.A.C. Todos los derechos reservados.
                    </p>
                    <button className="footer__scroll-top" onClick={scrollToTop} aria-label="Scroll to top">
                        <ArrowUp size={18} />
                    </button>
                </div>
            </div>
        </footer>
    );
}
