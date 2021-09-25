import React from "react";
import Navbar from "../Navbar/Navbar";
import classes from "./Home.module.css";
import Nurse from "./Nurse.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={classes.home}>
      <Navbar></Navbar>
      <div className={classes["vertical-line"]}></div>
      <div className={classes.layout}>
        <div className={classes["layout__primary"]}>
          <img src={Nurse}></img>
        </div>
        <div className={classes["layout__secondary"]}>
          <div className={classes.paragraph}>
            <h1>پرستار میخوای؟</h1>
            <p className={classes["p-home"]}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
            </p>
            <Link to="/Services">
              <button className={classes["btn-home"]}> خدمات</button>
            </Link>
          </div>
        </div>
        <div className={classes["bottom-home"]}>
          <div className={classes.icons}>
            <i className={`fab  fa-instagram-square ${classes.i}`}></i>
            <i className={`fab  fa-twitter-square ${classes.i}`}></i>
            <i className={`fab  fa-linkedin ${classes.i}`}></i>
          </div>
          <div className={classes["horizontal-line"]}></div>
        </div>
      </div>
      <p className={classes.footer}>Nurse Hub 2021</p>
    </div>
  );
};

export default Home;
