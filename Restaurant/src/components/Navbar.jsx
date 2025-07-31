import React, {useState} from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='navbar'>
            <div className='navbar-logo'>Spice Palace</div>

            {/* Hamburger Icon */}
            <div className='hamburger' onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>
            
            <ul className={isOpen ? 'navbar-links active' : 'navbar-links'}>
                <li><a href="#">Menu</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Gallery</a></li>
                <li><a href="#">Order</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;

