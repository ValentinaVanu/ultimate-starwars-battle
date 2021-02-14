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
  width: 100%;
  font-weight: 600;
  text-align: center;
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
  display: grid;
  margin: 1rem;
  max-width: 1280px;
  grid-template-columns: repeat(auto-fill, minmax(186px, 1fr)) ; grid-template-rows: auto;
  grid-gap: 10px;

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(8, 1fr);
  }
  @media only screen and (min-width: 992px) {
    grid-template-rows: repeat(12, 1fr);
    grid-template-columns: repeat(auto-fill, minmax(150px, 260px));
  }

`

