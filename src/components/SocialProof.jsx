import { motion } from 'framer-motion';
import './SocialProof.css';

const clients = [
    { name: 'Backus', logo: '/images/backus_logo.png' },
    { name: 'Gloria S.A.', logo: '/images/gloria_logo.jpeg' },
    { name: 'PRECOR', logo: '/images/precor_logo.png' },
    { name: 'Globalplast Perú', logo: '/images/global_plast_sac_logo.jpg' },
    { name: 'Eurotubo', logo: '/images/eurotubo_logo.jpg' },
    { name: 'Iberoplast', logo: '/images/iberoplast_logo.png' },
    { name: 'Solpack', logo: '/images/solpack_logo.jpg' },
    { name: 'RomEx', logo: '/images/romex_logo.png' },
    { name: 'Industrias San Miguel', logo: '/images/industrias_san_miguel_logo.jpg' },
    { name: 'Surpack', logo: '/images/surpack_logo.jpg' },
    { name: 'R&M Consulting', logo: '/images/r&m_consulting_logo.jpg' },
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
                        {[...clients, ...clients].map((client, i) => (
                            <div key={i} className="social-proof__client">
                                <div className="social-proof__client-logo">
                                    <img src={client.logo} alt={client.name} />
                                </div>
                                <span>{client.name}</span>
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
