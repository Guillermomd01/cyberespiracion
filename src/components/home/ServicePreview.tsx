import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { serviceItems } from '../../data/services';
import { Wind, Bot as Lotus, GraduationCap, ArrowRight, Stars } from 'lucide-react';

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'lotus':
      return <Lotus className="h-10 w-10 text-primary-600" />;
    case 'graduation-cap':
      return <GraduationCap className="h-10 w-10 text-primary-600" />;
    case 'stars':
      return <Stars className="h-10 w-10 text-primary-600" />;
    default:
      return <Wind className="h-10 w-10 text-primary-600" />;
  }
};

const ServicePreview = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
            Nuestros Programas
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Descubre nuestros programas transformadores diseñados para ayudarte a dominar el arte de la respiración consciente.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-soft p-6 hover:shadow-strong transition-all duration-300"
            >
              <div className="mb-4">
                {getIcon(service.icon)}
              </div>
              <h3 className="text-xl font-semibold text-primary-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <Link
                to={`/programas-respiracion-consciente/${service.slug}`}
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
              >
                Saber más
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            to="/programas-respiracion-consciente"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700 transition duration-200"
          >
            Ver todos nuestros programas
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicePreview;