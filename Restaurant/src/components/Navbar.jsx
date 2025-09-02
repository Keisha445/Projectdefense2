import React, { useState } from 'react';
import { FaBars, FaTimes, FaHome, FaListAlt, FaQuoteLeft, FaUtensils, FaSearch, FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='navbar'>
      {/* Logo */}
      <div className='navbar-logo'>
        <FaUtensils /> Spice<span> Palace</span>
      </div>

      {/* Hamburger Icon */}
      <div className='hamburger' onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Links */}
      <ul className={isOpen ? 'navbar-links active' : 'navbar-links'}>
        <li><a href="#"><FaHome /> Home</a></li>
        <li><a href="#"><FaUtensils /> Services</a></li>
        <li><a href="#"><FaListAlt /> Menu</a></li>
        <li><a href="#"><FaQuoteLeft /> Gallery</a></li>
      </ul>

      {/* Search + Cart */}
      <div className='navbar-icons'>
        <div className='search-bar'>
          <input type='text' placeholder='Search...' />
          <button><FaSearch /></button>
        </div>
        <a href='#' className='cart-icon'>
          <FaShoppingCart />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
