import React from 'react';
import { connect } from 'react-redux';
import HomePageWrapper from './HomePageStyle';
import Slider from './components/carousal/Slider';

const HomePage = ({ centers }) => {
  const currentUser = localStorage.getItem('current_user');

  if (currentUser) {
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
    );
  }
};

const mapStateToProps = state => ({
  centers: state.centers,
});
export default connect(mapStateToProps, null)(HomePage);
