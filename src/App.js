import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import OtpVerification from './pages/otpVerification/OtpVerification';
import ResetPassword from './pages/resetPassword/ResetPassword';
import ForgotPassword from './pages/forgotPassword/ForgotPassword';
import Home from './pages/homePage/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/otp' element={<OtpVerification/>} />
        <Route path='/forgotPassword' element={<ForgotPassword/>} />
        <Route path='/resetPassword' element={<ResetPassword/>} />
        <Route path='/home' element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
