import React from 'react';
import logo from '../assets/alexLogo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="App-header">
      <ul className="pageLinks">
        <li><Link to="/">Home</Link></li>
        <li> <Link to="/list">List of Projects</Link></li>
      </ul>
      <img className="logo" src={logo} alt="alex-logo" />
    </div>
  );
}

export default Header;