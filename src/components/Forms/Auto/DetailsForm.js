import React from "react";
import { Grid, Button, TextField } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { FIELD_CHANGE } from "../../../constants/autoCompare.constant";
import { SEARCHER_FIELD_CHANGE } from "../../../constants/searcher.constant";

import { CustomTextField as Input } from "../../customStyledComponents/inputs";
import InputBox from "../../customStyledComponents/InputBox";

function DetailsForm({ title }) {
  const dispatch = useDispatch();
  const autoQuery = useSelector((state) => state.autoQuery);
  const { brand, model, year, typeofUse, typeofInsurance, idv } = autoQuery;
  const { fullName, email, phone } = useSelector((state) => state.searcher);

  console.log(title);

  // Default selection during initial rendering
  // React.useEffect(() => {
  //   dispatch({
  //     type: FIELD_CHANGE,
  //     payload: { field: "typeofInsurance", value: "comprehensive" },
  //   });
  //   dispatch({
  //     type: FIELD_CHANGE,
  //     payload: { field: "typeofUse", value: "private" },
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

  const handleSearcherChange = (e) => {
    dispatch({
      type: SEARCHER_FIELD_CHANGE,
      payload: {
        field: e.target.name,
        value: e.target.value,
      },
    });
  };

  return (
    <div style={{ marginTop: "2%" }}>
      <div
        style={{
          display: "flex",
        }}
      >
        <div
          style={{
            // width: "17%",
            padding: "30px 20px",
            border: "1px solid #1482d2",
            borderRadius: "10px",
            textAlignLast: "center",
            margin: "0px 2% 0 0",
            height: "20px",
            display: "flex",
            alignItems: "center",
          }}
        >
          {brand}
        </div>
        <div
          style={{
            padding: "30px 20px",
            border: "1px solid #1482d2",
            borderRadius: "10px",
            textAlignLast: "center",
            margin: "0px 2% 0 0",
            height: "20px",
            display: "flex",
            alignItems: "center",
          }}
        >
          {" "}
          {/* <span>Model </span> */}
          {model}
        </div>
        <div
          style={{
            padding: "30px 20px",
            border: "1px solid #1482d2",
            borderRadius: "10px",
            textAlignLast: "center",
            margin: "0px 2% 0 0",
            height: "20px",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* <span style={{ padding: "0px 5px" }}>Year </span> */}
          {year}
        </div>
      </div>

      <Grid container spacing={2}>
        <Grid item container spacing={2} sx={{ mb: 3, alignItems: "flex-end" }}>
          {/* <Grid lg={4}>
          <p>Type of use</p>
          <Button
            variant={typeofUse === "private" ? "contained" : "outlined"}
            value="private"
            name="typeofUse"
            onClick={handleChange}
          >
            Private
          </Button>
          <Button
            variant={typeofUse === "commercial" ? "contained" : "outlined"}
            value="commercial"
            name="typeofUse"
            onClick={handleChange}
          >
            Commercial
          </Button>
        </Grid> */}
          <Grid item lg={6} sm={6} xs={12}>
            <InputBox label="Type of Insurance">
              <div>
                <Button
                  sx={{ mr: 1, fontSize: ".8rem", py: 0.5 }}
                  variant="round"
                  color={typeofInsurance === "thirdparty" ? "primary" : "text"}
                  value="thirdparty"
                  name="typeofInsurance"
                  onClick={handleChange}
                >
                  Third party
                </Button>

                <Button
                  sx={{ mr: 1, fontSize: ".8rem", py: 0.5 }}
                  variant="round"
                  color={
                    typeofInsurance === "comprehensive" ? "primary" : "text"
                  }
                  value="comprehensive"
                  name="typeofInsurance"
                  onClick={handleChange}
                >
                  Comprehensive
                </Button>
              </div>
            </InputBox>
          </Grid>
          {title === "Two Wheeler" || title == "Three Wheeler" ? (
            <Grid item sm={6} xs={12}>
              <InputBox label="Type of Use">
                <div style={{ textAlign: "left" }}>
                  {["Commercial", "Private"].map((elem, i) => (
                    <Button
                      sx={{ mr: 1, fontSize: ".8rem", py: 0.5 }}
                      variant="round"
                      key={i}
                      color={typeofUse === elem ? "primary" : "text"}
                      value={elem}
                      name="typeofUse"
                      onClick={handleChange}
                    >
                      {elem}
                    </Button>
                  ))}
                </div>
              </InputBox>
            </Grid>
          ) : null}
          {typeofInsurance !== "thirdparty" && ( //only for auto insurance
            <Grid item lg={6} sm={6} xs={12}>
              <InputBox label="Value">
                <Input
                  fullWidth
                  type="number"
                  value={idv}
                  placeholder="Value"
                  onChange={handleChange}
                  name="idv"
                />
              </InputBox>
            </Grid>
          )}
        </Grid>

        <Grid
          item
          container
          spacing={2}
          // style={{ padding: "0% 3%", marginTop: "1%" }}
        >
          <Grid item lg={4} md={4} sm={6} xs={12}>
            <InputBox label="Full Name">
              <Input
                fullWidth
                value={fullName}
                placeholder="John Doe"
                onChange={handleSearcherChange}
                name="fullName"
              />
            </InputBox>
          </Grid>
          <Grid item lg={4} md={4} sm={6} xs={12}>
            <InputBox label="Email Address">
              <Input
                fullWidth
                value={email}
                placeholder="john@domain.com"
                onChange={handleSearcherChange}
                name="Email"
              />
            </InputBox>
          </Grid>
          <Grid item lg={4} md={4} xs={12}>
            <InputBox label="Phone No">
              <Input
                fullWidth
                value={phone}
                placeholder="94092300293"
                onChange={handleSearcherChange}
                name="phone"
              />
            </InputBox>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
export default DetailsForm;
