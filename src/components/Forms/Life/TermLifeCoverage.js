import React from "react";
import { Grid, Button, Typography } from "@mui/material";

import {
  CustomTextField as Input,
  CustomAutocomplete as Autocomplete,
} from "../../customStyledComponents/inputs";
import InputBox from "../../customStyledComponents/InputBox";
import { useDispatch, useSelector } from "react-redux";

import {
  renderAgeLabel,
  renderGenderLabel,
  renderSmokeLabel,
  renderEmploymentLabel,
} from "./renderLabels";

function TermLifeCoverage(props) {
  const dispatch = useDispatch();
  const lifeQuery = useSelector((state) => state.lifeQuery);
  const {
    coverAmount,
    coverFor,
    gender,
    smoke,
    employment,
    age,
    termLength,
    healthIssue,
    healthIssue_father,
    healthIssue_mother,
    ageOfFather,
    ageOfMother,
  } = lifeQuery;

  const [employmentOptions, setEmploymentOptions] = React.useState([
    "Slaried",
    "Self Employed",
  ]);
  const [smokeOptions, setSmokeOptions] = React.useState(["Yes", "No"]);

  React.useEffect(() => {
    // dispatch({
    //   type: "LIFE_QUERY_RESET",
    // });

    if (coverFor === "Parents") {
      setSmokeOptions(["Father", "Mother", "Both", "None"]);
    } else {
      setSmokeOptions(["Yes", "No"]);
    }
  }, [coverFor]);

  const hideGender =
    coverFor === "Father" || coverFor === "Mother" || coverFor === "Parents";

  const handleChange = (field, value) => {
    if (
      (field === "age" || field === "ageOfFather" || field === "ageOfMother") &&
      value < 0
    ) {
      value = 0;
    }
    dispatch({
      type: "LIFE_QUERY_FIELD_CHANGE",
      payload: { field, value },
    });
  };
  console.log(lifeQuery);

  const buttonSxProp = { mr: 1, fontSize: ".8rem", py: 0.5, mb: 1 };

  return (
    <React.Fragment>
      <Grid
        container
        style={{ textAlignLast: "left", marginBottom: "6%" }}
        spacing={2}
      >
        {/** Amount of Cover */}
        <Grid item xs={12} md={6}>
          <InputBox label="Amount of Cover">
            <Input
              fullWidth
              type="number"
              // size="small"
              // name="coverAmount"
              value={coverAmount}
              onChange={(e) => handleChange("coverAmount", e.target.value)}
              placeholder="Cover amount"
            />
          </InputBox>
        </Grid>

        {/** Relationship with cover for */}
        <Grid item xs={12} md={6}>
          <InputBox label="Who is cover for?">
            <div style={{ textAlign: "left" }}>
              {["Myself", "My Partner", "Father", "Mother", "Parents"].map(
                (elem, i) => (
                  <Button
                    sx={buttonSxProp}
                    key={i}
                    variant="round"
                    color={elem === coverFor ? "primary" : "text"}
                    value={elem}
                    onClick={(e) => handleChange("coverFor", e.target.value)}
                  >
                    {elem}
                  </Button>
                  // <Chip
                  //   label={elem}
                  //   key={i}
                  //   sx={{ px: 0.25, m: 0.5 }}
                  //   color={elem === coverFor ? "primary" : "default"}
                  //   onClick={() => handleChange("coverFor", elem)}
                  // />
                )
              )}
            </div>
          </InputBox>
        </Grid>

        {/** Length of Term */}
        <Grid item xs={12} md={6}>
          <InputBox label="Length of Term">
            <MyAutocomplete
              options={[
                "20 Years",
                "30 Years",
                "40 Years",
                "50 Years",
                "60 Years",
              ]}
              onChange={(e, value) => handleChange("termLength", value)}
              value={termLength}
            />
          </InputBox>
        </Grid>

        {/** Underline Health Issue */}
        {coverFor === "Parents" ? (
          <>
            <Grid item xs={12} md={6}>
              <InputBox label="Underline Health Issue (Father)">
                <MyAutocomplete
                  options={["Option One", "Option Two", "Option Three"]}
                  onChange={(e, value) =>
                    handleChange("healthIssue_father", value)
                  }
                  value={healthIssue_father}
                />
              </InputBox>
            </Grid>

            <Grid item xs={12} md={6}>
              <InputBox label="Underline Health Issue (Mother)">
                <MyAutocomplete
                  options={[
                    "Option One",
                    "Option Two",
                    "Option Four",
                    "Option Three",
                  ]}
                  onChange={(e, value) =>
                    handleChange("healthIssue_mother", value)
                  }
                  value={healthIssue_mother}
                />
              </InputBox>
            </Grid>
          </>
        ) : (
          <Grid item xs={12} md={6}>
            <InputBox label="Underline Health Issue">
              <MyAutocomplete
                options={["Option One", "Option Two", "Option Three"]}
                onChange={(e, value) => handleChange("healthIssue", value)}
                value={healthIssue}
              />
            </InputBox>
          </Grid>
        )}
        {/** Gender Selection, Toggle Hide & Show */}
        {!hideGender ? (
          <Grid item xs={12} md={6} sx={{ textAlign: "left" }}>
            <InputBox label={renderGenderLabel(coverFor)}>
              <div>
                {["Male", "Female"].map((elem, i) => (
                  <Button
                    sx={buttonSxProp}
                    key={i}
                    variant="round"
                    color={gender === elem ? "primary" : "text"}
                    name="gender"
                    onClick={(e) => handleChange("gender", elem)}
                  >
                    {elem}
                  </Button>
                ))}
              </div>
            </InputBox>
          </Grid>
        ) : null}

        {/** Smoke Habit */}
        <Grid item xs={12} md={6}>
          <InputBox label={renderSmokeLabel(coverFor)}>
            <div style={{ textAlign: "left" }}>
              {smokeOptions.map((elem, i) => (
                <Button
                  sx={buttonSxProp}
                  key={i}
                  variant="round"
                  color={smoke === elem ? "primary" : "text"}
                  name="smoke"
                  value={elem}
                  onClick={(e) => handleChange("smoke", e.target.value)}
                >
                  {elem}
                </Button>
              ))}
            </div>
          </InputBox>
        </Grid>

        {/** Employment Input */}
        <Grid item xs={12} md={6}>
          <InputBox label={renderEmploymentLabel(coverFor)}>
            <div>
              {employmentOptions.map((elem, i) => (
                <Button
                  sx={buttonSxProp}
                  key={i}
                  variant="round"
                  color={employment === elem ? "primary" : "text"}
                  name="employment"
                  onClick={() => handleChange("employment", elem)}
                  value={elem}
                >
                  {elem}
                </Button>
              ))}
            </div>
          </InputBox>
        </Grid>

        {/** Age Input */}
        {coverFor === "Parents" ? (
          <>
            <Grid item xs={12} md={6}>
              <InputBox label="Your father's age (years)">
                <Input
                  fullWidth
                  type="number"
                  value={ageOfFather}
                  name="ageOfFather"
                  onChange={(e) => handleChange("ageOfFather", e.target.value)}
                />
              </InputBox>
            </Grid>
            <Grid item xs={12} md={6}>
              <InputBox label="Your mother's age (years)">
                <Input
                  fullWidth
                  type="number"
                  value={ageOfMother}
                  name="ageOfMother"
                  onChange={(e) => handleChange("ageOfMother", e.target.value)}
                />
              </InputBox>
            </Grid>
          </>
        ) : (
          <Grid item xs={12} md={6}>
            <InputBox label={renderAgeLabel(coverFor)}>
              <Input
                fullWidth
                type="number"
                value={age}
                name="age"
                onChange={(e) => handleChange("age", e.target.value)}
              />
            </InputBox>
          </Grid>
        )}
      </Grid>
    </React.Fragment>
  );
}

export default TermLifeCoverage;

const MyAutocomplete = ({ options, onChange, value }) => {
  return (
    <Autocomplete
      fullWidth
      options={options}
      value={value}
      autoHighlight
      onChange={onChange}
      getOptionLabel={(option) => option}
      renderOption={(props, option) => (
        <Typography {...props} variant="body2" color="text.secondary">
          {option}
        </Typography>
      )}
      renderInput={(params) => (
        <Input
          {...params}
          placeholder="Select Option"
          inputProps={{
            ...params.inputProps,
            style: { padding: ".75rem 1rem" },
            autoComplete: "new-password",
          }}
        />
      )}
    />
  );
};
