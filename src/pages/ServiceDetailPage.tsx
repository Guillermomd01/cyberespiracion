import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Shield } from 'lucide-react';
import { serviceItems } from '../data/services';
import { ServiceItem } from '../types';
import Seo from '../components/Seo';
import { Helmet } from 'react-helmet';

const ServiceDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [service, setService] = useState<ServiceItem | null>(null);

  useEffect(() => {
    const found = serviceItems.find(item => item.slug === slug);
    setService(found || null);
  }, [slug]);

  if (!service) {
    return (
      <div className="py-16 text-center">
        <Shield className="h-16 w-16 text-primary-300 mx-auto mb-4" />
        <h2 className="text-2xl font-semibold text-primary-800 mb-2">Servicio no encontrado</h2>
        <p className="text-gray-600 mb-6">El servicio que buscas no está disponible o no existe.</p>
        <Link
          to="/servicios"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700 transition duration-200"
        >
          Ver todos los servicios
        </Link>
      </div>
    );
  }

  // Mock data for the specific service
  const benefits = [
    'Identificación proactiva de vulnerabilidades',
    'Reducción del riesgo de brechas de seguridad',
    'Cumplimiento con regulaciones y estándares',
    'Protección de datos sensibles y propiedad intelectual',
    'Mayor confianza de clientes y socios',
  ];

  const processSteps = [
    { title: 'Evaluación inicial', description: 'Analizamos tu infraestructura y necesidades específicas.' },
    { title: 'Planificación', description: 'Desarrollamos un plan de acción personalizado.' },
    { title: 'Implementación', description: 'Ejecutamos las pruebas y análisis con metodologías probadas.' },
    { title: 'Análisis de resultados', description: 'Evaluamos los hallazgos y desarrollamos recomendaciones.' },
    { title: 'Informe detallado', description: 'Entregamos un informe completo con hallazgos y soluciones propuestas.' },
    { title: 'Seguimiento', description: 'Ofrecemos soporte continuo para implementar las recomendaciones.' },
  ];

  return (
    <div>
      <Seo
        title={`${service?.title} | Cyberespiración`}
        description={service?.description || 'Detalle del servicio de Cyberespiración.'}
        image={`https://cyberespiracion.com/images/services/${service?.slug}-og.png`}
      />

      <Helmet>
          <script type="application/ld+json">
            {`
            {
              "@context":"https://schema.org",
              "@type":"BreadcrumbList",
              "itemListElement":[
                { "@type":"ListItem", "position":1, "name":"Inicio",          "item":"https://cyberespiracion.com/" },
                { "@type":"ListItem", "position":2, "name":"Programas",      "item":"https://cyberespiracion.com/servicios" },
                { "@type":"ListItem", "position":3, "name":"${service?.title}", "item":"https://cyberespiracion.com/servicios/${service?.slug}" }
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
              {service.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-primary-100 leading-relaxed"
            >
              {service.description}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-800 mb-8 text-center">
              Beneficios clave
            </h2>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <CheckCircle className="h-6 w-6 text-success-500 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-800 mb-12 text-center">
            Nuestro proceso
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 top-0 h-full w-0.5 bg-primary-200 hidden md:block"></div>
              
              <div className="space-y-12">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-16 hidden md:block"
                  >
                    <div className="absolute left-0 top-0 bg-primary-600 text-white w-12 h-12 rounded-full flex items-center justify-center">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold text-primary-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </motion.div>
                ))}
                
                {/* Mobile version */}
                {processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="md:hidden"
                  >
                    <div className="bg-primary-600 text-white w-10 h-10 rounded-full flex items-center justify-center mb-3">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold text-primary-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              ¿Listo para fortalecer tu seguridad digital?
            </h2>
            <p className="text-primary-100 mb-8 text-lg">
              Contáctanos hoy mismo para una consulta personalizada sobre cómo nuestro servicio de {service.title.toLowerCase()} puede ayudarte.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
              <Link
                to="/contacto"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium bg-accent-500 hover:bg-accent-600 transition duration-200"
              >
                Solicitar una consulta
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/casos-exito"
                className="inline-flex items-center justify-center px-6 py-3 border border-white rounded-md shadow-sm text-base font-medium text-white hover:bg-white/10 transition duration-200"
              >
                Ver casos de éxito
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailPage;