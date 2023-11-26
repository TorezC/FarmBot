import React from 'react'
import "./about.css";
import "../homePage/home.css"
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import aboutUsFull from '../../assets/aboutUsFull.png'
import johnAlex1 from '../../assets/johnAlex1.png'
import johnAlex2 from '../../assets/johnAlex2.png'
import johnAlex3 from '../../assets/johnAlex3.png'
import { Link } from 'react-router-dom';
const aboutUs = () => {
  return (
    <div>
        <div className="top-header">
        <Header />
        <div className="home-header-about">
          <div className="hero-section">
            <div className="hero-one hero">
              <h1>
                About Us 
              </h1>
            </div>
            <div className="hero-two hero">
            <p>All about FarmBot</p>
          </div>
          </div>
        </div>
      </div>
      <main className="main-body about-main-body">
        <div className="about-header-flex">
          <div className="what-we-do-img-header">
            <div className="what-header">
              <div className="who-we-are-header">
                <p>Who We Are</p>
                <p>In FarmBot,  innovation meets agriculture! 
                  Founded with a passion for revolutionizing the farming landscape. 
                  FarmBot introduces a new era of smart farming. 
                  Our automated systems are designed to seamlessly 
                  integrate with your agricultural operations, offering 
                  precise and data-driven solutions for crop management, 
                  irrigation, and more.Here's a glimpse into who we are 
                  and the values that fuel our mission</p>
              </div>
              <div className="our-mission-header">
                <p>Our Mission</p>
                <p>At FarmBot, our mission is clear — to empower 
                  farmers globally by providing them with the 
                  knowledge and tools needed to make informed 
                  decisions. We are committed to fostering 
                  sustainability, efficiency, and prosperity within 
                  the agricultural sector. We believe in creating 
                  a global community where farmers can learn from 
                  each other, share insights, and leverage AI to 
                  optimize their operations.</p>
              </div>
            </div>
            <div className="what-img-header">
              <img src={aboutUsFull} alt="about-us" />
            </div>
          </div>
          <div className="meet-our-team-header">
            <div className="meet-our-team-description">
              <p>Meet Our Team</p>
              <p> our platform is driven by a diverse 
                team of experts committed to empowering 
                farmers worldwide. 
              </p>
            </div>
            <div className="our-team-header">
              <div className="our-team-flex">
                <div className="team-header">
                  <div className="team-img">
                    <figure>
                      <img src={johnAlex1} alt="member" />
                      <figcaption>
                        <div className="team-member-details">
                          <p className="member-name">John Alex</p>
                          <span className="member-special">Agricultural Specialist</span>
                          <ul>
                            <li>
                              <Link to="/">
                                <button type="button" className="team-link">
                                  <i className="fa-brands fa-facebook"></i>
                                </button>
                              </Link>
                            </li>
                            <li>
                              <Link to="/">
                                <button type="button" className="team-link">
                                  <i className="fa-brands fa-twitter"></i>
                                </button>
                              </Link>
                            </li>
                            <li>
                              <Link to="/">
                                <button type="button" className="team-link">
                                  <i className="fa-brands fa-google"></i>
                                </button>
                              </Link>
                            </li>
                            <li>
                              <Link to="/">
                                <button type="button" className="team-link">
                                  <i className="fa-brands fa-instagram"></i>
                                </button>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                </div>
                <div className="team-header">
                  <div className="team-img">
                    <figure>
                      <img src={johnAlex2} alt="member" />
                      <figcaption>
                        <div className="team-member-details">
                          <p className="member-name">John Alex</p>
                          <span className="member-special">Co Founder</span>
                          <ul>
                            <li>
                              <Link to="/">
                                <button type="button" className="team-link">
                                  <i className="fa-brands fa-facebook"></i>
                                </button>
                              </Link>
                            </li>
                            <li>
                              <Link to="/">
                                <button type="button" className="team-link">
                                  <i className="fa-brands fa-twitter"></i>
                                </button>
                              </Link>
                            </li>
                            <li>
                              <Link to="/">
                                <button type="button" className="team-link">
                                  <i className="fa-brands fa-google"></i>
                                </button>
                              </Link>
                            </li>
                            <li>
                              <Link to="/">
                                <button type="button" className="team-link">
                                  <i className="fa-brands fa-instagram"></i>
                                </button>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                </div>
                <div className="team-header">
                  <div className="team-img">
                    <figure>
                      <img src={johnAlex3} alt="member" />
                      <figcaption>
                        <div className="team-member-details">
                          <p className="member-name">John Alex</p>
                          <span className="member-special">Head of AI Development</span>
                          <ul>
                            <li>
                              <Link to="/">
                                <button type="button" className="team-link">
                                  <i className="fa-brands fa-facebook"></i>
                                </button>
                              </Link>
                            </li>
                            <li>
                              <Link to="/">
                                <button type="button" className="team-link">
                                  <i className="fa-brands fa-twitter"></i>
                                </button>
                              </Link>
                            </li>
                            <li>
                              <Link to="/">
                                <button type="button" className="team-link">
                                  <i className="fa-brands fa-google"></i>
                                </button>
                              </Link>
                            </li>
                            <li>
                              <Link to="/">
                                <button type="button" className="team-link">
                                  <i className="fa-brands fa-instagram"></i>
                                </button>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="changer-header">
              <p></p>
              <p></p>
              <p></p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default aboutUs