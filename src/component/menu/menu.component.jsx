import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { navigate, Link } from '@reach/router'

import * as SM from './menu.style'
// import { CardMenu } from '../card-menu'
// import { Intro } from '../intro';
import { displayNewOpponentsAction, setOpponentsToFightAction } from '../../store/menu.action'

const Menu = () => {
  const dispatch = useDispatch();
  const [ people, starships ] = useSelector(({ card }) => ([
    card.people,
    card.starships,
  ]))



  const pickOpponents = () => {
    let first, second
    const a = Math.round(Math.random())
    const b = Math.round(Math.random())
    if ( a === b && a === 0) {
      const randomList = people.list.sort(() => Math.random() - 0.5)
      first = randomList[0]
      second = randomList[1]
    } else if ( a === b && a === 1) {
      const randomList = starships.list.sort(() => Math.random() - 0.5)
      first = randomList[0]
      second = randomList[1]
    } else {
      const randomPeopleList = people.list.sort(() => Math.random() - 0.5)
      const randomPStarshipList = starships.list.sort(() => Math.random() - 0.5)
      if ( a === 0){
        first = randomPeopleList[0]
        second = randomPStarshipList[0]
      } else {
        second = randomPeopleList[0]
        first = randomPStarshipList[0]
      }
    }
    console.log(first, second, "you there?")
    return dispatch(setOpponentsToFightAction({first, second}))
  }

  const handlePickedOpponents = () => {
    pickOpponents()
    dispatch(displayNewOpponentsAction(true))
    navigate('/fight')
  }

  return (
    <SM.StyledMenuWrapper>
      <SM.StyledMenuButton
        onClick={handlePickedOpponents}
      >Pick Opponents
      </SM.StyledMenuButton>
      {/* <Link
        to="/fight">
        Fight
        </Link> */}
      <SM.StyledLink
        to="/card-menu">
        Card Menu
      </SM.StyledLink>
      <SM.StyledLink
        to="/">
        Back to Intro
      </SM.StyledLink>
    </SM.StyledMenuWrapper>
  )
}

export { Menu }
