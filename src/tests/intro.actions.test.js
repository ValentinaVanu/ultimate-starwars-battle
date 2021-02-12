import * as action from '../store/intro.action'
import * as constant from '../store/intro.constant'

const skipIntro = true
const muted = true

describe("testing all the intro actions", () => {
  it("should skip the intro component action", () => {
    expect(action.skipIntroAction(skipIntro)).toEqual({
      type: constant.SKIP_INTRO,
      skipIntro
    })
  })
  it("should create an action that mutes music", () => {
    expect(action.setMutedAction(muted)).toEqual({
      type: constant.SET_MUTED,
      muted
    })
  })
})
