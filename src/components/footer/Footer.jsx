import { Link } from 'react-router-dom'
import './footer.css'
import logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <footer className="footer-body">
      <div className="footer-head">
        <div className="footer-header">
          <div className="logo-footer">
            <div className="footer-logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="footer-note">
              <p>
                FarmBot is a platform dedicated to <br /> empower farmers
                worldwide by providing <br /> them with the tools and knowledge
                needed <br /> to make informed decisions.
              </p>
            </div>
            <div className="follow-us-head web-follow">
              <p>Follow us on</p>
              <div className="follow-link">
                <ul>
                  <li>
                    <Link to="/">
                      <button type="button">
                        <i className="fa-brands fa-facebook-f"></i>
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <button type="button">
                        <i className="fa-brands fa-instagram"></i>
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <button type="button">
                        <i className="fa-brands fa-twitter"></i>
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="all-links-contact-header">
            <div className="links-header all-links">
              <p>Links</p>
              <ul>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link>What we do</Link>
                </li>
                <li>
                  <Link to='/about-us'>About Us</Link>
                </li>
                <li>
                  <Link>Blog</Link>
                </li>
                <li>
                  <Link to='/contact-us'>Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="contact-header all-links">
              <p>Contact Us</p>
              <ul>
                <li>
                  <Link to="tel:+1110002342">
                    <span>
                      <i className="fa-solid fa-phone"></i>
                    </span>{" "}
                    &nbsp; +111 000 2342
                  </Link>
                </li>
                <li>
                  <Link to="mailto:Info@farmbot.com">
                    <span>
                      <i className="fa-solid fa-envelope"></i>
                    </span>{" "}
                    &nbsp; Info@farmbot.com
                  </Link>
                </li>
                <li>
                  <Link to="/">
                    <span>
                      <i className="fa-solid fa-location-dot"></i>
                    </span>{" "}
                    &nbsp; No.111 Suit Avenue Lagos
                  </Link>
                </li>
              </ul>
            </div>
            <div className="help-header all-links">
              <p>Links</p>
              <ul>
                <li>
                  <Link>Privacy Policy</Link>
                </li>
                <li>
                  <Link>Terms & Conditions</Link>
                </li>
              </ul>
            </div>
            <div className="follow-us-head mobile-follow">
              <p>Follow us on</p>
              <div className="follow-link">
                <ul>
                  <li>
                    <Link to="/">
                      <button type="button">
                        <i className="fa-brands fa-facebook-f"></i>
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <button type="button">
                        <i className="fa-brands fa-instagram"></i>
                      </button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <button type="button">
                        <i className="fa-brands fa-twitter"></i>
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="subscribe-header">
          <form>
            <div className="sub-header">
              <div className="sub-head">
                <p>Subscribe to get latest updates on our offers</p>
              </div>
              <div className="fill-form-head">
                <input type="text" placeholder="Enter Email" />
                <button type="submit">Subscribe</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
