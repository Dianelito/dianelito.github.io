const translations = {
    es: {
        LastUpdate: "Ultima actualizacion: 29/07/25 6:28 am",
        // index.html
        homeTitle: "Hogar",
        welcomeHeader: "¡Bienvenido!",
        selectOption: "Seleccione una opción",
        discordButton: "Discord",
        aboutMeButton: "Sobre mí",
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

        // 404.html
        notFoundTitle: "404",
        achievementUnlocked: "¡Logro desbloqueado!",
        howDidWeGetHere: "¿Cómo llegamos aquí?",
        returnButton: "Regresar",
    },
    en: {
        LastUpdate: "LastUpdate: 29/07/25 6:28 am",
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

        // 404.html
        notFoundTitle: "404",
        achievementUnlocked: "Achievement Unlocked!",
        howDidWeGetHere: "How did we get here?",
        returnButton: "Return",
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