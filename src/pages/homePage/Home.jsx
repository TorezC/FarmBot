import React from 'react'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import './home.css'

const Home = () => {
  return (
    <div>
    <header className="top-header">
      <nav>
        <div className="header-logo">
          <Link to="/" className="link-bottom-btn">
            <img src={logo} alt="logo" />
          </Link>
          <span style={{'display':'none'}}>
            <button type="button">
              <i class="fa-solid fa-bars"></i>
            </button>
          </span>
        </div>
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
              <Link to="/">Contact Us</Link>
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
      </nav>
      <div className="home-header">
        <div className="hero-section">
          <div className="hero-one hero">
            <h1>Empowering Farmers Through <br /> Technology</h1>
          </div>
          <div className="hero-two hero">
            <p>Unlock the full potential of your farm with
              real-time data, expert advice, and a community 
              of like-minded individuals dedicated to shaping 
              the future of agriculture.</p>
          </div>
        </div>
        <div className="get-started">
          <Link>
            <button className="click-btn get-started-btn">Get Started!</button>
          </Link>
        </div>
      </div>
      <div className="numbers-header">
        <div className="numbers-list">
          <ul>
            <li>
              <p>10+</p>
              <span>Countries</span>
            </li>
            <li>
              <p>50+</p>
              <span>Happy Clients</span>
            </li>
            <li>
              <p>15+</p>
              <span>Years Experience</span>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <main className="main-body">
      <div className="main-header">
        <div className="what-we-do-head">
          <p>What We Offer</p>
          <p>Cultivating Success Through Innovation</p>
        </div>
      </div>
    </main>
  </div>
  )
}

export default Home