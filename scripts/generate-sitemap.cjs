// scripts/generate-sitemap.cjs
const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');

// Dominio principal
const BASE_URL = 'https://cyberespiracion.com';

// Rutas estáticas de tu aplicación
const staticRoutes = [
    '/',
    '/sobre-nosotros',
    '/programas',
    '/programas/renacimiento-celular',
    '/programas/co-creacion',
    '/casos-exito',
    '/blog',
    '/faq',
    '/contacto'
    ];

    async function generateSitemap() {
    try {
        // Asegurarse de que la carpeta public existe
        const publicDir = path.resolve(__dirname, '../public');
        if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
        }

        // Creamos el stream de sitemap
        const sitemapStream = new SitemapStream({ hostname: BASE_URL });

        // Escribimos las rutas en el stream
        staticRoutes.forEach(route => {
        sitemapStream.write({ url: route, changefreq: 'weekly', priority: 0.7 });
        });
        sitemapStream.end();

        // Convertimos el stream en un buffer
        const sitemapBuffer = await streamToPromise(sitemapStream);

        // Ruta destino
        const sitemapPath = path.resolve(publicDir, 'sitemap.xml');
        // Escribimos el fichero
        fs.writeFileSync(sitemapPath, sitemapBuffer.toString());

        console.log(`✅ sitemap.xml generado con ${staticRoutes.length} rutas en ${publicDir}`);
    } catch (err) {
        console.error('Error al generar sitemap:', err);
        process.exit(1);
    }
}

// Ejecutar la generación de sitemap
generateSitemap();
