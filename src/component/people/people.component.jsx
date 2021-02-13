import React, { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import peopleImg from './people.jpg'
import { CardImg, CardSubtitle } from 'reactstrap'

import * as AP from '../../store/card.action'
import * as SR from '../reusable/reusable.style'
import * as SP from './pleople.style'


const People = () => {
  const dispatch = useDispatch()
  const [ people, firstFighter, secondFighter ] = useSelector(({ card }) => ([
    card.people,
    card.fighter.first,
    card.fighter.second,
  ]))

  
  const getWinner = () => {
    // If you are reading this, here are two ways to convert strings to numbers
    const firstFighterMass = +firstFighter.mass
    const secondFighterMass = parseInt(secondFighter.mass)
    if ( firstFighterMass > secondFighterMass) {
      return `${firstFighter.name} is a Winner !`
    } else {
      return `${secondFighter.name} is a Winner!`
    }
  }


  const pickFighters = () => {
    const [first, second] = people.list.sort(() => Math.random() - 0.5)
    dispatch(AP.setFighterAction(firstFighter ? {} : {first, second}))
  }

  return (
    <SP.StyledPeopleCard>
    <CardImg top alt="people img" src={peopleImg}/>
    <SR.StyledCardHeader>
      {firstFighter && <SR.StyledcardTitle tag="h5">
        {/* Humans */}
        {getWinner(firstFighter)}
      </SR.StyledcardTitle>}
      {!firstFighter && <SR.StyledcardTitle tag="h5">
        Humans
      </SR.StyledcardTitle>}
      <SR.StyledCardBtn
        onClick={pickFighters}
      >Shuffle Fighters</SR.StyledCardBtn>
    </SR.StyledCardHeader>
    <SR.StyledCardBody>
      {firstFighter && 
      <>
        <CardSubtitle
          tag="h6"
          className="mb-2
          text-muted"
        >
          {firstFighter.name}
        </CardSubtitle>
        <SR.StyledcardDescription
          tag="h6"
          className="mb-2 text-muted"
        >
          {firstFighter.mass}
        </SR.StyledcardDescription>
        <CardSubtitle
          tag="h6"
          className="mb-2
          text-muted"
        >
          {secondFighter.name}
        </CardSubtitle>
        <SR.StyledcardDescription
          tag="h6"
          className="mb-2 text-muted"
        >
          {secondFighter.mass}
        </SR.StyledcardDescription>
      </>
      }
      {!firstFighter && people.list.map(({ name, mass }) => (
        <Fragment key={name}>
            <CardSubtitle
              tag="h6"
              className="mb-2
              text-muted"
              >
                {name}
            </CardSubtitle>
            <SR.StyledcardDescription
              tag="h6"
              className="mb-2 text-muted"
              >
                {mass}
            </SR.StyledcardDescription>
          </Fragment>
          ))}
    </SR.StyledCardBody>
  </SP.StyledPeopleCard>
  )
}

export { People }
