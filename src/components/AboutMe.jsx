import React from 'react';
import { Button, Card } from 'react-bootstrap';

const AboutMe = () => {

    return (
        <div>
            <Card style={{
                position: 'relative', top: '100px', width: "80%",
                height: "90%", padding: '2rem'
            }}>
                <Card.Img style={{ width: '20%' }} variant="top" src="images/info.png" />
                <Card.Body>
                    <Card.Title>¡Hola! Soy el Creador de esta página web</Card.Title>
                    <Card.Text style={{ textAlign: 'left' }}>
                        ¡Hola a todos! 👋 Soy un programador Full Stack con experiencia en:
                        <ul>
                            <li>Javascript</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>React Js</li>
                            <li>Redux</li>
                            <li>PostgreSQL</li>
                            <li>Node.js</li>
                        </ul>
                        He creado un directorio completo de restaurantes locales en la ciudad de Sincelejo con sus cuentas de Instagram y WhatsApp en un solo lugar 📱📲. Además, puedo ayudarte a crear una página web personalizada para tu negocio o proyecto. Me aseguraré de que tu sitio web sea 100% personalizado para satisfacer tus necesidades y requisitos. Si estás interesado en mi servicio de desarrollo web, contáctame para que podamos discutir más detalles. También estoy abierto a propuestas laborales en el área de desarrollo de software.
                        <h6>¡así que no dudes en contactarme si estás buscando un programador Full Stack con habilidades en las tecnologías mencionadas anteriormente!</h6>
                    </Card.Text>
                    <div>
                        <section className="contacts" id="contacts">
                            <h2 className="start center">Contáctame</h2>
                            <div className="all-info">
                                <a href="https://wa.link/tknhoc">
                                    <div className="icons-contacts center" >
                                        <svg width="40" height="40" viewBox="0 0 41 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M36.967 30.0389V35.2337C36.9689 35.716 36.875 36.1933 36.6913 36.6352C36.5076 37.0771 36.2383 37.4737 35.9005 37.7997C35.5627 38.1257 35.1638 38.3739 34.7296 38.5284C34.2953 38.6829 33.8351 38.7403 33.3785 38.6969C28.3132 38.1179 23.4477 36.2972 19.1728 33.3809C15.1955 30.7223 11.8235 27.1751 9.29623 22.9913C6.5143 18.4739 4.78305 13.3307 4.24273 7.97831C4.2016 7.49946 4.25569 7.01685 4.40158 6.56121C4.54746 6.10556 4.78194 5.68686 5.09008 5.33176C5.39822 4.97667 5.77327 4.69295 6.19136 4.49869C6.60944 4.30443 7.0614 4.20387 7.51845 4.20341H12.4567C13.2556 4.19514 14.03 4.49273 14.6358 5.0407C15.2415 5.58867 15.6371 6.34964 15.7489 7.18177C15.9573 8.84422 16.3439 10.4765 16.9012 12.0476C17.1226 12.6674 17.1706 13.3409 17.0393 13.9885C16.908 14.636 16.603 15.2304 16.1604 15.7013L14.0699 17.9004C16.4132 22.2355 19.8254 25.825 23.9464 28.29L26.037 26.0909C26.4845 25.6253 27.0496 25.3045 27.6651 25.1663C28.2807 25.0282 28.921 25.0787 29.5102 25.3116C31.0037 25.8979 32.5554 26.3045 34.1357 26.5238C34.9353 26.6424 35.6656 27.0661 36.1876 27.7142C36.7097 28.3623 36.987 29.1897 36.967 30.0389Z"
                                                stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <p className="center">Numero Telefonico</p>
                                        <p className="center">+57 301 405 6354</p>
                                    </div>
                                </a>
                                <div className="icons-contacts center">
                                    <svg width="40" height="40" viewBox="0 0 40 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6.9919 7.66663H33.0082C34.7968 7.66663 36.2602 9.22507 36.2602 11.1298V31.909C36.2602 33.8138 34.7968 35.3722 33.0082 35.3722H6.9919C5.20328 35.3722 3.73987 33.8138 3.73987 31.909V11.1298C3.73987 9.22507 5.20328 7.66663 6.9919 7.66663Z"
                                            stroke="#EDE5DC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M36.2602 11.1299L20 23.2511L3.73987 11.1299" stroke="#EDE5DC" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <h4 className="center"></h4>
                                    <p className="center" id="myInput">Email</p>
                                    <p className="center">dantealigheri.1998@gmail.com</p>
                                </div>
                            </div>
                        </section>
                    </div>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
        </div>
    );
};

export default AboutMe;