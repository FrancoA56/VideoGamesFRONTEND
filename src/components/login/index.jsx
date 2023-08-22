import React, { useState } from "react";
import { Validate } from "../validation";
import { NavLink } from "react-router-dom";
import "./index.css"

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
    <>
      <h1>Inicia Sesion!</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="">Usuario:</label>
            <input
              type="text"
              name="user"
              placeholder="Usuario"
              onChange={handleChange}
            />
            {errors.usuario && <p>{errors.usuario}</p>}
          </div>
          <div>
            <label htmlFor="">Email:</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="">Contraseña:</label>
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              onChange={handleChange}
            />
            {errors.password && <p>{errors.password}</p>}
          </div>
          <button type="submit">Ingresar</button>
          <div>
            <div>No tienes cuenta?</div>
            <NavLink to="/register">Registrate</NavLink>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
