import * as constant from './menu.constant'

export const setOpponentsToFightAction = opponents => ({
  type: constant.SET_OPPONENTS_TO_FIGHT,
  ...opponents
})

export const displayNewOpponentsAction = displayOpponents => ({
  type: constant.DISPLAY_NEW_OPPONENTS,
  displayOpponents
})
