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
    id: 1755779068354,
    slug: 'retiro-atencion-plena-cerca-de-mi',
    title: 'Retiro de atención plena cerca de mí: Opciones locales y regionales para tu bienestar.',
    excerpt: 'Discover the best mindfulness retreats near you! Explore options in Los Angeles and beyond, from urban meditations to immersive nature retreats.',
    date: '2025-08-21',
    updatedAt: '2025-08-21',
    author: 'Jessica Muñoz',
    ogImage: 'https://bookretreats.com/cdn-cgi/image/width=1200,quality=65,f=auto,sharpen=1,fit=cover,gravity=auto/assets/photo/retreat/0m/29k/29688/p_1759051/1000_1706042753.jpg',
    content: `<div style="color: #ffffff; font-family: Arial, sans-serif; line-height: 1.6;"> <style> p, .wp-block-paragraph, ul.wp-block-list, li { color: #ffffff !important; font-size: 20px !important; } a { color: #00c2ff !important; } </style> <h1 id="h-retiro-de-atencion-plena-cerca-de-mi" class="wp-block-heading" style="border-bottom: 2px solid #00c2ff; padding-bottom: 5px;">Retiro de atención plena cerca de mí: Descubre las opciones locales y regionales</h1> <br><br> <p class="estimated-reading-time" style="color: #ffffff; font-size: 20px !important;">Estimated reading time: 6 minutes</p> <br><br> <h2 id="h-key-takeaways" class="wp-block-heading" style="border-bottom: 2px solid #00c2ff; padding-bottom: 5px;"><strong>Key Takeaways</strong></h2> <br><br> <ul class="wp-block-list"> <li>Existen múltiples <mark style="background-color: #ffd966;"><strong>opciones de retiro de atención plena</strong></mark> dentro y alrededor de Los Ángeles.</li> <br><br> <li>Los retiros varían desde experiencias urbanas hasta inmersiones profundas en la naturaleza.</li> <br><br> <li>Centros como <a href="https://www.discoverlosangeles.com/">Kadampa Meditation Center</a> y <a href="https://www.mindfullivingla.org/">InsightLA</a> ofrecen programas accesibles y gratificantes.</li> <br><br> <li>Los retiros residenciales, aunque más caros, proporcionan una experiencia más inmersiva.</li> <br><br> <li>Consulta directamente el centro para obtener información sobre requisitos y tarifas.</li> </ul> <br><br> <h2 style="color: #ffffff; border-bottom: 2px solid #00c2ff; padding-bottom: 5px;">Table of contents</h2> <br><br> <ul> <li><a href="#h-retiro-de-atencion-plena-cerca-de-mi" data-level="1">Retiro de atención plena cerca de mí</a></li> <br><br> <li><a href="#h-key-takeaways" data-level="2">Key Takeaways</a></li> <br><br> <li><a href="#h-opciones-locales-en-los-angeles" data-level="2">Opciones locales en Los Ángeles</a></li> <br><br> <li><a href="#h-centros-de-retiro-regionales" data-level="2">Centros de retiro regionales y residenciales</a></li> <br><br> <li><a href="#h-formatos-de-retiro" data-level="2">Formatos de retiro</a></li> <br><br> <li><a href="#h-notas-adicionales" data-level="2">Notas adicionales</a></li> <br><br> <li><a href="#h-frequently-asked-questions" data-level="2">Frequently Asked Questions</a></li> </ul> <br><br> <h2 id="h-opciones-locales-en-los-angeles" class="wp-block-heading" style="border-bottom: 2px solid #00c2ff; padding-bottom: 5px;">Opciones locales en Los Ángeles</h2> <br><br> <p>¿Estás buscando un <a href="https://www.discoverlosangeles.com/">retiro de atención plena cerca de ti</a>? A continuación, desvelamos claves sobre estas alternativas, las cuales podrían ayudarte a encontrar algo que se ajuste a tus expectativas y necesidades.</p> <br><br> <ul class="wp-block-list"> <li><strong>Kadampa Meditation Center Hollywood</strong> (4953 Franklin Ave): Este centro ofrece cortas meditaciones al mediodía, retiros especiales, meditaciones grupales semanales y jornadas de puertas abiertas mensuales. Es ideal si buscas sesiones de meditación estructuradas sin salir de la ciudad <a href="https://www.discoverlosangeles.com/">(source)</a>.</li> <br><br> <li><strong>Peace Awareness Labyrinth & Gardens</strong> (3500 W Adams Blvd): Este oasis espiritual brinda experiencias como paseos por el laberinto, meditaciones en exuberantes jardines y charlas especiales o baños de sonido. Las visitas programadas ofrecen una atmósfera de retiro en un entorno urbano <a href="https://www.discoverlosangeles.com/">(source)</a>.</li> <br><br> <li><strong>Shambhala Meditation Center of Los Angeles</strong>: Proporciona grupos regulares de meditación, programas de atención plena y retiros periódicos en tres ubicaciones en el área de LA. Se enfatiza en construir conciencia e intuición a través de la práctica estructurada <a href="https://www.mindfullivingla.org/">(source)</a>.</li> <br><br> <li><strong>InsightLA</strong>: Se enfoca en la atención plena y la compasión. Ofrece clases, grupos de meditación y retiros residenciales ocasionales para una inmersión más profunda <a href="https://www.mindfullivingla.org/">(source)</a>.</li> <br><br> <li><strong>UCLA Mindful Awareness Research Center (MARC)</strong>: Conocido por sus programas educativos e investigación, MARC también ofrece clases de atención plena, talleres y retiros de un día, apoyando el bienestar basado en evidencia <a href="https://www.mindfullivingla.org/">(source)</a>.</li> <br><br> <li><strong>Unplug Meditation</strong>: Este estudio ofrece clases guiadas de atención plena y meditación en varios formatos, adecuadas para principiantes o practicantes experimentados que buscan una experiencia de caída más corta <a href="https://www.mindfullivingla.org/">(source)</a>.</li> </ul> <br><br> <h2 id="h-centros-de-retiro-regionales" class="wp-block-heading" style="border-bottom: 2px solid #00c2ff; padding-bottom: 5px;">Centros de retiro regionales y residenciales</h2> <br><br> <ul class="wp-block-list"> <li><strong>Spirit Rock (Northern California)</strong>: Un importante centro de retiro que ofrece retiros de atención plena en silencio de duración variable, típicamente con un enfoque en la Meditación de Visión Profunda (Vipassana) <a href="https://www.mindfullivingla.org/">(source)</a>.</li> <br><br> <li><strong>Art of Living Retreat Center (Boone, North Carolina)</strong>: Aunque no es local, este centro reconocido a nivel nacional ofrece retiros "Stepping Into Silence" que combinan mindfulness guiada, yoga y terapias ayurvédicas <a href="https://artoflivingretreatcenter.org/">(source)</a>.</li> </ul> <br><br> <h2 id="h-formatos-de-retiro" class="wp-block-heading" style="border-bottom: 2px solid #00c2ff; padding-bottom: 5px;">Formatos de retiro</h2> <br><br> <p>Los retiros de atención plena varían considerablemente. Algunos son breves sesiones de meditación en la ciudad, mientras que otros son experiencias de inmersión profunda en silencio en entornos naturales. Para encontrar y reservar un retiro, plataformas como <a href="https://bookretreats.com/">BookRetreats</a> proporcionan una lista seleccionada de retiros de meditación y atención plena disponibles en Los Ángeles, incluyendo detalles sobre fechas próximas, duración y temas específicos <a href="https://bookretreats.com/">(source)</a>.</p> <br><br> <h2 id="h-notas-adicionales" class="wp-block-heading" style="border-bottom: 2px solid #00c2ff; padding-bottom: 5px;">Notas adicionales</h2> <br><br> <p>La mayoría de los centros urbanos ofrecen programas de un día asequibles o basados en donaciones, mientras que los retiros residenciales son típicamente más costosos y requieren reserva con anticipación <a href="https://www.discoverlosangeles.com/">(source)</a>. También es importante mencionar que muchos centros acomodan a principiantes y algunos ofrecen opciones de transmisión en línea para la participación remota <a href="https://www.mindfullivingla.org/">(source)</a>.</p> <br><br> <h2 id="h-frequently-asked-questions" class="wp-block-heading" style="border-bottom: 2px solid #00c2ff; padding-bottom: 5px;">Frequently Asked Questions</h2> <br><br> <h3 class="wp-block-heading" style="border-bottom: 2px solid #00c2ff; padding-bottom: 5px;">¿Cuánto cuesta un retiro de atención plena?</h3> <p>Los costos varían, pero generalmente, los retiros urbanos son más accesibles con opciones basadas en donaciones, mientras que los retiros residenciales suelen costar más y requieren una reserva anticipada.</p> <br><br> <h3 class="wp-block-heading" style="border-bottom: 2px solid #00c2ff; padding-bottom: 5px;">¿Los retiros son adecuados para principiantes?</h3> <p>Sí, muchos centros reciben a principiantes y algunos ofrecen introducciones antes de los retiros para ayudar a las personas nuevas a integrarse en la práctica.</p> <br><br> <h3 class="wp-block-heading" style="border-bottom: 2px solid #00c2ff; padding-bottom: 5px;">¿Qué llevar a un retiro?</h3> <p>Recomendamos llevar ropa cómoda, un cuaderno para tomar notas, y cualquier artículo personal que necesites para tu comodidad durante la estancia.</p> <br><br> </div>`,
  },
  {
    id: 1755773048689,
    slug: 'musica-atencion-plena-para-ninos',
    title: 'La música de atención plena para niños: cómo mejorar su bienestar emocional y cognitivo',
    excerpt: 'Discover the benefits of mindfulness music for kids! Learn how it boosts emotional well-being, focus, sleep, and academic success with simple practices.',
    date: '2025-08-21',
    updatedAt: '2025-08-21',
    author: 'Jessica Muñoz',
    ogImage: 'https://i.ytimg.com/vi/XgxRHa26JLo/maxresdefault.jpg',
    content: ``,
  },
  {
    id: 1755772130965,
    slug: 'musica-atencion-plena-para-ninos',
    title: 'La música de atención plena para niños: cómo mejorar su bienestar emocional y cognitivo',
    excerpt: 'Discover the benefits of mindfulness music for kids! Learn how it boosts emotional well-being, focus, sleep, and academic success with simple practices.',
    date: '2025-08-21',
    updatedAt: '2025-08-21',
    author: 'Jessica Muñoz',
    ogImage: 'https://i.ytimg.com/vi/XgxRHa26JLo/maxresdefault.jpg',
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