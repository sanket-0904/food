import React, { useState } from "react";
import "./Home.css";
import Header from "../../component/Header/Header";
import Exploremenu from "../../component/Exploremenu/Exploremenu";
import Fooddisplay from "../../component/Fooddisplay/Fooddisplay";

const Home = () => {
  const [category, setcategory] = useState("All");

  return (
    <div>
      <Header />
      <Exploremenu category={category} setcategory={setcategory} />
      <Fooddisplay category={category} />
    </div>
  );
};

export default Home;
