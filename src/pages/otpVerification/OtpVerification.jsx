import React from 'react'
import logo from "../../assets/logo.svg";
import './otpVerification.css'
import { Link } from "react-router-dom";

const OtpVerification = () => {
  return (
    <div className="otp-flex auth-container">
        <div className="container">
            <div>
                <img className="logo" src={logo} alt="logo" />
            </div>
            <div className="otp-note">
                <h5>OTP Verification</h5>
            </div>
            <div className="otp-description">
                <p>Please enter the 6 digit code sent <br />
                    <span>to John***@gmail.com</span>
                </p>
            </div>
            <div className="input-otp">
                <span><input type="text" /></span>
                <span><input type="text" /></span>
                <span><input type="text" /></span>
                <span><input type="text" /></span>
                <span><input type="text" /></span>
                <span><input type="text" /></span>
            </div>
            <div className="receive-otp">
                <span className="link-bottom">Didn't receive OTP? &nbsp;
                    <span>
                        <Link to='/signup' className="link-bottom-btn">Signup</Link>
                    </span>
                </span>
            </div>
        </div>
    </div>
  )
}

export default OtpVerification