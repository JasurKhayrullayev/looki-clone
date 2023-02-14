import React from "react";
import modalStyle from "../Modal/Modal.module.css";
import modalRmove from "../../assets/modal-remove.svg";
import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function Modal(props) {
  const hiddenModal = props.hiddenModal
  const cosTitle = useRef();
  const costref = useRef();
  const rate = useRef();

  const sendDataToServer = (e) => {
    e.preventDefault();

    const data = {
      cosTitle: cosTitle.current.value,
      costref: costref.current.value,
      rate: rate.current.value,
    };

    if (
      !data.cosTitle.length ||
      !data.costref.length ||
      !data.rate.length
    ) {
      alert("Please fill out all inputs!!!");
    } else {
      axios
        .post(
          "https://exam5-fad81-default-rtdb.firebaseio.com/",
          data
        )
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          window.location.reload(false);
        });
    }

    props.onsetShowModal(false);
    props.onsetHiddenBack(false);
  };

  const removeModal = (e) => {
    props.onsetShowModal(false);
    props.onsetHiddenBack(false);
  };

  return (
    <div className={modalStyle["modal-wrapper"]}>
      <div className={modalStyle["modal-container"]}>
        <button
          className={modalStyle["modal-btn-remove"]}
          onClick={hiddenModal}
        >
          <img className={modalStyle["modal-remove"]} src={modalRmove} alt="" />
        </button>
        <form onSubmit={sendDataToServer} className={modalStyle["modal-form"]}>
          <input
            ref={cosTitle}
            className={modalStyle["modal-input"]}
            type="text"
            name="cosTitle"
            placeholder="Cosmetics Title"
          />

          <input
            ref={costref}
            className={modalStyle["modal-input"]}
            type="number"
            name="Cost"
            placeholder="Cost: $"
          />

          <input
            type="number"
            className={modalStyle["modal-input"]}
            name="Rate"
            placeholder="5"
            ref={rate}
          />
          <button
            onSubmit={sendDataToServer}
            className={modalStyle["edit-btn"]}
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

export default Modal;