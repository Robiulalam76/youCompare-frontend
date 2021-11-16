import { Grid } from "@mui/material";
import React from "react";
import {
  BrowserRouter as Router,
  useRouteMatch,
  Route,
  Switch,
  Link,
} from "react-router-dom";
import "./Life.css";

// images
import life from "../../accets/life.svg";

// card & banner
import AutoCard from "../Card/Card";
import Banner from "../Banner";

// Steppers
import MuiStepper from "../MuiStepper";

// data
import { subLifeInsurances } from "../../Data/data";

// steped forms
import Insurance from "../../components/Forms/Life/Insurance";
import Coverage from "../../components/Forms/Life/Coverage";
import TermLifeCoverage from "../Forms/Life/TermLifeCoverage";
import GroupLifeCover from "../Forms/Life/GroupLifeCover";

const steps = [
  {
    label: "Cover",
    component: <Coverage />,
  },
  {
    label: "Insurance",
    component: <Insurance />,
  },
  {
    label: "Compare",
  },
];

const stepsForTerm = [
  {
    label: "Cover",
    component: <TermLifeCoverage />,
  },
  {
    label: "Insurance",
    component: <Insurance />,
  },
  {
    label: "Compare",
  },
];

const stepsForGroup = [
  {
    label: "Cover",
    component: <GroupLifeCover />,
  },
  {
    label: "Insurance",
    component: <Insurance />,
  },
  {
    label: "Compare",
  },
];

export default function Life() {
  const { path, url } = useRouteMatch();

  const title = "Life";
  const description =
    "Prepare for your family's future in the case of an unexpected tragedy. Insurance Helps you.";

  const renderStepper = (title) => {
    switch (title) {
      case "Permanent Life":
        return <MuiStepper steps={steps} />;
      case "Term Life":
        return <MuiStepper steps={stepsForTerm} />;
      case "Group Life":
        return <MuiStepper steps={stepsForGroup} />;
      default:
        return;
    }
  };

  return (
    <div style={{ marginTop: "2%" }}>
      <Switch>
        <Route path={`${path}`} exact>
          <AutoCard
            title={title}
            description={description}
            url={url}
            subInsuranceArray={subLifeInsurances}
            sideBanner={life}
            rowNumber={4}
          />
        </Route>
        {subLifeInsurances.map((insurance) => (
          <Route path={`${path}/${insurance.url}`} key={insurance.title}>
            <Banner
              title={insurance.title}
              description={insurance.description}
              imageSrc={insurance.image}
              stepper={renderStepper(insurance.title)}
            />
          </Route>
        ))}
      </Switch>
    </div>
  );
}
