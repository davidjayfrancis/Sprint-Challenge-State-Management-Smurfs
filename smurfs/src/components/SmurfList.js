import React from "react";
import { connect } from "react-redux";
import Smurf from "./Smurf.js";
import { getSmurfData } from "../actions";
import AddSmurfForm from "./AddSmurfForm.js";

const SmurfList = props => {
  const handleClick = e => {
    e.preventDefault();
    props.getSmurfData();
  };

  return (
    <>
      <button type="submit" onClick={handleClick}>
        Click me to get smurfs :)
      </button>
      <AddSmurfForm />
      {props.smurfs.map(smurf => {
        return (
          <Smurf
            name={smurf.name}
            age={smurf.age}
            height={smurf.height}
            key={smurf.id}
          />
        );
      })}
    </>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(mapStateToProps, { getSmurfData })(SmurfList);
