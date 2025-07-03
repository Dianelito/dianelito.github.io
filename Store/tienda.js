require('dotenv').config();
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const DiscordStrategy = require('passport-discord').Strategy;
const axios = require('axios');
const app = express();
const crypto = require('crypto');

// Configuración de Passport (Discord OAuth)
passport.use(new DiscordStrategy({
    clientID: process.env.DISCORD_CLIENT_ID,
    clientSecret: process.env.DISCORD_CLIENT_SECRET,
    callbackURL: process.env.DISCORD_CALLBACK_URL || 'http://localhost:3000/auth/discord/callback',
    scope: ['identify', 'email']
}, (accessToken, refreshToken, profile, done) => {
    // Aquí puedes guardar el usuario en tu base de datos
    return done(null, profile);
}));

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));

// Configuración del servidor
app.use(session({
    secret: process.env.SESSION_SECRET || crypto.randomBytes(32).toString('hex'),
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// Rutas de autenticación
app.get('/auth/discord', passport.authenticate('discord'));
app.get('/auth/discord/callback', passport.authenticate('discord', {
    failureRedirect: '/login',
    successRedirect: '/'
}));

// Integración con Tebex.io (Webhook)
app.post('/tebex/webhook', express.json(), async (req, res) => {
    const providedSecret = req.headers['x-tebex-secret'];
    if (providedSecret !== process.env.TEBEX_SECRET_KEY) {
        return res.status(403).send('Invalid secret');
    }

    // Procesar el pago
    const { payment_id, customer } = req.body;
    
    // Aquí actualizarías el saldo del usuario en tu base de datos
    console.log(`Payment ${payment_id} received from ${customer.email}`);

    res.status(200).send('OK');
});

// Archivos estáticos
app.use(express.static('public'));

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
