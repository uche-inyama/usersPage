import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { removeUser } from '../../actions/action';
import { AppointmentWrapper, AppointmantsContainer } from './appointmentStyle';
import NavBar from '../../components/navBar/navBar';

const Appointments = ({ appointments, logOut, currentUser }) => {
  const { id } = useParams();
  const appointmentPerUser = appointments.filter(ele => id === ele.username);
  const user = localStorage.getItem('current_user');

  const renderNavBar = user ? (
    <NavBar
      currentUser={currentUser}
      logOut={logOut}
    />
  ) : ('');

  return (
    <AppointmantsContainer>
      {renderNavBar}
      <AppointmentWrapper>
        <h1>Appointment History</h1>
        {appointmentPerUser.map(appointment => (
          <li key={appointment.id} className="appointment-detail">
            <div className="venue">
              Venue:
              {' '}
              {appointment.hall}
              {' '}
              event center, in
              {' '}
              {appointment.city}
              .
              {' '}
              Date:
              {' '}
              {appointment.date}
            </div>
          </li>
        ))}
      </AppointmentWrapper>
    </AppointmantsContainer>
  );
};

Appointments.propTypes = {
  logOut: PropTypes.func.isRequired,
  currentUser: PropTypes.string.isRequired,
  appointments: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string.isRequired,
      hall: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const mapStateToProps = state => ({
  appointments: state.appointmentBookings,
  currentUser: state.currentUser,
});
const mapDispatchToProps = dispatch => ({
  logOut: (() => {
    dispatch(removeUser());
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Appointments);
