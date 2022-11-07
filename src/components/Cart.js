import React, { useState } from "react";
import { useSelector } from "react-redux";
import { addCart, delCart } from "../redux/action/index";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "./Cart.css";
import empty from "./empty.png";
import { MdArrowBack } from "react-icons/md";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const handleAdd = (product) => {
    dispatch(addCart(product));
  };
  const handleDel = (product) => {
    dispatch(delCart(product));
  };

  const emptyCart = () => {
    return (
      <div style={{ marginTop: "200px" }}>
        <center>
          <img src={empty} width="300px" height="200px" />
        </center>
      </div>
    );
  };

  const cartItems = (product) => {
    return (
      <div className="cartitems">
        <img
          src={product.image}
          alt={product.title}
          height="100px"
          width="100px"
          className="items"
        />
        <div className="count">
          <div className="title">{product.title}</div>
          <p className="lead  fw-bold ">
            {product.qty} X ${product.price} ={" "}
            <span className="text-danger">${product.qty * product.price}</span>
          </p>
          <button className="plus" onClick={() => handleAdd(product)}>
            +
          </button>
          <button className="minus" onClick={() => handleDel(product)}>
            -
          </button>
        </div>
      </div>
    );
  };
  const ItemsCount= () => {
    if (state.length !== 0) {
      return state.map(cartItems);
    } else {
      return emptyCart();
    }
  };

  return (
    <div>
      <ItemsCount/>
      <Link to="/Products">
        <button className="back" title="Click to go Home">
          <MdArrowBack />
        </button>
      </Link>
    </div>
  );
};
export default Cart;
