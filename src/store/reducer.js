import { combineReducers } from 'redux'
import { cardReducer } from './card.reducer'
import { introReducer } from './intro.reducer'

const createReducer = asyncReducers => combineReducers({
    intro: introReducer,
    card: cardReducer,
  ...asyncReducers
})

export default createReducer
