import React, { useState } from "react";
import { Validate } from "../validation";
import { NavLink } from "react-router-dom";
import batmanFondo from "../../utils/imagenes-videogames/batman_arkham_knight_by_vgwallpapers_d7j7i9y.jpg"
import "./index.css";

const Login = ({ login }) => {
  const [errors, setErrors] = useState({});
  const [userData, setUserData] = useState({
    user: "",
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });

    setErrors(
      Validate({
        ...userData,
        [name]: value,
      })
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    login(userData);
  }

  return (
    <div className="login-container" style={{backgroundImage: `url(${batmanFondo})`}}>
      <div className="login-form">
        <h1 className="titulo5" style={{marginTop: '20px'}}>Log In</h1>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label className="label" htmlFor="user">User:</label>
            <input
              className="inputs2"
              type="text"
              id="user"
              name="user"
              placeholder="Username"
              onChange={handleChange}
            />
            {errors.usuario && <p className="errors-login">{errors.usuario}</p>}
          </div>
          <div className="form-group">
            <label className="label" htmlFor="email">Email:</label>
            <input
              className="inputs2"
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />
            {errors.email && <p className="errors-login">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label className="label" htmlFor="password">Password:</label>
            <input
              className="inputs2"
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
            {errors.password && <p className="errors-login">{errors.password}</p>}
          </div>
          <button className="ingresar" type="submit">Enter</button>
          <div className="register-link">
            <div className="crear-cuenta">Not Registered yet?</div>
            <NavLink className="link5" to="/register">Create account</NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
