import * as constant from './card.constant'


export const initialState = {
  people: {list: [], isLoading: false},
  starships: {list: [], isLoading: false},
  fighter: {},
  starship: {},
}

export const cardReducer = ( state = initialState, action ) => {
  switch (action.type){
    case constant.SET_STARSHIPS:
      return {
        ...state,
        starship: {
          first: action.first,
          second: action.second,
          }
      }
    case constant.SET_FIGHTER:
      return {
        ...state,
        fighter: {
          first: action.first,
          second: action.second,
        }
      }
    case constant.FETCH_OPPONENT:
      return {
        ...state,
        [action.who]: {
          list: [],
          isLoading: true,
        },
      }
    case constant.SET_OPPONENT:
      return {
        ...state,
        [action.who]: {
          list: action.list,
          isLoading: false,
        },
      }
    default:
      return state
  }
}
