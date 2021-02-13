import * as constant from './menu.constant'

export const initialState = {
  displayOpponents: false,
  opponents: {},
}

export const menuReducer = ( state = initialState, action) => {
  switch (action.type) {
    case constant.SET_OPPONENTS_TO_FIGHT:
      return {
        ...state,
        opponents: {
          first: action.first,
          second: action.second,
        }
      }
    case constant.DISPLAY_NEW_OPPONENTS:
      return {
        ...state,
        displayOpponents: action.displayOpponents
      }
    default:
      return state
  }
}
