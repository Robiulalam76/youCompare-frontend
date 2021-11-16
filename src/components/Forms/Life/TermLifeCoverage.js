import React from "react";
import { Grid, Button, Box, Typography } from "@mui/material";

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

function TermLifeCoverage() {
  const dispatch = useDispatch();
  const coverAmount = useSelector((state) => state.lifeQuery.coverAmount);
  const coverFor = useSelector((state) => state.lifeQuery.coverFor);
  const lifeQuery = useSelector((state) => state.lifeQuery);

  const [employmentOptions, setEmploymentOptions] = React.useState([
    "Slaried",
    "Self Employed",
  ]);
  const [smokeOptions, setSmokeOptions] = React.useState(["Yes", "No"]);

  React.useEffect(() => {
    dispatch({
      type: "LIFE_QUERY_RESET",
    });

    if (coverFor.relationship === "Parents") {
      setSmokeOptions(["Father", "Mother", "Both", "None"]);
    } else {
      setSmokeOptions(["Yes", "No"]);
    }
  }, [coverFor.relationship]);

  const hideGender =
    coverFor.relationship === "Father" ||
    coverFor.relationship === "Mother" ||
    coverFor.relationship === "Parents";

  const handleCoverChange = (e) => {
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

  const handleChangeFromAutocomplete = (field, value) => {
    dispatch({
      type: "LIFE_QUERY_FIELD_CHANGE",
      payload: { field, value },
    });
  };

  console.log(coverFor);
  const buttonSxProp = { mr: 1, fontSize: ".8rem", py: 0.5, mb: 1 };

  return (
    <div style={{ marginTop: "4%" }}>
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
              size="small"
              name="coverAmount"
              value={coverAmount}
              onChange={handleCoverChange}
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
                    color={elem === coverFor.relationship ? "primary" : "text"}
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

        {/** Length of Term */}
        <Grid item xs={12} md={6}>
          <InputBox label="Length of Term">
            <Autocomplete
              fullWidth
              options={["20", "30", "40", "50", "60"]}
              autoHighlight
              onChange={(e, value) =>
                handleChangeFromAutocomplete("termLength", value)
              }
              getOptionLabel={(option) => option}
              renderOption={(props, option) => (
                <Typography {...props} variant="body2" color="text.secondary">
                  {option} years
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
          </InputBox>
        </Grid>

        {/** Underline Health Issue */}
        {coverFor.relationship === "Parents" ? (
          <>
            <Grid item xs={12} md={6}>
              <InputBox label="Underline Health Issue (Father)">
                <HealthIssueAutocomplete
                  options={["Option One", "Option Two", "Option Three"]}
                  onChange={(e, value) =>
                    handleChangeFromAutocomplete("healthIssue_father", value)
                  }
                />
              </InputBox>
            </Grid>

            <Grid item xs={12} md={6}>
              <InputBox label="Underline Health Issue (Mother)">
                <HealthIssueAutocomplete
                  options={[
                    "Option One",
                    "Option Two",
                    "Option Four",
                    "Option Three",
                  ]}
                  onChange={(e, value) =>
                    handleChangeFromAutocomplete("healthIssue_mother", value)
                  }
                />
              </InputBox>
            </Grid>
          </>
        ) : (
          <Grid item xs={12} md={6}>
            <InputBox label="Underline Health Issue">
              <HealthIssueAutocomplete
                options={["Option One", "Option Two", "Option Three"]}
                onChange={(e, value) =>
                  handleChangeFromAutocomplete("healthIssue", value)
                }
              />
            </InputBox>
          </Grid>
        )}
        {/** Gender Selection, Toggle Hide & Show */}
        {!hideGender ? (
          <Grid item xs={12} md={6} sx={{ textAlign: "left" }}>
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

        {/** Smoke Habit */}
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

        {/** Employment Input */}
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

        {/** Age Input */}
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
    </div>
  );
}

export default TermLifeCoverage;

const HealthIssueAutocomplete = ({ options, onChange }) => {
  return (
    <Autocomplete
      fullWidth
      options={options}
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
