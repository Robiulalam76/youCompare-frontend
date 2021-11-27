import React from "react";
import { Grid, Button } from "@mui/material";
import { TextField, Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { HEALTH_QUERY_FIELD_CHANGE } from "../../../constants/health.constant";
import InputBox from "../../customStyledComponents/InputBox";
import { CustomTextField as Input } from "../../customStyledComponents/inputs";

function Cover() {
  const dispatch = useDispatch();
  const healthQuery = useSelector((state) => state.healthQuery);
  const { insuranceType, coverFor, organizationName } = healthQuery;

  // form field change (controlled input)
  const handleChange = (e) => {
    dispatch({
      type: HEALTH_QUERY_FIELD_CHANGE,
      payload: {
        field: e.target.name,
        value: e.target.value,
      },
    });
  };

  console.log(healthQuery);

  return (
    <div style={{ marginTop: "4%" }}>
      {/* Model Selection */}
      <form style={{ textAlignLast: "left", marginBottom: "6%" }}>
        <Grid container spacing={2}>
          <Grid item md={12}>
            <InputBox label="Type of Insurance">
              <div>
                {["Personal", "Business"].map((elem, i) => (
                  <Button
                    sx={{ mr: 1, fontSize: ".8rem", py: 0.5, my: 0.5 }}
                    key={i}
                    variant="round"
                    color={elem === insuranceType ? "primary" : "text"}
                    name="insuranceType"
                    value={elem}
                    onClick={handleChange}
                  >
                    {elem}
                  </Button>
                ))}
              </div>
            </InputBox>
          </Grid>
          <Grid item md={12}>
            <InputBox label="Who is the cover for?">
              <div style={{ textAlign: "left" }}>
                {["One Person", "Couple", "Family", "Group"].map((elem, i) => (
                  <Button
                    sx={{ mr: 1, fontSize: ".8rem", py: 0.5, my: 0.5 }}
                    key={i}
                    variant="round"
                    color={elem === coverFor ? "primary" : "text"}
                    name="coverFor"
                    value={elem}
                    onClick={handleChange}
                  >
                    {elem}
                  </Button>
                ))}
              </div>
            </InputBox>
          </Grid>

          {coverFor === "Group" ? (
            <Grid item xs={12} sm={6}>
              <InputBox label="Organization Name">
                <Input
                  type="text"
                  placeholder="Name of Your Organization"
                  name="organizationName"
                  value={organizationName}
                  onChange={handleChange}
                />
              </InputBox>
            </Grid>
          ) : null}
        </Grid>
      </form>
    </div>
  );
}

export default Cover;
