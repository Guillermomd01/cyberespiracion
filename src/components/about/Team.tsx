import { motion } from 'framer-motion';
import { teamMembers } from '../../data/team';
import { Linkedin, Twitter } from 'lucide-react';

const Team = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
            Nuestro Equipo
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Expertos en respiración consciente, comprometidos con el bienestar.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-soft overflow-hidden text-center flex flex-col h-full"
            >
              <div className="h-64 relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/40 transition"
                    >
                      <Linkedin className="h-5 w-5 text-white" />
                    </a>
                  )}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-primary-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm flex-grow">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;