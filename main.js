/**
 * Dianelito Portfolio Script
 * ----------------------------------------------------
 * IMPORTANTE: Para cambiar el ID de Discord que monitorea el widget,
 * reemplaza el valor de DISCORD_USER_ID con tu ID numérico de Discord.
 * Si no sabes cómo obtenerlo:
 * 1. Ve a los ajustes de Discord -> Avanzado -> Activa "Modo desarrollador".
 * 2. Ve a tu perfil, haz clic en los tres puntos de tu usuario y pulsa "Copiar ID de usuario".
 */
const DISCORD_USER_ID = "515568667719630876"; // ID temporal (puedes reemplazarlo por el tuyo)

const revealItems = document.querySelectorAll(".reveal");
const navLinks = document.querySelectorAll("[data-page-link]");
const year = document.getElementById("year");

// Estructura de overrides de iconos de actividad
const ACTIVITY_ICON_OVERRIDES = {
  "363445589247131668": "ROBLOX.svg",
  roblox: "ROBLOX.svg",
};

// Activar clase al cargar la página
window.setTimeout(() => {
  document.body.classList.add("is-loaded");
}, 30);

// Actualizar el año en el footer
if (year) {
  year.textContent = new Date().getFullYear();
}

// Configurar el enlace activo de navegación basado en la página actual
function setActiveNav() {
  const currentPage = document.body.dataset.page;
  navLinks.forEach((link) => {
    link.classList.toggle("active", link.dataset.pageLink === currentPage);
  });
}

// Inicializar animaciones de revelación al hacer scroll
function setupRevealAnimations() {
  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => animateRevealItem(item));
    return;
  }

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateRevealItem(entry.target);
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
}

// Animar elemento revelado
function animateRevealItem(item) {
  if (item.classList.contains("visible")) return;

  const transitionDelay = Number.parseFloat(window.getComputedStyle(item).transitionDelay) || 0;
  const delay = transitionDelay * 1000;

  window.setTimeout(() => {
    item.classList.add("visible");
    runFrameAnimation(32, (progress) => {
      const eased = 1 - Math.pow(1 - progress, 3); // cubic ease-out
      item.style.setProperty("opacity", eased.toFixed(3), "important");
      item.style.setProperty("filter", `blur(${((1 - eased) * 6).toFixed(2)}px)`, "important");
      item.style.setProperty("transform", `translateY(${((1 - eased) * 20).toFixed(2)}px) scale(${(0.96 + eased * 0.04).toFixed(3)})`, "important");
    }, () => {
      item.style.removeProperty("opacity");
      item.style.removeProperty("filter");
      item.style.removeProperty("transform");
    });
  }, delay);
}

// Función auxiliar para animaciones fluidas basadas en frames
function runFrameAnimation(totalFrames, render, complete) {
  let frame = 0;
  const timer = window.setInterval(() => {
    frame += 1;
    const progress = Math.min(frame / totalFrames, 1);
    render(progress);

    if (progress >= 1) {
      window.clearInterval(timer);
      if (complete) complete();
    }
  }, 32);
}

// Crear partículas flotantes de fondo
function createMotionSpecks() {
  if (document.querySelector(".motion-specks")) return;

  const specks = document.createElement("div");
  specks.className = "motion-specks";
  specks.setAttribute("aria-hidden", "true");

  for (let index = 0; index < 36; index += 1) {
    const speck = document.createElement("span");
    speck.style.setProperty("--x", `${(index * 31) % 100}%`);
    speck.style.setProperty("--y", `${(index * 57) % 100}%`);
    speck.style.setProperty("--delay", `${(index % 8) * -1.2}s`);
    speck.style.setProperty("--duration", `${10 + (index % 6)}s`);
    speck.style.setProperty("--size", `${1.5 + (index % 3.5)}px`);
    specks.appendChild(speck);
  }

  document.body.prepend(specks);
}

