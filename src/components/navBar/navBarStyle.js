import styled from 'styled-components';

const NavBarWrapper = styled.nav`
nav{
  height: 100%;
  border-right: 1px solid #ededed;
  ul{
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 200px 200px 250px;
    grid-gap: 2px;
    justify-content: start;
    height: 100%;
    position: relative;
    .logo{
      align-self: center;
      justify-self: center;
      text-decoration: none;
      text-align: center;
      padding-top: 15px;
      height: 40%;
      width: 125px;
      color: black;
      position: relative;
      bottom: 52px;
      :hover {
        box-shadow: 0 0 11px rgba(33,33,33,.2); 
      }
      .center, .event{
        font-family: 'Italianno', cursive;
        font-size: 2.3em;
        font-weight: 700;
        color: #717370;
      }
    }
    .navigation{
      display: flex;
      flex-direction: column;
      // font-family: 'Work Sans', sans-serif;
      font-family: 'Roboto', sans-serif;
      font-weight: 700;
      grid-template-columns: 1fr;
      grid-gap: 50px;
      text-align: center;
      text-transform: uppercase;
      a{
        text-decoration: none;
        color: black;
        font-size: 0.8em;
        :hover{
          color: #8bc238;
        }
      }
      font-size: 1.2em;  
      height: 50%;
      .signout{
        width: 100px;
        height: 25px;
        margin-left: 10px;
        padding-top: 3px;
        cursor: pointer;
        font-size: 0.8em;
        margin-top: 20px;
        :hover{
          color: #8bc238;
        }
      } 
    }
    .hall-button{
      background-color: #8bc238;
      color: #fff;
      padding: 8px 0 8px 15px;
      font-weight: 700;
      margin: 0 0 20px 10px;
      font-size: 0.8em;
      text-align: left;
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
