import styled from 'styled-components';


export const NavBarWrapper = styled.div`
nav{
  height: 100%;
  ul{
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 200px 200px;
    grid-gap: 2px;
    justify-content: start;
    height: 100%;
    .logo{
      align-self: center;
      justify-self: center;
    }
    .navigation{
      display: grid;
      grid-template-columns: 1fr;
      text-align: center;   
    }
}
` ;