// Configurar Lightbox para imágenes y videos del Portafolio
function setupImageLightbox() {
  const links = document.querySelectorAll(".work-shot-link, .work-card h2 a[href*='youtu.be'], .work-card h2 a[href*='youtube.com']");
  if (!links.length) return;

  const lightbox = document.createElement("div");
  lightbox.className = "image-lightbox";
  lightbox.setAttribute("aria-hidden", "true");
  lightbox.innerHTML = `
    <button class="image-lightbox-close" type="button" data-lightbox-close aria-label="Cerrar">Cerrar</button>
    <div class="lightbox-content-container" style="position: relative; width: 100%; max-width: 900px; display: flex; justify-content: center; align-items: center;">
      <img src="" alt="" style="display: none; max-width: 100%; max-height: 80vh; border-radius: 12px; border: 1px solid var(--line-strong); box-shadow: 0 30px 90px rgba(0, 0, 0, 0.8);">
      <iframe src="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="display: none; aspect-ratio: 16 / 9; width: 100%; max-width: 800px; height: auto; border-radius: 12px; border: 1px solid var(--line-strong); box-shadow: 0 30px 90px rgba(0, 0, 0, 0.8); background: #000;"></iframe>
    </div>
  `;

  const image = lightbox.querySelector("img");
  const iframe = lightbox.querySelector("iframe");
  const closeButton = lightbox.querySelector("[data-lightbox-close]");

  function getYouTubeId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  }

  function closeLightbox() {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("lightbox-open");
    document.documentElement.classList.remove("lightbox-open");
    window.setTimeout(() => {
      if (!lightbox.classList.contains("is-open")) {
        image.removeAttribute("src");
        image.style.display = "none";
        iframe.removeAttribute("src");
        iframe.style.display = "none";
      }
    }, 220);
  }

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const href = link.href;
      const videoId = getYouTubeId(href);

      if (videoId) {
        iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        iframe.style.display = "block";
        image.style.display = "none";
        image.removeAttribute("src");
      } else {
        const preview = link.querySelector("img") || link.closest(".work-card")?.querySelector("img") || link.parentElement?.querySelector("img");
        image.src = href;
        image.alt = preview?.alt || "Trabajo de Dianelito";
        image.style.display = "block";
        iframe.style.display = "none";
        iframe.removeAttribute("src");
      }

      lightbox.classList.add("is-open");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.classList.add("lightbox-open");
      document.documentElement.classList.add("lightbox-open");
    });
  });

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  closeButton.addEventListener("click", closeLightbox);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
      closeLightbox();
    }
  });

  document.body.appendChild(lightbox);
}

// Retornar etiqueta de estado
function statusLabel(status) {
  const currentLang = localStorage.getItem('language') || 'es';
  const labels = {
    es: { online: "En línea", idle: "Ausente", dnd: "No molestar", offline: "Desconectado" },
    en: { online: "Online", idle: "Idle", dnd: "Do Not Disturb", offline: "Offline" }
  };
  return labels[currentLang][status] || labels[currentLang].offline;
}

// Retornar tipo de actividad
function activityLabel(activity) {
  const currentLang = localStorage.getItem('language') || 'es';
  const labels = {
    es: { 0: "Jugando a", 1: "Transmitiendo", 2: "Escuchando", 3: "Viendo", 5: "Compitiendo en" },
    en: { 0: "Playing", 1: "Streaming", 2: "Listening to", 3: "Watching", 5: "Competing in" }
  };
  return labels[currentLang][activity.type] || (currentLang === 'es' ? "Actividad" : "Activity");
}

// Resolver avatar de Discord
function discordAvatarUrl(user) {
  if (!user?.id || !user?.avatar) return "favicon.ico";
  const extension = user.avatar.startsWith("a_") ? "gif" : "png";
  return `https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.${extension}?size=256`;
}

// Resolver imagen de actividad
function resolveActivityImage(activity) {
  const image = activity?.assets?.large_image || activity?.assets?.small_image;
  if (image) {
    if (image.startsWith("http")) return image;
    if (image.startsWith("mp:")) return `https://media.discordapp.net/${image.slice(3)}`;
    if (activity.application_id) {
      return `https://cdn.discordapp.com/app-assets/${activity.application_id}/${image}.png?size=128`;
    }
  }
  return fallbackActivityIcon(activity);
}

