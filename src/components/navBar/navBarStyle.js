import styled from 'styled-components';

const NavBarWrapper = styled.div`
nav{
  border: solid 1px black;
  height: 100%;
  ul{
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 200px 200px 250px;
    grid-gap: 2px;
    justify-content: start;
    height: 100%;
    .logo{
      align-self: center;
      justify-self: center;
      text-decoration: none;
      color: black;
      .center, .event{
        font-size: 1.5em;
        font-weight: 700;
      }
    }
    .navigation{
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 50px;
      text-align: center;
      a{
        text-decoration: none;
        color: black;
      }
      font-size: 1.2em;  
      height: 50%;
      .signout{
        border: solid 1px black;
        width: 100px;
        height: 25px;
        margin-left: 10px;
        padding-top: 6px;
        cursor: pointer;
      } 
    }
    .social-media-icons{
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
`;

export default NavBarWrapper;
