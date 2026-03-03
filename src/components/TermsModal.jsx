import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import './TermsModal.css';

export default function TermsModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <div className="terms-modal-overlay" onClick={onClose}>
                <motion.div
                    className="terms-modal-content"
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <button className="terms-modal-close" onClick={onClose} aria-label="Cerrar modal">
                        <X size={24} />
                    </button>

                    <div className="terms-modal-body">
                        <h2>Términos y Condiciones</h2>
                        <p><strong>Última actualización:</strong> Marzo 2026</p>

                        <h3>1. Información General</h3>
                        <p>
                            Bienvenido a REFRICLIMATIC S.A.C. Estos términos rigen tu uso de nuestros servicios de alquiler,
                            reparación y mantenimiento de chillers industriales. Al solicitar nuestros servicios, aceptas estar sujeto a estos términos.
                        </p>

                        <h3>2. Servicios de Alquiler</h3>
                        <p>
                            Todos los equipos alquilados permanecen bajo propiedad de REFRICLIMATIC S.A.C. El cliente es responsable de garantizar
                            un sitio seguro para la instalación de los equipos y contar con el suministro eléctrico adecuado.
                            El costo del transporte y maniobras de grúa puede variar según la complejidad del proyecto y se detallará en la cotización.
                        </p>

                        <h3>3. Mantenimiento y Reparación</h3>
                        <p>
                            Nuestros servicios de mantenimiento preventivo y reparación cuentan con una garantía de funcionamiento
                            especificada en el contrato de cada cliente. Utilizamos únicamente repuestos originales o equivalentes homologados.
                            La respuesta a emergencias 24/7 está sujeta a los contratos de nivel de servicio (SLA) vigentes con cada cliente o puede generar cargos adicionales si no se cuenta con un contrato previo.
                        </p>

                        <h3>4. Pagos y Facturación</h3>
                        <p>
                            Las cotizaciones tienen una validez de 15 días calendario. Los términos de pago (anticipos, contrapedidos y saldos)
                            se establecen individualmente según la evaluación comercial. En caso de mora, se podrán aplicar penalidades detalladas en la factura.
                        </p>

                        <h3>5. Responsabilidad</h3>
                        <p>
                            REFRICLIMATIC S.A.C. no se hace responsable por daños directos o indirectos derivados del uso indebido
                            o negligente de los equipos por parte del personal del cliente. Nos comprometemos a mantener la máxima calidad
                            y operatividad de la maquinaria entregada.
                        </p>

                        <button className="btn btn-primary" onClick={onClose} style={{ marginTop: '2rem' }}>
                            Aceptar y Cerrar
                        </button>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
