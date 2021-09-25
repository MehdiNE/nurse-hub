import React from "react";
import { useCart } from "react-use-cart";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  if (isEmpty) return <h4 className="text-center mt-4">لیست خالی میباشد</h4>;
  return (
    <div>
      <p>
        Cart ({totalUniqueItems}) total items: ({totalItems})
      </p>
      <div>
        {items.map((item, index) => {
          return (
            <div key={index} className={classes.list}>
              <p>{item.name}</p>
              <i
                class="fas fa-times"
                onClick={() => {
                  removeItem(item.id);
                }}
              ></i>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Cart;