// Icono fallback de actividad
function fallbackActivityIcon(activity) {
  const appId = activity?.application_id;
  const name = String(activity?.name || "App").trim();
  const key = name.toLowerCase();

  if (appId && ACTIVITY_ICON_OVERRIDES[appId]) return ACTIVITY_ICON_OVERRIDES[appId];
  if (ACTIVITY_ICON_OVERRIDES[key]) return ACTIVITY_ICON_OVERRIDES[key];

  return genericActivityIcon(name);
}

// Crear SVG genérico para actividad
function genericActivityIcon(name) {
  const raw = String(name || "App").trim().replace(/[^a-z0-9]/gi, "");
  const initials = (raw || "APP").slice(0, 2).toUpperCase();
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160">
      <rect width="160" height="160" rx="28" fill="#101a2a"/>
      <rect x="18" y="18" width="124" height="124" rx="24" fill="#16253a" stroke="#5fb8ff" stroke-width="4"/>
      <text x="80" y="96" text-anchor="middle" font-family="Arial, sans-serif" font-size="52" font-weight="800" fill="#edf5ff">${initials}</text>
    </svg>
  `;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

// Dar formato al tiempo transcurrido
function formatElapsed(start) {
  if (!start) return "";
  const seconds = Math.max(0, Math.floor((Date.now() - start) / 1000));
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const rest = seconds % 60;

  if (hours > 0) {
    return `${hours}:${String(minutes).padStart(2, "0")}:${String(rest).padStart(2, "0")}`;
  }
  return `${minutes}:${String(rest).padStart(2, "0")}`;
}

// Procesar detalles de actividad
function activityInfo(data) {
  const currentLang = localStorage.getItem('language') || 'es';
  if (data.listening_to_spotify && data.spotify) {
    return {
      kicker: currentLang === 'es' ? "Escuchando Spotify" : "Listening to Spotify",
      title: data.spotify.song || "Spotify",
      subtitle: data.spotify.artist || "Spotify Activity",
      image: data.spotify.album_art_url || "",
      fallbackImage: genericActivityIcon("Spotify"),
    };
  }

  const activities = Array.isArray(data.activities) ? data.activities : [];
  const customStatus = activities.find((activity) => activity.type === 4 && activity.state);
  const activity = activities.find((item) => item.type !== 4 && item.name);

  if (activity) {
    const elapsed = formatElapsed(activity.timestamps?.start);
    return {
      kicker: activityLabel(activity),
      title: activity.details || activity.name,
      subtitle: activity.state || elapsed,
      image: resolveActivityImage(activity),
      fallbackImage: fallbackActivityIcon(activity),
    };
  }

  if (customStatus) {
    return {
      kicker: currentLang === 'es' ? "Estado" : "Status",
      title: customStatus.state,
      subtitle: "Discord",
      image: "",
      fallbackImage: "",
    };
  }

  return { kicker: "Discord", title: "", subtitle: "", image: "", fallbackImage: "", isEmpty: true };
}

// Controlar widget si Discord Lanyard falla
function setDiscordUnavailable(statusText, activityText, statusDot) {
  const currentLang = localStorage.getItem('language') || 'es';
  const statusPanel = document.getElementById("discordStatusPanel");
  const activityKicker = document.getElementById("discordActivityKicker");
  const activitySubtext = document.getElementById("discordActivitySubtext");
  const activityImage = document.getElementById("discordActivityImage");
  const activityRow = document.getElementById("discordActivityRow");

  statusDot.className = "status-dot offline";
  if (statusPanel) statusPanel.dataset.status = "offline";
  if (activityKicker) activityKicker.textContent = "Discord";
  if (statusText) statusText.textContent = currentLang === 'es' ? "Estado no disponible" : "Status unavailable";
  if (activityText) activityText.textContent = "";
  if (activitySubtext) activitySubtext.textContent = "";
  if (activityRow) activityRow.classList.add("is-hidden");
  if (activityImage) {
    activityImage.classList.add("is-hidden");
    activityImage.removeAttribute("src");
  }
}

// Cargar estado de Discord en el widget de Lanyard
async function loadIndexDiscordStatus() {
  const statusDot = document.getElementById("indexStatusDot");
  const statusText = document.getElementById("discordStatusText");
  const activityText = document.getElementById("discordActivityText");
  const activityKicker = document.getElementById("discordActivityKicker");
  const activitySubtext = document.getElementById("discordActivitySubtext");
  const activityImage = document.getElementById("discordActivityImage");
  const activityRow = document.getElementById("discordActivityRow");
  const statusPanel = document.getElementById("discordStatusPanel");
  const avatar = document.getElementById("indexDiscordAvatar");
  const name = document.getElementById("discordName");

  if (!statusDot) return;

  try {
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 8000);
    const response = await fetch(`https://api.lanyard.rest/v1/users/${DISCORD_USER_ID}`, {
      cache: "no-store",
      signal: controller.signal,
    });
    window.clearTimeout(timeout);

    if (!response.ok) {
      setDiscordUnavailable(statusText, activityText, statusDot);
      return;
    }

    const json = await response.json();
    if (!json.success || !json.data) {
      setDiscordUnavailable(statusText, activityText, statusDot);
      return;
    }

    const data = json.data;
    const user = data.discord_user;

    // Actualizar avatar
    if (avatar) {
      avatar.src = discordAvatarUrl(user);
      avatar.onerror = function () {
        this.src = "favicon.ico";
      };
    }

    // Actualizar nombre visible
    if (name && user?.global_name) {
      name.textContent = user.global_name;
    } else if (name && user?.username) {
      name.textContent = user.username;
    }

    // Actualizar estado (online, idle, dnd, offline)
    const status = data.discord_status || "offline";
    statusDot.className = `status-dot ${status}`;
    if (statusPanel) statusPanel.dataset.status = status;

    if (statusText) {
      statusText.textContent = statusLabel(status);
    }

    // Actualizar actividad
    const activity = activityInfo(data);
    const hasActivity = !activity.isEmpty && Boolean(activity.title);

    if (activityKicker) {
      activityKicker.textContent = activity.kicker;
    }

    if (activityText) {
      activityText.textContent = activity.title;
    }

    if (activitySubtext) {
      activitySubtext.textContent = activity.subtitle;
      activitySubtext.hidden = !activity.subtitle;
    }

    if (activityRow) {
      activityRow.classList.toggle("is-hidden", !hasActivity);
    }

    if (activityImage) {
      if (hasActivity && activity.image) {
        activityImage.src = activity.image;
        activityImage.classList.remove("is-hidden");
        activityImage.onerror = function () {
          if (activity.fallbackImage && this.src !== activity.fallbackImage) {
            this.onerror = function () {
              this.classList.add("is-hidden");
              this.removeAttribute("src");
            };
            this.src = activity.fallbackImage;
            return;
          }
          this.classList.add("is-hidden");
          this.removeAttribute("src");
        };
      } else {
        activityImage.classList.add("is-hidden");
        activityImage.removeAttribute("src");
      }
    }
  } catch (error) {
    setDiscordUnavailable(statusText, activityText, statusDot);
  }
}

