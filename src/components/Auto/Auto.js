import { Grid } from "@mui/material";
import React from "react";
import {
  BrowserRouter as Router,
  useRouteMatch,
  Route,
  Switch,
  Link,
} from "react-router-dom";
import InsuranceStepper from "../StepperInsurance";
import "./Auto.css";

// image
import commercial from "../../accets/commercial.svg";
import privateAuto from "../../accets/private.svg";
import threeWheel from "../../accets/threeWheel.svg";
import twowheeler from "../../accets/twowheeler.svg";
import car from "../../accets/car-image.svg";

const insuranceDiv = {
  display: "inline-grid",
  width: "90%",
  border: "1px solid lightgray",
  margin: "1rem 1%",
  padding: "2%",
  height: "250px",
  cursor: "pointer",
  borderRadius: "5px",
};

function Auto() {
  const { path, url } = useRouteMatch();
  const subInsurances = [
    {
      title: "Commercial",
      url: "commercial",
      image: commercial,
      description:
        "Auto insurance is designed to protect yourself and others agains many various risks",
    },
    {
      title: "Private Auto",
      url: "private",
      image: privateAuto,
      description:
        "Prepare for your family's future in the case of an unexpected tragedy. Insurance helps you.",
    },
    {
      title: "Three wheeler",
      url: "three-wheeler",
      image: threeWheel,
      description:
        "Insurance plans that cover trip cancellation, travel medicines and many more from your loss.",
    },
    {
      title: "Two wheeler",
      url: "two-wheeler",
      image: twowheeler,
      description:
        "Health is the most important thing that we should protect. Health insurance will take care of medical expenses.",
    },
  ];

  // custome component
  const SubCard = ({ insurance, i }) => (
    <div style={insuranceDiv}>
      <div>
        <div className="subCard" key={i}>
          <p style={{ textAlignLast: "left" }}>{insurance.title}</p>
          <img src={insurance.image} alt="" />
        </div>
      </div>
    </div>
  );
  const Card = () => (
    <Grid container>
      <Grid lg={4} className="GridDiv">
        <div>
          <h1 className="BannerHeader">Auto Insurance</h1>
          <p>
            Auto insurance is designed to protect yourself and others against
            many various risks.
          </p>
        </div>
        <img src={car} alt="" />
      </Grid>
      <Grid lg={8} className="CardMain">
        <Grid container>
          {subInsurances.map((insurance, i) => (
            <Grid lg={6} className="SubcardDiv">
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
      </Grid>
    </Grid>
  );

  // sub insurance
  const Commercial = () => (
    <Grid container>
      <Grid lg={5} className="GridDiv">
        <div>
          <h1 className="BannerHeader">Auto Insurance</h1>
          <p>
            Auto insurance is designed to protect yourself and others against
            many various risks.
          </p>
        </div>
        <img src={privateAuto} alt="" />
      </Grid>
      <Grid lg={7}>
        <InsuranceStepper />
      </Grid>
    </Grid>
  );
  const Private = () => (
    <div>
      <div>
        <h2>private</h2>
      </div>
    </div>
  );
  const TwoWheeler = () => (
    <div>
      <div>
        <h2>TwoWheeler</h2>
      </div>
    </div>
  );
  const ThreeWheeler = () => (
    <div>
      <div>
        <h2>ThreeWheeler</h2>
      </div>
    </div>
  );
  return (
    <div>
      <Switch>
        <Route path={`${path}`} exact component={Card} />
        <Route exact path={`${path}/commercial`} component={Commercial} />
        <Route path={`${path}/private`} component={Private} />
        <Route path={`${path}/two-wheeler`} component={TwoWheeler} />
        <Route path={`${path}/three-wheeler`} component={ThreeWheeler} />
      </Switch>
    </div>
  );
}

export default Auto;
