const router = require('express').Router();
const Product = require('../models/Product');
const User = require('../models/User');

router.get('/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

router.post('/buy/:id', async (req, res) => {
  if (!req.user) return res.status(401).send('No autenticado');
  
  const product = await Product.findById(req.params.id);
  const user = await User.findOne({ discordId: req.user.discordId });

  if (user.balance < product.price) {
    return res.status(400).send('Saldo insuficiente');
  }

  user.balance -= product.price;
  user.purchases.push(product.name);
  await user.save();

  res.json({ success: true, message: '¡Compra exitosa!' });
});

module.exports = router;