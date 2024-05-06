import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from './Login';

function UserProfile({isLoggedIn,userData,setIsLoggedIn}) {
    const navigate = useNavigate();


    // Redirect to cart after successful login
    useEffect(() => {
        if (isLoggedIn) {
            navigate('/userProfile');
        }
    }, [isLoggedIn, navigate]);

    return (
        <div>
            UserProfile
            {isLoggedIn ? <div>
              <h1> Email: {userData.email} </h1>
              <h1> Username: {userData.username} </h1>
               </div>: <Login auth="/userProfile" setIsLoggedIn={setIsLoggedIn}/>}
        </div>
    );
}

export default UserProfile;

