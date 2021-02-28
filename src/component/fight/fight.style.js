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

`
export const StyledWinnerCard = styled(Card)`
  color: red;
  box-shadow: 5px 5px 23px 6px rgba(155,14,14,0.69);
  text-shadow: 2px 2px 5px red;
`

export const StyledFightWrapper = styled.div`
  justify-items: center;
  height: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
  align-self: center;
  justify-content: center;
  `
