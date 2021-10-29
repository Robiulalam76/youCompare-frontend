import React from "react";
import { Grid, Button, Input } from "@mui/material";
import { TextField, Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { FIELD_CHANGE } from "../../../constants/autoCompare.constant";
// import { FIELD_CHANGE } from "../../constants/autoCompare.constant";

function Cover() {
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
        <Grid container style={{ display: "" }}>
          <Grid md={4} style={{ padding: "0% 3%" }}>
            <label for="html">Amoung of Cover</label>
            <br />
            <br />
            {/* <input type="search" /> */}
            <TextField
              type="text"
              size="small"
              name="brand"
              //   value={brand}
              //   onChange={handleChange}
            />
            {/* <TextField
            type="search"
            id="mySearch"
            name="q"
            size="small"
            placeholder="Search the site..."
          />
          <Button>Search</Button> */}
          </Grid>
          <Grid md={8}>
            <label for="html">Who is the cover for?</label>
            <br /> <br />
            {["190", "220", "290", "150", "157", "134"].map((elem, i) => (
              <Button
                style={{ margin: "0px 5px" }}
                key={i}
                variant={elem === model ? "round" : "outlined"}
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
          </Grid>
        </Grid>
      </form>

      {/* Year Selection */}
      <form>
        <Grid container style={{ display: "" }}>
          <Grid md={3.3}>
            <label for="html">Gender</label>
            <br /> <br />
            {["Male", "Female"].map((elem, i) => (
              <Button
                style={{ margin: "0px 5px" }}
                key={i}
                variant={elem === model ? "round" : "outlined"}
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
          </Grid>
          <Grid md={2.7}>
            <label for="html">Do You Smoke?</label>
            <br />
            <br />
            {["Yes", "No"].map((elem, i) => (
              <Button
                style={{ margin: "0px 5px" }}
                key={i}
                variant={elem === model ? "round" : "outlined"}
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
          </Grid>
          <Grid md={6}>
            <label for="html">Employment</label>
            <br />
            <br />
            {["Salaired", "Self Employment"].map((elem, i) => (
              <Button
                style={{ margin: "0px 5px" }}
                key={i}
                variant={elem === model ? "round" : "outlined"}
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
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default Cover;
