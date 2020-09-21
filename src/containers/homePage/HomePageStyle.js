import styled from 'styled-components';

const HomePageWrapper = styled.div`
display: grid;
grid-template-columns: 2fr 10fr;
main{
  border-left: 1px solid black;
}
.emptySpace{
  display: grid;
  grid-template-columns: 1fr;
  font-size: 1.5em;
  font-weight: 700;
  place-items: center center;
  position: relative;
  height: 150px;
  h1{
    position: absolute;
    left: 250px;
  }
}
.centerList{
  height: 70%;
}
`;
export default HomePageWrapper;
