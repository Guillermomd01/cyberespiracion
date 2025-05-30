// src/pages/BlogPostPage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Seo from '../components/Seo';
import { blogPosts, BlogPost } from '../data/blog';  
const BlogPostPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) return <div>Artículo no encontrado</div>;

    const { title, excerpt, date, updatedAt, author, ogImage, content } = post;
    const url = `https://cyberespiracion.com/blog/${slug}`;

    return (
        <>
        <Seo title={`${title} | Cyberespiración`} description={excerpt} image={ogImage} />
        <Helmet>
            <script type="application/ld+json">
            {`
            {
                "@context":"https://schema.org",
                "@type":"BlogPosting",
                "mainEntityOfPage":{"@type":"WebPage","@id":"${url}"},
                "headline":"${title.replace(/"/g,'\\"')}",
                "description":"${excerpt.replace(/"/g,'\\"')}",
                "image":["${ogImage}"],
                "author":{"@type":"Person","name":"${author.replace(/"/g,'\\"')}"},
                "publisher":{"@type":"Organization","name":"Cyberespiración","logo":{"@type":"ImageObject","url":"https://cyberespiracion.com/logo.png"}},
                "datePublished":"${date}",
                "dateModified":"${updatedAt || date}"
            }
            `}
            </script>
        </Helmet>
        <article className="prose max-w-none mx-auto py-12">
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <p className="text-gray-500 mb-8">
            Publicado el {new Date(date).toLocaleDateString('es-ES')}
            {updatedAt && ` • Actualizado el ${new Date(updatedAt).toLocaleDateString('es-ES')}`} • Por {author}
            </p>
            <div className="prose prose-lg" dangerouslySetInnerHTML={{ __html: content }} />
        </article>
        </>
    );
};

export default BlogPostPage;
