import React from 'react'
import './forgotPassword.css'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
  return (
    <div className="auth-container">
        <div className="container">
            <div>
                <img className="logo" src={logo} alt="logo" />
            </div>
            <div className="note-header">
                <h5>Forgotten Password?</h5>
                <p className="success-note">
                No worries, we will send your reset instructions to <br />
                your registered email address
                </p>
            </div>
            <form>
            <div className="form-container flex">
            <label htmlFor="email">Email Address</label>
            <input
              className="input-holder"
              type="email"
              placeholder="Johdoe@gmail.com"
              id="email"
            />
          </div>
            <div className="btn-header">
                <button className="click-btn signup-btn">Reset Password</button>
            </div>
            </form>
            <Link to='/' className='goback return-btn-head return-btn'><i className='fal fa-arrow-left'></i> Return to Login</Link>
        </div>
    </div>
  )
}

export default ForgotPassword