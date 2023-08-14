import React from "react";
import "../css/modal.css";
import { connect } from "react-redux";
import {
  restoreAllVideogames,
  setCaracteresLengthArray,
} from "../redux/actions/gamesAction.js";

const Modal = ({
  children,
  restoreAllVideogames,
  setCaracteresLengthArray,
}) => {
  return (
    <p id="modal is-open">
      <p id="modalContainer">
        <p id="picContainer">
          <p id="noDataMessagePic"></p>
        </p>
        <p id="textContainer">
          {children}
          <button
            id="botonMensaje"
            onClick={() => {
              restoreAllVideogames();
              setCaracteresLengthArray(false);
            }}
          >
            Aceptar
          </button>
        </p>
      </p>
    </p>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    restoreAllVideogames: () => dispatch(restoreAllVideogames()),
    setCaracteresLengthArray: (boolean) =>
      dispatch(setCaracteresLengthArray(boolean)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
