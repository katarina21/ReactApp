import React from "react";

const Cart = (props) => {
    const cart = props.cart;
    if (cart) {
      return <div>Num of items: {cart}</div>;
    }
    return <div>Cart is empty.</div>
};

export default Cart;