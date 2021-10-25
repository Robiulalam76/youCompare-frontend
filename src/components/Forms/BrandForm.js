import { Grid, TextField } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FIELD_CHANGE } from "../../constants/autoCompare.constant";
import { BiCheck } from "react-icons/bi";
import "./style.css";

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
  React.useEffect(() => {
    dispatch({
      type: FIELD_CHANGE,
      payload: { field: "brand", value: "BMW" },
    });
  }, []);

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
      <form style={{ padding: "2rem" }}>
        <TextField
          type="text"
          size="small"
          name="brand"
          value={brand}
          onChange={handleChange}
        />
        <span
          style={{
            margin: "0px 10px",
            verticalAlign: "-webkit-baseline-middle",
          }}
        >
          OR
        </span>
        <TextField
          type="text"
          size="small"
          value={carNo}
          name="carNo"
          onChange={handleChange}
          label="Select Number Plate"
        />
      </form>
      <Grid container>
        {brands.map((elem, i) => (
          <Grid
            item
            lg={2}
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
                  {" "}
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
