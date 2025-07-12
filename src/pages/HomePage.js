import React from 'react';

import WhatsappIcon from '../assets/img/Whatsapp.png';
import EmailIcon from '../assets/img/Email.png';
import InstagramIcon from '../assets/img/Insta.png';

function HomePage() {
return (
    <>
        <div className="foto-fundo">
            <main>
                <article id="first-article">
                    <h1>Topografia, Agrimensura, Georreferenciamento, Meio Ambiente, Regularização Fundiaria, Laudos e Pericías.</h1>
                    <h2>Atendendo com agilidade e qualidade, a mais de vinte anos buscamos constantemente desenvolver soluções inovadoras que otimizem e viabilizem os projetos de nossos clientes. <br />
                        Nosso compromisso é oferecer um atendimento de alto nível, prezando pela segurança, eficiência e satisfação dos clientes.
                    </h2>
                    <a
                        href="https://api.whatsapp.com/send?phone=5518991581019"
                        style={{ textDecoration: 'none', color: '#006A3C' }}
                    >
                        Solicite um orçamento no Whatsapp
                    </a>
                </article>
            </main>
        </div>

        <article id="fourth-article">
            <h3 className="fourth-article-celular">Fale Conosco</h3>
            <h1 className="fourth-article-celular">Tire suas duvidas conosco</h1>

            <span>
                <div>
                    <h3 className="fourth-article-tablet">Fale Conosco</h3>
                    <h1 className="fourth-article-tablet">Tire suas duvidas conosco</h1>

                    <div>
                        <a
                            href="https://api.whatsapp.com/send?phone=5518991581019"
                            style={{ textDecoration: 'none', color: '#006A3C' }}
                        >
                            <img src={WhatsappIcon} alt="Whatsapp" />
                        </a>
                        <div>
                            <a
                                href="https://api.whatsapp.com/send?phone=5518991581019"
                                style={{ textDecoration: 'none', color: '#006A3C', fontSize: '24px' }}
                            >
                                Whatsapp
                            </a>
                            <a
                                href="https://api.whatsapp.com/send?phone=5518991581019"
                                style={{ textDecoration: 'none', color: '#006A3C', fontSize: '24px' }}
                            >
                                Ranuci Topografia
                            </a>
                        </div>
                    </div>

                    <div>
                        <a
                            href="mailto:rannucci@uol.com.br?subject=RANUCI+TOPOGRAFIA&body=Entre+em+contato+conosco+e+tire+suas+d%C3%BAvidas!"
                            style={{ textDecoration: 'none', color: 'rgba(0, 106, 60, 0.4)' }}
                        >
                            <img src={EmailIcon} alt="Email" />
                        </a>
                        <div>
                            <h4>Email</h4>
                            <a href="mailto:rannucci@uol.com.br" style={{ textDecoration: 'none', color: '#006A3C', fontSize: '24px' }}>
                                rannucci@uol.com.br
                            </a>
                        </div>
                    </div>

                    <div>
                        <a
                            href="https://www.instagram.com/ranucitopografia/"
                            style={{ textDecoration: 'none', color: 'rgba(0, 106, 60, 0.4)' }}
                        >
                            <img src={InstagramIcon} alt="Instagram" />
                        </a>
                        <div>
                            <h4>Instagram</h4>
                            <a href="https://www.instagram.com/ranucitopografia/" style={{ textDecoration: 'none', color: '#006A3C', fontSize: '24px' }}>
                                @ranucitopografia
                            </a>
                        </div>
                    </div>
                </div>

                <span>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.3654452077033!2d-51.86015562479269!3d-22.645719979401777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94939b4b7c6f0c6b%3A0x6b7c0d0a7a0f6a2!2sAv.%20F%C3%A9lix%20Domingos%20Barrios%2C%2032%20-%20Residencial%20Matarazzo%2C%20Presidente%20Venceslau%20-%20SP%2C%2019406-070!5e0!3m2!1spt-BR!2sbr!4v1720803522100!5m2!1spt-BR!2sbr"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="mapa-endereco"
                    ></iframe>
                </span>
            </span>
        </article>
    </>
);
}

export default HomePage;