import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import OtpVerification from './pages/otpVerification/OtpVerification';
import ResetPassword from './pages/resetPassword/ResetPassword';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/otp' element={<OtpVerification/>} />
        <Route path='/reset' element={<ResetPassword/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
