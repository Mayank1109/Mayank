import React, { useMemo, useState } from "react";
import ReactDOM from "react-dom";
import "./modal.css";
import { modalActions } from "../../store/modalSlice";
import { useDispatch, useSelector } from "react-redux";

const Modal = (props) => {
  console.log(props.data);

  const [name, setName] = useState(
    props.data?.role_name ? props.data.role_name : props.data.name
  );
  const [id, setId] = useState(props.data.id);
  const [age, setAge] = useState(
    props.data?.no_of_users ? props.data.no_of_users : props.data.age
  );
  const [active, setActive] = useState(props.data.active);
  const [role, setRole] = useState(props.data?.role ? props.data?.role : "");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleActiveChange = (event) => {
    setActive(event.target.value);
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const dispatch = useDispatch();
  const actionType = useSelector((state) => state.modal.actionType);

  const ModalCloseHandler = (event) => {
    event.preventDefault();
    dispatch(modalActions.hide());
  };

  let modalContent = null;

  switch (actionType) {
    case "view":
      modalContent = (
        <>
          <h2>Id: {props.data.id}</h2>
          <h2>
            {props.data?.role_name ? "Role Name" : "Name"} :
            {props.data?.role_name ? props.data.role_name : props.data.name}
          </h2>
          <h2>Active: {props.data.active}</h2>
          <h2>
            {props.data?.no_of_users ? "Users" : "Age"}:
            {props.data?.no_of_users ? props.data.no_of_users : props.data.age}
          </h2>
          {props.data?.role && <h2>Role: {props.data.role}</h2>}
          <button className="modal__btn" onClick={ModalCloseHandler}>
            Okay
          </button>
        </>
      );
      break;

    case "edit":
      modalContent = (
        <>
          <input
            type="text"
            id="id"
            placeholder="id"
            value={id}
            onChange={handleIdChange}
          />
          <input
            type="text"
            id="name"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
          />
          <input
            type="text"
            id="active"
            placeholder="Active"
            value={active}
            onChange={handleActiveChange}
          />
          <input
            type="text"
            id="age"
            placeholder="Age"
            value={age}
            onChange={handleAgeChange}
          />
          {props.data.role && (
            <input
              type="text"
              id="role"
              placeholder="Role"
              value={role}
              onChange={handleRoleChange}
            />
          )}

          <button
            type="submit"
            className="modal__btn"
            onClick={ModalCloseHandler}
          >
            Submit
          </button>
        </>
      );
      break;

    case "delete":
      modalContent = (
        <>
          <h1>Are you sure you want to delete?</h1>
          <button className="modal__btn" onClick={ModalCloseHandler}>
            Confirm
          </button>
          <button className="modal__btn" onClick={ModalCloseHandler}>
            Cancel
          </button>
        </>
      );
      break;

    default:
      modalContent = (
        <>
          <h1>This is the default case , just in case</h1>
          <button className="modal__btn">Close</button>
        </>
      );
      break;
  }

  return ReactDOM.createPortal(
    <>
      <section className="modal hidden">
        <div className="flex">
          <button className="modal__btn-close" onClick={ModalCloseHandler}>
            ⨉
          </button>
        </div>

        {modalContent}
      </section>

      <div className="overlay hidden" onClick={ModalCloseHandler}></div>
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
