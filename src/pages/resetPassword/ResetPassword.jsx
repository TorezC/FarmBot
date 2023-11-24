import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import Password from '../../components/Password';

const ResetPassword = () => {
    
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
                   <Password/>
                </div>
                <div className="form-container flex">
                    <label htmlFor="password">Confirm Password</label>
                    <Password/>
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