import { useEffect, useState, useRef } from "react";

// ─── Font injection ───────────────────────────────────────────────────────────
(() => {
  if (!document.querySelector('link[href*="Playfair"]')) {
    const l = document.createElement("link");
    l.rel = "stylesheet";
    l.href =
      "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400;1,500&family=Jost:wght@300;400;500;600&display=swap";
    document.head.appendChild(l);
  }
})();

// ─── Stripe & Payment ─────────────────────────────────────────────────────────
const STRIPE_MASTER = "https://buy.stripe.com/7sY28q8wn0Odefu0jHaR20c";         // ← Master 70€
const STRIPE_COCREACION = "https://buy.stripe.com/7sY5kC4g78gFc7m4zXaR20d"; // ← Cocreación/Renacimiento 79€
const STRIPE_EXTERNO = "https://buy.stripe.com/fZubJ04g7dAZgnC1nLaR20e";       // ← Externos 155€
const NUMERO_CUENTA = "ES12 0182 1287 8502 0333 7057";                // ← Tu número de cuenta

// ─── Brand palette ────────────────────────────────────────────────────────────
const C = {
  deepPurple: "#2D0050",
  purple: "#6B21A8",
  purpleMid: "#9333EA",
  violet: "#7C3AED",
  magenta: "#DB2777",
  magentaLight: "#F472B6",
  gold: "#D4A853",
  goldLight: "#F0C97A",
  earth: "#8B6B4A",
  cream: "#FDF8F0",
  creamDark: "#F5EFE3",
  white: "#FFFFFF",
  textDark: "#1A0030",
  textMid: "#4A2D6B",
  textLight: "#9B7EC8",
  border: "#E8D9F5",
};

const serif = "'Playfair Display', serif";
const sans = "'Jost', sans-serif";

// ─── Data ─────────────────────────────────────────────────────────────────────

const tickets = [
  {
    id: "master",
    name: "Comunidad Máster",
    price: "70",
    badge: "Más exclusivo",
    badgeColor: C.gold,
    accent: C.purple,
    stripe: STRIPE_MASTER,
    tagline: "Para quienes ya están en el nivel más profundo de formación.",
    description:
      "Nuestra forma de agradecer tu compromiso constante. Accedes a los tres días completos, incluyendo el intensivo del viernes.",
    access: [
      { label: "Viernes 24 — Día exclusivo Máster", included: true },
      { label: "Sábado 25 — Jornada completa", included: true },
      { label: "Domingo 26 — Cierre + graduación", included: true },
      { label: "Sesión final solo Máster (15-16h)", included: true },
      { label: "Sesión Cocreación + Máster (14-15h)", included: true },
      { label: "Activación corporal opcional 9am", included: true },
      { label: "Snacks e infusiones incluidos", included: true },
      { label: "Círculo de mujeres + Ice Bath (viernes)", included: true },
    ],
  },
  {
    id: "cocreacion",
    name: "Cocreación & Renacimiento",
    price: "79",
    badge: "Más popular",
    badgeColor: C.magenta,
    accent: C.magenta,
    stripe: STRIPE_COCREACION,
    tagline: "Lleva lo aprendido en clase a una experiencia vivencial de fin de semana.",
    description:
      "Un paso natural en tu evolución. Accede al sábado y domingo completos, más la sesión exclusiva del domingo por la tarde.",
    access: [
      { label: "Viernes 24 — Día exclusivo Máster", included: false },
      { label: "Sábado 25 — Jornada completa", included: true },
      { label: "Domingo 26 — Cierre + graduación", included: true },
      { label: "Sesión final solo Máster (15-16h)", included: false },
      { label: "Sesión Cocreación + Máster (14-15h)", included: true },
      { label: "Activación corporal opcional 9am", included: true },
      { label: "Snacks e infusiones incluidos", included: true },
      { label: "Círculo de mujeres + Ice Bath (viernes)", included: false },
    ],
  },
  {
    id: "externo",
    name: "Invitados Externos",
    price: "155",
    badge: "Bienvenida completa",
    badgeColor: C.violet,
    accent: C.violet,
    stripe: STRIPE_EXTERNO,
    tagline: "Si sientes el llamado pero aún no formas parte de nuestra escuela.",
    description:
      "Este espacio es para ti. Incluye la experiencia completa del fin de semana y la bienvenida a nuestra comunidad.",
    access: [
      { label: "Viernes 24 — Día exclusivo Máster", included: false },
      { label: "Sábado 25 — Jornada completa", included: true },
      { label: "Domingo 26 — Cierre + graduación", included: true },
      { label: "Sesión final solo Máster (15-16h)", included: false },
      { label: "Sesión Cocreación + Máster (14-15h)", included: false },
      { label: "Activación corporal opcional 9am", included: true },
      { label: "Snacks e infusiones incluidos", included: true },
      { label: "Círculo de mujeres + Ice Bath (viernes)", included: false },
    ],
  },
];

const programaViernes = [
  {
    hora: "12:00",
    fin: "14:00",
    titulo: "Trabajo corporal intensivo",
    copy: "¿Tu cuerpo guarda lo que tu mente no puede procesar? Aquí empezamos a liberarlo.",
    tipo: "practica",
    badge: "Solo Máster",
  },
  {
    hora: "14:00",
    fin: "16:00",
    titulo: "Práctica de sesiones",
    copy: "Entrena tu capacidad de guiar y ser guiado. Así de seguro saldrás de este espacio.",
    tipo: "practica",
    badge: "Solo Máster",
  },
  {
    hora: "16:00",
    fin: "18:00",
    titulo: "Círculo de mujeres · Limpieza femenina",
    copy: "Un espacio sagrado para reconectarte con tu energía más profunda.",
    tipo: "especial",
    badge: "Solo Máster",
  },
  {
    hora: "18:00",
    fin: "20:00",
    titulo: "Ice Bath · Inmersión en frío",
    copy: "El frío que despierta. Una práctica que resetea tu sistema nervioso y tu determinación.",
    tipo: "especial",
    badge: "Solo Máster",
  },
];

