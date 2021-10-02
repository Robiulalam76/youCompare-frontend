import {
  USER_SIGNUP_REQ, USER_SIGNUP_SUCCESS, USER_SIGNUP_FAIL,
  USER_LOGIN_REQ, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL,
  USER_LOGOUT_REQ, USER_LOGOUT_SUCCESS, USER_LOGOUT_FAIL,
  USER_UPDATE_REQ, USER_UPDATE_SUCCESS, USER_UPDATE_FAIL
} from '../constants/auth.constant'

export const userSignupReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNUP_REQ:
      break;
    case USER_SIGNUP_SUCCESS:
      break;
    case USER_SIGNUP_FAIL: 
      break;
    default:
      return state
  }
}

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQ:
      break;
    case USER_LOGIN_SUCCESS:
      break;
    case USER_LOGIN_FAIL: 
      break;
    default:
      return state
  }
}

export const userLogoutReducer = ( state = {}, action ) => {
  switch (action.type) {
    case USER_LOGOUT_REQ:
      break;
    case USER_LOGOUT_SUCCESS:
      break;
    case USER_LOGOUT_FAIL:
      break;
    default:
      return state
  }
}

export const userUpdateReducer = (state = {}, action) => {
  switch(action.type) {
    case USER_UPDATE_REQ:
      break;
    case USER_UPDATE_SUCCESS:
      break;
    case USER_UPDATE_FAIL:
      break;
    default:
      return state
  }
}