// src/pages/BlogPostPage.tsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import Seo from '../components/Seo';
import { blogPosts, BlogPost } from '../data/blog';  

const BlogPostPage: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Artículo no encontrado</h1>
                    <Link to="/blog" className="text-primary-600 hover:text-primary-700 inline-flex items-center">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Volver al blog
                    </Link>
                </div>
            </div>
        );
    }

    const { title, excerpt, date, updatedAt, author, ogImage, content } = post;
    const url = `https://cyberespiracion.com/blog/${slug}`;

    // Calcular tiempo de lectura estimado
    const readingTime = Math.ceil(content.replace(/<[^>]*>/g, '').split(' ').length / 200);

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

            <div className="min-h-screen bg-gray-50">
                {/* Header del artículo */}
                <div className="bg-white shadow-sm">
                    <div className="container mx-auto px-4 py-6">
                        <Link 
                            to="/blog" 
                            className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors mb-6"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Volver al blog
                        </Link>
                    </div>
                </div>

                {/* Contenido principal */}
                <div className="container mx-auto px-4 py-12">
                    <div className="max-w-4xl mx-auto">
                        {/* Imagen destacada */}
                        <div className="mb-8">
                            <img 
                                src={ogImage} 
                                alt={title}
                                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-md"
                            />
                        </div>

                        {/* Metadatos del artículo */}
                        <div className="mb-8">
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                                <div className="flex items-center">
                                    <Calendar className="w-4 h-4 mr-1" />
                                    {new Date(date).toLocaleDateString('es-ES', { 
                                        year: 'numeric', 
                                        month: 'long', 
                                        day: 'numeric' 
                                    })}
                                </div>
                                <div className="flex items-center">
                                    <User className="w-4 h-4 mr-1" />
                                    {author}
                                </div>
                                <div className="flex items-center">
                                    <Clock className="w-4 h-4 mr-1" />
                                    {readingTime} min de lectura
                                </div>
                            </div>
                            
                            {updatedAt && (
                                <div className="text-sm text-gray-400">
                                    Actualizado el {new Date(updatedAt).toLocaleDateString('es-ES')}
                                </div>
                            )}
                        </div>

                        {/* Título y excerpt */}
                        <header className="mb-12">
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                {title}
                            </h1>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                {excerpt}
                            </p>
                        </header>

                        {/* Contenido del artículo */}
                        <article className="bg-white rounded-lg shadow-sm p-8 md:p-12">
                            <div 
                                className="prose prose-lg prose-primary max-w-none
                                    prose-headings:text-gray-900 prose-headings:font-bold
                                    prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6
                                    prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4
                                    prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
                                    prose-ul:text-gray-700 prose-ol:text-gray-700
                                    prose-li:mb-2 prose-li:leading-relaxed
                                    prose-strong:text-gray-900 prose-strong:font-semibold
                                    prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline
                                    prose-blockquote:border-l-4 prose-blockquote:border-primary-200 
                                    prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-600"
                                dangerouslySetInnerHTML={{ __html: content }} 
                            />
                        </article>

                        {/* Call to action */}
                        <div className="mt-12 bg-gradient-to-r from-primary-600 to-primary-700 rounded-lg p-8 text-white text-center">
                            <h3 className="text-2xl font-bold mb-4">
                                ¿Te gustó este artículo?
                            </h3>
                            <p className="text-lg mb-6 opacity-90">
                                Descubre más sobre la respiración consciente y transforma tu vida
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link 
                                    to="/programas" 
                                    className="bg-white text-primary-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                                >
                                    Ver programas
                                </Link>
                                <Link 
                                    to="/blog" 
                                    className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-primary-600 transition-colors"
                                >
                                    Leer más artículos
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogPostPage;