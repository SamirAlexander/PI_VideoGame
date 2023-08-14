import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/headerBar.css";
import DropdownGenres from "./dropdownGenres";
import DropdownSortings from "../components/dropdownSorting";
import { connect } from "react-redux";
import {
  getVideogameByName,
  setCaracteresLengthArray,
} from "../redux/actions/gamesAction.js";

import logo from "../assets/logo/LogoII.JPG";

const HeaderBar = ({ getVideogameByName, setCaracteresLengthArray }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (value.length >= 3) {
      getVideogameByName(value);
    }
  }, [value]);

  function handleInput(event) {
    const inputValue = event.target.value;

    if (inputValue.length > 50) {
      setCaracteresLengthArray(true);
      event.target.value = "";
      return;
    }
    if (!inputValue.trim()) {
      return;
    }
    setValue(inputValue);
  }

  return (
    <div id="barContainer">
      <div id="logoContainer">
        <Link to="/">
          <img src={logo} alt="imagen del Logo" />
        </Link>
        <h1>Henry Videogames</h1>
      </div>
      <div id="filterContainer">
        <p className="filterText">Genres</p>
        <DropdownGenres />
        <p className="filterText">Sorting</p>
        <DropdownSortings />
      </div>
      <div id="searchContainer">
        <p id="seachText">Search</p>
        <input
          type="text"
          placeholder="Search By Name"
          onChange={(event) => {
            handleInput(event);
          }}
        ></input>
      </div>
      <div id="createContainer">
        <p id="createText">Create New Videogame</p>
        <Link to="/form">
          <button id="createButton">Create</button>
        </Link>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    state: state,
  };
};
function mapDispatchToProps(dispatch) {
  return {
    getVideogameByName: (name) => dispatch(getVideogameByName(name)),
    setCaracteresLengthArray: (boolean) =>
      dispatch(setCaracteresLengthArray(boolean)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderBar);
