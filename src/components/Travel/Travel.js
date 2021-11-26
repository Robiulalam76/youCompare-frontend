import { Grid } from "@mui/material";
import React from "react";
import {
  BrowserRouter as Router,
  useRouteMatch,
  Route,
  Switch,
  Link,
} from "react-router-dom";
import "./Travel.css";

// image
import travel from "../../accets/driver.svg";

// card & banner
import AutoCard from "../Card/Card";
import Banner from "../Banner";

// steppers
// import MuiStepper from "../MuiStepper";

// travel forms
// import TripDetail from "../Forms/Travel/TripDetail";
// import TravelCover from "../Forms/Travel/TravelCover";

import { subTravelInsurances } from "../../Data/data";
import SingleTrip from "./SingleTrip";

export default function Travel() {
  const { path, url } = useRouteMatch();

  const commercialTitle = "Travel";
  const commercialDescription =
    "Insurance that plans cover trip cancellation, travel medical & many more from your loss.";

  const renderComponent = (title) => {
    switch (title) {
      case "Single Trip":
        return <SingleTrip multi={false} />;
      case "Multi Trip":
        return <SingleTrip multi={true} />;
      default:
        return;
    }
  };
  return (
    <div style={{ marginTop: "2%" }}>
      <Switch>
        <Route path={`${path}`} exact>
          <AutoCard
            title={commercialTitle}
            description={commercialDescription}
            url={url}
            subInsuranceArray={subTravelInsurances}
            sideBanner={travel}
          />
        </Route>
        {subTravelInsurances.map((insurance) => (
          <Route path={`${path}/${insurance.url}`} key={insurance.title}>
            <Banner
              title={insurance.title}
              description={insurance.description}
              imageSrc={insurance.image}
            >
              <div className="SteeperDiv">
                {renderComponent(insurance.title)}
              </div>
            </Banner>
          </Route>
        ))}
      </Switch>
    </div>
  );
}