const programaSabado = [
  { hora: "10:00", fin: "11:00", titulo: "Recepción y bienvenida", tipo: "bienvenida", copy: "" },
  {
    hora: "11:00",
    fin: "14:00",
    titulo: "Introducción al trabajo sistémico y a la respiración consciente",
    copy: "¿Y si todo lo que buscas afuera ya está dentro de ti? Aprende a escucharlo.",
    tipo: "teoria",
    badge: "Todos",
  },
  { hora: "14:00", fin: "16:00", titulo: "Descanso · Comida", tipo: "pausa", copy: "" },
  {
    hora: "16:00",
    fin: "18:00",
    titulo: "Trabajo práctico y funcional de la vergüenza",
    copy: "¿Cuántas veces la vergüenza te ha encogido? Hoy aprendes a mirarte sin filtro y sin miedo.",
    tipo: "practica",
    badge: "Todos",
  },
  {
    hora: "18:00",
    fin: "20:00",
    titulo: "Trabajo en pareja",
    copy: "El verdadero cambio ocurre en el encuentro con el otro. Prepárate para sorprenderte.",
    tipo: "practica",
    badge: "Todos",
  },
];

const programaDomingo = [
  {
    hora: "09:00",
    fin: "10:00",
    titulo: "Activación corporal con Jessica Muñoz",
    copy: "Opcional. El mejor inicio que puedes darte.",
    tipo: "opcional",
    badge: "Opcional",
  },
  {
    hora: "10:00",
    fin: "12:00",
    titulo: "Trabajo funcional y práctico de la culpa",
    copy: "¿Cuánto espacio ocupa en tu vida algo que ya pasó? Suéltalo hoy. De verdad, suéltalo.",
    tipo: "practica",
    badge: "Todos",
  },
  {
    hora: "12:00",
    fin: "13:00",
    titulo: "Trabajo funcional y práctico del miedo",
    copy: "¿Tienes miedo a avanzar? ¿A empezar? ¿A equivocarte? Aprende a actuar aunque el miedo esté ahí.",
    tipo: "practica",
    badge: "Todos",
  },
  {
    hora: "13:00",
    fin: "14:00",
    titulo: "Graduación y cierre",
    copy: "El momento en que todo lo vivido se integra. No saldrás igual.",
    tipo: "cierre",
    badge: "Renacimiento + Externos",
  },
  {
    hora: "14:00",
    fin: "15:00",
    titulo: "Sesión exclusiva Cocreación + Máster",
    copy: "Para quienes van más lejos. Un espacio solo para vosotros.",
    tipo: "exclusivo",
    badge: "Cocreación + Máster",
  },
  {
    hora: "15:00",
    fin: "16:00",
    titulo: "Sesión final exclusiva Máster",
    copy: "El cierre más profundo. Solo para el nivel más comprometido.",
    tipo: "master",
    badge: "Solo Máster",
  },
];

const faqs = [
  {
    q: "¿Puedo asistir si nunca he practicado respiración consciente?",
    a: "Sí, absolutamente. El retiro está diseñado para que cualquier persona, independientemente de su experiencia, pueda participar y obtener resultados reales. No necesitas saber nada previo.",
  },
  {
    q: "¿Qué tengo que llevar?",
    a: "Esterilla, manta, antifaz, cuaderno, boli y ropa cómoda. El resto lo ponemos nosotros: snacks, infusiones y el espacio.",
  },
  {
    q: "¿Tendré que contar mis cosas delante del grupo?",
    a: "No. Nadie te va a obligar a compartir nada que no quieras. Si decides abrirte, el grupo será un espacio seguro. Pero es completamente voluntario.",
  },
  {
    q: "¿Es un problema si no soy sociable?",
    a: "Para nada. Puedes venir, participar y transformarte sin necesidad de ser el alma de la fiesta. Este es un espacio de trabajo personal, no de socialización forzada.",
  },
  {
    q: "¿Puedo llevar a alguien si soy cyberespirador?",
    a: "Sí, puedes venir acompañado. Tu acompañante deberá adquirir la entrada de Invitados Externos (155€), ya que no pertenece aún a la comunidad.",
  },
  {
    q: "¿Qué recomendáis comer antes del retiro?",
    a: "Se recomienda no ingerir alimentos pesados el día previo al retiro. Durante los días del retiro, llevar una alimentación ligera para que tu cuerpo esté receptivo y disponible para el trabajo.",
  },
  {
    q: "¿La activación del domingo es obligatoria?",
    a: "No, es completamente opcional. Empieza a las 9am y es una forma preciosa de arrancar el último día, pero puedes incorporarte directamente a las 10am si lo prefieres.",
  },
];

// ─── Subcomponents ────────────────────────────────────────────────────────────

function Badge({ text, color }: { text: string; color: string }) {
  return (
    <span
      className="text-xs font-semibold px-3 py-1 rounded-full inline-block"
      style={{ background: color + "22", color, border: `1px solid ${color}44` }}
    >
      {text}
    </span>
  );
}

type TipoBloqueType = "practica" | "teoria" | "pausa" | "especial" | "opcional" | "cierre" | "exclusivo" | "master" | "bienvenida";

