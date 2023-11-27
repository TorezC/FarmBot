import logo from "../../assets/logo.svg";
import google from "../../assets/google.svg";
import apple from "../../assets/apple.svg";
import facebook from "../../assets/facebook.svg";
import { Link } from "react-router-dom";
import Password from "../../components/Password";
const Login = () => {
  
  return (
    <div className="auth-container">
      <div className="container">
        <div>
          <img className="logo" src={logo} alt="logo" />
        </div>
        <h5>Welcome Back</h5>
        <p>Login in to your account</p>
        <div className="btn-header">
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
        </div>
        <p className="or">OR</p>
        <form action="/profile">
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
           <Password/>
          <Link className="link-right" to='/forgotPassword'  >Forgot Password?</Link>
          </div>
          <button className="click-btn login-btn">Login</button>
        </form>
        <span className="link-bottom">New to Farm Support? &nbsp;
          <span>
            <Link to='/signup' className="link-bottom-btn">
            Signup
            </Link>
          </span>
        </span>
      </div>
    </div>
  );
};

export default Login;
