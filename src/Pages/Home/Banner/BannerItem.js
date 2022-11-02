import React from 'react';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const BannerItem = ({slide}) => {
    const {image, id, prev, next} = slide;

    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
        <div className="carousel-img">
          <img src={image} alt="Slide Img" className="w-full" />
        </div>
        <div className="absolute transform -translate-y-1/2 left-24 top-1/4">
          <h1 className="text-6xl font-bold text-white">
            Affordable <br />
            Price for car <br />
            Servicing
          </h1>
        </div>
        <div className="absolute transform -translate-y-1/2 w-2/5 left-24 top-1/2">
          <p className="text-white text-xl">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
        </div>
        <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-3/4">
          <button className="mr-5 btn bg-transparent border-white text-white capitalize hover:border-transparent hover:text-white hover:bg-[#FF3811]">
            Discover More
          </button>
          <button className="btn bg-transparent border-white text-white capitalize hover:border-transparent hover:text-white hover:bg-[#FF3811]">
            Latest Project
          </button>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a
            href={`#slide${prev}`}
            className="btn btn-circle bg-[#0000009c] border-none hover:bg-[#FF3811] mr-5"
          >
            <AiOutlineArrowLeft />
          </a>
          <a
            href={`#slide${next}`}
            className="btn btn-circle bg-[#0000009c] border-none hover:bg-[#FF3811]"
          >
            <AiOutlineArrowRight />
          </a>
        </div>
      </div>
    );
};

export default BannerItem;