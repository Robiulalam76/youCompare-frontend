import React from "react";
import { Grid, Button, TextField } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux'
import { FIELD_CHANGE } from "../../constants/autoCompare.constant";


const Input = (props) =>
  <TextField {...props} size="small" />


function DetailsForm() {
  const dispatch = useDispatch()
  const autoQuery = useSelector(state => state.autoQuery)
  const {
    brand, model, year, typeofUse, typeofInsurance,
    value, fullName, email, phone
  } = autoQuery

  // Default selection during initial rendering
  React.useEffect(() => {
    dispatch({
      type: FIELD_CHANGE,
      payload: { field: "typeofInsurance", value: "comprehensive" }
    })
    dispatch({
      type: FIELD_CHANGE,
      payload: { field: "typeofUse", value: "private" }
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
      <p>DetailsForm DetailsForm</p>

      <div
        style={{
          display: "flex",
        }}
      >
        <div
          style={{
            width: "10%",
            padding: "30px 0px",
            border: "1px solid salmon",
          }}
        >
          {brand}
        </div>
        <div
          style={{
            width: "10%",
            padding: "30px 0px",
            border: "1px solid salmon",
          }}
        >
          {" "}
          <span>Model </span>
          {model}
        </div>
        <div
          style={{
            width: "10%",
            padding: "30px 0px",
            border: "1px solid salmon",
          }}
        >
          <span>Year </span>
          {year}
        </div>
      </div>

      <Grid container sx={{ mb: 3, alignItems: "flex-end" }}>
        <Grid lg={4}>
          <p>Type of use</p>
          <Button
            variant={typeofUse === "private" ? "contained" : "outlined"}
            value="private"
            name="typeofUse"
            onClick={handleChange}>Private</Button>
          <Button
            variant={typeofUse === "commercial" ? "contained" : "outlined"}
            value="commercial"
            name="typeofUse"
            onClick={handleChange}>Commercial</Button>
        </Grid>
        <Grid lg={4}>
          <p>Type of Insurance</p>
          <Button
            variant={typeofInsurance === "thirdparty" ? "contained" : "outlined"}
            value="thirdparty"
            name="typeofInsurance"
            onClick={handleChange}>
            Third party
          </Button>
          <Button
            variant={typeofInsurance === "comprehensive" ? "contained" : "outlined"}
            value="comprehensive"
            name="typeofInsurance"
            onClick={handleChange}>
            Compremsive
          </Button>
        </Grid>
        <Grid lg={4}>
          <Input
            value={value}
            label="Value"
            onChange={handleChange}
            name="value"
          />
        </Grid>
      </Grid>


      <Grid container>
        <Grid lg={4}>
          <Input
            value={fullName}
            label="Full Name"
            onChange={handleChange}
            name="fullName"
          />
        </Grid>
        <Grid lg={4}>
          <Input
            value={email}
            label="Email Address"
            onChange={handleChange}
            name="Email"
          />
        </Grid>
        <Grid lg={4}>
          <Input
            value={phone}
            label="Phone No"
            onChange={handleChange}
            name="phone"
          />
        </Grid>
      </Grid>
    </div>
  );
}
export default DetailsForm;
