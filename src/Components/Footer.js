import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';
import playStore from '../Assests/playStore.png';

const Footer = () => {
  return (
    <div className='Footmain'>
      <div className='navMains'>
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
      <div className='footDetails'>
        <div className='cont'>
          <p>Contact us</p>
          <div>
            <label className='footlabel1'>Email: </label>
            <label className='footlabel2'>inevitablecodes@gmail.com</label>
          </div>
          <div>
            <label className='footlabel1'>Mobile: </label>
            <label className='footlabel2'>04362288220</label>
          </div>
        </div>
        <div className='mobileStore'>
          <div className='storeContent'>
            <p>We also available in...</p>
          </div>
          <div className='dualStore'>
            <a
              href='https://play.google.com/store/apps/details?id=com.tnBus'
              target='_blank'
              rel='noopener noreferrer'>
              <div className='playStore'>
                <img src={playStore} alt='playStore' />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className='copyrights'>
        <p className='text-center'>
          &copy; 2022 <span>TN Bus</span> (A Brand of Lotsatravel) | All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
