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
  grid-column: 1/-1;
  grid-row: 4/-1;
  justify-self: center;
  align-self: end;

  @media only screen and (min-width: 768px) {
    grid-column: 3/7;
    grid-row: 3/7;
  }
  @media only screen and (min-width: 992px) {
    grid-row: 12/-1;
    grid-column: 1/6;
    margin-bottom: 1rem;
  }

`
