import React from 'react'
import logo from '../../assets/logo.png';
import cps from '../../assets/cps.png';
import profile from '../../assets/profile.png';
import {Container} from './styles';

const Header = () =>{
    return(
        <Container>
            <div className="header">
                <img src={logo} alt="logo" className="logo" />
                <h1>ETEC
                    <span>ia</span>    
                </h1>
                <img src={cps} alt="centro-paula-souza" className="cps" />
                <img src={profile} alt="perfil" className="profile" />
            </div>
        </Container>
    )
}

export default Header