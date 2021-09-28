import React from "react";
import classes from "./HorizontalLine.module.css";

const HorizontalLine = (props) => {
  const Text = (props) => <div>{props.children}</div>;

  return (
    <div className={classes["h2-line-container"]}>
      <div className={classes["horizontal-line2"]}></div>
      <h2 className={classes["h2-line"]}>
        <Text children="خدمات پرستاری" />
      </h2>
    </div>
  );
};

export default HorizontalLine;
