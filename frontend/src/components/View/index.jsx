import React, {useState, useEffect} from 'react'

import axios from 'axios';
import {Cont} from '../View/styles'


import { makeStyles } from '@material-ui/core/styles';


import Paper from '@material-ui/core/Paper';


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup'; 


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    title: {
      flexGrow: 1,
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
  
  }));


const serverURL = 'http://localhost:5000';

const View = () =>{
    const classes = useStyles();
    
    const [product, setProducts] = useState([]);

    useEffect(() => {
        axios.get(`${serverURL}/products`)
        .then((response) =>{
            setProducts(response.data.products)
        });
      }, []);

      async function handleDelete(id){
        if(window.confirm("Deseja excluir este Produto?")){
          axios.delete(`${serverURL}/products/`+id)
          .then(() =>{
            window.location.reload(false);
          })
        }
      }

      function showModal(){
        document.getElementById('modal-background').style.display = "flex";
      }
      
      return(
        <Cont>
            <div className="view">
                <h1>LISTA - PRODUTOS</h1>
                <div className="table">
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell >cod</TableCell>
            <TableCell >img</TableCell>
            <TableCell >Nome</TableCell>
            <TableCell >Preço</TableCell>
            <TableCell >Estoque (u)</TableCell>
            <TableCell >Data de Entrada</TableCell>
            <TableCell align="right">Ações</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {product.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell ><img src ={row.img} width="50px" height="50px" alt="img product"/></TableCell>
              <TableCell >{row.nome}</TableCell>
              <TableCell >{row.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</TableCell>
              <TableCell >{row.estoque}</TableCell>
              <TableCell >{new Date(row.createdAt).toLocaleString('pt-br')}</TableCell>
              <ButtonGroup aria-label="outlined primary button group">
              <Button color="primary" href={'/update/'+(row.id)} >Atualizar</Button>
              <Button color="secondary" onClick={() => handleDelete(row.id)}>Excluir</Button>
              </ButtonGroup> 
            </TableRow>
          ))}
        </TableBody>

      </Table>
    </TableContainer>
            </div>
            </div>
            <div id="plus-icon-wrapper">
              <i class="fas fa-plus-circle" onClick={() => showModal()}></i>
            </div>
        </Cont>
      
    )
}

export default View;
