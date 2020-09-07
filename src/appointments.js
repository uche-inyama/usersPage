import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import AppointmentWrapper from './appointmentStyle';

const Appointments = ({ appointments }) => {
  const { id } = useParams();
  // const username = localStorage.getItem('current_user');

  const appointmentPerUser = appointments.filter(ele => id === ele.username);

  return (
    <AppointmentWrapper>
      <h1>Appointment History</h1>
      {appointmentPerUser.map(appointment => (
        <li key={appointment.id} className="appointment-detail">
          <div className="venue">
            Venue:
            {appointment.hall}
            event center, in
            {appointment.city}
          </div>
        </li>
      ))}
    </AppointmentWrapper>
  );
};

Appointments.propTypes = {
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
});

export default connect(mapStateToProps, null)(Appointments);
