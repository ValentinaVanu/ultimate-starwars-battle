import styled from 'styled-components'


export const StyledFightWrapper = styled.div`
  display: grid;
  height: 100%;
  margin: 1rem;
  margin-left: 8rem;
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
