import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducer";
import { searcherReducer } from "./reducers/searcher.reducer";
import {
  autoBuyStepperReducer,
  autoPolicyHolderReducer,
  autoQueryReducer,
  vehicleDetailsReducer,
} from "./reducers/auto.reducer";
import { travelQueryReducer } from "./reducers/travel.reducer";
import {
  healthProposerReducer,
  healthQueryReducer,
  healthBuyStepperReducer,
  healthMembersReducer,
} from "./reducers/health.reducer";
import {
  lifeQueryReducer,
  groupLifeQueryReducer,
} from "./reducers/life.reducer";

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
  searcher: searcherReducer,

  // auto
  autoQuery: autoQueryReducer,
  autoPolicyHolder: autoPolicyHolderReducer,
  autoBuyStepper: autoBuyStepperReducer,
  vehicleDetails: vehicleDetailsReducer,

  travelQuery: travelQueryReducer,

  healthQuery: healthQueryReducer,
  healthProposer: healthProposerReducer,
  healthMember: healthMembersReducer,
  healthBuyStepper: healthBuyStepperReducer,

  lifeQuery: lifeQueryReducer,
  groupLifeQuery: groupLifeQueryReducer,
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
    initalState,
    composeEnhancers(applyMiddleware(...middleware))
  );
} else {
  store = createStore(rootReducer, initalState, applyMiddleware(...middleware));
}

export default store;
