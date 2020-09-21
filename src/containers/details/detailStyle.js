import styled from 'styled-components';

const DetailWrapper = styled.div`
display: grid;
grid-template-columns: 2fr 10fr;
  .top-wrapper{
    display: grid;
    grid-template-columns: 8fr 2fr;
    padding-top: 5px;
    .image-wrapper{
      height: 380px;
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
    grid-template-rows: 380px 274px;
  }
  .item-detail{
    padding: 15px;
    font-family: 'Work Sans', sans-serif;
    margin: 0 5px;
  }

  li.item-detail:nth-child(odd){
    background-color: #d3d6d2;
  }
  .book-appointment{
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 50px 224px;
    h2{
      font-family: 'Work Sans', sans-serif;
      padding: 15px 0 0 100px;
    }
  }
  form {
    padding-left: 100px;
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
