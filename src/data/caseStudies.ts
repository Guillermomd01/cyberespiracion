import { CaseStudy, Testimonial } from '../types';

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: 'Programa Renacimiento Celular',
    challenge: 'Una empresa tecnológica buscaba reducir los niveles de estrés y mejorar el bienestar de sus empleados durante la transición al trabajo remoto.',
    solution: 'Implementamos sesiones semanales de respiración consciente y meditación guiada en formato online, además de talleres específicos para gestión del estrés.',
    results: 'Reducción del 60% en reportes de estrés laboral y mejora del 45% en índices de satisfacción laboral.',
    image: 'https://images.pexels.com/photos/4098360/pexels-photo-4098360.jpeg?auto=compress&cs=tinysrgb&w=600',
    client:''
  },
  {
    id: 2,
    title: 'Programa de la Co-creación',
    challenge: 'Un equipo deportivo profesional necesitaba mejorar el rendimiento y la recuperación de sus atletas a través de técnicas de respiración.',
    solution: 'Desarrollamos un programa personalizado de técnicas de respiración para pre-competición y recuperación post-entrenamiento.',
    results: 'Mejora del 30% en tiempos de recuperación y aumento significativo en el rendimiento deportivo.',
    image: 'https://images.pexels.com/photos/4498155/pexels-photo-4498155.jpeg?auto=compress&cs=tinysrgb&w=600',
    client: 'Club Deportivo Elite',
  },
  {
    id: 3,
    title: 'Máster de Cyberespiración',
    challenge: 'Un centro de salud buscaba integrar técnicas de respiración consciente en sus programas de rehabilitación y manejo del dolor crónico.',
    solution: 'Implementamos un programa integral combinando técnicas de respiración con terapias existentes.',
    results: 'Reducción del 40% en el uso de medicación para el dolor y mejora general en la calidad de vida de los pacientes.',
    image: 'https://images.pexels.com/photos/3759661/pexels-photo-3759661.jpeg?auto=compress&cs=tinysrgb&w=600',
    client: 'Centro de Salud Integral',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: 'Las técnicas de respiración consciente han transformado completamente mi manera de manejar el estrés laboral. Ahora me siento más enfocada y energizada durante todo el día.',
    author: 'María Gómez',
    company: 'Directora de Recursos Humanos',
  },
  {
    id: 2,
    quote: 'Los talleres de respiración han sido fundamentales para mejorar mi rendimiento deportivo. La diferencia en mi concentración y resistencia es notable.',
    author: 'Carlos Jiménez',
    company: 'Atleta Profesional, Club Deportivo Elite',
  },
  {
    id: 3,
    quote: 'Incorporar las técnicas de respiración en nuestros programas de rehabilitación ha sido un cambio revolucionario. Los resultados han superado todas nuestras expectativas.',
    author: 'Dra. Ana Martínez',
    company: 'Directora Médica, Centro de Salud Integral',
  },
];