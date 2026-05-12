import { Link } from 'react-router-dom';
import logo from '../../assets/logos/logo-primary.png';

function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar">
        <Link to="/" className="navbar-logo-link">
          <img src={logo} alt="Holidaze logo" className="navbar-logo" />
        </Link>

        <div className="navbar-links">
          <Link to="/">Explore</Link>
          <Link to="/profile">My profile</Link>
          <Link to="/my-bookings">Bookings</Link>
          <Link to="/login" className="navbar-login">
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;