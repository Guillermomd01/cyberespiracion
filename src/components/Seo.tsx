import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

interface SeoProps {
    title: string;
    description: string;
    image?: string;
    }

    const Seo: React.FC<SeoProps> = ({ title, description, image }) => {
    const { pathname } = useLocation();
    const baseUrl = 'https://cyberespiracion.com';
    const url = `${baseUrl}${pathname}`;

    return (
        <Helmet>
        {/* Title & Description */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />

        {/* Open Graph (compatible con LinkedIn) */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {image && <meta property="og:image" content={image} />}

        {/* JSON-LD de Organization con LinkedIn */}
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
    );
};

export default Seo;
