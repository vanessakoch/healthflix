import React from 'react';
import logo from '../../assets/img/logo.png';
import Button from '../Button';
import ButtonLink from './components/ButtonLink';
import './style.css'

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">   
                <img className="Logo" src={logo} alt="Nessaflix Logo"/>
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
            </Button>

        </nav>
    );
}

export default Menu;