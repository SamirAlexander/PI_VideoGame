import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/landingPage.css";
import logo from "../assets/logo/LogoII.JPG";
import { connect } from "react-redux";
import {
  getAllVideogames,
  chargeAllGenres,
} from "../redux/actions/gamesAction.js";
import picture1 from "../assets/landingPagePics/4be6a6ad0364751a96229c56bf69be59.jpg";
import picture2 from "../assets/landingPagePics/7cfc9220b401b7a300e409e539c9afd5.jpg";
import picture3 from "../assets/landingPagePics/021c4e21a1824d2526f925eff6324653.jpg";
import picture4 from "../assets/landingPagePics/456dea5e1c7e3cd07060c14e96612001.jpg";
import picture5 from "../assets/landingPagePics/618c2031a07bbff6b4f611f10b6bcdbc.jpg";
import picture6 from "../assets/landingPagePics/3283617cb7d75d67257fc58339188742.jpg";
import picture7 from "../assets/landingPagePics/b8c243eaa0fbac8115e0cdccac3f91dc.jpg";
import picture8 from "../assets/landingPagePics/bc06a29ceac58652b684deefe7d56099.jpg";
import picture9 from "../assets/landingPagePics/c4b0cab189e73432de3a250d8cf1c84e.jpg";
import picture10 from "../assets/landingPagePics/fc1307a2774506b5bd65d7e8424664a7.jpg";

const LandingPage = ({ state, getAllVideogames, chargeAllGenres }) => {
  const { mainArrayVideogames } = state;

  useEffect(() => {
    getAllVideogames();
    chargeAllGenres();
  }, []);

  const picures = [
    picture1,
    picture2,
    picture3,
    picture4,
    picture5,
    picture6,
    picture7,
    picture8,
    picture9,
    picture10,
  ];

  const [picture, setPicture] = useState(0);

  function contador() {
    if (picture === 9) {
      setPicture(0);
      return;
    }

    setPicture(picture + 1);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      contador();
    }, 3000);

    return () => clearInterval(interval);
  }, [picture, contador]);

  const picStayles = {
    backgroundImage: `url(${picures[picture]})`,
  };

  const url = `https://www.youtube.com/embed/F2JgVw4n-TY?controls=0&autoplay=1&mute=1`;

  return (
    <div id="mainContainer">
      <div id="mainPic" style={picStayles}>
        <div id="headLineContainer">
          <div id="headLine">
            <img src={logo} alt="Imagen Logo" />
          </div>
          <h1 id="titleLogo">Henry Videogames</h1>
        </div>
        <div id="videoLine">
          <iframe
            width="300"
            height="170"
            src={url}
            title="YouTube video player"
            frameBorder="1"
            allow="autoplay"
          ></iframe>
        </div>
      </div>
      <div id="latLanding">
        <div id="welcomeMessage">
          <p>
            <span id="firstWord">Welcome</span>, Are you a game lover and
            looking for a place where you can find the most exciting titles?
            This is the right place. <br /> On our website, you will find a wide
            selection of games of all genres, from the classic ones to the most
            innovative. Don't waste any more time! Discover the excitement and
            fun that our video games have to offer. Access our game catalog,
            where you can find many alternatives. Click the button below and
            let's start the adventure!{" "}
          </p>
        </div>
        <div id="buttonStart">
          <Link to="/videogames">
            <button id="startButton">Start</button>
          </Link>
        </div>
        <div id="landingFooter">
          <h1>Created By Samir Alexander Diaz</h1>
          <h1>Copyright © 2023 SoyHenry. All Rights Reserved.</h1>
        </div>
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
    getAllVideogames: (allGames) => dispatch(getAllVideogames(allGames)),
    chargeAllGenres: () => dispatch(chargeAllGenres()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
