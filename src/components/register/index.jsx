import React, { useState } from "react";
import { Validate } from "../validation";
import { useNavigate, NavLink } from "react-router-dom";
import kratosFondo from "../../utils/imagenes-videogames/oil_painted_kratos_by_shadowxp6_d52hwd8.jpg";
import "./index.css";


const Register = ({ register }) => {
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
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

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await register(userData);
      if (userData) {
        alert("Cuenta creada exitosamente.");
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="login-container" style={{backgroundImage: `url(${kratosFondo})`}}>
      <div className="login-formo">
        <h1 className="titulos">Register</h1>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-groupo">
            <label className="label" htmlFor="user">User:</label>
            <input
              className="inputo"
              type="text"
              id="user"
              name="user"
              placeholder="Usuario"
              onChange={handleChange}
            />
            {errors.usuario && <p className="error">{errors.usuario}</p>}
          </div>
          <div className="form-groupo">
            <label className="label" htmlFor="email">Email:</label>
            <input
              className="inputo"
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="form-groupo">
            <label className="label" htmlFor="password">Password:</label>
            <input
              className="inputo"
              type="password"
              id="password"
              name="password"
              placeholder="Contraseña"
              onChange={handleChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <button className="ingresar" type="submit">Create account</button>
          <div className="register-link">
            <div className="crear-cuenta">Already have an account?</div>
            <NavLink className="link" to="/login">Log in</NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
