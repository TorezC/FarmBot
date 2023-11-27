import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import OtpVerification from './pages/otpVerification/OtpVerification';
import ResetPassword from './pages/resetPassword/ResetPassword';
import ForgotPassword from './pages/forgotPassword/ForgotPassword';
import PageNotFound from './pages/pagenotfound/PageNotFound';
import Home from './pages/homePage/Home'
import ContactUs from './pages/contactus/ContactUs';
import AboutUs from './pages/aboutus/AboutUs'
import Profile from './pages/profile/Profile'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/otp' element={<OtpVerification/>} />
        <Route path='/forgotPassword' element={<ForgotPassword/>} />
        <Route path='/resetPassword' element={<ResetPassword/>} />
        <Route path='/contact-us' element={<ContactUs/>} />
        <Route path='/about-us' element={<AboutUs/>} />
        <Route path='*' element={<PageNotFound/>} />
        <Route path='/profile' element={<Profile/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;