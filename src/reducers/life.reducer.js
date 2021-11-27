import { GROUP_LIFE_QUERY_FIELD_CHANGE } from "../constants/life.constants";

const queryState = {
  coverAmount: "",
  coverFor: {
    relationship: "",
    gender: "",
    smoke: "",
    employment: "",
    age: "",
  },
  termLength: "",
  healthIssue: "",
  healthIssue_father: "",
  healthIssue_mother: "",
  fullName: "",
  email: "",
  mobile: "",
};

export const lifeQueryReducer = (state = queryState, action) => {
  switch (action.type) {
    case "LIFE_QUERY_FIELD_CHANGE": {
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    }
    case "COVER_FOR_FIELD_CHANGE": {
      return {
        ...state,
        coverFor: {
          ...state.coverFor,
          [action.payload.field]: action.payload.value,
        },
      };
    }
    case "LIFE_QUERY_RESET": {
      return {
        ...state,
        coverAmount: "",
        coverFor: {
          ...state.coverFor,
          gender: "",
          smoke: "",
          employment: "",
          age: "",
        },
        termLength: "",
        healthIssue: "",
        healthIssue_father: "",
        healthIssue_mother: "",
      };
    }
    default:
      return state;
  }
};

const groupQueryState = {
  coverAmount: "",
  organizationName: "",
  numberofEmployees: "",
};

export const groupLifeQueryReducer = (state = groupQueryState, action) => {
  switch (action.type) {
    case GROUP_LIFE_QUERY_FIELD_CHANGE: {
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    }
    default:
      return state;
  }
};
