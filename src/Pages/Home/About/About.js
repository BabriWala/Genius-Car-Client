import React from "react";
import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero my-20">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 relative">
          <img src={person} alt="Person" className="w-4/5 h-full rounded-lg shadow-2xl" />
          <img src={parts} alt="Parts" className="w-3/5 right-5 top-1/2 border-8 absolute rounded-lg shadow-2xl" />
        </div>
        <div className="w-1/2">
          <span className="text-[#FF3811] font-semibold ">About Us</span>
          <h1 className="text-5xl font-bold mt-5">
            We are qualified <br /> & of experience <br />
            in this field
          </h1>
          <p className="py-6 text-[#737373]">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p className="pb-6 pt-0 text-[#737373]">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <button className="btn bg-[#FF3811] border-transparent text-white capitalize hover:border-[#FF3811] hover:bg-transparent hover:text-[#FF3811]">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
