import Hero from '../components/home/Hero';
import ServicePreview from '../components/home/ServicePreview';
import CaseStudyPreview from '../components/home/CaseStudyPreview';
import TestimonialSlider from '../components/home/TestimonialSlider';
import BlogPreview from '../components/home/BlogPreview';
import Seo from '../components/Seo';
import { Helmet } from 'react-helmet';

import { faqs } from '../data/faqs';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';




const HomePage = () => {
  const [openFaqs, setOpenFaqs] = useState<Record<number, boolean>>({});
  
  const toggleFaq = (id: number) => {
    setOpenFaqs(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div>
      <Seo
        title="Inicio | Cyberespiración"
        description="Bienvenido a Cyberespiración: descubre técnicas de respiración consciente para mejorar tu bienestar corporal y mental."
        image="https://cyberespiracion.com/images/home-og.png"
      />
      {/* FAQPage JSON-LD para las FAQs mostradas */}
      <Helmet>
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              ${faqs
                .map(faq => `
                  {
                    "@type": "Question",
                    "name": "${faq.question.replace(/"/g, '\\"')}",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "${faq.answer.replace(/"/g, '\\"')}"
                    }
                  }`)
                .join(',')}
            ]
          }
          `}
        </script>
      </Helmet>

      <Hero />
      <ServicePreview />
      <CaseStudyPreview />
      <TestimonialSlider />
      <BlogPreview />

      
      
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
                Preguntas Frecuentes
              </h2>
              <p className="text-gray-600">
                Encuentra respuestas a las preguntas más comunes sobre nuestros programas y servicios.
              </p>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq) => (
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
    </div>
  );
};

export default HomePage;