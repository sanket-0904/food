import React, { useState } from "react";
import "./Loginpopup.css";
import { assets } from "../../assets/assets";

const Loginpopup = ({ setshowlogin }) => {
  const [currentstate, setcurrentstate] = useState("Login");

  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentstate}</h2>
          <img
            onClick={() => setshowlogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currentstate === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your name" required />
          )}

          <input type="email" placeholder="Your email" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button>
          {currentstate === "Sign in" ? "craete account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>I agree to the Terms & Conditions</p>
        </div>
        {currentstate === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setcurrentstate("Sign in")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setcurrentstate("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Loginpopup;
