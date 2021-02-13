import styled from 'styled-components'
import battleBg from './img/battle.jpg'
import { Card, CardBody, CardSubtitle, CardTitle } from 'reactstrap'





export const StyledCardBody = styled.div`
  margin-top: 20px;
  /* position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center; */
`

export const StyledCard = styled(Card)`
  width: 100%;
  font-weight: 600;
  text-align: center;
  color: #135175;
  background-color: rgba(255,255,255,0.85);
  position: relative;

  @media only screen and (min-width: 768px) {
    /* width: 100px;
    height: 100px; */
    /* grid-row: 1/-1; */
  }
  @media only screen and (min-width: 992px) {
    /* width: 110px;
    height: 110px; */
  }
`

export const StyledCardWrapper = styled.div`
  height: 100%;
  display: grid;
  margin: 1rem auto;
  max-width: 1080px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 10px;

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(8, 1fr);
  }
  @media only screen and (min-width: 992px) {
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(5, 1fr);
  }
/* 
  &::before {
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.75;
  } */
`

