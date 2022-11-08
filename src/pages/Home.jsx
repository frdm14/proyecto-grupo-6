import React from 'react';

import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from 'reactstrap';

import imgprinc from "../assets/Imagenes/imagenprincipal.jpg";
import isegur from "../assets/Imagenes/iconoseguridad.png";
import "../styles/home.css";

import {Link} from "react-router-dom";

import Categoria from "../components/Categorias/categoria/Categoria";

import pagosImg01 from "../assets/Imagenes/tarjeta-de-credito.png";
import pagosImg02 from "../assets/Imagenes/digital-wallet.png";
import pagosImg03 from "../assets/Imagenes/coupon.png";

import products from "../assets/datos/productos";

import imgCategoriaOfertas from "../assets/Imagenes/futbol-pelota.png";
import imgCategoriaOfertas1 from "../assets/Imagenes/juego-de-basquetbol.png";
import imgCategoriaOfertas2 from "../assets/Imagenes/running-icono.png";

import Tarjetas from "../components/Categorias/tarjetaDeProductos/tarjetas";
import { useEffect } from "react";
import { useState } from "react";

const formasPago = [
    {
        titulo: "Tarjetas Bancarias",
        imgUrl: pagosImg01,
        descripcion:"12 cuotas sin interes en productos seleccionados"
    },
    {
        titulo: "Billeteras Virtuales",
        imgUrl: pagosImg02,
        descripcion:"Aceptamos todas las billeteras del mercado"
    },
    {
        titulo: "Descuentos",
        imgUrl: pagosImg03,
        descripcion:"Por pago en efectivo o transferencia"
    },
]

const Home = () => {

    const [category, setCategory]= useState("Todas")
    const [allProducts, setAllProducts] = useState(products)

    useEffect(() => {

        if(category === "TODAS"){
            setAllProducts(products)
        }

        if(category === "BASQUET"){
            const filteredProducts = products.filter(item=> item.category === "Basquet")

            setAllProducts(filteredProducts)
        }

        if(category === "FUTBOL"){
            const filteredProducts = products.filter(item=> item.category === "Futbol")

            setAllProducts(filteredProducts)
        }

        if(category === "RUNNING"){
            const filteredProducts = products.filter(item=> item.category === "Running")

            setAllProducts(filteredProducts)
        }
    },[category]);


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
        <section className= "">
            <Categoria />
        </section>
        <section className='pt-0 pb-0'>
            <Container>
                <Row>
                    <Col lg="12" className='text-center '>
                        <h5 className='subtitulo mb-1'>BENEFICIOS</h5>
                        <h2 className='titulo'>En Todos Nuestros Locales</h2>
                        <h2 className='titulo'>
                            Tenemos la <span>Mejor FINANCIACION</span>
                        </h2>
                    </Col>

                    {formasPago.map((item, index) => (
                        <Col lg="4" md="4" key={index} className="mt-5">
                        <div className='mediospago text-center px-5 py-3'>
                            <img src={item.imgUrl} alt="imagenes-pago" className='w-23 mb-3' />
                            <h5 className='fw-bold mb-3'>{item.titulo}</h5>
                            <p>{item.descripcion}</p>
                        </div>
                    </Col>
                    ))}
                    
                </Row>
            </Container>
        </section>
            <section>
                <Container>
                    <Row>
                        <Col lg="12" className='text-center'>
                            <h2>Ofertas del Dia</h2>
                        </Col>
                        <Col lg="12">
                            <div className='dia_categoria d-flex align-item-center justify-content-center gap-4'>
                                <button className={'all_btn ${category === "TODAS" ? todasBtn : "" }'}onClick={()=> setCategory("TODAS")}>Todas
                                </button>
                                <button className={'d-flex align-item-center gap-2 ${category === "FUTBOL" ? "todasBtn" : "" }'} onClick={()=> setCategory("FUTBOL")}>
                                    <img src={imgCategoriaOfertas} alt="" />Futbol
                                    </button>
                                <button className={'d-flex align-item-center gap-2 ${category === "BASQUET" ? "todasBtn" : "" }'} onClick={()=> setCategory("BASQUET")}>
                                    <img src={imgCategoriaOfertas1} alt="" />Basquet
                                    </button>
                                <button className={'d-flex align-item-center gap-2 ${category === "RUNNING" ? "todasBtn" : "" }'} onClick={()=> setCategory("RUNNING")}>
                                    <img src={imgCategoriaOfertas2} alt="" />Running
                                    </button>
                            </div>
                        </Col>
                        {allProducts.map((item) => (
                        <Col lg="3" md="4" key={item.id} className="mt-5">
                            <Tarjetas item={item} />
                        </Col>
                        ))};
                    </Row>
                </Container>
            </section>
            
    </Helmet>
};


export default Home;