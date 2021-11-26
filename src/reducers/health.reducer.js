import { HEALTH_QUERY_FIELD_CHANGE } from "../constants/health.constant"

const queryState = {
  insuranceType: "",
  coverFor: "",
  organizationName: "",
}

export const healthQueryReducer = (state = queryState, action) => {
  switch (action.type) {
    case HEALTH_QUERY_FIELD_CHANGE: {
      return {
        ...state,
        [action.payload.field]: action.payload.value
      }
    }
    default:
      return state
  }
}