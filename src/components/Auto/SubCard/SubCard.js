import React from "react";

function SubCard({ i, insurance }) {
  const insuranceDiv = {
    display: "inline-grid",
    width: "90%",
    border: "1px solid lightgray",
    margin: "1rem 1%",
    padding: "2%",
    height: "250px",
    cursor: "pointer",
    borderRadius: "5px",
    backgroundColor: "white",
  };
  return (
    <div>
      <div style={insuranceDiv}>
        <div
          className="subCard"
          key={i}
          style={{ justifyContent: "space-around" }}
        >
          <p style={{ textAlignLast: "left" }}>{insurance.title}</p>
          <img
            style={{ height: "80%", width: "80%" }}
            src={insurance.image}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default SubCard;
