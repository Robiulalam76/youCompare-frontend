import React from "react";
import { Grid } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { SEARCHER_FIELD_CHANGE } from "../../../constants/searcher.constant";
import InputBox from "../../customStyledComponents/InputBox";
import {
  CustomAutocomplete as Autocomplete,
  CustomTextField as Input,
} from "../../../components/customStyledComponents/inputs";

function Insurance() {
  const dispatch = useDispatch();
  const { fullName, email, phone } = useSelector((state) => state.searcher);

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
      <Grid item container spacing={2}>
        <Grid item md={6} sm={6} xs={12}>
          <InputBox label="Full Name ">
            <Input
              fullWidth
              placeholder="Enter Full Name"
              type="text"
              name="fullName"
              value={fullName}
              onChange={handleChange}
            />
          </InputBox>
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
          <InputBox label="Email ID">
            <Input
              fullWidth
              placeholder="john@domain.com"
              type="text"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </InputBox>
        </Grid>
        <Grid item md={6} sm={6} xs={12}>
          <InputBox label="Mobile">
            <Input
              fullWidth
              type="text"
              name="phone"
              placeholder="Enter Mobile Number"
              value={phone}
              onChange={handleChange}
            />
          </InputBox>
        </Grid>
      </Grid>

      {/* <Grid item container spacing={2}>
          <Grid item md={4} sm={6} xs={12}>
     
            <InputBox label="Age">
              <Input
                fullWidth
                type="text"
                name="brand"
                placeholder="Age"
                //   value={brand}
                //   onChange={handleChange}
              />
            </InputBox>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
   
            <InputBox label="Gender">
      
              <Autocomplete
                fullWidth
                options={["Male", "Female", "Others"]}
                // onChange={(e, value) => setMaritalStatus(value)}
                renderOption={(props, option) => (
                  <Typography {...props} variant="body2" color="text.secondary">
                    {option}
                  </Typography>
                )}
                // sx={{ mb: 0.75 }}
                renderInput={(params) => (
                  <Input
                    {...params}
                    size="small"
                    fullWidth
                    placeholder="Select Gender"
                    inputProps={{
                      ...params.inputProps,
                      style: { padding: ".4rem 1rem" },
                      autoComplete: "new-password", // disable autocomplete and autofill
                    }}
                  />
                )}
              />
            </InputBox>
          </Grid>
        </Grid> */}
    </Grid>
  );
}

export default Insurance;
