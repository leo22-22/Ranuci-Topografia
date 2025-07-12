import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/Logo.png';
import '../assets/media.css';

function Header({ toggleMenu, isMenuOpen }) { 
  return (
    <header className="header-principal">
      <img src={Logo} alt="logo" />
      <h1>Ranuci Topografia</h1>

      <div className="hamburguer" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <nav id="menu" className={`menu-opcoes ${isMenuOpen ? 'show' : ''}`}>
        <ul>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><hr /></li>
          <li><Link to="/equipe" onClick={toggleMenu}>Equipe</Link></li>
          <li><hr /></li>
          <li><Link to="/servicos" onClick={toggleMenu}>Serviços</Link></li>
          <li><hr /></li>
          
          <li><Link to="/#contact" onClick={toggleMenu}>Contato</Link></li>
        </ul>
      </nav>

      <nav className="desktop-nav"> 
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/equipe">Equipe</Link></li>
          <li><Link to="/servicos">Serviços</Link></li>
          <li><Link to="/#contact">Contato</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;