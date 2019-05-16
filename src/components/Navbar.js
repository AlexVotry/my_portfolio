import React, { useState } from 'react';
import logo from '../assets/alexLogo.png';
import { Link } from 'react-router-dom';
import NavItem from './NavItem';

const Navbar = () => {

  return (
    <div className="navbar">
      <ul className="pageLinks">
        <NavItem to='/home' index={true}>Home</NavItem>
        <NavItem to='/list'>List of Projects</NavItem>
      </ul>
      <img className="logo" src={logo} alt="alex-logo" />
    </div>
  );
}

export default Navbar;
