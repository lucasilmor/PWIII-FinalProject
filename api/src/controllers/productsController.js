const {Router} = require('express');
const {Product} = require('../models');
const multer = require('multer');
const multerConfig = require('../config/multer')

const router = Router();

router.get('/', async(req, res) =>{
    try {
        const products = await Product.findAll()

        return res.send({ products });

    } catch (error) {
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

router.post('/', multer(multerConfig).single('img'), async(req, res) => {
    console.log(req.file);
    try {
        const product = Product.create({...req.body});
        console.log(product)

        return res.send({message:"Produto criado com sucesso"});
        
    } catch (error) {
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

router.put('/:id', async(req, res) => {
    try {
        const {img, nome, preco, estoque} = req.body;

        await Product.update({
            img, 
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
        return res.status(400).send({ error: 'Erro ao atualizar produto' });
    }
});


module.exports = router