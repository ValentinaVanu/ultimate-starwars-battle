import styled from 'styled-components'
import { Card } from 'reactstrap'


export const StyledTitle = styled.div`
  /* opacity: 0.8; */
  margin-bottom: 1rem;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  color: #000;
  text-shadow: 2px 2px 5px red;

`

export const StyledCard = styled(Card)`
  color: #135175;
`

export const StyledCardWrapper = styled.div`
  grid-row: 1/-1;
  grid-column: 1/-1;
  margin: 1rem;

  @media only screen and (min-width: 768px) {
    grid-row: 3/7;
    grid-column: 3/7
  }
  @media only screen and (min-width: 992px) {
    grid-row: 2/10;
    grid-column: 2/5;
  }
`
export const StyledWinnerCard = styled(Card)`
  color: red;
  box-shadow: 5px 5px 23px 6px rgba(155,14,14,0.69);
  text-shadow: 2px 2px 5px red;
`

export const StyledFightWrapper = styled.div`
  justify-items: center;
  height: 100%;
  grid-column: 1/-1;
  grid-row: 1/-1;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(8, 1fr);
  }
  @media only screen and (min-width: 992px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 260px));
    grid-template-rows: repeat(12, 1fr);
  }
`
