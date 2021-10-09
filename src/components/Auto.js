import React from "react";
import {
  BrowserRouter as Router,
  useRouteMatch,
  Route,
  Switch,
  Link,
} from "react-router-dom";

function Auto() {
  const { path, url } = useRouteMatch();
  const insurances = [1, 2, 3, 4];
  const Card = () => (
    <div>
      <div>
        {insurances.map((insurance, i) => (
          <Link to={`${url}/subMain`}>
            <div key={i}>
              <h3>{insurance}</h3>
              <p>text</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
  const SubAuto = () => (
    <div>
      <div>
        <h2>SubAuto</h2>
      </div>
    </div>
  );
  return (
    <div>
      <h1>Page 2</h1>
      <Switch>
        <Route path={`${path}`} exact component={Card} />
        <Route path={`${path}/subMain`} component={SubAuto} />
      </Switch>
      <h1>Page 3</h1>
    </div>
  );
}

export default Auto;
