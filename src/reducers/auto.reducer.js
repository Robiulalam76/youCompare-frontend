import { FIELD_CHANGE, INITIAL_POPULATION } from "../constants/autoCompare.constant"

const query = {
  typeofInsurance: "",
  typeofUse: "",
  typeofCar: "",
  carNo: "",
  model: "",
  brand: "",
  year: ""
}

export const queryReducer = (state = query, action) => {
  switch (action.type) {
    case FIELD_CHANGE:
      return {
        ...state,
        [action.payload.field]: action.payload.value
      }
    default:
      return state
  }
}

const searcher = {
  fullName: "",
  email: "",
  phone: ""
}

export const searcherReducer = (state = searcher, action) => {
  switch (action.type) {
    case 'FIELD_CHANGE':
      return {
        ...state,
        [action.payload.field]: action.payload.value
      }
    default:
      return state
  }
}

const policyHolder = {
  fullName: "",
  email: "",
  phone: "",
  dob: "",
  maritalStatus: "",
  address: "",
  state: "",
  city: ""
}

export const policyHolderReducer = (state = policyHolder, action) => {
  switch (action.type) {
    default:
      return state
  }
}