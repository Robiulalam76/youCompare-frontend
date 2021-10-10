import React from "react";
import { Grid, Button } from "@mui/material";
import { TextField, Box } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux'
import { FIELD_CHANGE } from "../../constants/autoCompare.constant";

function ModelNYearsForm() {
  const dispatch = useDispatch()
  const autoQuery = useSelector(state => state.autoQuery)
  const { brand, model, year } = autoQuery

  // Default model & year selection during initial rendering
  // Value should come from local storage(if exist)
  React.useEffect(() => {
    dispatch({
      type: FIELD_CHANGE,
      payload: { field: "model", value: "190" }
    })
    dispatch({
      type: FIELD_CHANGE,
      payload: { field: "year", value: "2021" }
    })
  }, [])

  // form field change (controlled input)
  const handleChange = (e) => {
    dispatch({
      type: FIELD_CHANGE,
      payload: {
        field: e.target.name,
        value: e.target.value
      }
    })
  }

  return (
    <div>
      <p>Model and Year</p>
      <div
        style={{
          width: "10%",
          padding: "30px 0px",
          border: "1px solid salmon",
        }}
      >
        {brand}
      </div>

      {/* Model Selection */}
      <form>
        <label for="html">Select Model</label> <br />
        <div>
          <TextField
            type="search"
            id="mySearch"
            name="q"
            size="small"
            placeholder="Search the site..."
          />
          <Button>Search</Button>
        </div>
        {
          ["190", "220", "290", "150"].map((elem, i) =>
            <Button
              key={i}
              variant={elem === model ? "contained" : "outlined"}
              name="model"
              value={elem}
              onClick={() =>
                dispatch({
                  type: FIELD_CHANGE,
                  payload: { field: "model", value: elem }
                })}>
              {elem}
            </Button>
          )
        }
      </form>
      <hr />

      {/* Year Selection */}
      <form>
        <label for="html">Select Year</label> <br />
        <div>
          <TextField
            type="search"
            id="mySearch"
            name=""
            size="small"
            placeholder="Search the site..."
          />
          <Button>Search</Button>
        </div>
        {
          ["2021", "2020", "2019", "2018", "2017"].map((elem, i) =>
            <Button
              key={i}
              name="year"
              value={elem}
              variant={elem === year ? "contained" : "outlined"}
              onClick={handleChange}>
              {elem}
            </Button>
          )
        }
      </form>
    </div>
  );
}

export default ModelNYearsForm;
