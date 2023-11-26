import "./contactus.css";
import "../homePage/home.css"
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div>
      <div className="top-header">
        <Header />
        <div className="home-header-contact">
          <div className="hero-section">
            <div className="hero-one hero">
              <h1>
                CONTACT INFORMATION
              </h1>
            </div>
            <div className="hero-two hero">
            <p>We are thrilled to hear from you</p>
          </div>
          </div>
        </div>
      </div>
      <main className="main-body">
        <div className="form-header">
          <div className="form-flex-body">
            <div className="form-contact-us-header">
              <div className="form-contact">
                <ul>
                  <li>
                    <div className="form-contact-icon">
                      <p><i className="fa-solid fa-phone"></i></p>
                    </div>
                    <div className="form-contact-details">
                      <p className="note-head">Phone Number</p>
                      <p className="link">
                        <Link to="tel:+1110002342">+111 000 2342</Link>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="form-contact-icon">
                      <p><i className="fa-solid fa-envelope"></i></p>
                    </div>
                    <div className="form-contact-details">
                      <p className="note-head">Email Address</p>
                      <p className="link">
                        <Link to="mailto:Info@farmbot.com">Info@farmbot.com</Link>
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="form-contact-icon">
                      <p><i className="fa-solid fa-location-dot"></i></p>
                    </div>
                    <div className="form-contact-details">
                      <p className="note-head">Location</p>
                      <p className="link">No.111 Suit Avenue Lagos</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="get-in-touch-header">
              <div className="send-message-header">
                <div className="message-home">
                  <div className="message-description">
                    <p>Get in Touch</p>
                    <p>Our dedicated customer support team is here 
                      to assist you with any inquiries or concerns you may have.</p>
                  </div>
                  <div className="fill-form-header">
                    <form className="fill-form">
                      <div className="form-container flex fill-form">
                        <label htmlFor="full-name">Full Name</label>
                        <input
                          className="input-holder"
                          type="text"
                          placeholder="Your name"
                          id="full-name"
                        />
                      </div>
                      <div className="form-container flex fill-form">
                        <label htmlFor="email">Email Address</label>
                        <input
                          className="input-holder"
                          type="email"
                          placeholder="Johdoe@gmail.com"
                          id="email"
                        />
                      </div>
                      <div className="form-container flex fill-form">
                        <label htmlFor="phone-number">Phone Number</label>
                        <input
                          className="input-holder"
                          type="text"
                          placeholder="Enter your phone number"
                          id="phone-number"
                        />
                      </div>
                      <div className="form-container flex fill-form">
                        <label htmlFor="message">Message</label>
                        <textarea
                          rows="10"
                          className="input-holder"
                          placeholder="Enter message"
                          id="message"></textarea>
                      </div>
                      <div className="form-container flex fill-form">
                        <button className="click-btn login-btn">Send Message</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="location-header">
          <div className="location-head">
            <div className="location-description">
                <p>Locate Us on The Map</p>
                <p>Navigating Your Way to Agricultural Excellence</p>
              </div>
            </div>
            <div className="location-map">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31708.89916783032!2d3.3587856!3d6.5705059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9228fa2a3999%3A0xd7a8324bddbba1f0!2sIkeja%2C%20Lagos!5e0!3m2!1sen!2sng!4v1701017138282!5m2!1sen!2sng" 
                title="location"
                width="100%" 
                height="450" 
                style={{border:0}}
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;
