import React, { useContext } from "react";
import "./Cart.css";
import { storeContext } from "../../Context/Storecontext";

const Cart = () => {
  const { cartitems, food_list, removefromcart, getTotal } =
    useContext(storeContext);

  return (
    <>
      <div className="cart">
        <div className="cart-items">
          <div className="cart-items-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br />
          <hr />
          {food_list.map((item, index) => {
            if (cartitems[item._id] > 0) {
              return (
                <div>
                  <div key={index} className="cart-item-title cart-items-item">
                    <img src={item.image} alt="" />
                    <p>{item.name}</p>
                    <p>{"$" + item.price}</p>
                    <p>{cartitems[item._id]}</p>
                    <p>{"$" + item.price * cartitems[item._id]}</p>
                    <p
                      onClick={() => removefromcart(item._id)}
                      className="cross"
                    >
                      x
                    </p>
                  </div>
                  <hr />
                </div>
              );
            }
          })}
        </div>
        <div className="cart-bottom">
          <div className="cart-total">
            <h2>cart Totals</h2>
            <div>
              <div className="cart-total-detail">
                <p>Subtotal</p>
                <p>${getTotal()}</p>
              </div>
              <hr />
              <div className="cart-total-detail">
                <p>Delivery Free</p>
                <p>${2}</p>
              </div>
              <hr />
              <div className="cart-total-detail">
                <b>Total</b>
                <b>${getTotal() + 2}</b>
              </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
          </div>
          <div className="cart-promocode">
            <div>
              <p>If you have a promo code,Enter it here</p>
              <div className="cart-promocode-input">
                <input type="text" placeholder="promo code" />
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
