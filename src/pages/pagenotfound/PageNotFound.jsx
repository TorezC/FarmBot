import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../assets/logo.svg";

const PageNotFound = () => {
  return (
    <div className='flex' style={{alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
        <div style={{textAlign: 'center'}}>
            <img src={logo} alt="logo" />
            <h1 style={{color: 'gray', fontSize: '48px'}}>Page Not Found</h1>
            <div className="return-btn-head" >
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

export default PageNotFound