import React from 'react'
import { Provider, useSelector } from 'react-redux'
import { Intro } from '../intro'
// import store from '../../store'
import { CardMenu } from '../card-menu'

const App = () => {

  const skipIntro = useSelector(({ intro }) => intro.skipIntro)

  return (
    <>
      {!skipIntro && <Intro />}
      {skipIntro && <CardMenu/>}
    </>
  )
}

export { App }
