import React from "react";
import { useRouteMatch, Route, Switch } from "react-router-dom";
import "./Life.css";

// images
import life from "../../accets/life.svg";

// card & banner
import AutoCard from "../Card/Card";
import Banner from "../Banner";

// data
import { subLifeInsurances } from "../../Data/data";

import TermLife from "./TermLife";
import GroupLife from "./GroupLife";
import PermanentLife from "./PermanentLife";

export default function Life() {
  const { path, url } = useRouteMatch();

  const title = "Life";
  const description =
    "Prepare for your family's future in the case of an unexpected tragedy. Insurance Helps you.";

  const renderComponent = (title) => {
    switch (title) {
      case "Permanent Life":
        return <PermanentLife />;
      case "Term Life":
        return <TermLife />;
      case "Group Life":
        return <GroupLife />;
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
