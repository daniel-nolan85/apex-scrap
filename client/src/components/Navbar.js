import React, { useState, useContext } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faUser } from '@fortawesome/free-solid-svg-icons';
import { LoginContext } from '../context';

const Navbar = () => {
  const [shadowNav, setShadowNav] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  const [showLogin, setShowLogin] = useContext(LoginContext);

  window.onscroll = () => {
    if (window.scrollY > 0) {
      setShadowNav(true);
    } else {
      setShadowNav(false);
    }
  };

  window.onload = () => {
    if (window.scrollY > 0) {
      setShadowNav(true);
    } else {
      setShadowNav(false);
    }
  };

  return (
    <header className={`header ${shadowNav ? 'active' : ''}`}>
      <FontAwesomeIcon
        icon={openNav ? faTimes : faBars}
        id='menu-btn'
        onClick={() => setOpenNav(!openNav)}
      />
      <a href='#home' className='logo'>
        <span>Apex</span>Scrap
      </a>
      <nav className={`navbar ${openNav ? 'active' : ''}`}>
        <Link to='#home'>Home</Link>
        <Link to='#scrap'>Scrap My Vehicle</Link>
        <Link to='#reviews'>Reviews</Link>
        <Link to='#contact'>Contact</Link>
      </nav>
      <div id='login-btn' onClick={() => setShowLogin(true)}>
        <button className='btn'>Login</button>
        <FontAwesomeIcon icon={faUser} className='i' />
        <i className='far fa-user' />
      </div>
    </header>
  );
};

export default Navbar;
