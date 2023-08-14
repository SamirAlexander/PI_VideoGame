import React from "react";
import "../css/barraPaginacion.css";

const BarraPaginacion = (props) => {
  return (
    <div id="numbersContainer">
      <div
        id="numbers"
        onClick={(e) => {
          props.handleClick(e.target.innerText);
        }}
      >
        {props.number}{" "}
      </div>
    </div>
  );
};

export default BarraPaginacion;
