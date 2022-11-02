import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";


const ServiceCard = ({service}) => {
    const {img, title, price} = service;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions justify-between text-xl text-[#FF3811] font-semibold">
        <span>Price: ${price}</span>
          <button className=""><AiOutlineArrowRight/></button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
