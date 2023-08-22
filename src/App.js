import "./App.css";
import Detail from "./components/detail";
import Register from "./components/register";
import Login from "./components/login";
import Nav from "./components/nav";
import Games from "./components/games";
import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const showNavLogin = location.pathname === "/login";
  const showNavRegister = location.pathname === "/register";
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const [isGame, setIsGame] = useState([]);

  const URL = "http://localhost:3001/";

  useEffect(() => {
    if (!access && !showNavRegister) {
      navigate("/home");
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
      if (data) {
        const isGameAdded = isGame.some((gam) => gam.id === data.id);
        if (!isGameAdded) {
          setIsGame((oldGames) => [...oldGames, data]);
        }
      }
    } catch (error) {
      window.alert(error.message);
    }
  }

  function onClose(id) {
    setIsGame((oldGames) => oldGames.filter((gam) => gam.id !== Number(id)));
  }

  return (
    <div className="App">
      {!showNavLogin && !showNavRegister && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/login" element={<Login login={login} />} />
        <Route path="/register" element={<Register register={register} />} />
        <Route
          path="/home"
          element={<Games isGame={isGame} onClose={onClose} />}
        />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
