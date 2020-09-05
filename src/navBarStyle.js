import styled from 'styled-components';


export const NavBarWrapper = styled.div`
nav{
  height: 100%;
  ul{
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 200px 200px 320px;
    grid-gap: 2px;
    justify-content: start;
    height: 100%;
    .logo{
      align-self: center;
      justify-self: center;
      .center, .event{
        font-size: 1.5em;
        font-weight: 700;
      }
    }
    .navigation{
      display: grid;
      grid-template-columns: 1fr;
      text-align: center;
      font-size: 1.2em;  
      .signout{
        border: solid 1px black;
        width: 100px;
        height: 25px;
        margin-left: 10px;
        padding-top: 6px;
      } 
    }
    .social-media-icons{
      padding-bottom: 30px;
      .navEnd{
        display: flex;
        flex-direction: row;
        height: 100%;
        align-items: flex-end;
        li{
          margin-left: 13px;
        }
        div{
          padding: 8px;
        }
      }
    }
  }
}
` ;