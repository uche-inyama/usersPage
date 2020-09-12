import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HomePageWrapper from './HomePageStyle';
import Slider from '../carousal/Slider';

const HomePage = ({ centers }) => (
  <HomePageWrapper className="container" >
    <div className="emptySpace">
      <h1>Latest Halls</h1>
    </div>
    <main>
      <div className="centerList">
        <Slider centers={centers} />
      </div>
      <span>Click on the image for details</span>
    </main>
  </HomePageWrapper >
);

const mapStateToProps = state => ({
  centers: state.centers,
});

HomePage.propTypes = {
  centers: PropTypes.arrayOf(
    PropTypes.shape({
      building: PropTypes.string.isRequired,
      hall: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      capacity: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default connect(mapStateToProps, null)(HomePage);
