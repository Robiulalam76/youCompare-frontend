import React from "react";
import { Grid, Button, TextField } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { FIELD_CHANGE } from "../../constants/autoCompare.constant";

import { CustomTextField as Input } from "../customStyledComponents/inputs";
import InputBox from "../customStyledComponents/InputBox";

function DetailsForm() {
  const dispatch = useDispatch();
  const autoQuery = useSelector((state) => state.autoQuery);
  const {
    brand,
    model,
    year,
    typeofUse,
    typeofInsurance,
    value,
    fullName,
    email,
    phone,
  } = autoQuery;

  // Default selection during initial rendering
  React.useEffect(() => {
    dispatch({
      type: FIELD_CHANGE,
      payload: { field: "typeofInsurance", value: "comprehensive" },
    });
    dispatch({
      type: FIELD_CHANGE,
      payload: { field: "typeofUse", value: "private" },
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
      <div
        style={{
          display: "flex",
        }}
      >
        <div
          style={{
            width: "17%",
            padding: "30px 0px",
            border: "1px solid #1482d2",
            borderRadius: "10px",
            textAlignLast: "center",
            margin: "0px 2% 0 0",
            height: "20px",
          }}
        >
          {brand}
        </div>
        <div
          style={{
            width: "17%",
            padding: "30px 0px",
            border: "1px solid #1482d2",
            borderRadius: "10px",
            textAlignLast: "center",
            margin: "0px 2% 0 0",
            height: "20px",
          }}
        >
          {" "}
          <span>Model </span>
          {model}
        </div>
        <div
          style={{
            width: "17%",
            padding: "30px 0px",
            border: "1px solid #1482d2",
            borderRadius: "10px",
            textAlignLast: "center",
            margin: "0px 2% 0 0",
            height: "20px",
          }}
        >
          <span>Year </span>
          {year}
        </div>
      </div>

      <Grid container sx={{ mb: 3, alignItems: "flex-end" }}>
        {/* <Grid lg={4}>
          <p>Type of use</p>
          <Button
            variant={typeofUse === "private" ? "contained" : "outlined"}
            value="private"
            name="typeofUse"
            onClick={handleChange}
          >
            Private
          </Button>
          <Button
            variant={typeofUse === "commercial" ? "contained" : "outlined"}
            value="commercial"
            name="typeofUse"
            onClick={handleChange}
          >
            Commercial
          </Button>
        </Grid> */}
        <Grid style={{ marginTop: "2%" }} lg={6}>
          <InputBox label="Type of Insurance">
            <div>
              <Button
                sx={{ mr: 1, fontSize: ".8rem", py: .5 }}
                variant="round"
                color={
                  typeofInsurance === "thirdparty" ? "primary" : "text"
                }
                value="thirdparty"
                name="typeofInsurance"
                onClick={handleChange}
              >
                Third party
              </Button>

              <Button
                sx={{ mr: 1, fontSize: ".8rem", py: .5 }}
                variant="round"
                color={
                  typeofInsurance === "comprehensive" ? "primary" : "text"
                }
                value="comprehensive"
                name="typeofInsurance"
                onClick={handleChange}
              >
                Compremsive
              </Button>
            </div>
          </InputBox>
        </Grid>
        <Grid lg={4}>
          <InputBox label="Label">
            <Input
              value={value}
              placeholder="Value"
              onChange={handleChange}
              name="value"
            />
          </InputBox>
        </Grid>
      </Grid>

      <Grid container>
        <Grid lg={4}>
          <InputBox label="Full Name">
            <Input
              value={fullName}
              placeholder="John Doe"
              onChange={handleChange}
              name="fullName"
            />
          </InputBox>
        </Grid>
        <Grid lg={4}>
          <InputBox label="Email Address">
            <Input
              value={email}
              placeholder="john@domain.com"
              onChange={handleChange}
              name="Email"
            />
          </InputBox>
        </Grid>
        <Grid lg={4}>
          <InputBox label="Phone No">
            <Input
              value={phone}
              placeholder="94092300293"
              onChange={handleChange}
              name="phone"
            />
          </InputBox>
        </Grid>
      </Grid>
    </div>
  );
}
export default DetailsForm;
