import React from 'react'
import logos from '../../assets/logos.png';
import sp from '../../assets/sp.png';
import git from '../../assets/git.png';
import {Container} from './styles';

const Footer = () =>{
    return(
        <Container>
            <div className="footer">
                <img src={sp} alt="sp" className="sp" />
                <div className="git-container">
                    <img src={git} alt="git-logo" className="git" />
                    <div className="gits-wrapper">
                        <a href="https://github.com/lucasilmor" target="_blank">/lucasilmor</a>
                        <a href="https://github.com/torrecilha" target="_blank">/torrecilha</a>
                    </div>
                </div>
                <img src={logos} alt="logos" className="logos" />
            </div>
        </Container>
    )
}

export default Footer