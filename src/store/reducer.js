import { combineReducers } from 'redux'
import { cardReducer } from './card.reducer'
import { introReducer } from './intro.reducer'
import { menuReducer } from './menu.reducer'

const createReducer = asyncReducers => combineReducers({
    intro: introReducer,
    card: cardReducer,
    menu: menuReducer,
  ...asyncReducers
})

export default createReducer
