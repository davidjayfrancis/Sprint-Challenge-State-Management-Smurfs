import axios from "axios";

export const GET_SMURF_DATA = "GET_SMURF_DATA";
export const GET_SMURF_DATA_SUCCESS = "GET_SMURF_DATA_SUCCESS";
export const GET_SMURF_DATA_FAIL = "GET_SMURF_DATA_FAIL";
export const ADD_SMURF = "ADD_SMURF";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAIL = "ADD_SMURF_FAIL";

export const getSmurfData = () => dispatch => {
  dispatch({ type: GET_SMURF_DATA });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => dispatch({ type: GET_SMURF_DATA_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: GET_SMURF_DATA_FAIL, payload: err }));
};

export const addSmurf = smurf => dispatch => {
  dispatch({ type: ADD_SMURF });
  axios
    .post(
      "http://localhost:3333/smurfs",
      smurf
      // {
      //   name: smurf.name,
      //   age: smurf.age,
      //   height: smurf.height,
      //   id: smurf.id
      // }
    )
    .then(res => dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: ADD_SMURF_FAIL, payload: err }));
};

// axios.post('/user', {
//     firstName: 'Fred',
//     lastName: 'Flintstone'
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
