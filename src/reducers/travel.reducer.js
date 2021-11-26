import { nanoid } from "nanoid";
import {
  DELETE_TRAVELLER,
  TRAVEL_FIELD_CHANGE,
  UPDATE_TRAVELLERS,
} from "../constants/travel.constant";

const queryState = {
  typeofTravel: "", // sigle or group
  destination: "Local", // local or international,
  location: "",
  transport: "",
  tripStartDate: "",
  tripEndDate: "",
  tripDuration: "",
  travellerStatus: "One",
  totalTravellers: 1,
  travellers: [{ id: nanoid(10), age: "", gender: "", preCondition: "" }],
};

export const travelQueryReducer = (state = queryState, action) => {
  switch (action.type) {
    case TRAVEL_FIELD_CHANGE:
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    case UPDATE_TRAVELLERS:
      return {
        ...state,
        travellers: [
          ...state.travellers.map((elem) => {
            if (elem.id == action.payload.id)
              return { ...elem, [action.payload.field]: action.payload.value };
            return elem;
          }),
        ],
      };
    case DELETE_TRAVELLER:
      return {
        ...state,
        travellers: [
          ...state.travellers.filter((t) => t.id !== action.payload.id),
        ],
      };
    default:
      return state;
  }
};
