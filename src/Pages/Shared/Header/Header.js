import React from "react";
import logo from '../../../assets/logo.svg'

const Header = () => {
  return (
    <div className="navbar bg-base-100 h-20">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >

          </ul>
        </div>
        <a href='/' className="btn btn-ghost normal-case text-xl">
            <img src={logo} alt='Logo'/>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
     
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn bg-transparent border-[#FF3811] text-[#FF3811] capitalize hover:border-transparent hover:text-white hover:bg-[#FF3811]">Appointment</button>
      </div>
    </div>
  );
};

export default Header;
