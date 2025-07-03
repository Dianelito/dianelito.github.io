const express = require('express');
const passport = require('passport');
const session = require('express-session');
const mongoose = require('mongoose');
require('dotenv').config();
require('./config/passport');

const authRoutes = require('./routes/auth');
const storeRoutes = require('./routes/store');
const adminRoutes = require('./routes/admin');

const app = express();
app.use(express.json());

app.use(session({
  secret: 'tu_secreto_ultrasecreto',
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(process.env.MONGO_URI).then(() => console.log("Conectado a MongoDB"));

app.use('/auth', authRoutes);
app.use('/store', storeRoutes);
app.use('/admin', adminRoutes);

app.get('/', (req, res) => res.send('Servidor funcionando 👾'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor activo en el puerto ${PORT}`));