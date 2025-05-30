import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ServicesPage from '../pages/ServicesPage';
import ServiceDetailPage from '../pages/ServiceDetailPage';
import RenacimientoCelularPage from '../pages/RenacimientoCelularPage';
import CoCreacionPage from '../pages/CoCreacionPage';
import CaseStudiesPage from '../pages/CaseStudiesPage';
import BlogPage from '../pages/BlogPage';
import FAQPage from '../pages/FAQPage';
import ContactPage from '../pages/ContactPage';
import BlogPostPage from '../pages/BlogPostPage'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="sobre-nosotros" element={<AboutPage />} />
        <Route path="programas" element={<ServicesPage />} />
        <Route path="programas/:slug" element={<ServiceDetailPage />} />
        <Route path="casos-exito" element={<CaseStudiesPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="faq" element={<FAQPage />} />
        <Route path="contacto" element={<ContactPage />} />
        <Route path="programas/renacimiento-celular" element={<RenacimientoCelularPage />}/>
        <Route path="programas/co-creacion" element={<CoCreacionPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />

      </Route>
    </Routes>
  );
};

export default AppRoutes;