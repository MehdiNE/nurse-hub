import React, { useState } from "react";
import classes from "./Services.module.css";
import { CartProvider } from "react-use-cart";

import Navbar from "../Navbar/Navbar";
import Card from "../UI/Card";
import Data from "./Cards/Data";
import SideBarContainer from "./SidebarContainer";
import Modal from "./Modal";
import HorizontalLine from "../UI/HorizontalLine";

const Services = (props) => {
  return (
    <div className={classes.services}>
      <CartProvider>
        <Navbar />
        <HorizontalLine />
        <div className={classes.float}>
          <div className={classes.modal}>
            <Modal />
          </div>
          <Data />
          <Card className={classes.sideContainer}>
            {/* {`${isBigScreen ? <p>hello</p> : <h1>hi</h1>}`} */}
            <SideBarContainer />
          </Card>
        </div>
        <p className={classes.footer}>Nurse Hub 2021 </p>
      </CartProvider>
    </div>
  );
};

export default Services;
