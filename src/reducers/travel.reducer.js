const queryState = {
  typeofTravel: "", // sigle or group
  amountofTravelers: "",
  destination: "", // local or international,
  location: "",
  tripSrartDate: "",
  tripEndDate: "",
  tripDuration: "",
  fullName: "",
  email: "",
  phone: "",
  gender: "",
  age: "",
  maritalStatus: "",
}

export const travelQueryReducer = (state = queryState, action) => {
  switch (action.type) {
    case 'TRAVEL_FIELD_CHANGE': {
      return {
        ...state,
        [action.payload.field]: action.payload.field
      }
    }
    default:
      return state
  }
}