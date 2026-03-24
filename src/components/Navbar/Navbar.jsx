import React from 'react';
import logoImg from "../../assets/logo.png";
import dollarImg from '../../assets/dollar.png';


const Navbar = () => {
  return (
    <div>
       {/* Navbar Section  */}
    <div className="navbar max-w-6xl mx-auto">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">
      <img className='w-15 h-15' src={logoImg} alt="" />
    </a>
  </div>
  <div className="flex items-center">
    <span  className='mr-2'>60000000</span>
    <span className='mr-2'>Coin</span>
    <img className='w-5 h-5' src={dollarImg} alt="" />
  </div>
</div>
    </div>
  );
};

export default Navbar;