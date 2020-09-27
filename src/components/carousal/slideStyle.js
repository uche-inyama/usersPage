import styled from 'styled-components';

export const StyledItemContainer = styled.div`
  width: 150px;
  height: 30%;
  margin: 0 30px;
  .hall-name{
    text-align: center;
    padding: 20px 0 40px 0;
  }
  .info{
    text-align: center;
  }
`;


export const StyledSocialMediaIcons = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 20px;
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
  }
`
// export default StyledItemContainer;