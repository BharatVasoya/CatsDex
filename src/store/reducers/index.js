import { combineReducers } from "redux";
import homeReducer from "./Home";
import registrationReducer from "./Registration";
const rootReducer = combineReducers({
  homeReducer: homeReducer,
  registrationReducer: registrationReducer,
});

export default rootReducer;
