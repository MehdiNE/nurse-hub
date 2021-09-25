import React, { useState } from "react";
import { useCart } from "react-use-cart";

import classes from "./BuyCard.module.css";

const BuyCard = (props) => {
  const [clicked, setClicked] = useState(false);
  const [title, setTtitle] = useState("افزودن خدمت");

  const { addItem } = useCart();

  const handlerBuy = () => {
    setClicked(true);
    setTtitle("خدمت اضافه شد");
  };

  return (
    <div>
      <div
        className={`${classes["ser-card"]} ${clicked ? classes.selected : ""}`}
      >
        <i className={` fas fa-user-nurse  ${classes["card-icon"]} `}></i>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <button
          className={`${classes["btn-card"]} ${classes["hvr-bounce-to-left"]}`}
          onClick={() => {
            handlerBuy();
            addItem(props.item);
          }}
        >
          <i
            className={`${clicked ? "fas fa-check " : ""} ${
              classes["card-icon"]
            }`}
          ></i>
          {title}
        </button>
      </div>
    </div>
  );
};

export default BuyCard;
