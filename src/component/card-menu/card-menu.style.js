import { Card, CardBody, CardSubtitle, CardTitle } from 'reactstrap'
import styled from 'styled-components'
import battleBg from './img/battle.jpg'


export const StyledCardSubtitle = styled(CardSubtitle)`
 justify-self: center;
`

export const StyledCardBody = styled(CardBody)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5px;
  justify-items: start;
  overflow-x: auto;
`

export const StyledcardDescription = styled(CardSubtitle)`
  justify-self: end;
`
export const StyledcardTitle = styled(CardTitle)`
  text-align: center;
  margin: 5px;
`

export const StyledCard = styled(Card)`
  width: 400px;
  height: 40%;
`

export const StyledCardWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  
  ::before {
    content: "";
    background-image: url(${battleBg});
    background-size: cover;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.75;
  }
`
