import styled from 'styled-components';

const AppointmentWrapper = styled.ul`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: 100px;
justify-items: center;
align-items: center;
font-family: 'Varela Round', sans-serif;
font-weight: 500;
font-size: 1.2em;
border: solid 1px black;
li.appointment-detail{
  display: flex;
  flex-direction: row;
  padding-bottom: 20px;
  text-align: center;
  .venue{
    width: 100%;
    height: 50px;
  }
}
h1{
  padding: 30px;
  font-weight: 700;
  font-size: 1.4em;
}
`;
export default AppointmentWrapper;
