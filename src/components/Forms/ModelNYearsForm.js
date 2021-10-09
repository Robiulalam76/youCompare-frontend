import React from "react";
import { Grid, Button } from "@mui/material";

function ModelNYearsForm() {
  return (
    <div>
      <p>ModelNYearsForm</p>
      <div
        style={{
          width: "10%",
          padding: "30px 0px",
          border: "1px solid salmon",
        }}
      >
        BMW
      </div>
      <form>
        <label for="html">Select Model</label> <br />
        <div>
          <input
            type="search"
            id="mySearch"
            name="q"
            placeholder="Search the site..."
          />
          <Button>Search</Button>
        </div>
        <Button variant="contained">190</Button>
        <Button variant="outlined">220</Button>
        <Button variant="outlined">290</Button>
        <Button variant="outlined">150</Button>
        <Button variant="outlined">170</Button>
        <Button variant="outlined">210</Button>
        <Button variant="outlined">110</Button>
        <Button variant="outlined">290</Button>
        <Button variant="outlined">320</Button>
        <Button variant="outlined">450</Button>
      </form>
      <hr />
      <form>
        <label for="html">Select Year</label> <br />
        <div>
          <input
            type="search"
            id="mySearch"
            name="q"
            placeholder="Search the site..."
          />
          <Button>Search</Button>
        </div>
        <Button variant="outlined">190</Button>
        <Button variant="outlined">220</Button>
        <Button variant="contained">290</Button>
        <Button variant="outlined">150</Button>
        <Button variant="outlined">170</Button>
        <Button variant="outlined">210</Button>
        <Button variant="outlined">110</Button>
        <Button variant="outlined">290</Button>
        <Button variant="outlined">320</Button>
        <Button variant="outlined">450</Button>
      </form>
    </div>
  );
}

export default ModelNYearsForm;
