import styled from 'styled-components';

export const StyledCarousal = styled.div`
  inactive{
    display: none;
  }

  .active{
    display: block;
  }
  ul {
    display: flex;
    li{
      width: 95%;
      height: 350px;
      margin: 0 auto;
      .image{
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-size cover;
        background-position: 50% 50%
      }
    }
  }
`

