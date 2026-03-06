import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import './Header.css';

const navLinks = [
  { label: 'Inicio', sectionId: 'hero' },
  { label: 'Servicios', sectionId: 'servicios' },
  { label: 'Galería', sectionId: 'galeria' },
  { label: 'Beneficios', sectionId: 'beneficios' },
  { label: 'Testimonios', sectionId: 'testimonios' },
  { label: 'FAQ', sectionId: 'faq' },
  { label: 'Contacto', sectionId: 'contacto' },
];

function scrollToSection(sectionId) {
  const el = document.getElementById(sectionId);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <motion.header
      className={`header ${scrolled ? 'header--scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="header__container container">
        {/* Logo */}
        <a
          href="#"
          className="header__logo"
          onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
        >
          <img src="/images/Refriclimatic_logo_icon.webp?v=2" alt="REFRICLIMATIC S.A.C." className="header__logo-img" />
        </a>

        {/* Desktop Nav */}
        <nav className="header__nav">
          {navLinks.map((link) => (
            <a
              key={link.sectionId}
              href={`#${link.sectionId}`}
              className="header__nav-link"
              onClick={(e) => { e.preventDefault(); scrollToSection(link.sectionId); }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="header__actions">
          <a
            href="#contacto"
            className="btn btn-primary header__cta"
            onClick={(e) => { e.preventDefault(); scrollToSection('contacto'); }}
          >
            Cotizar Ahora
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="header__mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="header__mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="header__mobile-nav">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.sectionId}
                  href={`#${link.sectionId}`}
                  className="header__mobile-link"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.sectionId);
                    setMobileOpen(false);
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#contacto"
                className="btn btn-primary"
                style={{ width: '100%', marginTop: '1rem' }}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contacto');
                  setMobileOpen(false);
                }}
              >
                Cotizar Ahora
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
