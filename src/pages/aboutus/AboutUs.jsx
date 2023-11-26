import React from 'react'
import "./about.css";
import "../homePage/home.css"
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
// import { Link } from "react-router-dom";
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
      <main className="main-body">

      </main>
      <Footer />
    </div>
  )
}

export default aboutUs