import styled from 'styled-components';

const NavBarWrapper = styled.div`
nav{
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
      height: 100%;
      color: black;
      .center, .event{
        font-family: 'Italianno', cursive;
        font-size: 2.3em;
        font-weight: 700;
        color: #717370;
      }
    }
    .navigation{
      display: grid;
      font-family: 'Work Sans', sans-serif;
      font-weight: 700;
      grid-template-columns: 1fr;
      grid-gap: 50px;
      text-align: center;
      text-transform: uppercase;
      a{
        text-decoration: none;
        color: black;
        font-size: 0.8em;
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
        font-size: 0.8em;
      } 
    }
    .hall-button{
      background-color: #48f542;
      color: #fff;
      padding: 5px;
      font-weight: 700;
      margin-left: 10px;
      font-size: 0.8em;
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
