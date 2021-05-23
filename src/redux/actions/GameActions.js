import * as actions from "../constants/GameConstants"

export const spin = (slot1, slot2, slot3) => {
  return (dispatch, getState) => {
    const { user } = getState().login
    if (user) {
      const { spin, balance } = getState().game
      let newBal = parseFloat(balance) - 1
      if (slot1 === slot2 || slot2 === slot3 || slot1 === slot3)
        newBal = newBal + 0.5
      if (slot1 === 3 && slot2 === 3 && slot3 === 3) newBal = newBal + 5
      if (slot1 === 7 && slot2 === 7 && slot3 === 7) newBal = newBal + 10

      dispatch({
        type: actions.GAME_SPIN,
        payload: {
          balance: newBal,
          spin: {
            id: spin.length === 0 ? 1 : spin.length + 1,
            slot1,
            slot2,
            slot3,
            time: new Date(),
          },
        },
      })
    }
  }
}
