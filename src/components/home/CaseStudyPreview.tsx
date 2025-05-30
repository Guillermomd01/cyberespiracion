import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { caseStudies } from '../../data/caseStudies';

const CaseStudyPreview = () => {
  // Just show a limited number for the preview
  const previewCases = caseStudies.slice(0, 3);

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
            Casos de Éxito
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Descubre cómo hemos ayudado a otras personas a dar luz a su vida
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {previewCases.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-soft overflow-hidden h-full flex flex-col"
            >
              <div className="h-48 relative overflow-hidden">
                <img
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-semibold text-primary-900 mb-2">
                  {caseStudy.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  Cliente: {caseStudy.client}
                </p>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {caseStudy.challenge}
                </p>
              </div>
              <div className="px-6 pb-6">
                <Link
                  to="/casos-exito"
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                >
                  Ver caso completo
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            to="/casos-exito"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700 transition duration-200"
          >
            Ver todos los casos de éxito
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyPreview;