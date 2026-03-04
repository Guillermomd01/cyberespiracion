import { useEffect, useState } from "react";

// ─── Font injection ───────────────────────────────────────────────────────────
const fontLink = document.createElement("link");
fontLink.rel = "stylesheet";
fontLink.href =
  "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500;600&display=swap";
if (!document.querySelector('link[href*="Cormorant+Garamond"]')) {
  document.head.appendChild(fontLink);
}

// ─── Constants ────────────────────────────────────────────────────────────────
const STRIPE_LINK = "https://buy.stripe.com/7sY6oG9Ar68x5IY7M9aR20b";

const nextDate = {
  day: "29",
  month: "Marzo",
  year: "2026",
  weekday: "Domingo",
  time: "10:00 – 18:00 h",
};

// ─── Brand colors (Cyberespiración palette) ───────────────────────────────────
const colors = {
  purpleDark: "#4A0080",
  purple: "#7B2CBE",
  purpleMid: "#9B3DE8",
  purpleLight: "#C77DFF",
  magenta: "#E91E8C",
  magentaLight: "#FF4DB8",
  white: "#FFFFFF",
  grayLight: "#F5F3F8",
  grayMid: "#E8E0F0",
  textDark: "#1A0030",
  textMid: "#4A3060",
  textLight: "#8B6BA8",
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const benefits = [
  {
    icon: "🧠",
    title: "Claridad mental",
    desc: "Silencia el ruido interior y aprende a ver con nitidez lo que realmente importa en tu vida.",
  },
  {
    icon: "🌊",
    title: "Liberar emociones",
    desc: "La respiración consciente te permite soltar lo que llevas años cargando sin que tu mente lo controle.",
  },
  {
    icon: "🛠️",
    title: "Gestión emocional práctica",
    desc: "No solo teoría. Te llevas herramientas concretas y aplicables desde el primer día.",
  },
  {
    icon: "⚡",
    title: "Más energía",
    desc: "Un cuerpo que respira bien es un cuerpo que vive bien. Sentirás la diferencia desde la primera sesión.",
  },
  {
    icon: "🔍",
    title: "Por qué no consigues lo que quieres",
    desc: "Haremos consciente lo inconsciente. Descubrirás los patrones que te han frenado sin saberlo.",
  },
  {
    icon: "✨",
    title: "Dejar de buscar más",
    desc: "Al terminar el día, no necesitarás buscar fuera lo que ya está dentro de ti.",
  },
];

const agenda = [
  { hora: "10:00", titulo: "Apertura y bienvenida", tipo: "practica" },
  { hora: "10:30", titulo: "Bloque teórico: el lenguaje del cuerpo", tipo: "teoria" },
  { hora: "12:00", titulo: "Sesión de respiración consciente guiada", tipo: "practica" },
  { hora: "13:30", titulo: "Snack & pausa libre", tipo: "pausa" },
  { hora: "14:15", titulo: "Integración: hacer consciente lo inconsciente", tipo: "teoria" },
  { hora: "15:30", titulo: "Meditación y trabajo práctico en parejas", tipo: "practica" },
  { hora: "17:00", titulo: "Preguntas y respuestas", tipo: "qa" },
  { hora: "17:45", titulo: "Cierre y compromisos personales", tipo: "practica" },
];

const faqs = [
  {
    question: "¿Necesito experiencia previa en meditación o respiración?",
    answer:
      "No. Las jornadas están diseñadas para que cualquier persona, independientemente de su experiencia, pueda participar y obtener resultados reales desde el primer día.",
  },
  {
    question: "¿Qué pasa si es mi primera vez?",
    answer:
      "Si es tu primera jornada con nosotros, tendrás además una sesión individual gratuita con Jessica Muñoz para integrar y profundizar todo lo que hayas vivido ese día.",
  },
  {
    question: "¿Qué tengo que traer?",
    answer:
      "Solo ganas de explorar. Ropa cómoda y disposición para respirar. Nosotros ponemos los snacks y las bebidas durante todo el día.",
  },
  {
    question: "¿Qué diferencia hay con otras jornadas de meditación?",
    answer:
      "En Cyberespiración combinamos ciencia, práctica corporal y autoconocimiento. No vendrás solo a relajarte. Vendrás a entender cómo funciona tu sistema nervioso y a tener herramientas reales de gestión emocional.",
  },
  {
    question: "¿Puedo pedir factura?",
    answer:
      "Sí. Escríbenos después de tu compra con tus datos fiscales y te la enviamos encantados.",
  },
];

// ─── FAQ Accordion ────────────────────────────────────────────────────────────
function FAQAccordion({ items }: { items: typeof faqs }) {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div>
      {items.map((item, i) => (
        <div key={i} style={{ borderBottom: `1px solid ${colors.grayMid}` }}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full text-left py-5 flex items-start justify-between gap-4"
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <span
              className="font-medium leading-snug"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: colors.textDark,
                fontSize: "1rem",
              }}
            >
              {item.question}
            </span>
            <span
              className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold"
              style={{
                background: open === i ? colors.magenta : colors.purple,
                transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                transition: "all 0.3s ease",
                minWidth: "24px",
              }}
            >
              +
            </span>
          </button>
          <div
            style={{
              maxHeight: open === i ? "300px" : "0px",
              overflow: "hidden",
              transition: "max-height 0.4s ease",
            }}
          >
            <p
              className="pb-5 leading-relaxed font-light"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                color: colors.textMid,
                fontSize: "0.95rem",
              }}
            >
              {item.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Agenda Row ───────────────────────────────────────────────────────────────
function AgendaRow({
  hora,
  titulo,
  tipo,
}: {
  hora: string;
  titulo: string;
  tipo: string;
}) {
  const tagStyles: Record<string, { bg: string; color: string; label: string }> = {
    teoria: { bg: "#EDE7F6", color: colors.purple, label: "Teórico" },
    practica: { bg: "#FCE4EC", color: colors.magenta, label: "Práctica" },
    pausa: { bg: "#E8F5E9", color: "#388E3C", label: "Pausa" },
    qa: { bg: "#E3F2FD", color: "#1565C0", label: "Q&A" },
  };
  const tag = tagStyles[tipo];
  return (
    <div
      className="flex items-center gap-3 py-4 rounded-lg px-3 -mx-3 transition-all"
      style={{ borderBottom: `1px solid ${colors.grayMid}` }}
    >
      <span
        className="font-medium tabular-nums flex-shrink-0"
        style={{
          color: colors.magenta,
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "0.85rem",
          minWidth: "42px",
        }}
      >
        {hora}
      </span>
      <span
        className="flex-1 font-light"
        style={{
          color: colors.textDark,
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "0.95rem",
        }}
      >
        {titulo}
      </span>
      <span
        className="text-xs px-2.5 py-1 rounded-full font-medium flex-shrink-0"
        style={{ background: tag.bg, color: tag.color }}
      >
        {tag.label}
      </span>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function JornadasLanding() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="min-h-screen"
      style={{ fontFamily: "'DM Sans', sans-serif", background: colors.white }}
    >
      {/* ── NAV ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(255,255,255,0.96)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          boxShadow: scrolled ? "0 1px 20px rgba(123,44,190,0.12)" : "none",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-8 rounded-full flex-shrink-0"
              style={{
                background: `conic-gradient(${colors.purple}, ${colors.magenta}, ${colors.purple})`,
                opacity: 0.9,
              }}
            />
            <span
              className="font-semibold text-sm sm:text-base"
              style={{ color: scrolled ? colors.purple : colors.white }}
            >
              Cyberespiración
            </span>
          </div>
          <a
            href={STRIPE_LINK}
            className="text-xs sm:text-sm font-semibold px-4 sm:px-6 py-2.5 rounded-full transition-all duration-200 active:scale-95 whitespace-nowrap"
            style={{
              background: `linear-gradient(135deg, ${colors.magenta}, ${colors.purpleMid})`,
              color: colors.white,
              boxShadow: "0 4px 15px rgba(233,30,140,0.3)",
            }}
          >
            Reservar — 25€
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 overflow-hidden pt-20"
        style={{
          background: `linear-gradient(135deg, ${colors.purpleDark} 0%, ${colors.purple} 50%, #C2185B 100%)`,
        }}
      >
        {/* Decorative squares (like the logo) */}
        <div className="absolute top-16 right-0 sm:right-8 opacity-20 pointer-events-none">
          <svg width="200" height="200" viewBox="0 0 200 200">
            {Array.from({ length: 5 }).map((_, row) =>
              Array.from({ length: 5 }).map((_, col) => (
                <rect
                  key={`${row}-${col}`}
                  x={col * 36 + 10}
                  y={row * 36 + 10}
                  width="16"
                  height="16"
                  rx="3"
                  fill="white"
                  opacity={0.3 + (row + col) * 0.07}
                />
              ))
            )}
          </svg>
        </div>

        {/* Glow orbs */}
        <div
          className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 rounded-full pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${colors.magenta}40 0%, transparent 70%)`,
            filter: "blur(60px)",
          }}
        />

        <div className="relative max-w-3xl mx-auto text-center w-full">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8 text-xs font-medium"
            style={{
              background: "rgba(255,255,255,0.15)",
              color: "rgba(255,255,255,0.9)",
              border: "1px solid rgba(255,255,255,0.25)",
              backdropFilter: "blur(10px)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{
                background: colors.magentaLight,
                boxShadow: `0 0 6px ${colors.magentaLight}`,
                animation: "pulse 2s infinite",
              }}
            />
            Último domingo de cada mes · Plazas limitadas
          </div>

          <h1
            className="font-light leading-none text-white mb-6"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(2.8rem, 8vw, 5.5rem)",
              textShadow: "0 4px 30px rgba(0,0,0,0.3)",
            }}
          >
            Jornada de{" "}
            <em className="not-italic" style={{ color: colors.magentaLight }}>
              Respiración
            </em>
            <br />
            Consciente
          </h1>

          <p
            className="font-light text-base sm:text-xl mb-10 mx-auto leading-relaxed"
            style={{ color: "rgba(255,255,255,0.75)", maxWidth: "500px" }}
          >
            Un día completo para hacer consciente lo inconsciente.
            Para soltar, entender y volver a ti.
          </p>

          {/* Date pill */}
          <div
            className="inline-flex items-center gap-4 sm:gap-6 rounded-2xl px-6 sm:px-8 py-4 mb-10"
            style={{
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.2)",
              backdropFilter: "blur(20px)",
            }}
          >
            <div className="text-center">
              <div
                className="font-light leading-none"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "2.8rem",
                  color: colors.magentaLight,
                }}
              >
                {nextDate.day}
              </div>
              <div
                className="text-xs tracking-wider uppercase mt-1"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                {nextDate.month} {nextDate.year}
              </div>
            </div>
            <div
              className="w-px h-10"
              style={{ background: "rgba(255,255,255,0.25)" }}
            />
            <div className="text-left">
              <div className="text-white text-sm font-medium">{nextDate.weekday}</div>
              <div className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.55)" }}>
                {nextDate.time}
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href={STRIPE_LINK}
              className="w-full sm:w-auto inline-flex flex-col items-center justify-center px-8 sm:px-10 py-4 rounded-full font-semibold text-white transition-all duration-200 active:scale-95"
              style={{
                background: `linear-gradient(135deg, ${colors.magenta}, #C2185B)`,
                boxShadow: "0 8px 30px rgba(233,30,140,0.45)",
                fontSize: "1rem",
              }}
            >
              <span>Reservar mi plaza</span>
              <span
                className="text-xs font-normal mt-0.5"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                25€ · Pago seguro con Stripe
              </span>
            </a>
            <a
              href="#que-encontraras"
              className="text-sm font-medium underline underline-offset-4 transition-colors"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              Ver qué me espera →
            </a>
          </div>
        </div>

        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0 60L1440 60L1440 20C1200 60 720 0 0 40L0 60Z"
              fill={colors.white}
            />
          </svg>
        </div>
      </section>

      {/* ── QUÉ ES ── */}
      <section
        className="py-16 sm:py-28 px-4 sm:px-6"
        style={{ background: colors.white }}
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 sm:gap-16 items-center">
          <div>
            <span
              className="text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full inline-block mb-6"
              style={{
                background: "#EDE7F6",
                color: colors.purple,
                letterSpacing: "0.2em",
              }}
            >
              Qué es una jornada
            </span>
            <h2
              className="font-light leading-tight"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 5vw, 3.2rem)",
                color: colors.textDark,
              }}
            >
              Un día de vuelta{" "}
              <em className="not-italic" style={{ color: colors.magenta }}>
                a ti mismo
              </em>
            </h2>
          </div>
          <div className="space-y-5" style={{ color: colors.textMid }}>
            <p className="font-light leading-relaxed">
              La{" "}
              <strong style={{ color: colors.purple, fontWeight: 500 }}>
                respiración consciente
              </strong>{" "}
              no es solo respirar bien. Es la puerta más directa que existe
              para acceder a lo que tu mente consciente no puede ver ni
              controlar.
            </p>
            <p className="font-light leading-relaxed">
              En nuestras jornadas combinamos{" "}
              <strong style={{ color: colors.purple, fontWeight: 500 }}>
                meditación
              </strong>
              ,{" "}
              <strong style={{ color: colors.purple, fontWeight: 500 }}>
                trabajo corporal
              </strong>{" "}
              y{" "}
              <strong style={{ color: colors.purple, fontWeight: 500 }}>
                comprensión emocional
              </strong>{" "}
              para que salgas con algo concreto: claridad, energía y
              herramientas que puedes usar ese mismo domingo.
            </p>
            <p className="font-light leading-relaxed">
              Hacemos consciente lo inconsciente. Y eso lo cambia todo.
            </p>
          </div>
        </div>
      </section>

      {/* ── BENEFICIOS ── */}
      <section
        id="que-encontraras"
        className="py-16 sm:py-24 px-4 sm:px-6"
        style={{ background: colors.grayLight }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <span
              className="text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full inline-block mb-4"
              style={{ background: "#EDE7F6", color: colors.purple, letterSpacing: "0.2em" }}
            >
              Lo que te llevas
            </span>
            <h2
              className="font-light"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 5vw, 3.2rem)",
                color: colors.textDark,
              }}
            >
              Seis transformaciones en un día
            </h2>
            <p
              className="mt-3 font-light max-w-md mx-auto"
              style={{ color: colors.textMid, fontSize: "1rem" }}
            >
              Parte teórica y parte práctica aplicada. No saldrás igual que como entraste.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {benefits.map((b, i) => (
              <div
                key={i}
                className="rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: colors.white,
                  border: `1px solid ${colors.grayMid}`,
                  boxShadow: "0 2px 20px rgba(123,44,190,0.06)",
                }}
              >
                <div className="text-3xl mb-4">{b.icon}</div>
                <h3
                  className="font-semibold mb-2"
                  style={{ color: colors.textDark, fontSize: "1.05rem" }}
                >
                  {b.title}
                </h3>
                <p
                  className="font-light text-sm leading-relaxed"
                  style={{ color: colors.textMid }}
                >
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AGENDA ── */}
      <section
        className="py-16 sm:py-24 px-4 sm:px-6"
        style={{ background: colors.white }}
      >
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 sm:mb-14">
            <span
              className="text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full inline-block mb-4"
              style={{ background: "#FCE4EC", color: colors.magenta, letterSpacing: "0.2em" }}
            >
              El día
            </span>
            <h2
              className="font-light"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 5vw, 3.2rem)",
                color: colors.textDark,
              }}
            >
              Qué haremos juntos
            </h2>
            <p
              className="mt-3 font-light"
              style={{ color: colors.textMid, fontSize: "0.95rem" }}
            >
              Incluye parte teórica, práctica aplicada y sesión de preguntas y respuestas.
            </p>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-2 mb-6 justify-center">
            {[
              { label: "Teórico", bg: "#EDE7F6", color: colors.purple },
              { label: "Práctica", bg: "#FCE4EC", color: colors.magenta },
              { label: "Pausa", bg: "#E8F5E9", color: "#388E3C" },
              { label: "Q&A", bg: "#E3F2FD", color: "#1565C0" },
            ].map((l) => (
              <span
                key={l.label}
                className="text-xs px-3 py-1 rounded-full font-medium"
                style={{ background: l.bg, color: l.color }}
              >
                {l.label}
              </span>
            ))}
          </div>

          <div>
            {agenda.map((item, i) => (
              <AgendaRow key={i} {...item} />
            ))}
          </div>

          {/* Extras */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div
              className="rounded-2xl p-5"
              style={{
                background: "linear-gradient(135deg, #E8F5E9, #F1F8E9)",
                border: "1px solid #C8E6C9",
              }}
            >
              <div className="text-2xl mb-2">🫖</div>
              <p className="text-sm font-light" style={{ color: colors.textDark }}>
                <strong className="font-semibold" style={{ color: "#2E7D32" }}>
                  Snacks y bebida incluidos
                </strong>{" "}
                durante todo el día. Sin coste adicional.
              </p>
            </div>
            <div
              className="rounded-2xl p-5"
              style={{
                background: "linear-gradient(135deg, #FCE4EC, #F8BBD9)",
                border: `1px solid ${colors.magentaLight}40`,
              }}
            >
              <div className="text-2xl mb-2">✦</div>
              <p className="text-sm font-light" style={{ color: colors.textDark }}>
                <strong className="font-semibold" style={{ color: colors.magenta }}>
                  Primera vez
                </strong>{" "}
                con nosotros: sesión individual gratis con Jessica Muñoz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── JESSICA ── */}
      <section
        className="py-16 sm:py-24 px-4 sm:px-6"
        style={{ background: colors.grayLight }}
      >
        <div className="max-w-4xl mx-auto">
          <div
            className="rounded-2xl sm:rounded-3xl p-8 sm:p-14 relative overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${colors.purpleDark} 0%, ${colors.purple} 60%, #C2185B 100%)`,
            }}
          >
            {/* Decorative dots */}
            <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
              <svg width="160" height="160" viewBox="0 0 160 160">
                {Array.from({ length: 4 }).map((_, row) =>
                  Array.from({ length: 4 }).map((_, col) => (
                    <circle
                      key={`${row}-${col}`}
                      cx={col * 36 + 20}
                      cy={row * 36 + 20}
                      r="6"
                      fill="white"
                      opacity={0.4}
                    />
                  ))
                )}
              </svg>
            </div>

            <span
              className="text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full inline-block mb-6"
              style={{
                background: "rgba(255,255,255,0.15)",
                color: "rgba(255,255,255,0.8)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              Si es tu primera vez
            </span>
            <h2
              className="font-light text-white mb-5 leading-tight"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              }}
            >
              Una sesión individual gratuita con{" "}
              <span style={{ color: colors.magentaLight }}>Jessica Muñoz</span>
            </h2>
            <p
              className="font-light leading-relaxed max-w-2xl"
              style={{ color: "rgba(255,255,255,0.75)", fontSize: "1rem" }}
            >
              Si vienes a tu primera jornada, te llevas además una sesión
              privada con Jessica para integrar todo lo que hayas vivido,
              resolver lo que necesites y diseñar un camino personal desde
              lo que descubriste ese día. Sin compromiso adicional. Como
              regalo de bienvenida.
            </p>

            <a
              href={STRIPE_LINK}
              className="inline-flex items-center gap-2 mt-8 px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-200 active:scale-95"
              style={{
                background: colors.white,
                color: colors.magenta,
                boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
              }}
            >
              Quiero aprovechar esta oferta →
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section
        className="py-16 sm:py-24 px-4 sm:px-6"
        style={{ background: colors.white }}
      >
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <span
              className="text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full inline-block mb-4"
              style={{ background: "#EDE7F6", color: colors.purple, letterSpacing: "0.2em" }}
            >
              Preguntas frecuentes
            </span>
            <h2
              className="font-light"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2rem, 5vw, 3rem)",
                color: colors.textDark,
              }}
            >
              Todo lo que necesitas saber
            </h2>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section
        className="py-20 sm:py-32 px-4 sm:px-6 text-center relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${colors.purpleDark} 0%, ${colors.purple} 50%, #C2185B 100%)`,
        }}
      >
        <div className="absolute bottom-0 left-0 opacity-10 pointer-events-none">
          <svg width="200" height="200" viewBox="0 0 200 200">
            {Array.from({ length: 5 }).map((_, row) =>
              Array.from({ length: 5 }).map((_, col) => (
                <rect
                  key={`${row}-${col}`}
                  x={col * 36 + 10}
                  y={row * 36 + 10}
                  width="14"
                  height="14"
                  rx="3"
                  fill="white"
                  opacity={0.5}
                />
              ))
            )}
          </svg>
        </div>

        <div className="relative max-w-2xl mx-auto">
          <div
            className="w-px h-14 mx-auto mb-10"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(255,255,255,0.3))",
            }}
          />
          <span
            className="text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full inline-block mb-6"
            style={{
              background: "rgba(255,255,255,0.15)",
              color: "rgba(255,255,255,0.8)",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            Próxima jornada
          </span>
          <h2
            className="font-light text-white leading-none mb-4"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(3rem, 10vw, 5.5rem)",
            }}
          >
            {nextDate.day} de {nextDate.month}
          </h2>
          <p
            className="font-light mb-6"
            style={{ color: "rgba(255,255,255,0.6)", fontSize: "1rem" }}
          >
            {nextDate.weekday} · {nextDate.time}
          </p>
          <p
            className="font-light mx-auto mb-10 leading-relaxed"
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "1rem",
              maxWidth: "420px",
            }}
          >
            Las plazas son limitadas para que cada persona tenga la atención
            que merece. Si lo estás considerando, este es el momento.
          </p>

          <a
            href={STRIPE_LINK}
            className="inline-flex flex-col items-center gap-1 px-10 sm:px-14 py-5 rounded-full font-semibold text-white transition-all duration-200 active:scale-95 w-full sm:w-auto"
            style={{
              background: `linear-gradient(135deg, ${colors.magenta}, #C2185B)`,
              boxShadow: "0 8px 40px rgba(233,30,140,0.5)",
              fontSize: "1.05rem",
            }}
          >
            <span>Quiero reservar mi plaza</span>
            <span
              className="text-xs font-normal"
              style={{ color: "rgba(255,255,255,0.75)" }}
            >
              25€ · Pago seguro con Stripe
            </span>
          </a>

          <p
            className="mt-5 text-sm font-light"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            ¿Tienes dudas? Escríbenos y te respondemos.
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        className="py-8 px-4 sm:px-6"
        style={{
          background: colors.purpleDark,
          borderTop: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <span
            className="font-semibold text-sm"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            Cyberespiración
          </span>
          <p
            className="text-xs font-light"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            Respiración consciente · Meditación · Autoconocimiento
          </p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            © {new Date().getFullYear()} Cyberespiración
          </p>
        </div>
      </footer>
    </div>
  );
}
