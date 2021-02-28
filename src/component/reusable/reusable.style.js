import styled from 'styled-components'
import { Card, CardBody, CardSubtitle, CardTitle } from 'reactstrap'
import { Button } from 'react-bootstrap'

export const StyledCardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 8px;
  padding-bottom: 12px;
  border-bottom: 1px solid #135175;
`

export const StyledCardBtn = styled(Button)`
  background-color: #fff;
  color: #135175;
  border-color: #135175;
  margin-left: 20px;

  &:hover {
    background-color: rgba(203,203,203,0.38);
    color: #1A6FA1;
    border-color: #135175;
  }
`

export const StyledCardSubtitle = styled(CardSubtitle)`
 justify-self: center;
`

export const StyledCardBody = styled(CardBody)`
  /* display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5px;
  justify-items: start;
  overflow-x: auto; */
`

export const StyledcardDescription = styled(CardSubtitle)`
  justify-self: end;
`
export const StyledcardTitle = styled(CardTitle)`
  /* text-align: center; */
  /* display: flex; */
  margin: 5px;
  padding-left: 16px;
`


export const StyledCard = styled(Card)`
  width: 400px;
  height: 40%;
`
