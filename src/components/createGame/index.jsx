import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ValidateCreate } from "../validateCreate";
import { addGame } from "../../Redux/actions";

import "./index.css";

function CreateGame() {
  // const [draggedImages, setDraggedImages] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errorsCreate, setErrorsCreate] = useState({});
  const [createGame, setCreateGame] = useState({
    name: "",
    rating_top: "",
    playtime: "",
    esrb_rating: "",
    genres: "",
    background_image: "",
  });

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
      const genres = event.target.elements.genres.value;
      const background_image = event.target.elements.background_image.value;
      const URL = "http://localhost:3001/createGame";
      const { data } = await axios.post(URL, {
        name,
        released,
        rating_top,
        playtime,
        esrb_rating,
        genres,
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
  // const handleDragOver = (e) => {
  //   e.preventDefault();
  //   console.log("dragover");
  // };
  // const handleDrop = (e) => {
  //   e.preventDefault();
  //   const files = e.dataTransfer.files;

  //   if (files && files.length > 0) {
  //     const images = Array.from(files).filter((file) =>
  //       file.type.startsWith("image/")
  //     );

  //     // Actualizar el estado con la imágen arrastrada
  //     setDraggedImages(images);

  //     // Mostrar las imágenes en el elemento #caja
  //     const caja = document.querySelector("#caja");
  //     images.forEach((image) => {
  //       const imgElement = document.createElement("img");
  //       imgElement.src = URL.createObjectURL(image);
  //       caja.appendChild(imgElement);
  //     });
  //   }
  // };

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
              <p id="errors-create1" className="errors-create">{errorsCreate.name}</p>
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
              <p id="errors-create2" className="errors-create">{errorsCreate.rating_top}</p>
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
              <p id="errors-create3" className="errors-create">{errorsCreate.playtime}</p>
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
              <p id="errors-create4" className="errors-create">{errorsCreate.esrb_rating}</p>
            )}

            <label className="label-create">Genre</label>
            <input
              type="text"
              className="inputs-create"
              id="genres"
              name="genres"
              placeholder="Action, Indie, Shooter, etc..."
              onChange={handleChange}
            />
            {errorsCreate.genres && (
              <p id="errors-create5" className="errors-create">{errorsCreate.genres}</p>
            )}

            <label className="label-create">URL of an image</label>
            <input
              type="text"
              className="inputs-create"
              id="background_image"
              name="background_image"
              placeholder="You can drag and drop an img"
              onChange={handleChange}a
            />
            {errorsCreate.background_image && (
              <p id="errors-create6" className="errors-create">{errorsCreate.background_image}</p>
            )}
          </div>
          <button className="boton-create" type="submit">
            Create game
          </button>
        </form>
      </div>
      {/* <div className="caja-container-create">
        {!draggedImages ? (
          <div>Drag an image</div>
        ) : (
          draggedImages.map((image, index) => (
            <div
              id="caja"
              key={index}
              handleDragOver={handleDragOver}
              handleDrop={handleDrop}
            />
            
          ))
        )}
      </div> */}
    </div>
  );
}

export default CreateGame;
