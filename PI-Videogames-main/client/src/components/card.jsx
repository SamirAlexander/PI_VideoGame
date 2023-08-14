import React from "react";
import "../css/card.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  const image = {
    backgroundImage: `url(${props.img})`,
  };
  return (
    <div id="cardContainer">
      <div>
        <Link to={`/videogames/${props.id}`}>
          <div id="pictureCard" style={image}></div>
        </Link>
      </div>
      <div>
        <h1 id="titleText">{props.name}</h1>
        <h2>Género: {props.genres} </h2>
        <h2>Rating: {props.rating} </h2>
      </div>
    </div>
  );
};

export default Card;
