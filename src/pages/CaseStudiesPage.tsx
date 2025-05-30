import { motion } from 'framer-motion';
import { caseStudies, testimonials } from '../data/caseStudies';
import Seo from '../components/Seo';
import { Helmet } from 'react-helmet';

const CaseStudiesPage = () => {
  return (
    <div>
      <Seo
        title="Casos de Éxito | Cyberespiración"
        description="Descubre cómo hemos ayudado a organizaciones y personas a transformar su bienestar a través de la respiración consciente."
        image="https://cyberespiracion.com/images/blog-og.png"
      />

      <Helmet>
        <script type="application/ld+json">
          {`
          {
            "@context":"https://schema.org",
            "@type":"BreadcrumbList",
            "itemListElement":[
              { "@type":"ListItem", "position":1, "name":"Inicio",           "item":"https://cyberespiracion.com/" },
              { "@type":"ListItem", "position":2, "name":"Casos de Éxito", "item":"https://cyberespiracion.com/casos-de-exito" }
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
              Casos de Éxito
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-primary-100 leading-relaxed"
            >
              Descubre cómo hemos ayudado a organizaciones.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-16">
            {caseStudies.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="rounded-lg overflow-hidden shadow-soft h-96">
                    <img
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="bg-gray-50 p-8 rounded-lg h-full">
                    <h2 className="text-2xl font-bold text-primary-800 mb-2">
                      {caseStudy.title}
                    </h2>
                    <p className="text-sm text-gray-500 mb-6">
                      Cliente: {caseStudy.client}
                    </p>
                    
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-primary-700 mb-2">El reto</h3>
                        <p className="text-gray-600">{caseStudy.challenge}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-primary-700 mb-2">Nuestra solución</h3>
                        <p className="text-gray-600">{caseStudy.solution}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-primary-700 mb-2">Resultados</h3>
                        <p className="text-gray-600">{caseStudy.results}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-800 mb-12 text-center">
            Testimonios de clientes
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-soft"
              >
                <svg className="h-8 w-8 text-primary-300 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-gray-600 mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-primary-900">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;