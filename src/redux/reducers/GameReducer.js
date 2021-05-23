import * as actions from "../constants/GameConstants"

const initialState = {
  balance: 99.99,
  spin: [],
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.GAME_SPIN:
      return {
        ...state,
        balance: payload.balance,
        spin: [...state.spin, payload.spin],
      }

    case actions.GAME_RESET:
      return {
        ...state,
        balance: 99.99,
        spin: [],
      }

    default:
      return state
  }
}
