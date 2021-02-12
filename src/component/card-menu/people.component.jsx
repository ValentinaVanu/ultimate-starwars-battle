import React, { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Button } from 'react-bootstrap'
import peopleImg from './img/people.jpg'
import { CardImg, CardSubtitle } from 'reactstrap'

import * as AP from '../../store/card.action'
import * as SP from './card-menu.style'

const People = () => {
  const dispatch = useDispatch()
  const [ people, firstFighter, secondFighter ] = useSelector(({ card }) => ([
    card.people,
    card.fighter.first,
    card.fighter.second,
  ]))


  const pickFighters = () => {
    const [first, second] = people.list.sort(() => Math.random() - 0.5)
    dispatch(AP.setFighterAction(firstFighter ? {} : {first, second}))
  }
    console.log(firstFighter)

  return (
    <SP.StyledCard>
    <CardImg top height="160px" alt="people img" src={peopleImg}/>
    <SP.StyledcardTitle tag="h5">
      Humans
      <Button
        onClick={pickFighters}
      >Shuffle Fighters</Button>
    </SP.StyledcardTitle>
    <SP.StyledCardBody>
      {firstFighter && 
      <>
        <CardSubtitle
          tag="h6"
          className="mb-2
          text-muted"
        >
          {firstFighter.name}
        </CardSubtitle>
        <SP.StyledcardDescription
          tag="h6"
          className="mb-2 text-muted"
        >
          {firstFighter.mass}
        </SP.StyledcardDescription>
        <CardSubtitle
          tag="h6"
          className="mb-2
          text-muted"
        >
          {secondFighter.name}
        </CardSubtitle>
        <SP.StyledcardDescription
          tag="h6"
          className="mb-2 text-muted"
        >
          {secondFighter.mass}
        </SP.StyledcardDescription>
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
            <SP.StyledcardDescription
              tag="h6"
              className="mb-2 text-muted"
              >
                {mass}
            </SP.StyledcardDescription>
          </Fragment>
          ))}
    </SP.StyledCardBody>
  </SP.StyledCard>
  )
}

export { People }
