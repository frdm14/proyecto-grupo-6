import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import logo from "../../assets/Imagenes/Jordan. Nike.com-1.png";
import send from "../../assets/Imagenes/send.png";
import insta from "../../assets/Imagenes/instagram.png";
import face from "../../assets/Imagenes/facebook.png";
import twit from "../../assets/Imagenes/twitter.png";
import linked from "../../assets/Imagenes/linkedin.png";

import "../../styles/footer.css";

const Footer = () => {
    return <footer className='footer'>
        <Container>
            <Row>
                <Col lg="3" md="4" sm="6">
                <div className='footer_logo text-start'>
                    <img src={logo} alt='logo' />
                    <h5>Sneakers Store</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium iure cumque atque  
                    soluta harum assumenda cupiditate. Distinctio nemo eaque quibusdam inventore!</p>
                </div>
                </Col>

                <Col lg="3" md="4" sm="6">
                    <h5 className='footer_title'>Atendemos</h5>
                    <ListGroup className='atencion'>
                        <ListGroupItem className='atendemos border-0 ps-0'>
                            <span>Dias y Horarios</span>
                            <p>Lunes a Sabado de 0900 a 2000 hs</p>
                        </ListGroupItem>
                    </ListGroup>
                </Col>

                <Col lg="3" md="4" sm="6">
                <h5 className='footer_title'>Contacto</h5>
                    <ListGroup className='atencion'>
                        <ListGroupItem className='atendemos border-0 ps-0'>
                            <p>Direccion: Av. La Plata, 3150, Buenos Aires</p>
                        </ListGroupItem>

                        <ListGroupItem className='atendemos border-0 ps-0'>
                            <p>Telefono: 011-4568972</p>
                            <p>Email: Sneakerstore@hotmail.com</p>
                        </ListGroupItem>
                    </ListGroup>
                </Col>

                <Col lg="3" md="4" sm="6">
                <h5 className='footer_title'>Newsletter</h5>
                <p>Suscribite para recibir todas nuestras novedades</p>
                <div className='newsletter'>
                    <input type="Email" placeholder='Escribe tu mail' />
                    <span><img src={send} alt="enviar" /></span>
                </div>
                </Col>
            </Row>

            <Row className='mt-5'>
            <Col lg="6" md="6">
            <p className='texto_copyright'>Copyright - 2022, Made by Team 6 (Full Stack Dev) of Academy by Numen. </p>
            </Col>
            <Col lg="6" md="6">
            <div className='Redes_sociales d-flex align-items-center gap-4 justify-content-end'>
                <p className='m-0'>Seguinos en:</p>
                <span><a title="instagram" href="https://www.instagram.com/"><img src={insta} alt="instagram" /></a>
                </span>

                <span><a title="facebook" href="https://es-la.facebook.com/"><img src={face} alt="facebook" /></a>
                </span>

                <span><a title="twitter" href="https://twitter.com/"><img src={twit} alt="twitter" /></a>
                </span>

                <span><a title="linkedin" href="https://ar.linkedin.com/"><img src={linked} alt="linkedin" /></a>
                </span>
            </div>
            </Col>
            </Row>
        </Container>
    </footer>
    };

export default Footer;