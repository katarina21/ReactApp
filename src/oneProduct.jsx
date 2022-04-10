import React from 'react'
import { BsPlusSquareFill } from "react-icons/bs";
import { BsFileMinusFill } from "react-icons/bs";

const OneProduct = ({product, onAdd, onRemove}) => {
    const design = { margin: 10, borderStyle: "dashed" };
  return (
    <div className="card">
        <img className='card-img-top' src={product.image} alt="Neka slika"/>
        <div className='card-body'>
            <h3 className='card-title'>{product.title}</h3>
            <p className='card-text'>{product.description}</p>
            <button className="btn" onClick={() => onAdd(product.id)}>
          <BsPlusSquareFill />
        </button>
        <button className="btn" onClick={() => onRemove(product.id)}>
          <BsFileMinusFill />
        </button>
         </div>
    </div>
  );
};

export default OneProduct