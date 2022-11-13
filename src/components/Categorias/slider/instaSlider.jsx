
import React from 'react';
import Slider from "react-slick";

import antiparras from "../../../assets/Imagenes/antiparras.jpg";
import basquetPelotas from "../../../assets/Imagenes/basquet-pelotas.jpg";
import futbolPelotas from "../../../assets/Imagenes/futbol-pelotas.jpg";
import gorras1 from "../../../assets/Imagenes/gorras-1.jpg";
import gorras2 from "../../../assets/Imagenes/gorras-2.jpg";
import guantesBox from "../../../assets/Imagenes/guantes-box.jpg";
import mochilas from "../../../assets/Imagenes/mochilas.jpg";
import pesas from "../../../assets/Imagenes/pesas.jpg";
import snowboard from "../../../assets/Imagenes/snowboard.jpg";
import tenisPelotas from "../../../assets/Imagenes/tenis-pelotas.jpg";
import voleybol from "../../../assets/Imagenes/voleybol.jpg";

import "../../../styles/instaSlider.css";

const InstaSlider = () => {
  
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 2000,
    swipeToSlide: true,
    slidesToShow: 4,
    slidesToScroll: 3
  };
  return (<Slider {...settings}>
          <div className=' slider_contenido d-flex  justify-content-around '>
            <img src={antiparras} alt="antiparras" className='w-50 rounded'/>
          </div>
          <div className='slider_contenido d-flex   justify-content-around '>
            <img src={basquetPelotas} alt="basquet-pelotas" className='w-50 rounded'/>
          </div>
          <div className='slider_contenido d-flex  justify-content-around '>
            <img src={futbolPelotas} alt="futbol-pelotas" className='w-50 rounded'/>
          </div>
          <div className='slider_contenido d-flex  justify-content-around '>
            <img src={gorras1} alt="gorras1" className='w-50 rounded'/>
          </div>
          <div className='slider_contenido d-flex  justify-content-around '>
            <img src={gorras2} alt="gorras2" className='w-50 rounded'/>
          </div>
          <div className='slider_contenido d-flex  justify-content-around '>
            <img src={guantesBox} alt="guantes-box" className='w-50 rounded'/>
          </div>
          <div className='slider_contenido d-flex  justify-content-around '>
            <img src={mochilas} alt="mochilas" className='w-50 rounded'/>
          </div>
          <div className='slider_contenido d-flex  justify-content-around '>
            <img src={pesas} alt="pesas" className='w-50 rounded'/>
          </div>
          <div className='slider_contenido d-flex  justify-content-around '>
            <img src={snowboard} alt="snowboard" className='w-50 rounded'/>
          </div>
          <div className='slider_contenido d-flex  justify-content-around '>
            <img src={tenisPelotas} alt="tenis-pelotas" className='w-50 rounded'/>
          </div>
          <div className='slider_contenido d-flex  justify-content-around '>
            <img src={voleybol} alt="voleybol" className='w-50 rounded'/>
          </div>
          </Slider>
  );
  };


export default InstaSlider;