import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Map = () => {
  return (
    <div className="bg-white rounded-lg shadow-soft overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="h-80"
      >
        <iframe
          title="Ubicación de Cyberespiración"
          src="https://maps.google.com/maps?q=Avenida%20Pedro%20Diez%2038%2028019%20Madrid%20España&output=embed"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </motion.div>
      
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-primary-900 mb-4">
          Información de contacto
        </h3>
        
        <div className="space-y-3">
          <div className="flex items-start">
            <MapPin className="h-5 w-5 text-primary-600 mt-1 mr-3" />
            <div>
              <p className="font-medium">Dirección</p>
              <p className="text-gray-600">Avenida Pedro Diez 38</p>
              <p className="text-gray-600">28019 Madrid, España</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <Phone className="h-5 w-5 text-primary-600 mt-1 mr-3" />
            <div>
              <p className="font-medium">Teléfono</p>
              <p className="text-gray-600">+34 605 20 27 81</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <Mail className="h-5 w-5 text-primary-600 mt-1 mr-3" />
            <div>
              <p className="font-medium">Email</p>
              <p className="text-gray-600">hola@cyberespiracion.com</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <Clock className="h-5 w-5 text-primary-600 mt-1 mr-3" />
            <div>
              <p className="font-medium">Horario</p>
              <p className="text-gray-600">Lunes a Viernes: 10:00 - 18:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
