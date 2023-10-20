import imagen from '../../assets/Facundo Fernandez.png';
import './home.css'
import gitHubIcon from '../../assets/gitHubIcon.png';
import linkedinIcon from '../../assets/LinkedinIcon.png';
import gmailIcon from '../../assets/GmailIcon.png';
import whatsappIcon from '../../assets/WhatsappIcon.png'
import globeTech from '../../assets/GlobeTech.mp4';
import argentinaTech from '../../assets/ArgentinaTech.jpg'
import { useState } from 'react';
import marcoTech from '../../assets/MarcoTech.png'

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



                <div style={{ display: 'flex' }}>

                    <div className='NeonWrapper'>
                        <div className='ImagenFacundoContainer'>
                            <div className="ImagenFacundo">
                                <img src={imagen}></img>
                            </div>
                        </div>
                    </div>
                    <div className='SobreMi'>
                        <h4>Me satisface mucho entender cómo funcionan las cosas. Desde que empecé a programar, he comprendido que este es el mundo al que pertenezco. Siento la necesidad de siempre tener un enigma en frente, una incógnita, un desafío que superar. Es esa curiosidad la que me hace aprender y crecer constantemente.</h4>
                    </div>
                    <div className='Tecnologias'>
                        <h2>tecnologias</h2>
                    </div>
                    <div className='Proyectos'>
                        <h2>proyectos</h2>
                    </div>
                    <div>
                        
                    </div>
                </div>





                <div className='Iconos'>
                    <div>
                        <img className='GitHubIcon' src={gitHubIcon}></img>
                    </div>
                    <div>
                        <img className='LinkedinIcon' src={linkedinIcon}></img>
                    </div>
                    <div>
                        <img className='GmailIcon' src={gmailIcon}></img>
                    </div>
                    <div>
                        <img className='WhatsappIcon' src={whatsappIcon}></img>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Home;