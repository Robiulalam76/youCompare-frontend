import React from "react";

import {
  Grid,
  Button,
  InputBase,
  Typography,
  Divider,
  IconButton,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

import {
  CustomTextField as Input,
  CustomAutocomplete as Autocomplete,
} from "../../customStyledComponents/inputs";
import InputBox from "../../customStyledComponents/InputBox";
import { nanoid } from "nanoid";
import { useSelector, useDispatch } from "react-redux";
import {
  DELETE_TRAVELLER,
  TRAVEL_FIELD_CHANGE,
  UPDATE_TRAVELLERS,
} from "../../../constants/travel.constant";

const buttonSxProp = { mr: 1, fontSize: ".8rem", py: 0.5, mb: 1 };

export default function TravelCover() {
  const dispatch = useDispatch();
  const { travellers, travellerStatus, totalTravellers } = useSelector(
    (state) => state.travelQuery
  );

  const hideAddButton =
    travellerStatus === "One" || travellerStatus === "Couple";

  const updateTravelQuery = (field, value) => {
    dispatch({
      type: TRAVEL_FIELD_CHANGE,
      payload: {
        field,
        value,
      },
    });
  };

  React.useEffect(() => {
    const travellerObject = {
      age: "",
      gender: "",
      preCondition: "",
    };
    if (totalTravellers == travellers.length) return;
    if (travellerStatus === "One") {
      if (totalTravellers == travellers.length) return;
      updateTravelQuery("travellers", [{ ...travellerObject, id: nanoid(10) }]);
    } else if (travellerStatus === "Couple") {
      updateTravelQuery("travellers", [
        { ...travellerObject, id: nanoid(10) },
        { ...travellerObject, id: nanoid(10) },
      ]);
    } else if (totalTravellers < travellers.length) {
      let temp = [];
      for (let i = 0; i < totalTravellers; i++) {
        temp.push({ ...travellerObject, id: nanoid(10) });
      }
      updateTravelQuery("travellers", temp);
    } else {
      updateTravelQuery("travellers", [
        ...travellers,
        { ...travellerObject, id: nanoid(10) },
      ]);
    }
  }, [totalTravellers]);

  React.useEffect(() => {
    if (travellerStatus === "One") updateTravelQuery("totalTravellers", 1);
    else if (travellerStatus === "Couple")
      updateTravelQuery("totalTravellers", 2);
    else updateTravelQuery("totalTravellers", totalTravellers);
  }, [travellerStatus]);

  const handleTravellerChange = (e, traveller) => {
    dispatch({
      type: UPDATE_TRAVELLERS,
      payload: {
        id: traveller.id,
        field: e.target.name,
        value: e.target.value,
      },
    });
  };

  const handleTravellerClose = (traveller) => {
    if (travellers.length <= 2) return;
    dispatch({
      type: DELETE_TRAVELLER,
      payload: { id: traveller.id },
    });
  };

  return (
    <React.Fragment>
      <Grid container>
        <Grid item xs={12} lg={6}>
          <InputBox label="How many people are travelling?">
            <div style={{ textAlign: "left" }}>
              {["One", "Couple", "Family", "Group"].map((elem, i) => (
                <Button
                  sx={buttonSxProp}
                  key={i}
                  variant="round"
                  value={elem}
                  color={elem === travellerStatus ? "primary" : "text"}
                  onClick={(e) =>
                    updateTravelQuery("travellerStatus", e.target.value)
                  }
                >
                  {elem}
                </Button>
              ))}
            </div>
          </InputBox>
        </Grid>
      </Grid>

      {travellers.map((elem, i) => {
        return (
          <React.Fragment>
            {travellerStatus === "One" ? null : (
              <>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: "1rem",
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{ color: "text.secondary" }}
                  >{`Traveller ${i + 1} Details`}</Typography>
                  <IconButton disabled={travellers.length <= 2}>
                    <CloseIcon
                      fontSize="small"
                      onClick={() => handleTravellerClose(elem)}
                      sx={{ color: "text.hover", cursor: "pointer" }}
                    />
                  </IconButton>
                </div>
                <Divider sx={{ my: 1 }} />
              </>
            )}
            <Grid container key={i} spacing={2}>
              <Grid item xs={6} sm={4}>
                <InputBox label={`Age (In Years)`}>
                  <Input
                    type="number"
                    name="age"
                    fullWidth
                    value={elem.age}
                    inputProps={{
                      style: { padding: ".5rem 1rem" },
                    }}
                    onChange={(e) => {
                      handleTravellerChange(e, elem);
                    }}
                  />
                </InputBox>
              </Grid>
              <Grid item xs={6} sm={4}>
                <InputBox label={`Gender`}>
                  <div style={{ textAlign: "left" }}>
                    {["Male", "Female"].map((gender, j) => (
                      <Button
                        sx={{ mr: 1, fontSize: ".8rem", py: 0.5 }}
                        key={j}
                        variant="round"
                        color={gender === elem.gender ? "primary" : "text"}
                        name="gender"
                        value={gender}
                        onClick={(e) => {
                          handleTravellerChange(e, elem);
                        }}
                      >
                        {gender}
                      </Button>
                    ))}
                  </div>
                </InputBox>
              </Grid>

              <Grid item xs={6} sm={4}>
                <InputBox label={`Pre-Existing Condition`}>
                  <div style={{ textAlign: "left" }}>
                    {["Yes", "No"].map((precon, j) => (
                      <Button
                        sx={{ mr: 1, fontSize: ".8rem", py: 0.5 }}
                        key={j}
                        variant="round"
                        color={
                          precon === elem.preCondition ? "primary" : "text"
                        }
                        name="preCondition"
                        value={precon}
                        onClick={(e) => {
                          handleTravellerChange(e, elem);
                        }}
                      >
                        {precon}
                      </Button>
                    ))}
                  </div>
                </InputBox>
              </Grid>
            </Grid>
          </React.Fragment>
        );
      })}

      {hideAddButton ? null : (
        <Button
          onClick={() =>
            updateTravelQuery("totalTravellers", totalTravellers + 1)
          }
          size="small"
          sx={{ mt: 2 }}
        >
          <AddIcon fontSize="small" /> Add Traveller
        </Button>
      )}
    </React.Fragment>
  );
}
