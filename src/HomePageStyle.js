import styled from 'styled-components'

export const HomePageWrapper = styled.div`
display: grid;
grid-template-columns: 1fr;
grid-template-rows: 200px 520px;
grid-gap: 5px;
border: 1px solid gray;
.emptySpace{
  display: grid;
  grid-template-columns: 1fr;
  place-items: center center;
  font-size: 1.5em;
  font-weight: 700;
}
.centerList{
  height: 70%;
}
`