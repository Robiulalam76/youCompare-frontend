import React from "react";
import { Grid, Button } from "@mui/material";
import { TextField, Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { FIELD_CHANGE } from "../../constants/autoCompare.constant";

function ModelNYearsForm() {
  const dispatch = useDispatch();
  const autoQuery = useSelector((state) => state.autoQuery);
  const { brand, model, year } = autoQuery;

  // Default model & year selection during initial rendering
  // Value should come from local storage(if exist)
  React.useEffect(() => {
    dispatch({
      type: FIELD_CHANGE,
      payload: { field: "model", value: "190" },
    });
    dispatch({
      type: FIELD_CHANGE,
      payload: { field: "year", value: "2021" },
    });
  }, []);

  // form field change (controlled input)
  const handleChange = (e) => {
    dispatch({
      type: FIELD_CHANGE,
      payload: {
        field: e.target.name,
        value: e.target.value,
      },
    });
  };

  return (
    <div style={{ marginTop: "4%" }}>
      {/* Model Selection */}
      <form style={{ textAlignLast: "left", marginBottom: "6%" }}>
        <br />
        <label for="html">Select Model</label>
        <div>
          <input className="search" type="search" />
        </div>
        {["190", "220", "290", "150", "157", "134"].map((elem, i) => (
          <Button
            style={{ margin: "0px 5px" }}
            key={i}
            variant={elem === model ? "contained" : "outlined"}
            name="model"
            value={elem}
            onClick={() =>
              dispatch({
                type: FIELD_CHANGE,
                payload: { field: "model", value: elem },
              })
            }
          >
            {elem}
          </Button>
        ))}
      </form>

      {/* Year Selection */}
      <form>
        <label for="html">Select Year</label> <br />
        <div>
          <input className="search" type="search" />
        </div>
        {["2021", "2020", "2019", "2018", "2017"].map((elem, i) => (
          <Button
            style={{ margin: "0px 5px" }}
            key={i}
            name="year"
            value={elem}
            variant={elem === year ? "contained" : "outlined"}
            onClick={handleChange}
          >
            {elem}
          </Button>
        ))}
      </form>
    </div>
  );
}

export default ModelNYearsForm;
