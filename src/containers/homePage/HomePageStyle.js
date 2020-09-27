import styled from 'styled-components';

const HomePageWrapper = styled.div`
display: grid;
grid-template-columns: 2fr 10fr;
section{
  border-left: 1px solid black;
}
.emptySpace{
  display: grid;
  grid-template-columns: 1fr;
  font-size: 1.5em;
  font-weight: 700;
  place-items: center center;
  position: relative;
  height: 200px;
  margin-bottom: 20px;
  h1{
    position: absolute;
    left: 250px;
    font-family: 'Work Sans', sans-serif;
    text-transform: uppercase;
  }
  h6 {
    position:relative;
    top: 30px;
    font-size: 0.6em;
    font-weight: 500;
    left: 12px;
  }
}
.centerList{
  height: 70%;
}
span{
  font-family: 'Work Sans', sans-serif;
  font-size: 1em;
}
`;
export default HomePageWrapper;
