// src/pages/Privacidad.tsx
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Database, Eye, Lock, Trash2, UserCheck } from 'lucide-react';
import Seo from '../components/Seo';

const Privacidad: React.FC = () => {
    return (
        <>
            <Seo 
                title="Política de Privacidad | Cyberespiración" 
                description="Política de privacidad de Cyberespiración. Información sobre el tratamiento de datos personales y protección de la privacidad."
            />
            
            <div className="min-h-screen bg-gray-50">
                {/* Header */}
                <div className="bg-white shadow-sm">
                    <div className="container mx-auto px-4 py-6">
                        <Link 
                            to="/" 
                            className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors mb-4"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Volver al inicio
                        </Link>
                        <div className="flex items-center">
                            <Shield className="w-8 h-8 text-primary-600 mr-3" />
                            <h1 className="text-3xl font-bold text-gray-900">Política de Privacidad</h1>
                        </div>
                    </div>
                </div>

                {/* Contenido */}
                <div className="container mx-auto px-4 py-12">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
                            <div className="prose prose-lg max-w-none">
                                <p className="text-gray-600 mb-8">
                                    <strong>Última actualización:</strong> {new Date().toLocaleDateString('es-ES')}
                                </p>

                                <div className="bg-blue-50 rounded-lg p-6 mb-8">
                                    <h2 className="text-xl font-bold text-blue-900 mb-3">Resumen Ejecutivo</h2>
                                    <p className="text-blue-800">
                                        En Cyberespiración respetamos tu privacidad. Recopilamos únicamente los datos 
                                        necesarios para ofrecerte nuestros servicios y nunca los compartimos con terceros 
                                        sin tu consentimiento expreso.
                                    </p>
                                </div>

                                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                    <UserCheck className="w-6 h-6 mr-2 text-primary-600" />
                                    Responsable del Tratamiento
                                </h2>
                                
                                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                                    <p><strong>Responsable:</strong> Cyberespiración</p>
                                    <p><strong>Domicilio:</strong> Avenida Pedro Diez 38</p>
                                    <p><strong>Email:</strong> hola@cyberespiracion.com</p>
                                    <p><strong>Teléfono:</strong> 605 20 27 81</p>
                                    <p><strong>Delegado de Protección de Datos:</strong> Para garantizar la máxima protección de tus datos personales, hemos designado a un Delegado de Protección de Datos (DPO), quien actúa como garante del cumplimiento de la normativa de protección de datos en nuestra organización.

Puedes contactar con nuestro DPO en cualquier momento para cualquier consulta, solicitud o para ejercer tus derechos sobre tus datos personales a través del siguiente correo electrónico:

hola@cyberespiracion.com

El DPO está a tu disposición para atender cualquier cuestión relacionada con el tratamiento de tus datos y con el ejercicio de los derechos de acceso, rectificación, supresión, limitación del tratamiento, portabilidad y oposición, así como cualquier otra solicitud que desees realizar en este ámbito.</p>
                                </div>

                                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Database className="w-6 h-6 mr-2 text-primary-600" />
                                    Datos que Recopilamos
                                </h2>
                                
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">Datos de Identificación</h3>
                                <ul className="list-disc pl-6 text-gray-700 mb-6">
                                    <li>Nombre y apellidos</li>
                                    <li>Dirección de correo electrónico</li>
                                    <li>Número de teléfono</li>
                                    <li>Dirección postal (cuando sea necesario)</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-gray-800 mb-4">Datos de Navegación</h3>
                                <ul className="list-disc pl-6 text-gray-700 mb-6">
                                    <li>Dirección IP</li>
                                    <li>Tipo de navegador</li>
                                    <li>Páginas visitadas</li>
                                    <li>Tiempo de permanencia</li>
                                    <li>Referrer (página de origen)</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-gray-800 mb-4">Datos de Servicios</h3>
                                <ul className="list-disc pl-6 text-gray-700 mb-6">
                                    <li>Información sobre programas contratados</li>
                                    <li>Historial de participación</li>
                                    <li>Preferencias de comunicación</li>
                                    <li>Feedback y evaluaciones</li>
                                </ul>

                                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Eye className="w-6 h-6 mr-2 text-primary-600" />
                                    Finalidades del Tratamiento
                                </h2>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                    <div className="bg-green-50 rounded-lg p-6">
                                        <h3 className="font-bold text-green-900 mb-3">Prestación de Servicios</h3>
                                        <p className="text-green-800 text-sm">
                                            Para ofrecerte nuestros programas de respiración consciente y 
                                            gestionar tu participación en los mismos.
                                        </p>
                                    </div>
                                    <div className="bg-blue-50 rounded-lg p-6">
                                        <h3 className="font-bold text-blue-900 mb-3">Comunicación</h3>
                                        <p className="text-blue-800 text-sm">
                                            Para enviarte información sobre nuestros servicios, 
                                            newsletters y comunicaciones importantes.
                                        </p>
                                    </div>
                                    <div className="bg-purple-50 rounded-lg p-6">
                                        <h3 className="font-bold text-purple-900 mb-3">Mejora de Servicios</h3>
                                        <p className="text-purple-800 text-sm">
                                            Para analizar el uso del sitio web y mejorar 
                                            la experiencia del usuario.
                                        </p>
                                    </div>
                                    <div className="bg-orange-50 rounded-lg p-6">
                                        <h3 className="font-bold text-orange-900 mb-3">Cumplimiento Legal</h3>
                                        <p className="text-orange-800 text-sm">
                                            Para cumplir con obligaciones legales y 
                                            fiscales aplicables.
                                        </p>
                                    </div>
                                </div>

                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Base Legal</h2>
                                <ul className="list-disc pl-6 text-gray-700 mb-6">
                                    <li><strong>Consentimiento:</strong> Para el envío de comunicaciones comerciales</li>
                                    <li><strong>Ejecución contractual:</strong> Para la prestación de servicios contratados</li>
                                    <li><strong>Interés legítimo:</strong> Para mejorar nuestros servicios y prevenir fraudes</li>
                                    <li><strong>Obligación legal:</strong> Para cumplir con normativas aplicables</li>
                                </ul>

                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Plazo de Conservación</h2>
                                <p className="text-gray-700 mb-6">
                                    Conservamos tus datos personales durante el tiempo necesario para las finalidades 
                                    para las que fueron recabados y para cumplir con las obligaciones legales:
                                </p>
                                <ul className="list-disc pl-6 text-gray-700 mb-6">
                                    <li><strong>Datos de servicios:</strong> Durante la prestación del servicio y 6 años adicionales</li>
                                    <li><strong>Datos de marketing:</strong> Hasta que retires tu consentimiento</li>
                                    <li><strong>Datos de navegación:</strong> Máximo 2 años</li>
                                </ul>

                                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Lock className="w-6 h-6 mr-2 text-primary-600" />
                                    Seguridad de los Datos
                                </h2>
                                <p className="text-gray-700 mb-6">
                                    Implementamos medidas técnicas y organizativas apropiadas para proteger 
                                    tus datos personales contra el acceso no autorizado, alteración, divulgación 
                                    o destrucción. Esto incluye:
                                </p>
                                <ul className="list-disc pl-6 text-gray-700 mb-6">
                                    <li>Cifrado de datos sensibles</li>
                                    <li>Control de acceso basado en roles</li>
                                    <li>Auditorías de seguridad regulares</li>
                                    <li>Formación continua del personal</li>
                                </ul>

                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Derechos del Usuario</h2>
                                <p className="text-gray-700 mb-4">
                                    Como usuario, tienes derecho a:
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                    <div className="bg-gray-50 rounded-lg p-4">
                                        <h4 className="font-bold text-gray-900 mb-2">Acceso</h4>
                                        <p className="text-gray-700 text-sm">Conocer qué datos tenemos sobre ti</p>
                                    </div>
                                    <div className="bg-gray-50 rounded-lg p-4">
                                        <h4 className="font-bold text-gray-900 mb-2">Rectificación</h4>
                                        <p className="text-gray-700 text-sm">Corregir datos inexactos</p>
                                    </div>
                                    <div className="bg-gray-50 rounded-lg p-4">
                                        <h4 className="font-bold text-gray-900 mb-2">Supresión</h4>
                                        <p className="text-gray-700 text-sm">Solicitar la eliminación de tus datos</p>
                                    </div>
                                    <div className="bg-gray-50 rounded-lg p-4">
                                        <h4 className="font-bold text-gray-900 mb-2">Portabilidad</h4>
                                        <p className="text-gray-700 text-sm">Obtener una copia de tus datos</p>
                                    </div>
                                </div>

                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Compartir Datos</h2>
                                <p className="text-gray-700 mb-6">
                                    No compartimos tus datos personales con terceros, excepto en los siguientes casos:
                                </p>
                                <ul className="list-disc pl-6 text-gray-700 mb-6">
                                    <li>Cuando sea necesario para la prestación del servicio (procesadores de datos)</li>
                                    <li>Por obligación legal o requerimiento judicial</li>
                                    <li>Con tu consentimiento expreso</li>
                                </ul>

                                <div className="bg-primary-50 rounded-lg p-6 mt-8">
                                    <h3 className="text-xl font-bold text-primary-900 mb-4 flex items-center">
                                        <Trash2 className="w-5 h-5 mr-2" />
                                        Ejercer tus Derechos
                                    </h3>
                                    <p className="text-primary-800 mb-4">
                                        Para ejercer cualquiera de tus derechos, puedes contactarnos a través de:
                                    </p>
                                    <p className="text-primary-800">
                                        <strong>Email:</strong> hola@cyberespiracion.com<br />
                                        <strong>Teléfono:</strong> 605 20 27 81<br />
                                        <strong>Autoridad de Control:</strong> Agencia Española de Protección de Datos (AEPD)
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Enlaces relacionados */}
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Link 
                                to="/aviso-legal" 
                                className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
                            >
                                <h3 className="font-bold text-gray-900 mb-2">Aviso Legal</h3>
                                <p className="text-gray-600 text-sm">
                                    Términos y condiciones de uso del sitio web
                                </p>
                            </Link>
                            <Link 
                                to="/cookies" 
                                className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
                            >
                                <h3 className="font-bold text-gray-900 mb-2">Política de Cookies</h3>
                                <p className="text-gray-600 text-sm">
                                    Información sobre el uso de cookies
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Privacidad;