const {Router} = require('express');
const {Product} = require('../models');

const router = Router();

router.get('/', async (req, res) => {
    const products = await Product.findAll();
    res.status(200).json(products);
});

router.get('/:id', async (req, res) => {
    const product = await Product.findByPk(req.params.id)
    res.status(200).json(product);
})

router.post('/', async (req, res) => {
    const {img, nome, preco, estoque} = req.body;
    const newProduct = Product.create({img, nome, preco, estoque});

    res.status(200).json({message:"Produto criado"});
});

router.delete('/:id', async (req, res) =>{
    await Product.destroy({
        where:{
            id: req.params.id,
        },
    });

    res.status(200).json({message: 'Produto excluido'})
});

router.put('/:id', async (req, res) => {
    const {img, nome, preco, estoque} = req.body;

    await Product.update(
        {img, nome, preco, estoque},
        {
            where: {id: req.params.id},
        }
    );

    res.status(200).json({message:"Produto atualizado"})
})

module.exports = router