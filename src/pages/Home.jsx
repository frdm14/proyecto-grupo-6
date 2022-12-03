import axios from 'axios';
import React, {useState, useEffect} from 'react';

import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';


import isegur from "../assets/Imagenes/iconoseguridad.png";
import "../styles/home.css";

import {Link} from "react-router-dom";

import Categoria from "../components/Categorias/categoria/Categoria";

import pagosImg01 from "../assets/Imagenes/tarjeta-de-credito.png";
import pagosImg02 from "../assets/Imagenes/digital-wallet.png";
import pagosImg03 from "../assets/Imagenes/coupon.png";

import imgCategoriaOfertas from "../assets/Imagenes/futbol-pelota.png";
import imgCategoriaOfertas1 from "../assets/Imagenes/juego-de-basquetbol.png";
import imgCategoriaOfertas2 from "../assets/Imagenes/running-icono.png";

import Tarjetas from "../components/Categorias/tarjetaDeProductos/tarjetas";

import logoNike from "../assets/Imagenes/nike.png";
import logoAdidas from "../assets/Imagenes/adidas.png";
import logoNewba from "../assets/Imagenes/new balance.png";
import logoPuma from "../assets/Imagenes/puma.png";
import logoUmbro from "../assets/Imagenes/umbro.png";

import compraOnline from "../assets/Imagenes/fotocompraonline.jpg";

import InstaSlider from '../components/Categorias/slider/instaSlider';

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

    const [category, setCategory]= useState([]);
    
    

    useEffect(() => {

        const obtenerProductos = async ()=> {
            const baseUrl = "http://localhost:3000/productos";
            const response = await axios.get(baseUrl);
            
            console.log(response.data);
            setCategory(category.data);
        };obtenerProductos();
        
        if(category === "TODAS"){
            setCategory(category)
        }

        if(category === "BASQUET"){
            const filteredProducts = category.filter(item=> item.category === "Basquet")

            setCategory(filteredProducts)
        }

        if(category === "FUTBOL"){
            const filteredProducts = category.filter(item=> item.category === "Futbol")

            setCategory(filteredProducts)
        }

        if(category === "RUNNING"){
            const filteredProducts = category.filter(item=> item.category === "Running")

            setCategory(filteredProducts)
        }
        
    },[]);
    

    return <Helmet title="Home">
        <section>
            <Container>
                <Row>
                    <Col lg="5" md="6">
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

                    <Col lg="7" md="6">
                        <div className='imagen_prin'>
                        <iframe width="100%" height="315" src="https://www.youtube-nocookie.com/embed/VnE7m8JI7MY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" autoplay muted allowfullscreen></iframe>
                        
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
        <section className= "cate">
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
            <section id='ofertas_dia' className='pt-3'>
                <Container>
                    <Row>
                        <Col lg="12" className='text-center'>
                            <h2>Ofertas del Dia</h2>
                        </Col>
                        <Col lg="12">
                            <div className='dia_categoria d-flex align-item-center justify-content-center gap-4'>
                                <button className={`all_btn ${category === "TODAS" ? "todasBtn" : "" }`}onClick={()=> setCategory("TODAS")}>Todas
                                </button>
                                <button className={`d-flex align-item-center gap-2 ${category === "FUTBOL" ? "todasBtn" : "" }`} onClick={()=> setCategory("FUTBOL")}>
                                    <img src={imgCategoriaOfertas} alt="" />Futbol
                                    </button>
                                <button className={`d-flex align-item-center gap-2 ${category === "BASQUET" ? "todasBtn" : "" }`} onClick={()=> setCategory("BASQUET")}>
                                    <img src={imgCategoriaOfertas1} alt="" />Basquet
                                    </button>
                                <button className={`d-flex align-item-center gap-2 ${category === "RUNNING" ? "todasBtn" : "" }`} onClick={()=> setCategory("RUNNING")}>
                                    <img src={imgCategoriaOfertas2} alt="" />Running
                                    </button>
                            </div>
                        </Col>
                        {category.map(item => (
                        <Col lg="3" md="4" key={item.category} className="mt-5">
                            <Tarjetas item={item} />
                        </Col>
                        ))}
                    </Row>
                </Container>
            </section>
            <section className='pt-2'>
                <Container >
                    <Row>
                        
                        <div className='marcas_dispo'>
                            <h2 className='titulo_marcas'>Marcas Disponibles</h2>
                            <p>Disfruta de nuestro showroom de las diferentes marcas</p>
                        </div>
                        
                            <div className='logos_marcas '>
                            <img src={logoNike} alt="nike" />
                            <img src={logoAdidas} alt="adidas" />
                            <img src={logoNewba} alt="newbalance" />
                            <img src={logoPuma} alt="puma" />
                            <img src={logoUmbro} alt="umbro" />
                            
                        </div>                        
                    </Row>
                </Container>
            </section>
            <section className='beneficios_compra-online'>
                <Container>
                    <Row>
                        <Col lg='6' md='6' >
                            <img src={compraOnline} alt="foto-compra-online" className='w-100'/>
                        </Col>

                        <Col lg='6' md='6'>
                            <div className='beneficios_online'>
                            <h2 className='titulo_compras_online'>
                                Beneficios de Comprar Online
                            </h2>
                            <ListGroup className='mt-2'>
                                <ListGroupItem className='border-0 ps-0'>
                                    <p className='d-flex align-items-center gap-1'>Envios gratis a todo el pais en compras superiores a $ 150.</p>
                                </ListGroupItem>
                                <ListGroupItem className='border-0 ps-0'>
                                    <p className='d-flex align-items-center gap-1'>Primer cambio sin costo.</p>
                                </ListGroupItem>
                                <ListGroupItem className='border-0 ps-0'>
                                    <p className='d-flex align-items-center gap-1'>Realizando tu primera compra online, obtenes un 20% OFF en la siguiente compra.
                                    </p>
                                </ListGroupItem>
                                <ListGroupItem className='border-0 ps-0'>
                                    <p className='d-flex align-items-center gap-1'>Registrandote en la pagina obtenes puntos
                                        con tus COMPRAS.
                                    </p>
                                </ListGroupItem>
                            </ListGroup>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className='carrusel_final'>
                <Container>
                    <Row>
                    <div className='carrusel mb-4' >
                        <h2 className='titulo_carrusel'>Ingresa a nuestro <span>Instagram</span></h2>
                        <p className='descripcion_carrusel'>Alli encontraras todos los elementos y accesorios necesarios para el deporte amateur y profesional</p>
                    </div>
                    <InstaSlider></InstaSlider>
                    </Row>
                </Container>
            </section>
    </Helmet>
};


export default Home;