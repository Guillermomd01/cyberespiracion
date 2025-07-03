// src/pages/AvisoLegal.tsx
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft, Scale, Building, Mail, Phone } from 'lucide-react';
import Seo from '../components/Seo';

const AvisoLegal: React.FC = () => {
    return (
        <>
            <Seo 
                title="Aviso Legal | Cyberespiración" 
                description="Aviso legal de Cyberespiración. Información sobre términos de uso, propiedad intelectual y condiciones legales."
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
                            <Scale className="w-8 h-8 text-primary-600 mr-3" />
                            <h1 className="text-3xl font-bold text-gray-900">Aviso Legal</h1>
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

                                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                    <Building className="w-6 h-6 mr-2 text-primary-600" />
                                    Datos Identificativos
                                </h2>
                                
                                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                                    <p><strong>Denominación social:</strong> Cyberespiración</p>
                                    <p><strong>Domicilio:</strong> Avenida Pedro Diez 38</p>
                                    <p><strong>Teléfono:</strong> 605 20 27 81</p>
                                    <p><strong>Email:</strong> hola@cyberespiracion.com</p>
                                </div>

                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Objeto</h2>
                                <p className="text-gray-700 mb-6">
                                    El presente aviso legal regula el uso del sitio web www.cyberespiracion.com, 
                                    del que es titular la empresa arriba identificada. La navegación por el sitio web 
                                    atribuye la condición de usuario del mismo e implica la aceptación plena y sin reservas 
                                    de todas las disposiciones incluidas en este aviso legal.
                                </p>

                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Condiciones de Uso</h2>
                                <p className="text-gray-700 mb-4">
                                    El usuario se compromete a hacer un uso adecuado de los contenidos y servicios 
                                    ofrecidos en el sitio web y a no emplearlos para:
                                </p>
                                <ul className="list-disc pl-6 text-gray-700 mb-6">
                                    <li>Incurrir en actividades ilícitas, ilegales o contrarias a la buena fe y al orden público</li>
                                    <li>Difundir contenidos o propaganda de carácter racista, xenófobo, pornográfico-ilegal, de apología del terrorismo o atentatorio contra los derechos humanos</li>
                                    <li>Provocar daños en los sistemas físicos y lógicos del sitio web</li>
                                    <li>Introducir o difundir virus informáticos o cualesquiera otros sistemas que puedan provocar daños</li>
                                </ul>

                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Propiedad Intelectual</h2>
                                <p className="text-gray-700 mb-6">
                                    El sitio web, incluyendo a título enunciativo pero no limitativo su programación, 
                                    edición, compilación y demás elementos necesarios para su funcionamiento, los diseños, 
                                    logotipos, texto y/o gráficos, son propiedad del titular o, en su caso, dispone de 
                                    licencia o autorización expresa por parte de los autores.
                                </p>

                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Servicios Ofrecidos</h2>
                                <p className="text-gray-700 mb-6">
                                    Cyberespiración ofrece servicios de formación y coaching relacionados con la respiración 
                                    consciente. Los programas incluyen:
                                </p>
                                <ul className="list-disc pl-6 text-gray-700 mb-6">
                                    <li>Renacimiento Celular</li>
                                    <li>Co-Creación</li>
                                    <li>Máster de Cyberespiración</li>
                                    <li>Recursos educativos y contenido digital</li>
                                    <li>Asesorias personales y grupales</li>
                                </ul>

                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Limitación de Responsabilidad</h2>
                                <p className="text-gray-700 mb-6">
                                    Los contenidos y servicios ofrecidos en este sitio web tienen carácter informativo y 
                                    educativo. No sustituyen el consejo médico profesional. Se recomienda consultar con 
                                    un profesional de la salud antes de iniciar cualquier programa de respiración consciente.
                                </p>

                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Ley Aplicable y Jurisdicción</h2>
                                <p className="text-gray-700 mb-6">
                                    Para la resolución de todas las controversias o cuestiones relacionadas con el presente 
                                    sitio web o de las actividades en él desarrolladas, será de aplicación la legislación 
                                    española, a la que se someten expresamente las partes.
                                </p>

                                <div className="bg-primary-50 rounded-lg p-6 mt-8">
                                    <h3 className="text-xl font-bold text-primary-900 mb-4 flex items-center">
                                        <Mail className="w-5 h-5 mr-2" />
                                        Contacto
                                    </h3>
                                    <p className="text-primary-800">
                                        Para cualquier consulta sobre este aviso legal, puede contactar con nosotros 
                                        a través de: <strong>hola@cyberespiracion.com</strong>
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Enlaces relacionados */}
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Link 
                                to="/privacidad" 
                                className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
                            >
                                <h3 className="font-bold text-gray-900 mb-2">Política de Privacidad</h3>
                                <p className="text-gray-600 text-sm">
                                    Información sobre el tratamiento de datos personales
                                </p>
                            </Link>
                            <Link 
                                to="/cookies" 
                                className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow"
                            >
                                <h3 className="font-bold text-gray-900 mb-2">Política de Cookies</h3>
                                <p className="text-gray-600 text-sm">
                                    Información sobre el uso de cookies en nuestro sitio web
                                </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AvisoLegal;