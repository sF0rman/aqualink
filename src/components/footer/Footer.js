import React from 'react';
import logo from '../../resources/logo.png';

const Footer = () => {
  return (
    <div className="footer bg-dark">
      <div className="container">
        <img src={logo} className="footerImg" alt="Aqualink" height="60" />
      </div>
    </div>
  )
}

export default Footer;