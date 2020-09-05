import styled from 'styled-components'


export const DetailWrapper = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: 400px 250px;
grid-gap: 5px;
  .top-wrapper{
    display: grid;
    grid-template-columns: 6fr 1.5fr;
    .image-wrapper {
      width: 100%;
      height: 300px;
      padding-top: 100px;
      .image{
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-size cover;
        background-position: 50% 50%
      }
      
    }
    .details ul{
      height: 75%;
      padding: 100px 5px 0 5px;
    }
  }
  .book-appointment{
    display: grid;
    padding-left: 100px;
    // justify-content: center;
    form input {
      height: 30px;
      width: 300px;
      margin-bottom: 10px;
    }
    h2{
      padding: 20px 0;
    }
  } 
` 