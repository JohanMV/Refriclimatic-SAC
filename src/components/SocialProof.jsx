import { motion } from 'framer-motion';
import './SocialProof.css';

const clients = [
    'Backus & Johnston',
    'Gloria S.A.',
    'Alicorp',
    'Southern Copper',
    'Antamina',
    'Cerro Verde',
    'Cementos Pacasmayo',
    'Lindley',
    'Nestlé Perú',
    'San Fernando',
];

export default function SocialProof() {
    return (
        <section className="social-proof section-padding">
            <div className="container">
                <motion.div
                    className="social-proof__header text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="social-proof__label">Empresas que confían en nosotros</p>
                </motion.div>
            </div>

            {/* Marquee */}
            <div className="social-proof__marquee-wrapper">
                <div className="social-proof__marquee">
                    <div className="social-proof__track">
                        {[...clients, ...clients].map((name, i) => (
                            <div key={i} className="social-proof__client">
                                <div className="social-proof__client-icon">
                                    {name.charAt(0)}
                                </div>
                                <span>{name}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="social-proof__fade social-proof__fade--left" />
                <div className="social-proof__fade social-proof__fade--right" />
            </div>
        </section>
    );
}
