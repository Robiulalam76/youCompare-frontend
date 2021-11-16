import React from "react";
import { useRouteMatch, Route, Switch } from "react-router-dom";
import "./Health.css";

// image
import health from "../../accets/health.svg";

// import ppo from "../../accets/Group 3044.svg";
// import hmo from "../../accets/health (2).svg";
// import healthService from "../../accets/Group 3231.svg";
// import poinOfService from "../../accets/37520.png";

import AutoCard from "../Card/Card";
import Banner from "../Banner";
import MuiStepper from "../MuiStepper";
import { subHealthInsurances } from "../../Data/data";

// stepped forms
import Cover from "../Forms/Health/Cover";
import Insurance from "../Forms/Health/Insurance";

const steps = [
  {
    label: "Cover",
    component: <Cover />,
  },
  {
    label: "Insurance",
    component: <Insurance />,
  },
  {
    label: "Compare",
  },
];

export default function Travel() {
  const { path, url } = useRouteMatch();

  const commercialTitle = "Health";
  const commercialDescription =
    "Health is the most important thing we should protect, when we can't take care of ourselves, then insurance will help.";

  const renderSteps = (title) => {
    switch (title) {
      case "PPO":
        return steps;
      case "HMO":
        return steps;
      case "Point Of Service":
        return steps;
      case "Health Saving":
        return steps;
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
            subInsuranceArray={subHealthInsurances}
            sideBanner={health}
          />
        </Route>
        {subHealthInsurances.map((insurance) => (
          <Route path={`${path}/${insurance.url}`} key={insurance.title}>
            <Banner
              title={insurance.title}
              description={insurance.description}
              imageSrc={insurance.image}
              stepper={<MuiStepper steps={renderSteps(insurance.title)} />}
            />
          </Route>
        ))}
      </Switch>
    </div>
  );
}
