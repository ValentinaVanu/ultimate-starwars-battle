import { initialState, cardReducer } from '../store/card.reducer'
import * as constant from '../store/card.constant'

const starship = {
  first: "first",
  second: "second"
}
const fighter = {
  first: "first",
  second: "second"
}

const fetchMock = {
  who: "who",
  list: [],
  isLoading: true
}
const setMock = {
  who: "who",
  list: [1, 2, 3],
  isLoading: false
}

describe("Card reducer", () => {
  it("should handle SET_STARSHIPS", () => {
    expect(cardReducer(initialState, {
      type: constant.SET_STARSHIPS,
      ...starship,
    })).toEqual({
      ...initialState,
      starship
    })
  })
  it("should handle SET_FIGHTER", () => {
    expect(cardReducer(initialState, {
      type: constant.SET_FIGHTER,
      ...fighter,
    })).toEqual({
      ...initialState,
      fighter
    })
  })
  it("should handle FETCH_OPPONENT", () => {
    expect(cardReducer(initialState, {
      type: constant.FETCH_OPPONENT,
      who: fetchMock.who,
      list: fetchMock.list
    })).toEqual({
      ...initialState,
      ["who"]: {
        list: [],
        isLoading: true,
      }
    })
  })
  it("should handle SET_OPPONENT", () => {
    expect(cardReducer(initialState, {
      type: constant.SET_OPPONENT,
      who: setMock.who,
      list: setMock.list
    })).toEqual({
      ...initialState,
      ["who"]: {
        list: [1, 2, 3],
        isLoading: false,
      }
    })
  })
})