function BloqueHorario({
  hora,
  fin,
  titulo,
  copy,
  tipo,
  badge,
}: {
  hora: string;
  fin: string;
  titulo: string;
  copy: string;
  tipo: TipoBloqueType;
  badge?: string;
}) {
  const tipoStyles: Record<TipoBloqueType, { left: string; bg: string; text: string }> = {
    practica: { left: C.magenta, bg: "#FDF2F8", text: C.magenta },
    teoria: { left: C.purple, bg: "#F5F0FF", text: C.purple },
    pausa: { left: "#6B7280", bg: "#F9FAFB", text: "#6B7280" },
    especial: { left: C.gold, bg: "#FFFBEB", text: "#92400E" },
    opcional: { left: "#10B981", bg: "#ECFDF5", text: "#065F46" },
    cierre: { left: C.violet, bg: "#F5F3FF", text: C.violet },
    exclusivo: { left: C.magenta, bg: "#FDF2F8", text: C.magenta },
    master: { left: C.gold, bg: "#FFFBEB", text: "#92400E" },
    bienvenida: { left: C.purpleMid, bg: "#F5F0FF", text: C.purple },
  };
  const s = tipoStyles[tipo] || tipoStyles.practica;
  return (
    <div
      className="rounded-xl p-4 sm:p-5 flex gap-4 transition-all hover:shadow-md"
      style={{ background: s.bg, borderLeft: `3px solid ${s.left}` }}
    >
      <div className="flex-shrink-0 w-20 sm:w-24">
        <div className="font-semibold text-sm" style={{ color: s.text, fontFamily: sans }}>
          {hora}
        </div>
        <div className="text-xs opacity-60" style={{ color: s.text, fontFamily: sans }}>
          hasta {fin}
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-start gap-2 mb-1">
          <span className="font-semibold text-sm leading-snug" style={{ color: C.textDark, fontFamily: sans }}>
            {titulo}
          </span>
          {badge && <Badge text={badge} color={s.left} />}
        </div>
        {copy && (
          <p className="text-xs sm:text-sm font-light leading-relaxed italic" style={{ color: C.textMid, fontFamily: sans }}>
            {copy}
          </p>
        )}
      </div>
    </div>
  );
}

function DayTabs() {
  const [active, setActive] = useState(0);
  const days = [
    { label: "Viernes 24", sub: "Solo Máster", data: programaViernes },
    { label: "Sábado 25", sub: "Todo el mundo", data: programaSabado },
    { label: "Domingo 26", sub: "Todo el mundo", data: programaDomingo },
  ];
  return (
    <div>
      {/* Tabs */}
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 mb-8 rounded-2xl overflow-hidden sm:overflow-visible">
        {days.map((d, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className="flex-1 px-4 py-3 sm:py-4 text-left sm:text-center transition-all duration-300 rounded-xl sm:rounded-none sm:first:rounded-l-xl sm:last:rounded-r-xl"
            style={{
              background: active === i
                ? `linear-gradient(135deg, ${C.deepPurple}, ${C.purple})`
                : C.creamDark,
              color: active === i ? C.white : C.textMid,
              fontFamily: sans,
              border: `1px solid ${active === i ? "transparent" : C.border}`,
            }}
          >
            <div className="font-semibold text-sm sm:text-base">{d.label}</div>
            <div className="text-xs opacity-70 mt-0.5">{d.sub}</div>
          </button>
        ))}
      </div>
      {/* Content */}
      <div className="space-y-3">
        {days[active].data.map((item, i) => (
          <BloqueHorario key={i} {...(item as { hora: string; fin: string; titulo: string; copy: string; tipo: TipoBloqueType; badge?: string })} />
        ))}
      </div>
    </div>
  );
}

