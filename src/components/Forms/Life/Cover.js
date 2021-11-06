import React from "react";
import { Grid, Button, Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { FIELD_CHANGE } from "../../../constants/autoCompare.constant";
// import { FIELD_CHANGE } from "../../constants/autoCompare.constant";

import { CustomTextField as Input } from "../../customStyledComponents/inputs";
import InputBox from "../../customStyledComponents/InputBox";

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
      <Grid
        container
        style={{ textAlignLast: "left", marginBottom: "6%" }}
        spacing={2}
      >
        <Grid item container spacing={2}>
          <Grid item md={4} xl={4} lg={4} sm={12} xs={12}>
            <InputBox label="Amount of Cover">
              <Input type="number" placeholder="cover amount" />
            </InputBox>
          </Grid>
          <Grid item xl={8} lg={12} md={12} sm={12} xs={12}>
            <InputBox label="Who is cover for?">
              <div style={{ textAlign: "left" }}>
                {["Myself", "My Partner", "Father", "Mother", "Parents"].map(
                  (elem, i) => (
                    <Button
                      sx={{ mr: 1, fontSize: ".8rem", py: 0.5 }}
                      key={i}
                      variant="round"
                      color={elem === model ? "primary" : "text"}
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
                  )
                )}
              </div>
            </InputBox>
          </Grid>
        </Grid>

        <Grid item container spacing={2}>
          <Grid item md={6} lg={6}>
            {/* <label for="html"></label> */}
            <InputBox label="Gender">
              <div>
                {["Male", "Female"].map((elem, i) => (
                  <Button
                    sx={{ mr: 1, fontSize: ".8rem", py: 0.5 }}
                    key={i}
                    variant="round"
                    color={elem === model ? "primary" : "text"}
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
              </div>
            </InputBox>
          </Grid>
          <Grid item md={6} lg={6}>
            <InputBox label="Do You Smoke?">
              <div>
                {["Yes", "No"].map((elem, i) => (
                  <Button
                    sx={{ mr: 1, fontSize: ".8rem", py: 0.5 }}
                    key={i}
                    variant="round"
                    color={elem === model ? "primary" : "text"}
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
              </div>
            </InputBox>
          </Grid>
          <Grid item md={12} lg={6}>
            <InputBox label="Employment">
              <div>
                {["Salaired", "Self Employment"].map((elem, i) => (
                  <Button
                    sx={{ mr: 1, fontSize: ".8rem", py: 0.5 }}
                    key={i}
                    variant="round"
                    color={elem === model ? "primary" : "text"}
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
              </div>
            </InputBox>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Cover;
