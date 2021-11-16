import { TRAVEL_FIELD_CHANGE } from "../constants/travel.constant";

const queryState = {
  typeofTravel: "", // sigle or group
  amountofTravelers: "",
  destination: "Local", // local or international,
  location: "",
  transport: "Car",
  tripSrartDate: "",
  tripEndDate: "",
  tripDuration: "",
  fullName: "",
  email: "",
  phone: "",
  gender: "",
  age: "",
  maritalStatus: "",
};

export const travelQueryReducer = (state = queryState, action) => {
  switch (action.type) {
    case TRAVEL_FIELD_CHANGE: {
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    }
    default:
      return state;
  }
};
