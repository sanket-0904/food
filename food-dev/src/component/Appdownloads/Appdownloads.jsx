import React from "react";
import "./Appdownloads.css";
import { assets } from "../../assets/assets";

const Appdownloads = () => {
  return (
    <div className="app-downloads" id="app-downloads">
      <p>Download our app for the best experience!</p>
      <div className="app-downloads-platfrom">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  );
};

export default Appdownloads;
