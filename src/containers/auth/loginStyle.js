import styled from 'styled-components';

const LoginWrapper = styled.div`
display: grid;
grid-template-columns:  1fr;
height: 95vh;
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
  background-position: 50% 100%;
  position: relative;
}
.status{
  padding: 10px;
  font-size: 1.2em;
  color: #fff;
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

.menu-bar{
  position: relative;
  bottom: 240px;
  right: 360px;
  color: #fff;
  li{
    background: #fff;
    height: 5px;
    width: 30px;
    margin-bottom: 5px;
    cursor: pointer;
  }
}

`;
export default LoginWrapper;
