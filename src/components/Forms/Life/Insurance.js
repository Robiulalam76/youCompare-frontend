import React from "react";
import { Grid } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import InputBox from "../../customStyledComponents/InputBox";
import { CustomTextField as TextField } from "../../customStyledComponents/inputs";

function Insurance() {
  const dispatch = useDispatch();
  const lifeQuery = useSelector((state) => state.lifeQuery);

  // form field change (controlled input)
  const handleChange = (e) => {
    dispatch({
      type: "LIFE_QUERY_FIELD_CHANGE",
      payload: {
        field: e.target.name,
        value: e.target.value,
      },
    });
  };

  return (
    <div style={{ marginTop: "4%" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <InputBox label="Full Name">
            <TextField
              placeholder="John Doe"
              type="text"
              name="fullName"
              fullWidth
              value={lifeQuery.fullName}
              onChange={handleChange}
            />
          </InputBox>
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputBox label="Email ID">
            <TextField
              placeholder="Enter email address"
              type="email"
              name="email"
              fullWidth
              value={lifeQuery.email}
              onChange={handleChange}
            />
          </InputBox>
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputBox label="Mobile Number">
            <TextField
              type="number"
              name="mobile"
              fullWidth
              placeholder="Enter Mobile Number"
              value={lifeQuery.mobile}
              onChange={handleChange}
            />
          </InputBox>
        </Grid>
      </Grid>
    </div>
  );
}

export default Insurance;
