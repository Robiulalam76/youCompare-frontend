import { Grid } from "@mui/material";
import React from "react";
import {
  BrowserRouter as Router,
  useRouteMatch,
  Route,
  Switch,
  Link,
} from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { subCommercial, subInsurances } from "../../../Data/data";

import InsuranceStepper from "../../StepperInsuranceAuto";
import SubCard from "../SubCard/SubCard";

function CommercialAuto({ commercial }) {
  const { path, url } = useRouteMatch();
  return (
    <div>
      <Grid container>
        <Grid lg={5} className="GridDiv">
          <div>
            <h1 className="BannerHeader">Comercial Auto </h1>
            <p>
              Auto insurance is designed to protect yourself and others against
              many various risks.
            </p>
          </div>
          <img src={commercial} alt="" />
        </Grid>
        <Grid lg={7}>
          {/* <InsuranceStepper /> */}
          <Switch>
            <Route path={`${path}`} exact>
              <CommerialCard />
              {/* <AutoCard
            title={commercialTitle}
            description={commercialDescription}
            url={url}
          /> */}
            </Route>
            <Route path={`${path}/:commercialCar`}>
              <InsuranceStepper />
            </Route>

            {/* <Route path={`${path}/private`}>
              <PrivateAuto privateAuto={privateAuto} />
            </Route> */}
            {/* <Route path={`${path}/two-wheeler`}>
          <TwoWheeler TwoWheeler={twowheeler} />
        </Route>
        <Route path={`${path}/three-wheeler`}>
          <ThreeWheeler ThreeWheeler={threeWheel} />
        </Route> */}
          </Switch>
        </Grid>
      </Grid>
    </div>
  );
}

export default CommercialAuto;

const CommerialCard = () => {
  const { path, url } = useRouteMatch();
  return (
    <div>
      <h1>
        {" "}
        <BsArrowLeft /> Types of Vahical{" "}
      </h1>
      <Grid container>
        {subCommercial.map((insurance, i) => (
          <Grid lg={4} className="SubcardDiv">
            <Link className="Link" to={`${url}/${insurance.url}`}>
              <SubCard insurance={insurance} i={i} />
              {/* <div key={i}>
              <h3>{insurance.title}</h3>
              <p>text</p>
            </div> */}
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
const Audo2 = () => {
  return (
    <div>
      <p>one tow days</p>
    </div>
  );
};
