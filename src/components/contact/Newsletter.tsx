import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    
    // Simulate subscription
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setEmail('');
    }, 1000);
  };

  return (
    <div className="bg-primary-800 text-white rounded-lg shadow-soft overflow-hidden">
      <div className="p-8">
        {isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-4"
          >
            <CheckCircle className="h-12 w-12 text-success-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              ¡Suscripción confirmada!
            </h3>
            <p className="text-primary-100 mb-4">
              Gracias por suscribirte a nuestro newsletter. Pronto recibirás nuestras actualizaciones.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="inline-flex items-center justify-center px-4 py-2 border border-white rounded-md text-sm font-medium hover:bg-white/10 transition duration-200"
            >
              Nueva suscripción
            </button>
          </motion.div>
        ) : (
          <>
            <h3 className="text-xl font-semibold mb-2">
              Suscríbete a nuestro newsletter
            </h3>
            <p className="text-primary-100 mb-6">
              Recibe las últimas noticias, consejos de ciberseguridad y actualizaciones directamente en tu bandeja de entrada.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="newsletter-email" className="sr-only">Email</label>
                <input
                  type="email"
                  id="newsletter-email"
                  placeholder="Tu dirección de email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2 bg-primary-700 border border-primary-600 rounded-md text-white placeholder-primary-300 focus:ring-2 focus:ring-accent-400 focus:border-transparent transition"
                />
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-primary-900 ${
                  isLoading ? 'bg-accent-300' : 'bg-accent-400 hover:bg-accent-500'
                } transition duration-200`}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-primary-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Suscribiendo...
                  </>
                ) : (
                  <>
                    Suscribirse
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </button>
            </form>
            
            <p className="text-xs text-primary-300 mt-4">
              Al suscribirte, aceptas nuestra política de privacidad. Puedes darte de baja en cualquier momento.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Newsletter;