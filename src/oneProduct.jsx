import React from 'react'
import { BsPlusSquareFill } from "react-icons/bs";
import { BsFileMinusFill } from "react-icons/bs";

const OneProduct = () => {
    const design = { margin: 10, borderStyle: "dashed" };
  return (
    <div className="card">
        <img className='card-img-top' src="https://picsum.photos/200" alt="Neka slika"/>
        <div className='card-body'>
            <h3 className='card-title'>Product name</h3>
            <p className='card-text'>
                Product description    
            </p>
            <button className="btn">
          <BsPlusSquareFill />
        </button>
        <button className="btn">
          <BsFileMinusFill />
        </button>
         </div>
    </div>
  );
};

export default OneProduct