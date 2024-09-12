import React from 'react';
import './MainContent.css';

const MainContent = () => (
  <main>
    <h1>Life Planning, Making<br/> Easy to own Purchase of any plans</h1>
    <p className="paragraph">Get exclusive offers on purchase of any plans</p>
    <div className="signup">
      <div className="input-wrapper">
        <input type="email" placeholder="Your Email" />
      </div>
      <button className="sign-button">Sign Up</button>
    </div>
  </main>
);

export default MainContent;