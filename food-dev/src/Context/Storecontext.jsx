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

  function removefromcart(itemid) {
    setcartitems((prev) => {
      if (prev[itemid] > 1) {
        return { ...prev, [itemid]: prev[itemid] - 1 };
      } else {
        const updatedCart = { ...prev };
        delete updatedCart[itemid];
        return updatedCart;
      }
    });
  }

  const getTotal = () => {
    let total = 0;
    for (const itemId in cartitems) {
      const itemInfo = food_list.find((item) => item._id === itemId);
      if (itemInfo) {
        total += itemInfo.price * cartitems[itemId];
      }
    }
    return total;
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
    getTotal,
  };
  return (
    <storeContext.Provider value={contextValue}>
      {props.children}
    </storeContext.Provider>
  );
};

export default storeContentProvider;
