import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import {Container} from './styles';
import { useParams } from 'react-router-dom';

const Update = () =>{

    const serverURL = 'http://localhost:5000';

    function closeModal(){
        window.location.href='/'
    }

    const [_img, setImg] = useState('');
    const [_nome, setNome] = useState('');
    const [_preco, setPreco] = useState();
    const [_estoque, setEstoque] = useState();

    const { id } = useParams();

    useEffect(() => {
        axios.get(`${serverURL}/products/`+id)
        .then((response) =>{
            setImg(response.data.product.img);
            setNome(response.data.product.nome);
            setPreco(response.data.product.preco);
            setEstoque(response.data.product.estoque);
        });
      }, []);

      
    async function updateProduct(){
       const data = {img: _img, nome: _nome, preco: _preco, estoque: _estoque}
       data.path = {img: _img}

        await axios.put(`${serverURL}/products/`+id, data)
            .then(() => {
                window.location.href='/'
            })
    }

    return(
        <Container>
            <div className="register">
                <div id="modaal-background">
                    <div id="modal">
                        <h3 id="modal-title">Atualizar Produto</h3>
                        <i class="fas fa-times" onClick={() => closeModal()}></i>
                        <div id="modal-content">
                            <div id="image-wrapper">
                                <input type="txt" value={_img} onChange={e => setImg(e.target.value)}/>
                            </div>
                            <form>
                                <div class="input-container">
                                <label>Nome</label>
                                    <div class="input-wrapper">
                                        <input type="text" value={_nome} onChange={e => setNome(e.target.value)}/>
                                    </div>
                                </div>
                                <div class="input-container">
                                <label>Preço</label>
                                    <div class="input-wrapper">
                                        <input type="text" value={_preco} onChange={e => setPreco(e.target.value)}/>
                                    </div>
                                </div>
                                <div class="input-container">
                                <label>Estoque</label>
                                    <div class="input-wrapper gerenciar">
                                        <input type="number" min='0' value={_estoque} onChange={e => setEstoque(e.target.value)}/>
                                    </div>
                                </div>
                                <Button id="send-button" variant="contained" onClick={() => updateProduct()}>
                                    Salvar
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Update