import { initialState, introReducer } from '../store/intro.reducer'
import * as constant from '../store/intro.constant'

const newState = {
  skipIntro: true,
  muted: false,
}

describe("Test the intro reducer", () => {
  it("should handle SKIP_INTRO", () => {
    expect(introReducer(initialState, {
      type: constant.SKIP_INTRO,
      skipIntro: newState.skipIntro
    })).toEqual({
      muted: true,
      skipIntro: true
    })
  })
  it("should handle SET_MUTED", () => {
    expect(introReducer(initialState, {
      type: constant.SET_MUTED,
      muted: newState.muted
    })).toEqual({
      skipIntro: false,
      muted: false
    })
  })
})
