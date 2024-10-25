// Header.jsx
import React from 'react';

const Header = ({ image, title }) => {
  return (
    <div className="header">
      <img src={image} alt="Header logo" className="header-logo" />
      <h1>{title}</h1>
    </div>
  );
};

export default Header;
