import React from 'react';
import { FooterBase } from './styles';
import logo from '../../assets/img/logo.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img className='Logo' src={logo} alt="Logo NessaFlix" />
      </a>
      <p>
        Criado por Vanessa durante a
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
