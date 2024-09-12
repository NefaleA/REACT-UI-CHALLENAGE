import React from 'react';

const Footer = () => (
  <footer style={footerStyle}>
    <span style={textStyle}>Terms Policy &#8226; Customer Story</span>
    <span style={arrowStyle}>&#8594;</span> {/* Unicode for right arrow */}
  </footer>
);

const footerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 20px',
  backgroundColor: '#ffffff', // White background
  borderTop: 'none', // No border lines
};

const textStyle = {
  color: 'gray', // Gray font color
  fontWeight: 'bold', // Slightly bold text
};

const arrowStyle = {
  cursor: 'pointer',
};

export default Footer;