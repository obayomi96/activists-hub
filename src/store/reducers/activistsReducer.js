import {
  FETCH_ACTIVISTS,
  CREATE_ACTIVIST
} from '../actions/actionTypes'

export const initialState = {
  activists: [],
  singleActivist: {},
}

export const activistsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ACTIVISTS:
      return {
        ...state,
        activists: action.payload,
      }
    case CREATE_ACTIVIST:
      return {
        ...state,
        singleActivist: action.payload,
      }
    default:
      return state
  }
}
