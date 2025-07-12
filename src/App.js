import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import EquipePage from './pages/EquipePage';
import ServicosPage from './pages/ServicosPage';

import './assets/header.css';
import './assets/style.css';
import './assets/footer.css';
import './assets/media.css';

import WhatsappBranco from './assets/img/WhatsappBranco.png';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const toggleMenu = () => {
    setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen);
  };

  return (
    <Router>
      <Header toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/equipe" element={<EquipePage />} />
        <Route path="/servicos" element={<ServicosPage />} />
      </Routes>

      <Footer />
      <a href="https://api.whatsapp.com/send?phone=5518991581019" id="whastapp">
        <img src={WhatsappBranco} alt="whatsapp-logo" />
      </a>
    </Router>
  );
}

export default App;