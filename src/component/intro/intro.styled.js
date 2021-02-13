import { Button } from 'react-bootstrap'
import styled from 'styled-components'
import deathStar from './img/deathstar.jpg'
import { Link } from '@reach/router'


export const StyledLink = styled(Link)`
  && {
    background-color: #000;
    border: 1px solid #cbcbcb;
    border-radius: 5px;
    color: #cbcbcb;
    padding: 0.5rem;
    text-decoration: none;
    margin: 2rem;
    align-self: flex-end;

    :hover{
      /* background-color: rgba(48,48,51,0.93); */
      border-color: #feda4a;
    }
  }
`

export const StyleCredits = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  position: relative;
  height: 100%;
  color: #feda4a;
  font-family: 'Pathway Gothic One', sans-serif;
  font-size: 500%;
  font-weight: 600;
  letter-spacing: 6px;
  line-height: 150%;
  perspective: 400px;
  text-align: center;

  &::before {
    content: '';
    position: absolute;
    pointer-events: none;
    width: 100%;
    min-height: 60vh;
    top: -25px;
    background-image: linear-gradient(0deg, transparent, black 75%);
    z-index: 1;
  }
`

export const StyledCrawl = styled.div`
  position: relative;
  top: 999999px;
  transform-origin: 50% 100%;
  animation: crawl 50s linear;

  && h1 {
    font-size: 90%;
    text-align: center;
    margin: 0 0 100px
  }
  @keyframes crawl {
    0% {
      top: 200px;
      transform: rotateX(20deg)  translateZ(0);
    }
    100% { 
      top: -6000px;
      transform: rotateX(25deg) translateZ(-2500px);
    }
  }
`

export const DeathStarBackgroud = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${deathStar});
  background-position: center center;
  background-size: cover;
  height: 100%;
`
