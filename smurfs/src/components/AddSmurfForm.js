import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { useForm } from "../hooks/useForm.js";
import { addSmurf } from "../actions";

const AddSmurfForm = props => {
  const [smurf, setSmurf] = useForm({
    name: "",
    age: "",
    height: "",
    id: 0
  });

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Old Smurfs: ", props.smurfs, "NEW SMURF: ", smurf);
    props.addSmurf({ ...smurf, id: props.smurfs.length + 100 });

    // call action function to update Smurfs
  };

  /*
  handleAgeChange;

  handleHeightChange;
  */

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={smurf.name}
          placeholder="name..."
          onChange={setSmurf}
        ></input>
        <input
          type="text"
          name="age"
          value={smurf.age}
          placeholder="age..."
          onChange={setSmurf}
        ></input>
        <input
          type="text"
          name="height"
          value={smurf.height}
          onChange={setSmurf}
          placeholder="height..."
        ></input>
        <button type="submit">Submit new Smurf!</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(mapStateToProps, { addSmurf })(AddSmurfForm);
