import * as constant from './intro.constant'

export const skipIntroAction = skipIntro => ({
  type: constant.SKIP_INTRO,
  skipIntro
})

export const setMutedAction = muted => ({
  type: constant.SET_MUTED,
  muted
})
