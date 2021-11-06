import React from "react";

import CompareLayout from "../../../components/Layout/compareLayout";

import Results from "./results";
import Filter from "./Filter";

export default function AutoCompare(props) {
  return (
    <React.Fragment>
      <CompareLayout filter={<Filter />} result={<Results />} />
    </React.Fragment>
  );
}
