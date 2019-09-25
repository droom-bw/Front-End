import { 
  LOGIN_START, 
  LOGIN_SUCCESS, 
  LOGIN_FAILURE,
  REGISTER_COMPANY_START,
  REGISTER_COMPANY_SUCCESS,
  REGISTER_COMPANY_FAILURE,
  REGISTER_SEEKER_START,
  REGISTER_SEEKER_SUCCESS,
  REGISTER_SEEKER_FAILURE
} from "../actions"

const initialState = {
  user: {},
  matches: [],
  isLoggedIn: false,
  isLoading: false,
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START || REGISTER_COMPANY_START || REGISTER_SEEKER_START:
      return {...state, isLoading: true}

    case LOGIN_SUCCESS:
      //I think we also want to pass in the user object here, not just userId
      //I believe we're getting back an object message, token, seeker
      //So we'll have to do get their id
      //And also if seeker.resume exists, add isSeeker: true to the state
      //If seeker.resume doesn't exist, add isSeeker: false to the state
      return {...state, isLoading: false, user: action.payload}

    case REGISTER_SEEKER_SUCCESS || REGISTER_COMPANY_SUCCESS:
      return {...state, isLoading: false}

    case LOGIN_FAILURE || REGISTER_COMPANY_FAILURE || REGISTER_SEEKER_FAILURE:
      return {...state, isLoading: false}
      
    default:
      return state
  }
}
