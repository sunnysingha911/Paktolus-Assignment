import * as actions from "../constants/LoginConstants"

const initialState = {
  user: null,
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.USER_LOGIN_SUCCESS:
      return {
        ...state,
        user: payload,
      }

    case actions.USER_LOGOUT_SUCCESS:
      return {
        ...state,
        user: payload,
      }

    default:
      return state
  }
}
