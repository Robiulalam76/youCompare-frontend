import React from "react";
import { Grid } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import InputBox from "../../customStyledComponents/InputBox";
import { CustomTextField as TextField } from "../../customStyledComponents/inputs";

import { SEARCHER_FIELD_CHANGE } from "../../../constants/searcher.constant";

function Insurance() {
  const dispatch = useDispatch();
  const searcher = useSelector((state) => state.searcher);

  const { fullName, email, phone } = searcher;

  // form field change (controlled input)
  const handleChange = (e) => {
    dispatch({
      type: SEARCHER_FIELD_CHANGE,
      payload: {
        field: e.target.name,
        value: e.target.value,
      },
    });
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <InputBox label="Full Name">
          <TextField
            placeholder="John Doe"
            type="text"
            name="fullName"
            fullWidth
            value={fullName}
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
            value={email}
            onChange={handleChange}
          />
        </InputBox>
      </Grid>
      <Grid item xs={12} sm={6}>
        <InputBox label="Mobile Number">
          <TextField
            type="number"
            name="phone"
            fullWidth
            placeholder="Enter Mobile Number"
            value={phone}
            onChange={handleChange}
          />
        </InputBox>
      </Grid>
    </Grid>
  );
}

export default Insurance;
