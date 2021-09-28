import React from "react";
import classes from "./Modal.module.css";
import Cart from "./Cards/Cart";
import ConfirmBtn from "../UI/ConfirmBtn";

const Modal = () => {
  return (
    <div>
      <button
        type="button"
        className={classes["modal-btn"]}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        خدمات درخواستی
        <div className={classes["total-number"]}>4</div>
      </button>
      <div
        className={`modal fade `}
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog  modal-dialog-centered">
          <div className={`modal-content ${classes["modal-bg-color"]}`}>
            <div class="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                لیست خدمات درخواستی
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body" dir="rtl">
              <Cart></Cart>
            </div>
            <div class="modal-footer">
              {/* <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button> */}
              <ConfirmBtn></ConfirmBtn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
