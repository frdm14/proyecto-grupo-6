import React, {useRef, useEffect} from 'react';

import { Container } from 'reactstrap';
import logo from "../../assets/Imagenes/logoJordan.png";
import {NavLink, Link} from "react-router-dom";
import carrito from "../../assets/Imagenes/carrito-de-compras.png";
import login from '../../assets/Imagenes/login.png';
import lupa from "../../assets/Imagenes/lupa.png";
import menuCel from "../../assets/Imagenes/menu celu.png";
import "../../styles/header.css";

import { useSelector, useDispatch } from 'react-redux';

import { cartUiActions } from "../../store/shopping-cart/cartUiSlice";

const nav_links = [
    {
        display: "Home",
        path: "./home"
},
    {
        display: "Ofertas",
        path: "./ofertas"
},
{
    display: "Categorias",
    path: "./categorias"
},

{
    display: "Nosotros",
    path: "./nosotros"
},

]

const Header = () => {
    const menuRef = useRef(null);
    const headerRef = useRef(null);
    const totalQuantity = useSelector(state=> state.cart.totalQuantity);
    const dispatch = useDispatch();

    const dotMenu = ()=> menuRef.current.classList.toggle("show_menu");

    const toggleCart = ()=>{
        dispatch(cartUiActions.toogle())
    }

    useEffect (() => {

        window.addEventListener('scroll', ()=>{
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
                headerRef.current.classList.add('header_shrink')
            }
            else{
                headerRef.current.classList.remove('header_shrink')
            }
        })
        return ()=> window.removeEventListener('scroll')
    },[])


    return <header className='header' ref={headerRef}>

        <Container>
            <div className='nav_wrapper d-flex align-items-center justify-content-between'>
                <div className='logo'>
                    <img src={logo} alt='logo' />
                    <h5>Sneakers Store</h5>
                </div>

                {/* menu */}
                <div className="navigation" ref={menuRef} onClick={dotMenu}>
                    <div className="menu d-flex align-item-center gap-5">
                        {
                            nav_links.map((item,index)=>(
                                <NavLink 
                                onClick={dotMenu}
                                to={item.path} key={index}
                                className={navClass => navClass.isActive ? "active_menu" : ""
                                }
                                >
                                
                                {item.display}</NavLink>
                            ))}
                    </div>
                </div>

            {/*iconos derechos barra de navegacion*/}
            <div className='nav_right d-flex align-items-center gap-3'>
                <div className='carrito' onClick={toggleCart}>
                <img src={carrito} alt='carrito' /><span>{totalQuantity}</span>
                </div>

                <div className="usuarios">
                    <Link to="/Login">
                        <img src={login} alt="login" />
                    </Link>
                </div>
                
                <div className="buscador">
                    <img src={lupa} alt="lupa" />
                </div>
                
                <div className="menu_celu" onClick={dotMenu}>
                    <img src={menuCel} alt="menuCel" />
                </div>

            </div>
            </div>
        </Container>

    </header>
}

export default Header;