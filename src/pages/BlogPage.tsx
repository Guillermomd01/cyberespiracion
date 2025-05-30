import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, FileText, Video, Book, Monitor } from 'lucide-react';
import { blogPosts, resources } from '../data/blog';
import Seo from '../components/Seo';
import { Helmet } from 'react-helmet';

const BlogPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const filteredResources = activeTab === 'all' 
    ? resources 
    : resources.filter(resource => resource.type === activeTab);

  return (
    <div>
      <Seo
        title="Blog de Respiración Consciente | Cyberespiración"
        description="Mantente informado con los últimos artículos, guías y recursos sobre respiración consciente."
        image="https://cyberespiracion.com/images/blog-og.png"
      />

      <Helmet>
        <script type="application/ld+json">
          {`
          {
            "@context":"https://schema.org",
            "@type":"BreadcrumbList",
            "itemListElement":[
              { "@type":"ListItem", "position":1, "name":"Inicio", "item":"https://cyberespiracion.com/" },
              { "@type":"ListItem", "position":2, "name":"Blog",   "item":"https://cyberespiracion.com/blog" }
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
              Blog y Recursos
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-primary-100 leading-relaxed"
            >
              Mantente informado con los últimos artículos, guías y recursos sobre respiración consciente.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-800 mb-12 text-center">
            Artículos recientes
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-soft hover:shadow-strong transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.ogImage}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    {post.date}
                  </div>
                  <h3 className="text-xl font-semibold text-primary-900 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Leer artículo
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary-800 mb-8 text-center">
            Recursos descargables
          </h2>
          
          <div className="flex overflow-x-auto space-x-2 py-2 mb-8 justify-center">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                activeTab === 'all'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Todos
            </button>
            
            <button
              onClick={() => setActiveTab('ebook')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition flex items-center ${
                activeTab === 'ebook'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Book className="h-4 w-4 mr-1" />
              E-books
            </button>
            <button
              onClick={() => setActiveTab('webinar')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition flex items-center ${
                activeTab === 'webinar'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Monitor className="h-4 w-4 mr-1" />
              Webinars
            </button>
            <button
              onClick={() => setActiveTab('video')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition flex items-center ${
                activeTab === 'video'
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Video className="h-4 w-4 mr-1" />
              Videos
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-soft hover:shadow-strong transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 bg-primary-100 text-primary-800">
                    {resource.type === 'whitepaper' && 'Whitepaper'}
                    {resource.type === 'ebook' && 'E-book'}
                    {resource.type === 'webinar' && 'Webinar'}
                    {resource.type === 'video' && 'Video'}
                  </div>
                  <h3 className="text-xl font-semibold text-primary-900 mb-2">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {resource.description}
                  </p>
                  <Link
                    to={resource.link}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
                  >
                    {resource.type === 'whitepaper' && 'Descargar whitepaper'}
                    {resource.type === 'ebook' && 'Descargar e-book'}
                    {resource.type === 'webinar' && 'Ver webinar'}
                    {resource.type === 'video' && 'Ver video'}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Suscríbete a nuestro newsletter
            </h2>
            <p className="text-primary-100 mb-8 text-lg">
              Mantente al día con las últimas tendencias y consejos de respiración cosnciente directamente en tu bandeja de entrada.
            </p>
            <iframe
                    width="840"
                    height="425"
                    src="https://sibforms.com/serve/MUIFAHCMBsKt17HGrhDzFZb4l7ZRSQhH26vX9GeIoxq6A9IxHVSrMTWGepKJYW-0B98ZVs2-FrzwcztC61m5GcADA-wljaFROOOaykEKMATJJvsfCTpvDCjaCR7BblMbuZGTlDPc239N6jlXj9ZXX7rrT2tjYn_dGpZfe1lINgdZnBfPkCHVF6m7aCm7zPpnSYnFjwHieIfV0ob6"
                    frameBorder="0"
                    scrolling="auto"
                    allowFullScreen
                    style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', maxWidth: '100%' }}
                  ></iframe>
            <p className="text-xs text-primary-200 mt-4">
              Prometemos no enviarte spam. Puedes darte de baja en cualquier momento.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;