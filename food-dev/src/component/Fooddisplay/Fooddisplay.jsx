import React, { useContext } from "react";
import "./Fooddisplay.css";
import { storeContext } from "../../Context/Storecontext";
import Fooditem from "../Fooditem/Fooditem";

const Fooddisplay = ({ category }) => {
  const { food_list } = useContext(storeContext);
  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          return (
            <Fooditem
              key={index}
              id={item._id}
              name={item.name}
              price={item.price}
              description={item.description}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Fooddisplay;
