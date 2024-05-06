import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = ({setIsLoggedIn}) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const navigate = useNavigate();

 const validateForm =() => {
  setEmailError('');
  setUsernameError('');
  setPasswordError('');
  setConfirmPasswordError('');

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

  if (email == "") {
    setEmailError("Email is required");
    return false;
  } else if (!emailRegex.test(email)) {
    setEmailError("Email is invalid");
    return false;
  }

  if (!username.trim()) {
    setUsernameError('Username cannot be empty');
    return false;
  } else if (!usernameRegex.test(username)) {
    setUsernameError('Username must be between 3 to 20 characters and contain only letters, numbers, and underscores');
    return false;
  }

  if (!password.trim()) {
    setPasswordError('Password cannot be empty');
    return false;
  } else if (!passwordRegex.test(password)) {
    setPasswordError('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number');
    return false;
  }

  if (confirmPassword == "") {
    setConfirmPasswordError('Please enter the password again');
    return false;
  } else if (confirmPassword !== password) {
    setConfirmPasswordError('Passwords do not match');
    return false;
  }
  handleSubmit();
  navigate('/');
};

const handleSubmit=()=> { const postURL = "http://localhost:3001/signin/" ;
  fetch(postURL, {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        email, username, password
      })
  })
  .then(()=>{
      alert('You have been added to the system!');
  });

}

  

  return (
    <div className="container login text-center" style={{ maxWidth: '500px' }}>
      <h1>Welcome to <span style={{ color: '#CC3333' }}>RestrO</span></h1>

      <form onSubmit={(e) => { e.preventDefault(); validateForm(); }}>
        <h5 style={{ paddingBottom: '15px' }}>Sign Up</h5>
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
            type="text"
            className="form-control"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <p style={{ color: 'red' }}>{usernameError}</p>
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
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <p style={{ color: 'red' }}>{confirmPasswordError}</p>
        </div>
        <button type="submit" className="custom-btn">Sign Up</button>
      </form>

      <Link to="/login">
        <p className="form-switch" id="switch-to-login">Already have an account? Login here</p>
      </Link>
    </div>
  );
};

export default SignUp;
