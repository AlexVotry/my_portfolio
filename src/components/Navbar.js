import React, { useState } from 'react';
import logo from '../assets/alexLogo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [homeClass, setHomeClass] = useState('active');
  const [listClass, setListClass] = useState('');

  const changeClass = (page) => {
    if (page === 'home') {
      setHomeClass('active');
      setListClass('')
    } else {
      setListClass('active');
      setHomeClass('');
    }
  }

  return (
    <div className="navbar">
      <ul className="pageLinks">
        <li><Link to="/" onClick={() => changeClass('home')} className={homeClass}>Home</Link></li>
        <li> <Link to="/list" onClick={() => changeClass('list')} className={listClass}>List of Projects</Link></li>
      </ul>
      <img className="logo" src={logo} alt="alex-logo" />
    </div>
  );
}

export default Navbar;