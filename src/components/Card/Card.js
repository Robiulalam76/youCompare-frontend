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
      <Grid lg={5} xs={12} xl={5} md={12} sm={12} className="GridDiv">
        <div style={{ textAlign: "-webkit-match-parent" }}>
          <h1 className="BannerHeader">{title}</h1>
          <p>{description}</p>
        </div>
        <img style={{ padding: "20px" }} src={sideBanner} alt="" />
      </Grid>
      <Grid lg={7} xl={7} md={12} xs={12} sm={12} className="CardMain SubAuto">
        <Grid container>
          {subInsuranceArray.map((insurance, i) => (
            <Grid
              lg={rowNumber}
              xl={rowNumber}
              xs={12}
              md={rowNumber}
              sm={6}
              className="SubcardDiv SubAuto"
            >
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
