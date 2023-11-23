import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import OtpVerification from './pages/otpVerification/OtpVerification';
import ResetPassword from './pages/resetPassword/ResetPassword';
import ConfirmPassword from './pages/resetPassword/ConfirmPassword';
import ResetLink from './pages/forgotPassword/ResetLink';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/otp' element={<OtpVerification/>} />
        <Route path='/resetPassword' element={<ResetPassword/>} />
        <Route path='/confirmPassword' element={<ConfirmPassword/>} />
        <Route path='/resetLink' element={<ResetLink/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
