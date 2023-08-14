import React, { useEffect, useState } from "react";
import "../css/detail.css";
import loadingImage from "../assets/loadingGif/ZZ5H.gif";
import HeaderBar from "../components/headerBar";
import { connect } from "react-redux";
import { backToLastEstate } from "../redux/actions/gamesAction.js";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Detail = ({ state, backToLastEstate }) => {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(async () => {
    const dataId = await fetch(`http://localhost:3001/videogames/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        return response;
      })
      .catch((err) => {
        return err;
      });

    setData(dataId);
    console.log(data);
  }, []);

  const image = {
    backgroundImage: `url(${data.background_image})`,
  };

  const imageII = {
    backgroundImage: `url(${loadingImage})`,
  };

  return (
    <p id="detailComponentMainContainer">
      <HeaderBar />
      <div id="detailComponent">
        {Object.keys(data).length === 0 ? (
          <div id="loadingImage" style={imageII}></div>
        ) : (
          <div id="detailMainContainer">
            <div id="detailPicContainer" style={image}></div>
            <div id="detailDataContainer">
              <div className="datailDataBox" id="dataId">
                <span>ID: </span> {data.id}{" "}
              </div>
              <div className="datailDataBox" id="detailName">
                {data.name}{" "}
              </div>
              <div className="datailDataBox">
                <span>Platforms: </span>{" "}
                {data?.platforms.map((e) => ` ${e.platform.name}, `)}
              </div>
              <div id="detailDescription">{data.description} </div>
              <div className="datailDataBox">
                <span>Released: </span> {data.released}{" "}
              </div>
              <div className="datailDataBox">
                <span>Rating: </span> {data.rating}{" "}
              </div>
              <div className="datailDataBox">
                <span>Genres: </span> {data?.genres.map((e) => ` ${e.name}, `)}
              </div>
              <div id="iconHomeContainer">
                <Link to="/videogames/">
                  <div id="iconHome">Home</div>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
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
    backToLastEstate: () => dispatch(backToLastEstate()),
  };
}
export default connect(mapStateToProps, null)(Detail);
