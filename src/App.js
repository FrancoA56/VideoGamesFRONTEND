import "./App.css";
import Detail from "./components/detail";
import Register from "./components/register";
import Login from "./components/login";
import Filtros from "./components/filtros";
import Nav from "./components/nav";
import Games from "./components/games";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { addGame } from "./Redux/actions";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  const JUEGOS = useSelector((state) => state.myGames);
  const showNavLogin = location.pathname === "/login";
  const showNavRegister = location.pathname === "/register";
  const showOnDetail = location.pathname === "/detail";
  const showOnAbout = location.pathname === "/about";
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

  const URL = "http://localhost:3001/";

  useEffect(() => {
    if (!access && !showNavRegister) {
      navigate("/login");
    }
  }, [access, navigate, showNavRegister]);

  const login = async (userData) => {
    try {
      const data = await axios(
        `${URL}login?user=${userData.user}&email=${userData.email}&password=${userData.password}`
      );
      const { access } = data.data;
      setAccess(access);
      access && navigate("/home");
    } catch (error) {
      window.alert(error.message);
    }
  };

  const register = async (userData) => {
    try {
      await axios.post(`${URL}register`, userData);
      navigate("/login");
    } catch (error) {
      window.alert(error.message);
    }
  };

  async function onSearch(slug) {
    try {
      const response = await axios(`${URL}home/${slug}`);
      const { data } = response;

      // Verifico si algún juego con el mismo id ya está en el estado
      const newGames = data.filter(
        (juego) => !JUEGOS.some((existingGame) => existingGame.id === juego.id)
      );

      // Si hay nuevos juegos los agrego al estado global
      if (newGames.length > 0) {
        dispatch(addGame(newGames));
      } else {
        window.alert("Todos los juegos buscados ya están en la lista.");
      }
    } catch (error) {
      window.alert(error.message);
    }
  }

  return (
    <div className="App">
      {!showNavLogin && !showNavRegister && <Nav onSearch={onSearch} />}
      {!showNavLogin && !showNavRegister && !showOnAbout && !showOnDetail && (
        <Filtros />
      )}
      <Routes>
        <Route path="/login" element={<Login login={login} />} />
        <Route path="/register" element={<Register register={register} />} />
        <Route path="/home" element={<Games />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
