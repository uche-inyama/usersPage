import React from 'react';
import CenterCard from './centerCard';
import { connect } from 'react-redux';
import { HomePageWrapper } from './HomePageStyle';
import Slider from './components/carousal/Slider'
const HomePage = ({ centers }) => {
  const current_user = localStorage.getItem('current_user')

  if (current_user) {
    return (
      <HomePageWrapper className="container">
        <div className="emptySpace">
          Latest Halls
        </div>
        <main>
          <div className="centerList">
            {/* <ul>
              {centers.map((center) => {
                return (
                  <CenterCard
                    id={center.id}
                    key={center.id}
                    hallname={center.hall}
                    image={center.image}
                  />
                )
              })}
            </ul> */}
            <Slider centers={centers} />
          </div>
        </main>
      </HomePageWrapper>
    )
  }
  // else {
  // return (
  // <HomePageWrapper className="container">
  //   <main>
  //     <div className="centerList">
  //       <ul>
  //         {centers.map((center) => {
  //           return (
  //             <CenterCard
  //               id={center.id}
  //               key={center.id}
  //               hallname={center.hall}
  //               image={center.image}
  //             />
  //           )
  //         })}
  //       </ul>
  //     </div>
  //   </main>
  // </HomePageWrapper>
  // )
  // }

}

const mapStateToProps = (state) => {
  return {
    centers: state.centers
  }
}
// export default HomePage;
export default connect(mapStateToProps, null)(HomePage);