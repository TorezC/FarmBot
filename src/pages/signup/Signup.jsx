import { useState } from "react";
import logo from "../../assets/logo.svg";
import google from "../../assets/google.svg";
import apple from "../../assets/apple.svg";
import facebook from "../../assets/facebook.svg";
import { Link } from "react-router-dom";
const Signup = () => {
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
        <h5>Signup</h5>
        <p>Create an account</p>
        <div></div>
        <button className="btn flex">
          <img src={google} alt="google" />
          <p>Signup with Google</p>
        </button>
        <button className="btn flex">
          <img src={apple} alt="apple" />
          <p>Signup with Apple</p>
        </button>
        <button className="btn flex">
          <img src={facebook} alt="facebook" />
          <p>Signup with Facebook</p>
        </button>
        <p className="or">OR</p>
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
          <div className="form-container flex">
            <label htmlFor="password">Password</label>
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
          <button className="click-btn">Signup</button>
        </form>
        <span className="link-bottom">
          Already a user?
          <Link to="/" className="link-bottom-btn">
            Login
          </Link>
        </span>
        <div className="link-bottom">
          By clicking signup you agree to Farmer Support
           <Link className="link-bottom-btn" style={{'text-decoration': 'underline'}}> Terms of Privacy & Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
