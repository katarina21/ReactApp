import React from 'react'
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";

function navBar({cartNum}) {
  return (
    <div className="navBar">
              <Link to="/">Kafeterija</Link>
      <Link to="/cart" className="cart-items">
        <BsCart2 style={{ marginLeft: 30 }} />
        <div className="cart-num">{cartNum}</div>
      </Link>
    </div>
  )
}

export default navBar