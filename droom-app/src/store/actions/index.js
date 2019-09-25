// Axios with Auth
import { axiosWithAuth } from "../..utils/axiosWithAuth"

// ACTIONS
export const ADD_MATCH_START = "ADD_MATCH_START"

// ACTION CREATOR
export const addMatch = id => dispatch => {
  console.log("function was called")
}

export const LOGIN_START = "LOGIN_START"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"

export const REGISTER_SEEKER_START = "REGISTER_SEEKER_START"
export const REGISTER_SEEKER_SUCCESS = "REGISTER_SEEKER_SUCCESS"
export const REGISTER_SEEKER_FAILURE = "REGISTER_SEEKER_FAILURE"

export const REGISTER_COMPANY_START = "REGISTER_COMPANY_START"
export const REGISTER_COMPANY_SUCCESS = "REGISTER_COMPANY_SUCCESS"
export const REGISTER_COMPANY_FAILURE = "REGISTER_COMPANY_FAILURE"

export const login = creds => dispatch => {
  console.log(creds)
  dispatch({type: LOGIN_START})
  axiosWithAuth().post("/login", creds)
  .then(res => {
    console.log(res)
    dispatch({type: LOGIN_SUCCESS, payload: res.data})
  }).catch(err => {
    console.log(err)
    dispatch({type: LOGIN_FAILURE})
  })
}

export const registerSeeker = creds => dispatch => {
  console.log(creds)
  dispatch({type: REGISTER_SEEKER_START})
  axiosWithAuth().post("/seekers/register", creds)
  .then(res => {
    console.log(res)
    dispatch({type: REGISTER_SEEKER_SUCCESS, payload: res.data})
  }).catch(err => {
    console.log(err)
    dispatch({type: REGISTER_SEEKER_FAILURE})
  })
}

export const registerCompany = creds => dispatch => {
  console.log(creds)
  dispatch({type: REGISTER_COMPANY_START})
  axiosWithAuth().post("/companies/register", creds)
  .then(res => {
    console.log(res)
    dispatch({type: REGISTER_COMPANY_SUCCESS, payload: res.data})
  }).catch(err => {
    console.log(err)
    dispatch({type: REGISTER_COMPANY_FAILURE})
  })
}
