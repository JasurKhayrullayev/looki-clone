import loginStyle from "../Login/Login.module.css";
import siteLogo from "../../assets/sitelogo.svg";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

function Login({setLogin}) {
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    if (
      email.current.value === "looki@gmail.com" &&
      password.current.value === "123456"
    ) {
      localStorage.setItem("emailData", "looki@gmail.com");
      localStorage.setItem("passwordData", "123456");
      setLogin(true)
      navigate("/home");
    } else {
      setLogin(false)
      alert("Wrong email or password");

    }
  };
  return (
    <section className={loginStyle["login-wrapper"]}>
      <div className={loginStyle["login-container"]}>
        <div className={loginStyle["login-inner-wrapper"]}>
          <img className={loginStyle["login-logo"]} src={siteLogo} alt="" />
          <form onSubmit={submitHandler} className={loginStyle["login-form"]}>
            <input
              className={loginStyle["login-input"]}
              type="text"
              name="username"
              id="username"
              placeholder="USERNAME"
              defaultValue="looki@gmail.com"
              ref={email}
            />
            <input
              className={loginStyle["login-input"]}
              type="text"
              name="password"
              id="password"
              placeholder="PASSWORD"
              defaultValue="123456"
              ref={password}
            />
            <button
              onSubmit={submitHandler}
              className={loginStyle["login-btn"]}
            >
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;