import React, { useState } from "react";
import { Box, Button, ButtonBase, Stack } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@mui/material/Grid";
import { FIELD_CHANGE } from "../../../constants/autoCompare.constant";

import { CustomTextField as Input } from "../../customStyledComponents/inputs";
import InputBox from "../../customStyledComponents/InputBox";
import dataModel from "./allModelData";
import car from "./car";
import truck from "./truck";
import van from "./van";
import { styled } from "@mui/system";

const RoundPrimaryBtn = styled(ButtonBase)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "white",
  padding: theme.spacing(0.5, 1),
  borderRadius: "40px",
}));

function ModelNYearsForm() {
  const dispatch = useDispatch();
  const autoQuery = useSelector((state) => state.autoQuery);
  const { brand, model, year } = autoQuery;
  console.log(`URL brnd and model  from Brands : `, window.location.pathname);
  let dataModel;
  if (window.location.pathname === "/home/auto/commercial/truck") {
    dataModel = truck;
  }

  if (window.location.pathname === "/home/auto/commercial/bus_van") {
    dataModel = van;
  }

  if (window.location.pathname === "/home/auto/commercial/car") {
    dataModel = car;
  }
  // "/home/auto/commercial/truck"

  console.log("brand secelted name", brand);
  console.log("dataModel", dataModel.length);

  const allBrandCar = dataModel.filter(
    (item) => item.Brand?.toLowerCase().trim() === brand.toLowerCase().trim()
  );
  const [totalBrands, setTotalBrands] = useState(allBrandCar.length);
  const [more, setMore] = useState(true);

  const [totalYears, setTotalYears] = useState(allBrandCar.length);
  const [moreYear, setMoreYear] = useState(true);

  console.log("allBrandCar", allBrandCar);

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
    <div
      className="modelBrand"
      style={{ marginTop: "2%", textAlignLast: "start" }}
    >
      <div
        style={{
          padding: "20px 20px",
          border: "1px solid #1482d2",
          borderRadius: "10px",
          display: "inline-block",
          marginBottom: "1%",
        }}
      >
        {brand}
      </div>

      {/* Model Selection */}
      <Stack spacing={2} sx={{ textAlign: "left" }}>
        <form>
          <InputBox label="Select Model" sx={{ py: 1 }}>
            <Input
              fullWidth
              name="model"
              type="search"
              value={model}
              onChange={handleChange}
            />
          </InputBox>

          {/* model section  */}
          <Grid container spacing={2}>
            {allBrandCar.slice(0, more ? 10 : totalBrands).map(
              (elem, i) =>
                elem?.Model?.length > 0 && (
                  <Grid item xl={2} lg={3} md={4} sm={6} xs={12}>
                    <div
                      className="scroll"
                      style={{
                        width: "100%",
                        padding: "10px 15px",
                        textAlign: "center",
                        color: elem.Model === model ? "#1482d2" : "#B6B6B6",
                        borderRadius: "5px",
                        border:
                          elem.Model === model
                            ? "1px solid #1482d2"
                            : "1px solid #B6B6B6",
                        maxHeight: "40px",
                        overflowY: "scroll",
                      }}
                      sx={{
                        fontSize: ".8rem",
                      }}
                      key={i}
                      variant="round"
                      color={elem.Model === model ? "primary" : "text"}
                      name="model"
                      value={elem.Model}
                      onClick={() =>
                        dispatch({
                          type: FIELD_CHANGE,
                          payload: { field: "model", value: elem.Model },
                        })
                      }
                    >
                      {elem?.Model}
                    </div>
                  </Grid>
                )
            )}
          </Grid>
          <p
            style={{
              border: "1px solid #0048ba",
              color: "#0048ba",
              borderRadius: "5px",
              display: "inline-block",
              margin: "10px 0px",
              padding: "5px",
            }}
            onClick={() => setMore(!more)}
          >
            {more ? <p> See More</p> : <p> See Less</p>}
          </p>
        </form>

        {/* Year Selection */}
        <form>
          <InputBox label="Select Year" sx={{ py: 1 }}>
            <Input name="year" fullWidth value={year} onChange={handleChange} />
          </InputBox>

          {/* year section start  */}
          {allBrandCar.slice(0, moreYear ? 10 : totalYears).map((elem, i) => (
            <Button
              sx={{ mr: 1, my: 0.5, fontSize: ".8rem", py: 0.5 }}
              key={i}
              name="year"
              value={elem.Year}
              variant="round"
              color={elem.Year === year ? "primary" : "text"}
              onClick={handleChange}
            >
              {elem.Year}
            </Button>
          ))}
          <br />
          <p
            style={{
              border: "1px solid #0048ba",
              color: "#0048ba",
              borderRadius: "5px",
              display: "inline-block",
              margin: "10px 0px",
              padding: "5px",
            }}
            onClick={() => setMoreYear(!moreYear)}
          >
            {moreYear ? <p> See More</p> : <p> See Less</p>}
          </p>
        </form>
      </Stack>
    </div>
  );
}

export default ModelNYearsForm;
