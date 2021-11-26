import React from "react";
import { Grid, Button } from "@mui/material";
import { CustomTextField as Input } from "../../customStyledComponents/inputs";
import InputBox from "../../customStyledComponents/InputBox";
import { useSelector, useDispatch } from "react-redux";
import { GROUP_LIFE_QUERY_FIELD_CHANGE } from "../../../constants/life.constants";

export default function GroupLifeCover() {
  const dispatch = useDispatch();
  const { coverAmount, organizationName, totalEmployees } = useSelector(
    (state) => state.groupLifeQuery
  );

  const handleChange = (e) => {
    dispatch({
      type: GROUP_LIFE_QUERY_FIELD_CHANGE,
      payload: { field: e.target.name, value: e.target.value },
    });
  };

  return (
    <form>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <InputBox label="Amount of Cover">
            <Input
              fullWidth
              type="number"
              name="coverAmount"
              value={coverAmount}
              onChange={handleChange}
              placeholder="Cover amount"
            />
          </InputBox>
        </Grid>

        <Grid item xs={12} md={6}>
          <InputBox label="Organization Name">
            <Input
              fullWidth
              type="text"
              name="organizationName"
              value={organizationName}
              onChange={handleChange}
              placeholder="Enter name of your organization"
            />
          </InputBox>
        </Grid>

        <Grid item xs={12} md={6}>
          <InputBox label="Total Number of Employees">
            <div style={{ textAlign: "left" }}>
              {["Less than 50", "50 to 100", "100 to 200", "More than 200"].map(
                (elem, i) => (
                  <Button
                    sx={{ mr: 1, fontSize: ".8rem", py: 0.5, mb: 1 }}
                    key={i}
                    variant="round"
                    color={elem === totalEmployees ? "primary" : "text"}
                    value={elem}
                    name="totalEmployees"
                    onClick={handleChange}
                  >
                    {elem}
                  </Button>
                )
              )}
            </div>
          </InputBox>
        </Grid>
      </Grid>
    </form>
  );
}
