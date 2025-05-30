import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '../../data/caseStudies';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = testimonials.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(current => (current === length - 1 ? 0 : current + 1));
    }, 8000);
    return () => clearInterval(interval);
  }, [length]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <section className="py-16 bg-primary-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-primary-100">
            Experiencias reales de personas que confían en Cyberespiración.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <Quote className="h-12 w-12 mx-auto text-primary-300 mb-6" />
              <blockquote className="text-xl md:text-2xl italic mb-6">
                "{testimonials[current].quote}"
              </blockquote>
              <div className="font-semibold">{testimonials[current].author}</div>
              <div className="text-primary-300">{testimonials[current].company}</div>
            </motion.div>
          </AnimatePresence>
          
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-primary-700 hover:bg-primary-600 transition"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-primary-700 hover:bg-primary-600 transition"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
        
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2 w-2 rounded-full transition-all ${
                index === current ? 'bg-white w-6' : 'bg-primary-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;