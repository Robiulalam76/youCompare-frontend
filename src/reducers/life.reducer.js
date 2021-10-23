const queryState = {

}

export const lifeQueryReducer = (state = queryState, action) => {
  switch (action.type) {
    case "LIFE_FIELD_CHANGE": {
      return {
        ...state,
        [action.payload.field]: action.payload.value
      }
    }
    default:
      return state
  }
}