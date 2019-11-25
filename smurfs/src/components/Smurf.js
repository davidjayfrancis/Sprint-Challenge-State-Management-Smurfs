import React from "react";

const Smurf = props => {
  return (
    <div className="smurf-card">
      <p className="smurf-name">{props.name}</p>
      <p>Age: {props.age}</p>
      <p>Height: {props.height}</p>
    </div>
  );
};

export default Smurf;
