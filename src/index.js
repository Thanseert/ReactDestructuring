// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

console.log(cars);
const [honda, tesla] = cars; 
// console.log(Honda);
// console.log(tesla);

const { model, coloursByPopularity: teslaTopColour, speedStats: { topSpeed: teslaTopSpeed, zeroToSixty} } = tesla;

const {speedStats : {topSpeed: hondaTopSpeed} } = honda
const {coloursByPopularity : [hondaTopColour]} = honda;

// console.log(coloursByPopularity);
// console.log(speedStats);

// const Model = Tesla.model;
// const teslaTopColour = Tesla.teslaTopColour;

// console.log(Model);



ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Color</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
