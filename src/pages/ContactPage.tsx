import { motion } from 'framer-motion';
import ContactForm from '../components/contact/ContactForm';
import Map from '../components/contact/Map';
import Newsletter from '../components/contact/Newsletter';
import Seo from '../components/Seo';
import { Helmet } from 'react-helmet';

const ContactPage = () => {
  return (
    <div>
      <Seo
        title="Contacto | Cyberespiración"
        description="¿Tienes dudas o quieres más información? Ponte en contacto con el equipo de Cyberespiración."
        image="https://cyberespiracion.com/images/contacto-og.png"
      />

      <Helmet>
        <script type="application/ld+json">
          {`
          {
            "@context":"https://schema.org",
            "@type":"BreadcrumbList",
            "itemListElement":[
              { "@type":"ListItem", "position":1, "name":"Inicio",    "item":"https://cyberespiracion.com/" },
              { "@type":"ListItem", "position":2, "name":"Contacto", "item":"https://cyberespiracion.com/contacto" }
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
              Contacto
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-primary-100 leading-relaxed"
            >
              Estamos aquí para ayudarte con tus necesidades e preguntas. No dudes en ponerte en contacto con nosotros.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-soft p-8">
                <div className="flex justify-center">
                  <iframe 
                  width="740" 
                  height="675" 
                  src="https://sibforms.com/serve/MUIFAE8NbiBQYim13FkUKKdznsaIvmh38Th8QYPDiVA3AZ76kOHm8Xa9v_jzE95TZTFdREMWnMEXWtZamAcVPJLtGpQF_HM9Qzs4MkBb9pq8OyUTmWqja8_LfhmTMP1vRH9csivrPhaeOinT5Yc40LszNYM6TACrg2eGO5U4oog11_hQ1VpXhXD4m4YTOLsc8Iw6Dcc8_8Wb2_Jh" 
                  frameBorder="0" scrolling="auto" 
                  allowFullScreen 
                  style={{display: 'block', marginLeft: 'auto',
                  marginRight: 'auto', maxWidth: '100%;'}}
                  ></iframe>
                </div>
              </div>
            </div>
            <div>
              <div className="space-y-8">
                <Map />
              </div>
              <div className="bg-white rounded-lg shadow-soft p-8">
                <div className="flex justify-center">
                  <iframe
                    width="640"
                    height="505"
                    src="https://sibforms.com/serve/MUIFAHCMBsKt17HGrhDzFZb4l7ZRSQhH26vX9GeIoxq6A9IxHVSrMTWGepKJYW-0B98ZVs2-FrzwcztC61m5GcADA-wljaFROOOaykEKMATJJvsfCTpvDCjaCR7BblMbuZGTlDPc239N6jlXj9ZXX7rrT2tjYn_dGpZfe1lINgdZnBfPkCHVF6m7aCm7zPpnSYnFjwHieIfV0ob6"
                    frameBorder="0"
                    scrolling="auto"
                    allowFullScreen
                    style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', maxWidth: '100%' }}
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;