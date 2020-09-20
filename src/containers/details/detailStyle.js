import styled from 'styled-components';

const DetailWrapper = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: 400px 350px;
grid-gap: 5px;
  .top-wrapper{
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 300px 100px;
    border: solid gray 1px;
    .image-wrapper {
      width: 98%;
      height: 300px;
      margin: 5px auto;
      .image{
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-size cover;
        background-position: 50% 50%
      }
    }
    .details {
      ul{
        display: flex;
        padding-top: 20px;
        li{
          padding: 2px;
          border: solid 1px #000;
          border-raduis: 5px;
          margin-right: 5px;
          margin-left: 8px
        }
      }
    }
  }
  .book-appointment{
    border: solid gray 1px;
    display: grid;
    padding-left: 100px;
    form input {
      height: 30px;
      width: 300px;
      margin-bottom: 10px;
      font-size: 1em;

    }
    h2{
      padding: 20px 0;
      font-size: 1.2em;
      font-weight: 700;
    }
  } 
`;

export default DetailWrapper;
