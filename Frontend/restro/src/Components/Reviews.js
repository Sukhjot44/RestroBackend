import React, { useState } from 'react';
import '../TestimonialCarousel.css'; // Import custom CSS for styling

const testimonials = [
  {
    text: "A delightful dining experience! The menu offers a great variety, and the flavors are fantastic. The staff is attentive, and the prices are reasonable. I'd definitely recommend their seafood dishes!",
    author: "David Jones",
    image: "c1.png"
  },
  {
    text: "A solid choice for a family dinner. The portions are generous, and the prices are reasonable. The atmosphere is welcoming. I love their pasta dishes, and my kids adore the pizza.",
    author: "Martin Thomas",
    image: "c2.jpg"
  },
  {
    text: "This restaurant is my happy place. It's perfect for a cozy dinner with friends. The staff is friendly, and the cocktails are amazing. You can't go wrong with their chef's specials",
    author: "Luke Jobs",
    image: "c3.jpg"
  }
];

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="testimonial-area">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="section-header text-center">
              <h1 style={{ fontWeight: 700 }}>
                Our Customers <span style={{ color: '#CC3333' }}>Reviews</span>
              </h1>
            </div>
          </div>
          <div className="col-sm-12">
            <div className="slideshow">
              <div className="slideshow-indicators">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={index === activeIndex ? 'active' : ''}
                    onClick={() => setActiveIndex(index)}
                  ></button>
                ))}
              </div>
              <div className="slideshow-inner">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className={index === activeIndex ? 'slideshow-item active' : 'slideshow-item'}>
                    <div className="content text-center">
                      <p>{testimonial.text}</p>
                      <div className="person"><img alt="" src={testimonial.image} /></div>
                      <h5>{testimonial.author}</h5>
                    </div>
                  </div>
                ))}
              </div>
              <div className="slideshow-controls">
                <button className="slideshow-control prev" onClick={handlePrev}>
                  &lt;
                </button>
                <button className="carousel-control next" onClick={handleNext}>
                  &gt;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
