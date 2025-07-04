import React, { useState, useEffect } from 'react';
import { faqs } from '../data/faqs';
import { motion, AnimatePresence } from 'framer-motion';
import Seo from '../components/Seo';
import { Helmet } from 'react-helmet';
import {
  Wind,
  Clock,
  Zap,
  Heart,
  Play,
  X,
  ChevronDown,
  ChevronUp,
  User,
  Star,
  ShieldCheck,
} from 'lucide-react';


const instructor = {
  name: 'Jessica Muñoz',
  title: 'Experta en Respiración Consciente',
  bio: 'Más de 10 años guiando a miles de personas a transformar su vida a través del poder de la respiración.',
  photo: '../src/assets/jessica-munoz.jpeg',
};

const testimonials = [
  {
    name: 'María López',
    photo: '../src/assets/logo-trans.png',
    quote: 'Este curso me ayudó a reducir mi ansiedad y recuperar mi energía. ¡Increíble!'
  },
  {
    name: 'Carlos Gómez',
    photo: '../src/assets/logo-trans.png',
    quote: 'Las técnicas son claras, prácticas y transformadoras. Lo recomiendo al 100%.'
  },
  {
    name: 'Ana Torres',
    photo: '../src/assets/logo-trans.png',
    quote: 'La guía de Jessica es excepcional. Me siento más enfocado y en paz.'
  },
];

// Beneficios extraídos del sitio original
const benefits = [
  { icon: Wind, title: 'Reducción de Estrés', description: 'Respira en tres etapas para calmar tu sistema nervioso.' },
  { icon: Zap, title: 'Liberación de Bloqueos', description: 'Libera patrones emocionales que limitan tu potencial.' },
  { icon: Heart, title: 'Bienestar Emocional', description: 'Equilibra tus emociones y potencia tu estabilidad interna.' },
];

// Módulos / Temario
const modules = [
  { week: 'Semana 1', items: ['Introducción a la respiración consciente', 'Respiración abdominal profunda'] },
  { week: 'Semana 2', items: ['Técnica de respiración en tres fases', 'Prácticas diarias guiadas'] },
  { week: 'Semana 3', items: ['Liberación de bloqueos emocionales', 'Meditación acompañada'] },
  { week: 'Semana 4', items: ['Integración y hábitos saludables', 'Plan de práctica autodirigida'] },
];

// Planes y precios
const pricingPlans = [
  { name: '2 Pagos', price: 158,symbol: '€/mes', benefits: ['11 respiraciones guiadas', 'Masterclass "Desmárcate de tus padres"','Acesso Vitalicio','3 Jornada de respiración', '4 Sesiones individuales 1:1','Acceso a la comunidad de Cyberespiradores', 'Acompañamiento personalizado'], highlighted: false },
  { name: 'Pago Único', price: 300, symbol: '€', benefits: ['11 respiraciones guiadas', 'Masterclass "Desmárcate de tus padres"','Acesso Vitalicio','3 Jornada de respiración', '4 Sesiones individuales 1:1','Acceso a la comunidad de Cyberespiradores', 'Acompañamiento personalizado'], highlighted: true },
  { name: '3 Pagos', price: 130, symbol: '€/mes', benefits: ['11 respiraciones guiadas', 'Masterclass "Desmárcate de tus padres"','Acesso Vitalicio','3 Jornada de respiración', '4 Sesiones individuales 1:1','Acceso a la comunidad de Cyberespiradores', 'Acompañamiento personalizado'], highlighted: false },
];

