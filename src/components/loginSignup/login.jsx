import React, { useState } from "react";
import "./loginsignup.css";
import { Form } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { authActions } from "../../store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import PopOver from "../../ui/popover";
import { popupActions } from "../../store/componentSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginStatus, setLoginStatus] = useState();
  const [message, setMessage] = useState();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const isPopupVisible = useSelector((state) => state.popup.isPopupVisible);
  const loginHandler = (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const pwd = document.getElementById("password").value;
    const role = document.getElementById("role").value;

    if (
      email.length < 4 ||
      !email.includes("@") ||
      pwd.length == 0 ||
      email.length == 0
    ) {
      setMessage("credentials invalid or empty!!");
      setLoginStatus("fail");
      dispatch(popupActions.display());

      {
        isPopupVisible && <PopOver mssg={message} status={loginStatus} />;
      }

      return;
    }

    console.log(role);
    //   // if (logged in successfully) {
    setMessage("Logged in Successfullt!!");
    setLoginStatus("success");
    dispatch(authActions.login(role));

    dispatch(popupActions.display());
    //   // console.log("Logged in Successfully !!");
    setTimeout(() => {
      navigate("/dashboard");
    }, 1000);
    //   // }
    //   //
  };

  return (
    <div className="login section">
      <div className="log__container" id="container">
        <div className="form-container log-in-container">
          <Form method="post" className="log__form" action="#">
            {isPopupVisible && <PopOver mssg={message} status={loginStatus} />}
            <h1 style={{ marginBottom: "2.5rem" }}>login.</h1>
            <input
              id="email"
              name="email"
              className="log__input"
              type="email"
              placeholder="Email"
              required
            />
            <input
              id="password"
              className="log__input"
              name="password"
              type="password"
              placeholder="Password"
              required
            />
            <select name="Role" id="role" className="log__input">
              <option value="User">User</option>
              <option value="Admin">Admin</option>
            </select>
            <button className="log__btn button" onClick={loginHandler}>
              Login
            </button>
          </Form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
              <div className="log__img"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
