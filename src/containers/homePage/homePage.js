import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HomePageWrapper from './HomePageStyle';
import Slider from '../../components/carousal/Slider';
import { removeUser } from '../../actions/action';
import NavBar from '../../components/navBar/navBar';



const HomePage = ({ centers, currentUser, logOut }) => {
  const user = localStorage.getItem('current_user')
  const renderNavBar = user ? (
    <NavBar
      currentUser={currentUser}
      logOut={logOut}
    />
  ) : ('')

  return (
    <HomePageWrapper className="container">
      {renderNavBar}
      <main>
        <div className="emptySpace">
          <h1>Latest Halls</h1>
        </div>
        <div className="centerList">
          <Slider centers={centers} />
        </div>
        <span>Click on the image for details</span>
      </main>
    </HomePageWrapper>
  )
};

const mapStateToProps = state => ({
  centers: state.centers,
  currentUser: state.currentUser,

});

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: (() => {
      dispatch(removeUser());
    }),
  }
}


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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
