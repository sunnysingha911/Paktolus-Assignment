import { combineReducers } from "redux"
import LoginReducer from "./LoginReducer"
import GameReducer from "./GameReducer"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["login", "game"],
}

const rootReducer = combineReducers({
  login: LoginReducer,
  game: GameReducer,
})

export default persistReducer(persistConfig, rootReducer)
