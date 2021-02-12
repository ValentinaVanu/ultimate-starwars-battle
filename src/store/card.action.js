import * as constant from './card.constant'
import get from 'axios'


export const setFighterAction = fighter => ({
  type: constant.SET_FIGHTER,
  ...fighter
})

export const setStarshipAction = starship => ({
  type: constant.SET_STARSHIPS,
  ...starship
})

export const setOpponentListAction = (who, list) => ({
  type: constant.SET_OPPONENT,
  who,
  list
})
export const getOpponentListAction = () =>
{
  return dispatch => {
    // ['people', 'starships'].forEach(who => dispatch({type: constant.FETCH_OPPONENT, who}))
    try {
      const getResult = async(who) => {
        dispatch({type: constant.FETCH_OPPONENT, who})
        const result = await get(`https://swapi.dev/api/${who}/`)
        dispatch(setOpponentListAction(who, result.data.results))
        console.log(result)
      }
      ['people', 'starships'].forEach(getResult)
    } catch (error) {
      console.log('Error:', error)
    }
  }
}
