import logo from '../assets/alexLogo.png';
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <div className="navbar">
      <ul className="pageLinks">
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/list'>List of Projects</Link></li>
      </ul>
      <img className="logo" src={logo} alt="alex-logo" />
    </div>
  );
}

export default Navbar;
