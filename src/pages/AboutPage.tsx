
import { motion } from 'framer-motion';
import Team from '../components/about/Team';
import { Shield, Target, Zap, Lock } from 'lucide-react';
import Seo from '../components/Seo';
import { Helmet } from 'react-helmet';

const AboutPage = () => {
  return (
    <div>
      <Seo
        title="Sobre Nosotros | Cyberespiración"
        description="Conoce al equipo de Cyberespiración, nuestra misión y visión para transformar tu bienestar con respiración consciente."
        image="https://cyberespiracion.com/images/about-og.png"
      />

      <Helmet>
        <script type="application/ld+json">
          {`
          {
            "@context":"https://schema.org",
            "@type":"BreadcrumbList",
            "itemListElement":[
              {
                "@type":"ListItem",
                "position":1,
                "name":"Inicio",
                "item":"https://cyberespiracion.com/"
              },
              {
                "@type":"ListItem",
                "position":2,
                "name":"Sobre Nosotros",
                "item":"https://cyberespiracion.com/sobre-nosotros"
              }
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
              Sobre Nosotros
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-primary-100 leading-relaxed"
            >
              Somos un equipo de expertos en respiración consciente con el objetivo de renovar el cuerpo y la mente.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary-800 mb-6">Nuestra Misión</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Nuestra misión es proporcionar soluciones de ciberseguridad de vanguardia que 
                permitan a las organizaciones operar con confianza en un entorno digital cada 
                vez más complejo y amenazante. Nos comprometemos a proteger los activos digitales 
                de nuestros clientes mediante servicios personalizados, prácticas innovadoras y 
                un enfoque proactivo.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Creemos que la seguridad no es solo una cuestión técnica, sino un pilar fundamental 
                para el éxito empresarial sostenible en la era digital.
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-primary-800 mb-6">Nuestra Visión</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Aspiramos a ser reconocidos como líderes de referencia en el sector de la ciberseguridad, 
                destacando por nuestra excelencia técnica, integridad y compromiso con la innovación.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Visualizamos un mundo donde las organizaciones puedan aprovechar plenamente el potencial 
                de la transformación digital sin comprometer su seguridad, y trabajamos cada día para 
                hacer esta visión realidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <Team />

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Nuestros Valores
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              La respiración consciente es la llave maestra.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 p-6 rounded-lg border-t-4 border-primary-600"
            >
              <Shield className="h-12 w-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold text-primary-900 mb-2">Integridad</h3>
              <p className="text-gray-600">
                Actuamos con honestidad, transparencia y ética en todas nuestras interacciones, manteniendo los más altos estándares profesionales.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-50 p-6 rounded-lg border-t-4 border-primary-600"
            >
              <Target className="h-12 w-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold text-primary-900 mb-2">Excelencia</h3>
              <p className="text-gray-600">
                Nos esforzamos por superar expectativas con cada persona buscando constantemente la mejora continua y la innovación en nuestros servicios.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-50 p-6 rounded-lg border-t-4 border-primary-600"
            >
              <Zap className="h-12 w-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold text-primary-900 mb-2">Innovación</h3>
              <p className="text-gray-600">
                Empleamos tecnologia innvadora para la mejora continua de nuestros Cyberespiradores .
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-50 p-6 rounded-lg border-t-4 border-primary-600"
            >
              <Lock className="h-12 w-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold text-primary-900 mb-2">Confidencialidad</h3>
              <p className="text-gray-600">
                Protegemos celosamente la información sensible de nuestros clientes, manteniendo los más altos niveles de seguridad y discreción.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/**Certifications
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
              Certificaciones
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Nuestro equipo cuenta con las certificaciones más reconocidas.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {['CISSP', 'CEH', 'OSCP', 'CISM', 'ISO 27001', 'CCSP'].map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-soft flex items-center justify-center h-32"
              >
                <span className="text-xl font-bold text-primary-800">{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>*/}
    </div>
  );
};

export default AboutPage;