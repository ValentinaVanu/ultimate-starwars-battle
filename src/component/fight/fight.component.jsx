import { Menu } from '../menu'
import React from 'react'
import { useSelector } from 'react-redux'
import { CardTitle } from 'reactstrap'

import * as SR from '../reusable/reusable.style'

const Fight = () => {
  const [firstOpponent, secondOpponent] = useSelector(({ menu }) => [
    menu.opponents.first,
    menu.opponents.second,
  ])


  const getWinner = () => {
    let winner;
    if (firstOpponent.mass && secondOpponent.mass) {
      if (parseInt(firstOpponent.mass) > parseInt(secondOpponent.mass)) {
        winner = firstOpponent.name
      } else {
        winner = secondOpponent.name
      }
    }
    else if (firstOpponent.mass && secondOpponent.crew) {
      if (parseInt(firstOpponent.mass) > parseInt(secondOpponent.crew)) {
        winner = firstOpponent.name
      } else {
        winner = secondOpponent.name
      }
    }
    else if (firstOpponent.crew && secondOpponent.mass) {
      if (parseInt(firstOpponent.crew) > parseInt(secondOpponent.mass)) {
        winner = firstOpponent.name
      } else {
        winner = secondOpponent.name
      }
    }
    else if (firstOpponent.crew && secondOpponent.crew) {
      if (parseInt(firstOpponent.crew) > parseInt(secondOpponent.crew)) {
        winner = firstOpponent.name
      } else {
        winner = secondOpponent.name
      }
    }
    else {
      return 'Tie Match'
    }
    return winner
  }


  return (
    <>
      {!firstOpponent && <h1>You have to pick a fight first</h1>}
      {firstOpponent && <div>
        <h1>Fight</h1>
        <SR.StyledCard>
          <SR.StyledCardBody>
            <CardTitle
              tag="h6">{firstOpponent.name}</CardTitle>
          </SR.StyledCardBody>
        </SR.StyledCard>
        <SR.StyledCard>
          <SR.StyledCardBody>
            <CardTitle
              tag="h6">{secondOpponent.name}</CardTitle>
          </SR.StyledCardBody>
        </SR.StyledCard>
        <SR.StyledCard>
          {/* <CardImg src={starshipsImg} /> */}
          <SR.StyledCardBody>
            <CardTitle
              tag="h6">{getWinner()}</CardTitle>
          </SR.StyledCardBody>
        </SR.StyledCard>
      </div>}
      <Menu />
    </>
  )
}

export { Fight }
