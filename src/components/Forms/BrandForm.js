import { Grid, TextField } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FIELD_CHANGE } from "../../constants/autoCompare.constant";

const brands = ["BMW", "Honda", "Mercedes-Benz", "Audi", "Tesla", "Lamborghini", "Ferrari", "Bugatti"]

function BrandForm() {
  const dispatch = useDispatch()
  const autoQuery = useSelector(state => state.autoQuery)
  const { brand, carNo } = autoQuery

  // Default Brand Selection during initial rendering
  React.useEffect(() => {
    dispatch({
      type: FIELD_CHANGE,
      payload: { field: "brand", value: "BMW" }
    })
  }, [])

  // form field change (controlled input)
  const handleChange = (e) => {
    dispatch({
      type: FIELD_CHANGE,
      payload: {
        field: e.target.name,
        value: e.target.value
      }
    })
  }

  return (
    <div>
      <form style={{ padding: "2rem" }}>
        <TextField
          type="text"
          size="small"
          label="Select Brand Name"
          name="brand"
          value={brand}
          onChange={handleChange}
        />
        <span>OR</span>
        <TextField
          type="text"
          size="small"
          value={carNo}
          name="carNo"
          onChange={handleChange}
          label="Select Number Plate" />
      </form>
      <Grid container>
        {
          brands.map((elem, i) =>
            <Grid item lg={2} key={i}
              onClick={() => {
                dispatch({
                  type: FIELD_CHANGE,
                  payload: {
                    field: "brand", value: elem
                  }
                })
              }}>
              <div style={{
                width: "inherit", border: "1px solid lightgray",
                margin: ".5rem 5%"
              }}>
                <p>{elem}</p>
              </div>
            </Grid>
          )
        }
      </Grid>
    </div>
  );
}

export default BrandForm;
