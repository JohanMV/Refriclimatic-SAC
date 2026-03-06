import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import './TermsPage.css';

export default function TermsPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="terms-page">
            {/* Header bar */}
            <header className="terms-page__header">
                <div className="container terms-page__header-inner">
                    <a href="/" className="terms-page__back">
                        <ArrowLeft size={18} />
                        Volver al inicio
                    </a>
                    <img src="/images/Refriclimatic_logo_icon.png" alt="REFRICLIMATIC S.A.C." className="terms-page__logo" />
                </div>
            </header>

            {/* Hero banner */}
            <div className="terms-page__hero">
                <div className="container">
                    <h1>Términos y Condiciones</h1>
                    <p>Última actualización: Marzo 2026</p>
                </div>
            </div>

            {/* Content */}
            <div className="container terms-page__content">
                <div className="terms-page__body">

                    {/* 1. Información General */}
                    <section className="terms-section">
                        <h2>1. Información General</h2>
                        <p>
                            Los presentes términos y condiciones (en adelante, los "Términos") regulan el acceso y uso del sitio web
                            de <strong>REFRICLIMATIC S.A.C.</strong> (en adelante, "REFRICLIMATIC" o "la Empresa"), domiciliada en el distrito de Santa Anita, provincia y departamento de Lima, República del Perú.
                        </p>
                        <p>
                            Al acceder a este sitio web, solicitar una cotización o contratar cualquiera de nuestros servicios,
                            el usuario (en adelante, "el Cliente") declara haber leído, comprendido y aceptado la totalidad de
                            estos Términos. Si usted no está de acuerdo con alguno de los puntos aquí descritos, le solicitamos
                            abstenerse de utilizar nuestros servicios.
                        </p>
                    </section>

                    {/* 2. Objeto */}
                    <section className="terms-section">
                        <h2>2. Objeto</h2>
                        <p>
                            REFRICLIMATIC se dedica a la <strong>venta, alquiler, reparación y mantenimiento de chillers
                                industriales</strong>, así como a la comercialización de componentes y repuestos asociados. Los presentes
                            Términos regulan la relación entre REFRICLIMATIC y el Cliente con respecto a la prestación de dichos servicios
                            y el uso de la presente plataforma web.
                        </p>
                    </section>

                    {/* 3. Uso de Datos Personales */}
                    <section className="terms-section">
                        <h2>3. Uso de Datos Personales</h2>
                        <p>
                            REFRICLIMATIC se compromete a proteger la privacidad y los datos personales de sus Clientes, conforme a lo
                            establecido en la <strong>Ley N° 29733, Ley de Protección de Datos Personales</strong>, y su Reglamento
                            aprobado por Decreto Supremo N° 003-2013-JUS.
                        </p>

                        <h3>3.1. Datos recopilados</h3>
                        <p>Al utilizar nuestro sitio web y/o servicios, podremos recopilar los siguientes datos personales:</p>
                        <ul>
                            <li>Nombre completo y/o razón social.</li>
                            <li>Número de RUC o DNI.</li>
                            <li>Dirección de correo electrónico.</li>
                            <li>Número de teléfono o celular.</li>
                            <li>Dirección de la empresa o planta industrial.</li>
                            <li>Información técnica relacionada con los equipos o servicios solicitados.</li>
                        </ul>

                        <h3>3.2. Finalidad del tratamiento</h3>
                        <p>Los datos recopilados serán utilizados exclusivamente para:</p>
                        <ul>
                            <li>Atender solicitudes de cotización y contacto.</li>
                            <li>Gestionar la prestación de servicios contratados.</li>
                            <li>Enviar información comercial, promociones y novedades (solo con consentimiento previo).</li>
                            <li>Cumplir con obligaciones legales y tributarias.</li>
                            <li>Mejorar la experiencia del usuario en nuestro sitio web.</li>
                        </ul>

                        <h3>3.3. Derechos del titular</h3>
                        <p>
                            El Cliente podrá ejercer sus derechos de acceso, rectificación, cancelación y oposición (derechos ARCO)
                            respecto a sus datos personales, enviando una solicitud a{' '}
                            <strong>informes@refriclimatic.com</strong> o comunicándose a través de nuestros canales de atención.
                        </p>

                        <h3>3.4. Almacenamiento y seguridad</h3>
                        <p>
                            REFRICLIMATIC implementa medidas técnicas, legales y organizativas apropiadas para garantizar la seguridad
                            y confidencialidad de los datos personales, evitando su alteración, pérdida, tratamiento o acceso no autorizado.
                        </p>
                    </section>

                    {/* 4. Servicios y Condiciones Comerciales */}
                    <section className="terms-section">
                        <h2>4. Servicios y Condiciones Comerciales</h2>

                        <h3>4.1. Precios y moneda</h3>
                        <p>
                            Todos los precios están expresados en <strong>dólares americanos (USD)</strong> y <strong>no incluyen
                                el Impuesto General a las Ventas (IGV)</strong>, el cual será adicionado conforme a la legislación
                            tributaria vigente. El precio del servicio de alquiler está sujeto a la ubicación geográfica donde
                            se encuentra el equipo, pudiendo variar según la distancia y las condiciones logísticas del sitio.
                        </p>

                        <h3>4.2. Condiciones de alquiler</h3>
                        <ul>
                            <li>El <strong>período de alquiler</strong> se computa por ciclos de <strong>30 días calendario</strong> a partir de la entrega del equipo.</li>
                            <li>Los equipos alquilados son propiedad exclusiva de REFRICLIMATIC S.A.C. y deben ser operados conforme a las especificaciones técnicas proporcionadas.</li>
                            <li>La <strong>instalación y desinstalación</strong> del equipo es responsabilidad del cliente, quien deberá garantizar las condiciones eléctricas y mecánicas adecuadas para su funcionamiento.</li>
                            <li>El <strong>tiempo de entrega</strong> del equipo es <strong>inmediato</strong>, sujeto a disponibilidad.</li>
                        </ul>

                        <h3>4.3. Pagos y facturación</h3>
                        <ul>
                            <li>Se requiere un <strong>adelanto del 50% del monto mensual</strong> al inicio del servicio para clientes particulares.</li>
                            <li>La <strong>facturación es inmediata</strong> una vez confirmado el servicio.</li>
                            <li>El cliente deberá enviar <strong>copia del comprobante de pago</strong> de la factura, así como <strong>copia del pago de la detracción</strong> correspondiente, según lo establecido por la normativa tributaria peruana (SUNAT).</li>
                            <li>En caso de mora o incumplimiento de pago, REFRICLIMATIC S.A.C. se reserva el derecho de suspender el servicio y retirar los equipos.</li>
                        </ul>

                        <h3>4.4. Mantenimiento e inspección</h3>
                        <p>
                            El mantenimiento preventivo y las inspecciones técnicas de los equipos en alquiler son realizados
                            exclusivamente por el <strong>personal técnico de REFRICLIMATIC S.A.C.</strong>, sin costo adicional
                            durante la vigencia del contrato de alquiler. El cliente debe facilitar el acceso oportuno a los
                            equipos para la ejecución de estas labores.
                        </p>

                        <h3>4.5. Devolución del equipo</h3>
                        <p>
                            Para el <strong>recojo del chiller</strong>, el cliente deberá coordinar con un mínimo de
                            <strong> 02 semanas de anticipación</strong>. El equipo debe ser devuelto en las mismas condiciones
                            operativas en que fue entregado, considerando el desgaste normal por uso. Cualquier daño atribuible
                            al cliente será evaluado y facturado por separado.
                        </p>

                        <h3>4.6. Exclusiones</h3>
                        <p>Nuestra propuesta <strong>no incluye</strong>:</p>
                        <ul>
                            <li>Instalación eléctrica y mecánica del equipo.</li>
                            <li>Trámites documentarios de SSOMA (Seguridad, Salud Ocupacional y Medio Ambiente) ni servicio de prevencionista.</li>
                            <li>En general, cualquier servicio o suministro que no esté expresamente mencionado en la cotización.</li>
                        </ul>

                        <h3>4.7. Validez de la oferta</h3>
                        <p>
                            Los precios cotizados tienen una <strong>validez de 15 días calendario</strong> a partir de la fecha
                            de emisión. Transcurrido este plazo, REFRICLIMATIC S.A.C. se reserva el derecho de actualizar los
                            precios sin previo aviso.
                        </p>
                    </section>

                    {/* 5. Obligaciones del Cliente */}
                    <section className="terms-section">
                        <h2>5. Obligaciones del Cliente</h2>
                        <p>El Cliente se compromete a:</p>
                        <ul>
                            <li>Proporcionar información veraz, completa y actualizada al momento de solicitar los servicios.</li>
                            <li>Operar los equipos conforme a las especificaciones técnicas y manuales proporcionados por REFRICLIMATIC.</li>
                            <li>No manipular, modificar ni reparar los equipos alquilados sin autorización previa y por escrito de REFRICLIMATIC.</li>
                            <li>Garantizar las condiciones eléctricas, mecánicas y de seguridad necesarias para el correcto funcionamiento de los equipos.</li>
                            <li>Facilitar el acceso del personal técnico de REFRICLIMATIC para la realización de mantenimientos e inspecciones.</li>
                            <li>Realizar los pagos dentro de los plazos acordados y entregar los comprobantes correspondientes.</li>
                            <li>Notificar de inmediato a REFRICLIMATIC ante cualquier falla, avería o situación anómala con los equipos.</li>
                            <li>Devolver los equipos en las condiciones pactadas al término del servicio.</li>
                        </ul>
                    </section>

                    {/* 6. Obligaciones de REFRICLIMATIC */}
                    <section className="terms-section">
                        <h2>6. Obligaciones de REFRICLIMATIC</h2>
                        <p>REFRICLIMATIC se compromete a:</p>
                        <ul>
                            <li>Entregar los equipos en óptimas condiciones operativas y conforme a las especificaciones acordadas.</li>
                            <li>Brindar soporte técnico oportuno durante la vigencia del servicio.</li>
                            <li>Realizar el mantenimiento preventivo de los equipos en alquiler sin costo adicional.</li>
                            <li>Atender las solicitudes de emergencia dentro de un plazo máximo de <strong>2 horas</strong> en Lima Metropolitana.</li>
                            <li>Proteger y tratar adecuadamente los datos personales del Cliente conforme a la legislación vigente.</li>
                            <li>Emitir la facturación correspondiente de manera oportuna y conforme a las normas tributarias aplicables.</li>
                        </ul>
                    </section>

                    {/* 7. Responsabilidad */}
                    <section className="terms-section">
                        <h2>7. Limitación de Responsabilidad</h2>

                        <h3>7.1. Responsabilidad de REFRICLIMATIC</h3>
                        <p>
                            REFRICLIMATIC será responsable únicamente por los daños directos que se deriven del incumplimiento
                            de sus obligaciones contractuales, siempre que dicho incumplimiento sea atribuible a dolo o culpa
                            inexcusable de la Empresa. En ningún caso, REFRICLIMATIC será responsable por:
                        </p>
                        <ul>
                            <li>Daños indirectos, lucro cesante, pérdidas de producción o beneficios dejados de percibir.</li>
                            <li>Daños derivados del uso inadecuado, negligente o fuera de especificaciones de los equipos por parte del Cliente o terceros.</li>
                            <li>Interrupciones en el servicio causadas por fenómenos naturales, cortes de energía eléctrica u otros eventos de fuerza mayor.</li>
                            <li>Fallas derivadas de instalaciones eléctricas o mecánicas deficientes no realizadas por REFRICLIMATIC.</li>
                        </ul>

                        <h3>7.2. Responsabilidad del Cliente</h3>
                        <p>
                            El Cliente será responsable por cualquier daño, pérdida o deterioro de los equipos alquilados que
                            no se derive del uso normal y desgaste ordinario. Los costos de reparación o reposición serán
                            evaluados y facturados al Cliente según corresponda.
                        </p>

                        <h3>7.3. Caso fortuito y fuerza mayor</h3>
                        <p>
                            Ninguna de las partes será responsable por el incumplimiento de sus obligaciones cuando dicho
                            incumplimiento se deba a causas de fuerza mayor o caso fortuito, conforme a lo establecido en
                            el Código Civil Peruano. La parte afectada deberá comunicar el evento a la otra parte dentro
                            de las <strong>48 horas</strong> siguientes a su ocurrencia.
                        </p>
                    </section>

                    {/* 8. Propiedad Intelectual */}
                    <section className="terms-section">
                        <h2>8. Propiedad Intelectual</h2>
                        <p>
                            Todo el contenido del sitio web de REFRICLIMATIC, incluyendo pero no limitándose a textos, imágenes,
                            logotipos, diseños gráficos, fotografías, videos y código fuente, es propiedad exclusiva de
                            REFRICLIMATIC S.A.C. o de sus respectivos titulares, y se encuentra protegido por las leyes
                            de propiedad intelectual vigentes en el Perú.
                        </p>
                        <p>
                            Queda prohibida la reproducción, distribución, comunicación pública o transformación de cualquier
                            contenido del sitio web sin la autorización previa y por escrito de REFRICLIMATIC S.A.C.
                        </p>
                    </section>

                    {/* 9. Uso del Sitio Web */}
                    <section className="terms-section">
                        <h2>9. Uso del Sitio Web</h2>
                        <p>El usuario se compromete a utilizar el sitio web de conformidad con la ley, los presentes Términos y la buena fe. En consecuencia, queda prohibido:</p>
                        <ul>
                            <li>Utilizar el sitio web con fines ilícitos o contrarios a lo establecido en estos Términos.</li>
                            <li>Interferir o intentar interferir con el funcionamiento correcto del sitio web.</li>
                            <li>Recopilar datos de otros usuarios sin su consentimiento.</li>
                            <li>Introducir virus, malware o cualquier otro programa informático dañino.</li>
                            <li>Utilizar la información del sitio web con fines comerciales sin autorización previa.</li>
                        </ul>
                    </section>

                    {/* 10. Legislación Aplicable */}
                    <section className="terms-section">
                        <h2>10. Legislación Aplicable y Jurisdicción</h2>
                        <p>
                            Los presentes Términos y Condiciones se rigen e interpretan de conformidad con las leyes de la
                            <strong> República del Perú</strong>. En particular, resultan aplicables:
                        </p>
                        <ul>
                            <li><strong>Código Civil Peruano</strong> — Obligaciones y contratos.</li>
                            <li><strong>Ley N° 29733</strong> — Ley de Protección de Datos Personales.</li>
                            <li><strong>Decreto Legislativo N° 1044</strong> — Ley de Represión de la Competencia Desleal.</li>
                            <li><strong>Código de Protección y Defensa del Consumidor</strong> (Ley N° 29571).</li>
                            <li><strong>Normativa tributaria</strong> emitida por SUNAT, en lo que corresponda.</li>
                        </ul>
                        <p>
                            Para la resolución de cualquier controversia o conflicto que pudiera derivarse de la interpretación
                            o ejecución de los presentes Términos, las partes acuerdan someterse a la competencia de los
                            <strong> Juzgados y Tribunales del Distrito Judicial de Lima</strong>, renunciando expresamente
                            a cualquier otro fuero que pudiera corresponderles.
                        </p>
                    </section>

                    {/* 11. Modificaciones */}
                    <section className="terms-section">
                        <h2>11. Modificaciones</h2>
                        <p>
                            REFRICLIMATIC se reserva el derecho de modificar los presentes Términos y Condiciones en cualquier
                            momento, sin necesidad de previo aviso. Las modificaciones entrarán en vigor a partir de su publicación
                            en el sitio web. Se recomienda al usuario revisar periódicamente esta página para mantenerse informado
                            de cualquier actualización.
                        </p>
                    </section>

                    {/* 12. Contacto */}
                    <section className="terms-section">
                        <h2>12. Contacto</h2>
                        <p>
                            Para cualquier consulta, reclamo o solicitud relacionada con los presentes Términos y Condiciones,
                            el Cliente puede comunicarse a través de los siguientes canales:
                        </p>
                        <ul>
                            <li><strong>Correo electrónico:</strong> informes@refriclimatic.com</li>
                            <li><strong>Dirección:</strong> Santa Anita, Lima, Perú</li>
                        </ul>
                    </section>

                    {/* Footer */}
                    <div className="terms-page__footer-note">
                        <p>
                            © 2026 REFRICLIMATIC S.A.C. Todos los derechos reservados.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
