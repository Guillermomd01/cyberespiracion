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
import BlogPostPage from '../pages/BlogPostPage';
import AvisoLegal from '../pages/AvisoLegal';
import Privacidad from '../pages/Privacidad';
import Cookies from '../pages/Cookies'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="sobre-nosotros" element={<AboutPage />} />
        <Route path="programas-respiracion-consciente" element={<ServicesPage />} />
        <Route path="programas/:slug" element={<ServiceDetailPage />} />
        <Route path="casos-exito" element={<CaseStudiesPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="faq" element={<FAQPage />} />
        <Route path="contacto" element={<ContactPage />} />
        <Route path="programas-respiracion-consciente/renacimiento-celular" element={<RenacimientoCelularPage />}/>
        <Route path="programas-respiracion-consciente/co-creacion" element={<CoCreacionPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="aviso-legal" element={<AvisoLegal />} />
        <Route path="privacidad" element={<Privacidad />} />
        <Route path="cookies" element={<Cookies />} />

      </Route>
    </Routes>
  );
};

export default AppRoutes;