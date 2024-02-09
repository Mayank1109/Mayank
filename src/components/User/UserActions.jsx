import React, { useEffect, useMemo, useState } from "react";
import Modal from "../modal/modal";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../store/modalSlice";

const UserActions = ({ params, rowId }) => {
  const disptach = useDispatch();

  const modalHandler = (event, actionType) => {
    event.preventDefault();

    disptach(modalActions.modalData(params.row));
    disptach(modalActions.display(actionType));
  };

  return (
    <>
      <div>
        <button
          className="button bin__button"
          onClick={(event) => modalHandler(event, "view")}
        >
          view
        </button>
        <button
          className="button bin__button"
          onClick={(event) => modalHandler(event, "edit")}
        >
          edit
        </button>
        <button
          className="button bin__button"
          onClick={(event) => modalHandler(event, "delete")}
        >
          delete
        </button>
      </div>
    </>
  );
};

export default UserActions;
