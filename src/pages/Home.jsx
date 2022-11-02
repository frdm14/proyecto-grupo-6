import React from 'react';

import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from 'reactstrap';

import imgprinc from "../assets/Imagenes/imagenprincipal.jpg";
import isegur from "../assets/Imagenes/iconoseguridad.png";
import "../styles/home.css";


import {Link} from "react-router-dom";

import Categoria from "../components/Categorias/categoria/Categoria";

const Home = () => {
    return <Helmet title="Home">
        <section>
            <Container>
                <Row>
                    <Col lg="6" md="6">
                    <div className='contenido_imagen'>
                        <h5 className='mb-3'>
                            Importamos desde USA
                        </h5>
                            <h1 className='mb-4 titulohome'>
                                <span>MARCA </span> JORDAN 
                            </h1>
                                <p>Si te gustan las AIR JORDAN,<br />contactate con nostoros
                                </p>
                                    <div className='botonhome d-flex align-items-center gap-5 mt-4'>
                                        <button className='registrate d-flex align-items-center justify-content-between'>
                                            Registrate
                                        </button>
                                        <button className='boton_cate'>
                                            <Link to="/Categorias">
                                                Categorias
                                            </Link>
                                        </button>
                                    </div>
                                    <div className='detalle d-flex align-items-center gap-5 mt-3'>
                                        <p className='d-flex align-items-center gap-2'><span className='icono_registro'><img src={isegur} alt="iconoSeguridad" /></span>
                                        100 % Seguro</p>
                                    </div>
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
        <section>
            <Categoria />
        </section>

    </Helmet>
};

export default Home;