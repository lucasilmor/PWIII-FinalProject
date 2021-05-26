const {Router} = require('express');
const {Product} = require('../models');

const router = Router();

router.get('/', async (req, res) => {
    const products = await Product.findAll();
    res.status(200).json(products);
});

module.exports = router