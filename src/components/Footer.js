import React from 'react';

// Import footer images
import Logo from '../assets/img/Logo.png';
import EmailWhiteIcon from '../assets/img/EmailBranco.png';
import InstaWhiteIcon from '../assets/img/InstaBranco.png';
import WhatsappWhiteIcon from '../assets/img/WhatsappBranco.png';

function Footer() {
  return (
    <footer className="footer-principal">
      <div>
        <img src={Logo} alt="Logo" />

        <div>
          <a href="mailto:rannucci@uol.com.br?subject=RANUCI+TOPOGRAFIA&body=Entre+em+contato+conosco+e+tire+suas+d%C3%BAvidas!">
            <img src={EmailWhiteIcon} alt="EmailLogo" />
          </a>
          <a href="https://www.instagram.com/ranucitopografia/">
            <img src={InstaWhiteIcon} alt="InstaLogo" />
          </a>
          <a href="https://api.whatsapp.com/send?phone=5518991581019">
            <img src={WhatsappWhiteIcon} alt="WhatsLogo" />
          </a>
        </div>

        <h1>
          Endereço: Av. Felix Domingos Barrios, 32 - Bairro Residencial Matarazzo, Pres. Venceslau - SP, CEP - 19406-070
          <br />
          Horário de Funcionamento: <br />
          Segunda a Sexta das 8h às 11h e das 13h às 18h <br />
          Sábado e Domingo Fechado
        </h1>
      </div>

      <p>&copy;2025 Ranuci Topografia.Todos os direitos reservados</p>
    </footer>
  );
}

export default Footer;