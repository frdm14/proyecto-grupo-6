

import React from 'react'
import {Routes, Route, Navigate } from 'react-router-dom';

import Home from '../pages/Home';
import Ofertas from '../pages/Ofertas';
import Categorias from "../pages/Categorias";
import Card from "../pages/Card";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Nosotros from '../pages/Nosotros';


const Routers = () => {
    return (
    <Routes>
    <Route path='/' element={<Navigate to='/Home' />} />
    <Route path='/Home' element={<Home/>} />
    <Route path='/Ofertas' element={<Ofertas/>} />
    <Route path='/Categorias' element={<Categorias/>} />
    <Route path='/gift cards' element={<Card/>} />
    <Route path='/checkout' element={<Checkout/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/register' element={<Register/>} />
    <Route path='/nosotros' element={<Nosotros/>} />
    </Routes>
    );
};

export default Routers;