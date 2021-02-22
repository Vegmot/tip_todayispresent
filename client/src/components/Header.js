import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
  return (
    <>
      <header id='main-header'>
        <nav id='main-navbar' className='main-navbar'>
          <span id='toggle' className='toggle'>
            <i className='fa fa-bars hamburger fa-2x'></i>
          </span>

          <ul id='navbar-items' className='navbar-items'>
            <li id='navbar-item' className='navbar-item'>
              <Link to='/'>Home</Link>
            </li>

            <li id='navbar-item' className='navbar-item'>
              <Link to='/presents'>Presents</Link>
            </li>

            <li id='navbar-item' className='navbar-item'>
              <Link to='/about'>About</Link>
            </li>

            <li id='navbar-item' className='navbar-item'>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
