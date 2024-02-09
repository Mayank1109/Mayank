import React from "react";
import "./popover.css";
import { useDispatch, useSelector } from "react-redux";
import { popupActions } from "../store/componentSlice";
const PopOver = (props) => {
  const dispatch = useDispatch();
  const isPopupVisible = useSelector((state) => state.popup.isPopupVisible);

  setTimeout(() => {
    dispatch(popupActions.hide());
  }, 1000);

  const popupHandler = () => {
    dispatch(popupActions.hide());
  };
  console.log(isPopupVisible);
  return (
    <div className={`message-box message-box-${props.status}`}>
      <i className="fa fa-check fa-2x"></i>
      <span className="message-text">
        <strong>Success: </strong>
        {props.mssg}
      </span>
      <i className="fa fa-times fa-2x exit-button" onClick={popupHandler}></i>
    </div>
  );
};

export default PopOver;
