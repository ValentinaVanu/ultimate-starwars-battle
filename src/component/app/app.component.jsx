import React from 'react'
import { useSelector } from 'react-redux'
import { Intro } from '../intro'
// import store from '../../store'
import { CardMenu } from '../card-menu'
import { StyledAppWrapper, StyledRouter } from './app.styled'
import { Fight } from '../fight'
import { FirstVersion } from '../fight-first-version'

const App = () => {

  const skipIntro = useSelector(({ intro }) => intro.skipIntro)
  const { port } = window.location

  return (
    <StyledAppWrapper>
      <StyledRouter>
        <Intro path="/" />
        <CardMenu path="/card-menu/" />
        <Fight path="/fight" />
        <FirstVersion path="/fight-first-version" />

        <Intro path="/gh-pages-url" />
        <CardMenu path="/gh-pages-url/card-menu/" />
        <Fight path="/gh-pages-url/fight" />
        <FirstVersion path="/gh-pages-url/fight-first-version" />
      </StyledRouter>
    </StyledAppWrapper>
  )
}

export { App }
