import React, { useState } from "react";
import { Validate } from "../validation";
import { useNavigate, NavLink } from "react-router-dom";

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
    <>
      <h1>Crea tu usuario!</h1>
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
            {errors.usuario && <div>{errors.usuario}</div>}
          </div>
          <div>
            <label htmlFor="">Email:</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />
            {errors.email && <div>{errors.email}</div>}
          </div>
          <div>
            <label htmlFor="">Contraseña:</label>
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              onChange={handleChange}
            />
            {errors.password && <div>{errors.password}</div>}
          </div>
          <button type="submit">Crear cuenta</button>
          <div>
            <p>Ya tienes cuenta?</p>
            <NavLink to="/login">Logueate</NavLink>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
