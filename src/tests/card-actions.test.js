import * as constant from '../store/card.constant'
import * as action from '../store/card.action'

const fighter = {
  first: "first",
  second: "second",
}
const starship = {
  first: "first",
  second: "second",
}
const opponent = {
  who: "who",
  list: "list",
}
describe("Testing all the card actions", () => {
  it("should create an action to set fighter", () => {
    expect(action.setFighterAction(fighter)).toEqual({
      type: constant.SET_FIGHTER,
      ...fighter
    })
  })
  it("should create an action to set starship", () => {
    expect(action.setStarshipAction(starship)).toEqual({
      type: constant.SET_STARSHIPS,
      ...starship
    })
  })
  it("should create an action to set a list of people and starships", () => {
    expect(action.setOpponentListAction(opponent.who, opponent.list)).toEqual({
      type: constant.SET_OPPONENT,
      who: opponent.who,
      list: opponent.list
    })
  })
})
