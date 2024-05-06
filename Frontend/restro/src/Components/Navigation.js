import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = ({ isLoggedIn, handleLogout }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        console.log('isLoggedIn changed:', isLoggedIn);
    }, [isLoggedIn]);

    return (
        <nav className={`navbar navbar-expand-md fixed-top ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <Link to="/" className="navbar-brand">
                    <img className="logo" src="logorestro.png" alt="RestrO" />
                    RestrO
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarOffcanvasLg" aria-controls="navbarOffcanvasLg" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="navbarOffcanvasLg" aria-labelledby="navbarOffcanvasLgLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="navbarOffcanvasLgLabel">
                            <Link to="/" className="navbar-brand">
                                <img className="logo" src="logorestro.png" alt="RestrO" />
                                RestrO
                            </Link>
                        </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/menu" className="nav-link">Menu</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact-us" className="nav-link">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/cart" className='iconStyles'>
                                    <i className="bi bi-cart-fill"></i>
                                </Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link to="/userProfile" className='iconStyles'>
                                    <i className="bi bi-person-fill"></i>
                                </Link>
                            </li> */}
                            <li className="nav-item">
                                {isLoggedIn ? (
                                    <Link><button onClick={handleLogout} className="custom-btn">Logout</button>
                                </Link>) : (
                                    <Link to="/login">
                                        <button className="custom-btn">Login/Sign In</button>
                                    </Link>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavigationBar;
