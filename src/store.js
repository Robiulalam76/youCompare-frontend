import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

import {
  userLoginReducer, userLogoutReducer, userSignupReducer, userUpdateReducer
} from './reducers/auth.reducer'

const rootReducer = combineReducers({
  userSignup: userSignupReducer,
  userLogin: userLoginReducer,
  userUpdate: userUpdateReducer,
  userLogout: userLogoutReducer
})

const composeEnhancers = composeWithDevTools({})
let store

if (process.env.MODE === 'development') {
  store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
} else {
  store = createStore(rootReducer, applyMiddleware(thunk))
}

export default store