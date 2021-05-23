import * as actions from "../constants/LoginConstants"
import * as actionsGame from "../constants/GameConstants"

export const login = (name) => {
  return (dispatch) => {
    dispatch({
      type: actions.USER_LOGIN_SUCCESS,
      payload: name,
    })
  }
}

export const logout = () => {
  return (dispatch) => {
    dispatch({
      type: actions.USER_LOGOUT_SUCCESS,
      payload: null,
    })
    dispatch({
      type: actionsGame.GAME_RESET,
    })
  }
}
