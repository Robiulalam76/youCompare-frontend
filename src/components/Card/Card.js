import React from "react";
import { Button, Grid } from "@mui/material";

import {
  BrowserRouter as Router,
  useRouteMatch,
  Route,
  Switch,
  Link,
} from "react-router-dom";
// image
import commercial from "../../accets/commercial.svg";

import privateAuto from "../../accets/private.svg";
import threeWheel from "../../accets/threeWheel.svg";
import twowheeler from "../../accets/twowheeler.svg";
import SubCard from "../Auto/SubCard/SubCard";

function AutoCard({
  rowNumber = 6,
  sideBanner,
  url,
  subInsuranceArray,
  title,
  description,
}) {
  return (
    <Grid container>
      <Grid lg={4} className="GridDiv">
        <div>
          <h1 className="BannerHeader">{title}</h1>
          <p>{description}</p>
        </div>
        <img src={sideBanner} alt="" />
      </Grid>
      <Grid lg={8} className="CardMain">
        <Grid container>
          {subInsuranceArray.map((insurance, i) => (
            <Grid lg={rowNumber} className="SubcardDiv">
              <Button variant="text">
                <Link className="Link" to={`${url}/${insurance.url}`}>
                  <SubCard insurance={insurance} i={i} />
                  {/* <div key={i}>
              <h3>{insurance.title}</h3>
              <p>text</p>
            </div> */}
                </Link>
              </Button>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default AutoCard;
