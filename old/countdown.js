/**
 * countdown.js
 * Temporizador de cuenta regresiva hasta el 18 de junio de 2026 a las 10:00 AM (hora local)
 * Se inyecta automáticamente al principio de <body> en todas las páginas.
 *
 * Autor: Dianelito · Generado por IA el 09/06/2026
 */

(function () {
  // ── Fecha objetivo ──────────────────────────────────────────────────────────
  // 18 de junio de 2026 a las 10:00:00 hora local del visitante
  const TARGET = new Date(2026, 5, 18, 10, 0, 0, 0); // mes: 0-indexed → 5 = junio

  // ── Estilos del banner ──────────────────────────────────────────────────────
  const STYLES = `
    #countdown-bar {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 9999;
      background: linear-gradient(90deg,
        rgba(0, 255, 204, 0.12) 0%,
        rgba(0, 180, 220, 0.18) 50%,
        rgba(0, 255, 204, 0.12) 100%
      );
      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);
      border-bottom: 1px solid rgba(0, 255, 204, 0.35);
      box-shadow: 0 2px 24px rgba(0, 255, 204, 0.15);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      padding: 10px 16px;
      font-family: 'Segoe UI', 'Inter', sans-serif;
      flex-wrap: wrap;
      animation: cdGlow 3s ease-in-out infinite alternate;
    }

    @keyframes cdGlow {
      from { box-shadow: 0 2px 20px rgba(0, 255, 204, 0.10); }
      to   { box-shadow: 0 2px 36px rgba(0, 255, 204, 0.35); }
    }

    #countdown-bar .cd-label {
      font-size: 0.78rem;
      font-weight: 600;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #00ffcc;
      opacity: 0.85;
      white-space: nowrap;
    }

    #countdown-bar .cd-units {
      display: flex;
      align-items: center;
      gap: 6px;
      flex-wrap: wrap;
      justify-content: center;
    }

    #countdown-bar .cd-unit {
      display: flex;
      flex-direction: column;
      align-items: center;
      min-width: 52px;
    }

    #countdown-bar .cd-number {
      font-size: 1.45rem;
      font-weight: 800;
      color: #ffffff;
      line-height: 1;
      background: rgba(0, 255, 204, 0.08);
      border: 1px solid rgba(0, 255, 204, 0.25);
      border-radius: 8px;
      padding: 4px 10px;
      min-width: 48px;
      text-align: center;
      transition: transform 0.15s ease;
      font-variant-numeric: tabular-nums;
    }

    #countdown-bar .cd-number.tick {
      transform: scale(1.08);
      color: #00ffcc;
    }

    #countdown-bar .cd-name {
      font-size: 0.6rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.45);
      margin-top: 3px;
    }

    #countdown-bar .cd-sep {
      font-size: 1.4rem;
      font-weight: 700;
      color: rgba(0, 255, 204, 0.5);
      line-height: 1;
      margin-bottom: 14px;
      user-select: none;
    }

    #countdown-bar .cd-finished {
      font-size: 1rem;
      font-weight: 700;
      color: #00ffcc;
      letter-spacing: 0.06em;
      animation: cdPulse 1s ease-in-out infinite alternate;
    }

    @keyframes cdPulse {
      from { opacity: 0.7; }
      to   { opacity: 1; }
    }

    /* Empuja el contenido de la página hacia abajo */
    body {
      padding-top: 64px !important;
    }

    @media (max-width: 480px) {
      #countdown-bar .cd-number { font-size: 1.1rem; min-width: 38px; }
      #countdown-bar .cd-label  { font-size: 0.7rem; }
      body { padding-top: 80px !important; }
    }
  `;

  // ── Construir e inyectar el HTML ────────────────────────────────────────────
  function injectBar() {
    // Estilos
    const styleEl = document.createElement('style');
    styleEl.id = 'countdown-styles';
    styleEl.textContent = STYLES;
    document.head.appendChild(styleEl);

    // Barra
    const bar = document.createElement('div');
    bar.id = 'countdown-bar';
    bar.setAttribute('role', 'timer');
    bar.setAttribute('aria-live', 'off');

    bar.innerHTML = `
      <div class="cd-units" id="cd-units">
        <div class="cd-unit">
          <span class="cd-number" id="cd-days">--</span>
          <span class="cd-name" id="cd-days-name">días</span>
        </div>
        <span class="cd-sep">:</span>
        <div class="cd-unit">
          <span class="cd-number" id="cd-hours">--</span>
          <span class="cd-name" id="cd-hours-name">horas</span>
        </div>
        <span class="cd-sep">:</span>
        <div class="cd-unit">
          <span class="cd-number" id="cd-minutes">--</span>
          <span class="cd-name" id="cd-minutes-name">min</span>
        </div>
        <span class="cd-sep">:</span>
        <div class="cd-unit">
          <span class="cd-number" id="cd-seconds">--</span>
          <span class="cd-name" id="cd-seconds-name">seg</span>
        </div>
      </div>
    `;

    // Insertar al principio del body
    document.body.insertBefore(bar, document.body.firstChild);
  }

  // ── Formatear número con ceros ──────────────────────────────────────────────
  function pad(n) {
    return String(Math.max(0, n)).padStart(2, '0');
  }

  // ── Actualizar el temporizador ──────────────────────────────────────────────
  let prevSeconds = null;

  function tick() {
    const now  = new Date();
    const diff = TARGET - now;

    if (diff <= 0) {
      // Tiempo cumplido
      const bar = document.getElementById('countdown-bar');
      if (bar) {
        bar.innerHTML = `<span class="cd-finished">🎉 ¡El momento ha llegado!</span>`;
      }
      return; // detener
    }

    const totalSeconds = Math.floor(diff / 1000);
    const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const dEl = document.getElementById('cd-days');
    const hEl = document.getElementById('cd-hours');
    const mEl = document.getElementById('cd-minutes');
    const sEl = document.getElementById('cd-seconds');

    if (!dEl) return;

    dEl.textContent = pad(days);
    hEl.textContent = pad(hours);
    mEl.textContent = pad(minutes);
    sEl.textContent = pad(seconds);

    // Animación de "tick" en segundos
    if (prevSeconds !== seconds) {
      sEl.classList.add('tick');
      setTimeout(() => sEl.classList.remove('tick'), 150);
      prevSeconds = seconds;
    }

    // Adaptar labels según idioma guardado
    const lang = localStorage.getItem('language') || 'es';
    const labels = {
      es: { days: 'días', hours: 'horas', min: 'min', sec: 'seg' },
      en: { days: 'days', hours: 'hours', min: 'min', sec: 'sec' }
    };
    const L = labels[lang] || labels.es;

    document.getElementById('cd-days-name').textContent    = L.days;
    document.getElementById('cd-hours-name').textContent   = L.hours;
    document.getElementById('cd-minutes-name').textContent = L.min;
    document.getElementById('cd-seconds-name').textContent = L.sec;
  }

  // ── Iniciar ─────────────────────────────────────────────────────────────────
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      injectBar();
      tick();
      setInterval(tick, 1000);
    });
  } else {
    injectBar();
    tick();
    setInterval(tick, 1000);
  }
})();
