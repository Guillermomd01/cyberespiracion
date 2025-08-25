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
    id: 1756140718284,
    slug: 'mindfulness-mark-williams-vida-trabajo',
    title: 'Descubriendo el Mindfulness con Mark Williams: Su Vida, Trabajo e Impacto en la Psicología Moderna',
    excerpt: 'Descubre cómo Mark Williams revolucionó el mindfulness con la MBCT, influenciando la psicología moderna. Aprende sobre su vida, sus obras y su legado.',
    date: '2025-08-25',
    updatedAt: '2025-08-25',
    author: 'Jessica Muñoz',
    ogImage: 'https://m.media-amazon.com/images/I/51S-BrGgp5L._UF1000,1000_QL80_.jpg',
    content: `<h1 style="border-bottom: 2px solid #00c2ff; padding-bottom: 5px;">Descubriendo la Atención Plena: Una Mirada a la Vida y Trabajo de Mark Williams</h1>
<br><br>
<p style="font-size: 20px;">Estimated reading time: 6 minutes</p>
<br><br>
<h2 style="border-bottom: 2px solid #00c2ff; padding-bottom: 5px;"><strong>Key Takeaways</strong></h2>
<br><br>
<ul>
  <li><strong>Mark Williams</strong> es cofundador de la Terapia Cognitiva basada en la Atención Plena (MBCT) que ayuda a prevenir la depresión.</li>
  <br><br>
  <li>Ha fundado importantes centros de atención plena en las universidades de Oxford y Bangor.</li>
  <br><br>
  <li>Es coautor de libros fundamentales que hacen accesible la atención plena a todos. Ver más en <a href="/blog/libros-mark-williams" style="color: #00c2ff;">"libros de Mark Williams"</a>.</li>
  <br><br>
  <li>Su enfoque promueve la autocomprensión y la aceptación a través de la práctica de la atención plena.</li>
  <br><br>
  <li>El trabajo de Williams ha influido en la psicología moderna y la autoayuda, beneficiando a millones.</li>
</ul>
<br><br>
<h2 style="border-bottom: 2px solid #00c2ff; padding-bottom: 5px;">Table of contents</h2>
<br><br>
<ul>
  <li><a href="#quien-es-mark-williams" style="color: #00c2ff;">¿Quién es Mark Williams?</a></li>
  <br><br>
  <li><a href="#la-mbct" style="color: #00c2ff;">La MBCT: Terapia Cognitiva basada en la Atención Plena</a></li>
  <br><br>
  <li><a href="#fundador-de-centros" style="color: #00c2ff;">Fundador de Centros de Atención Plena</a></li>
  <br><br>
  <li><a href="#libros-semillales" style="color: #00c2ff;">Libros Seminales sobre Atención Plena</a></li>
  <br><br>
  <li><a href="#enfoque-practico" style="color: #00c2ff;">Enfoque Práctico de la Atención Plena</a></li>
  <br><br>
  <li><a href="#impacto-y-reconocimiento" style="color: #00c2ff;">Impacto y Reconocimiento</a></li>
  <br><br>
  <li><a href="#exploraciones-recientes" style="color: #00c2ff;">Exploraciones Recientes de Williams</a></li>
  <br><br>
  <li><a href="#frequently-asked-questions" style="color: #00c2ff;">Preguntas Frecuentes</a></li>
</ul>
<br><br>
<p style="font-size: 20px;">Es probable que hayas oído hablar de la atención plena (o mindfulness en inglés) <a href="/blog/mindfulness-importancia" style="color: #00c2ff;">(fuente)</a>. En el mundo estresado y agitado de hoy, esta práctica ofrece un espacio de calma y entendimiento. Pero, ¿has oído hablar de Mark Williams? Este hombre es un pilar fundamental en el desarrollo moderno de la atención plena y sus contribuciones a la psicología y a la terapia son impresionantes. Vamos a explorar su vida, su trabajo y cómo sus descubrimientos pueden beneficiarnos a todos.</p>
<br><br>
<h2 id="quien-es-mark-williams" style="border-bottom: 2px solid #00c2ff; padding-bottom: 5px;">¿Quién es Mark Williams?</h2>
<br><br>
<p style="font-size: 20px;">Primero, es importante entender quién es Mark Williams. Para muchos, él es mejor conocido por ser el cofundador de la <a href="/blog/mbct-definicion" style="color: #00c2ff;">Terapia Cognitiva basada en la Atención Plena (MBCT)</a> y por su trabajo en la <a href="/blog/tratamiento-depresion" style="color: #00c2ff;">prevención y el tratamiento de la depresión</a> (fuente). Como ex Profesor de Psicología Clínica de la Universidad de Oxford, Williams fue instrumental en la fundación de centros influyentes de atención plena tanto en las universidades de Oxford como Bangor <a href="/blog/centros-atencion-plena" style="color: #00c2ff;">(fuente)</a>.</p>
<br><br>
<h2 id="la-mbct" style="border-bottom: 2px solid #00c2ff; padding-bottom: 5px;">La MBCT: Terapia Cognitiva basada en la Atención Plena</h2>
<br><br>
<p style="font-size: 20px;">La MBCT es una de las contribuciones más notables de Williams. Desarrollada en colaboración con colegas, esta intervención basada en evidencia está diseñada para evitar recaídas en la depresión integrando los principios de la terapia cognitiva con prácticas de atención plena <a href="/blog/tratamiento-depresion" style="color: #00c2ff;">(fuente)</a>.</p>
<br><br>
<h2 id="fundador-de-centros" style="border-bottom: 2px solid #00c2ff; padding-bottom: 5px;">Fundador de Centros de Atención Plena</h2>
<br><br>
<p style="font-size: 20px;">Además del desarrollo de la MBCT, Williams ha jugado un papel crucial en la fundación de los centros de atención plena. Fue él quien estableció el "Centro de Investigación y Práctica de la Atención Plena" en la Universidad de Bangor, y luego fundó el "Centro de Atención Plena de Oxford". Estas instituciones han desempeñado un papel central en la investigación, enseñanza y difusión de las prácticas de atención plena <a href="/blog/centros-atencion-plena" style="color: #00c2ff;">(fuente)</a>.</p>
<br><br>
<h2 id="libros-semillales" style="border-bottom: 2px solid #00c2ff; padding-bottom: 5px;">Libros Seminales sobre Atención Plena</h2>
<br><br>
<p style="font-size: 20px;">Williams también es coautor de varios <strong>libros seminales</strong> sobre atención plena, incluyendo "El Camino Atento a través de la Depresión" y "Atención Plena: Un Plan de Ocho Semanas para Encontrar la Paz en un Mundo Frantic" <a href="/blog/libros-mark-williams" style="color: #00c2ff;">(fuente)</a>. Estos libros presentan de forma accesible los principios y la práctica de la atención plena.</p>
<br><br>
<h2 id="enfoque-practico" style="border-bottom: 2px solid #00c2ff; padding-bottom: 5px;">Enfoque Práctico de la Atención Plena</h2>
<br><br>
<p style="font-size: 20px;">En su definición de atención plena, Williams nos propone prestar atención a los pensamientos, sentimientos y sensaciones corporales del momento presente sin juicio, fomentando la autocomprensión y la aceptación compasiva. Su enfoque de ocho semanas incluye ejercicios diseñados para desarrollar la conciencia corporal, manejar emociones difíciles y liberar hábitos que ayudan a romper los patrones de pensamiento negativos. Subraya también el papel dual de la amabilidad y la paciencia al reaccionar a nuestra mente errante, cualidades que se han demostrado para mejorar la <a href="/blog/ansiedad-depresion" style="color: #00c2ff;">ansiedad y la depresión</a> <a href="/blog/ansiedad-depresion" style="color: #00c2ff;">(fuentes)</a>.</p>
<br><br>
<h2 id="impacto-y-reconocimiento" style="border-bottom: 2px solid #00c2ff; padding-bottom: 5px;">Impacto y Reconocimiento</h2>
<br><br>
<p style="font-size: 20px;">El impacto de su trabajo puede verse en la vastedad de su investigación. Williams ha dedicado su vida a centrar sus estudios en el tratamiento y prevención de la depresión y comportamiento suicida, incorporando la atención plena para mejorar los resultados de salud mental. Ha colaborado con Aaron Beck, fundador de la terapia cognitiva, incorporando técnicas terapéuticas cognitivas en intervenciones basadas en atención plena <a href="/blog/tratamiento-depresion" style="color: #00c2ff;">(fuente)</a>. Su labor es reconocida tanto en la psicología académica como en los recursos prácticos de autoayuda <a href="/blog/libros-mark-williams" style="color: #00c2ff;">(fuentes)</a>.</p>
<br><br>
<h2 id="exploraciones-recientes" style="border-bottom: 2px solid #00c2ff; padding-bottom: 5px;">Exploraciones Recientes de Williams</h2>
<br><br>
<p style="font-size: 20px;">En su trabajo más reciente, Williams continúa explorando cómo profundizar en la atención plena a través de la atención directa a los tonos de sentimiento (vedanā), que aumenta aún más el impacto de las prácticas de atención plena en la vida cotidiana <a href="/blog/mindfulness-importancia" style="color: #00c2ff;">(fuente)</a>.</p>
<br><br>
<h2 style="border-bottom: 2px solid #00c2ff; padding-bottom: 5px;">Resumen de Contribuciones de Mark Williams</h2>
<br><br>
<table style="font-size: 20px;">
  <tr>
    <th>Contribución</th>
    <th>Descripción</th>
    <th>Obras y colaboradores clave</th>
  </tr>
  <tr>
    <td>Terapia Cognitiva basada en la Atención Plena (MBCT)</td>
    <td>Integra atención plena y terapia cognitiva para prevenir recaídas en la depresión</td>
    <td>Colaboradores: Teasdale, Segal, Kabat-Zinn</td>
  </tr>
  <tr>
    <td>Centros de Atención Plena</td>
    <td>Fundó centros de investigación y enseñanza en Oxford y Bangor</td>
    <td>Obra clave: Centro de Atención Plena de Oxford</td>
  </tr>
  <tr>
    <td>Libros</td>
    <td>Guías prácticas e investigación fundamental</td>
    <td>Colaborador: Penman; Libros: "Atención Plena", "Camino Atento a través de la Depresión" <a href="/blog/libros-mark-williams" style="color: #00c2ff;">(fuente)</a></td>
  </tr>
  <tr>
    <td>Profundizando en la Atención Plena</td>
    <td>Enfoque en sostener la atención plena y la conciencia del tono de sentimientos</td>
    <td>Obra próxima: "Atención Plena Profunda" (2023)</td>
  </tr>
</table>
<br><br>
<p style="font-size: 20px;">En resumen, Mark Williams es considerado uno de los arquitectos centrales de la atención plena moderna en la psicología, a través de sus programas de tratamiento pioneros y su labor para hacer la atención plena accesible al público.</p>
<br><br>
<p style="font-size: 20px;">Te invitamos a explorar más sus obras y aplicar las enseñanzas de Williams en tu propia vida. Quién sabe, tal vez descubras el poder calmante y transformador de la atención plena y veas por ti mismo por qué es un pilar en el mundo de la psicología hoy en día.</p>
<br><br>
<h2 style="border-bottom: 2px solid #00c2ff; padding-bottom: 5px;">Preguntas Frecuentes</h2>
<br><br>
<ul>
  <li><a href="#que-es-la-atencion-plena" style="color: #00c2ff;">¿Qué es la atención plena?</a></li>
  <br><br>
  <li><a href="#como-puede-ayudarme" style="color: #00c2ff;">¿Cómo puede ayudarme la atención plena en la vida diaria?</a></li>
  <br><br>
  <li><a href="#puedo-aprender-la-atencion-plena" style="color: #00c2ff;">¿Puedo aprender la atención plena por mi cuenta?</a></li>
</ul>`,
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

      <h2>Conclusión</h2>
      <p>Incorpora 5 minutos de respiración consciente en tu rutina diaria y prueba estos beneficios por ti mismo. <strong>¿Listo para empezar?</strong> <a href="/programas-respiracion-consciente/renacimiento-celular">Únete a nuestro curso de Renacimiento Celular</a> y explora más ejercicios.</p>`,
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
<p>Si quieres una práctica guiada paso a paso, descubre nuestro <a href="/programas-respiracion-consciente/co-creacion">programa de Co-Creación</a> de 90 días.</p>`
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
<p>Incorpora estas pausas de respiración en tu rutina laboral y nota cómo mejora tu productividad y tu bienestar. <a href="/programas-respiracion-consciente">Descubre todo en lo que Cyberespiracion te va a ayudar</a></p>`
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