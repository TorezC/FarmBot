import React from 'react'
import logo from '../../assets/logo.svg'

const ResetLink = () => {
  return (
    <div className="auth-container">
        <div className="container">
            <div>
                <img className="logo" src={logo} alt="logo" />
            </div>
            <div className="note-header">
                <h5>Reset Link Sent</h5>
                <p className="success-note">
                    A resent link has been sent to your email address. <br />
                    Please follow the instructions to reset your password
                </p>
            </div>
            <div className="btn-header">
                <button className="click-btn signup-btn">Check inbox</button>
            </div>
        </div>
    </div>
  )
}

export default ResetLink