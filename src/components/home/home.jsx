import imagen from '../../assets/Facundo Fernandez.png';
import './home.css';
import gitHubIcon from '../../assets/gitHubIcon.png';
import linkedinIcon from '../../assets/LinkedinIcon.png';
import gmailIcon from '../../assets/GmailIcon.png';
import whatsappIcon from '../../assets/WhatsappIcon.png'
import globeTech from '../../assets/GlobeTech.mp4';
import argentinaTech from '../../assets/ArgentinaTech.jpg'
import { useState } from 'react';
import marcoTech from '../../assets/MarcoTech.png'
import trendytech from '../../assets/gifTrendyTech.gif';
import trendyspot from '../../assets/gifTrendySpot.gif';
import html5 from '../../assets/html-5.png';
import javascript from '../../assets/JavascriptIcon.png'
import react from '../../assets/ReactIcon.png';
import postgres from '../../assets/PostgresIcon.ico';
import css from '../../assets/css-3.png';
import redux from '../../assets/ReduxIcon.png';
import node from '../../assets/NodejsIcon2.png';

const Home = () => {

    const [videoOn, setVideoOn] = useState(false)

    const handleVideoEnd = () => {
        setVideoOn(true);

    }

    return (
        <div className='HomeCss'>
            <div>

                {/* MAPA / VIDEO / ANIMACION DE LINEAS */}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0px' }}>
                    <div className="map">
                        <div className="ContenedorMapa">
                            <div className="VideoMapa">
                                {videoOn ? (
                                    <img className="ArgentinaMapa" src={argentinaTech} alt="Argentina" />
                                ) : (
                                    <video width="320" height="240" autoPlay muted onEnded={handleVideoEnd}>
                                        <source src={globeTech} type="video/mp4" />
                                    </video>
                                )}
                            </div>
                            <img src={marcoTech} className="FrameOverlay" />
                        </div>
                        <div className="point"></div>
                        <div className="line line-vertical"></div>
                        <div className="line line-horizontal"></div>
                        <div className="text">
                            Buenos Aires,
                            Mar del Plata
                        </div>
                    </div>
                    <div className='ContenedorNombre'>
                        <div className="futuristicFrame">
                            <div className="Nombre">
                                <h1>Facundo Gabriel Fernandez</h1>
                                <h2>Fullstack Developer</h2>
                            </div>
                        </div>
                    </div>
                </div>
                {/*CIERRE DE:  MAPA / VIDEO / ANIMACION DE LINEAS */}



                <div className='ContenedorMedio'>

                    <div className='NeonWrapper'>
                        <div className='ImagenFacundoContainer'>
                            <div className="ImagenFacundo">
                                <img src={imagen}></img>
                            </div>
                        </div>
                    </div>

                    <div className='SobreMi'>
                        <h4>Me satisface mucho entender</h4>
                        <h4>cómo funcionan las cosas.</h4>
                        <h4>Desde que empecé a programar,</h4>
                        <h4>he comprendido que este es el</h4>
                        <h4>mundo al que pertenezco.</h4>
                        <h4>Siento la necesidad de siempre</h4>
                        <h4>tener un enigma en frente, una</h4>
                        <h4>incógnita, un desafío que</h4>
                        <h4>superar. Es esa curiosidad la</h4>
                        <h4>que me hace aprender y crecer</h4>
                        <h4>constantemente.</h4>
                    </div>

                    <div className='Tecnologias'>

                    <div className='TituloProyectos'>Tecnologias</div>
                    <div className='TechSkillsIcons'>
                        <img src={html5} className='TechSkills'></img>
                        <img src={javascript} className='TechSkills'></img>
                        <img src={react} className='TechSkills'></img>
                        <img src={postgres} className='TechSkills'></img>
                        <img src={css} className='TechSkills'></img>
                        <img src={gitHubIcon} className='TechSkills'></img>
                        <img src={redux} className='TechSkills'></img>
                        <img src={node} className='TechSkills'></img>
                    </div>
                    </div>
                    <div>
                            <div className='TituloProyectos'>Proyectos</div>
                        <div style={{ display: 'flex' }}>
                            <div className='Proyecto1'>
                                <h4>--Trendy Tech--</h4>
                                <h4>e-commerce con fines academicos</h4>
                                <h4>venta de articulos electronicos</h4>
                                <div className="button-container">
                                    <a href="https://trendy-tech.onrender.com/" target="_blank" className="custom-button green-button">Link</a>
                                    <a href="https://github.com/Rey5440/TrendyTech-Front" target="_blank" className="custom-button purple-button">Front</a>
                                    <a href="https://github.com/Rey5440/TrendyTech-Back" target="_blank" className="custom-button purple-button">Back</a>

                                </div>
                            </div>
                            <img src={trendytech} width="180" /* height="auto" */></img>
                        </div>
                        <div>
                            <div style={{ display: 'flex' }}>
                                <div className='Proyecto1'>
                                    <h4>--Trendy Spot--</h4>
                                    <h4>e-commerce con fines academicos</h4>
                                    <h4>venta de indumentaria deportiva</h4>
                                    <div className="button-container">
                                        <a href="https://front-trendy-app.vercel.app/" target="_blank" className="custom-button green-button">Link</a>
                                        <a href="https://github.com/NitsugaSamot/front-trendy-app" target="_blank" className="custom-button purple-button">Front</a>
                                        <a href="https://github.com/NitsugaSamot/back-trendy-app" target="_blank" className="custom-button purple-button">Back</a>

                                    </div>
                                </div>
                                <img src={trendyspot} width="180" /* height="auto" */></img>
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>





                <div className='Iconos'>
                    <a href="https://github.com/Rey5440" target="_blank" rel="noopener noreferrer">
                        <img className='GitHubIcon' src={gitHubIcon} alt="GitHub" />
                    </a>
                    <a href="https://www.linkedin.com/in/facundo-fernandez-19369926a/" target="_blank" rel="noopener noreferrer">
                        <img className='LinkedinIcon' src={linkedinIcon} alt="LinkedIn" />
                    </a>
                    <a href="mailto:hellsingsd@gmail.com?subject=Contacto desde Portfolio&body=Hola Facundo, eh visto tu portfolio," target="_blank">
                        <img className='GmailIcon' src={gmailIcon} alt="Gmail" />
                    </a>
                    <a href="https://wa.me/5492983664119?text=Hola%20Facundo,%20eh%20visto%20tu%20portfolio,%20" target="_blank">
                        <img className='WhatsappIcon' src={whatsappIcon} alt="WhatsApp" />
                    </a>
                </div>



            </div>
        </div>
    )
}

export default Home;