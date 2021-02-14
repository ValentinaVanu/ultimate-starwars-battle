import React from 'react'
import { Starship } from '../starship/starship.component'
import { People } from '../people/people.component'

import * as SFV from './fight-first-version.style'
import { Menu } from '../menu'

const FirstVersion = () => {
  return (
    <SFV.StyledFightWrapper>
      <People />
      <Starship />
      <Menu />
    </SFV.StyledFightWrapper>
  )
}

export { FirstVersion }
