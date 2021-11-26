import React from "react";
import { Box, Button, ButtonBase, Stack } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { FIELD_CHANGE } from "../../../constants/autoCompare.constant";

import { CustomTextField as Input } from "../../customStyledComponents/inputs";
import InputBox from "../../customStyledComponents/InputBox";
import { styled } from "@mui/system";

const RoundPrimaryBtn = styled(ButtonBase)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "white",
  padding: theme.spacing(0.5, 1),
  borderRadius: "40px",
}));

function ModelNYearsForm() {
  const dispatch = useDispatch();
  const autoQuery = useSelector((state) => state.autoQuery);
  const { brand, model, year } = autoQuery;

  // Default model & year selection during initial rendering
  // Value should come from local storage(if exist)
  // React.useEffect(() => {
  //   dispatch({
  //     type: FIELD_CHANGE,
  //     payload: { field: "model", value: "190" },
  //   });
  //   dispatch({
  //     type: FIELD_CHANGE,
  //     payload: { field: "year", value: "2021" },
  //   });
  // }, []);

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
    <div style={{ marginTop: "2%", textAlignLast: "start" }}>
      {/* <p>Model and Year</p> */}
      <div
        // className="brandname"
        style={{
          padding: "20px 20px",
          border: "1px solid #1482d2",
          borderRadius: "10px",
          display: "inline-block",
          marginBottom: "1%",
        }}
      >
        {brand}
      </div>
      <Stack spacing={2} sx={{ textAlign: "left" }}>
        {/* Model Selection */}
        <form>
          <InputBox label="Select Model" sx={{ py: 1 }}>
            <Input
              fullWidth
              name="model"
              type="search"
              value={model}
              onChange={handleChange}
            />
          </InputBox>

          {["190", "220", "290", "150", "157", "134"].map((elem, i) => (
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
        </form>

        {/* Year Selection */}
        <form>
          <InputBox label="Select Year" sx={{ py: 1 }}>
            <Input name="year" fullWidth value={year} onChange={handleChange} />
          </InputBox>

          {[
            "2021",
            "2020",
            "2011",
            "2018",
            "2027",
            "2010",
            "2019",
            "2028",
            "2037",
          ].map((elem, i) => (
            <Button
              sx={{ mr: 1, my: 0.5, fontSize: ".8rem", py: 0.5 }}
              key={i}
              name="year"
              value={elem}
              variant="round"
              color={elem === year ? "primary" : "text"}
              onClick={handleChange}
            >
              {elem}
            </Button>
          ))}
        </form>
      </Stack>
    </div>
  );
}

export default ModelNYearsForm;
