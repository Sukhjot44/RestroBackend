import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate=useNavigate();
  function handleOrderClick() {
    navigate('/menu');
  
  }
  return (
    <div className="container hero">
      <div className="row">
        <div className="col-md-6 d-md-flex align-items-center">
          <div className="content">
            <h1>Taste the Tradition of Italian perfection.</h1>
            <ul className="custom-list">
              <li>Panpie, Burgers, And Best</li>
              <li>Excellent Quality Pizza</li>
              <li>Chicken Sandwich</li>
            </ul>
            <button id="order1" className="custom-btn" onClick={() => handleOrderClick()}>Order Now</button>
          </div>
        </div>
        <div className="col-md-6">
          <img src="about us burger.png" alt="Italian Food" className="hero bounce carousel-img img-fluid" />
        </div>
      </div>
    </div>
  );
};



export default HeroSection;
