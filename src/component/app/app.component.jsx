import React from 'react'
import { useSelector } from 'react-redux'
import { Intro } from '../intro'
// import store from '../../store'
import { CardMenu } from '../card-menu'
import { StyledAppWrapper, StyledRouter } from './app.styled'
import { Fight } from '../fight'

const App = () => {

  const skipIntro = useSelector(({ intro }) => intro.skipIntro)

  return (
    <StyledAppWrapper>
      <StyledRouter>
        <Intro path="/"/>
        <CardMenu path="card-menu"/>
        <Fight path="fight"/>
      </StyledRouter>
    </StyledAppWrapper>
  )
}

export { App }
