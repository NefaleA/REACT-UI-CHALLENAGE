import React from 'react';
import './Header.css';

const Header = () => (
  <header>
    <div className="logo">Lyf- <span className="email">/isurance@tiropay.au</span></div>
    <div className="buttons">
      <button className="login-button">Log in</button>
      <button className="get-started-button">Get Started</button>
    </div>
  </header>
);

export default Header;