import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
const ContactForm = () => {

  const location = useLocation();
  const isRoute = location.pathname !== '/';

  const contactStyles = {
    marginTop:'50px'
  };
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !phone || !email || !message) {
      alert('Please fill out all fields.');
      return;
    }

    const phonePattern = /^[0-9]+$/;
    if (!phonePattern.test(phone)) {
      alert('Please enter a valid phone number.');
      return;
    }
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)){
      alert('Please enter a valid email.');
      return;
    }

    setIsSubmitted(true);
    console.log('Form submitted!', { name, phone, email, message });

    setTimeout(() => {
      setName('');
      setPhone('');
      setEmail('');
      setMessage('');
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="contact-area" id="contact-us" style={contactStyles}>
      <div className="contact container mt-5">
        <h5 className="text-center">We're here for You</h5>
        <h2 className="text-center">Contact Us</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="form-control"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              className="form-control"
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button type="submit" className="custom-btn">
            Submit
          </button>
          {isSubmitted && <div className="success-message">
            Message Sent!
          </div>}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
