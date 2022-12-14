/* eslint-disable no-template-curly-in-string */
import React from "react";

import "../../../styles/tarjetas.css"

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/shopping-cart/cartslice";

const Tarjetas = (props) => {
    const {id, title, image01, price} = props.item;
    const dispatch = useDispatch()

    const addToCart = ()=> {
        dispatch(cartActions.addItem({
            id,
            title,
            image01,
            price
        }))
    }

    return <div className="product_item" >
        <div className="product_img">
            <img src={image01} alt="product-img" className="w-50" />
        </div>

        <div className="product_content">
            <h5><Link to={'/ofertas/${id}'}>{title}</Link></h5>
            <div className="d-flex flex-column justify-content-between">
                <span className="product_price">${price}</span>
                <button className="agregarCarrito_btn" onClick={addToCart}>Agregar al Carrito</button>
            </div>
        </div>
    </div>
    
}

export default Tarjetas;