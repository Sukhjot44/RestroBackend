import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';
import Menu from './Components/Menu';
import ContactUs from './Components/ContactUs';
import SignIn from './Components/SignIn';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import Login from './Components/Login';
import Cart from './Components/Cart';
import UserProfile from './Components/UserProfile';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const userDataFromSession = JSON.parse(sessionStorage.getItem('userData'));
    if (userDataFromSession) {
      setUserData(userDataFromSession);
      setUsername(userDataFromSession.username)
      setIsLoggedIn(true);
    }
  }, []);
  const handleLogout = () => {
    sessionStorage.removeItem('userData');
    setIsLoggedIn(false);
    setUserData(null); // Reset user data
    setUsername('');
  };

  return (
    <Router>
      <Navigation isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/menu' element={<Menu  isLoggedIn={isLoggedIn} username={username}/>} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/login' element={<Login auth='/'  setUsername={setUsername} setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path='/signin' element={<SignIn setUsername={setUsername} setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path='/cart' element={<Cart isLoggedIn={isLoggedIn}  username={username} setIsLoggedIn={setIsLoggedIn}setUsername={setUsername}/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
