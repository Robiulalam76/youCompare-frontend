import React from "react";
import { Grid, Button, Box } from "@mui/material";

import { CustomTextField as Input } from "../../customStyledComponents/inputs";
import InputBox from "../../customStyledComponents/InputBox";
import { useDispatch, useSelector } from "react-redux";

import {
  renderAgeLabel,
  renderGenderLabel,
  renderSmokeLabel,
  renderEmploymentLabel,
} from "./renderLabels";

const buttonSxProp = { mr: 1, fontSize: ".8rem", py: 0.5, mb: 1 };

function Coverage() {
  const dispatch = useDispatch();
  const coverAmount = useSelector((state) => state.lifeQuery.coverAmount);
  const coverFor = useSelector((state) => state.lifeQuery.coverFor);

  const [employmentOptions, setEmploymentOptions] = React.useState([
    "Slaried",
    "Self Employed",
  ]);
  const [smokeOptions, setSmokeOptions] = React.useState(["Yes", "No"]);

  React.useEffect(() => {
    if (coverFor.relationship === "Parents") {
      setSmokeOptions(["Father", "Mother", "Both", "None"]);
    } else {
      setSmokeOptions(["Yes", "No"]);
    }
  }, [coverFor.relationship]);

  // const [hideGender, setHideGender] = React.useState(false);

  const hideGender =
    coverFor.relationship === "Father" ||
    coverFor.relationship === "Mother" ||
    coverFor.relationship === "Parents";

  const handleCoverAmountChange = (e) => {
    dispatch({
      type: "LIFE_QUERY_FIELD_CHANGE",
      payload: { field: e.target.name, value: e.target.value },
    });
  };

  const handleCoverForChanges = (e) => {
    dispatch({
      type: "COVER_FOR_FIELD_CHANGE",
      payload: { field: e.target.name, value: e.target.value },
    });
  };

  return (
    <div style={{ marginTop: "4%" }}>
      <Grid
        container
        style={{ textAlignLast: "left", marginBottom: "6%" }}
        spacing={2}
      >
        <Grid item container spacing={2}>
          <Grid item xs={12} md={6}>
            <InputBox label="Amount of Cover">
              <Input
                fullWidth
                type="number"
                name="coverAmount"
                value={coverAmount}
                onChange={handleCoverAmountChange}
                placeholder="Cover amount"
              />
            </InputBox>
          </Grid>
          <Grid item xs={12} md={6}>
            <InputBox label="Who is cover for?">
              <div style={{ textAlign: "left" }}>
                {["Myself", "My Partner", "Father", "Mother", "Parents"].map(
                  (elem, i) => (
                    <Button
                      sx={buttonSxProp}
                      key={i}
                      variant="round"
                      color={
                        elem === coverFor.relationship ? "primary" : "text"
                      }
                      value={elem}
                      name="relationship"
                      onClick={handleCoverForChanges}
                    >
                      {elem}
                    </Button>
                  )
                )}
              </div>
            </InputBox>
          </Grid>
        </Grid>

        <Grid item container spacing={2} sx={{ textAlign: "left" }}>
          {!hideGender ? (
            <Grid item xs={12} md={6}>
              <InputBox label={renderGenderLabel(coverFor.relationship)}>
                <div>
                  {["Male", "Female"].map((elem, i) => (
                    <Button
                      sx={buttonSxProp}
                      key={i}
                      variant="round"
                      color={coverFor.gender === elem ? "primary" : "text"}
                      value={elem}
                      name="gender"
                      onClick={handleCoverForChanges}
                    >
                      {elem}
                    </Button>
                  ))}
                </div>
              </InputBox>
            </Grid>
          ) : null}
          <Grid item xs={12} md={6}>
            <InputBox label={renderSmokeLabel(coverFor.relationship)}>
              <div>
                {smokeOptions.map((elem, i) => (
                  <Button
                    sx={buttonSxProp}
                    key={i}
                    variant="round"
                    color={coverFor.smoke === elem ? "primary" : "text"}
                    name="smoke"
                    onClick={handleCoverForChanges}
                    value={elem}
                  >
                    {elem}
                  </Button>
                ))}
              </div>
            </InputBox>
          </Grid>
          <Grid item xs={12} md={6}>
            <InputBox label={renderEmploymentLabel(coverFor.relationship)}>
              <div>
                {employmentOptions.map((elem, i) => (
                  <Button
                    sx={buttonSxProp}
                    key={i}
                    variant="round"
                    color={coverFor.employment === elem ? "primary" : "text"}
                    name="employment"
                    onClick={handleCoverForChanges}
                    value={elem}
                  >
                    {elem}
                  </Button>
                ))}
              </div>
            </InputBox>
          </Grid>
          {coverFor.relationship === "Parents" ? (
            <>
              <Grid item xs={12} md={6}>
                <InputBox label="Your father's age (years)">
                  <Input
                    fullWidth
                    type="number"
                    value={coverFor.ageOfFather}
                    name="ageOfFather"
                    onChange={handleCoverForChanges}
                  />
                </InputBox>
              </Grid>
              <Grid item xs={12} md={6}>
                <InputBox label="Your mother's age (years)">
                  <Input
                    fullWidth
                    type="number"
                    value={coverFor.ageOfMother}
                    name="ageOfMother"
                    onChange={handleCoverForChanges}
                  />
                </InputBox>
              </Grid>
            </>
          ) : (
            <Grid item xs={12} md={6}>
              <InputBox label={renderAgeLabel(coverFor.relationship)}>
                <Input
                  fullWidth
                  type="number"
                  value={coverFor.age}
                  name="age"
                  onChange={handleCoverForChanges}
                />
              </InputBox>
            </Grid>
          )}
        </Grid>
      </Grid>
    </div>
  );
}

export default Coverage;
