import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const storeContext = createContext(null);

const storeContentProvider = (props) => {
  const [cartitems, setcartitems] = useState({});

  const addtocart = (itemid) => {
    if (!cartitems[itemid]) {
      setcartitems((prev) => ({ ...prev, [itemid]: 1 }));
    } else {
      setcartitems((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }));
    }
  };

  const removefromcart = (itemid) => {
    setcartitems((prev) => ({ ...prev, [itemid]: prev[itemid] - 1 }));
  };

  useEffect(() => {
    console.log(cartitems);
  }, [cartitems]);

  const contextValue = {
    food_list,
    cartitems,
    setcartitems,
    addtocart,
    removefromcart,
  };
  return (
    <storeContext.Provider value={contextValue}>
      {props.children}
    </storeContext.Provider>
  );
};

export default storeContentProvider;
