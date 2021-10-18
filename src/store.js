import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducer";
import { autoQueryReducer } from "./reducers/auto.reducer";
import { travelQueryReducer } from "./reducers/travel.reducer";
import { healthQueryReducer } from "./reducers/health.reducer";
import { lifeQueryReducer } from "./reducers/life.reducer";

// import {
//   userLoginReducer,
//   userLogoutReducer,
//   userSignupReducer,
//   userUpdateReducer,
// } from "./reducers/auth.reducer";

const rootReducer = combineReducers({
  // userSignup: userLoginReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  autoQuery: autoQueryReducer,
  travelQuery: travelQueryReducer,
  healthQuery: healthQueryReducer,
  lifeQuery: lifeQueryReducer
  // userLogout: userLogoutReducer,
});

const composeEnhancers = composeWithDevTools({});
let store;

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initalState = { userLogin: { userInfo: userInfoFromStorage } };

const middleware = [thunk];

if (process.env.MODE === "development") {
  store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware))
  );
} else {
  store = createStore(rootReducer, applyMiddleware(...middleware));
}

export default store;
