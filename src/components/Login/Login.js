import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Card from "../UI/Card";
import classes from "./Login.module.css";

const Login = () => {
  const [enteredNumber, setEnteredNumber] = useState("");

  const userNumberHandler = (event) => {
    setEnteredNumber(event.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const userNumberData = {
      phoneNumber: enteredNumber,
    };

    console.log(userNumberData);
  };

  return (
    <div className={classes.login}>
      <Navbar />
      <div className={classes["h2-line-container"]}>
        <div className={classes["horizontal-line2"]}></div>
        <h2 className={classes["h2-line"]}>ورود یا ثبت نام</h2>
      </div>
      <div className={classes.container}>
        <Card className={`${classes["inner-container"]} py-4`}>
          <form onSubmit={submitHandler}>
            <div className="mb-3 p-4">
              <label htmlFor="phone" className={"form-label"}>
                شماره تلفن
              </label>
              <input
                type="tel"
                className={`form-control ${classes["bg-input-color"]}`}
                id="phone"
                aria-describedby="emailHelp"
                onChange={userNumberHandler}
                name="phone"
                placeholder="09123456789"
                pattern="[09][0-9]{10}"
              />
            </div>
            <div className={"d-grid gap-2 m-4"}>
              <button className={classes["btn-login"]} type="submit">
                تایید
              </button>
            </div>
          </form>
          <p className={`${classes["login-p"]} m-4`}>
            با ورود و ثبت نام در Nurse Hub شما{" "}
            <a className={classes.rules} href="#">
              شرایط و قوانین
            </a>{" "}
            استفاده از سرویس های Nurce Hub و{" "}
            <a className={classes.rules} href="#">
              قوانین حریم خصوصی
            </a>{" "}
            آن را می پذیرید.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Login;
