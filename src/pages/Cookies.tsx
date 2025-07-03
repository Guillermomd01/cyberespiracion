// src/pages/Cookies.tsx
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft, Cookie, Settings, BarChart3, Shield, Globe, ChevronDown, ChevronRight } from 'lucide-react';
import Seo from '../components/Seo';

const Cookies: React.FC = () => {
    const [expandedSections, setExpandedSections] = useState<string[]>([]);

    const toggleSection = (section: string) => {
        setExpandedSections(prev => 
            prev.includes(section) 
                ? prev.filter(s => s !== section)
                : [...prev, section]
        );
    };

    return (
        <>
            <Seo 
                title="Política de Cookies | Cyberespiración" 
                description="Política de cookies de Cyberespiración. Información sobre el uso de cookies y tecnologías similares en nuestro sitio web."
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
                            <Cookie className="w-8 h-8 text-primary-600 mr-3" />
                            <h1 className="text-3xl font-bold text-gray-900">Política de Cookies</h1>
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

                                <div className="bg-orange-50 rounded-lg p-6 mb-8">
                                    <h2 className="text-xl font-bold text-orange-900 mb-3">¿Qué son las cookies?</h2>
                                    <p className="text-orange-800">
                                        Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo 
                                        cuando visitas un sitio web. Nos ayudan a recordar tus preferencias y a 
                                        mejorar tu experiencia de navegación.
                                    </p>
                                </div>

                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Tipos de Cookies que Utilizamos</h2>

                                {/* Cookies Técnicas */}
                                <div className="border rounded-lg mb-4">
                                    <button
                                        onClick={() => toggleSection('tecnicas')}
                                        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                                    >
                                        <div className="flex items-center">
                                            <Settings className="w-6 h-6 text-green-600 mr-3" />
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-900">Cookies Técnicas</h3>
                                                <p className="text-sm text-gray-600">Esenciales para el funcionamiento del sitio</p>
                                            </div>
                                        </div>
                                        {expandedSections.includes('tecnicas') ? 
                                            <ChevronDown className="w-5 h-5 text-gray-400" /> : 
                                            <ChevronRight className="w-5 h-5 text-gray-400" />
                                        }
                                    </button>
                                    {expandedSections.includes('tecnicas') && (
                                        <div className="px-6 pb-6 border-t bg-gray-50">
                                            <div className="pt-4">
                                                <p className="text-gray-700 mb-4">
                                                    Estas cookies son necesarias para el correcto funcionamiento del sitio web. 
                                                    No se pueden desactivar ya que garantizan funciones básicas como la navegación segura o el acceso a áreas restringidas.
                                                </p>
                                                <div className="bg-white rounded-lg p-4">
                                                    <h4 className="font-bold text-gray-900 mb-2">Cookies incluidas:</h4>
                                                    <ul className="text-sm text-gray-700 space-y-1">
                                                        <li>• <strong>session_id:</strong> Mantiene la sesión activa del usuario</li>
                                                        <li>• <strong>csrf_token:</strong> Previene ataques de falsificación de solicitudes</li>
                                                        <li>• <strong>language:</strong> Guarda el idioma preferido</li>
                                                        <li>• <strong>cookie_consent:</strong> Registra el consentimiento del usuario</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Aquí puedes continuar con cookies analíticas, de publicidad, redes sociales, etc. */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cookies;
