const queryState = {

}

export const healthQueryReducer = (state = queryState, action) => {
  switch (action.type) {
    case "HEALTH_FIELD_CHANGE": {
      return {
        ...state,
        [action.payload.field]: action.payload.value
      }
    }
    default:
      return state
  }
}