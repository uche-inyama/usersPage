import styled from 'styled-components';

const RegistrationWrapper = styled.div`
display: grid;
grid-template-columns:  1fr;
height: 100vh;
width: 100%;
.image{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size cover;
  background-position: 50% 100%
}
  .registerationWrapper{
    padding: 20px;
    background-color: gray;
  }
  form {
    .field{
      width: 200px;
      height: 25px;
      margin-right: 5px;
    }
    .submit{
      width: 100px;
      height: 30px;
      font-size: 1em;
    }
  }
  .loginLink{
    font-size: 1.5em;
    color: black;
    text-decoration: none;
    font-weight: 700;
  }
`;

export default RegistrationWrapper;
