import React, { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import starshipsImg from './starships.webp'
import { CardImg, CardSubtitle } from 'reactstrap'

import * as AP from '../../store/card.action'
import * as SR from '../reusable/reusable.style'
import * as SS from './starship.style'

const Starship = () => {
  const dispatch = useDispatch()
  const [starships, firstStarship, secondStarship] = useSelector(({ card }) => ([
    card.starships,
    card.starship.first,
    card.starship.second,
  ]))

  const getWinner = () => {
    // If you are reading this, here are two ways to convert strings to numbers
    const firstStarshipCre = +firstStarship.crew
    const secondStarshipCrew = parseInt(secondStarship.crew)
    if ( firstStarshipCre > secondStarshipCrew) {
      return `${firstStarship.name} is a Winner !`
    } else {
      return `${secondStarship.name} is a Winner!`
    }
  }


  const pickStarships = () => {
    const [first, second] = starships.list.sort(() => Math.random() - 0.5)
    dispatch(AP.setStarshipAction(firstStarship ? {} : {first, second}))
    }

  // console.log(firstStarship)

  return (
    <SS.StyledWarshipCard>
      <CardImg top alt="starships img" src={starshipsImg}/>
      <SR.StyledCardHeader>
      {!firstStarship && <SR.StyledcardTitle tag="h5">
        Starships
      </SR.StyledcardTitle>}
      {firstStarship && <SR.StyledcardTitle tag="h5">
        {getWinner(firstStarship)}
      </SR.StyledcardTitle>}
      <SR.StyledCardBtn
        onClick={pickStarships}
      >Shuffle Starships</SR.StyledCardBtn>
    </SR.StyledCardHeader>
      <SR.StyledCardBody>
        {firstStarship && 
        <>
        <CardSubtitle
          tag="h6"
          className="mb-2
          text-muted"
        >
          {firstStarship.name}
        </CardSubtitle>
        <SR.StyledcardDescription
          tag="h6"
          className="mb-2 text-muted"
        >
          {firstStarship.crew}
        </SR.StyledcardDescription>
        <CardSubtitle
          tag="h6"
          className="mb-2
          text-muted"
        >
          {secondStarship.name}
        </CardSubtitle>
        <SR.StyledcardDescription
          tag="h6"
          className="mb-2 text-muted"
        >
          {secondStarship.crew}
        </SR.StyledcardDescription>
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
            <SR.StyledcardDescription
              tag="h6"
              className="mb-2 text-muted"
              >
                {crew}
            </SR.StyledcardDescription>
          </Fragment>
          ))}
    </SR.StyledCardBody>
  </SS.StyledWarshipCard>
  )
}

export { Starship }