// --- Lógica del Banner Temporal (Cumpleaños y Oferta Especial) ---

let birthdayConfettiStarted = false;

function startBirthdayConfetti() {
  if (birthdayConfettiStarted) return;
  birthdayConfettiStarted = true;

  const canvas = document.createElement("canvas");
  canvas.id = "birthday-canvas";
  canvas.style.position = "fixed";
  canvas.style.inset = "0";
  canvas.style.zIndex = "9998";
  canvas.style.pointerEvents = "none";
  document.body.appendChild(canvas);

  const ctx = canvas.getContext("2d");
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  const handleResize = () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  };
  window.addEventListener("resize", handleResize);

  const colors = ["#ff007f", "#00ffcc", "#0077ff", "#ffc85f", "#ff667e"];
  const particles = [];

  for (let i = 0; i < 100; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * -height,
      r: Math.random() * 6 + 4,
      d: Math.random() * height,
      color: colors[Math.floor(Math.random() * colors.length)],
      tilt: Math.random() * 10 - 5,
      tiltAngleIncremental: Math.random() * 0.07 + 0.02,
      tiltAngle: 0
    });
  }

  function draw() {
    if (!birthdayConfettiStarted) return;
    ctx.clearRect(0, 0, width, height);

    particles.forEach((p, index) => {
      p.tiltAngle += p.tiltAngleIncremental;
      p.y += (Math.cos(p.d) + 3 + p.r / 2) / 2;
      p.x += Math.sin(p.tiltAngle);
      p.tilt = Math.sin(p.tiltAngle - index / 3) * 15;

      ctx.beginPath();
      ctx.lineWidth = p.r;
      ctx.strokeStyle = p.color;
      ctx.moveTo(p.x + p.tilt + p.r / 2, p.y);
      ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 2);
      ctx.stroke();

      if (p.y > height) {
        particles[index] = {
          x: Math.random() * width,
          y: -20,
          r: p.r,
          d: p.d,
          color: p.color,
          tilt: p.tilt,
          tiltAngleIncremental: p.tiltAngleIncremental,
          tiltAngle: p.tiltAngle
        };
      }
    });

    requestAnimationFrame(draw);
  }

  draw();

  window._stopBirthdayConfetti = () => {
    birthdayConfettiStarted = false;
    window.removeEventListener("resize", handleResize);
    canvas.remove();
    delete window._stopBirthdayConfetti;
  };
}

