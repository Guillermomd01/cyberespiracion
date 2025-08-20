import { BlogPost, Resource } from '../types';

export interface BlogPost {
  id:number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  updatedAt: string;          // ISO string, p.ej. “2025-05-28”
  author: string;         // p.ej. “Jessica Muñoz”
  ogImage: string;        // URL absoluta de la imagen destacada
  content: string;        // tu HTML o MDX renderizado
}

export const blogPosts: BlogPost[] = [
  {
    id: 1755684215375,
    slug: 'cinco-adiestramientos-atencion-plena',
    title: 'Los Cinco Adiestramientos de la Atención Plena: Guía Ética y Práctica para una Vida Consciente',
    excerpt: 'Discover the Five Mindfulness Trainings, ethical commitments for personal growth, compassion, and mindfulness. Learn how to apply them in modern life.',
    date: '2025-08-20',
    updatedAt: '2025-08-20',
    author: 'Jessica Muñoz',
    ogImage: 'https://m.media-amazon.com/images/I/61YsgSZMziL._UF1000,1000_QL80_.jpg',
    content: ``,
  },
  {
    id: 1755683157103,
    slug: 'cinco-entrenamientos-atencion-plena',
    title: 'Los Cinco Entrenamientos de Atención Plena: Una Guía para Vivir con Ética y Consciencia',
    excerpt: 'Discover the Five Mindfulness Trainings, ethical principles rooted in Buddhism, to cultivate compassion, happiness, and mindful living in daily life.',
    date: '2025-08-20',
    updatedAt: '2025-08-20',
    author: 'Jessica Muñoz',
    ogImage: 'https://m.media-amazon.com/images/I/61YsgSZMziL._UF1000,1000_QL80_.jpg',
    content: ``,
  },
  {
    id: 1755682136834,
    slug: 'cinco-adiestramientos-atencion-plena',
    title: 'Los Cinco Adiestramientos de la Atención Plena: Guía Ética para la Transformación Personal y el Bienestar',
    excerpt: 'Discover the transformative power of the Five Mindfulness Trainings. Learn how these ethical commitments promote compassion, peace, and personal growth in daily life.',
    date: '2025-08-20',
    updatedAt: '2025-08-20',
    author: 'Jessica Muñoz',
    ogImage: 'https://m.media-amazon.com/images/I/61YsgSZMziL._UF1000,1000_QL80_.jpg',
    content: ``,
  },
  {
    id: 1755645393079,
    slug: 'terapia-grupal-mindful-consciencia',
    title: 'Explorando los Grupos de Terapia Consciente: Beneficios, Métodos y Accesibilidad',
    excerpt: 'Descubre cómo los grupos de terapia consciente combinan mindfulness y psicología para tratar ansiedad, depresión y más. ¿Considerarías unirte? Lee más aquí.',
    date: '2025-08-19',
    updatedAt: '2025-08-19',
    author: 'Jessica Muñoz',
    ogImage: 'https://media.licdn.com/dms/image/v2/D560BAQHOyAALNFAICg/company-logo_200_200/company-logo_200_200/0/1696290525425/mindful_therapy_group_logo?e=2147483647&v=beta&t=cvbnTb3UfeE1a1KvsdhYO75qUxNtvGkriRsrZKQT-0o',
    content: ``,
  },
  {
    id: 1755644397984,
    slug: 'grupo-terapia-mindful-innovador',
    title: 'El innovador enfoque del Mindful Therapy Group: apoyo administrativo y crecimiento para terapeutas',
    excerpt: 'Discover how Mindful Therapy Group empowers mental health providers with innovative support while connecting clients to therapy rooted in mindfulness practices.',
    date: '2025-08-19',
    updatedAt: '2025-08-19',
    author: 'Jessica Muñoz',
    ogImage: 'https://media.licdn.com/dms/image/v2/D560BAQHOyAALNFAICg/company-logo_200_200/company-logo_200_200/0/1696290525425/mindful_therapy_group_logo?e=2147483647&v=beta&t=cvbnTb3UfeE1a1KvsdhYO75qUxNtvGkriRsrZKQT-0o',
    content: ``,
  },
  {
    id: 1,
    slug: 'beneficios-respiracion-consciente',
    title: 'Los 5 beneficios principales de la respiración consciente',
    excerpt: 'Descubre cómo la práctica regular de la respiración consciente puede transformar tu salud física y mental.',
    date: '2025-04-15',
    author: 'Jessica Muñoz',
    ogImage: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=600',
    content: `
      <h2>Introducción</h2>
      <p>La respiración consciente es una práctica milenaria que nos conecta con nuestro cuerpo y nuestra mente. Al dedicar unos minutos cada día a respirar de forma atenta, podemos experimentar cambios profundos en nuestro bienestar físico y emocional.</p>

      <h2>1. Reduce el estrés y la ansiedad</h2>
      <p>La respiración profunda activa el sistema nervioso parasimpático, responsable de la relajación. Al inhalar contando hasta 4 y exhalar contando hasta 6, disminuye la producción de cortisol, la “hormona del estrés”.</p>

      <h2>2. Mejora la concentración</h2>
      <p>Al enfocar nuestra atención en el ritmo de la respiración, entrenamos la mente para permanecer en el presente. Esto refuerza la capacidad de concentración y reduce la tendencia a la distracción.</p>

      <h2>3. Aumenta la energía</h2>
      <p>Una buena oxigenación mediante respiraciones profundas aporta más energía celular. Notarás menos fatiga mental y física durante el día.</p>

      <h2>4. Favorece el descanso</h2>
      <p>Practicar respiración consciente antes de dormir ayuda a calmar la mente y a preparar el cuerpo para un sueño reparador, reduciendo el insomnio.</p>

      <h2>5. Regula la presión arterial</h2>
      <p>Estudios demuestran que técnicas de respiración lenta y profunda pueden ayudar a bajar la tensión arterial, protegiendo la salud cardiovascular.</p>

      <h2>6. Fortalece el sistema inmunológico</h2>
      <p>Al reducir el estrés crónico, nuestras defensas se mantienen más activas. Además, una buena oxigenación favorece la circulación de glóbulos blancos.</p>

      <h2>7. Mejora la digestión</h2>
      <p>El diafragma masajea suavemente los órganos internos durante la respiración, estimulando el tránsito intestinal y la digestión.</p>

      <h2>Conclusión y llamada a la acción</h2>
      <p>Incorpora 5 minutos de respiración consciente en tu rutina diaria y prueba estos beneficios por ti mismo. <strong>¿Listo para empezar?</strong> <a href="/programas/renacimiento-celular">Únete a nuestro curso de Renacimiento Celular</a> y explora más ejercicios.</p>`,
  },
  {
    id: 2,
    slug: 'tecnicas-respiracion-estres',
    title: 'Técnicas de respiración para reducir el estrés',
    excerpt: 'Aprende ejercicios prácticos de respiración que puedes aplicar en momentos de estrés y ansiedad.',
    date: '2025-03-02',
    author: 'Jessica Muñoz',
    ogImage: 'https://images.pexels.com/photos/3759658/pexels-photo-3759658.jpeg?auto=compress&cs=tinysrgb&w=600',
    content: `<h2>Introducción</h2>
<p>Cuando el estrés aprieta, una técnica de respiración rápida y sencilla puede marcar la diferencia. Aquí tienes 4 métodos efectivos para aliviar la tensión en cualquier momento.</p>

<h2>1. Respiración 4-7-8</h2>
<p>• Inhala por la nariz contando hasta 4.<br>
• Retén el aire contando hasta 7.<br>
• Exhala por la boca contando hasta 8.<br>
Repite 4 ciclos. Esta técnica activa el sistema de relajación y baja inmediatamente el ritmo cardíaco.</p>

<h2>2. Respiración diafragmática</h2>
<p>• Siéntate o acuéstate con una mano en el pecho y otra en el abdomen.<br>
• Al inhalar, nota cómo se eleva el abdomen sin mover el pecho.<br>
• Exhala lentamente por la boca.<br>
Practica 10 respiraciones para masajear tus órganos y calmar tu sistema nervioso.</p>

<h2>3. Respiración alterna (Nadi Shodhana)</h2>
<p>• Tapa la fosa derecha con el pulgar e inhala por la izquierda.<br>
• Cierra la izquierda con el anular, abre la derecha y exhala.<br>
• Inhala por la derecha, cambia y exhala por la izquierda.<br>
Haz 5 ciclos completos para equilibrar ambos hemisferios cerebrales.</p>

<h2>4. Respiración de caja (Box breathing)</h2>
<p>• Inhala contando 4.<br>
• Mantén contando 4.<br>
• Exhala contando 4.<br>
• Mantén los pulmones vacíos contando 4.<br>
Repite 4 veces. Excelente para recuperar el control en situaciones de alta presión.</p>

<h2>Consejo práctico</h2>
<p>Lleva estas técnicas en tu móvil o escríbelas en un post-it en tu escritorio. Cada vez que notes tensión, dedica un minuto a respirar conscientemente.</p>

<h2>Invitación a profundizar</h2>
<p>Si quieres una práctica guiada paso a paso, descubre nuestro <a href="/programas/co-creacion">programa de Co-Creación</a> de 90 días.</p>`
,
  },
  {
    id: 3,
    slug: 'respiracion-consciente-trabajo',
    title: 'Respiración consciente en el trabajo',
    excerpt: 'Cómo integrar prácticas de respiración en tu rutina laboral para mejorar el rendimiento y bienestar.',
    date: '2025-02-18',
    author: 'Jessica Muñoz',
    ogImage: 'https://images.pexels.com/photos/4098277/pexels-photo-4098277.jpeg?auto=compress&cs=tinysrgb&w=600',
    content: `<h2>Introducción</h2>
<p>El entorno laboral puede generar estrés y fatiga. Integrar pausas de respiración consciente en tu jornada mejora tu rendimiento y tu bienestar general.</p>

<h2>1. Pausa de 1 minuto</h2>
<p>• Cada hora, detente 60 segundos.<br>
• Cierra los ojos y respira profundo tres veces.<br>
• Siente la inhalación expandir tu caja torácica y la exhalación liberar tensión.</p>

<h2>2. Respiración con conteo inverso</h2>
<p>• Inhala contando hasta 5.<br>
• Exhala contando desde 5 hasta 1.<br>
• Concéntrate únicamente en el conteo.<br>
Repite 5 ciclos para resetear tu enfoque.</p>

<h2>3. Técnica del “café”</h2>
<p>• Imagina que inhalas el aroma de tu café favorito.<br>
• Inhala profundamente por la nariz, mantén 2 segundos.<br>
• Exhala lentamente por la boca como si soplaras la superficie de tu taza.<br>
Realiza 3 veces antes de comenzar una tarea compleja.</p>

<h2>4. Respiración para llamada de estrés</h2>
<p>Antes de una reunión difícil:<br>
• Inhala contando 4.<br>
• Exhala contando 6.<br>
• Repite 6 veces manteniendo la mirada baja.<br>
Te ayuda a calmar la voz y a proyectar confianza.</p>

<h2>Beneficios inmediatos</h2>
<ul>
  <li>Mayor claridad mental.</li>
  <li>Reducción de tensión muscular.</li>
  <li>Mejor comunicación y control emocional.</li>
</ul>

<h2>Conclusión</h2>
<p>Incorpora estas pausas de respiración en tu rutina laboral y nota cómo mejora tu productividad y tu bienestar. <a href="/blog/beneficios-respiracion">Lee también los beneficios generales</a> para complementar tu práctica.</p>`
,
  },
];

export const resources: Resource[] = [
  {
    id: 1,
    title: 'Guía básica de respiración consciente',
    type: 'ebook',
    description: 'Una introducción completa a las técnicas fundamentales de respiración consciente para principiantes.',
    link: '/recursos/guia-respiracion',
    image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 2,
    title: 'Meditación guiada con respiración consciente',
    type: 'video',
    description: 'Sesión práctica de 10 minutos combinando meditación y técnicas de respiración.',
    link: 'https://youtu.be/g8fXHRtHbuA?si=670hM6lodVaLOPUO',
    image: 'https://images.pexels.com/photos/3759658/pexels-photo-3759658.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 3,
    title: 'Webinar: El poder transformador de la respiración',
    type: 'webinar',
    description: 'Descubre cómo la respiración consciente puede cambiar tu vida a nivel físico, mental y emocional.',
    link: '/recursos/webinar-transformacion',
    image: 'https://images.pexels.com/photos/4098277/pexels-photo-4098277.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];