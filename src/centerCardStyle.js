import styled from 'styled-components';

const HallImageWrapper = styled.div`
  .image-wrapper {
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

  .basic-center-info{
    height: 40px;
    padding: 10px;
  }
`;

export default HallImageWrapper;
