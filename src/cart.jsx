import React from "react";

import './App.css';

const Cart = (props) => {
    const cart = props.cart;
    if (cart) {
      return <div className="cart">Number of items: {cart}</div>;
    }
    return <div className="cart">Cart is empty.</div>
};

export default Cart;