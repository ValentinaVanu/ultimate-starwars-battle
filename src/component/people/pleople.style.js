import styled from 'styled-components'
import { Card, CardBody, CardSubtitle, CardTitle } from 'reactstrap'


export const StyledPeopleCard = styled(Card)`
  grid-column: 1/-1;
  grid-row: 1/2;

  @media only screen and (min-width: 768px) {
    grid-column: 1/3;
    grid-row: 1/auto;
  }
  @media only screen and (min-width: 992px) {
    grid-column: 1/3;
    grid-row: 1/auto;
  }
`
