import React, { useEffect } from "react";
import "../css/home.css";
import HeaderBar from "../components/headerBar";
import Cards from "../components/cards";
import {
  restoreAllVideogames,
  getAllVideogames,
} from "../redux/actions/gamesAction.js";
import { connect } from "react-redux";

const Home = ({ state, restoreAllVideogames, getAllVideogames }) => {
  const { arrayVideogames } = state;

  useEffect(() => {
    //getAllVideogames();
    //restoreAllVideogames();
  }, []);

  return (
    <div>
      <HeaderBar />
      <div id="bodyHome">
        <Cards />
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
    restoreAllVideogames: () => dispatch(restoreAllVideogames()),
    getAllVideogames: () => dispatch(getAllVideogames()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
