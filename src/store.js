import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducer";
import { autoQueryFormReducer } from "./reducers/autoCompare.reducer";

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
  autoQuery: autoQueryFormReducer,
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
