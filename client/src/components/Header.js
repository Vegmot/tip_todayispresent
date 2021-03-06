import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
  // opens/closes menu with hamburger button
  const toggleHandler = e => {
    e.preventDefault();
    const navMenu = document.getElementById('navbar-items');
    const toggleIcon = document.getElementById('toggle');

    // check if navMenu !== null or I'll have to double click this to open/close
    if (navMenu && !navMenu.classList.contains('showActiveMenu')) {
      navMenu.classList.add('showActiveMenu');
      toggleIcon.style.color = '#f6f6f6';
      toggleIcon.innerHTML = "<i class='fas fa-times fa-2x' />";
    } else {
      navMenu.classList.remove('showActiveMenu');
      toggleIcon.style.color = '#350b40';
      toggleIcon.innerHTML = "<i class='fa fa-bars fa-2x' />";
    }
  };

  // closes mobile look menu bar when clicking any item
  const tapToCloseMenuHandler = e => {
    e.preventDefault();
    const navMenu = document.getElementById('navbar-items');
    const toggleIcon = document.getElementById('toggle');

    if (navMenu && navMenu.classList.contains('showActiveMenu')) {
      navMenu.classList.remove('showActiveMenu');
      toggleIcon.style.color = '#350b40';
      toggleIcon.innerHTML = "<i class='fa fa-bars fa-2x' />";
    } else {
      return;
    }
  };

  return (
    <>
      <header id='main-header'>
        <nav id='main-navbar' className='main-navbar'>
          <span id='toggle' className='toggle' onClick={e => toggleHandler(e)}>
            <i className='fa fa-bars fa-2x'></i>
          </span>

          <ul id='navbar-items' className='navbar-items'>
            <li
              id='navbar-item'
              className='navbar-item'
              onClick={e => tapToCloseMenuHandler(e)}
            >
              <Link to='/'>Home</Link>
            </li>

            <li
              id='navbar-item'
              className='navbar-item'
              onClick={e => tapToCloseMenuHandler(e)}
            >
              <Link to='/presents'>Presents</Link>
            </li>

            <li
              id='navbar-item'
              className='navbar-item'
              onClick={e => tapToCloseMenuHandler(e)}
            >
              <Link to='/gfeed'>G-Feed</Link>
            </li>

            <li
              id='navbar-item'
              className='navbar-item'
              onClick={e => tapToCloseMenuHandler(e)}
            >
              <Link to='/chat'>Chat</Link>
            </li>

            <li
              id='navbar-item'
              className='navbar-item'
              onClick={e => tapToCloseMenuHandler(e)}
            >
              <Link to='/about'>About</Link>
            </li>

            <li
              id='navbar-item'
              className='navbar-item'
              onClick={e => tapToCloseMenuHandler(e)}
            >
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
