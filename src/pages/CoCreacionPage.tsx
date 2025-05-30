import React, { useState, useEffect } from 'react';
import { Wind, Users, Gift, Star, CheckCircle, Clock, Trophy, Heart, Zap, Target, Play, X } from 'lucide-react';
import Seo from '../components/Seo';
import { Helmet } from 'react-helmet';

const testimonials = [
    {
        name: 'María López',
        text: 'La Co-Creación cambió mi forma de ver la vida. En 90 días materialicé mis objetivos más ambiciosos.',
        rating: 5,
        role: 'Emprendedora'
    },
    {
        name: 'Carlos Ruiz', 
        text: 'La comunidad y las sesiones 1:1 hicieron toda la diferencia. Recomiendo este programa al 100%.',
        rating: 5,
        role: 'Coach Personal'
    },
    {
        name: 'Ana García',
        text: 'La combinación de ejercicios grupales e individuales aceleró mi transformación interior.',
        rating: 5,
        role: 'Terapeuta'
    },
    ];

    const stats = [
    { label: 'Participantes Transformados', value: 1200, icon: Users },
    { label: 'Días de Transformación', value: 90, icon: Clock },
    { label: 'Proyectos Materializados', value: 450, icon: Trophy },
    { label: 'Sesiones Grupales', value: 36, icon: Heart },
    ];

    const benefits = [
    {
        title: 'Hipno-respiración Conectiva',
        description: 'Domina la técnica más poderosa para acceder a estados expandidos de conciencia',
        icon: Wind
    },
    {
        title: 'Liberación de Bloqueos',
        description: 'Libera patrones vibracionales heredados que limitan tu potencial',
        icon: Zap
    },
    {
        title: 'Autosanación Interior',
        description: 'Potencia tu capacidad natural de sanación y transformación personal',
        icon: Heart
    }
    ];

    const modules = [
    {
        title: 'Bienvenida y Preparación',
        week: 'Semanas 1-2',
        items: [
        'Tu verdadera esencia: de la separación a la unión',
        'Ego y alma: identificando tu nivel cocreativo',
        'Atributos clave de la consciencia',
        'Las 7 estructuras vitales y su equilibrio',
        ],
        color: 'from-purple-500 to-pink-500'
    },
    {
        title: 'Liberación Emocional',
        week: 'Semanas 3-4',
        items: [
        'Vergüenza, perdón, culpa y pena',
        'Procesos de integración y reconciliación',
        'Transformar heridas a través del perdón',
        ],
        color: 'from-blue-500 to-purple-500'
    },
    {
        title: 'Transformación de Patrones',
        week: 'Semanas 5-8',
        items: [
        'Miedo, deseo, ira y orgullo',
        'Convertir bloqueos en crecimiento',
        'Equilibrio entre aspiraciones y serenidad',
        ],
        color: 'from-teal-500 to-blue-500'
    },
    {
        title: 'Leyes de Materialización',
        week: 'Semanas 9-10',
        items: [
        'Coraje, neutralidad y aceptación',
        'Principios para manifestar tus deseos',
        'Actitud abierta y transformadora',
        ],
        color: 'from-green-500 to-teal-500'
    },
    {
        title: 'El Amor Incondicional',
        week: 'Semanas 11-12',
        items: [
        'Amor incondicional y paz interior',
        'Integración de amor y razón',
        ],
        color: 'from-pink-500 to-rose-500'
    },
    {
        title: 'Nuevo Nivel de Conciencia',
        week: 'Semana 13',
        items: [
        'Auto-realización y práctica diaria',
        'Consolidación y plena iluminación',
        ],
        color: 'from-yellow-500 to-orange-500'
    },
    ];

    const pricingPlans = [
    {
        name: 'Pago Único',
        price: 750,
        originalPrice: 850,
        savings: 100,
        popular: true,
        benefits: [
        'Programa completo de 90 días',
        '7 módulos de eliminación de bloqueos vibracionales',
        'Sesiones individuales 1:1',
        'Acceso a comunidad privada',
        'Jornadas Co-Creativas Mensuales',
        'Garantía de 30 días'
        ]
    },
    {
        name: '2 Cuotas',
        price: 387,
        total: 774,
        benefits: [
        'Programa completo de 90 días',
        'Sesiones individuales 1:1',
        'Acompañamiento extra',
        'Acceso a comunidad privada',
        'Material descargable'
        ]
    },
    {
        name: '3 Cuotas',
        price: 284,
        total: 852,
        benefits: [
        'Programa completo de 90 días',
        'Sesiones grupales semanales',
        'Sesiones individuales 1:1',
        'Acceso a comunidad privada',
        'Jornadas Co-Creativas mensuales'
        ]
    }
    ];

    export default function CoCreacionPage() {
    const [timeLeft, setTimeLeft] = useState({
        days: 7,
        hours: 23,
        minutes: 45,
        seconds: 30
    });
    const [videoModalOpen, setVideoModalOpen] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
        setTimeLeft(prev => {
            if (prev.seconds > 0) {
            return { ...prev, seconds: prev.seconds - 1 };
            } else if (prev.minutes > 0) {
            return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
            } else if (prev.hours > 0) {
            return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
            } else if (prev.days > 0) {
            return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
            }
            return prev;
        });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="bg-gray-50">
            <Seo
                title="La Co-Creación | Cyberespiración"
                description="Únete a nuestro programa de Co-Creación: transforma tus objetivos en realidad con respiración consciente."
                image="https://cyberespiracion.com/images/blog-og.png"
            />

            <Helmet>
                <script type="application/ld+json">
                {`
                {
                    "@context":"https://schema.org",
                    "@type":"BreadcrumbList",
                    "itemListElement":[
                    { "@type":"ListItem", "position":1, "name":"Inicio",       "item":"https://cyberespiracion.com/" },
                    { "@type":"ListItem", "position":2, "name":"Co-Creación", "item":"https://cyberespiracion.com/cocreacion" }
                    ]
                }
                `}
                </script>
            </Helmet>


        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800"></div>
            <div className="absolute inset-0 bg-black opacity-20"></div>
            
            {/* Animated background elements */}
            <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
                <div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-pulse"
                style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 3}s`,
                    animationDuration: `${2 + Math.random() * 3}s`
                }}
                />
            ))}
            </div>

            <div className="relative z-10 container mx-auto px-4 text-center text-white">
            <div className="max-w-4xl mx-auto">
                <div className="inline-flex items-center bg-yellow-400 text-black px-6 py-2 rounded-full text-sm font-semibold mb-8 animate-bounce">
                <Star className="w-4 h-4 mr-2" />
                ¡ÚLTIMAS PLAZAS DISPONIBLES!
                </div>
                
                <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
                La <span className="bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">Co-Creación</span>
                </h1>
                
                <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
                Transforma tu energía y materializa la vida de tus sueños en <span className="font-bold text-yellow-400">90 días</span> con la Respiración Consciente
                </p>

                {/* Countdown Timer */}
                <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-md mx-auto">
                <p className="text-yellow-400 font-semibold mb-4">⏰ Oferta especial termina en:</p>
                <div className="flex justify-center space-x-4">
                    {Object.entries(timeLeft).map(([unit, value]) => (
                    <div key={unit} className="text-center">
                        <div className="bg-white text-black rounded-lg px-3 py-2 font-bold text-xl">
                        {value.toString().padStart(2, '0')}
                        </div>
                        <p className="text-xs mt-1 capitalize">{unit}</p>
                    </div>
                    ))}
                </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                    onClick={() => scrollToSection('pricing')}
                    className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold px-8 py-4 rounded-full text-lg hover:scale-105 transform transition duration-300 shadow-2xl"
                >
                    Inscríbete Ahora - Desde 750€
                </button>
                
                <button
                    onClick={() => setVideoModalOpen(true)}
                    className="flex items-center bg-white bg-opacity-20 backdrop-blur-sm text-white font-semibold px-6 py-4 rounded-full hover:bg-opacity-30 transition"
                >
                    <Play className="w-5 h-5 mr-2" />
                    Ver Video
                </button>
                </div>

                <p className="mt-6 text-sm opacity-75">
                ⭐ Más de 1,200 vidas transformadas | 💯 Garantía de satisfacción
                </p>
            </div>
            </div>
        </section>

        {/* Social Proof Stats */}
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                    <div key={index} className="text-center group">
                    <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition">
                        <IconComponent className="w-8 h-8 text-purple-600" />
                    </div>
                    <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value.toLocaleString()}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                    </div>
                );
                })}
            </div>
            </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
            <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                ¿Qué vas a conseguir?
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Descubre los beneficios únicos que solo La Co-Creación puede ofrecerte
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                    <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300">
                    <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                        <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                    </div>
                );
                })}
            </div>
            </div>
        </section>

        {/* Program Curriculum */}
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Tu Transformación Paso a Paso
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Un programa estructurado de 13 semanas diseñado para tu evolución completa
                </p>
            </div>

            <div className="max-w-4xl mx-auto">
                {modules.map((module, index) => (
                <div key={index} className="relative mb-8 last:mb-0">
                    <div className="flex items-start">
                    <div className="flex-shrink-0">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${module.color} flex items-center justify-center text-white font-bold text-xl shadow-lg`}>
                        {index + 1}
                        </div>
                    </div>
                    
                    <div className="ml-6 flex-1">
                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                            <h3 className="text-2xl font-bold text-gray-800">{module.title}</h3>
                            <span className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full mt-2 md:mt-0">
                            {module.week}
                            </span>
                        </div>
                        
                        <ul className="space-y-2">
                            {module.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start">
                                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700">{item}</span>
                            </li>
                            ))}
                        </ul>
                        </div>
                    </div>
                    </div>
                    
                    {/* Connection line */}
                    {index < modules.length - 1 && (
                    <div className="absolute left-8 top-16 w-0.5 h-8 bg-gray-200"></div>
                    )}
                </div>
                ))}
            </div>
            </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gradient-to-br from-purple-900 to-pink-900 text-white">
            <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Historias de Transformación Real
                </h2>
                <p className="text-xl opacity-90 max-w-3xl mx-auto">
                Descubre cómo La Co-Creación ha cambiado vidas reales
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-8 hover:bg-opacity-20 transition">
                    <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                    </div>
                    
                    <p className="text-lg mb-6 leading-relaxed">"{testimonial.text}"</p>
                    
                    <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-pink-400 rounded-full flex items-center justify-center text-black font-bold text-lg mr-4">
                        {testimonial.name.charAt(0)}
                    </div>
                    <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm opacity-75">{testimonial.role}</div>
                    </div>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-white">
            <div className="container mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Elige Tu Plan de Transformación
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Opciones flexibles para que inicies tu viaje de co-creación hoy mismo
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative rounded-3xl p-8 ${plan.popular ? 'bg-gradient-to-br from-purple-600 to-pink-600 text-white transform scale-105' : 'bg-white border-2 border-gray-200'} hover:shadow-2xl transition duration-300`}>
                    {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold">
                        MÁS POPULAR
                        </span>
                    </div>
                    )}

                    <div className="text-center mb-8">
                    <h3 className={`text-2xl font-bold mb-4 ${plan.popular ? 'text-white' : 'text-gray-800'}`}>
                        {plan.name}
                    </h3>
                    
                    <div className="mb-4">
                        {plan.originalPrice && (
                        <span className={`text-lg line-through ${plan.popular ? 'text-pink-200' : 'text-gray-400'}`}>
                            {plan.originalPrice}€
                        </span>
                        )}
                        <div className={`text-5xl font-bold ${plan.popular ? 'text-white' : 'text-gray-800'}`}>
                        {plan.price}€
                        {plan.name !== 'Pago Único' && <span className="text-lg">/mes</span>}
                        </div>
                        {plan.total && (
                        <div className={`text-sm ${plan.popular ? 'text-pink-200' : 'text-gray-600'}`}>
                            Total: {plan.total}€
                        </div>
                        )}
                    </div>

                    {plan.savings && (
                        <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold inline-block">
                        Ahorras {plan.savings}€
                        </div>
                    )}
                    </div>

                    <ul className="space-y-3 mb-8">
                    {plan.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start">
                        <CheckCircle className={`w-5 h-5 mr-3 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-yellow-400' : 'text-green-500'}`} />
                        <span className={`${plan.popular ? 'text-white' : 'text-gray-700'}`}>{benefit}</span>
                        </li>
                    ))}
                    </ul>

                    <button
                        onClick={() => window.location.href = 'https://plataforma.cyberespiracion.com/cocreacion-respiracion-consciente/'}
                        className={`w-full py-4 rounded-2xl font-bold text-lg transition duration-300 ${
                            plan.popular 
                            ? 'bg-white text-purple-600 hover:bg-gray-100' 
                            : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                        }`}
                        >
                        Seleccionar Plan
                    </button>
                </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <p className="text-gray-600 mb-4">✅ Garantía de satisfacción de 30 días</p>
                <p className="text-gray-600">🔒 Pago 100% seguro | 💳 Aceptamos pago con tarjeta</p>
            </div>
            </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 text-white">
            <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Tu Nueva Vida Te Está Esperando
                </h2>
                <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
                No dejes que pase más tiempo. La transformación que has estado buscando está a solo un clic de distancia.
                </p>
                
                <div className="bg-yellow-400 text-black p-6 rounded-2xl mb-8 max-w-lg mx-auto">
                <p className="font-bold text-lg mb-2">🎁 BONUS ESPECIAL HOY</p>
                <p>Sesión individual extra valorada en 150€</p>
                </div>

                <button
                onClick={() => scrollToSection('pricing')}
                className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold px-12 py-6 rounded-full text-xl hover:scale-105 transform transition duration-300 shadow-2xl mb-6"
                >
                Comenzar Mi Transformación Ahora
                </button>

                <p className="text-sm opacity-75">
                ⏰ Últimas 48 horas de descuento especial
                </p>
            </div>
            </div>
        </section>

        {/* Video Modal */}
        {videoModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-6 max-w-4xl w-full">
                <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold">Conoce La Co-Creación</h3>
                <button
                    onClick={() => setVideoModalOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-full"
                >
                    <X className="w-6 h-6" />
                </button>
                </div>
                <div className="aspect-video bg-gray-200 rounded-xl flex items-center justify-center">
                <p className="text-gray-600">Video de presentación aquí</p>
                </div>
            </div>
            </div>
        )}
        </div>
    );
}