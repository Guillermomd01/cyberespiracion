import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ChatBot from '../ChatBot';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      {/* Chatbot */}
      <ChatBot 
        webhookUrl="https://mdialab-n8n.kaqqcd.easypanel.host/webhook/3ea6ef91-b05c-41f8-b3bf-27e47dfcf9f4/chat"
        title="Asistente de Respiración"
        placeholder="Pregunta sobre respiración consciente..."
      />
    </div>
  );
};

export default Layout;