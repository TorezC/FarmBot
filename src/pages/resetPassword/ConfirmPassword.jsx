import React from 'react'
import logo from "../../assets/logo.svg";
import confirmReset from "../../assets/confirmReset.svg";
import { Link } from 'react-router-dom';

const ConfirmPassword = () => {
  return (
    <div className="auth-container">
        <div className="container reset-header">
            <div>
                <img className="logo" src={logo} alt="logo" />
            </div>
            <div className="sent-img">
                <img src={confirmReset} alt="confirm" />
            </div>
            <div className="note-header">
                <h5>Password Reset Successful</h5>
                <p className="success-note">You have successfully reset your password</p>
            </div>
            <div className="btn-header">
                <Link to="/">
                    <button className="click-btn signup-btn">Return to Login</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default ConfirmPassword