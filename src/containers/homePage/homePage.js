import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HomePageWrapper from './HomePageStyle';
import Slider from '../../components/carousal/Slider';
import { removeUser, receiveAppointments, clearAppointments } from '../../actions/action';
import NavBar from '../../components/navBar/navBar';

const HomePage = ({
  centers, currentUser, logOut, loadAppointments, appointments,
}) => {
  useEffect(() => {
    if (appointments.length === 0) {
      loadAppointments();
    }
    // eslint-disable-next-line
  }, []);
  const user = localStorage.getItem('current_user');
  const renderNavBar = user ? (
    <NavBar
      currentUser={currentUser}
      logOut={logOut}
    />
  ) : ('');

  return (
    <HomePageWrapper className="container">
      {renderNavBar}
      <section>
        <header className="emptySpace">
          <h1>latest halls</h1>
          <h6>Please select an Event Center</h6>
        </header>
        <main className="centerList">
          <Slider centers={centers} />
        </main>
      </section>
    </HomePageWrapper>
  );
};

const mapStateToProps = state => ({
  centers: state.centers,
  currentUser: state.currentUser,
  appointments: state.appointmentBookings,
});

const mapDispatchToProps = dispatch => {
  const userId = localStorage.getItem('user_id');
  return {
    logOut: (() => {
      dispatch(removeUser());
      dispatch(clearAppointments());
    }),
    loadAppointments: (() => {
      dispatch(receiveAppointments(userId));
    }),
  };
};

HomePage.propTypes = {
  currentUser: PropTypes.string.isRequired,
  logOut: PropTypes.func.isRequired,
  loadAppointments: PropTypes.func.isRequired,
  appointments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      hall: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    }),
  ).isRequired,
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