function stopBirthdayConfetti() {
  if (typeof window._stopBirthdayConfetti === "function") {
    window._stopBirthdayConfetti();
  }
  birthdayConfettiStarted = false;
}

function renderBirthdayCountdown(banner, msRemaining) {
  const currentLang = localStorage.getItem('language') || 'es';
  const title = translations[currentLang].bannerBirthdayCountdownTitle;
  const desc = translations[currentLang].bannerBirthdayCountdownDesc;
  const daysLbl = translations[currentLang].bannerDays;
  const hoursLbl = translations[currentLang].bannerHours;
  const minLbl = translations[currentLang].bannerMin;
  const secLbl = translations[currentLang].bannerSec;

  const days = Math.floor(msRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((msRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((msRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((msRemaining % (1000 * 60)) / 1000);

  banner.innerHTML = `
    <div class="banner-content countdown-state">
      <div class="banner-badge">🎂 ${currentLang === 'es' ? 'Cumpleaños' : 'Birthday'}</div>
      <div class="banner-text-content">
        <h3>${title}</h3>
        <p>${desc}</p>
      </div>
      <div class="countdown-timer">
        <div class="timer-segment"><span class="timer-num">${String(days).padStart(2, "0")}</span><span class="timer-label">${daysLbl}</span></div>
        <div class="timer-segment"><span class="timer-num">${String(hours).padStart(2, "0")}</span><span class="timer-label">${hoursLbl}</span></div>
        <div class="timer-segment"><span class="timer-num">${String(minutes).padStart(2, "0")}</span><span class="timer-label">${minLbl}</span></div>
        <div class="timer-segment"><span class="timer-num">${String(seconds).padStart(2, "0")}</span><span class="timer-label">${secLbl}</span></div>
      </div>
    </div>
  `;
}

function renderBirthdayCelebration(banner) {
  const currentLang = localStorage.getItem('language') || 'es';
  const title = translations[currentLang].bannerBirthdayCelebrationTitle;
  const desc = translations[currentLang].bannerBirthdayCelebrationDesc;

  banner.innerHTML = `
    <div class="banner-content celebration-state">
      <div class="banner-badge birthday-badge">🎉 ${currentLang === 'es' ? '¡FIESTA!' : 'PARTY!'}</div>
      <div class="banner-text-content">
        <h3 class="birthday-title animate-rainbow">${title}</h3>
        <p>${desc}</p>
      </div>
      <div class="celebration-decorations">
        <span class="decor-emoji">🎈</span>
        <span class="decor-emoji">🎁</span>
        <span class="decor-emoji">🍰</span>
      </div>
    </div>
  `;
}

function renderPromoState(banner, msRemaining) {
  const currentLang = localStorage.getItem('language') || 'es';
  const title = translations[currentLang].bannerPromoTitle;
  const subtitle = translations[currentLang].bannerPromoSubtitle;
  const rule1 = translations[currentLang].bannerPromoRule1;
  const rule2 = translations[currentLang].bannerPromoRule2;
  const rule3 = translations[currentLang].bannerPromoRule3;
  const contact = translations[currentLang].bannerPromoContact;
  const studio = translations[currentLang].bannerPromoStudio;

  const daysLbl = translations[currentLang].bannerDays;
  const hoursLbl = translations[currentLang].bannerHours;
  const minLbl = translations[currentLang].bannerMin;
  const secLbl = translations[currentLang].bannerSec;

  const days = Math.floor(msRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((msRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((msRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((msRemaining % (1000 * 60)) / 1000);

  banner.innerHTML = `
    <div class="banner-content promo-state">
      <div class="banner-badge promo-badge">🔥 ${currentLang === 'es' ? 'OFERTA' : 'OFFER'}</div>
      <div class="banner-text-content">
        <h3>${title}</h3>
        <p class="promo-highlight">${subtitle}</p>
        <ul class="promo-rules">
          <li>${rule1}</li>
          <li>${rule2}</li>
          <li>${rule3}</li>
          <li>${contact} <a href="https://discord.gg/fcg6HDVKXy" target="_blank" rel="noopener" class="banner-link">${studio}</a></li>
        </ul>
      </div>
      <div class="countdown-timer">
        <div class="timer-segment"><span class="timer-num">${String(days).padStart(2, "0")}</span><span class="timer-label">${daysLbl}</span></div>
        <div class="timer-segment"><span class="timer-num">${String(hours).padStart(2, "0")}</span><span class="timer-label">${hoursLbl}</span></div>
        <div class="timer-segment"><span class="timer-num">${String(minutes).padStart(2, "0")}</span><span class="timer-label">${minLbl}</span></div>
        <div class="timer-segment"><span class="timer-num">${String(seconds).padStart(2, "0")}</span><span class="timer-label">${secLbl}</span></div>
      </div>
    </div>
  `;
}

function updateTemporaryEvent() {
  const banner = document.getElementById("temp-event-banner");
  if (!banner) return;

  const birthdayTarget = new Date("2026-06-18T09:10:00-06:00");
  const promoStart = new Date("2026-06-19T09:10:00-06:00");
  const promoEnd = new Date("2026-07-01T00:00:00-06:00");

  const now = new Date();

  if (now < birthdayTarget) {
    banner.classList.remove("is-hidden");
    renderBirthdayCountdown(banner, birthdayTarget - now);
  } else if (now >= birthdayTarget && now < promoStart) {
    banner.classList.remove("is-hidden");
    renderBirthdayCelebration(banner);
    if (!window.birthdayConfettiStarted) {
      window.birthdayConfettiStarted = true;
      startBirthdayConfetti();
    }
  } else if (now >= promoStart && now < promoEnd) {
    banner.classList.remove("is-hidden");
    renderPromoState(banner, promoEnd - now);
    stopBirthdayConfetti();
  } else {
    banner.classList.add("is-hidden");
    stopBirthdayConfetti();
  }
}

window.updateTemporaryEvent = updateTemporaryEvent;

// Inicializar scripts al cargar el DOM
document.addEventListener("DOMContentLoaded", () => {
  setActiveNav();
  createMotionSpecks();
  setupImageLightbox();
  setupRevealAnimations();
  loadIndexDiscordStatus();
  // Refrescar estado de Discord cada 30 segundos
  setInterval(loadIndexDiscordStatus, 30000);

  // Inicializar y actualizar el banner temporal de eventos si existe
  if (document.getElementById("temp-event-banner")) {
    updateTemporaryEvent();
    setInterval(updateTemporaryEvent, 1000);
  }
});
