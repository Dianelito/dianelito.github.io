const translations = {
    es: {
        LastUpdate: "Ultima actualizacion: 3/12/25 2:27 pm",
        // index.html
        homeTitle: "Hogar",
        welcomeHeader: "¡Bienvenido!",
        selectOption: "Seleccione una opción",
        discordButton: "Discord",
        aboutMeButton: "Sobre mí",
        Comi: "Reseñas",
        portfolioButton: "Portafolio",
        languageToggle: "English",
        StoreButton: "Tienda",
        DeluxeMenuEditor: "Editor para DeluxeMenu",


        // aboutme.html
        aboutMeTitle: "Sobre mí",
        aboutMeHeader: "Sobre mí",
        aboutMePara1: "Soy <strong>Daniel</strong>, tengo 17 años me apasiona la configuración de servidores, especialmente en Minecraft. Tengo conocimientos básicos de administración en <strong>VPS con Linux y derivados</strong>, lo que me permite montar y mantener infraestructuras funcionales para comunidades de juego.",
        aboutMePara2: "También soy creador de contenido: tengo un canal de <strong>YouTube</strong> donde subo videos relacionados con Minecraft, desde gameplay hasta configuraciones útiles para la comunidad.",
        socialMediaHeader: "Mis Redes Sociales",
        backToHomeButton: "Volver al inicio",

        // portafolio.html
        portfolioTitle: "Portafolio",
        portfolioHeader: "Portafolio",
        knockbackConfigTitle: "Configuración de Knockback",
        knockbackConfigDesc: "Configuración de knockback para servidores PvP. Ideal para combates.",
        beachDesertMapTitle: "Mapa de Playa/Desierto",
        beachDesertMapDesc: "Mapa estilo playa/desierto con estructuras personalizadas, perfecto para zonas de spawn o eventos de rol.",
        warpPvPTitle: "Warp PvP 500x500",
        warpPvPDesc: "Área PvP de gran tamaño para que tus jugadores puedan pelear.",
        chunksLimitedTitle: "Chunks Limited",
        chunksLimitedDesc: "Plugin para limitar objetos por chunks. Perfecto para servidores survival que quiera limitar spawners.",
        aliceBotTitle: "Alice Bot",
        aliceBotDesc: "Chat Bot configurable con Conditional Events para que tus usuarios puedan hacer preguntas.",
        helixdec: "Configurador de los eventos de Helix. Clic para abrir video de mis ultimas creaciones para ellos",
        matangadec: "Yo Configure la modalidad Mega Gens y configuracion interna del servidor pero ahora esta inactivo el proyecto y yo medio retirado de el",

        // 404.html
        notFoundTitle: "404",
        achievementUnlocked: "¡Logro desbloqueado!",
        howDidWeGetHere: "¿Cómo llegamos aquí?",
        returnButton: "Regresar",

        // build.html
        build1: "¡En construccion!",
        build2: "Trabajando en ello",

        // comis.html
        comisTitle: "Reseñas",
        comisDescription: "Aquí puedes ver una selección de mis clientes que me contrataron más sus reseñas y que le hice.",
        comisStarsLabel: "Estrellas:",
        comisCommentLabel: "Comentario",
        comisContactLabel: "Como me contacto:",
        comisWatchVideoButton: "Ver video",
        michiComment1: '"Buena configuración pero hace falta mejorar en la decoración como usar fuentes de letra distintas, degradados, etc."',
        jeffersonComment1: '"super trabajo muy eficientes y como lo pedia lo hacen"',
        jeffersonComment2: '"estupendo trabajo que me realizaron en la creacion del menu de la tienda y add las protecciones, ademas de un buen descuento que obtuve"',
        heskeyStars: "Estrellas: No dejo valoracion",
        heskeyComments: "Comentarios: No dejo valoracion",
    },
    en: {
        LastUpdate: "LastUpdate: 3/12/25 2:27 pm",
        // index.html
        homeTitle: "Home",
        welcomeHeader: "Welcome!",
        selectOption: "Select an option",
        discordButton: "Discord",
        aboutMeButton: "About Me",
        portfolioButton: "Portfolio",
        languageToggle: "Español",
        StoreButton: "Store",
        DeluxeMenuEditor: "Editor for DeluxeMenu",
        Comi: "Ratings",

        // aboutme.html
        aboutMeTitle: "About Me",
        aboutMeHeader: "About Me",
        aboutMePara1: "I am <strong>Daniel</strong>, 17 years old, and I am passionate about server configuration, especially in Minecraft. I have basic administration knowledge in <strong>VPS with Linux and derivatives</strong>, which allows me to set up and maintain functional infrastructures for gaming communities.",
        aboutMePara2: "I am also a content creator: I have a <strong>YouTube</strong> channel where I upload videos related to Minecraft, from gameplay to useful configurations for the community.",
        socialMediaHeader: "My Social Networks",
        backToHomeButton: "Back to Home",

        // portafolio.html
        portfolioTitle: "Portfolio",
        portfolioHeader: "Portfolio",
        knockbackConfigTitle: "Knockback Configuration",
        knockbackConfigDesc: "Knockback configuration for PvP servers. Ideal for combat.",
        beachDesertMapTitle: "Beach Desert Map",
        beachDesertMapDesc: "Beach/desert style map with custom structures, perfect for spawn areas or role-playing events.",
        warpPvPTitle: "Warp PvP 500x500",
        warpPvPDesc: "Large PvP area for your players to fight.",
        chunksLimitedTitle: "Chunks Limited",
        chunksLimitedDesc: "Plugin to limit items per chunk. Perfect for survival servers that want to limit spawners.",
        aliceBotTitle: "Alice Bot",
        aliceBotDesc: "Configurable Chat Bot with Conditional Events for your users to ask questions.",
        helixdec: "Helix event configurator. Click to open a video of my latest creations for them",
        matangadec: "I set up the Mega Gens mode and the internal server configuration, but now the project is inactive and I have somewhat withdrawn from it.",

        // 404.html
        notFoundTitle: "404",
        achievementUnlocked: "Achievement Unlocked!",
        howDidWeGetHere: "How did we get here?",
        returnButton: "Return",

        // build.html
        build1: "¡In Work!",
        build2: "Working",

        // comis.html
        comisTitle: "Ratings",
        comisDescription: "Here you can see a selection of my clients who hired me, plus their reviews and what I did for them.",
        comisStarsLabel: "Stars:",
        comisCommentLabel: "Comment",
        comisContactLabel: "How they contacted me:",
        comisWatchVideoButton: "Watch video",
        michiComment1: '"Good configuration but needs improvement in decoration such as using different fonts, gradients, etc." original message in Spanish',
        jeffersonComment1: '"super work, very efficient and they do it as requested" original message in Spanish',
        jeffersonComment2: '"great job they did for me in creating the store menu and adding protections, plus a good discount I got" original message in Spanish',
        heskeyStars: "Stars: No rating left",
        heskeyComments: "Comments: No rating left",
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