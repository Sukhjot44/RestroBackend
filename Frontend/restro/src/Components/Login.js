import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = ({ auth,setIsLoggedIn,setUsername }) => {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(''); 
  const [passwordError, setPasswordError] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const path=`${auth}`

  const validateForm = () => {
    setEmailError('');
    setPasswordError('');
    setErrorMessage('');

    if (!email.trim()) { 
      setEmailError('Email cannot be empty'); 
      return false;
    }

    if (!password.trim()) {
      setPasswordError('Password cannot be empty');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await fetch('http://localhost:3001/login/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }), 
        }
      );

        if (response.ok) {
          const data = await response.json();
          sessionStorage.setItem('userData', JSON.stringify(data.user));
          setUsername(data.user.username);

  setIsLoggedIn(true);
          navigate(path);
        } else {
          const data = await response.json();
          setErrorMessage(data.message);
        }
      } catch (error) {
        console.error('Error occurred:', error);
        setErrorMessage('An unexpected error occurred. Please try again later.');
      }
    }
  };

  return (
    <div className="container login text-center" style={{ maxWidth: '500px' }}>
      <h1>Welcome to <span style={{ color: '#CC3333' }}>RestrO</span></h1>

      <form onSubmit={handleSubmit}>
        <h5 style={{ paddingBottom: '15px' }}>Login</h5>

        <div className="mb-3">
          <input
            type="email" 
            className="form-control"
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <p style={{ color: 'red' }}>{emailError}</p>
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p style={{ color: 'red' }}>{passwordError}</p>
        </div>
        <button type="submit" className="custom-btn">Login</button>
        
        {errorMessage && <p style={{ color: 'red', marginTop: '10px' }}>{errorMessage}</p>}
      </form>
      <Link to="/signin">
        <p className="form-switch" id="switch-to-signup">Don't have an account? Sign up here</p>
      </Link>
    </div>
  );
};

export default Login;
