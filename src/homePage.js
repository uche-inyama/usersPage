import React from 'react';
import CenterCard from './centerCard';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
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
            <Slider centers={centers} />
          </div>
          <span>Click on the image for details</span>
        </main>
      </HomePageWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    centers: state.centers
  }
}
export default connect(mapStateToProps, null)(HomePage);