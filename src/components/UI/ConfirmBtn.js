import React from "react";
import classes from "./ConfirmBtn.module.css";

const ConfirmBtn = () => {
  return (
    <div>
      <button className={classes["confirm-btn"]}>ثبت درخواست</button>
    </div>
  );
};

export default ConfirmBtn;
