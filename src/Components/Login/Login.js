import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import phoneImg from "./img/gamp-artboard 1.png";
import logo from "./img/gampLogo.png";
import "./Login.css";
import { useAuth } from "../../auth-context";

function Login() {
  const { login } = useAuth();
  const history = useHistory();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const { email, password } = form;

  const onInputChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setForm((form) => ({ ...form, [e.target.name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post("auth/login", form)
      .then((res) => {
        console.log(res);
        if (res.data.success === true) {
          localStorage.setItem("userToken", res.data.data.accesstoken);
          login();
        }
      })
      .catch((err) => {
        if (err) {
        }
      });
  };
  return (
    <section className="loginSec">
      <div className="logiInputs--Parent">
        <div className="loginInputs--Container">
          <div className="loginInputs">
            <img src={logo} alt="gamp logo" />
            <input
              className="input loginInput-exact"
              type="text"
              name="email"
              value={email}
              onChange={onInputChange}
              placeholder="Email Address or Phone Number"
            />
            <input
              className="input loginInput-exact"
              type="password"
              name="password"
              value={password}
              onChange={onInputChange}
              placeholder="Password"
            />
            <button onClick={handleSubmit} className="btn btnLogin">
              Log In
            </button>
            <p className="forgotP">Forgot Password?</p>
            <p className="loginCRight loginCRight-mob">© GAMP</p>
          </div>
          <p className="loginCRight">© GAMP</p>
        </div>
        <div className="phoneImg-sec">
          <img src={phoneImg} alt="phone image" />
        </div>
      </div>
    </section>
  );
}

export default Login;
