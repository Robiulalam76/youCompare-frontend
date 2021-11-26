import { Grid, InputBase, Typography, Box } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FIELD_CHANGE } from "../../../constants/autoCompare.constant";
import { BiCheck } from "react-icons/bi";
import "../style.css";

import InputBox from "../../customStyledComponents/InputBox";
import { CustomTextField as TextField } from "../../customStyledComponents/inputs";
import { styled } from "@mui/system";

const ResponsiveBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  padding: theme.spacing(1, 0),
  [theme.breakpoints.only("xs")]: {
    display: "flex",
    flexDirection: "column-reverse",
  },
}));

const brands = [
  "BMW",
  "Honda",
  "Mercedes",
  "Audi",
  "Tesla",
  "Lambo",
  "Ferrari",
  "Bugatti",
];

function BrandForm() {
  const dispatch = useDispatch();
  const autoQuery = useSelector((state) => state.autoQuery);
  const { brand, carNo } = autoQuery;

  // Default Brand Selection during initial rendering
  // React.useEffect(() => {
  //   dispatch({
  //     type: FIELD_CHANGE,
  //     payload: { field: "brand", value: "BMW" },
  //   });
  // }, []);

  // form field change (controlled input)
  const handleChange = (e) => {
    dispatch({
      type: FIELD_CHANGE,
      payload: {
        field: e.target.name,
        value: e.target.value,
      },
    });
  };

  return (
    <div>
      <form>
        <ResponsiveBox>
          <InputBox label="Select Brand">
            <TextField
              type="text"
              fullWidth
              name="brand"
              value={brand}
              onChange={handleChange}
              placeholder="Brand Name"
            />
          </InputBox>

          <InputBox label="Enter Number Plate">
            <TextField
              type="text"
              fullWidth
              value={carNo}
              name="carNo"
              placeholder="e.g. DH897KL788"
              onChange={handleChange}
            />
          </InputBox>
        </ResponsiveBox>

        {/* <Typography variant="body2" color="text.hover" sx={{ px: 2, mt: 6 }}>
          OR
        </Typography> */}
      </form>

      <Grid container>
        {brands.map((elem, i) => (
          <Grid
            item
            lg={3}
            xl={2}
            md={4}
            sm={4}
            xs={6}
            key={i}
            onClick={() => {
              dispatch({
                type: FIELD_CHANGE,
                payload: {
                  field: "brand",
                  value: elem,
                },
              });
            }}
          >
            <div
              className="brandname"
              style={{
                border: brand === elem && "1px solid #6094f3",
                position: "relative",
              }}
            >
              <p>{elem}</p>
              {brand === elem && (
                <span className="right">
                  <BiCheck />{" "}
                </span>
              )}
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default BrandForm;
