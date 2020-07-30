import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';
import Button from '../Button';
import './style.css';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={logo} alt="Nessaflix Logo" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo vídeo
      </Button>

    </nav>
  );
}

export default Menu;
