import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  genresFilter,
  restoreAllVideogames,
  captureToLastEstate,
} from "../redux/actions/gamesAction.js";

function DropdownGenres({
  state,
  genresFilter,
  restoreAllVideogames,
  captureToLastEstate,
}) {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    if (value === "") {
      restoreAllVideogames();
      return;
    }
    genresFilter(value);
    captureToLastEstate();
  }, [value]);

  return (
    <select value={value} onChange={handleChange}>
      <option value="">Choose an Option</option>
      <option value="Back">Back to All Videogames</option>
      <option value="Action">Action</option>
      <option value="Indie">Indie</option>
      <option value="Adventure">Adventure</option>
      <option value="RPG">RPG</option>
      <option value="Strategy">Strategy</option>
      <option value="Shooter">Shooter</option>
      <option value="Casual">Casual</option>
      <option value="Simulation">Simulation</option>
      <option value="Puzzle">Puzzle</option>
      <option value="Arcade">Arcade</option>
      <option value="Platformer">Platformer</option>
      <option value="Racing">Racing</option>
      <option value="Massively">Massively Multiplayer</option>
      <option value="Sports">Sports</option>
      <option value="Fighting">Fighting</option>
      <option value="Family">Family</option>
      <option value="Board">Board Games</option>
      <option value="Educational">Educational</option>
      <option value="Card">Card</option>
    </select>
  );
}

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};
function mapDispatchToProps(dispatch) {
  return {
    genresFilter: (genres) => dispatch(genresFilter(genres)),
    restoreAllVideogames: () => dispatch(restoreAllVideogames()),
    captureToLastEstate: () => dispatch(captureToLastEstate()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DropdownGenres);
