import {
  HEALTH_BUY_STEP_CHANGE,
  HEALTH_PROPOSER_FIELD_CHANGE,
  HEALTH_QUERY_FIELD_CHANGE,
  HEALTH_MEMBERS_FIELD_CHANGE,
} from "../constants/health.constant";

const queryState = {
  insuranceType: "",
  coverFor: "",
  organizationName: "",
};

export const healthQueryReducer = (state = queryState, action) => {
  switch (action.type) {
    case HEALTH_QUERY_FIELD_CHANGE: {
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    }
    default:
      return state;
  }
};

export const healthProposerReducer = (
  state = {
    fullName: "",
    email: "",
    mobile: "",
    emergencyNo: "",
    maritalStatus: "",
    gender: "",
  },
  action
) => {
  switch (action.type) {
    case HEALTH_PROPOSER_FIELD_CHANGE: {
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    }
    default:
      return state;
  }
};

export const healthMembersReducer = (
  state = {
    fullName: "",
    dob: "",
    occupation: "",
    weight: "",
    height: "",
  },
  action
) => {
  switch (action.type) {
    case HEALTH_MEMBERS_FIELD_CHANGE:
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    default:
      return state;
  }
};

export const healthBuyStepperReducer = (state = { currentStep: 0 }, action) => {
  switch (action.type) {
    case HEALTH_BUY_STEP_CHANGE:
      return {
        ...state,
        currentStep: action.payload,
      };
    default:
      return state;
  }
};
