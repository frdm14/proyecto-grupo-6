import React, {useRef} from 'react';

import { Container } from 'reactstrap';
import logo from "../../assets/Imagenes/Jordan. Nike.com-1.png";
import {NavLink, Link} from "react-router-dom";
import carrito from "../../assets/Imagenes/carrito-de-compras.png";
import login from '../../assets/Imagenes/login.png';
import lupa from "../../assets/Imagenes/lupa.png";
import menuCel from "../../assets/Imagenes/menu celu.png";

import "../../styles/header.css";

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
    display: "Gifts Cards",
    path: "./gifts cards"
},
{
    display: "Nuestras Marcas",
    path: "./nuestras marcas"
},
{
    display: "Nosotros",
    path: "./nosotros"
},

]

const Header = () => {
    const menuRef = useRef(null)
    const dotMenu = ()=> menuRef.current.classList.toggle("show_menu")

    return <header className='header'>

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
                <div className='carrito'>
                <img src={carrito} alt='carrito' />
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