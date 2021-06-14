const {Router} = require('express');
const {Product} = require('../models');
const multer = require('multer');
const multerConfig = require('../config/multer');
const fs = require('fs');

const router = Router();

router.get('/', async(req, res) =>{
    try {
        const products = await Product.findAll()

        return res.send({ products });

    } catch (error) {
        console.log(error)
        return res.status(400).send({ error: 'Erro ao carregar produtos' });
    }
});

router.get('/:id', async(req, res) => {
    try {
        const product = await Product.findByPk(req.params.id)

        return res.send({ product });

    } catch (error) {
        return res.status(400).send({ error: 'Erro ao carregar produto' });
    }
});

router.post('/', multer(multerConfig).single("file"), async(req, res) => {
    try {
        const product = await Product.create({
            img: req.body.img, 
            nome: req.body.nome, 
            preco: req.body.preco, 
            estoque: req.body.estoque
        });
  
        return res.send(product);
        
    } catch (error) {
        console.log(error)
        return res.status(400).send({ error: 'Erro ao criar produto' });
    }
});

router.delete('/:id', async(req, res) => {
    try {
        await Product.destroy({
            where:{
                id: req.params.id,
            },
        });

        return res.send({message:'Produto excluido'});

    } catch (error) {
        return res.status(400).send({ error: 'Erro ao excluir produto' });
    }
});

router.put('/:id', multer(multerConfig).single("file"), async(req, res) => {
    try {
        const {nome, preco, estoque} = req.body;

        product = await Product.update({
            img: req.body.img, 
            nome, 
            preco, 
            estoque
        },
            {
                where: {id: req.params.id},
            }
        );

        return res.send({message:"Produto atualizado"});

    } catch (error) {
        console.log(error)
        return res.status(400).send({ error: 'Erro ao atualizar produto' });
    }
});


module.exports = router