const router = require('express').Router();
const Product = require('../models/Product');
const checkAdmin = require('../utils/checkAdmin');

router.use(checkAdmin);

router.post('/create', async (req, res) => {
  const newProduct = new Product(req.body);
  await newProduct.save();
  res.json({ message: 'Producto creado' });
});

router.put('/edit/:id', async (req, res) => {
  await Product.findByIdAndUpdate(req.params.id, req.body);
  res.json({ message: 'Producto actualizado' });
});

router.delete('/delete/:id', async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: 'Producto eliminado' });
});

module.exports = router;