function TicketCard({ t, onSelect }: { t: typeof tickets[0]; onSelect: (id: string) => void }) {
  const isMid = t.id === "cocreacion";
  return (
    <div
      className="rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
      style={{
        background: C.white,
        border: isMid ? `2px solid ${t.accent}` : `1px solid ${C.border}`,
        boxShadow: isMid
          ? `0 8px 40px ${t.accent}25`
          : "0 4px 20px rgba(109,33,168,0.07)",
        position: "relative",
      }}
    >
      {/* Top stripe */}
      <div
        className="h-1.5"
        style={{ background: `linear-gradient(90deg, ${t.accent}, ${C.magenta})` }}
      />
      {/* Badge */}
      <div className="px-6 pt-5 pb-0 flex items-center justify-between">
        <span
          className="text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full"
          style={{ background: t.badgeColor + "18", color: t.badgeColor }}
        >
          {t.badge}
        </span>
        {isMid && (
          <span
            className="text-xs font-semibold px-3 py-1 rounded-full text-white"
            style={{ background: C.magenta }}
          >
            ✦ Más elegido
          </span>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3
          className="text-xl font-bold mb-1"
          style={{ fontFamily: serif, color: C.textDark }}
        >
          {t.name}
        </h3>
        <p className="text-sm font-light mb-4 leading-relaxed" style={{ color: C.textMid, fontFamily: sans }}>
          {t.description}
        </p>

        {/* Price */}
        <div className="flex items-end gap-1 mb-6">
          <span className="text-5xl font-bold" style={{ fontFamily: serif, color: t.accent }}>
            {t.price}
          </span>
          <span className="text-xl mb-1 font-light" style={{ color: C.textLight, fontFamily: sans }}>€</span>
        </div>

        {/* Access list */}
        <div className="space-y-2.5 mb-8 flex-1">
          {t.access.map((a, i) => (
            <div key={i} className="flex items-start gap-2.5">
              <span
                className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs mt-0.5"
                style={{
                  background: a.included ? t.accent + "18" : "#F3F4F6",
                  color: a.included ? t.accent : "#9CA3AF",
                }}
              >
                {a.included ? "✓" : "✕"}
              </span>
              <span
                className="text-sm font-light leading-snug"
                style={{
                  color: a.included ? C.textDark : "#9CA3AF",
                  fontFamily: sans,
                  textDecoration: !a.included ? "line-through" : "none",
                }}
              >
                {a.label}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => onSelect(t.id)}
          className="w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 active:scale-95"
          style={{
            background: isMid
              ? `linear-gradient(135deg, ${t.accent}, ${C.deepPurple})`
              : `linear-gradient(135deg, ${t.accent}22, ${t.accent}33)`,
            color: isMid ? C.white : t.accent,
            border: `1.5px solid ${t.accent}`,
            fontFamily: sans,
          }}
        >
          Reservar mi plaza →
        </button>
      </div>
    </div>
  );
}

function PaymentModal({
  ticket,
  onClose,
}: {
  ticket: typeof tickets[0] | null;
  onClose: () => void;
}) {
  if (!ticket) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(6px)" }}
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-2xl overflow-hidden"
        style={{ background: C.white }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="p-6"
          style={{ background: `linear-gradient(135deg, ${C.deepPurple}, ${C.purple})` }}
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-white/70 text-xs font-semibold uppercase tracking-wider" style={{ fontFamily: sans }}>
              Entrada seleccionada
            </span>
            <button onClick={onClose} className="text-white/60 hover:text-white text-xl" style={{ lineHeight: 1 }}>
              ✕
            </button>
          </div>
          <h3 className="text-white text-xl font-bold" style={{ fontFamily: serif }}>
            {ticket.name}
          </h3>
          <div className="text-white/80 text-2xl font-bold mt-1" style={{ fontFamily: serif }}>
            {ticket.price}€
          </div>
        </div>

        {/* Payment options */}
        <div className="p-6 space-y-4">
          <p className="text-sm font-semibold" style={{ color: C.textDark, fontFamily: sans }}>
            Elige cómo pagar:
          </p>

          {/* Stripe */}
          <a
            href={ticket.stripe}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 w-full p-4 rounded-xl transition-all hover:shadow-md active:scale-95"
            style={{
              background: `linear-gradient(135deg, ${ticket.accent}, ${C.deepPurple})`,
              color: C.white,
            }}
          >
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(255,255,255,0.2)" }}
            >
              💳
            </div>
            <div className="text-left">
              <div className="font-semibold text-sm" style={{ fontFamily: sans }}>Pago con tarjeta</div>
              <div className="text-xs opacity-75" style={{ fontFamily: sans }}>Seguro · Inmediato · Stripe</div>
            </div>
            <span className="ml-auto opacity-75">→</span>
          </a>

          {/* Transferencia */}
          <div
            className="p-4 rounded-xl"
            style={{ background: C.creamDark, border: `1px solid ${C.border}` }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: C.border }}
              >
                🏦
              </div>
              <div>
                <div className="font-semibold text-sm" style={{ color: C.textDark, fontFamily: sans }}>
                  Transferencia bancaria
                </div>
                <div className="text-xs" style={{ color: C.textLight, fontFamily: sans }}>
                  Manual · Confirmación en 24-48h
                </div>
              </div>
            </div>
            <div
              className="text-xs rounded-lg p-3 space-y-1"
              style={{ background: C.white, border: `1px solid ${C.border}`, fontFamily: sans }}
            >
              <div>
                <span style={{ color: C.textLight }}>IBAN: </span>
                <span className="font-semibold select-all" style={{ color: C.textDark }}>
                  {NUMERO_CUENTA}
                </span>
              </div>
              <div>
                <span style={{ color: C.textLight }}>Destinatario: </span>
                <span className="font-semibold" style={{ color: C.textDark }}>
                  Santos Manuel Zambrano
                </span>
              </div>
              <div>
                <span style={{ color: C.textLight }}>Concepto: </span>
                <span className="font-semibold" style={{ color: C.textDark }}>
                  Tu nombre y apellidos + número de teléfono
                </span>
              </div>
              <div>
                <span style={{ color: C.textLight }}>Importe: </span>
                <span className="font-semibold" style={{ color: C.textDark }}>{ticket.price}€</span>
              </div>
            </div>
          </div>

          {/* Efectivo */}
          <div
            className="p-4 rounded-xl flex items-center gap-3"
            style={{ background: C.creamDark, border: `1px solid ${C.border}` }}
          >
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: C.border }}
            >
              💵
            </div>
            <div>
              <div className="font-semibold text-sm" style={{ color: C.textDark, fontFamily: sans }}>
                Pago en efectivo
              </div>
              <div className="text-xs" style={{ color: C.textLight, fontFamily: sans }}>
                Escríbenos para coordinar el pago al siguiente número de teléfono: +34 605 202 781
              </div>
            </div>
          </div>

          {/* Deadline in modal */}
          <div
            className="flex items-start gap-2.5 rounded-xl px-4 py-3"
            style={{ background: `${C.magenta}10`, border: `1px solid ${C.magenta}30` }}
          >
            <span className="text-base flex-shrink-0 mt-0.5">⏳</span>
            <p className="text-xs leading-snug" style={{ color: C.textMid, fontFamily: sans }}>
              <strong style={{ color: C.magenta }}>Fecha límite: 15 de abril de 2026.</strong>
              {" "}Tras esta fecha no se garantiza disponibilidad de plaza.
            </p>
          </div>

          <p className="text-center text-xs" style={{ color: C.textLight, fontFamily: sans }}>
            ¿Dudas? Escríbenos y te acompañamos en el proceso.
          </p>
        </div>
      </div>
    </div>
  );
}

function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-px">
      {faqs.map((item, i) => (
        <div key={i} style={{ borderBottom: `1px solid ${C.border}` }}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full text-left py-5 flex items-start justify-between gap-4"
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <span
              className="font-medium leading-snug text-sm sm:text-base"
              style={{ color: C.textDark, fontFamily: sans }}
            >
              {item.q}
            </span>
            <span
              className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-sm"
              style={{
                background: open === i ? C.magenta : C.purple,
                transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                transition: "all 0.3s ease",
                minWidth: "24px",
                fontFamily: sans,
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
              className="pb-5 font-light leading-relaxed text-sm"
              style={{ color: C.textMid, fontFamily: sans }}
            >
              {item.a}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Countdown ────────────────────────────────────────────────────────────────
function Countdown() {
  const target = new Date("2026-04-24T12:00:00");
  const [diff, setDiff] = useState(target.getTime() - Date.now());
  useEffect(() => {
    const t = setInterval(() => setDiff(target.getTime() - Date.now()), 1000);
    return () => clearInterval(t);
  }, []);
  const d = Math.max(0, Math.floor(diff / 86400000));
  const h = Math.max(0, Math.floor((diff % 86400000) / 3600000));
  const m = Math.max(0, Math.floor((diff % 3600000) / 60000));
  const s = Math.max(0, Math.floor((diff % 60000) / 1000));
  const units = [
    { label: "días", val: d },
    { label: "horas", val: h },
    { label: "min", val: m },
    { label: "seg", val: s },
  ];
  return (
    <div className="flex items-center justify-center gap-2 sm:gap-4">
      {units.map((u, i) => (
        <div key={i} className="text-center">
          <div
            className="text-2xl sm:text-4xl font-bold tabular-nums"
            style={{ fontFamily: serif, color: C.gold }}
          >
            {String(u.val).padStart(2, "0")}
          </div>
          <div
            className="text-xs uppercase tracking-wider mt-0.5"
            style={{ color: "rgba(255,255,255,0.5)", fontFamily: sans }}
          >
            {u.label}
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function RetiroLanding() {
  const [scrolled, setScrolled] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState<typeof tickets[0] | null>(null);
  const ticketsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollToTickets = () =>
    ticketsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div style={{ fontFamily: sans, background: C.cream, color: C.textDark }}>
      {/* ── NAV ────────────────────────────────────────────────────────────── */}
      <nav
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-500"
        style={{
          background: scrolled ? "rgba(255,255,255,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          boxShadow: scrolled ? `0 1px 24px ${C.purple}18` : "none",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
          <span
            className="font-bold text-sm sm:text-base"
            style={{ color: scrolled ? C.purple : C.white, fontFamily: serif }}
          >
            Cyberespiración
          </span>
          <button
            onClick={scrollToTickets}
            className="text-xs sm:text-sm font-semibold px-4 sm:px-6 py-2.5 rounded-full transition-all duration-200 active:scale-95 whitespace-nowrap text-white"
            style={{
              background: `linear-gradient(135deg, ${C.magenta}, ${C.purple})`,
              boxShadow: `0 4px 16px ${C.magenta}40`,
            }}
          >
            Ver entradas
          </button>
        </div>
      </nav>

      {/* ── HERO ───────────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 pt-20 overflow-hidden"
        style={{
          background: `linear-gradient(160deg, ${C.deepPurple} 0%, #3D1270 35%, #6B1E5A 70%, #8B2244 100%)`,
        }}
      >
        {/* Stars / particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 3 + 1 + "px",
                height: Math.random() * 3 + 1 + "px",
                background: "white",
                opacity: Math.random() * 0.4 + 0.1,
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
              }}
            />
          ))}
        </div>

        {/* Mountain silhouette */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none opacity-20">
          <svg viewBox="0 0 1440 180" fill="none" preserveAspectRatio="none">
            <path
              d="M0 180L240 60L400 120L600 20L800 100L1000 40L1200 90L1440 30L1440 180Z"
              fill="white"
            />
          </svg>
        </div>

        {/* Gold glow */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${C.gold}30 0%, transparent 65%)`,
            filter: "blur(50px)",
          }}
        />

        <div className="relative max-w-3xl mx-auto text-center w-full">
          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8 text-xs font-semibold"
            style={{
              background: "rgba(255,255,255,0.1)",
              color: C.goldLight,
              border: `1px solid ${C.gold}40`,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            ✦ San Rafael · Segovia · 24–26 Abril 2026 ✦
          </div>

          <h1
            className="font-bold text-white leading-none mb-6"
            style={{
              fontFamily: serif,
              fontSize: "clamp(2.5rem, 8vw, 5.5rem)",
              textShadow: "0 4px 40px rgba(0,0,0,0.4)",
            }}
          >
            Retiro de{" "}
            <em
              className="not-italic block sm:inline"
              style={{ color: C.goldLight }}
            >
              Respiración
            </em>
            <span className="block">Consciente</span>
          </h1>

          <p
            className="font-light text-base sm:text-lg mb-6 mx-auto leading-relaxed"
            style={{ color: "rgba(255,255,255,0.72)", maxWidth: "520px" }}
          >
            Tres días para soltar lo que ya no eres, descubrir lo que siempre
            fuiste y volver a casa contigo mismo.
          </p>

          <p
            className="text-sm font-semibold mb-10 uppercase tracking-widest"
            style={{ color: C.goldLight, fontFamily: sans }}
          >
            Con Jessica Muñoz · Fundadora de Cyberespiración
          </p>

          {/* Countdown */}
          <div
            className="inline-block rounded-2xl px-6 sm:px-10 py-5 mb-10"
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)",
              backdropFilter: "blur(20px)",
            }}
          >
            <p
              className="text-xs uppercase tracking-widest mb-4"
              style={{ color: "rgba(255,255,255,0.45)", fontFamily: sans }}
            >
              El retiro comienza en
            </p>
            <Countdown />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={scrollToTickets}
              className="w-full sm:w-auto inline-flex flex-col items-center justify-center px-8 py-4 rounded-full font-bold text-white transition-all duration-200 active:scale-95 text-base"
              style={{
                background: `linear-gradient(135deg, ${C.magenta}, #9D174D)`,
                boxShadow: `0 8px 32px ${C.magenta}55`,
              }}
            >
              <span>Reservar mi plaza</span>
              <span className="text-xs font-normal opacity-75 mt-0.5">
                Desde 70€ · Plazas limitadas
              </span>
            </button>
            <a
              href="#que-es"
              className="text-sm font-medium underline underline-offset-4"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              ¿En qué consiste? →
            </a>
          </div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 70" fill="none" preserveAspectRatio="none">
            <path d="M0 70L1440 70L1440 30C1100 70 400 10 0 50L0 70Z" fill={C.cream} />
          </svg>
        </div>
      </section>

      {/* ── QUÉ ES / COPY PRINCIPAL ─────────────────────────────────────────── */}
      <section id="que-es" className="py-20 sm:py-28 px-4 sm:px-6" style={{ background: C.cream }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 sm:gap-16 items-center">
            <div>
              <span
                className="text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full inline-block mb-6"
                style={{ background: C.purple + "15", color: C.purple }}
              >
                Un punto de inflexión
              </span>
              <h2
                className="font-bold leading-tight mb-6"
                style={{
                  fontFamily: serif,
                  fontSize: "clamp(1.9rem, 4vw, 3rem)",
                  color: C.textDark,
                }}
              >
                Este no es un retiro más.{" "}
                <em className="not-italic" style={{ color: C.magenta }}>
                  Es el antes y el después.
                </em>
              </h2>
              <div className="space-y-4" style={{ color: C.textMid }}>
                <p className="font-light leading-relaxed">
                  Hay cosas que no se procesan con la mente. Hay emociones que
                  llevan años atrapadas en tu cuerpo, patrones que se repiten sin que
                  entiendas por qué, respuestas automáticas que te alejan de lo que
                  realmente quieres.
                </p>
                <p className="font-light leading-relaxed">
                  En este retiro de tres días, a los pies de la sierra de Guadarrama,
                  usaremos la{" "}
                  <strong style={{ color: C.purple, fontWeight: 600 }}>
                    respiración consciente
                  </strong>
                  , el{" "}
                  <strong style={{ color: C.purple, fontWeight: 600 }}>
                    trabajo sistémico
                  </strong>{" "}
                  y la{" "}
                  <strong style={{ color: C.purple, fontWeight: 600 }}>
                    práctica corporal
                  </strong>{" "}
                  para hacer consciente lo inconsciente. Para que lo que ahora pesa,
                  mañana te impulse.
                </p>
                <p className="font-light leading-relaxed">
                  No vendrás a relajarte. Vendrás a transformarte. Y esa es la
                  diferencia.
                </p>
              </div>
            </div>

            {/* Stats / info cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "🏔️", label: "Entorno natural", sub: "Sierra de Guadarrama, San Rafael" },
                { icon: "🌬️", label: "Respiración consciente", sub: "El acceso más directo a tu interior" },
                { icon: "👤", label: "Jessica Muñoz", sub: "CEO y fundadora de Cyberespiración" },
                { icon: "✦", label: "Transformación real", sub: "No saldrás igual. Te lo garantizamos" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-5 transition-all hover:shadow-lg hover:-translate-y-0.5"
                  style={{
                    background: C.white,
                    border: `1px solid ${C.border}`,
                    boxShadow: `0 2px 16px ${C.purple}08`,
                  }}
                >
                  <div className="text-2xl mb-3">{s.icon}</div>
                  <div
                    className="font-semibold text-sm mb-1"
                    style={{ color: C.textDark, fontFamily: sans }}
                  >
                    {s.label}
                  </div>
                  <div
                    className="text-xs font-light leading-snug"
                    style={{ color: C.textLight, fontFamily: sans }}
                  >
                    {s.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── JESSICA MUÑOZ ──────────────────────────────────────────────────── */}
      <section
        className="py-20 sm:py-24 px-4 sm:px-6"
        style={{ background: C.creamDark }}
      >
        <div className="max-w-4xl mx-auto">
          <div
            className="rounded-3xl p-8 sm:p-14 relative overflow-hidden"
            style={{
              background: `linear-gradient(145deg, ${C.deepPurple} 0%, ${C.purple} 55%, #9D174D 100%)`,
            }}
          >
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-48 h-48 opacity-10 pointer-events-none">
              <svg viewBox="0 0 200 200">
                <circle cx="100" cy="100" r="90" stroke="white" strokeWidth="1" fill="none" />
                <circle cx="100" cy="100" r="60" stroke="white" strokeWidth="1" fill="none" />
                <circle cx="100" cy="100" r="30" stroke="white" strokeWidth="1" fill="none" />
              </svg>
            </div>

            <span
              className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-6"
              style={{
                background: "rgba(255,255,255,0.12)",
                color: C.goldLight,
                border: `1px solid ${C.gold}40`,
              }}
            >
              Tu guía en este viaje
            </span>
            <h2
              className="text-white font-bold mb-4 leading-tight"
              style={{
                fontFamily: serif,
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              }}
            >
              Jessica Muñoz
            </h2>
            <p
              className="font-light leading-relaxed mb-6"
              style={{ color: "rgba(255,255,255,0.72)", maxWidth: "580px", fontSize: "1rem" }}
            >
              Fundadora de Cyberespiración y referente en el trabajo de
              respiración consciente y transformación personal en España.
              Jessica combina ciencia, práctica corporal y profundo
              acompañamiento humano para crear experiencias que cambian vidas
              de forma permanente.
            </p>
            <p
              className="font-light leading-relaxed"
              style={{ color: "rgba(255,255,255,0.60)", maxWidth: "580px", fontSize: "0.95rem" }}
            >
              En este retiro, Jessica estará presente en cada momento del proceso.
              No como ponente, sino como guía. Porque la transformación que
              propone solo es posible desde la presencia completa.
            </p>

            <div
              className="flex flex-wrap gap-3 mt-8"
            >
              {["Respiración consciente", "Trabajo sistémico", "Práctica corporal", "Círculo femenino"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1.5 rounded-full font-medium"
                  style={{
                    background: "rgba(255,255,255,0.12)",
                    color: "rgba(255,255,255,0.8)",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROGRAMA ───────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 px-4 sm:px-6" style={{ background: C.cream }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 sm:mb-14">
            <span
              className="text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full inline-block mb-4"
              style={{ background: C.magenta + "15", color: C.magenta }}
            >
              3 días de transformación
            </span>
            <h2
              className="font-bold"
              style={{
                fontFamily: serif,
                fontSize: "clamp(2rem, 5vw, 3.2rem)",
                color: C.textDark,
              }}
            >
              El programa completo
            </h2>
            <p className="mt-3 font-light max-w-md mx-auto" style={{ color: C.textMid }}>
              Cada hora está diseñada con intención. Nada es casual, todo tiene su por qué.
            </p>
          </div>

          {/* Ubicación pill */}
          <div
            className="flex items-center gap-3 rounded-xl px-5 py-4 mb-8"
            style={{ background: C.white, border: `1px solid ${C.border}` }}
          >
            <span className="text-xl">📍</span>
            <div>
              <div className="font-semibold text-sm" style={{ color: C.textDark, fontFamily: sans }}>
                Calle Calzada S/N · 40410 San Rafael, Segovia
              </div>
              <div className="text-xs font-light" style={{ color: C.textLight, fontFamily: sans }}>
                En plena naturaleza, a los pies de la Sierra de Guadarrama
              </div>
            </div>
          </div>

          <DayTabs />

          {/* Próximas actividades */}
          <div
            className="mt-8 rounded-2xl p-6 text-center"
            style={{
              background: `linear-gradient(135deg, ${C.gold}12, ${C.gold}06)`,
              border: `1.5px dashed ${C.gold}60`,
            }}
          >
            <div className="text-2xl mb-3">✨</div>
            <h4
              className="font-bold text-lg mb-2"
              style={{ fontFamily: serif, color: C.textDark }}
            >
              Actividades sorpresa
            </h4>
            <p className="text-sm font-light" style={{ color: C.textMid, fontFamily: sans }}>
              Tenemos preparadas actividades especiales que anunciaremos próximamente.
              Síguenos para ser el primero en enterarte.
            </p>
            <span
              className="inline-block mt-3 text-xs font-semibold px-3 py-1.5 rounded-full"
              style={{ background: C.gold + "20", color: C.earth }}
            >
              Próximamente ·  Stay tuned
            </span>
          </div>
        </div>
      </section>

      {/* ── INCLUYE ─────────────────────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6" style={{ background: C.creamDark }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h3
              className="font-bold text-2xl sm:text-3xl"
              style={{ fontFamily: serif, color: C.textDark }}
            >
              El retiro incluye
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: "🫖", title: "Snacks e infusiones", desc: "Incluidos durante toda la jornada, sin coste adicional." },
              { icon: "🏔️", title: "Entorno natural único", desc: "Tres días en plena sierra, lejos del ruido del mundo." },
              { icon: "👁️", title: "Guía continua", desc: "Jessica Muñoz presente en cada momento del proceso." },
              { icon: "🌬️", title: "Sesiones de respiración", desc: "Práctica guiada de respiración consciente y meditación." },
              { icon: "🤝", title: "Comunidad", desc: "Comparte el proceso con personas que buscan lo mismo que tú." },
              { icon: "🌱", title: "Integración real", desc: "No solo lo vives. Te lo llevas. Herramientas para siempre." },
            ].map((s, i) => (
              <div
                key={i}
                className="rounded-2xl p-5 sm:p-6 flex gap-4 items-start"
                style={{
                  background: C.white,
                  border: `1px solid ${C.border}`,
                  boxShadow: `0 2px 12px ${C.purple}07`,
                }}
              >
                <span className="text-2xl flex-shrink-0">{s.icon}</span>
                <div>
                  <div
                    className="font-semibold text-sm mb-1"
                    style={{ color: C.textDark, fontFamily: sans }}
                  >
                    {s.title}
                  </div>
                  <div
                    className="text-xs font-light leading-snug"
                    style={{ color: C.textLight, fontFamily: sans }}
                  >
                    {s.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENTRADAS ───────────────────────────────────────────────────────── */}
      <section
        ref={ticketsRef as React.RefObject<HTMLElement>}
        id="entradas"
        className="py-20 sm:py-28 px-4 sm:px-6"
        style={{ background: C.cream }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <span
              className="text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full inline-block mb-4"
              style={{ background: C.purple + "15", color: C.purple }}
            >
              Elige tu entrada
            </span>
            <h2
              className="font-bold"
              style={{
                fontFamily: serif,
                fontSize: "clamp(2rem, 5vw, 3.2rem)",
                color: C.textDark,
              }}
            >
              Cada comunidad, su espacio
            </h2>
            <p
              className="mt-3 font-light max-w-lg mx-auto"
              style={{ color: C.textMid, fontFamily: sans }}
            >
              Dependiendo del programa en el que estés, tendrás acceso a diferentes
              momentos del retiro. Comprueba cuál es tu entrada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {tickets.map((t) => (
              <TicketCard
                key={t.id}
                t={t}
                onSelect={(id) =>
                  setSelectedTicket(tickets.find((tt) => tt.id === id) || null)
                }
              />
            ))}
          </div>

          {/* Payment note */}
          <div
            className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm"
            style={{ color: C.textLight, fontFamily: sans }}
          >
            {["💳 Pago con tarjeta", "🏦 Transferencia bancaria", "💵 Efectivo"].map((p) => (
              <span key={p} className="flex items-center gap-2">
                {p}
              </span>
            ))}
          </div>

          {/* Deadline banner */}
          <div
            className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 rounded-2xl px-6 py-4"
            style={{
              background: `linear-gradient(135deg, ${C.magenta}14, ${C.magenta}08)`,
              border: `1.5px solid ${C.magenta}35`,
            }}
          >
            <span className="text-lg flex-shrink-0">⏳</span>
            <p className="text-sm text-center sm:text-left" style={{ color: C.textMid, fontFamily: sans }}>
              <strong style={{ color: C.magenta }}>Fecha límite de pago: 15 de abril de 2026.</strong>
              {" "}Pasada esa fecha no se podrá garantizar tu plaza. No lo dejes para el último momento.
            </p>
          </div>
        </div>
      </section>

      {/* ── RECOMENDACIONES ────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 px-4 sm:px-6" style={{ background: C.creamDark }}>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <span
              className="text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full inline-block mb-4"
              style={{ background: C.gold + "20", color: C.earth }}
            >
              Preparación
            </span>
            <h2
              className="font-bold text-2xl sm:text-3xl"
              style={{ fontFamily: serif, color: C.textDark }}
            >
              Cómo llegar en las mejores condiciones
            </h2>
          </div>
          <div className="space-y-4">
            {[
              {
                icon: "🥗",
                title: "Alimentación ligera",
                desc: "Se recomienda no ingerir alimentos pesados el día previo al retiro. Durante los días del retiro, lleva una alimentación ligera para que tu cuerpo esté receptivo.",
              },
              {
                icon: "🎒",
                title: "Qué traer",
                desc: "Esterilla, manta, antifaz, cuaderno, boli y ropa cómoda. El resto lo ponemos nosotros.",
              },
              {
                icon: "🤍",
                title: "Llega con apertura",
                desc: "No necesitas tener ninguna experiencia previa ni preparación especial. Solo la disposición de estar contigo mismo.",
              },
            ].map((r, i) => (
              <div
                key={i}
                className="rounded-2xl p-5 sm:p-6 flex gap-4"
                style={{
                  background: C.white,
                  border: `1px solid ${C.border}`,
                }}
              >
                <span className="text-2xl flex-shrink-0">{r.icon}</span>
                <div>
                  <div
                    className="font-semibold text-sm mb-1"
                    style={{ color: C.textDark, fontFamily: sans }}
                  >
                    {r.title}
                  </div>
                  <p
                    className="text-sm font-light leading-relaxed"
                    style={{ color: C.textMid, fontFamily: sans }}
                  >
                    {r.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────────── */}
      <section className="py-20 sm:py-28 px-4 sm:px-6" style={{ background: C.cream }}>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <span
              className="text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full inline-block mb-4"
              style={{ background: C.purple + "15", color: C.purple }}
            >
              Preguntas frecuentes
            </span>
            <h2
              className="font-bold text-2xl sm:text-3xl"
              style={{ fontFamily: serif, color: C.textDark }}
            >
              Todo lo que necesitas saber
            </h2>
          </div>
          <FAQAccordion />
        </div>
      </section>

      {/* ── FINAL CTA ──────────────────────────────────────────────────────── */}
      <section
        className="py-24 sm:py-36 px-4 sm:px-6 text-center relative overflow-hidden"
        style={{
          background: `linear-gradient(160deg, ${C.deepPurple} 0%, #3D1270 35%, #6B1E5A 70%, #8B2244 100%)`,
        }}
      >
        {/* Stars */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: Math.random() * 2 + 1 + "px",
                height: Math.random() * 2 + 1 + "px",
                background: "white",
                opacity: Math.random() * 0.35 + 0.05,
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
              }}
            />
          ))}
        </div>

        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 pointer-events-none"
          style={{
            background: `radial-gradient(circle, ${C.gold}25 0%, transparent 65%)`,
            filter: "blur(60px)",
          }}
        />

        <div className="relative max-w-2xl mx-auto">
          <div
            className="text-4xl mb-6"
            style={{ animation: "pulse 3s ease-in-out infinite" }}
          >
            ✦
          </div>

          <h2
            className="font-bold text-white leading-none mb-5"
            style={{
              fontFamily: serif,
              fontSize: "clamp(2.5rem, 7vw, 4.5rem)",
            }}
          >
            ¿Estás listo para{" "}
            <em className="not-italic" style={{ color: C.goldLight }}>
              volver a ti?
            </em>
          </h2>
          <p
            className="font-light leading-relaxed mb-10 mx-auto"
            style={{
              color: "rgba(255,255,255,0.65)",
              fontSize: "1rem",
              maxWidth: "420px",
            }}
          >
            Las plazas son limitadas para garantizar que cada persona recibe la
            atención que merece. Si algo dentro de ti dice sí, este es el momento.
          </p>

          {/* Date summary */}
          <div
            className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 rounded-2xl px-6 sm:px-10 py-5 mb-10"
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)",
              backdropFilter: "blur(20px)",
            }}
          >
            {[
              { label: "Viernes 24 Abril", sub: "Solo Máster" },
              { label: "Sábado 25 Abril", sub: "Todo el mundo" },
              { label: "Domingo 26 Abril", sub: "Todo el mundo" },
            ].map((d, i) => (
              <div key={i} className="text-center">
                <div className="text-white font-semibold text-sm" style={{ fontFamily: sans }}>
                  {d.label}
                </div>
                <div
                  className="text-xs mt-0.5"
                  style={{ color: "rgba(255,255,255,0.45)", fontFamily: sans }}
                >
                  {d.sub}
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={scrollToTickets}
            className="inline-flex flex-col items-center gap-1 px-10 sm:px-16 py-5 rounded-full font-bold text-white transition-all duration-200 active:scale-95 w-full sm:w-auto text-base sm:text-lg"
            style={{
              background: `linear-gradient(135deg, ${C.magenta}, #9D174D)`,
              boxShadow: `0 8px 40px ${C.magenta}55`,
            }}
          >
            <span>Ver entradas y reservar</span>
            <span
              className="text-xs font-normal"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              Desde 70€ · Pago seguro
            </span>
          </button>

          <p
            className="mt-6 text-sm font-light"
            style={{ color: "rgba(255,255,255,0.35)", fontFamily: sans }}
          >
            ¿Tienes dudas? Escríbenos y te respondemos con gusto.
          </p>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────────────────── */}
      <footer
        className="py-8 px-4 sm:px-6"
        style={{ background: C.deepPurple, borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <span
            className="font-bold text-sm"
            style={{ color: "rgba(255,255,255,0.6)", fontFamily: serif }}
          >
            Cyberespiración
          </span>
          <p
            className="text-xs font-light"
            style={{ color: "rgba(255,255,255,0.35)", fontFamily: sans }}
          >
            Respiración consciente · Meditación · Transformación personal
          </p>
          <p
            className="text-xs"
            style={{ color: "rgba(255,255,255,0.25)", fontFamily: sans }}
          >
            © {new Date().getFullYear()} Cyberespiración · Jessica Muñoz
          </p>
        </div>
      </footer>

      {/* ── PAYMENT MODAL ──────────────────────────────────────────────────── */}
      {selectedTicket && (
        <PaymentModal
          ticket={selectedTicket}
          onClose={() => setSelectedTicket(null)}
        />
      )}
    </div>
  );
}