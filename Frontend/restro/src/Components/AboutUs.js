import React from 'react';
import { useNavigate,useLocation } from 'react-router-dom';

const AboutUs = () => {
  
  const location = useLocation();
  const isRoute = location.pathname !== '/';

  const aboutStyles = {
    marginTop:isRoute?'100px':'50px'
  };
  const navigate=useNavigate();
  function handleOrderClick() {
    navigate('/menu');
  
  }
  return (
    <div className="about_us" id="about" style={aboutStyles}>
      <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src="aboutusimage.png" alt="About Us Image" className="img-fluid" />
          </div>
          <div className="about_text col-md-6" style={{paddingLeft:'50px'}}>
            <h5>About Us</h5>
            <h2>Why We Are The Best</h2>
            <p>
              At RestrO dining is more than just a meal; it's an experience. RestrO is passionate about good food, great atmosphere, and creating memorable moments. Our journey began with a simple dream: to bring people together through the joy of delicious cuisine.
            </p>
            <p>
              It all started with a family recipe, passed down through generations. With a vision to share our love for food, we set out on a culinary adventure. Our chefs meticulously craft each dish, using the finest ingredients, creativity, and a dash of love.
            </p>
            <ul className="custom-list" style={{ fontSize: 16, fontWeight: 600 }}>
              <li>Delicious & Healthy Food </li>
              <li>Specific Family And Kids Zone </li>
              <li>Music & Other Facilities </li>
              <li>Fastest Food Home Delivery </li>
            </ul>
            <button id="order1" onClick={() => handleOrderClick()} className="custom-btn">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};



export default AboutUs;
