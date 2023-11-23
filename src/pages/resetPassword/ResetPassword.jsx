import React from 'react'
import { useState } from "react";
import logo from "../../assets/logo.svg";
// import './otpVerification.css'
import { Link } from "react-router-dom";

const ResetPassword = () => {
    const [passwordVisibility, setPasswordVisibility] = useState("password");
    const [passwordIcon, setPasswordIcon] = useState("fal fa-eye icon");

    const handleVisibility = () => {
        if (passwordIcon === "fal fa-eye icon") {
        setPasswordIcon("fal fa-eye-slash icon");
        setPasswordVisibility("text");
        } else if (passwordIcon === "fal fa-eye-slash icon") {
        setPasswordIcon("fal fa-eye icon");
        setPasswordVisibility("password");
        }
    };
  return (
    <div className="auth-container">
        <div className="container">
            <div>
                <img className="logo" src={logo} alt="logo" />
            </div>
            <h5>Reset your password</h5>
            <p>Almost done. Enter your new password and you're good to go.</p>
            <form>
                <div className="form-container flex">
                    <label htmlFor="password">New Password</label>
                    <div className="password">
                    <input
                        className="input-holder"
                        type={passwordVisibility}
                        placeholder="******"
                        id="password"
                    />
                    <i onClick={handleVisibility} class={passwordIcon}></i>
                    </div>
                </div>
                <div className="form-container flex">
                    <label htmlFor="password">Confirm Password</label>
                    <div className="password">
                    <input
                        className="input-holder"
                        type={passwordVisibility}
                        placeholder="******"
                        id="password"
                    />
                    <i onClick={handleVisibility} class={passwordIcon}></i>
                    </div>
                </div>
                <button className="click-btn signup-btn">Reset Password</button>
            </form>
            <span className="link-bottom">
                <Link to="/" className="link-bottom-btn">
                    Return to Login
                </Link>
            </span>
        </div>
    </div>
  )
}

export default ResetPassword