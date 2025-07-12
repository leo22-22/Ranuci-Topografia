import React, { useState, useEffect } from 'react';

// Import all service images
import Servico1 from '../assets/img/serviço1.jpeg';
import Servico2 from '../assets/img/serviço2.jpeg';
import Servico3 from '../assets/img/serviço3.jpeg';
import Servico4 from '../assets/img/serviço4.jpeg';
import Servico5 from '../assets/img/serviço5.jpeg';
import Servico6 from '../assets/img/Servicos.png'; // Note: Renamed from original for clarity if 'Servicos.png' is distinct from 'serviço6.jpg'
import Servico7 from '../assets/img/serviço6.jpg';
import Servico8 from '../assets/img/serviço7.jpg';
import Servico9 from '../assets/img/serviço8.jpg';
import Servico10 from '../assets/img/serviço9.jpg';
import Servico11 from '../assets/img/serviço10.jpg';
import Servico12 from '../assets/img/serviço11.jpg';
import Servico13 from '../assets/img/serviço12.jpg';
import Mapa from '../assets/img/MAPA.jpg';
import Mapa2 from '../assets/img/MAPA2.jpg';
import CAR from '../assets/img/CAR.jpg';
import ImagemAerea1 from '../assets/img/IMAGEM-AEREA1.jpg';
import ImagemAerea2 from '../assets/img/IMAGEM-AEREA2.jpg';


function ServicosPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const serviceImages = [
    Servico1, Servico2, Servico3, Servico4, Servico5, Servico6,
    Servico7, Servico8, Servico9, Servico10, Servico11, Servico12, Servico13
  ];

  const showSlide = (index) => {
    if (index >= serviceImages.length) {
      setCurrentSlide(0);
    } else if (index < 0) {
      setCurrentSlide(serviceImages.length - 1);
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

  // Effect to manage active indicator class for the carousel
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
        <div className="about-us-content">
          <div className="about-us-image">
            <h1 style={{ color: '#006A3C', overflowX: 'hidden', fontSize: '50px' }}>SERVIÇOS</h1>
            <h2>EMPRESA ESPECIALIZADA EM TOPOGRAFIA, CARTOGRAFIA, GEODESIA, CONSULTORIA, GEORREFERENCIAMENTO, MEIO AMBIENTE, CAR (CADASTRO AMBIENTAL RURAL), SARE (SISTEMA INFORMATIZADO DE ACOMPANHAMENTO A RESTAURAÇÃO ECOLÓGICA), ACOMPANHAMENTO TÉCNICOS, LAUDOS, VISTORIAS, AEROLEVANTAMENTO, CALCULOS DE VOLUMES, CORTES, ATERROS, DEMARCAÇÕES, CURVAS DE NIVEIS, PROJETOS DE REGULARIZAÇÃO FUNDIARIA, RETIFICAÇÕES, DESMEMBRAMENTOS, RURAIS E URBANOS;
              <div>
                <div className="carousel" id="carousel-index">
                  <div className="carousel-images" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    {serviceImages.map((image, index) => (
                      <img
                        key={index}
                        style={{ border: '2px solid #006A3C' }}
                        src={image}
                        className="carousel-image"
                        alt={`Serviço ${index + 1}`}
                      />
                    ))}
                  </div>
                  <button className="carousel-button prev" onClick={prevSlide}>&#10094;</button>
                  <button className="carousel-button next" onClick={nextSlide}>&#10095;</button>
                  <div className="carousel-indicators">
                    {serviceImages.map((_, index) => (
                      <span
                        key={index}
                        className={`indicator ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => showSlide(index)}
                      ></span>
                    ))}
                  </div>
                </div>
              </div>
            </h2><br /><br />
            <h1 style={{ color: '#006A3C', overflowX: 'hidden', fontSize: '50px' }}>GEORREFERENCIAMENTO</h1>
            <h2>O georreferenciamento é o processo de mapeamento de um imóvel rural que consiste na identificação e referenciamento dos vértices de seu perímetro ao Sistema Geodésico Brasileiro (SGB), garantindo a determinação precisa de sua área e posição geográfica.

              Esse procedimento é fundamental para a regularização fundiária e registral dos imóveis rurais, atendendo às exigências da legislação vigente, estabelecida pela Lei nº 10.267/2001 e regulamentada pelos Decretos nº 4.449/2002 e nº 5.570/2005. O georreferenciamento assegura maior segurança jurídica, evita sobreposições de áreas e contribui para a organização e gestão do território rural.

              Além disso, a adoção desse método facilita processos de compra, venda, desmembramento e usucapião de propriedades, garantindo conformidade com as normas do Instituto Nacional de Colonização e Reforma Agrária (INCRA) e proporcionando maior transparência e confiabilidade aos registros imobiliários.</h2>
            <div className="map-images">
              <img style={{ width: '30%', border: '2px solid #006A3C' }} src={Mapa} alt="Mapa Georreferenciamento 1" />
              <img style={{ width: '30%', border: '2px solid #006A3C' }} src={Mapa2} alt="Mapa Georreferenciamento 2" /><br /><br /><br />
            </div>
          </div>
          <div className="about-us-image">
            <br /><h1 style={{ color: '#006A3C', fontSize: '50px' }}>Meio Ambiente - CAR - Cadastro Ambiental Rural</h1>
            <h2>O Cadastro Ambiental Rural (CAR) é um registro público eletrônico de abrangência nacional, obrigatório para todos os imóveis rurais, com o objetivo de integrar e sistematizar as informações ambientais das propriedades e posses rurais. Esse cadastro abrange dados sobre Áreas de Preservação Permanente (APPs), áreas de uso restrito, Reservas Legais, remanescentes de florestas e demais formas de vegetação nativa, além das áreas consolidadas. Sua base de dados é essencial para o controle, monitoramento, planejamento ambiental e econômico, além do combate ao desmatamento. <br /><br />

              A inscrição no CAR representa o primeiro passo para a obtenção da regularidade ambiental do imóvel rural e contempla: <br />

              ✔ Dados do proprietário, possuidor rural ou responsável pelo imóvel; <br />
              ✔ Documentação comprobatória da propriedade e/ou posse;<br />
              ✔ Informações georreferenciadas do perímetro do imóvel, incluindo áreas de interesse social e de utilidade pública;<br />
              ✔ Identificação da localização dos remanescentes de vegetação nativa, das Áreas de Preservação Permanente (APPs), áreas de Uso Restrito, áreas consolidadas e Reservas Legais<br />
              <br />
              A adesão ao CAR é fundamental para a gestão sustentável das propriedades rurais, garantindo conformidade com a legislação ambiental vigente e possibilitando o acesso a benefícios e incentivos governamentais voltados à regularização ambiental.
              <br />
            </h2>
            <img style={{ width: '30%', border: '2px solid #006A3C' }} src={CAR} alt="Cadastro Ambiental Rural" /><br /><br /><br />
          </div>
          <div className="about-us-image">
            <h1 style={{ color: '#006A3C', fontSize: '50px' }}>ORTOFOTO</h1>
            <h2>A ortofoto é um produto cartográfico de alta precisão geométrica, comparável a uma carta topográfica, porém com a vantagem de preservar a riqueza de detalhes de uma fotografia aérea. Por meio de processos de correção geométrica e eliminação de distorções causadas pelo relevo e pela perspectiva da câmera, a ortofoto garante precisão métrica, tornando-se uma ferramenta essencial para diversas aplicações.</h2>
            <h2>
              Graças a essas características, a ortofoto proporciona ao usuário uma experiência intuitiva e eficiente na extração de informações relevantes para suas atividades, sendo amplamente utilizada em levantamentos topográficos, planejamento urbano, monitoramento ambiental, engenharia civil, geoprocessamento, entre outras áreas.</h2>
            <h2>
              Esse recurso combina a confiabilidade de um mapa com o nível de detalhamento de uma imagem real, permitindo análises precisas e tomadas de decisão estratégicas com maior segurança e assertividade.</h2>
            <img style={{ width: '30%', border: '2px solid #006A3C' }} src={ImagemAerea1} alt="Imagem Aérea Ortofota 1" />
            <img style={{ width: '30%', border: '2px solid #006A3C', marginBottom: '50px' }} src={ImagemAerea2} alt="Imagem Aérea Ortofota 2" />
          </div>
        </div>
      </article>
    </main>
  );
}

export default ServicosPage;