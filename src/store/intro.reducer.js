import * as constant from './intro.constant'

const initialState = {
  skipIntro: false,
  muted: true,
}

export const introReducer = (state = initialState, action) => {
  switch (action.type) {
    case constant.SET_MUTED:
      return {
        ...state,
        muted: action.muted
      }
    case constant.SKIP_INTRO:
      return {
        ...state,
        skipIntro: action.skipIntro
      }
    default:
      return state
  }
}
