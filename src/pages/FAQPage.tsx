import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqs } from '../data/faqs';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQPage = () => {
  const [openFaqs, setOpenFaqs] = useState<Record<number, boolean>>({});
  const [activeCategory, setActiveCategory] = useState('all');
  
  const toggleFaq = (id: number) => {
    setOpenFaqs(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
  
  const filteredFaqs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);
  
  const categories = [
    { id: 'all', label: 'Todas' },
    { id: 'general', label: 'General' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'tarifas', label: 'Tarifas' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Preguntas Frecuentes
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-primary-100 leading-relaxed"
            >
              Encuentra respuestas a las preguntas más comunes sobre nuestros servicios, procesos y tarifas.
            </motion.p>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex overflow-x-auto space-x-2 py-2 mb-8 justify-center">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                    activeCategory === category.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
            
            <div className="space-y-4">
              {filteredFaqs.map((faq) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border border-gray-200 rounded-lg"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex justify-between items-center p-4 text-left"
                  >
                    <h3 className="text-lg font-semibold text-primary-900">{faq.question}</h3>
                    {openFaqs[faq.id] ? (
                      <ChevronUp className="h-5 w-5 text-primary-600" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-primary-600" />
                    )}
                  </button>
                  <AnimatePresence>
                    {openFaqs[faq.id] && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 pt-0 text-gray-600 border-t border-gray-100">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary-800 mb-6">
              ¿No has encontrado respuesta a tu pregunta?
            </h2>
            <p className="text-gray-600 mb-8">
              Nuestro equipo está aquí para ayudarte. Ponte en contacto con nosotros y te responderemos lo antes posible.
            </p>
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700 transition duration-200"
            >
              Contactar con el equipo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;