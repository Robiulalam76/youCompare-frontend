import {
  FIELD_CHANGE,
  INITIAL_POPULATION,
  AUTO_POLICY_HOLDER_FIELD_CHANGE,
} from "../constants/autoCompare.constant";

const query = {
  typeofInsurance: "",
  typeofUse: "",
  typeofCar: "",
  carNo: "",
  model: "",
  brand: "",
  year: "",
  idv: "",
};

export const autoQueryReducer = (state = query, action) => {
  switch (action.type) {
    case FIELD_CHANGE:
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    default:
      return state;
  }
};

const policyHolder = {
  fullName: "",
  email: "",
  phone: "",
  dob: "",
  maritalStatus: "",
  address: "",
  state: "",
  city: "",
  pincode: "",
};

export const autoPolicyHolderReducer = (state = policyHolder, action) => {
  switch (action.type) {
    case AUTO_POLICY_HOLDER_FIELD_CHANGE:
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    default:
      return state;
  }
};
