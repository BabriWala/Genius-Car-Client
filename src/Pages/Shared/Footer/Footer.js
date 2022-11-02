import React from "react";
import logo from '../../../assets/logo.svg'
import { AiOutlineGoogle,AiOutlineInstagram, AiFillLinkedin } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="footer py-32 px-36 bg-[#151515] text-white">
      <div>
        <img src={logo} alt="Logo" />
        <p>
        Edwin Diaz is a software and web 
        <br/>
        technologies engineer, a life coach 
        <br/>
        trainer who is also a serial .
        </p>
        <span className="mt-5 flex">
            <a className="bg-[#2c2c2c] p-2.5 mr-2 rounded-full" href="www.google.com"><AiOutlineGoogle /></a>
            <a className="bg-[#2c2c2c] p-2.5 mr-2 rounded-full" href="www.twitter.com"><BsTwitter /></a>
            <a className="bg-[#2c2c2c] p-2.5 mr-2 rounded-full" href="www.instagram.com"><AiOutlineInstagram /></a>
            <a className="bg-[#2c2c2c] p-2.5 mr-2 rounded-full" href="www.linkedin.com"><AiFillLinkedin /></a>
        </span>
      </div>
      <div>
        <span className="font-semibold text-xl mb-10 text-white">Services</span>
        <a href='/'className="link link-hover">Home</a>
        <a href='/'className="link link-hover">Service</a>
        <a href='/'className="link link-hover">Contact</a>
      </div>
      <div>
        <span className="font-semibold text-xl mb-10 text-white">Company</span>
        <a href='/'className="link link-hover">Why Car Doctor</a>
        <a href='/'className="link link-hover">About</a>
      </div>
      <div>
        <span className="font-semibold text-xl mb-10 text-white">Support</span>
        <a href='/'className="link link-hover">Support Center</a>
        <a href='/'className="link link-hover">Feedback</a>
        <a href='/'className="link link-hover">Accesbility</a>
      </div>
    </footer>
  );
};

export default Footer;
