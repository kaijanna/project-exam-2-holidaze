import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { User, ChevronDown } from "lucide-react";

import logo from "../../assets/logos/logo-primary.png";

function Navbar() {
  const auth = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  function handleLogout() {
    auth?.logout();
    setIsMenuOpen(false);
  }

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const userInitial = auth?.user?.name
    ? auth.user.name.charAt(0).toUpperCase()
    : "?";

  return (
    <header className="site-header">
      <nav className="navbar">
        <Link to="/" className="navbar-logo-link">
          <img src={logo} alt="Holidaze logo" className="navbar-logo" />
        </Link>

        <div className="navbar-links">
          <Link to="/">Explore</Link>

          {auth?.isLoggedIn ? (
            <>
              <Link to="/my-bookings">Bookings</Link>

              {auth.user?.venueManager ? (
                <Link to="/create-venue">Create venue</Link>
              ) : null}

              <div className="profile-dropdown" ref={dropdownRef}>
                <button
                  type="button"
                  className="profile-button"
                  onClick={toggleMenu}
                >
                  <span className="profile-icon-wrapper">
                    <User size={18} />
                  </span>

                  <span>{auth.user?.name}</span>

                  <ChevronDown size={16} className="dropdown-chevron" />
                </button>

                {isMenuOpen ? (
                  <div className="profile-menu">
                    <Link to="/profile" onClick={() => setIsMenuOpen(false)}>
                      My profile
                    </Link>

                    {auth.user?.venueManager ? (
                      <Link
                        to="/manager-bookings"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Manager bookings
                      </Link>
                    ) : null}

                    <button type="button" onClick={handleLogout}>
                      Logout
                    </button>
                  </div>
                ) : null}
              </div>
            </>
          ) : (
            <>
              <Link to="/register">Register</Link>

              <Link to="/login" className="navbar-login">
                Login
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
