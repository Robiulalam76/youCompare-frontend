import React from "react";
import {
  BrowserRouter as Router,
  useRouteMatch,
  Route,
  Switch,
  Link,
} from "react-router-dom";
import InsuranceStepper from "./StepperInsurance";

const insuranceDiv = {
  display: "inline-grid",
  width: "20%",
  border: "1px solid lightgray",
  margin: "1rem 1%",
  padding: "0 1%",
  height: "200px",
  cursor: "pointer",
};

function Auto() {
  const { path, url } = useRouteMatch();
  const subInsurances = [
    {
      title: "Commercial Insurance",
      url: "commercial",
      image:
        "https://images.unsplash.com/photo-1502067294280-729dc7fea201?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
      description:
        "Auto insurance is designed to protect yourself and others agains many various risks",
    },
    {
      title: "Private Auto Insurance",
      url: "private",
      image:
        "https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
      description:
        "Prepare for your family's future in the case of an unexpected tragedy. Insurance helps you.",
    },
    {
      title: "Three wheeler Insurance",
      url: "three-wheeler",
      image:
        "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=735&q=80",
      description:
        "Insurance plans that cover trip cancellation, travel medicines and many more from your loss.",
    },
    {
      title: "Two wheeler Isurance",
      url: "two-wheeler",
      image:
        "https://images.unsplash.com/photo-1517120026326-d87759a7b63b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      description:
        "Health is the most important thing that we should protect. Health insurance will take care of medical expenses.",
    },
  ];

  // custome component
  const SubCard = ({ insurance, i }) => (
    <div style={insuranceDiv}>
      <div>
        <div key={i}>
          <h3>{insurance.title}</h3>
          <p>{insurance.description}</p>
        </div>
      </div>
    </div>
  );
  const Card = () => (
    <div>
      <div>
        {subInsurances.map((insurance, i) => (
          <Link to={`${url}/${insurance.url}`}>
            <SubCard insurance={insurance} i={i} />
            {/* <div key={i}>
              <h3>{insurance.title}</h3>
              <p>text</p>
            </div> */}
          </Link>
        ))}
      </div>
    </div>
  );
  const Commercial = () => (
    <div>
      <div>
        <h2>Commercial</h2>
        <InsuranceStepper />
      </div>
    </div>
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
      <h1>Page 2</h1>
      <Switch>
        <Route path={`${path}`} exact component={Card} />
        <Route path={`${path}/commercial`} component={Commercial} />
        <Route path={`${path}/private`} component={Private} />
        <Route path={`${path}/two-wheeler`} component={TwoWheeler} />
        <Route path={`${path}/three-wheeler`} component={ThreeWheeler} />
      </Switch>
      <h1>Page 3</h1>
    </div>
  );
}

export default Auto;
