import { motion } from 'framer-motion';
import './WhatsAppButton.css';

export default function WhatsAppButton() {
    const phoneNumber = '51929130373';
    const message = encodeURIComponent('Hola, me gustaría solicitar información sobre sus servicios de chillers industriales.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <motion.div
            className="whatsapp-float"
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
            <span className="whatsapp-float__tooltip">¿Necesitas ayuda? Escríbenos</span>
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-float__btn"
                aria-label="Contáctanos por WhatsApp"
            >
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.498 1.13 6.738 3.046 9.374L1.054 31.27l6.128-1.96a15.925 15.925 0 0 0 8.822 2.654C24.826 31.964 32 24.83 32 16.004 32 7.176 24.826 0 16.004 0Zm9.53 22.606c-.4 1.13-2.35 2.16-3.282 2.238-.84.07-1.606.4-5.406-1.126-4.59-1.844-7.53-6.574-7.76-6.882-.228-.306-1.86-2.476-1.86-4.724 0-2.248 1.178-3.352 1.594-3.812.416-.46.91-.574 1.212-.574.302 0 .606.002.87.016.28.012.654-.106 1.024.78.382.912 1.298 3.16 1.412 3.39.114.228.19.496.038.802-.152.306-.228.496-.456.764-.228.266-.48.596-.684.8-.228.228-.466.476-.2.936.266.46 1.182 1.952 2.538 3.162 1.742 1.554 3.212 2.036 3.67 2.264.46.228.726.19.994-.114.266-.306 1.142-1.334 1.45-1.794.304-.46.612-.38 1.028-.228.42.152 2.66 1.254 3.116 1.482.46.228.764.342.876.532.114.19.114 1.098-.286 2.154Z" />
                </svg>
            </a>
        </motion.div>
    );
}
