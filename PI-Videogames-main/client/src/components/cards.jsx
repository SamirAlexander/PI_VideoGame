import React, { useEffect, useState } from "react";
import "../css/cards.css";
import { connect } from "react-redux";
import Card from "../components/card";
import loading from "../assets/loadingGif/ZZ5H.gif";
import Modal from "../components/modal";
import BarraPaginacion from "../components/barraPaginacion";

const Cards = ({ state }) => {
  const { arrayVideogames, caracteresLengthArray } = state;
  const [boolean, setBoolean] = useState(caracteresLengthArray);

  const [currenPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(15);

  const pages = [];
  const indexOfLastItem = currenPage * cardsPerPage;
  const indexOfFirstItem = indexOfLastItem - cardsPerPage;
  let currentCards = [];

  if (currenPage === 1) {
    currentCards = arrayVideogames.slice(0, 15);
  } else {
    currentCards = arrayVideogames.slice(indexOfFirstItem, indexOfLastItem);
  }

  for (let i = 1; i <= Math.ceil(arrayVideogames.length / cardsPerPage); i++) {
    pages.push(i);
  }

  useEffect(() => {
    if (pages.length === 1) {
      setCurrentPage(1);
    }
  }, [arrayVideogames, currenPage]);

  function handleClick(e) {
    const num = parseInt(e);
    setCurrentPage(num);
  }
  const renderBarraPaginacion = pages.map((e) => {
    return (
      <p>
        <BarraPaginacion number={e} handleClick={handleClick} />
      </p>
    );
  });

  const componente = boolean;
  const componenteII = !boolean;

  useEffect(() => {
    setBoolean(caracteresLengthArray);
  }, [caracteresLengthArray]);

  return (
    <div>
      <div id="paginationContainer">{renderBarraPaginacion}</div>
      <div id="cardStyle">
        {componente && (
          <Modal>
            <p>Solo 50 Caracteres</p>
          </Modal>
        )}
        {componenteII &&
          (arrayVideogames[0] === "No Hay Generos" ? (
            <Modal>
              <p>No Found...!</p>
            </Modal>
          ) : arrayVideogames.length === 0 ? (
            <img id="loadinGif" src={loading} />
          ) : (
            currentCards?.map((game) => (
              <Card
                key={game.id}
                id={game.id}
                name={game.name}
                img={game.background_image}
                genres={game.genres[0] ? game.genres[0].name : "Not Genres"}
                rating={game.rating}
              />
            ))
          ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

export default connect(mapStateToProps, null)(Cards);

/* <p id="noDataMessage">
  <p id="picContainer">
    <p id="noDataMessagePic"></p>
  </p>
  <p id="textContainer">
    <p id="noDataMessageText">Not Found!</p>
    <button
      id="botonMensaje"
      onClick={() => {
        restoreAllVideogames();
      }}
    >
      Aceptar
    </button>
  </p>
</p> */
