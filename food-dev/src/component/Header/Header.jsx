import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
          Embark on a culinary journey with our menu full of bold flavors,
          handcrafted recipes, and global inspirations. Every bite tells a story
          — all you have to do is choose where to start.
        </p>
        <button>View menu</button>
      </div>
    </div>
  );
};

export default Header;
