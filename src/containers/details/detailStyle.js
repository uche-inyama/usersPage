import styled from 'styled-components';

const DetailWrapper = styled.div`
display: grid;
position: relative;
grid-template-columns: 2fr 10fr;
  .top-wrapper{
    display: grid;
    grid-template-columns: 8fr 4fr;
    padding-top: 80px;
    .image-wrapper{
      width: 450px;
    }
    .image{
      background-repeat: no-repeat;
      background-size: cover;
      background-position: 50% 50%;
      height: 100%;
    }
  }
  .DetailsWrapper{
    display: grid;
    grid-template-rows: 480px 100px;
  }
  .item-detail{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-size: 0.8em;
    padding: 15px 5px 15px 5px;
    font-family: 'Roboto', sans-serif;
    margin: 0 5px;
  }
  .head{
    font-family: 'Roboto', sans-serif;
    height: 50px;
    text-align: right;
    margin-bottom: 10px;
    padding-right: 10px;
    h1{
      font-size: 1.5em;
      padding-bottom: 8px;
    }
    h6{
      font-size: 0.7em;
      font-weight: 700;
    }
  }

  li.item-detail:nth-child(odd){
    background-color: #d3d6d2;
  }
  .book-appointment{
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 50px 224px;
    position: relative;
    h2{
      font-family: 'Roboto', sans-serif;
      position: relative;
      left: 120px;
      font-weight: 700;
      cursor: pointer;
      width: 40%;
      text-align: center;
      padding-top: 12px;
      margin-top: 7px;
      :hover{
        color: #8bc238;
        box-shadow: 0 0 11px rgba(33,33,33,.2); 
      }
    }
  }
  form {
    display: none;
    padding-left: 100px;
    position: absolute;
    right: 260px;
    bottom: 150px;
    input{
      font-family: 'Work Sans', sans-serif;
      width: 300px;
      height: 35px;
      margin-bottom: 3px;
    }
    input:last-child{
      width: 304px;
    }
  }

`;

export default DetailWrapper;
