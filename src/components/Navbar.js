import React from 'react';
import logo from '../img/logo.png';
import { NavLink, Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='navbar-main'>
      <div className='navbar'>
        <Link to='/' className='navbar-link'>
          <div className='logo-cont'>
            <img src={logo} alt='Logo' />
            <h1>
              Hair <br /> Saloon
            </h1>
          </div>
        </Link>
        <nav>
          <NavLink exact to='/' className='navbar-navlink'>
            Home
          </NavLink>
          <NavLink exact to='/beauty' className='navbar-navlink'>
            Beauty
          </NavLink>
          <NavLink exact to='/addstyle' className='navbar-navlink'>
            Add Style
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
