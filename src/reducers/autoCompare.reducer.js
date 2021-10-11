import { FIELD_CHANGE, INITIAL_POPULATION } from "../constants/autoCompare.constant"

const queryState = {
  typeofInsurance: "",
  typeofUse: "",
  typeofCar: "",
  carNo: "",
  model: "",
  brand: "",
  year: "",
  fullName: "",
  email: "",
  phone: "",
  value: ""
}

export const autoQueryFormReducer = (state = queryState, action) => {
  switch(action.type) {
    case FIELD_CHANGE: 
      return {
        ...state,
        [action.payload.field] : action.payload.value
      }
    default:
      return state
  }
}