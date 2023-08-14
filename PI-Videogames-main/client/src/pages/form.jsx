import React, { useState } from "react";
import HeaderBar from "../components/headerBar";
import "../css/form.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Form = () => {
  const [title, setTitle] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [platforms, setplatforms] = useState([]);
  const [date, setDate] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");
  const [toSendGenres, setSendGenres] = useState([]);

  //ESTADOS VALIDADORES DE INPUTS
  const [picMenssage, setPicMenssage] = useState(false);
  const [ratingValue, setRatingValue] = useState(false);
  const [titleMassage, setTitleMassage] = useState(false);
  const [platformMassage, setPlatformMassage] = useState(false);
  const [submitAviable, setSubmitAviable] = useState(false);
  const [envioCorrecto, setEnvioCorrecto] = useState(false);

  const genresFiltered = toSendGenres.map((e) => e.number);
  const formulario = {
    Nombre: title,
    Descripcion: description,
    Plataformas: platforms,
    Imagen: imageURL,
    Fecha_lanzamiento: date,
    Rating: rating,
    Genres: genresFiltered,
  };

  function handleSelectClick(event) {
    event.preventDefault();
    const result = toSendGenres.map((e) => {
      if (e.number === parseInt(event.target.value)) {
        return true;
      }
    });

    if (!result.includes(true)) {
      setSendGenres([
        ...toSendGenres,
        {
          number: parseInt(event.target.value),
          name: event.target.innerHTML,
        },
      ]);
    }
  }

  function eraseItem(e) {
    const elementName = e.target.innerHTML;
    const newArray = toSendGenres.filter((e) => e.name !== elementName);
    setSendGenres(newArray);
  }

  const viewAllGenres = () => {
    const elemento = toSendGenres.map((e) => {
      return (
        <option
          onClick={(e) => {
            eraseItem(e);
          }}
        >
          {e.name}
        </option>
      );
    });
    return elemento;
  };

  function chargePicture(event) {
    event.preventDefault();
    const value = event.target.value;
    setImageURL(event.target.value);
    if (!/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/gm.test(value)) {
      setPicMenssage(true);
      return;
    }
    if (value.length < 200) {
      setPicMenssage(false);
      return;
    }
    if (value.length > 200) {
      setPicMenssage(true);
      return;
    }
  }

  function handleTitleValue(event) {
    const value = event.target.value;
    if (value.length < 100) {
      setTitleMassage(false);
      setTitle(value);
      return;
    }
    if (value.length > 10) {
      setTitleMassage(true);
      return;
    }
  }

  function handleRataingValue(event) {
    event.preventDefault();
    const value = parseFloat(event.target.value);
    setRating(value);
    if (!/^-?\d*\.?\d+$/.test(value)) {
      setRatingValue(true);
      event.target.value = "";
    }
    if (!value) {
      setRatingValue(false);
      return;
    }
    if (value < 0 || value > 5) {
      setRatingValue(true);
      //event.target.value = "";
      return;
    }
  }

  function handlePlatforms(event) {
    event.preventDefault();
    const value = event.target.value;
    if (value.length < 50) {
      setPlatformMassage(false);
      if (value === "") {
        setplatforms([]);
        return;
      }
      setplatforms([{ platform: { name: value } }]);
      return;
    }
    if (value.length > 50) {
      setPlatformMassage(true);
      return;
    }
  }

  function handleDate(event) {
    setDate(event.target.value);
  }

  function handleTextarea(event) {
    const value = event.target.value;
    setDescription(value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (
      !title ||
      !imageURL ||
      platforms.length === 0 ||
      !date ||
      !rating ||
      toSendGenres.length === 0 ||
      !description
    ) {
      setSubmitAviable(true);
      return;
    }
    if (titleMassage || picMenssage || platformMassage || ratingValue) {
      setSubmitAviable(true);
      return;
    }

    const result = axios
      .post("http://localhost:3001/videogames/", formulario)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error;
      });

    event.target[4].value = "";
    event.target[5].value = "";
    event.target[6].value = "";
    event.target[8].value = "";
    event.target[9].value = "";
    setSendGenres([]);
    setImageURL("");
    setEnvioCorrecto(true);
  }

  const styleImage = {
    backgroundImage: `url(${imageURL})`,
  };

  return (
    <div>
      <div>
        <HeaderBar />
      </div>
      <form onSubmit={handleSubmit}>
        <div id="mainContainer">
          <div id="lateralizq">
            <div id="picContainer" style={styleImage}></div>
            <div id="genresContainer">
              <div id="genresTitle">Genres</div>
              <div id="genresTitle">Click on genres what you want to add</div>
              <div id="genresSelectArea">
                <div id="genresSelectArea1">
                  <select multiple size="11">
                    {viewAllGenres()}
                  </select>
                </div>
                <div id="genresSelectArea2">
                  <button className="genresButton">
                    {/* &#x23e9;&#xfe0e; */}
                  </button>
                  <button className="genresButton">
                    {/* &#x23ea;&#xfe0e; */}
                  </button>
                </div>
                <div id="genresSelectArea3">
                  <select
                    value=""
                    onClick={(e) => {
                      handleSelectClick(e);
                    }}
                    multiple
                    size="11"
                  >
                    <option value="1">Action</option>
                    <option value="2">Indie</option>
                    <option value="3">Adventure</option>
                    <option value="4">RPG</option>
                    <option value="5">Strategy</option>
                    <option value="6">Shooter</option>
                    <option value="7">Casual</option>
                    <option value="8">Simulation</option>
                    <option value="9">Puzzle</option>
                    <option value="10">Arcade</option>
                    <option value="11">Platformer</option>
                    <option value="12">Racing</option>
                    <option value="13">Massively Multiplayer</option>
                    <option value="14">Sports</option>
                    <option value="15">Fighting</option>
                    <option value="16">Family</option>
                    <option value="17">Board Games</option>
                    <option value="18">Educational</option>
                    <option value="19">Card</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div id="lateralDer">
            <div id="CamposContainer">
              <div className="fieldContainer">
                <div className="labelField">Title:</div>
                <div className="inputField">
                  <input
                    placeholder="Hasta 100 Caracteres"
                    onChange={(e) => {
                      handleTitleValue(e);
                    }}
                  ></input>
                </div>
                <div className="messageField">
                  {titleMassage && (
                    <div className="messageContainer">
                      <div>Sobrepasaste el Limite de Caracteres Permitidos</div>
                    </div>
                  )}
                </div>
              </div>
              <div className="fieldContainer">
                <div className="labelField">Image URL:</div>
                <div className="inputField">
                  <input
                    placeholder="Hasta 200 Caracteres"
                    onChange={(e) => {
                      chargePicture(e);
                    }}
                  ></input>
                </div>
                <div className="messageField">
                  {picMenssage && (
                    <div className="messageContainer">
                      <div>URL No Valida</div>
                    </div>
                  )}
                </div>
              </div>
              <div className="fieldContainer">
                <div className="labelField">Platforms:</div>
                <div className="inputField">
                  <input
                    placeholder="Hasta 50 Caracteres"
                    onChange={(e) => {
                      handlePlatforms(e);
                    }}
                  ></input>
                </div>
                <div className="messageField">
                  {platformMassage && (
                    <div className="messageContainer">
                      <div>Sobrepasaste el Limite de Caracteres Permitidos</div>
                    </div>
                  )}
                </div>
              </div>
              <div className="fieldContainer">
                <div className="labelField">Fecha de Lanzamiento:</div>
                <div className="inputField">
                  <input
                    type="date"
                    id="start"
                    name="trip-start"
                    value={date}
                    min="2000-01-01"
                    max="2050-12-31"
                    onChange={(e) => {
                      handleDate(e);
                    }}
                  ></input>
                </div>
                <div className="messageField"></div>
              </div>
              <div className="fieldContainer">
                <div className="labelField">Rating:</div>
                <div className="inputField">
                  <input
                    placeholder="Numeros Entre 0 y 5"
                    onChange={(e) => {
                      handleRataingValue(e);
                    }}
                  ></input>
                </div>
                <div className="messageField ">
                  {ratingValue && (
                    <div className="messageContainer">
                      <div>Solo Numeros entre 0 y 5</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div id="DescriptionContainer">
              <div id="descriptionTitle">
                <div className="labelField">Description</div>
                <div className="inputField"></div>
                <div className="messageField "></div>
              </div>
              <div id="textBox">
                <textarea
                  onChange={(e) => {
                    handleTextarea(e);
                  }}
                ></textarea>
              </div>
              <div id="buttonsArea">
                <Link to="/videogames">
                  <p id="homeButton"></p>
                </Link>
                <p id="area1ButtonArea">
                  <button type="submit" disabled={submitAviable}>
                    Submit
                  </button>
                </p>
                <p id="area2ButtonArea">
                  <p>
                    {submitAviable && (
                      <p className="messageContainer">
                        <p>
                          Formulario de Ser Diligenciado Completamente con los
                          Datos Solicitados
                        </p>
                        <p
                          id="xCloseSubmmitMessage"
                          onClick={() => {
                            setSubmitAviable(false);
                          }}
                        >
                          x
                        </p>
                      </p>
                    )}
                    {envioCorrecto && (
                      <p id="envioCorrecto" className="messageContainer">
                        <p>Se Envio Correctamente el Formulario</p>
                        <p
                          id="xCloseSubmmitMessage"
                          onClick={() => {
                            setEnvioCorrecto(false);
                          }}
                        ></p>
                      </p>
                    )}
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
