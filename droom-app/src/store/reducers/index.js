import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions"

const initialState = {
  userId: NaN,
  matches: [],
  isLoggedIn: false,
  isLoading: false,
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {...state, isLoading: true}
    case LOGIN_SUCCESS:
      return {...state, isLoading: false, userId: action.payload.id}
    case LOGIN_FAILURE:
      return {...state, isLoading: false}
    default:
      return state
  }
}
