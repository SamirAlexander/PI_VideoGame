import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { sortingAtoZ } from "../redux/actions/gamesAction.js";

function DropdownSortings({ sortingAtoZ }) {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    if (value === "") {
      return;
    }
    sortingAtoZ(value);
    return () => {
      setValue("");
    };
  }, [value]);

  return (
    <select value={value} onChange={handleChange}>
      <option value="" selected="true">
        Seleccione una opción
      </option>
      <option value="opcion1">A-Z Sorting</option>
      <option value="opcion2">Z-A Sorting</option>
      <option value="opcion3">Greather to Lesser Rating</option>
      <option value="opcion4">Lesser to Greater Rating</option>
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
    sortingAtoZ: (option) => dispatch(sortingAtoZ(option)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DropdownSortings);
