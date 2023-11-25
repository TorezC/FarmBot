import { Link } from 'react-router-dom'
import './header.css'
import logo from '../../assets/logo.svg'
import { useState } from 'react'

const Header = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle)
    }

  return (
    <>
    <nav>
        <div className="header-logo">
          <Link to="/" className="link-bottom-btn">
            <img src={logo} alt="logo" />
          </Link>
          <span className="menu-home">
            <button type="button" onClick={handleToggle} className="menubtn">
              <i className="fa-solid fa-bars"></i>
            </button>
          </span>
        </div>
        <div className={toggle ? "login-sign-list show" : "login-sign-list"}>
          <div className="nav-sign-login-header">
              <div className="nav-list">
                <ul>
                  <div className="close-btn-head">
                    <button type="button" onClick={handleToggle} className="close-btn">
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                  </div>
                  <li>
                  <Link to="/">Home</Link>
                  </li>
                  <li>
                  <Link to="/">What we do</Link>
                  </li>
                  <li>
                  <Link to="/">About Us</Link>
                  </li>
                  <li>
                  <Link to="/">Blog</Link>
                  </li>
                  <li>
                  <Link to="/contact-us">Contact Us</Link>
                  </li>
                </ul>
              </div>
              <div className="login-signup-head">
                  <div className="login">
                      <Link to="/login">
                      <button type="button">Log In</button>
                      </Link>
                  </div>
                  <div className="signup">
                      <Link to="/signup">
                      <button type="button">Sign Up</button>
                      </Link>
                  </div>
              </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header