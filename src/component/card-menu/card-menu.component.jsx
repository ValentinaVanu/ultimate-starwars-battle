import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { CardImg, CardSubtitle } from 'reactstrap'
// import peopleImg from './img/people.jpg'
import starshipsImg from './img/starships.webp'

import * as AC from '../../store/card.action'
import * as SC from './card-menu.style'
import { People } from './people.component'
import { Starship } from './starship.component'
// import { StyledButton } from '../intro/intro.styled'

const CardMenu = () => {
  const dispatch = useDispatch()

  useEffect(
    () => {
      dispatch(AC.getOpponentListAction())
    },
    []
  )
  return (
    <SC.StyledCardWrapper>
      <People/>
      <Starship/>
    </SC.StyledCardWrapper>
  )
}

export { CardMenu }
