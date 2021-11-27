import React from "react";
import { Grid } from "@mui/material";
import { CustomTextField as Input } from "../../customStyledComponents/inputs";
import InputBox from "../../customStyledComponents/InputBox";
import { useSelector, useDispatch } from "react-redux";
import { GROUP_LIFE_QUERY_FIELD_CHANGE } from "../../../constants/life.constants";

export default function GroupLifeCover() {
  // const dispatch = useDispatch();
  // const q = useSelector((state) => state.groupLifeQuery);

  // console.log(q);

  // const coverAmount = useSelector((state) => state.groupLifeQuery.coverAmount);
  // const organizationName = useSelector(
  //   (state) => state.groupLifeQuery.organizationName
  // );
  // const numberofEmployees = useSelector(
  //   (state) => state.groupLifeQuery.numberofEmployees
  // );

  // console.log(coverAmount, "Cover Amount");
  // console.log(organizationName);
  // console.log(numberofEmployees);

  // const handleChange = (e) => {
  //   dispatch({
  //     type: GROUP_LIFE_QUERY_FIELD_CHANGE,
  //     payload: { field: e.target.name, vlaue: e.target.value },
  //   });
  // };

  const [state, setState] = React.useState({
    coverAmount: "",
    organizationName: "",
    numberofEmployees: "",
  });
  const { organizationName, coverAmount, numberofEmployees } = state;

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div style={{ marginTop: "4%" }}>
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
            <Input
              fullWidth
              type="number"
              name="numberofEmployees"
              value={numberofEmployees}
              onChange={handleChange}
              placeholder="Cover amount"
            />
          </InputBox>
        </Grid>
      </Grid>
    </div>
  );
}
