import styled from 'styled-components';

export const AppointmentWrapper = styled.ul`
font-family: 'Varela Round', sans-serif;
font-weight: 500;
font-size: 1.2em;
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
  text-align: center;
  padding: 30px 0;
  font-weight: 700;
  font-size: 1.4em;
}
`;

export const AppointmantsContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 10fr;
`