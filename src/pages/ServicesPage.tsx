import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, ShieldAlert, ClipboardCheck,Wind,Stars, GraduationCap } from 'lucide-react';
import { serviceItems } from '../data/services';
import Seo from '../components/Seo';
import { Helmet } from 'react-helmet';

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'shield-check':
      return <ShieldCheck className="h-16 w-16 text-primary-600" />;
    case 'shield-alert':
      return <ShieldAlert className="h-16 w-16 text-primary-600" />;
    case 'clipboard-check':
      return <ClipboardCheck className="h-16 w-16 text-primary-600" />;
    case 'wind':
      return <Wind className="h-16 w-16 text-primary-600" />;
    case 'stars':
      return <Stars className="h-16 w-16 text-primary-600" />;  
    case 'graduation-cap':
      return <GraduationCap className="h-16 w-16 text-primary-600" />;
    default:
      return <ShieldCheck className="h-16 w-16 text-primary-600" />;
  }
};

const ServicesPage = () => {
  return (
    <div>
      <Seo
        title="Programas | Cyberespiración"
        description="Explora todos nuestros programas de respiración consciente y elige el que mejor se adapte a ti."
        image="https://cyberespiracion.com/images/programas-og.png"
      />

      <Helmet>
        <script type="application/ld+json">
          {`
          {
            "@context":"https://schema.org",
            "@type":"BreadcrumbList",
            "itemListElement":[
              { "@type":"ListItem", "position":1, "name":"Inicio",    "item":"https://cyberespiracion.com/" },
              { "@type":"ListItem", "position":2, "name":"Programas", "item":"https://cyberespiracion.com/servicios" }
            ]
          }
          `}
        </script>
      </Helmet>

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
              Nuestros Programas
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-primary-100 leading-relaxed"
            >
              Descubre nuestros programas y todas sus ventajas.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-16">
            {serviceItems.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`grid grid-cols-1 md:grid-cols-3 gap-8 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="md:col-span-1 flex justify-center">
                  {getIcon(service.icon)}
                </div>
                <div className="md:col-span-2">
                  <h2 className="text-3xl font-bold text-primary-800 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    to={`/programas/${service.slug}`}
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700 transition duration-200"
                  >
                    Más información
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary-800 mb-6">
              ¿No estás seguro de qué servicio necesitas?
            </h2>
            <p className="text-gray-600 mb-8">
              Contáctanos para una evaluación gratuita de tus necesidades y preguntas. 
              Nuestros expertos te ayudarán a identificar las soluciones más adecuadas para ti.
            </p>
            <Link
              to="/contacto"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700 transition duration-200"
            >
              Solicitar evaluación gratuita
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;