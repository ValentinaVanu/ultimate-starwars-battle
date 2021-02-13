import styled from 'styled-components'
import { Card, CardBody, CardSubtitle, CardTitle } from 'reactstrap'

export const StyledWarshipCard = styled(Card)`
  grid-column: 1/-1;
  grid-row: 3/4;

  @media only screen and (min-width: 768px) {
    grid-column: 3/-1;
    grid-row: 1/auto;
  }
  @media only screen and (min-width: 992px) {
    grid-column: 3/-1;
    grid-row: 1/auto;
  }
`
