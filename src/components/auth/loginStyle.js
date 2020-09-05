import styled from 'styled-components'


export const LoginWrapper = styled.div`
.image{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80%;
  background-repeat: no-repeat;
  background-size cover;
  background-position: 50% 100%
}
.formWrapper{
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
.register-link{
  font-size: 1.5em;
  color: black;
  text-decoration: none;
  font-weight: 700;
}
`