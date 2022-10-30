import React from 'react';

import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from 'reactstrap';

import imgprinc from "../assets/Imagenes/imagenprincipal.jpg";

import "../styles/home.css";

const Home = () => {
    return <Helmet title="Home">
        <section>
            <Container>
                <Row>
                    <Col lg="6" md="6">
                    <div className='contenido_imagen'>

                    </div>
                    </Col>

                    <Col lg="6" md="6">
                        <div className='imagen_prin'>
                        <img src={imgprinc} alt="imagenprincipal" className='w-100' />
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    </Helmet>
};

export default Home;