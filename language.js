const translations = {
    es: {
        // Navegación
        navHome: "Inicio",
        navPortfolio: "Portafolio",
        navProducts: "Productos",
        navReviews: "Reseñas",
        navAbout: "Sobre Mí",
        navCopyright: "Copyright",
        languageToggle: "English",

        // index.html
        homeTitlePage: "Dianelito | Inicio",
        homeEyebrow: "Desarrollador & Configurador",
        homeWelcomeHeader: "Hola, soy Dianelito",
        homeDescription: "Tengo amplia experiencia en la configuración de servidores de Minecraft, administración de VPS en Linux y creación de herramientas personalizadas. ¡Descubre mis plugins y mejora el rendimiento de tu comunidad!",
        homeViewWork: "Ver Trabajos",
        homeViewProducts: "Ver Productos",
        discordKicker: "Discord",
        discordConnecting: "Conectando...",
        discordActivityRowDefault: "Leyendo actividad...",
        discordActivitySubDefault: "Cargando...",
        discordStatusOnline: "Online",
        discordStatusIdle: "Ausente",
        discordStatusDnd: "No molestar",
        discordStatusOffline: "Offline",
        discordStatusUnavailable: "Estado no disponible",

        // portafolio.html
        portfolioTitlePage: "Dianelito | Portafolio",
        portfolioEyebrow: "Trabajos & Proyectos",
        portfolioHeader: "Mi Portafolio",
        portfolioSubtitle: "Aquí tienes una muestra de configuraciones, setups y construcciones que he realizado para diferentes servidores y comunidades. Haz clic en las imágenes para verlas en detalle.",
        nightboxConfigDesc: "Configurador del servidor nightbox.us.",
        knockbackConfigTitle: "Configuración de Knockback",
        knockbackConfigDesc: "Configuración de knockback para servidores PvP. Ideal para combates de alto nivel.",
        beachDesertMapTitle: "Mapa de Playa/Desierto",
        beachDesertMapDesc: "Mapa estilo playa/desierto con estructuras personalizadas, perfecto para zonas de spawn o eventos de rol.",
        warpPvPTitle: "Warp PvP 500x500",
        warpPvPDesc: "Área PvP de gran tamaño para que tus jugadores puedan pelear.",
        chunksLimitedTitle: "Chunks Limited",
        chunksLimitedDesc: "Plugin para limitar objetos por chunks. Perfecto para servidores survival que quieran limitar spawners.",
        aliceBotTitle: "Alice Bot",
        aliceBotDesc: "Chat Bot configurable con Conditional Events para que tus usuarios puedan hacer preguntas en Discord.",
        helixTitle: "Helix Events",
        helixdec: "Configurador de los eventos de Helix. Clic para abrir el video de mis últimas creaciones para ellos.",
        matangaTitle: "Matanga Server",
        matangadec: "Yo configuré la modalidad Mega Gens y la configuración interna del servidor, pero ahora está inactivo el proyecto.",
        michiTitle: "Michi_MCYT",
        michiJobDesc: "Configurador y soporte general de servidores de Minecraft para el creador de contenido Michi.",
        disenoTitle: "Diseño",
        disenoDesc: "Te diseño y te hago funcionar ya sea items, MOTD, Menus, TAB, Scoreboards, hologramas y mensajes",

        // productos.html
        productsTitlePage: "Dianelito | Productos",
        productsEyebrow: "BuiltByBit Marketplace",
        productsHeader: "Mis Productos",
        productsSubtitle: "Una selección de mis mejores recursos, plugins y configuraciones profesionales para servidores Minecraft. Haz clic en el botón para ver los detalles y adquirir el recurso en BuiltByBit.",
        prodDChunkLoaderDesc: "Cargador de chunks persistente premium. Permite que los chunks del servidor se mantengan cargados, haciendo que las granjas automáticas y los sistemas de redstone funcionen incluso cuando no hay jugadores cerca.",
        prodMayDPartnerDesc: "Sistema avanzado para rastrear y premiar la publicidad de creadores de contenido (partners/influencers) en tu servidor. Cuenta con un sistema de votación para jugadores y estadísticas detalladas para los socios.",
        prodGameEventDesc: "Plugin de minijuegos definitivo. Ideal para eventos de comunidades de Minecraft. Incluye mecánicas de juego interactivas tipo Hide and Seek (Prop Hunt), donde los jugadores pueden transformarse en bloques y esconderse.",
        prodAutoBuildDesc: "Bloque de construcción automatizado inteligente. Perfecto para modalidades como SkyBlock y Survival, permitiendo a los jugadores construir estructuras predefinidas con facilidad depositando materiales.",
        prodKnockbackDesc: "Configuración profesional y pulida del Knockback PvP para servidores competitivos de Minecraft. Proporciona combates más estables y dinámicos adaptados a la última versión.",
        tagPlugin: "Plugin",
        tagSystem: "Sistema",
        tagMinigame: "Minijuego",
        tagConfig: "Configuración",
        tagBuild: "Mapa / Build",
        tagBot: "Bot / Discord",
        prodBuyBtn: "Ver en BuiltByBit",

        // resenas.html
        reviewsTitlePage: "Dianelito | Reseñas",
        reviewsEyebrow: "Testimonios & Valoraciones",
        reviewsHeader: "Reseñas de Clientes",
        reviewsSubtitle: "La satisfacción de quienes confían en mi trabajo es mi mayor prioridad. Aquí puedes ver algunas de las opiniones y valoraciones sobre las configuraciones y servicios que he realizado.",
        reviewContactDiscord: "Vía Discord",
        michiCommentJefferson1: '"super trabajo muy eficientes y como lo pedia lo hacen"',
        michiCommentJefferson2: '"estupendo trabajo que me realizaron en la creacion del menu de la tienda y add las protecciones, ademas de un buen descuento que obtuve"',
        michiComment1: '"Buena configuración pero hace falta mejorar en la decoración como usar fuentes de letra distintas, degradados, etc. (¡Mejorado en este nuevo portafolio!)"',
        reviewBackedMCComment: '"Buen trabajo, velocidad excepcional y calidad objetiva"',
        noCommentText: "Proyecto completado con éxito. Valoración implícita de 5 estrellas (Sin comentarios escritos).",

        // aboutme.html
        aboutTitlePage: "Dianelito | Sobre Mí",
        aboutMeTitle: "Conóceme",
        aboutMePara1: "Soy <strong>Daniel</strong>, me apasiona la configuración de servidores (especialmente en Minecraft) y la <span class=\"ai-glow\">inteligencia artificial</span>. Tengo conocimientos básicos de administración en <strong>VPS con Linux y derivados</strong>, lo que me permite montar y mantener infraestructuras funcionales para comunidades de juego.",
        aboutMePara2: "Tengo dos canales de <strong>YouTube</strong> donde subo videos relacionados con Minecraft, desde gameplays hasta productos que vendo para la comunidad.",
        aboutMePara3: "Tengo mi <strong>Estudio</strong> donde puedes contratarme vía ticket: <a href=\"https://discord.gg/fcg6HDVKXy\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"discord-link\">discord.gg/fcg6HDVKXy</a>",
        socialMediaHeader: "Mis Redes Sociales",

        // copyright.html
        copyrightTitlePage: "Dianelito | Copyright",
        copyrightEyebrow: "Licencias & Términos",
        copyrightHeader: "Derechos de Autor",
        copyrightSubtitle: "Detalles de los derechos de autor y licencias aplicables a cada uno de mis productos y a esta página web.",
        copyWebTitle: "Sitio Web del Portafolio",
        copyWebDesc: "Este sitio web fue desarrollado utilizando como base y referencia de diseño e interactividad el portafolio de Derivao (derivao.my). Todos los créditos del diseño base corresponden a su autor.",
        copyProductTitle: "Licencia de Productos (Plugins & Configs)",
        copyProductDesc: "Todos los recursos publicados en BuiltByBit y SpigotMC (incluyendo DChunkLoader, MayDPartner, GameEvent, AutoBuild y Knockback Config) están bajo una Licencia Comercial Propietaria. Está estrictamente prohibida la redistribución, reventa, sublicencia o modificación no autorizada de cualquiera de estos archivos.",
        copyListTitle: "Productos Cubiertos:",
        footerCredit: "Página creada a base de Derivao",

        // Event Banner
        bannerBirthdayCountdownTitle: "Cuenta atrás para el cumpleaños de Dianelito 🎂",
        bannerBirthdayCountdownDesc: "¡Falta muy poco para celebrar!",
        bannerBirthdayCelebrationTitle: "🎂 ¡Feliz Cumpleaños Dianelito! 🥳",
        bannerBirthdayCelebrationDesc: "Hoy celebramos un año más. ¡Felicidades y que cumplas muchos más!",
        bannerPromoTitle: "SERVICIO DE CONFIGURACIÓN GRATIS",
        bannerPromoSubtitle: "¡Ofrezco servicio de configuración gratis para los primeros que me contacten!",
        bannerPromoRule1: "Solo una configuración por usuario/servidor/persona.",
        bannerPromoRule2: "Oferta válida hasta el 30 de junio.",
        bannerPromoRule3: "Con la condición de que dejes una reseña para mi portafolio.",
        bannerPromoContact: "Contrátame vía ticket en mi",
        bannerPromoStudio: "Estudio de Discord",
        bannerDays: "Días",
        bannerHours: "Horas",
        bannerMin: "Min",
        bannerSec: "Seg",
    },
    en: {
        // Navigation
        navHome: "Home",
        navPortfolio: "Portfolio",
        navProducts: "Products",
        navReviews: "Reviews",
        navAbout: "About Me",
        navCopyright: "Copyright",
        languageToggle: "Español",

        // index.html
        homeTitlePage: "Dianelito | Home",
        homeEyebrow: "Developer & Configurator",
        homeWelcomeHeader: "Hi, I am Dianelito",
        homeDescription: "I have extensive experience in Minecraft server configuration, Linux VPS administration, and custom tool creation. Discover my plugins and improve your community's performance!",
        homeViewWork: "View Work",
        homeViewProducts: "View Products",
        discordKicker: "Discord",
        discordConnecting: "Connecting...",
        discordActivityRowDefault: "Reading activity...",
        discordActivitySubDefault: "Loading...",
        discordStatusOnline: "Online",
        discordStatusIdle: "Idle",
        discordStatusDnd: "Do Not Disturb",
        discordStatusOffline: "Offline",
        discordStatusUnavailable: "Status unavailable",

        // portafolio.html
        portfolioTitlePage: "Dianelito | Portfolio",
        portfolioEyebrow: "Works & Projects",
        portfolioHeader: "My Portfolio",
        portfolioSubtitle: "Here is a showcase of configurations, setups, and builds I have done for different servers and communities. Click on the images to view them in detail.",
        nightboxConfigDesc: "nightbox.us server configurator.",
        knockbackConfigTitle: "Knockback Configuration",
        knockbackConfigDesc: "Knockback configuration for PvP servers. Ideal for high-level combat.",
        beachDesertMapTitle: "Beach Desert Map",
        beachDesertMapDesc: "Beach/desert style map with custom structures, perfect for spawn areas or role-playing events.",
        warpPvPTitle: "Warp PvP 500x500",
        warpPvPDesc: "Large PvP area for your players to fight.",
        chunksLimitedTitle: "Chunks Limited",
        chunksLimitedDesc: "Plugin to limit items per chunk. Perfect for survival servers that want to limit spawners.",
        aliceBotTitle: "Alice Bot",
        aliceBotDesc: "Configurable Chat Bot with Conditional Events for your users to ask questions in Discord.",
        helixTitle: "Helix Events",
        helixdec: "Helix event configurator. Click to open the video of my latest creations for them.",
        matangaTitle: "Matanga Server",
        matangadec: "I configured the Mega Gens mode and the internal server configuration, but the project is now inactive.",
        michiTitle: "Michi_MCYT",
        michiJobDesc: "Configurator and general support of Minecraft servers for content creator Michi.",
        disenoTitle: "Design",
        disenoDesc: "I design and make items, MOTD, Menus, TAB, Scoreboards, holograms, and messages work for you.",

        // productos.html
        productsTitlePage: "Dianelito | Products",
        productsEyebrow: "BuiltByBit Marketplace",
        productsHeader: "My Products",
        productsSubtitle: "A selection of my best resources, plugins, and professional configurations for Minecraft servers. Click the button to see the details and purchase the resource on BuiltByBit.",
        prodDChunkLoaderDesc: "Premium persistent chunk loader. Keeps server chunks loaded, allowing automatic farms and redstone systems to work even when no players are nearby.",
        prodMayDPartnerDesc: "Advanced system to track and reward content creator (partners/influencers) advertising on your server. Features a player voting system and detailed statistics for partners.",
        prodGameEventDesc: "Ultimate minigames plugin. Ideal for Minecraft community events. Includes interactive gameplay mechanics like Hide and Seek (Prop Hunt), where players can transform into blocks.",
        prodAutoBuildDesc: "Smart automated building block. Perfect for modes like SkyBlock and Survival, allowing players to build pre-defined structures easily by depositing materials.",
        prodKnockbackDesc: "Professional and polished PvP Knockback configuration for competitive Minecraft servers. Provides more stable and dynamic combat adapted to the latest version.",
        tagPlugin: "Plugin",
        tagSystem: "System",
        tagMinigame: "Minigame",
        tagConfig: "Configuration",
        tagBuild: "Map / Build",
        tagBot: "Bot / Discord",
        prodBuyBtn: "View on BuiltByBit",

        // resenas.html
        reviewsTitlePage: "Dianelito | Reviews",
        reviewsEyebrow: "Testimonials & Ratings",
        reviewsHeader: "Customer Reviews",
        reviewsSubtitle: "The satisfaction of those who trust my work is my highest priority. Here you can see some of the opinions and ratings on the configurations and services I have performed.",
        reviewContactDiscord: "Via Discord",
        michiCommentJefferson1: '"super work, very efficient and they do it as requested"',
        michiCommentJefferson2: '"great job they did for me in creating the store menu and adding protections, plus a good discount I got"',
        michiComment1: '"Good configuration but needs improvement in decoration such as using different fonts, gradients, etc. (Improved in this new portfolio!)"',
        reviewBackedMCComment: '"Good job, exceptional speed and objective quality"',
        noCommentText: "Project completed successfully. Implicit 5-star rating (No written comments).",

        // aboutme.html
        aboutTitlePage: "Dianelito | About Me",
        aboutMeTitle: "About Me",
        aboutMePara1: "I am <strong>Daniel</strong>, I am passionate about server configuration (especially in Minecraft) and <span class=\"ai-glow\">artificial intelligence</span>. I have basic administration knowledge in <strong>VPS with Linux and derivatives</strong>, which allows me to set up and maintain functional infrastructures for gaming communities.",
        aboutMePara2: "I have two <strong>YouTube</strong> channels where I upload videos related to Minecraft, from gameplay to products I sell to the community.",
        aboutMePara3: "I have my <strong>Studio</strong> where you can hire me via ticket: <a href=\"https://discord.gg/fcg6HDVKXy\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"discord-link\">discord.gg/fcg6HDVKXy</a>",
        socialMediaHeader: "My Social Networks",

        // copyright.html
        copyrightTitlePage: "Dianelito | Copyright",
        copyrightEyebrow: "Licenses & Terms",
        copyrightHeader: "Copyright",
        copyrightSubtitle: "Details of copyright and licenses applicable to each of my products and this website.",
        copyWebTitle: "Portfolio Website",
        copyWebDesc: "This website was developed using Derivao's portfolio (derivao.my) as a base and reference for design and interactivity. All credits for the base design belong to its author.",
        copyProductTitle: "Product License (Plugins & Configs)",
        copyProductDesc: "All resources published on BuiltByBit and SpigotMC (including DChunkLoader, MayDPartner, GameEvent, AutoBuild, and Knockback Config) are under a Proprietary Commercial License. Unauthorized redistribution, resale, sublicensing, or modification of any of these files is strictly prohibited.",
        copyListTitle: "Covered Products:",
        footerCredit: "Website created based on Derivao",

        // Event Banner
        bannerBirthdayCountdownTitle: "Countdown to Dianelito's Birthday 🎂",
        bannerBirthdayCountdownDesc: "Almost time to celebrate!",
        bannerBirthdayCelebrationTitle: "🎂 Happy Birthday Dianelito! 🥳",
        bannerBirthdayCelebrationDesc: "Today we celebrate another year. Happy Birthday, and wishing you many more!",
        bannerPromoTitle: "FREE CONFIGURATION SERVICE",
        bannerPromoSubtitle: "I am offering free configuration services for the first ones to contact me!",
        bannerPromoRule1: "Only one configuration per user/server/person.",
        bannerPromoRule2: "Offer valid until June 30th.",
        bannerPromoRule3: "With the condition that you leave a review for my portfolio.",
        bannerPromoContact: "Hire me via ticket in my",
        bannerPromoStudio: "Discord Studio",
        bannerDays: "Days",
        bannerHours: "Hours",
        bannerMin: "Min",
        bannerSec: "Sec",
    }
};

let currentLanguage = localStorage.getItem('language') || 'es';

function updateContent() {
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (translations[currentLanguage] && translations[currentLanguage][key]) {
            element.innerHTML = translations[currentLanguage][key];
        }
    });

    document.documentElement.lang = currentLanguage;

    const langToggleButton = document.getElementById('languageToggle');
    if (langToggleButton) {
        langToggleButton.textContent = translations[currentLanguage].languageToggle;
    }

    // Actualizar el banner temporal si existe y el script principal ya está cargado
    if (typeof window.updateTemporaryEvent === 'function') {
        window.updateTemporaryEvent();
    }
}

function toggleLanguage() {
    currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
    localStorage.setItem('language', currentLanguage);
    updateContent();
}

document.addEventListener('DOMContentLoaded', () => {
    const langToggleButton = document.getElementById('languageToggle');
    if (langToggleButton) {
        langToggleButton.addEventListener('click', toggleLanguage);
    }
    updateContent();
});