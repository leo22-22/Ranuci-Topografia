import React, { useState, useEffect } from 'react';

// Import team images (adjust paths as necessary)
import Equipe1 from '../assets/img/Equipe.png';
import Equipe2 from '../assets/img/equipe1.jpeg';
import Equipe3 from '../assets/img/equipe2.jpeg';
import Equipe4 from '../assets/img/equipe3.jpeg';

function EquipePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const teamImages = [Equipe1, Equipe2, Equipe3, Equipe4];

  const showSlide = (index) => {
    if (index >= teamImages.length) {
      setCurrentSlide(0);
    } else if (index < 0) {
      setCurrentSlide(teamImages.length - 1);
    } else {
      setCurrentSlide(index);
    }
  };

  const prevSlide = () => {
    showSlide(currentSlide - 1);
  };

  const nextSlide = () => {
    showSlide(currentSlide + 1);
  };

  useEffect(() => {
    const indicators = document.querySelectorAll('.carousel-indicators .indicator');
    indicators.forEach((indicator, index) => {
      if (index === currentSlide) {
        indicator.classList.add('active');
      } else {
        indicator.classList.remove('active');
      }
    });
  }, [currentSlide]);

  return (
    <main>
      <article id="third-article" style={{ backgroundColor: 'white', color: '#006A3C' }}>
        <h1 style={{ color: '#006A3C' }}>Nossa Equipe</h1>
        <h2>
          Contamos com uma equipe de profissionais altamente qualificados, credenciados e constantemente atualizados sobre as novas legislações e tendências do setor, assegurando um serviço eficiente, preciso e alinhado às exigências do mercado. <br />
          Nosso compromisso é oferecer soluções inovadoras e personalizadas, sempre priorizando a qualidade, a confiabilidade e a excelência em cada projeto realizado.
        </h2>
        <div>
          <div className="carousel" id="carousel-index">
            <div className="carousel-images" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {teamImages.map((image, index) => (
                <img
                  key={index}
                  style={{ border: '2px solid #006A3C' }}
                  src={image}
                  className="carousel-image"
                  alt={`Serviço ${index + 2}`}
                />
              ))}
            </div>
            <button className="carousel-button prev" onClick={prevSlide}>&#10094;</button>
            <button className="carousel-button next" onClick={nextSlide}>&#10095;</button>
            <div className="carousel-indicators">
              {teamImages.map((_, index) => (
                <span
                  key={index}
                  className={`indicator ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => showSlide(index)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}

export default EquipePage;