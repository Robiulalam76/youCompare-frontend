import { SEARCHER_FIELD_CHANGE } from "../constants/searcher.constant";

const searcher = {
  fullName: "",
  email: "",
  phone: "",
};

export const searcherReducer = (state = searcher, action) => {
  switch (action.type) {
    case SEARCHER_FIELD_CHANGE:
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    default:
      return state;
  }
};
