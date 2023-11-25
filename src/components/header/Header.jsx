import { Link } from 'react-router-dom'
import './header.css'
import logo from '../../assets/logo.svg'

const Header = () => {
  return (
    <>
    <nav>
        <div className="header-logo">
          <Link to="/" className="link-bottom-btn">
            <img src={logo} alt="logo" />
          </Link>
          <span style={{'display':'none'}}>
            <button type="button">
              <i className="fa-solid fa-bars"></i>
            </button>
          </span>
        </div>
        <div className="nav-sign-login-header">
            <div className="nav-list">
                <ul>
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
                    <Link to="/">
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
      </nav>
    </>
  )
}

export default Header