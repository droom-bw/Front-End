import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_COMPANY_START,
  REGISTER_COMPANY_SUCCESS,
  REGISTER_COMPANY_FAILURE,
  REGISTER_SEEKER_START,
  REGISTER_SEEKER_SUCCESS,
  REGISTER_SEEKER_FAILURE,
  LOGOUT,
  PAGE_RELOAD
} from "../actions"

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || {},
  matches: [],
  isLoggedIn: localStorage.getItem("token") ? true : false,
  isLoading: false
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START || REGISTER_COMPANY_START || REGISTER_SEEKER_START:
      return { ...state, isLoading: true }

    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        user: {
          ...action.payload,
          type: action.payload.hasOwnProperty("resume") ? "seeker" : "company"
        }
      }

    case REGISTER_SEEKER_SUCCESS || REGISTER_COMPANY_SUCCESS:
      return { ...state, isLoading: false }

    case LOGIN_FAILURE || REGISTER_COMPANY_FAILURE || REGISTER_SEEKER_FAILURE:
      return { ...state, isLoading: false }

    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false
      }

    case PAGE_RELOAD:
      const localUser = JSON.parse(localStorage.getItem("user"))
      return {
        ...state,
        user: {
          ...localUser,
          type: state.user.hasOwnProperty("resume") ? "seeker" : "company"
        }
      }

    default:
      return state
  }
}
