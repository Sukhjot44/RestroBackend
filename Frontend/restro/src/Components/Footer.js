import React from 'react';
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="footer-logo">
              <a className="navbar-brand" href="">
                <img className="logo" src="bugerfot.png" alt="RestrO" />
                RestrO
              </a>
              <ul className="list-group">
                <li className="list-group-item d-flex align-items-center">
                  <div className="icon-background">
                  <i className="bi bi-geo-alt-fill"></i>
                  </div>
                  <span className="ms-3">
                    4920 Trails End Road Ft <br /> United States, FL 33311
                  </span>
                </li>
                <li className="list-group-item d-flex align-items-center">
                  <div className="icon-background">
                  <i className="bi bi-envelope-fill"></i>
                  </div>
                  <span className="ms-3">
                    nfo@example.com <br /> test@example.com
                  </span>
                </li>
                <li className="list-group-item d-flex align-items-center">
                  <div className="icon-background">
                  <i className="bi bi-telephone-fill"></i>
                  </div>
                  <span className="ms-3">
                    +123 456 679 123 <br /> +123 456 789
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-4">
            <div className="column-heading">Quick Links</div>
            <div className="quick-links">
              <ul>
                <li style={{ marginTop: 37 }}>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#menu">Menu</a>
                </li>
                <li>
                  <a href="#menu">Order Online</a>
                </li>
                <li>
                  <a href="#about">About Us</a>
                </li>
                <li>
                  <a href="#contact-us">Contact</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-4">
            <div className="column-heading">Opening Hours</div>
            <div className="opening-hours">
              <table style={{ marginTop: 34 }}>
                <tbody>
                  <tr>
                    <td>Monday - Friday</td>
                    <td>9:00 AM - 10:00 PM</td>
                  </tr>
                  <tr>
                    <td>Saturday - Sunday</td>
                    <td>10:00 AM - 11:00 PM</td>
                  </tr>
                </tbody>
              </table>

              <div className="social-buttons">
                <a href="https://www.facebook.com/" className="btn btn-primary">
                <i className="bi bi-facebook"></i>
                </a>
                <a href="https://www.twitter.com" className="btn btn-primary">
                <i className="bi bi-twitter-x"></i>                </a>
                <a href="https://www.instagram.com" className="btn btn-primary">
                <i className="bi bi-instagram"></i>
                </a>
                <a href="https://www.skype.com" className="btn btn-primary">
                <i className="bi bi-skype"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row separator"></div>
        <div className="row">
          <div className="col-md-12">
            <div className="copyright">© 2023 RestrO. All Rights Reserved.</div>
          </div>
        </div>
      </div>
    </div>
  
  )}
export default Footer;