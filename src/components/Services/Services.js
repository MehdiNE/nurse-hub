import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import classes from "./Services.module.css";
import { useMediaQuery } from "./useMedia";
import Card from "../UI/Card";
import Data from "./Data";
import Cart from "./Cart";
import { CartProvider } from "react-use-cart";

const Services = (props) => {
  const isBigScreen = useMediaQuery("(min-width:1250px)");

  let addThis;
  if (isBigScreen) {
    addThis = (
      <div>
        <p>hi</p>
        <form className="mb-4">
          <div className="mb-4">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              استان
            </label>
            <select
              className={`form-select ${classes["bg-input-color"]}`}
              id="exampleFormControlInput1"
              aria-label="Default select example"
            >
              <option selected>تهران</option>
              <option value="1">مازندران</option>
              <option value="2">گیلان</option>
              <option value="3">سمنان</option>
            </select>
          </div>

          <div className="row">
            <div className="col">
              <label
                htmlFor="exampleFormControlInput2"
                id="exampleFormControlInput2"
                className="form-label"
              >
                شهر
              </label>
              <select
                className={`form-select ${classes["bg-input-color"]}`}
                aria-label="Default select example"
              >
                <option selected>تهران</option>
                <option value="1">ورامین</option>
                <option value="2">پردیس</option>
                <option value="3">قرچک</option>
              </select>
            </div>
            <div className="col">
              <label
                htmlFor="exampleFormControlInput3"
                id="exampleFormControlInput3"
                className="form-label"
              >
                محله
              </label>
              <select
                className={`form-select ${classes["bg-input-color"]}`}
                aria-label="Default select example"
              >
                <option selected>ظفر</option>
                <option value="1">سعادت آباد</option>
                <option value="2">پونک</option>
                <option value="3">پیروزی</option>
              </select>
            </div>
          </div>
        </form>
        <div className={classes["horizontal-line"]}></div>

        <h6 className="my-2">لیست خدمات درخواستی</h6>
        <div>
          <Cart></Cart>
        </div>
      </div>
    );
  } else {
    addThis = (
      <div>
        <h2>خدمات پرستاری</h2>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
          نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
          خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید
          داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به
          پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی
          سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
        </p>
      </div>
    );
  }

  return (
    <div className={classes.services}>
      <CartProvider>
        <Navbar></Navbar>
        <div className={classes["h2-line-container"]}>
          <div className={classes["horizontal-line2"]}></div>
          <h2 className={classes["h2-line"]}>خدمات پرستاری</h2>
        </div>
        <div className={classes.float}>
          <div className="cards"></div>
          <Data></Data>
          <Card className={classes.sideContainer}>
            {/* {`${isBigScreen ? <p>hello</p> : <h1>hi</h1>}`} */}
            {addThis}
          </Card>
        </div>
        <p className={classes.footer}>Nurse Hub 2021 </p>
      </CartProvider>
    </div>
  );
};

export default Services;
