import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "./useMedia";
import Cart from "./Cards/Cart";
import classes from "./SidebarContainer.module.css";
import ConfirmBtn from "../UI/ConfirmBtn";

const SideBarContainer = () => {
  const isBigScreen = useMediaQuery("(min-width:1250px)");

  let addThis;
  if (isBigScreen) {
    addThis = (
      <div>
        <div className="mb-4">
          <p>
            متقاضی:{" "}
            <Link className={classes.enter} to="/sign-up">
              وارد شوید
            </Link>
          </p>
        </div>
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

        <p className="my-2">لیست خدمات درخواستی</p>
        <div className="mb-4">
          <Cart></Cart>
        </div>
        <div className={classes["horizontal-line"]}></div>
        <ConfirmBtn></ConfirmBtn>
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
  return <div>{addThis}</div>;
};

export default SideBarContainer;
