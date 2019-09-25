import axios from "axios"

// ACTIONS
export const ADD_MATCH_START = "ADD_MATCH_START"

// ACTION CREATOR
export const addMatch = id => dispatch => {
  console.log("function was called")
}

export const LOGIN_START = "LOGIN_START"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"

export const login = creds => dispatch => {
  dispatch({type: LOGIN_START})
  axios.post("/login", creds)
  .then(res => {
    console.log(res)
    dispatch({type: LOGIN_SUCCESS, payload: res.data})
  }).catch(err => {
    dispatch({type: LOGIN_FAILURE})
  })
}

