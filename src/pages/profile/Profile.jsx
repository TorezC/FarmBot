import React, { useState } from 'react'
import './profile.css'
import profileImage from '../../assets/profileImage.png'
import profileLogo from '../../assets/profileLogo.svg'
const Profile = () => {
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
    <div className="profile-container">
        <div className="profile-body-flex">
            <aside className="profile-aside-header">
                <div className="profile-aside-head">
                    <div className="profile-logo-header">
                        <img src={profileLogo} alt="profileLogo" />
                    </div>
                    <div className="profile-menu-lists-header">
                        <p>MENU</p>
                        <div className="profile-menu">
                            <ul className="profile-btn">
                                <li>
                                    <button type="button">
                                        <i className="fa-solid fa-house"></i>
                                        <span>Home</span>
                                    </button>
                                </li>
                                <li>
                                    <button type="button">
                                        <i className="fa-solid fa-user"></i>
                                        <span>Profile</span>
                                    </button>
                                </li>
                                <li>
                                    <button type="button">
                                        <i className="fa-solid fa-bug"></i>
                                        <span>Pest Alerts</span>
                                    </button>
                                </li>
                                <li>
                                    <button type="button">
                                        <i className="fa-solid fa-list"></i>
                                        <span>Product Listings</span>
                                    </button>
                                </li>
                                <li>
                                    <button type="button">
                                        <i className="fa-solid fa-cloud"></i>
                                        <span>Weather Forecast</span>
                                    </button>
                                </li>
                                <li>
                                    <button type="button">
                                        <i className="fa-solid fa-leaf"></i>
                                        <span>Agriculture Knowledge</span>
                                    </button>
                                </li>
                                <li>
                                    <button type="button">
                                        <i className="fa-solid fa-comments"></i>
                                        <span>ChatBot</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                        <div className="profile-settings-header">
                            <ul>
                                <li>
                                    <button type="button">
                                        <i className="fa-solid fa-gear"></i>
                                        <span>Settings</span>
                                    </button>
                                </li>
                                <li>
                                    <button type="button">
                                        <i className="fa-solid fa-right-from-bracket"></i>
                                        <span>Logout</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </aside>
            <main className="main-profile-body">
                <div className="profile-main-body">
                    <div className="my-profile-header">
                        <div className="my-profile-head">
                            <p className="my-profile-head-note">My Profile</p>
                            <div className="profile-notification-head">
                                <div className="profile-bell-header">
                                    <div className="bell-head">
                                        <button type="button" className="bell-btn">
                                            <i className="fa-regular fa-bell"></i>
                                            <p></p>
                                        </button>
                                    </div>
                                </div>
                                <div className="profile-img-head">
                                    <div className="profile-header">
                                        <button type="button" className="img-btn">
                                            <img src={profileImage} alt="profile-icon" />
                                            <p></p>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="edit-cover-header">
                        <div className="cover-image">
                            <button type="button" className="edit-cover-btn">
                                <label htmlFor="cover-btn" className="label-cover">
                                    <span className="click-cover-btn">
                                        <i className="fa-solid fa-pen"></i>
                                        <input type="file" accept="image/jpeg,image/png,image/jpeg" name="cover-btn" id="cover-btn" />
                                    </span>
                                    <span className="cover-edit-note">Edit Cover Image</span>
                                </label>
                            </button>
                        </div>
                        <div className="edit-profile-img-header">
                            <div className="profile-header">
                                <button type="button" className="edit-btn">
                                        <img src={profileImage} alt="profile-icon" />
                                        <p>
                                            <label htmlFor="edit-img">
                                                <span>
                                                    <i className="fa-solid fa-pen"></i>
                                                    <input type="file" accept="image/jpeg,image/png,image/jpeg" name="edit-img" id="edit-img" />
                                                </span>
                                            </label>
                                        </p>
                                        <span className="pro-note">Change Profile Image</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="basic-details-header">
                        <form className="basic-details-form">
                            <div className="basic-details-flex">
                                <div className="basic-information-head">
                                    <div className="basic-note">
                                        <p>Basic Information</p>
                                    </div>
                                    <div className="basic-fill-form">
                                        <div className="form-container flex basic-form fill-form">
                                            <label htmlFor="full-name">Full Name</label>
                                            <input
                                            className="input-holder"
                                            type="text"
                                            placeholder="Your name"
                                            id="full-name"
                                            />
                                        </div>
                                        <div className="form-container flex basic-form fill-form">
                                            <label htmlFor="email">Email Address</label>
                                            <input
                                            className="input-holder"
                                            type="email"
                                            placeholder="Johdoe@gmail.com"
                                            id="email"
                                            />
                                        </div>
                                        <div className="form-container flex basic-form fill-form">
                                            <label htmlFor="phone-number">Phone Number</label>
                                            <input
                                            className="input-holder"
                                            type="text"
                                            placeholder="Enter your phone number"
                                            id="phone-number"
                                            />
                                        </div>
                                        <div className="password form-container flex basic-form fill-form show-pass">
                                            <label htmlFor="password">Password</label>
                                            <input
                                                className="input-holder"
                                                type={passwordVisibility}
                                                placeholder="******"
                                                id="password"
                                            />
                                            <i onClick={handleVisibility} className={passwordIcon}></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="details-information-head">
                                    <div className="details-note">
                                        <p>Details</p>
                                    </div>
                                    <div className="details-fill-form">
                                        <div className="form-container flex details-form fill-form">
                                            <label htmlFor="location">Location</label>
                                            <select name="location" id="location">
                                                <option value="Kwara">Kwara</option>
                                                <option value="Lagos">Lagos</option>
                                                <option value="Abuja">Abuja</option>
                                            </select>
                                        </div>
                                        <div className="form-container flex details-form fill-form">
                                            <label htmlFor="country">Country</label>
                                            <select name="country" id="country">
                                                <option value="Nigeria">Nigeria</option>
                                                <option value="New-York">New York</option>
                                                <option value="Canada">Canada</option>
                                            </select>
                                        </div>
                                        <div className="form-container flex details-form fill-form">
                                            <label htmlFor="years-farming">Years in Farming</label>
                                            <select name="years-farming" id="years-farming">
                                                <option value="10">10+ Years</option>
                                                <option value="20">20+ Years</option>
                                                <option value="30">30+ Years</option>
                                            </select>
                                        </div>
                                        <div className="password form-container flex details-form fill-form show-pass">
                                            <label htmlFor="farm-size">Farm Size</label>
                                            <select name="farm-size" id="farm-size">
                                                <option value="medium">Medium-Scale Farm (20 acres)</option>
                                                <option value="small">Small-Scale Farm (10 acres)</option>
                                                <option value="large">Large-Scale Farm (30 acres)</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="submit-form-profile-header">
                                <div className="profile-submit-flex">
                                    <button type="button">Cancel</button>
                                    <button type="submit">Save & Close</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    </div>
  )
}

export default Profile