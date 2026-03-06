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
                        <h2>Términos y Condiciones del Servicio</h2>
                        <p><strong>Última actualización:</strong> Marzo 2026</p>

                        <h3>1. Información General</h3>
                        <p>
                            Los presentes términos y condiciones regulan la prestación de servicios de alquiler, mantenimiento
                            y reparación de chillers industriales por parte de <strong>REFRICLIMATIC S.A.C.</strong> Al solicitar
                            nuestros servicios o aceptar una cotización, el cliente manifiesta su conformidad con cada una de las
                            cláusulas aquí descritas.
                        </p>

                        <h3>2. Precios y Moneda</h3>
                        <p>
                            Todos los precios están expresados en <strong>dólares americanos (USD)</strong> y <strong>no incluyen
                                el Impuesto General a las Ventas (IGV)</strong>, el cual será adicionado conforme a la legislación
                            tributaria vigente. El precio del servicio de alquiler está sujeto a la ubicación geográfica donde
                            se encuentra el equipo, pudiendo variar según la distancia y las condiciones logísticas del sitio.
                        </p>

                        <h3>3. Condiciones de Alquiler</h3>
                        <ul>
                            <li>El <strong>período de alquiler</strong> se computa por ciclos de <strong>30 días calendario</strong> a partir de la entrega del equipo.</li>
                            <li>Los equipos alquilados son propiedad exclusiva de REFRICLIMATIC S.A.C. y deben ser operados conforme a las especificaciones técnicas proporcionadas.</li>
                            <li>La <strong>instalación y desinstalación</strong> del equipo es responsabilidad del cliente, quien deberá garantizar las condiciones eléctricas y mecánicas adecuadas para su funcionamiento.</li>
                            <li>El <strong>tiempo de entrega</strong> del equipo es <strong>inmediato</strong>, sujeto a disponibilidad.</li>
                        </ul>

                        <h3>4. Pagos y Facturación</h3>
                        <ul>
                            <li>Se requiere un <strong>adelanto del 50% del monto mensual</strong> al inicio del servicio para clientes particulares.</li>
                            <li>La <strong>facturación es inmediata</strong> una vez confirmado el servicio.</li>
                            <li>El cliente deberá enviar <strong>copia del comprobante de pago</strong> de la factura, así como <strong>copia del pago de la detracción</strong> correspondiente, según lo establecido por la normativa tributaria peruana (SUNAT).</li>
                            <li>En caso de mora o incumplimiento de pago, REFRICLIMATIC S.A.C. se reserva el derecho de suspender el servicio y retirar los equipos.</li>
                        </ul>

                        <h3>5. Mantenimiento e Inspección</h3>
                        <p>
                            El mantenimiento preventivo y las inspecciones técnicas de los equipos en alquiler son realizados
                            exclusivamente por el <strong>personal técnico de REFRICLIMATIC S.A.C.</strong>, sin costo adicional
                            durante la vigencia del contrato de alquiler. El cliente debe facilitar el acceso oportuno a los
                            equipos para la ejecución de estas labores.
                        </p>

                        <h3>6. Devolución del Equipo</h3>
                        <p>
                            Para el <strong>recojo del chiller</strong>, el cliente deberá coordinar con un mínimo de
                            <strong> 02 semanas de anticipación</strong>. El equipo debe ser devuelto en las mismas condiciones
                            operativas en que fue entregado, considerando el desgaste normal por uso. Cualquier daño atribuible
                            al cliente será evaluado y facturado por separado.
                        </p>

                        <h3>7. Exclusiones</h3>
                        <p>Nuestra propuesta <strong>no incluye</strong>:</p>
                        <ul>
                            <li>Instalación eléctrica y mecánica del equipo.</li>
                            <li>Trámites documentarios de SSOMA (Seguridad, Salud Ocupacional y Medio Ambiente) ni servicio de prevencionista.</li>
                            <li>En general, cualquier servicio o suministro que no esté expresamente mencionado en la cotización.</li>
                        </ul>

                        <h3>8. Validez de la Oferta</h3>
                        <p>
                            Los precios cotizados tienen una <strong>validez de 15 días calendario</strong> a partir de la fecha
                            de emisión. Transcurrido este plazo, REFRICLIMATIC S.A.C. se reserva el derecho de actualizar los
                            precios sin previo aviso.
                        </p>

                        <h3>9. Responsabilidad</h3>
                        <p>
                            REFRICLIMATIC S.A.C. no se hace responsable por daños directos o indirectos derivados del uso
                            indebido, negligente o fuera de especificaciones de los equipos por parte del cliente o su personal.
                            Nos comprometemos a entregar equipos en óptimas condiciones operativas y a brindar soporte técnico
                            oportuno durante la vigencia del servicio.
                        </p>

                        <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: 'var(--gray-500)' }}>
                            Para cualquier consulta adicional sobre estos términos, no dude en comunicarse con nuestro equipo comercial
                            a través de la sección de contacto de nuestra página web.
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
