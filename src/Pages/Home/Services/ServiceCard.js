import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";


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
          <Link to={`/checkout/${service._id}`}><button className=""><AiOutlineArrowRight/></button></Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
