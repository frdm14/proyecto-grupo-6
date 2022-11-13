import React from 'react'

import { Container, Row, Col } from 'reactstrap';

import categoriaImg1 from "../../../assets/Imagenes/futbol.png";
import categoriaImg2 from "../../../assets/Imagenes/basquet.png";
import categoriaImg3 from "../../../assets/Imagenes/runing.png";

import "../../../styles/categoria.css";

const datosCategoria = [
    {
        display:"Futbol",
        imgUrl: categoriaImg1
    },
    {
        display:"Basquet",
        imgUrl: categoriaImg2
    },
    {
        display:"Running",
        imgUrl: categoriaImg3
    },
]

const Categoria = () => {
    return <Container className='mt-0'>
        <Row>

            {datosCategoria.map((item, index) => (
                <Col lg="4" md="4" className='mb-3'>
                    <div className='item_categoria d-flex justify-content-center gap-3'>
                        <div className='img_categoria'>
                            <img src={item.imgUrl} alt="item_categoria" />
                        </div>
                        <h6>{item.display}</h6>
                    </div>
                </Col>
            ))}            
        </Row>
    </Container>
};

export default Categoria;