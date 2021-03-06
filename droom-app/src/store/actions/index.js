// Axios with Auth
import { axiosWithAuth } from "../../utils/axiosWithAuth"

export const ADD_MATCH_START = "ADD_MATCH_START"

export const addMatch = id => dispatch => {
  console.log("function was called")
}

export const LOGIN_START = "LOGIN_START"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILURE = "LOGIN_FAILURE"

export const login = (creds, ownProps) => dispatch => {
  console.log(creds)
  dispatch({ type: LOGIN_START })
  axiosWithAuth()
    .post("/seekers/login", creds)
    .then(res => {
      console.log(res)
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.seeker })
      return res.data
    })
    .then(data => {
      localStorage.setItem("token", data.token)
      localStorage.setItem("user", JSON.stringify(data.seeker))
    })
    .then(() => {
      ownProps.history.push("/home")
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: LOGIN_FAILURE })

      axiosWithAuth()
        .post("/companies/login", creds)
        .then(res => {
          console.log(res)
          dispatch({ type: LOGIN_SUCCESS, payload: res.data.response })
          return res.data
        })
        .then(data => {
          localStorage.setItem("token", data.token)
          localStorage.setItem("user", JSON.stringify(data.response))
        })
        .then(() => {
          ownProps.history.push("/home")
        })
        .catch(err => {
          console.log("BOTH LOGINS FAILED, WHO ARE YOU?")
        })
    })
}

export const REGISTER_SEEKER_START = "REGISTER_SEEKER_START"
export const REGISTER_SEEKER_SUCCESS = "REGISTER_SEEKER_SUCCESS"
export const REGISTER_SEEKER_FAILURE = "REGISTER_SEEKER_FAILURE"

export const registerSeeker = (creds, ownProps) => dispatch => {
  console.log(creds)
  dispatch({ type: REGISTER_SEEKER_START })
  axiosWithAuth()
    .post("/seekers/register", creds)
    .then(res => {
      console.log(res)
      dispatch({ type: REGISTER_SEEKER_SUCCESS, payload: res.data })
      ownProps.history.push("/login")
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: REGISTER_SEEKER_FAILURE })
    })
}

export const REGISTER_COMPANY_START = "REGISTER_COMPANY_START"
export const REGISTER_COMPANY_SUCCESS = "REGISTER_COMPANY_SUCCESS"
export const REGISTER_COMPANY_FAILURE = "REGISTER_COMPANY_FAILURE"

export const registerCompany = (creds, ownProps) => dispatch => {
  console.log(ownProps)
  dispatch({ type: REGISTER_COMPANY_START })
  axiosWithAuth()
    .post("/companies/register", creds)
    .then(res => {
      console.log(res)
      dispatch({ type: REGISTER_COMPANY_SUCCESS, payload: res.data.response })
      ownProps.history.push("/login")
    })
    .catch(err => {
      console.log(err)
      dispatch({ type: REGISTER_COMPANY_FAILURE })
    })
}

export const LOGOUT = "LOGOUT"

export const logout = () => dispatch => {
  dispatch({ type: LOGOUT })
  localStorage.removeItem("token")
  localStorage.removeItem("user")
  document.location.replace("/login")
}

export const PAGE_RELOAD = "PAGE_RELOAD"

export const pageReload = () => dispatch => {
  dispatch({ type: PAGE_RELOAD })
}

export const UPDATE_SEEKER_PROFILE = "UPDATE_SEEKER_PROFILE";

export const updateSeekerProfile = (profile, ownProps) => dispatch => {
  dispatch({type: UPDATE_SEEKER_PROFILE, payload: profile})
} 