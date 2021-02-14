import React from 'react'
import { Starship } from '../starship/starship.component'
import { People } from '../people/people.component'

import * as SFV from './fight-first-version.style'

const FirstVersion = () => {
  return (
    <SFV.StyledFightWrapper>
      <h1>First Version of fight</h1>
      <People />
      <Starship />
    </SFV.StyledFightWrapper>
  )
}

export { FirstVersion }
