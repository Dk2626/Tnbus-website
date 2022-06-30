import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import Logo from '../Assests/tnbus1.png';

const Navbar = () => {
  return (
    <div className='navMain'>
      <div className='navLogo'>
        <img src={Logo} alt='logo' />
      </div>
      <div>
        <NavLink
          to='/'
          className={({ isActive }) => (isActive ? 'selected' : 'nav-links')}>
          Home
        </NavLink>
        <NavLink
          to='/about'
          className={({ isActive }) => (isActive ? 'selected' : 'nav-links')}>
          About
        </NavLink>
        <NavLink
          to='/contact'
          className={({ isActive }) => (isActive ? 'selected' : 'nav-links')}>
          Contact
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
