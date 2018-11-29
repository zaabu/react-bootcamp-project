import { combineReducers } from "redux";
import userReducer from "./userReducer";
import loadingReducer from "./loadingReducer";
import entriesReducer from "./entriesReducer/entryReducer"

const reducers = combineReducers({
  userReducer,
  loadingReducer,
  entriesReducer
});

export default reducers;
