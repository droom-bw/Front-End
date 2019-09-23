const initialState = {
  isLoggedIn: false,
  isSeeker: false,
  isCompany: false,
  isLoading: false,
  jobs: [],
  seekers: []
}

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
