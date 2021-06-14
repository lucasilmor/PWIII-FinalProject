import React, {useState} from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import {Container} from './styles';

const Register = () =>{

    const serverURL = 'http://localhost:5000';

    function closeModal(){
        document.getElementById('modal-background').style.display = "none";
    }

    const [_img, setImg] = useState('');
    const [_nome, setNome] = useState('');
    const [_preco, setPreco] = useState();
    const [_estoque, setEstoque] = useState();

    async function saveProduct(){

       let data = {img: _img, nome: _nome, preco: _preco, estoque: _estoque}

        await axios.post(`${serverURL}/products`, data)
            .then(() => {
                window.location.reload(false);
            })
    }
    
    return(
        <Container>
            <div className="register">
                <div id="modal-background">
                    <div id="modal">
                        <h3 id="modal-title">Cadastrar Produto</h3>
                        <i class="fas fa-times" onClick={() => closeModal()}></i>
                        <div id="modal-content">
                            <div id="image-wrapper">
                                <input type="file" value={_img} onChange={e => setImg(e.target.value)}/>
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
                                        <input type="number" min="0" value={_estoque} onChange={e => setEstoque(e.target.value)}/>
                                    </div>
                                </div>
                                <Button id="send-button" variant="contained" onClick={() => saveProduct()}>
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

export default Register