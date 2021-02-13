import styled from 'styled-components'
import { Button } from 'react-bootstrap'
import { Link } from '@reach/router'


export const StyledMenuButton = styled(Button)`
  z-index: 1;
`
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  background-color: #007bff;
  padding: 10px;
  padding-top: 7px;
  border-radius: 4px;

  &:hover {
    text-decoration: none;
    color: #fff;
    background-color: #0069d9;
  }
`

export const StyledMenuWrapper = styled.div`
  left: 502.2px;
  bottom: 100px;
  position: absolute;
`
