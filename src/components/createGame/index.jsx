import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ValidateCreate } from "../validateCreate";
import { addGame } from "../../Redux/actions";

import "./index.css";

function CreateGame() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isGenres, setIsGenres] = useState(false);
  const [genreId, setGenreId] = useState([]);
  const [genreName, setGenreName] = useState([]);
  const [errorsCreate, setErrorsCreate] = useState({});

  const [createGame, setCreateGame] = useState({
    name: "",
    rating_top: "",
    playtime: "",
    esrb_rating: "",
    genreIds: [],
    background_image: "",
  });

  const handleGenres = () => {
    setIsGenres(true);
  };
  const cerrarHandleGenres = () => {
    setIsGenres(false);
  };
  const handleDelete= () => {
    setGenreName([]);
    setGenreId([]);
  };

  const handleGenresButton = (name, id) => {
    if (!genreId.includes(id)) {
      setGenreName([...genreName, name, ", "]);
      setGenreId([...genreId, id]);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCreateGame({
      ...createGame,
      [name]: value,
    });
    setErrorsCreate(
      ValidateCreate({
        ...createGame,
        [name]: value,
      })
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const name = event.target.elements.name.value;
      const released = event.target.elements.released.value;
      const rating_top = event.target.elements.rating_top.value;
      const playtime = event.target.elements.playtime.value;
      const esrb_rating = event.target.elements.esrb_rating.value;
      const genreIds = genreId;
      const background_image = event.target.elements.background_image.value;
      const URL = "http://localhost:3001/createGame";
      const { data } = await axios.post(URL, {
        name,
        released,
        rating_top,
        playtime,
        esrb_rating,
        genreIds,
        background_image,
      });
      if (data) {
        dispatch(addGame([data]));
        alert("The game has been created successfully");
        navigate("/home");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="contenedor-general-create">
      <div className="form-container-create">
        <h1 className="titulo-create">Create your own game!</h1>
        <form onSubmit={handleSubmit} className="form-create">
          <div className="form-group-create">
            <label className="label-create">Name:</label>
            <input
              type="text"
              className="inputs-create"
              id="name"
              name="name"
              placeholder="Ej: Grand Theft Auto 6"
              onChange={handleChange}
            />
            {errorsCreate.name && (
              <p id="errors-create1" className="errors-create">
                {errorsCreate.name}
              </p>
            )}
            <label className="label-create">Release date:</label>
            <input
              type="date"
              className="inputs-create"
              id="released"
              name="released"
              placeholder="Ej: 2013-08-13"
            />
            <label className="label-create">Rating value:</label>
            <input
              type="text"
              className="inputs-create"
              id="rating_top"
              name="rating_top"
              placeholder="1 is low and 5 is high"
              onChange={handleChange}
            />
            {errorsCreate.rating_top && (
              <p id="errors-create2" className="errors-create">
                {errorsCreate.rating_top}
              </p>
            )}

            <label className="label-create">Average playtime:</label>
            <input
              type="text"
              className="inputs-create"
              id="playtime"
              name="playtime"
              placeholder="Ej: 36hs"
              onChange={handleChange}
            />
            {errorsCreate.playtime && (
              <p id="errors-create3" className="errors-create">
                {errorsCreate.playtime}
              </p>
            )}

            <label className="label-create">ESRB rating</label>
            <input
              type="text"
              className="inputs-create"
              id="esrb_rating"
              name="esrb_rating"
              placeholder="Mature, Teen, Everyone"
              onChange={handleChange}
            />
            {errorsCreate.esrb_rating && (
              <p id="errors-create4" className="errors-create">
                {errorsCreate.esrb_rating}
              </p>
            )}

            <label className="label-create">Genre</label>
            <div className="contenedor-create-genre">{genreName}</div>
            <label className="label-create">URL of an image</label>
            <input
              type="text"
              className="inputs-create"
              id="background_image"
              name="background_image"
              placeholder="You can drag and drop an img"
              onChange={handleChange}
              a
            />
            {errorsCreate.background_image && (
              <p id="errors-create6" className="errors-create">
                {errorsCreate.background_image}
              </p>
            )}
          </div>
          <button className="boton-create" type="submit">
            Create game
          </button>
        </form>
      </div>
      {genreId.length && (
        <button className="boton-borrar-genre-create" onClick={handleDelete}>
          <i id="borrar-genre-create" className="material-icons">
            delete
          </i>
        </button>
      )}
      {!isGenres ? (
        <button className="boton-agregar-genre-create" onClick={handleGenres}>
          <i id="agregar-genre-create" className="material-icons">
            add
          </i>
        </button>
      ) : (
        <button
          className="boton-agregar-genre-create"
          onClick={cerrarHandleGenres}
        >
          <i id="cerrar-genre-create" className="material-icons">
            close
          </i>
        </button>
      )}
      {isGenres && (
        <div className="contenedor-botonera-create">
          <button
            className="boton-create-genres"
            onClick={() => handleGenresButton("Action", 4)}
          >
            Action
          </button>
          <button
            className="boton-create-genres"
            onClick={() => handleGenresButton("Indie", 51)}
          >
            Indie
          </button>
          <button
            className="boton-create-genres"
            onClick={() => handleGenresButton("Adventure", 3)}
          >
            Adventure
          </button>
          <button
            className="boton-create-genres"
            onClick={() => handleGenresButton("RPG", 5)}
          >
            RPG
          </button>
          <button
            className="boton-create-genres"
            onClick={() => handleGenresButton("Shooter", 2)}
          >
            Shooter
          </button>
          <button
            className="boton-create-genres"
            onClick={() => handleGenresButton("Racing", 1)}
          >
            Racing
          </button>
          <button
            className="boton-create-genres"
            onClick={() => handleGenresButton("Sports", 15)}
          >
            Sports
          </button>
          <button
            className="boton-create-genres"
            onClick={() => handleGenresButton("Fighting", 6)}
          >
            Fighting
          </button>
          <button
            className="boton-create-genres"
            onClick={() => handleGenresButton("Arcade", 11)}
          >
            Arcade
          </button>
          <button
            className="boton-create-genres"
            onClick={() => handleGenresButton("Card", 17)}
          >
            Card
          </button>
          <button
            className="boton-create-genres"
            onClick={() => handleGenresButton("Educational", 34)}
          >
            Educational
          </button>
          <button
            className="boton-create-genres"
            onClick={() => handleGenresButton("Casual", 40)}
          >
            Casual
          </button>
          <button
            id="boton-puzzle"
            className="boton-create-genres"
            onClick={() => handleGenresButton("Puzzle", 7)}
          >
            Puzzle
          </button>
        </div>
      )}
    </div>
  );
}

export default CreateGame;
