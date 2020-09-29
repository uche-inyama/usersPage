import styled from 'styled-components';

export const AppointmentWrapper = styled.ul`
font-family: 'Varela Round', sans-serif;
font-weight: 500;
font-size: 1.0em;
li.appointment-detail{
  display: flex;
  flex-direction: row;
  padding-left: 80px;
  text-align: left;
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
  height: 50px;
}
`;

export const AppointmantsContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 10fr;
`;
