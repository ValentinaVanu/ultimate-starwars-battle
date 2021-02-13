import React from 'react'
import { Provider, useSelector } from 'react-redux'
import { Intro } from '../intro'
// import store from '../../store'
import { CardMenu } from '../card-menu'
import { StyledAppWrapper } from './app.styled'
import { Router } from '@reach/router'
import { Fight } from '../fight'

const App = () => {

  const skipIntro = useSelector(({ intro }) => intro.skipIntro)

  return (
    <StyledAppWrapper>
      <Router>
        <Intro path="/"/>
        <CardMenu path="card-menu"/>
        <Fight path="fight"/>
      </Router>
    </StyledAppWrapper>
  )
}

export { App }
