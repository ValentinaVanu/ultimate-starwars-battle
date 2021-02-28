import styled from 'styled-components'
import { Card } from 'reactstrap'


export const StyledLoading = styled.span`
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  opacity: 0.7;
`

export const StyledCardBody = styled.div`
  margin-top: 20px;
`

export const StyledCard = styled(Card)`
  font-weight: 600;
  text-align: center;
  margin: 2rem;
  color: #135175;
  background-color: rgba(255,255,255,0.85);
  position: relative;

  @media only screen and (min-width: 768px) {
    /*  */
  }
  @media only screen and (min-width: 992px) {
    width: 150px;
    height: 120px;
  }

`

export const StyledCardWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`
