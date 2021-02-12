import React, { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import starshipsImg from './img/starships.webp'
import { CardImg, CardSubtitle } from 'reactstrap'
import { Button } from 'react-bootstrap'

import * as AP from '../../store/card.action'
import * as SP from './card-menu.style'

const Starship = () => {
  const dispatch = useDispatch()
  const [starships, firstStarship, secondStarship] = useSelector(({ card }) => ([
    card.starships,
    card.starship.first,
    card.starship.second,
  ]))

  const pickStarships = () => {
    const [first, second] = starships.list.sort(() => Math.random() - 0.5)
    dispatch(AP.setStarshipAction(firstStarship ? {} : {first, second}))
    }

  console.log(firstStarship)

  return (
    <SP.StyledCard>
      <CardImg top alt="starships img" src={starshipsImg}/>
      <SP.StyledcardTitle tag="h5">
        Starships
        <Button
          onClick={pickStarships}
        >Shuffle StarShip</Button>
      </SP.StyledcardTitle>
      <SP.StyledCardBody>
        {firstStarship && 
        <>
        <CardSubtitle
          tag="h6"
          className="mb-2
          text-muted"
        >
          {firstStarship.name}
        </CardSubtitle>
        <SP.StyledcardDescription
          tag="h6"
          className="mb-2 text-muted"
        >
          {firstStarship.crew}
        </SP.StyledcardDescription>
        <CardSubtitle
          tag="h6"
          className="mb-2
          text-muted"
        >
          {secondStarship.name}
        </CardSubtitle>
        <SP.StyledcardDescription
          tag="h6"
          className="mb-2 text-muted"
        >
          {secondStarship.crew}
        </SP.StyledcardDescription>
      </>
      }
      {!firstStarship && starships.list.map(({ name, crew }) => (
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
                {crew}
            </SP.StyledcardDescription>
          </Fragment>
          ))}
    </SP.StyledCardBody>
  </SP.StyledCard>
  )
}

export { Starship }
