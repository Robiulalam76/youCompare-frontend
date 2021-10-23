import React from "react";

const subInsurances = [
  {
    name: "Auto",
    title: "Commercial Vahical",
    description:
      "loremem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee",
    image:
      "https://images.unsplash.com/photo-1511350224460-4a95f1cf2e88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    name: "Auto",
    title: "Private Vahical",
    description:
      "loremem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee",
    image:
      "https://images.unsplash.com/photo-1511350224460-4a95f1cf2e88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    name: "Auto",
    title: "Two Wheeler Vahical",
    description:
      "loremem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee",
    image:
      "https://images.unsplash.com/photo-1511350224460-4a95f1cf2e88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    name: "Auto",
    title: "Three Wheeler Vahical",
    description:
      "loremem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has bee",
    image:
      "https://images.unsplash.com/photo-1511350224460-4a95f1cf2e88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
];

function SingleInsurance({ insurance }) {
  console.log(insurance);
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div style={{ width: "50%" }}>
        <p>dada {insurance.name}</p>
        <img style={{ width: "100%", padding: "30px" }} src={insurance.image} />
      </div>
      <div
        style={{
          display: "flex",
          //   justifyContent: "space-between",
          width: "50%",
        }}
      >
        {subInsurances.map((subInsurance) => (
          <div style={{ width: "50%" }}>
            <img
              style={{ width: "100%", padding: "30px" }}
              src={subInsurance.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SingleInsurance;
