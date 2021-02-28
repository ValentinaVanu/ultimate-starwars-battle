import styled from 'styled-components'
import { Button } from 'react-bootstrap'
import { Link } from '@reach/router'


export const StyledMenuButton = styled(Button)`
  z-index: 1;
  white-space: nowrap;
`
export const StyledLink = styled(Link)`
  text-decoration: none;
  white-space: nowrap;
  color: #fff;

  &:hover {
    text-decoration: none;
    color: #fff;
  }
`

export const StyledMenuWrapper = styled.div`
  position: fixed;
  margin: 0;
  bottom: 0;
  left: auto;
  right: auto;
`
