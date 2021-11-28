import {
  FIELD_CHANGE,
  INITIAL_POPULATION,
  AUTO_POLICY_HOLDER_FIELD_CHANGE,
  AUTO_BUY_STEP_CHANGE,
  UPDATE_VEHICLE_DETAILS,
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

const vehicleDetails = {
  chassisNo: "",
  ownershipChanged: "",
  externalKit: "",
  owner: "",
  carRegDate: "",
  policyExpireDate: "",
  idv: "",
};

export const vehicleDetailsReducer = (state = vehicleDetails, action) => {
  switch (action.type) {
    case UPDATE_VEHICLE_DETAILS:
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    default:
      return state;
  }
};

export const autoBuyStepperReducer = (state = { currentStep: 0 }, action) => {
  switch (action.type) {
    case AUTO_BUY_STEP_CHANGE:
      return {
        ...state,
        currentStep: action.payload,
      };
    default:
      return state;
  }
};
