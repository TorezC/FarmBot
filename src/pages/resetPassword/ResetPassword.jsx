import React from 'react'
import { useState } from "react";
import logo from "../../assets/logo.svg";
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
            <div className="note-header">
                <h5>Reset your password</h5>
                <p>Almost done. Enter your new password <br /> and you're good to go.</p>
            </div>
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
                <Link to="/confirmPassword">
                    <button className="click-btn signup-btn">Reset Password</button>
                </Link>
            </form>
            <div className="return-btn-head">
                <span className="link-bottom">
                    <Link to="/" className="link-bottom-btn return-btn">
                        <i class="fa-solid fa-arrow-left"></i>
                        Return to Login
                    </Link>
                </span>
            </div>
        </div>
    </div>
  )
}

export default ResetPassword