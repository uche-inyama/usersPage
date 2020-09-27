import styled from 'styled-components';

export const StyledItemContainer = styled.div`
  width: 150px;
  height: 30%;
  :nth-child(2n){
    margin: 0 10px
  }
  :nth-child(odd){
    margin: 0 40px;
  }
  .hall-name {
    text-align: center;
    padding: 20px 0 40px 0;
  }
  .info {
    text-align: center;
    color: #cdd1ce;
    font-size: 0.8em;
  }
  span {
    position: relative;
  }
`;


export const StyledSocialMediaIcons = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 20px;
  font-family: 'Nunito Sans', sans-serif;
  color: #cdd1ce;

  div {
    width: 25px;
    height: 25px;
    margin: 3px;
    text-align: center;
    border: 1px solid gray;
    border-radius: 50%;
    position: relative;
  }

  svg{
    position: relative;
    top: 4px;
    font-size: 0.8em;
  }
`
// export default StyledItemContainer;