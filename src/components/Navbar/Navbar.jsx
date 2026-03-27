import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo.png'
import dollarIcon from '../../assets/dollar.png'


const Navbar = ({ availableBalance }) => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Fixture", path: "/fixture" },
    { name: "Teams", path: "/teams" },
    { name: "Schedules", path: "/schedules" },
  ];

  return (
    <div className="navbar max-w-6xl mx-auto px-4 mt-4">

      {/* Left */}
      <div className="flex-1 flex items-center">

        {/* Mobile Menu Button */}
        <div className="lg:hidden mr-2">
          <button
  onClick={() => setOpen(!open)}
  className="btn btn-ghost text-xl transition-all duration-300 hover:bg-gradient-to-r hover:from-pink-400 hover:to-yellow-400 hover:text-black hover:scale-110 hover:shadow-lg"
>
  {open ? "✕" : "☰"}
</button>
        </div>

        <Link to="/" className="btn btn-ghost">
  <img src={logo} alt="logo" className="w-10 h-10 md:w-14 md:h-14 lg:w-18 lg:h-18" />
</Link>
      </div>

      {/* Desktop Menu */}
      <div className="flex-1 hidden lg:flex justify-center">
        <ul className="menu menu-horizontal">
          {links.map((link) => (
            <li key={link.name}>
              <NavLink to={link.path}>
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Right */}
      <div className="flex-1 flex justify-end">
        <span className="mr-2">{availableBalance}</span> Coin <span><img src={dollarIcon} alt="" className="w-5 h-5 ml-2"/></span>
      </div>

      {/* 🔥 Mobile Dropdown Menu */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-white text-black shadow-lg p-4 lg:hidden z-50">
          <ul className="space-y-3">
  {links.map((link) => (
    <li key={link.name}>
      <NavLink
        to={link.path}
        onClick={() => setOpen(false)}
        className={({ isActive }) =>
          `block px-3 py-2 rounded-md transition duration-200 ${
            isActive
              ? "text-pink-500 font-semibold bg-gray-100"
              : "hover:bg-gray-200 hover:text-black"
          }`
        }
      >
        {link.name}
      </NavLink>
    </li>
  ))}
</ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;