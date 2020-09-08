import styled from 'styled-components';

const HomePageWrapper = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: 150px 450px;
grid-gap: 5px;
border: 1px solid gray;
.emptySpace{
  display: grid;
  grid-template-columns: 1fr;
  font-size: 1.5em;
  font-weight: 700;
  place-items: center center;
  position: relative;
  h1{
    position: absolute;
    left: 250px;
  }
}
.centerList{
  height: 90%;
}
`;
export default HomePageWrapper;
