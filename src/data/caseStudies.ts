import { CaseStudy, Testimonial } from '../types';

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: 'Programa Renacimiento Celular',
    challenge: 'Durante la transición al trabajo remoto, empleados de una empresa tecnológica vivían altos niveles de estrés y desconexión emocional.',
    solution: 'Se integraron nuestros ejercicios de respiración consciente basados en memorias celulares (dirigidos a liberar bloqueos) en sesiones semanales online, reforzadas con meditación guiada y micro‑talleres de gestión emocional.',
    results: 'Disminución del 60 % en los episodios de estrés, y un 45 % de mejora en satisfacción laboral, reflejando tanto bienestar corporativo como sanación interna.',
    image: 'https://images.pexels.com/photos/4098360/pexels-photo-4098360.jpeg?auto=compress&cs=tinysrgb&w=600',
    client:''
  },
  {
    id: 2,
    title: 'Programa de la Co-creación',
    challenge: 'Un equipo deportivo profesional necesitaba optimizar recuperación física y rendimiento mental a través del control respiratorio.',
    solution: 'Implementamos secuencias de respiración conscientes previas a la competición y protocolos personalizados post‑entrenamiento, incorporando elementos de hipno‑respiración para desbloquear tensiones musculares y emocionales.',
    results: 'Tiempos de recuperación reducidos en un 30 %, aumento del enfoque mental y mejoras significativas en rendimiento deportivo y cohesión de equipo.',
    image: 'https://images.pexels.com/photos/4498155/pexels-photo-4498155.jpeg?auto=compress&cs=tinysrgb&w=600',
    client: '',
  },
  {
    id: 3,
    title: 'Máster de Cyberespiración',
    challenge: 'Tras participar en los cursos de Renacimiento Celular y Co‑creación, una alumna buscaba ir más allá: quería entrenarse con Jessica Muñoz para dominar la respiración consciente de forma profesional y poder guiar a otros.',
    solution: 'Inscripción al Máster de Cyberespiración.',
    results: 'La alumna completó el máster con nivel avanzado, integrando la respiración consciente en su práctica profesional.',
    image: 'https://images.pexels.com/photos/3759661/pexels-photo-3759661.jpeg?auto=compress&cs=tinysrgb&w=600',
    client: 'Alumna certificada de Cyberespiración',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: 'Las técnicas de respiración consciente han transformado completamente mi manera de manejar el estrés laboral. Ahora me siento más enfocada y energizada durante todo el día.',
    author: 'María Gómez',
    company: '',
  },
  {
    id: 2,
    quote: 'Los talleres de respiración han sido fundamentales para mejorar mi rendimiento deportivo. La diferencia en mi concentración y resistencia es notable.',
    author: 'Carlos Jiménez',
    company: '',
  },
  {
    id: 3,
    quote: 'Incorporar las técnicas de respiración en nuestros programas de rehabilitación ha sido un cambio revolucionario. Los resultados han superado todas nuestras expectativas.',
    author: 'Dra. Ana Martínez',
    company: '',
  },
];