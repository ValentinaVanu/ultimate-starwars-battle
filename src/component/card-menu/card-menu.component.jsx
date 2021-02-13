import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'


import * as AC from '../../store/card.action'
import * as SC from './card-menu.style'
import { CardTitle, CardImg } from 'reactstrap'
import peopleImg from '../people/people.jpg'
import starshipsImg from '../starship/starships.webp'
import { Menu } from '../menu/menu.component'


const CardMenu = () => {
  const dispatch = useDispatch()
  const [ people, starships, displayOpponents ] = useSelector(({ card, menu }) => ([
    card.people,
    card.starships,
    menu.displayOpponents,
  ]))
  useEffect(
    () => {
      dispatch(AC.getOpponentListAction())
    },
    []
  )


  return (
    <>
      <SC.StyledCardWrapper>
        {people && people.list.map(({ name, mass}, key) => {
          return (
            <SC.StyledCard key={key}>
              <CardImg src={peopleImg} />
              <SC.StyledCardBody>
                <CardTitle
                  tag="h6">{name}</CardTitle>
              </SC.StyledCardBody>
            </SC.StyledCard>
          )
        })
        }
        {people && people.list.map(({ name, crew}, key) => {
          return (
            <SC.StyledCard key={key}>
              <CardImg src={starshipsImg} />
              <SC.StyledCardBody>
                <CardTitle
                  tag="h6">{name}</CardTitle>
              </SC.StyledCardBody>
            </SC.StyledCard>
          )
        })
        }
        {starships.isLoading && <h1>Loading...</h1>}
        {/* <People/>
        <Starship/> */}
      </SC.StyledCardWrapper>
      <Menu />
    </>
  )
}

export { CardMenu }
