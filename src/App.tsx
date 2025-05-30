import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ScrollToTop from './components/ScrollToTop';
import AppRoutes from './routes';
import './styles/globals.css';

function App() {
  return (
    <>
      {/* Meta Tags Globales */}
      <Helmet>
        {/* Idioma */}
        <html lang="es" />

        {/* Título y descripción por defecto */}
        <title>Respiración Consciente | Cyberespiración</title>
        <meta
          name="description"
          content="Cyberespiración: Expertos en técnicas de respiración consciente para renovar cuerpo y mente."
        />
        <link rel="canonical" href="https://cyberespiracion.com/" />

        {/* Open Graph / LinkedIn compatibles (usamos OG que LinkedIn utiliza) */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cyberespiracion.com/" />
        <meta property="og:title" content="Respiración Consciente | Cyberespiración" />
        <meta
          property="og:description"
          content="Cyberespiración ofrece las mejores técnicas de respiración consciente para tu bienestar físico y mental."
        />
        <meta property="og:image" content="https://cyberespiracion.com/og-image.png" />

        {/* JSON-LD de Organización con LinkedIn */}
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Cyberespiración",
            "url": "https://cyberespiracion.com",
            "logo": "https://cyberespiracion.com/logo.png",
            "sameAs": [
              "https://www.linkedin.com/in/jessicamu%C3%B1oz-respiracionconsciente/"
            ]
          }`}
        </script>
      </Helmet>

      <Router>
        <ScrollToTop />
        <AppRoutes />
      </Router>
    </>
  );
}

export default App;
