import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import uiStateReducer, { UIState } from "./reducers/uiStateReducer"


export interface ReduxState {
  uiStateReducer: UIState
}
const store = createStore(combineReducers<ReduxState>({ uiStateReducer }), applyMiddleware(thunk))

export default store