export default function RespiracionConscientePage() {
  const [timeLeft, setTimeLeft] = useState({ days: 5, hours: 12, minutes: 30, seconds: 0 });
  const [videoOpen, setVideoOpen] = useState(false);
  const [openFaqs, setOpenFaqs] = useState<Record<number, boolean>>({});

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(({ question, answer }) => ({
      "@type": "Question",
      "name": question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": answer
      }
    }))
  };

  // Temporizador
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        clearInterval(timer);
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  const toggleFaq = (id: number) => setOpenFaqs(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <div className="bg-gray-50">
      <Seo
        title="Renacimiento Celular | Cyberespiración"
        description="Curso de Renacimiento Celular con Jessica Muñoz: rejuvenece tu cuerpo y mente para descubrir tu propósito."
        image="https://cyberespiracion.com/images/renacimiento-og.png"
      />

      <Helmet>
          <script type="application/ld+json">
            {`
            {
              "@context":"https://schema.org",
              "@type":"BreadcrumbList",
              "itemListElement":[
                { "@type":"ListItem", "position":1, "name":"Inicio",                            "item":"https://cyberespiracion.com/" },
                { "@type":"ListItem", "position":2, "name":"Programas Respiración Consciente", "item":"https://cyberespiracion.com/programas-respiracion-consciente" },
                { "@type":"ListItem", "position":3, "name":"Co-Creación",                      "item":"https://cyberespiracion.com/programas-respiracion-consciente/renacimiento-celular" }
              ]
            }
            `}
          </script>
          {/* FAQPage schema para rich snippets */}
          <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </script>
      </Helmet>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-700 to-blue-500" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4">Curso de Respiración Consciente</h1>
          <p className="text-lg md:text-2xl text-gray-200 mb-8">Con Jessica Muñoz – Transforma tu vida en 30 días</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <button onClick={() => scrollTo('pricing')} className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold">Quiero Entrar</button>
            <button onClick={() => setVideoOpen(true)} className="flex items-center border border-white text-white px-6 py-4 rounded-full">
              <Play className="w-6 h-6 mr-2" /> Ver Video
            </button>
          </div>
          <div className="inline-flex items-center bg-black bg-opacity-30 backdrop-blur-sm text-white px-4 py-2 rounded-full">
            <Clock className="w-5 h-5 mr-2 text-yellow-400" />
            Oferta termina en {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m
          </div>
        </div>
        {/* Modal Video */}
        <AnimatePresence>
          {videoOpen && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4">
              <div className="bg-white rounded-lg overflow-hidden max-w-2xl w-full relative">
                <button onClick={() => setVideoOpen(false)} className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"><X /></button>
                <iframe className="w-full aspect-video" src="https://www.youtube.com/embed/VIDEO_ID" title="Video presentación" allowFullScreen />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Instructor */}
      <section id="instructor" className="py-20 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
          <img src={instructor.photo} alt={instructor.name} className="w-48 h-48 rounded-full object-cover mb-6 md:mb-0 md:mr-8 shadow-lg" />
          <div>
            <h2 className="text-3xl font-bold mb-2">Yo soy {instructor.name}</h2>
            <p className="text-lg text-gray-700 mb-4">{instructor.title}</p>
            <p className="text-gray-600">{instructor.bio}</p>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Beneficios del Curso</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((b, i) => (
              <motion.div key={i} whileHover={{ y: -5 }} className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
                <b.icon className="w-10 h-10 text-teal-500 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">{b.title}</h3>
                <p className="text-gray-600">{b.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Temario */}
      <section id="curriculum" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Qué Aprenderás</h2>
          <div className="space-y-8">
            {modules.map((mod, i) => (
              <motion.div key={i} className="p-6 border-l-4 border-teal-500 bg-gray-50 rounded-lg shadow-sm" whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -50 }} viewport={{ once: true }}>
                <h3 className="text-2xl font-semibold mb-2">{mod.week}</h3>
                <ul className="list-disc list-inside text-gray-700">
                  {mod.items.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Lo que dicen nuestros alumnos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow">
                <img src={t.photo} alt={t.name} className="w-16 h-16 rounded-full mx-auto mb-4 object-cover" />
                <p className="italic text-gray-700 mb-4">"{t.quote}"</p>
                <p className="font-semibold text-gray-900">{t.name}</p>
                <Star className="w-5 h-5 text-yellow-400 mx-auto mt-2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Garantía y Bonus */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center text-center md:text-left">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <ShieldCheck className="w-12 h-12 text-teal-500 mb-4 mx-auto md:mx-0" />
            <h2 className="text-2xl font-bold mb-2">Garantía de 15 días</h2>
            <p className="text-gray-600">Si no ves resultados, te devolvemos tu inversión sin preguntas.</p>
          </div>
          <div className="md:w-1/2">
            <Zap className="w-12 h-12 text-teal-500 mb-4 mx-auto md:mx-0" />
            <h2 className="text-2xl font-bold mb-2">Bonus Incluidos</h2>
            <ul className="text-gray-600 list-disc list-inside">
              <li>PDF con ejercicios adicionales</li>
              <li>Acceso a grupo privado de apoyo</li>
              <li>Actualizaciones de por vida</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Planes y Precios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, idx) => (
              <motion.div key={idx} whileHover={{ scale: 1.05 }} className={`bg-white p-8 rounded-lg shadow ${plan.highlighted ? 'ring-4 ring-teal-500' : ''}`}>
                <h3 className="text-xl font-semibold mb-4">{plan.name}</h3>
                <p className="text-4xl font-bold mb-4">{plan.price}{plan.symbol}</p>
                <ul className="list-disc list-inside text-gray-700 mb-6">
                  {plan.benefits.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
                <button 
                  onClick={() => window.location.href = 'https://plataforma.cyberespiracion.com/renacimineto-celular-respiracion-consciente/'} 
                  className="bg-teal-500 text-white px-6 py-3 rounded-full font-bold">Seleccionar

                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Preguntas Frecuentes</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {faqs.map(f => (
              <div key={f.id} className="border rounded-lg overflow-hidden">
                <button onClick={() => toggleFaq(f.id)} className="w-full flex justify-between px-6 py-4 text-left font-medium">
                  {f.question}
                  {openFaqs[f.id] ? <ChevronUp /> : <ChevronDown />}
                </button>
                <AnimatePresence>
                  {openFaqs[f.id] && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="px-6 pb-4 text-gray-700">
                      {f.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
