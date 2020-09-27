import styled from 'styled-components';

const HomePageWrapper = styled.div`
display: grid;
grid-template-columns: 2fr 10fr;
font-family: 'Nunito Sans', sans-serif;
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
    font-family: 'Baloo Tammudu 2', cursive;
    position: absolute;
    left: 205px;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 1.2em;
  }
  h6 {
    color: #cdd1ce;
    font-weight: 400;
    font-size: 0.7em;
    position:relative;
    top: 30px;
    font-size: 0.6em;
    font-weight: 500;
    right: 25px;
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
